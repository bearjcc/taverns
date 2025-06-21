/**
 * Species System
 * 
 * Manages all species-related functionality including species data,
 * attributes, bonuses, and species operations.
 */

class Species {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.type = data.type || 'playable';
        this.attributes = data.attributes || {};
        this.bonuses = data.bonuses || {};
        this.professions = data.professions || [];
        this.traits = data.traits || [];
        this.image = data.image;
        this.icon = data.icon;
    }

    /**
     * Get an attribute value
     * @param {string} attributeName - Name of the attribute
     * @returns {number} Attribute value
     */
    getAttribute(attributeName) {
        return this.attributes[attributeName] || 0;
    }

    /**
     * Get attribute range (min/max)
     * @param {string} attributeName - Name of the attribute
     * @returns {Object|null} Range object or null if not found
     */
    getAttributeRange(attributeName) {
        const attr = this.attributes[attributeName];
        if (typeof attr === 'object' && attr.min !== undefined && attr.max !== undefined) {
            return { min: attr.min, max: attr.max };
        }
        return null;
    }

    /**
     * Get a bonus value
     * @param {string} bonusType - Type of bonus
     * @returns {number} Bonus value
     */
    getBonus(bonusType) {
        return this.bonuses[bonusType] || 0;
    }

    /**
     * Check if species has a specific profession
     * @param {string} profession - Profession to check
     * @returns {boolean} Whether species has the profession
     */
    hasProfession(profession) {
        return this.professions.includes(profession);
    }

    /**
     * Check if species has a specific trait
     * @param {string} trait - Trait to check
     * @returns {boolean} Whether species has the trait
     */
    hasTrait(trait) {
        return this.traits.includes(trait);
    }

    /**
     * Get all attributes as an object
     * @returns {Object} All attributes
     */
    getAllAttributes() {
        return { ...this.attributes };
    }

    /**
     * Get all bonuses as an object
     * @returns {Object} All bonuses
     */
    getAllBonuses() {
        return { ...this.bonuses };
    }

    /**
     * Get all professions
     * @returns {Array} Array of professions
     */
    getAllProfessions() {
        return [...this.professions];
    }

    /**
     * Get all traits
     * @returns {Array} Array of traits
     */
    getAllTraits() {
        return [...this.traits];
    }

    /**
     * Check if species is playable
     * @returns {boolean} Whether species is playable
     */
    isPlayable() {
        return this.type === 'playable';
    }

    /**
     * Get species statistics
     * @returns {Object} Species statistics
     */
    getStats() {
        const totalAttributes = Object.values(this.attributes)
            .reduce((sum, attr) => {
                if (typeof attr === 'number') return sum + attr;
                if (typeof attr === 'object' && attr.min !== undefined) return sum + attr.min;
                return sum;
            }, 0);

        return {
            id: this.id,
            name: this.name,
            type: this.type,
            attributesCount: Object.keys(this.attributes).length,
            bonusesCount: Object.keys(this.bonuses).length,
            professionsCount: this.professions.length,
            traitsCount: this.traits.length,
            totalAttributes,
            isPlayable: this.isPlayable()
        };
    }
}

class SpeciesSystem {
    constructor(speciesConfig, stateManager, eventSystem) {
        this.speciesConfig = speciesConfig;
        this.stateManager = stateManager;
        this.eventSystem = eventSystem;
        
        this.species = new Map();
        this.playableSpecies = new Map();
        this.nonPlayableSpecies = new Map();
        this.isLoaded = false;
        
        // Bind methods to maintain context
        this.getSpecies = this.getSpecies.bind(this);
        this.getPlayableSpecies = this.getPlayableSpecies.bind(this);
    }
    
    /**
     * Initialize the species system
     */
    async initialize() {
        try {
            console.log('Initializing species system...');
            
            // Load species from configuration
            await this.loadSpeciesData();
            
            // Set up event listeners
            this._setupEventListeners();
            
            console.log('Species system initialized successfully');
            this.eventSystem.emit('speciesSystem:initialized', { 
                totalSpecies: this.species.size,
                playableSpecies: this.playableSpecies.size,
                nonPlayableSpecies: this.nonPlayableSpecies.size
            });
            
        } catch (error) {
            console.error('Failed to initialize species system:', error);
            this.eventSystem.emit('speciesSystem:initError', { error });
            throw error;
        }
    }
    
    /**
     * Load species data from configuration
     * @param {string} dataPath - Path to species data file
     * @returns {Promise<boolean>} True if loading successful
     */
    async loadSpeciesData(dataPath = null) {
        try {
            const path = dataPath || this.speciesConfig || '../data/species.json';
            
            // If path is provided as a string, load from file
            if (typeof path === 'string') {
                const response = await fetch(path);
                if (!response.ok) {
                    throw new Error(`Failed to load species data: ${response.status}`);
                }
                
                const speciesData = await response.json();
                this.processSpeciesData(speciesData);
            } else if (typeof path === 'object') {
                // If path is an object, use it directly
                this.processSpeciesData(path);
            } else {
                throw new Error('Invalid species configuration');
            }
            
            this.isLoaded = true;
            console.log(`Loaded ${this.species.size} species (${this.playableSpecies.size} playable)`);
            
            return true;
        } catch (error) {
            console.error('Error loading species data:', error);
            this.isLoaded = false;
            throw error;
        }
    }
    
