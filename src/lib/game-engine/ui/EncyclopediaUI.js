/**
 * Encyclopedia UI - Handles all encyclopedia user interface components
 * Provides search, browsing, and detailed entry viewing functionality
 */
class EncyclopediaUI {
  constructor(encyclopediaSystem) {
    this.encyclopedia = encyclopediaSystem;
    this.currentEntry = null;
    this.searchQuery = '';
    this.currentCategory = null;
    this.searchTimeout = null;
    this.history = [];
    this.historyIndex = -1;
  }

  /**
   * Initialize the encyclopedia UI
   */
  initialize() {
    this.createEncyclopediaContainer();
    this.bindEvents();
    this.showMainView();
  }

  /**
   * Create the main encyclopedia container
   */
  createEncyclopediaContainer() {
    // Create main container
    const container = document.createElement('div');
    container.id = 'encyclopedia-container';
    container.className = 'encyclopedia-container';
    container.style.display = 'none';

    // Create header
    const header = document.createElement('div');
    header.className = 'encyclopedia-header';
    header.innerHTML = `
      <div class="encyclopedia-title">
        <span class="encyclopedia-icon">📚</span>
        <h2>Encyclopedia</h2>
      </div>
      <div class="encyclopedia-controls">
        <button class="encyclopedia-back-btn" id="encyclopedia-back-btn" title="Back">←</button>
        <button class="encyclopedia-home-btn" id="encyclopedia-home-btn" title="Home">🏠</button>
      </div>
    `;

    // Create search bar
    const searchContainer = document.createElement('div');
    searchContainer.className = 'encyclopedia-search';
    searchContainer.innerHTML = `
      <input type="text" id="encyclopedia-search-input" placeholder="Search encyclopedia..." class="encyclopedia-search-input">
      <button id="encyclopedia-search-btn" class="encyclopedia-search-btn">🔍</button>
    `;

    // Create content area
    const content = document.createElement('div');
    content.id = 'encyclopedia-content';
    content.className = 'encyclopedia-content';

    // Create navigation
    const navigation = document.createElement('div');
    navigation.id = 'encyclopedia-navigation';
    navigation.className = 'encyclopedia-navigation';

    // Create breadcrumb
    const breadcrumb = document.createElement('div');
    breadcrumb.id = 'encyclopedia-breadcrumb';
    breadcrumb.className = 'encyclopedia-breadcrumb';

    // Assemble container
    container.appendChild(header);
    container.appendChild(searchContainer);
    container.appendChild(breadcrumb);
    container.appendChild(navigation);
    container.appendChild(content);

    // Add to page
    document.body.appendChild(container);
  }

