/**
 * SpeciesUI Class - Handles all species-related UI operations
 * Separates UI logic from data and engine concerns
 */
class SpeciesUI {
    constructor(speciesManager) {
        this.speciesManager = speciesManager;
        this.currentSpecies = null;
        this.selectedSpeciesId = null;
        this.uiElements = {};
        this.callbacks = {};
    }

    /**
     * Initialize UI elements and event listeners
     * @param {Object} elementIds - Object containing element IDs for UI components
     */
    initialize(elementIds = {}) {
        this.uiElements = {
            speciesSelector: document.getElementById(elementIds.speciesSelector || 'species-selector'),
            speciesInfo: document.getElementById(elementIds.speciesInfo || 'species-info'),
            speciesList: document.getElementById(elementIds.speciesList || 'species-list'),
            attributeDisplay: document.getElementById(elementIds.attributeDisplay || 'attribute-display'),
            professionDisplay: document.getElementById(elementIds.professionDisplay || 'profession-display'),
            bonusDisplay: document.getElementById(elementIds.bonusDisplay || 'bonus-display'),
            randomizeButton: document.getElementById(elementIds.randomizeButton || 'randomize-species'),
            searchInput: document.getElementById(elementIds.searchInput || 'species-search')
        };

        this.setupEventListeners();
        this.updateDisplay();
    }

    /**
     * Setup event listeners for UI interactions
     */
    setupEventListeners() {
        // Species selector change
        if (this.uiElements.speciesSelector) {
            this.uiElements.speciesSelector.addEventListener('change', (event) => {
                this.onSpeciesSelected(event.target.value);
            });
        }

        // Randomize button
        if (this.uiElements.randomizeButton) {
            this.uiElements.randomizeButton.addEventListener('click', () => {
                this.randomizeSpecies();
            });
        }

        // Search input
        if (this.uiElements.searchInput) {
            this.uiElements.searchInput.addEventListener('input', (event) => {
                this.filterSpecies(event.target.value);
            });
        }
    }

    /**
     * Update the species selector dropdown
     */
    updateSpeciesSelector() {
        if (!this.uiElements.speciesSelector) return;

        const playableSpecies = this.speciesManager.getPlayableSpecies();

        // Clear existing options
        this.uiElements.speciesSelector.innerHTML = '<option value="">Select a species...</option>';

        // Add species options
        playableSpecies.forEach(species => {
            const option = document.createElement('option');
            option.value = species.id;
            option.textContent = species.name;
            this.uiElements.speciesSelector.appendChild(option);
        });
    }

    /**
     * Update the species list display
     */
    updateSpeciesList() {
        if (!this.uiElements.speciesList) return;

        const playableSpecies = this.speciesManager.getPlayableSpecies();

        this.uiElements.speciesList.innerHTML = '';

        playableSpecies.forEach(species => {
            const speciesCard = this.createSpeciesCard(species);
            this.uiElements.speciesList.appendChild(speciesCard);
        });
    }

    /**
     * Create a species card element
     * @param {Species} species - Species instance
     * @returns {HTMLElement} Species card element
     */
    createSpeciesCard(species) {
        const card = document.createElement('div');
        card.className = 'species-card';
        card.dataset.speciesId = species.id;

        card.innerHTML = `
            <h3 class="species-name">${species.name}</h3>
            <p class="species-description">${species.description}</p>
            <div class="species-attributes">
                ${this.createAttributeSummary(species)}
            </div>
            <div class="species-professions">
                <strong>Professions:</strong> ${species.getProfessions().join(', ') || 'None'}
            </div>
            <div class="species-bonuses">
                ${this.createBonusSummary(species)}
            </div>
            <button class="select-species-btn" data-species-id="${species.id}">Select</button>
        `;

        // Add click handler for select button
        const selectBtn = card.querySelector('.select-species-btn');
        selectBtn.addEventListener('click', () => {
            this.onSpeciesSelected(species.id);
        });

        return card;
    }

    /**
     * Create attribute summary HTML
     * @param {Species} species - Species instance
     * @returns {string} HTML string for attributes
     */
    createAttributeSummary(species) {
        const attributes = species.getAvailableAttributes();
        if (attributes.length === 0) return '<span>No attributes defined</span>';

        return attributes.map(attr => {
            const range = species.getAttributeRange(attr);
            return `<span class="attribute">${attr}: ${range.min}-${range.max}</span>`;
        }).join(' ');
    }

    /**
     * Create bonus summary HTML
     * @param {Species} species - Species instance
     * @returns {string} HTML string for bonuses
     */
    createBonusSummary(species) {
        const bonuses = species.getAllBonuses();
        const bonusEntries = Object.entries(bonuses).filter(([_, value]) => value > 0);

        if (bonusEntries.length === 0) return '<span>No bonuses</span>';

        return bonusEntries.map(([type, value]) =>
            `<span class="bonus">${type}: +${value}</span>`
        ).join(' ');
    }

    /**
     * Update species information display
     * @param {Species} species - Species to display
     */
    updateSpeciesInfo(species) {
        if (!this.uiElements.speciesInfo) return;

        if (!species) {
            this.uiElements.speciesInfo.innerHTML = '<p>Select a species to view details</p>';
            return;
        }

        this.uiElements.speciesInfo.innerHTML = `
            <h2>${species.name}</h2>
            <p class="species-description">${species.description}</p>
            <div class="species-details">
                <div class="attributes-section">
                    <h3>Attributes</h3>
                    ${this.createDetailedAttributesDisplay(species)}
                </div>
                <div class="professions-section">
                    <h3>Professions</h3>
                    ${this.createDetailedProfessionsDisplay(species)}
                </div>
                <div class="bonuses-section">
                    <h3>Bonuses</h3>
                    ${this.createDetailedBonusesDisplay(species)}
                </div>
            </div>
        `;
    }