    /**
     * Process loaded species data and create Species instances
     * @param {Object} speciesData - Raw species data from JSON
     */
    processSpeciesData(speciesData) {
        this.species.clear();
        this.playableSpecies.clear();
        this.nonPlayableSpecies.clear();

        // Process playable species
        if (speciesData.playable) {
            for (const [id, data] of Object.entries(speciesData.playable)) {
                const species = new Species({ id, ...data });
                this.species.set(id, species);
                this.playableSpecies.set(id, species);
            }
        }

        // Process non-playable species
        if (speciesData.non_playable) {
            for (const [id, data] of Object.entries(speciesData.non_playable)) {
                const species = new Species({ id, ...data });
                this.species.set(id, species);
                this.nonPlayableSpecies.set(id, species);
            }
        }
    }
    
    /**
     * Get a species by ID
     * @param {string} speciesId - ID of the species
     * @returns {Species|null} Species instance or null if not found
     */
    getSpecies(speciesId) {
        return this.species.get(speciesId) || null;
    }
    
    /**
     * Get a species by name (case-insensitive)
     * @param {string} speciesName - Name of the species
     * @returns {Species|null} Species instance or null if not found
     */
    getSpeciesByName(speciesName) {
        const normalizedName = speciesName.toLowerCase();
        for (const species of this.species.values()) {
            if (species.name.toLowerCase() === normalizedName) {
                return species;
            }
        }
        return null;
    }
    
    /**
     * Get all species
     * @returns {Array<Species>} Array of all species
     */
    getAllSpecies() {
        return Array.from(this.species.values());
    }
    
    /**
     * Get all playable species
     * @returns {Array<Species>} Array of playable species
     */
    getPlayableSpecies() {
        return Array.from(this.playableSpecies.values());
    }
    
    /**
     * Get all non-playable species
     * @returns {Array<Species>} Array of non-playable species
     */
    getNonPlayableSpecies() {
        return Array.from(this.nonPlayableSpecies.values());
    }
    
    /**
     * Get species that have a specific profession
     * @param {string} profession - Profession to search for
     * @returns {Array<Species>} Array of species with the profession
     */
    getSpeciesByProfession(profession) {
        return this.getAllSpecies().filter(species => 
            species.hasProfession(profession)
        );
    }
    
    /**
     * Get species within a specific attribute range
     * @param {string} attributeName - Name of the attribute
     * @param {number} minValue - Minimum value
     * @param {number} maxValue - Maximum value
     * @returns {Array<Species>} Array of species within the range
     */
    getSpeciesByAttributeRange(attributeName, minValue, maxValue) {
        return this.getAllSpecies().filter(species => {
            const range = species.getAttributeRange(attributeName);
            if (!range) return false;
            
            return range.min >= minValue && range.max <= maxValue;
        });
    }
    
    /**
     * Get species with a specific bonus
     * @param {string} bonusType - Type of bonus
     * @param {number} minValue - Minimum bonus value
     * @returns {Array<Species>} Array of species with the bonus
     */
    getSpeciesByBonus(bonusType, minValue = 0) {
        return this.getAllSpecies().filter(species => 
            species.getBonus(bonusType) >= minValue
        );
    }
    
    /**
     * Generate a random playable species
     * @returns {Species|null} Random playable species or null if none available
     */
    getRandomPlayableSpecies() {
        const playableSpecies = this.getPlayableSpecies();
        if (playableSpecies.length === 0) return null;
        
        const randomIndex = Math.floor(Math.random() * playableSpecies.length);
        return playableSpecies[randomIndex];
    }
    
    /**
     * Generate a random non-playable species
     * @returns {Species|null} Random non-playable species or null if none available
     */
    getRandomNonPlayableSpecies() {
        const nonPlayableSpecies = this.getNonPlayableSpecies();
        if (nonPlayableSpecies.length === 0) return null;
        
        const randomIndex = Math.floor(Math.random() * nonPlayableSpecies.length);
        return nonPlayableSpecies[randomIndex];
    }
    
    /**
     * Search species by name (partial match)
     * @param {string} searchTerm - Search term
     * @returns {Array<Species>} Array of matching species
     */
    searchSpecies(searchTerm) {
        const normalizedTerm = searchTerm.toLowerCase();
        return this.getAllSpecies().filter(species => 
            species.name.toLowerCase().includes(normalizedTerm) ||
            species.description.toLowerCase().includes(normalizedTerm)
        );
    }
    
    /**
     * Get all unique professions across all species
     * @returns {Array<string>} Array of unique professions
     */
    getAllProfessions() {
        const professions = new Set();
        this.getAllSpecies().forEach(species => {
            species.getAllProfessions().forEach(profession => {
                professions.add(profession);
            });
        });
        return Array.from(professions);
    }
    
    /**
     * Get all unique attributes across all species
     * @returns {Array<string>} Array of unique attributes
     */
    getAllAttributes() {
        const attributes = new Set();
        this.getAllSpecies().forEach(species => {
            Object.keys(species.getAllAttributes()).forEach(attribute => {
                attributes.add(attribute);
            });
        });
        return Array.from(attributes);
    }
    
    /**
     * Check if species data is loaded
     * @returns {boolean} True if species data is loaded
     */
    isDataLoaded() {
        return this.isLoaded;
    }
    
    /**
     * Get species system statistics
     * @returns {Object} Statistics object
     */
    getStats() {
        return {
            total: this.species.size,
            playable: this.playableSpecies.size,
            nonPlayable: this.nonPlayableSpecies.size,
            loaded: this.isLoaded,
            professions: this.getAllProfessions().length,
            attributes: this.getAllAttributes().length
        };
    }
    
    /**
     * Set up event listeners
     */
    _setupEventListeners() {
        // Listen for species-related events
        this.eventSystem.on('species:selected', (data) => {
            // Handle species selection
        });
        
        this.eventSystem.on('species:created', (data) => {
            // Handle species creation
        });
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Species, SpeciesSystem };
} 