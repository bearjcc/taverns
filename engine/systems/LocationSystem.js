/**
 * Location System
 * 
 * Manages the hierarchical location structure:
 * Globe → Continents → Countries → Regions → Spots
 * 
 * Handles player location tracking and spot-based action availability.
 */

class LocationSystem {
    constructor(locationData, stateManager, eventSystem) {
        this.locationData = locationData || {};
        this.stateManager = stateManager;
        this.eventSystem = eventSystem;
        
        // Current player location
        this.currentLocation = {
            globe: null,
            continent: null,
            country: null,
            region: null,
            spot: null
        };
        
        // Location hierarchy cache
        this.locationHierarchy = new Map();
        
        // Spot actions cache
        this.spotActions = new Map();
        
        this._buildLocationHierarchy();
    }
    
    /**
     * Initialize the location system
     */
    async initialize() {
        try {
            console.log('Initializing LocationSystem...');
            
            // Load saved location state
            this._loadLocationState();
            
            // Set default location if none exists
            if (!this.currentLocation.spot) {
                this._setDefaultLocation();
            }
            
            // Build spot actions cache
            this._buildSpotActionsCache();
            
            console.log('LocationSystem initialized successfully');
            this.eventSystem.emit('location:initialized', this.currentLocation);
            
        } catch (error) {
            console.error('Error initializing LocationSystem:', error);
            throw error;
        }
    }
    
    /**
     * Get current player location
     * @returns {Object} Current location object
     */
    getCurrentLocation() {
        return { ...this.currentLocation };
    }
    
    /**
     * Get current spot
     * @returns {Object|null} Current spot data
     */
    getCurrentSpot() {
        if (!this.currentLocation.spot) return null;
        
        const spotPath = this._buildSpotPath();
        return this._getSpotByPath(spotPath);
    }
    
    /**
     * Get available actions for current spot
     * @returns {Array} Array of available action names
     */
    getAvailableActions() {
        const currentSpot = this.getCurrentSpot();
        if (!currentSpot || !currentSpot.actions) {
            return [];
        }
        
        return [...currentSpot.actions];
    }
    
    /**
     * Move player to a new spot
     * @param {string} spotId - The spot ID to move to
     * @returns {boolean} Success status
     */
    moveToSpot(spotId) {
        try {
            const newSpot = this._findSpotById(spotId);
            if (!newSpot) {
                console.error(`Spot not found: ${spotId}`);
                return false;
            }
            
            // Update current location
            const oldLocation = { ...this.currentLocation };
            this._updateLocationFromSpot(newSpot);
            
            // Save state
            this._saveLocationState();
            
            // Emit location change event
            this.eventSystem.emit('location:changed', {
                from: oldLocation,
                to: this.currentLocation,
                spot: newSpot
            });
            
            console.log(`Moved to spot: ${spotId}`);
            return true;
            
        } catch (error) {
            console.error('Error moving to spot:', error);
            return false;
        }
    }
    
    /**
     * Get all available spots from current location
     * @returns {Array} Array of available spots
     */
    getAvailableSpots() {
        const currentSpot = this.getCurrentSpot();
        if (!currentSpot || !currentSpot.connections) {
            return [];
        }
        
        return currentSpot.connections.map(connection => {
            const connectedSpot = this._findSpotById(connection.spotId);
            return {
                id: connection.spotId,
                name: connectedSpot?.name || connection.spotId,
                description: connectedSpot?.description || '',
                travelTime: connection.travelTime || 0,
                travelCost: connection.travelCost || {},
                requirements: connection.requirements || {}
            };
        });
    }
    
    /**
     * Get location hierarchy for a specific path
     * @param {string} path - Location path (e.g., "globe.continent.country")
     * @returns {Object} Location hierarchy data
     */
    getLocationHierarchy(path = null) {
        if (!path) {
            return this._getFullHierarchy();
        }
        
        const pathParts = path.split('.');
        let current = this.locationData;
        
        for (const part of pathParts) {
            if (current && current[part]) {
                current = current[part];
            } else {
                return null;
            }
        }
        
        return current;
    }
    