    /**
     * Create detailed attributes display
     * @param {Species} species - Species instance
     * @returns {string} HTML string for detailed attributes
     */
    createDetailedAttributesDisplay(species) {
        const attributes = species.getAvailableAttributes();
        if (attributes.length === 0) return '<p>No attributes defined</p>';

        return `
            <div class="attributes-grid">
                ${attributes.map(attr => {
            const range = species.getAttributeRange(attr);
            return `
                        <div class="attribute-item">
                            <span class="attribute-name">${attr}</span>
                            <span class="attribute-range">${range.min} - ${range.max}</span>
                        </div>
                    `;
        }).join('')}
            </div>
        `;
    }

    /**
     * Create detailed professions display
     * @param {Species} species - Species instance
     * @returns {string} HTML string for detailed professions
     */
    createDetailedProfessionsDisplay(species) {
        const professions = species.getProfessions();
        if (professions.length === 0) return '<p>No professions available</p>';

        return `
            <div class="professions-list">
                ${professions.map(profession =>
            `<span class="profession-tag">${profession}</span>`
        ).join('')}
            </div>
        `;
    }

    /**
     * Create detailed bonuses display
     * @param {Species} species - Species instance
     * @returns {string} HTML string for detailed bonuses
     */
    createDetailedBonusesDisplay(species) {
        const bonuses = species.getAllBonuses();
        const bonusEntries = Object.entries(bonuses);

        if (bonusEntries.every(([_, value]) => value === 0)) {
            return '<p>No bonuses</p>';
        }

        return `
            <div class="bonuses-list">
                ${bonusEntries.map(([type, value]) =>
            `<div class="bonus-item">
                        <span class="bonus-type">${type}</span>
                        <span class="bonus-value">+${value}</span>
                    </div>`
        ).join('')}
            </div>
        `;
    }

    /**
     * Handle species selection
     * @param {string} speciesId - ID of selected species
     */
    onSpeciesSelected(speciesId) {
        if (!speciesId) {
            this.currentSpecies = null;
            this.selectedSpeciesId = null;
            this.updateSpeciesInfo(null);
            return;
        }

        const species = this.speciesManager.getSpecies(speciesId);
        if (species) {
            this.currentSpecies = species;
            this.selectedSpeciesId = speciesId;
            this.updateSpeciesInfo(species);

            // Trigger callback if registered
            if (this.callbacks.onSpeciesSelected) {
                this.callbacks.onSpeciesSelected(species);
            }
        }
    }

    /**
     * Randomize species selection
     */
    randomizeSpecies() {
        const randomSpecies = this.speciesManager.getRandomPlayableSpecies();
        if (randomSpecies) {
            this.onSpeciesSelected(randomSpecies.id);

            // Update selector if it exists
            if (this.uiElements.speciesSelector) {
                this.uiElements.speciesSelector.value = randomSpecies.id;
            }
        }
    }

    /**
     * Filter species by search term
     * @param {string} searchTerm - Search term
     */
    filterSpecies(searchTerm) {
        if (!this.uiElements.speciesList) return;

        const normalizedTerm = searchTerm.toLowerCase();
        const cards = this.uiElements.speciesList.querySelectorAll('.species-card');

        cards.forEach(card => {
            const speciesName = card.querySelector('.species-name').textContent.toLowerCase();
            const speciesDesc = card.querySelector('.species-description').textContent.toLowerCase();

            if (speciesName.includes(normalizedTerm) || speciesDesc.includes(normalizedTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    /**
     * Update all displays
     */
    updateDisplay() {
        this.updateSpeciesSelector();
        this.updateSpeciesList();
        this.updateSpeciesInfo(this.currentSpecies);
    }

    /**
     * Register callback for species selection
     * @param {string} eventName - Event name
     * @param {Function} callback - Callback function
     */
    on(eventName, callback) {
        this.callbacks[eventName] = callback;
    }

    /**
     * Get currently selected species
     * @returns {Species|null} Currently selected species
     */
    getCurrentSpecies() {
        return this.currentSpecies;
    }

    /**
     * Set species manager
     * @param {SpeciesManager} speciesManager - Species manager instance
     */
    setSpeciesManager(speciesManager) {
        this.speciesManager = speciesManager;
        this.updateDisplay();
    }

    /**
     * Show loading state
     */
    showLoading() {
        if (this.uiElements.speciesInfo) {
            this.uiElements.speciesInfo.innerHTML = '<p>Loading species data...</p>';
        }
        if (this.uiElements.speciesList) {
            this.uiElements.speciesList.innerHTML = '<p>Loading...</p>';
        }
    }

    /**
     * Show error state
     * @param {string} errorMessage - Error message to display
     */
    showError(errorMessage) {
        if (this.uiElements.speciesInfo) {
            this.uiElements.speciesInfo.innerHTML = `<p class="error">Error: ${errorMessage}</p>`;
        }
        if (this.uiElements.speciesList) {
            this.uiElements.speciesList.innerHTML = `<p class="error">Error: ${errorMessage}</p>`;
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpeciesUI;
} 