  /**
   * Bind event listeners
   */
  bindEvents() {
    // Search functionality
    const searchInput = document.getElementById('encyclopedia-search-input');
    const searchBtn = document.getElementById('encyclopedia-search-btn');

    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      clearTimeout(this.searchTimeout);
      this.searchTimeout = setTimeout(() => {
        this.performSearch();
      }, 300);
    });

    searchBtn.addEventListener('click', () => {
      this.performSearch();
    });

    // Navigation buttons
    document.getElementById('encyclopedia-back-btn').addEventListener('click', () => {
      this.goBack();
    });

    document.getElementById('encyclopedia-home-btn').addEventListener('click', () => {
      this.showMainView();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isVisible()) {
        this.hide();
      }
    });
  }

  /**
   * Show the encyclopedia
   */
  show() {
    const container = document.getElementById('encyclopedia-container');
    container.style.display = 'block';
    container.classList.add('encyclopedia-visible');
  }

  /**
   * Hide the encyclopedia
   */
  hide() {
    const container = document.getElementById('encyclopedia-container');
    container.style.display = 'none';
    container.classList.remove('encyclopedia-visible');
  }

  /**
   * Check if encyclopedia is visible
   * @returns {boolean} True if visible
   */
  isVisible() {
    const container = document.getElementById('encyclopedia-container');
    return container.style.display === 'block';
  }

  /**
   * Show main encyclopedia view
   */
  showMainView() {
    this.currentEntry = null;
    this.currentCategory = null;
    this.updateBreadcrumb(['Encyclopedia']);
    this.showCategories();
  }

  /**
   * Show categories view
   */
  showCategories() {
    const navigation = document.getElementById('encyclopedia-navigation');
    const content = document.getElementById('encyclopedia-content');

    const categories = this.encyclopedia.getCategories();
    
    // Create categories grid
    const categoriesHTML = categories.map(category => `
      <div class="encyclopedia-category-card" data-category="${category.name}">
        <div class="encyclopedia-category-icon">${category.icon}</div>
        <div class="encyclopedia-category-info">
          <h3 class="encyclopedia-category-name">${category.name}</h3>
          <p class="encyclopedia-category-description">${category.description}</p>
          <span class="encyclopedia-category-count">${category.entries.length} entries</span>
        </div>
      </div>
    `).join('');

    navigation.innerHTML = `
      <div class="encyclopedia-categories-grid">
        ${categoriesHTML}
      </div>
    `;

    content.innerHTML = `
      <div class="encyclopedia-welcome">
        <h2>Welcome to the Encyclopedia</h2>
        <p>Explore the vast knowledge of Taverns and Treasures. Use the search bar above or browse by category to discover skills, items, species, and more.</p>
        <div class="encyclopedia-stats">
          <div class="encyclopedia-stat">
            <span class="encyclopedia-stat-number">${this.encyclopedia.getStatistics().totalEntries}</span>
            <span class="encyclopedia-stat-label">Total Entries</span>
          </div>
          <div class="encyclopedia-stat">
            <span class="encyclopedia-stat-number">${this.encyclopedia.getStatistics().categories}</span>
            <span class="encyclopedia-stat-label">Categories</span>
          </div>
        </div>
      </div>
    `;

    // Bind category click events
    const categoryCards = navigation.querySelectorAll('.encyclopedia-category-card');
    categoryCards.forEach(card => {
      card.addEventListener('click', () => {
        const categoryName = card.dataset.category;
        this.showCategory(categoryName);
      });
    });
  }

  /**
   * Show entries for a specific category
   * @param {string} categoryName - Category name
   */
  showCategory(categoryName) {
    this.currentCategory = categoryName;
    this.updateBreadcrumb(['Encyclopedia', categoryName]);

    const entries = this.encyclopedia.getEntriesByCategory(categoryName);
    const navigation = document.getElementById('encyclopedia-navigation');
    const content = document.getElementById('encyclopedia-content');

    // Group entries by subcategory if available
    const groupedEntries = this.groupEntriesBySubcategory(entries);

    let entriesHTML = '';
    for (const [subcategory, subcategoryEntries] of Object.entries(groupedEntries)) {
      if (subcategory !== 'default') {
        entriesHTML += `<h3 class="encyclopedia-subcategory">${subcategory}</h3>`;
      }
      
      const subcategoryHTML = subcategoryEntries.map(entry => `
        <div class="encyclopedia-entry-card" data-entry-id="${entry.id}">
          <div class="encyclopedia-entry-icon">${entry.icon || '📄'}</div>
          <div class="encyclopedia-entry-info">
            <h4 class="encyclopedia-entry-name">${entry.name}</h4>
            <p class="encyclopedia-entry-description">${entry.description}</p>
            <div class="encyclopedia-entry-tags">
              ${entry.tags.map(tag => `<span class="encyclopedia-tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');
      
      entriesHTML += `<div class="encyclopedia-entries-grid">${subcategoryHTML}</div>`;
    }

    navigation.innerHTML = `
      <div class="encyclopedia-category-header">
        <button class="encyclopedia-back-to-categories">← Back to Categories</button>
        <h2>${categoryName}</h2>
        <span class="encyclopedia-entry-count">${entries.length} entries</span>
      </div>
      <div class="encyclopedia-entries-container">
        ${entriesHTML}
      </div>
    `;

    content.innerHTML = `
      <div class="encyclopedia-category-info">
        <h3>About ${categoryName}</h3>
        <p>${this.encyclopedia.categories.get(categoryName)?.description || 'No description available.'}</p>
      </div>
    `;

    // Bind events
    navigation.querySelector('.encyclopedia-back-to-categories').addEventListener('click', () => {
      this.showCategories();
    });

    const entryCards = navigation.querySelectorAll('.encyclopedia-entry-card');
    entryCards.forEach(card => {
      card.addEventListener('click', () => {
        const entryId = card.dataset.entryId;
        this.showEntry(entryId);
      });
    });
  }

  /**
   * Show detailed entry view
   * @param {string} entryId - Entry ID
   */
  showEntry(entryId) {
    const entry = this.encyclopedia.getEntry(entryId);
    if (!entry) return;

    this.addToHistory(entryId);
    this.currentEntry = entry;
    this.updateBreadcrumb(['Encyclopedia', entry.category, entry.name]);

    const navigation = document.getElementById('encyclopedia-navigation');
    const content = document.getElementById('encyclopedia-content');

    // Create entry details
    const entryHTML = this.createEntryHTML(entry);
    
    navigation.innerHTML = `
      <div class="encyclopedia-entry-header">
        <button class="encyclopedia-back-to-category">← Back to ${entry.category}</button>
        <div class="encyclopedia-entry-title">
          <span class="encyclopedia-entry-icon">${entry.icon || '📄'}</span>
          <h2>${entry.name}</h2>
        </div>
      </div>
    `;

    content.innerHTML = entryHTML;

    // Bind events
    navigation.querySelector('.encyclopedia-back-to-category').addEventListener('click', () => {
      this.showCategory(entry.category);
    });

    // Bind cross-reference clicks
    const crossRefLinks = content.querySelectorAll('.encyclopedia-crossref-link');
    crossRefLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.dataset.target;
        this.showEntry(targetId);
      });
    });
  }

  /**
   * Create HTML for entry details
   * @param {Object} entry - Entry data
   * @returns {string} HTML string
   */
  createEntryHTML(entry) {
    let html = `
      <div class="encyclopedia-entry-details">
        <div class="encyclopedia-entry-main">
          <div class="encyclopedia-entry-description-full">
            <h3>Description</h3>
            <p>${entry.description}</p>
          </div>
    `;

    // Add examine text for items
    if (entry.examineText && entry.examineText !== entry.description) {
      html += `
        <div class="encyclopedia-entry-examine">
          <h3>Examine</h3>
          <p>${entry.examineText}</p>
        </div>
      `;
    }

    // Add requirements for skills
    if (entry.requirements) {
      html += `
        <div class="encyclopedia-entry-requirements">
          <h3>Requirements</h3>
          <p>Requires ${entry.requirements.skill} level ${entry.requirements.level}</p>
        </div>
      `;
    }

    // Add detailed data based on type
    if (entry.type === 'item') {
      html += this.createItemDetailsHTML(entry);
    } else if (entry.type === 'species') {
      html += this.createSpeciesDetailsHTML(entry);
    } else if (entry.type === 'skill') {
      html += this.createSkillDetailsHTML(entry);
    }

    // Add cross-references
    const crossRefs = this.encyclopedia.getCrossReferences(entry.id);
    if (crossRefs.length > 0) {
      html += `
        <div class="encyclopedia-entry-crossrefs">
          <h3>Related Entries</h3>
          <div class="encyclopedia-crossrefs-list">
            ${crossRefs.map(crossRef => `
              <a href="#" class="encyclopedia-crossref-link" data-target="${crossRef.target}">
                <span class="encyclopedia-crossref-icon">${crossRef.targetEntry.icon || '📄'}</span>
                <span class="encyclopedia-crossref-name">${crossRef.targetEntry.name}</span>
                <span class="encyclopedia-crossref-type">${crossRef.type}</span>
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }

    html += `
        </div>
        <div class="encyclopedia-entry-sidebar">
          <div class="encyclopedia-entry-meta">
            <h3>Entry Information</h3>
            <div class="encyclopedia-meta-item">
              <span class="encyclopedia-meta-label">Type:</span>
              <span class="encyclopedia-meta-value">${entry.type}</span>
            </div>
            <div class="encyclopedia-meta-item">
              <span class="encyclopedia-meta-label">Category:</span>
              <span class="encyclopedia-meta-value">${entry.category}</span>
            </div>
            ${entry.subcategory ? `
              <div class="encyclopedia-meta-item">
                <span class="encyclopedia-meta-label">Subcategory:</span>
                <span class="encyclopedia-meta-value">${entry.subcategory}</span>
              </div>
            ` : ''}
            <div class="encyclopedia-meta-item">
              <span class="encyclopedia-meta-label">Tags:</span>
              <div class="encyclopedia-tags">
                ${entry.tags.map(tag => `<span class="encyclopedia-tag">${tag}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    return html;
  }

  /**
   * Create item-specific details HTML
   * @param {Object} entry - Item entry
   * @returns {string} HTML string
   */
  createItemDetailsHTML(entry) {
    const item = entry.data;
    let html = '<div class="encyclopedia-entry-item-details">';

    if (item.stackable !== undefined) {
      html += `
        <div class="encyclopedia-item-property">
          <span class="encyclopedia-property-label">Stackable:</span>
          <span class="encyclopedia-property-value">${item.stackable ? 'Yes' : 'No'}</span>
        </div>
      `;
    }

    if (item.maxStack) {
      html += `
        <div class="encyclopedia-item-property">
          <span class="encyclopedia-property-label">Max Stack:</span>
          <span class="encyclopedia-property-value">${item.maxStack}</span>
        </div>
      `;
    }

    if (item.equipmentType) {
      html += `
        <div class="encyclopedia-item-property">
          <span class="encyclopedia-property-label">Equipment Type:</span>
          <span class="encyclopedia-property-value">${item.equipmentType}</span>
        </div>
      `;
    }

    html += '</div>';
    return html;
  }

  /**
   * Create species-specific details HTML
   * @param {Object} entry - Species entry
   * @returns {string} HTML string
   */
  createSpeciesDetailsHTML(entry) {
    const species = entry.data;
    let html = '<div class="encyclopedia-entry-species-details">';

    if (species.attributes) {
      html += `
        <div class="encyclopedia-species-attributes">
          <h3>Attributes</h3>
          <div class="encyclopedia-attributes-grid">
            ${Object.entries(species.attributes).map(([attr, range]) => `
              <div class="encyclopedia-attribute">
                <span class="encyclopedia-attribute-name">${attr}</span>
                <span class="encyclopedia-attribute-range">${range.min}-${range.max}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (species.bonuses) {
      html += `
        <div class="encyclopedia-species-bonuses">
          <h3>Bonuses</h3>
          <div class="encyclopedia-bonuses-list">
            ${Object.entries(species.bonuses).map(([bonus, value]) => `
              <div class="encyclopedia-bonus">
                <span class="encyclopedia-bonus-name">${bonus}</span>
                <span class="encyclopedia-bonus-value">+${value}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (species.professions) {
      html += `
        <div class="encyclopedia-species-professions">
          <h3>Professions</h3>
          <div class="encyclopedia-professions-list">
            ${species.professions.map(profession => `
              <span class="encyclopedia-profession">${profession}</span>
            `).join('')}
          </div>
        </div>
      `;
    }

    html += '</div>';
    return html;
  }

  /**
   * Create skill-specific details HTML
   * @param {Object} entry - Skill entry
   * @returns {string} HTML string
   */
  createSkillDetailsHTML(entry) {
    const skill = entry.data;
    let html = '<div class="encyclopedia-entry-skill-details">';

    if (skill.sub_skills) {
      html += `
        <div class="encyclopedia-skill-subskills">
          <h3>Sub-skills</h3>
          <div class="encyclopedia-subskills-list">
            ${Object.entries(skill.sub_skills).map(([subSkillName, subSkillData]) => `
              <div class="encyclopedia-subskill">
                <span class="encyclopedia-subskill-name">${subSkillName}</span>
                <span class="encyclopedia-subskill-description">${subSkillData.description}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    html += '</div>';
    return html;
  }

  /**
   * Perform search
   */
  performSearch() {
    if (!this.searchQuery || this.searchQuery.length < 2) {
      this.showMainView();
      return;
    }

    const results = this.encyclopedia.search(this.searchQuery);
    this.showSearchResults(results);
  }

  /**
   * Show search results
   * @param {Array} results - Search results
   */
  showSearchResults(results) {
    this.updateBreadcrumb(['Encyclopedia', 'Search Results']);

    const navigation = document.getElementById('encyclopedia-navigation');
    const content = document.getElementById('encyclopedia-content');

    if (results.length === 0) {
      navigation.innerHTML = `
        <div class="encyclopedia-search-header">
          <button class="encyclopedia-back-to-main">← Back to Encyclopedia</button>
          <h2>Search Results</h2>
        </div>
      `;
      content.innerHTML = `
        <div class="encyclopedia-no-results">
          <h3>No results found</h3>
          <p>No entries match your search for "${this.searchQuery}". Try different keywords or browse by category.</p>
        </div>
      `;
    } else {
      const resultsHTML = results.map(entry => `
        <div class="encyclopedia-search-result" data-entry-id="${entry.id}">
          <div class="encyclopedia-result-icon">${entry.icon || '📄'}</div>
          <div class="encyclopedia-result-info">
            <h4 class="encyclopedia-result-name">${entry.name}</h4>
            <p class="encyclopedia-result-description">${entry.description}</p>
            <div class="encyclopedia-result-meta">
              <span class="encyclopedia-result-category">${entry.category}</span>
              ${entry.subcategory ? `<span class="encyclopedia-result-subcategory">${entry.subcategory}</span>` : ''}
            </div>
          </div>
        </div>
      `).join('');

      navigation.innerHTML = `
        <div class="encyclopedia-search-header">
          <button class="encyclopedia-back-to-main">← Back to Encyclopedia</button>
          <h2>Search Results</h2>
          <span class="encyclopedia-result-count">${results.length} results for "${this.searchQuery}"</span>
        </div>
        <div class="encyclopedia-search-results">
          ${resultsHTML}
        </div>
      `;
    }

    // Bind events
    navigation.querySelector('.encyclopedia-back-to-main').addEventListener('click', () => {
      this.showMainView();
    });

    const resultItems = navigation.querySelectorAll('.encyclopedia-search-result');
    resultItems.forEach(item => {
      item.addEventListener('click', () => {
        const entryId = item.dataset.entryId;
        this.showEntry(entryId);
      });
    });
  }

  /**
   * Group entries by subcategory
   * @param {Array} entries - Array of entries
   * @returns {Object} Grouped entries
   */
  groupEntriesBySubcategory(entries) {
    const grouped = {};
    
    entries.forEach(entry => {
      const subcategory = entry.subcategory || 'default';
      if (!grouped[subcategory]) {
        grouped[subcategory] = [];
      }
      grouped[subcategory].push(entry);
    });

    // Sort entries within each subcategory
    Object.values(grouped).forEach(entries => {
      entries.sort((a, b) => a.name.localeCompare(b.name));
    });

    return grouped;
  }

  /**
   * Update breadcrumb navigation
   * @param {Array} breadcrumbs - Array of breadcrumb items
   */
  updateBreadcrumb(breadcrumbs) {
    const breadcrumb = document.getElementById('encyclopedia-breadcrumb');
    breadcrumb.innerHTML = breadcrumbs.map((crumb, index) => {
      if (index === breadcrumbs.length - 1) {
        return `<span class="encyclopedia-breadcrumb-current">${crumb}</span>`;
      } else {
        return `<span class="encyclopedia-breadcrumb-item">${crumb}</span>`;
      }
    }).join(' <span class="encyclopedia-breadcrumb-separator">/</span> ');
  }

  /**
   * Add entry to navigation history
   * @param {string} entryId - Entry ID
   */
  addToHistory(entryId) {
    // Remove any entries after current index
    this.history = this.history.slice(0, this.historyIndex + 1);
    
    // Add new entry
    this.history.push(entryId);
    this.historyIndex = this.history.length - 1;
  }

  /**
   * Go back in history
   */
  goBack() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      const entryId = this.history[this.historyIndex];
      this.showEntry(entryId);
    } else {
      this.showMainView();
    }
  }
}

if (typeof window !== 'undefined') window.EncyclopediaUI = EncyclopediaUI;

// ES Module exports
export { EncyclopediaUI }; 