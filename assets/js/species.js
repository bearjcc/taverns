/**
 * Species Class - Handles individual species data and operations
 * Separates species logic from UI and game engine concerns
 */
class Species {
    constructor(speciesData) {
        this.id = speciesData.id || '';
        this.name = speciesData.name || '';
        this.description = speciesData.description || '';
        this.attributes = speciesData.attributes || {};
        this.bonuses = speciesData.bonuses || {};
        this.professions = speciesData.professions || [];
        this.playable = speciesData.playable || false;
    }

    /**
     * Generate random attributes within the species' min/max ranges
     * @returns {Object} Generated attributes object
     */
    generateAttributes() {
        const generatedAttributes = {};

        for (const [attributeName, range] of Object.entries(this.attributes)) {
            if (range && typeof range.min === 'number' && typeof range.max === 'number') {
                generatedAttributes[attributeName] = this.getRandomValue(range.min, range.max);
            }
        }

        return generatedAttributes;
    }

    /**
     * Get a random value between min and max (inclusive)
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {number} Random value
     */
    getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Validate if given attributes are within this species' ranges
     * @param {Object} attributes - Attributes to validate
     * @returns {Object} Validation result with isValid and errors
     */
    validateAttributes(attributes) {
        const errors = [];

        for (const [attributeName, value] of Object.entries(attributes)) {
            const range = this.attributes[attributeName];
            if (range) {
                if (value < range.min || value > range.max) {
                    errors.push(`${attributeName} must be between ${range.min} and ${range.max}`);
                }
            }
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Get attribute range for a specific attribute
     * @param {string} attributeName - Name of the attribute
     * @returns {Object|null} Range object with min/max or null if not found
     */
    getAttributeRange(attributeName) {
        return this.attributes[attributeName] || null;
    }

    /**
     * Get all available attributes for this species
     * @returns {Array} Array of attribute names
     */
    getAvailableAttributes() {
        return Object.keys(this.attributes);
    }

    /**
     * Get bonus value for a specific bonus type
     * @param {string} bonusType - Type of bonus (luck, survival, combat)
     * @returns {number} Bonus value
     */
    getBonus(bonusType) {
        return this.bonuses[bonusType] || 0;
    }

    /**
     * Get all bonuses for this species
     * @returns {Object} All bonuses object
     */
    getAllBonuses() {
        return { ...this.bonuses };
    }

    /**
     * Check if this species has a specific profession
     * @param {string} profession - Profession to check
     * @returns {boolean} True if species has this profession
     */
    hasProfession(profession) {
        return this.professions.includes(profession);
    }

    /**
     * Get all professions for this species
     * @returns {Array} Array of profession names
     */
    getProfessions() {
        return [...this.professions];
    }

    /**
     * Check if this species is playable
     * @returns {boolean} True if species is playable
     */
    isPlayable() {
        return this.playable;
    }

    /**
     * Get species data as a plain object
     * @returns {Object} Species data object
     */
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            attributes: this.attributes,
            bonuses: this.bonuses,
            professions: this.professions,
            playable: this.playable
        };
    }

    /**
     * Create a Species instance from JSON data
     * @param {Object} jsonData - JSON data for the species
     * @returns {Species} New Species instance
     */
    static fromJSON(jsonData) {
        return new Species(jsonData);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Species;
} 