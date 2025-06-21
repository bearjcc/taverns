/**
 * Encyclopedia System - Manages game data encyclopedia with crosslinking
 * Provides organized access to all game content including skills, items, species, etc.
 */
class EncyclopediaSystem {
  constructor() {
    this.entries = new Map();
    this.categories = new Map();
    this.searchIndex = new Map();
    this.crossReferences = new Map();
    this.initialized = false;
  }

  /**
   * Initialize the encyclopedia with all game data
   * @param {Object} gameData - All loaded game data
   */
  async initialize(gameData) {
    if (this.initialized) return;

    try {
      await this.loadSkillsData(gameData.skills || {});
      await this.loadItemsData(gameData.items || {});
      await this.loadSpeciesData(gameData.species || {});
      await this.loadTraitsData(gameData.traits || {});
      await this.loadLocationsData(gameData.locations || {});
      await this.loadActionsData(gameData.actions || {});
      
      this.buildCrossReferences();
      this.buildSearchIndex();
      this.initialized = true;
      
      console.log('Encyclopedia system initialized with', this.entries.size, 'entries');
    } catch (error) {
      console.error('Failed to initialize encyclopedia system:', error);
    }
  }

  /**
   * Load skills data into encyclopedia
   * @param {Object} skillsData - Skills configuration
   */
  async loadSkillsData(skillsData) {
    const category = 'Skills';
    this.categories.set(category, {
      name: category,
      description: 'All available skills and abilities',
      icon: '⚔️',
      entries: []
    });

    for (const [categoryName, categorySkills] of Object.entries(skillsData)) {
      for (const [skillName, skillData] of Object.entries(categorySkills)) {
        const entry = {
          id: `skill_${skillName.toLowerCase().replace(/\s+/g, '_')}`,
          type: 'skill',
          category: category,
          subcategory: categoryName,
          name: skillName,
          description: skillData.description || 'No description available.',
          data: skillData,
          tags: [categoryName.toLowerCase(), 'skill'],
          crossReferences: []
        };

        // Add requirements as cross-references
        if (skillData.requires) {
          entry.requirements = skillData.requires;
          entry.crossReferences.push({
            type: 'requirement',
            target: `skill_${skillData.requires.skill.toLowerCase().replace(/\s+/g, '_')}`,
            description: `Requires ${skillData.requires.skill} level ${skillData.requires.level}`
          });
        }

        // Add sub-skills as cross-references
        if (skillData.sub_skills) {
          for (const [subSkillName, subSkillData] of Object.entries(skillData.sub_skills)) {
            entry.crossReferences.push({
              type: 'sub-skill',
              target: `skill_${subSkillName.toLowerCase().replace(/\s+/g, '_')}`,
              description: `Sub-skill: ${subSkillName}`
            });
          }
        }

        this.entries.set(entry.id, entry);
        this.categories.get(category).entries.push(entry.id);
      }
    }
  }

  /**
   * Load items data into encyclopedia
   * @param {Object} itemsData - Items configuration
   */
  async loadItemsData(itemsData) {
    const category = 'Items';
    this.categories.set(category, {
      name: category,
      description: 'All available items and equipment',
      icon: '🎒',
      entries: []
    });

    for (const [itemId, itemData] of Object.entries(itemsData)) {
      const entry = {
        id: `item_${itemId}`,
        type: 'item',
        category: category,
        name: itemData.displayName || itemData.name,
        description: itemData.description || 'No description available.',
        examineText: itemData.examineText || itemData.description,
        icon: itemData.icon || '📦',
        data: itemData,
        tags: ['item'],
        crossReferences: []
      };

      // Add item type tags
      if (itemData.stackable !== undefined) {
        entry.tags.push(itemData.stackable ? 'stackable' : 'unique');
      }

      // Add equipment tags
      if (itemData.equipmentType) {
        entry.tags.push(itemData.equipmentType);
        entry.subcategory = itemData.equipmentType;
      }

      this.entries.set(entry.id, entry);
      this.categories.get(category).entries.push(entry.id);
    }
  }