    /**
     * Get spot by full path
     * @param {string} spotPath - Full spot path
     * @returns {Object|null} Spot data
     */
    getSpotByPath(spotPath) {
        return this._getSpotByPath(spotPath);
    }
    
    /**
     * Check if player can travel to a spot
     * @param {string} spotId - Target spot ID
     * @param {Object} playerState - Current player state (skills, inventory, etc.)
     * @returns {Object} Travel check result
     */
    canTravelToSpot(spotId, playerState) {
        const currentSpot = this.getCurrentSpot();
        if (!currentSpot || !currentSpot.connections) {
            return { canTravel: false, reason: 'No connections available' };
        }
        
        const connection = currentSpot.connections.find(conn => conn.spotId === spotId);
        if (!connection) {
            return { canTravel: false, reason: 'Spot not connected' };
        }
        
        // Check requirements
        if (connection.requirements) {
            const requirementCheck = this._checkRequirements(connection.requirements, playerState);
            if (!requirementCheck.met) {
                return { canTravel: false, reason: requirementCheck.reason };
            }
        }
        
        // Check travel costs
        if (connection.travelCost) {
            const costCheck = this._checkTravelCost(connection.travelCost, playerState);
            if (!costCheck.canAfford) {
                return { canTravel: false, reason: costCheck.reason };
            }
        }
        
        return { canTravel: true };
    }
    
    // Private methods
    
