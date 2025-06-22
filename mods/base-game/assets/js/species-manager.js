/**
 * SpeciesManager Class - Manages all species data and operations
 * Separates species management logic from UI and game engine concerns
 */
class SpeciesManager {
    constructor() {
        this.species = new Map();
        this.playableSpecies = new Map();
        this.nonPlayableSpecies = new Map();
        this.isLoaded = false;
    }

    /**
     * Load species data from JSON file
     * @param {string} dataPath - Path to species data file
     * @returns {Promise<boolean>} True if loading successful
     */
    async loadSpeciesData(dataPath = '../data/species.json') {
        try {
            const response = await fetch(dataPath);
            if (!response.ok) {
                throw new Error(`Failed to load species data: ${response.status}`);
            }
            
            const speciesData = await response.json();
            this.processSpeciesData(speciesData);
            this.isLoaded = true;
            
            console.log(`Loaded ${this.species.size} species (${this.playableSpecies.size} playable)`);
            return true;
        } catch (error) {
            console.error('Error loading species data:', error);
            this.isLoaded = false;
            return false;
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
     * Check if species data is loaded
     * @returns {boolean} True if species data is loaded
     */
    isDataLoaded() {
        return this.isLoaded;
    }

    /**
     * Get species count statistics
     * @returns {Object} Statistics object
     */
    getStatistics() {
        return {
            total: this.species.size,
            playable: this.playableSpecies.size,
            nonPlayable: this.nonPlayableSpecies.size,
            loaded: this.isLoaded
        };
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
     * @returns {Array<string>} Array of unique profession names
     */
    getAllProfessions() {
        const professions = new Set();
        this.getAllSpecies().forEach(species => {
            species.getProfessions().forEach(profession => {
                professions.add(profession);
            });
        });
        return Array.from(professions).sort();
    }

    /**
     * Get all unique attributes across all species
     * @returns {Array<string>} Array of unique attribute names
     */
    getAllAttributes() {
        const attributes = new Set();
        this.getAllSpecies().forEach(species => {
            species.getAvailableAttributes().forEach(attribute => {
                attributes.add(attribute);
            });
        });
        return Array.from(attributes).sort();
    }

    /**
     * Validate all species data
     * @returns {Object} Validation result with isValid and errors
     */
    validateAllSpecies() {
        const errors = [];
        
        for (const species of this.species.values()) {
            // Check for required fields
            if (!species.name) {
                errors.push(`Species ${species.id} missing name`);
            }
            if (!species.description) {
                errors.push(`Species ${species.id} missing description`);
            }
            
            // Check attribute ranges
            for (const [attributeName, range] of Object.entries(species.attributes)) {
                if (range.min > range.max) {
                    errors.push(`Species ${species.id} has invalid ${attributeName} range: ${range.min} > ${range.max}`);
                }
            }
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpeciesManager;
} 