  /**
   * Load species data into encyclopedia
   * @param {Object} speciesData - Species configuration
   */
  async loadSpeciesData(speciesData) {
    const category = 'Species';
    this.categories.set(category, {
      name: category,
      description: 'All playable and non-playable species',
      icon: '👥',
      entries: []
    });

    for (const [categoryName, categorySpecies] of Object.entries(speciesData)) {
      for (const [speciesId, speciesData] of Object.entries(categorySpecies)) {
        const entry = {
          id: `species_${speciesId}`,
          type: 'species',
          category: category,
          subcategory: categoryName,
          name: speciesData.name || speciesId,
          description: speciesData.description || 'No description available.',
          icon: '👤',
          data: speciesData,
          tags: [categoryName, 'species'],
          crossReferences: []
        };

        // Add profession cross-references
        if (speciesData.professions) {
          for (const profession of speciesData.professions) {
            entry.crossReferences.push({
              type: 'profession',
              target: `skill_${profession.toLowerCase().replace(/\s+/g, '_')}`,
              description: `Can specialize in ${profession}`
            });
          }
        }

        this.entries.set(entry.id, entry);
        this.categories.get(category).entries.push(entry.id);
      }
    }
  }

  /**
   * Load traits data into encyclopedia
   * @param {Object} traitsData - Traits configuration
   */
  async loadTraitsData(traitsData) {
    const category = 'Traits';
    this.categories.set(category, {
      name: category,
      description: 'Character traits and abilities',
      icon: '✨',
      entries: []
    });

    for (const [traitId, traitData] of Object.entries(traitsData)) {
      const entry = {
        id: `trait_${traitId}`,
        type: 'trait',
        category: category,
        name: traitData.name || traitId,
        description: traitData.description || 'No description available.',
        icon: '✨',
        data: traitData,
        tags: ['trait'],
        crossReferences: []
      };

      this.entries.set(entry.id, entry);
      this.categories.get(category).entries.push(entry.id);
    }
  }

  /**
   * Load locations data into encyclopedia
   * @param {Object} locationsData - Locations configuration
   */
  async loadLocationsData(locationsData) {
    const category = 'Locations';
    this.categories.set(category, {
      name: category,
      description: 'All game locations and areas',
      icon: '🗺️',
      entries: []
    });

    for (const [locationId, locationData] of Object.entries(locationsData)) {
      const entry = {
        id: `location_${locationId}`,
        type: 'location',
        category: category,
        name: locationData.name || locationId,
        description: locationData.description || 'No description available.',
        icon: '🗺️',
        data: locationData,
        tags: ['location'],
        crossReferences: []
      };

      this.entries.set(entry.id, entry);
      this.categories.get(category).entries.push(entry.id);
    }
  }

  /**
   * Load actions data into encyclopedia
   * @param {Object} actionsData - Actions configuration
   */
  async loadActionsData(actionsData) {
    const category = 'Actions';
    this.categories.set(category, {
      name: category,
      description: 'All available player actions',
      icon: '⚡',
      entries: []
    });

    for (const [actionId, actionData] of Object.entries(actionsData)) {
      const entry = {
        id: `action_${actionId}`,
        type: 'action',
        category: category,
        name: actionData.name || actionId,
        description: actionData.description || 'No description available.',
        icon: '⚡',
        data: actionData,
        tags: ['action'],
        crossReferences: []
      };

      // Add skill requirement cross-references
      if (actionData.skillRequired) {
        entry.crossReferences.push({
          type: 'skill-requirement',
          target: `skill_${actionData.skillRequired.toLowerCase().replace(/\s+/g, '_')}`,
          description: `Requires ${actionData.skillRequired} skill`
        });
      }

      // Add item requirement cross-references
      if (actionData.itemsRequired) {
        for (const itemId of Object.keys(actionData.itemsRequired)) {
          entry.crossReferences.push({
            type: 'item-requirement',
            target: `item_${itemId}`,
            description: `Requires ${itemId}`
          });
        }
      }

      this.entries.set(entry.id, entry);
      this.categories.get(category).entries.push(entry.id);
    }
  }