    _buildLocationHierarchy() {
        this.locationHierarchy.clear();
        
        for (const [globeId, globeData] of Object.entries(this.locationData)) {
            this.locationHierarchy.set(globeId, {
                type: 'globe',
                data: globeData,
                children: new Map()
            });
            
            if (globeData.continents) {
                for (const [continentId, continentData] of Object.entries(globeData.continents)) {
                    this.locationHierarchy.get(globeId).children.set(continentId, {
                        type: 'continent',
                        data: continentData,
                        children: new Map()
                    });
                    
                    if (continentData.countries) {
                        for (const [countryId, countryData] of Object.entries(continentData.countries)) {
                            this.locationHierarchy.get(globeId).children.get(continentId).children.set(countryId, {
                                type: 'country',
                                data: countryData,
                                children: new Map()
                            });
                            
                            if (countryData.regions) {
                                for (const [regionId, regionData] of Object.entries(countryData.regions)) {
                                    this.locationHierarchy.get(globeId).children.get(continentId).children.get(countryId).children.set(regionId, {
                                        type: 'region',
                                        data: regionData,
                                        children: new Map()
                                    });
                                    
                                    if (regionData.spots) {
                                        for (const [spotId, spotData] of Object.entries(regionData.spots)) {
                                            this.locationHierarchy.get(globeId).children.get(continentId).children.get(countryId).children.get(regionId).children.set(spotId, {
                                                type: 'spot',
                                                data: spotData
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    _buildSpotActionsCache() {
        this.spotActions.clear();
        
        // Traverse all spots and cache their actions
        for (const [globeId, globeData] of Object.entries(this.locationData)) {
            if (globeData.continents) {
                for (const [continentId, continentData] of Object.entries(globeData.continents)) {
                    if (continentData.countries) {
                        for (const [countryId, countryData] of Object.entries(continentData.countries)) {
                            if (countryData.regions) {
                                for (const [regionId, regionData] of Object.entries(countryData.regions)) {
                                    if (regionData.spots) {
                                        for (const [spotId, spotData] of Object.entries(regionData.spots)) {
                                            const spotPath = `${globeId}.${continentId}.${countryId}.${regionId}.${spotId}`;
                                            this.spotActions.set(spotPath, spotData.actions || []);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    _loadLocationState() {
        const savedLocation = this.stateManager.getState('location');
        if (savedLocation) {
            this.currentLocation = { ...savedLocation };
        }
    }
    
    _saveLocationState() {
        this.stateManager.setState('location', this.currentLocation);
    }
    
    _setDefaultLocation() {
        // Find the first available spot as default
        for (const [globeId, globeData] of Object.entries(this.locationData)) {
            if (globeData.continents) {
                for (const [continentId, continentData] of Object.entries(globeData.continents)) {
                    if (continentData.countries) {
                        for (const [countryId, countryData] of Object.entries(continentData.countries)) {
                            if (countryData.regions) {
                                for (const [regionId, regionData] of Object.entries(countryData.regions)) {
                                    if (regionData.spots) {
                                        for (const [spotId, spotData] of Object.entries(regionData.spots)) {
                                            this.currentLocation = {
                                                globe: globeId,
                                                continent: continentId,
                                                country: countryId,
                                                region: regionId,
                                                spot: spotId
                                            };
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    _updateLocationFromSpot(spotData) {
        // Extract location hierarchy from spot data
        const pathParts = spotData.path?.split('.') || [];
        if (pathParts.length >= 5) {
            this.currentLocation = {
                globe: pathParts[0],
                continent: pathParts[1],
                country: pathParts[2],
                region: pathParts[3],
                spot: pathParts[4]
            };
        }
    }
    
    _buildSpotPath() {
        const { globe, continent, country, region, spot } = this.currentLocation;
        return `${globe}.${continent}.${country}.${region}.${spot}`;
    }
    
    _getSpotByPath(spotPath) {
        const pathParts = spotPath.split('.');
        if (pathParts.length !== 5) return null;
        
        const [globeId, continentId, countryId, regionId, spotId] = pathParts;
        
        try {
            return this.locationData[globeId]?.continents[continentId]?.countries[countryId]?.regions[regionId]?.spots[spotId] || null;
        } catch (error) {
            return null;
        }
    }
    
    _findSpotById(spotId) {
        // Search through all spots to find by ID
        for (const [globeId, globeData] of Object.entries(this.locationData)) {
            if (globeData.continents) {
                for (const [continentId, continentData] of Object.entries(globeData.continents)) {
                    if (continentData.countries) {
                        for (const [countryId, countryData] of Object.entries(continentData.countries)) {
                            if (countryData.regions) {
                                for (const [regionId, regionData] of Object.entries(countryData.regions)) {
                                    if (regionData.spots) {
                                        for (const [id, spotData] of Object.entries(regionData.spots)) {
                                            if (id === spotId) {
                                                return {
                                                    ...spotData,
                                                    path: `${globeId}.${continentId}.${countryId}.${regionId}.${id}`
                                                };
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null;
    }
    
    _getFullHierarchy() {
        return this.locationData;
    }
    
    _checkRequirements(requirements, playerState) {
        // Check skill requirements
        if (requirements.skills) {
            for (const [skillName, requiredLevel] of Object.entries(requirements.skills)) {
                const playerSkill = playerState.skills?.[skillName];
                if (!playerSkill || playerSkill.level < requiredLevel) {
                    return {
                        met: false,
                        reason: `Requires ${skillName} level ${requiredLevel}`
                    };
                }
            }
        }
        
        // Check item requirements
        if (requirements.items) {
            for (const [itemId, requiredQuantity] of Object.entries(requirements.items)) {
                const playerItem = playerState.inventory?.[itemId];
                if (!playerItem || playerItem.quantity < requiredQuantity) {
                    return {
                        met: false,
                        reason: `Requires ${itemId} x${requiredQuantity}`
                    };
                }
            }
        }
        
        return { met: true };
    }
    
    _checkTravelCost(travelCost, playerState) {
        // Check item costs
        if (travelCost.items) {
            for (const [itemId, requiredQuantity] of Object.entries(travelCost.items)) {
                const playerItem = playerState.inventory?.[itemId];
                if (!playerItem || playerItem.quantity < requiredQuantity) {
                    return {
                        canAfford: false,
                        reason: `Need ${itemId} x${requiredQuantity}`
                    };
                }
            }
        }
        
        return { canAfford: true };
    }
} 