  /**
   * Build cross-references between entries
   */
  buildCrossReferences() {
    for (const [entryId, entry] of this.entries) {
      for (const crossRef of entry.crossReferences) {
        const targetEntry = this.entries.get(crossRef.target);
        if (targetEntry) {
          if (!targetEntry.crossReferences) {
            targetEntry.crossReferences = [];
          }
          targetEntry.crossReferences.push({
            type: 'reverse',
            target: entryId,
            description: `Referenced by ${entry.name}`
          });
        }
      }
    }
  }

  /**
   * Build search index for quick lookups
   */
  buildSearchIndex() {
    for (const [entryId, entry] of this.entries) {
      // Index by name
      this.addToSearchIndex(entry.name.toLowerCase(), entryId);
      
      // Index by description
      this.addToSearchIndex(entry.description.toLowerCase(), entryId);
      
      // Index by tags
      for (const tag of entry.tags) {
        this.addToSearchIndex(tag.toLowerCase(), entryId);
      }
      
      // Index by subcategory
      if (entry.subcategory) {
        this.addToSearchIndex(entry.subcategory.toLowerCase(), entryId);
      }
    }
  }

  /**
   * Add term to search index
   * @param {string} term - Search term
   * @param {string} entryId - Entry ID to index
   */
  addToSearchIndex(term, entryId) {
    const words = term.split(/\s+/);
    for (const word of words) {
      if (word.length >= 2) {
        if (!this.searchIndex.has(word)) {
          this.searchIndex.set(word, new Set());
        }
        this.searchIndex.get(word).add(entryId);
      }
    }
  }

  /**
   * Search encyclopedia entries
   * @param {string} query - Search query
   * @returns {Array} Array of matching entries
   */
  search(query) {
    if (!query || query.length < 2) return [];

    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/);
    const results = new Map();

    for (const word of queryWords) {
      if (word.length >= 2) {
        const matches = this.searchIndex.get(word);
        if (matches) {
          for (const entryId of matches) {
            const entry = this.entries.get(entryId);
            if (entry) {
              const score = results.get(entryId) || 0;
              results.set(entryId, score + 1);
            }
          }
        }
      }
    }

    // Sort by relevance score
    return Array.from(results.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([entryId]) => this.entries.get(entryId))
      .filter(Boolean);
  }

  /**
   * Get entry by ID
   * @param {string} entryId - Entry ID
   * @returns {Object|null} Entry data or null if not found
   */
  getEntry(entryId) {
    return this.entries.get(entryId) || null;
  }

  /**
   * Get all categories
   * @returns {Array} Array of category objects
   */
  getCategories() {
    return Array.from(this.categories.values());
  }

  /**
   * Get entries by category
   * @param {string} categoryName - Category name
   * @returns {Array} Array of entries in category
   */
  getEntriesByCategory(categoryName) {
    const category = this.categories.get(categoryName);
    if (!category) return [];

    return category.entries
      .map(entryId => this.entries.get(entryId))
      .filter(Boolean);
  }

  /**
   * Get cross-references for an entry
   * @param {string} entryId - Entry ID
   * @returns {Array} Array of cross-reference objects
   */
  getCrossReferences(entryId) {
    const entry = this.entries.get(entryId);
    if (!entry || !entry.crossReferences) return [];

    return entry.crossReferences
      .map(crossRef => ({
        ...crossRef,
        targetEntry: this.entries.get(crossRef.target)
      }))
      .filter(crossRef => crossRef.targetEntry);
  }

  /**
   * Get encyclopedia statistics
   * @returns {Object} Statistics about the encyclopedia
   */
  getStatistics() {
    const stats = {
      totalEntries: this.entries.size,
      categories: this.categories.size,
      searchIndexSize: this.searchIndex.size
    };

    for (const [categoryName, category] of this.categories) {
      stats[categoryName] = category.entries.length;
    }

    return stats;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EncyclopediaSystem;
} 