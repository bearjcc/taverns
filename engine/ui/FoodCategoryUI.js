/**
 * Food Category UI Manager
 * Handles the display and interaction with food categories
 */
class FoodCategoryUI {
    constructor(foodCategoryManager, inventoryManager) {
        this.foodCategoryManager = foodCategoryManager;
        this.inventoryManager = inventoryManager;
        this.currentCategory = null;
        this.currentSubcategory = null;
        this.searchQuery = '';
    }

    /**
     * Initialize the food category UI
     * @param {string} containerId - ID of the container element
     */
    initialize(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container not found: ${containerId}`);
            return;
        }

        this.render();
    }

    /**
     * Render the main food category interface
     */
    render() {
        this.container.innerHTML = `
            <div class="food-categories-container">
                <div class="food-categories-header">
                    <h3>🍽️ Food Categories</h3>
                    <div class="food-search">
                        <input type="text" id="food-search-input" placeholder="Search food items..." 
                               value="${this.searchQuery}">
                        <button id="food-search-btn">🔍</button>
                    </div>
                </div>
                
                <div class="food-categories-grid">
                    ${this.renderCategoryGrid()}
                </div>
                
                <div class="food-items-display">
                    ${this.renderFoodItems()}
                </div>
                
                <div class="nutritional-summary">
                    ${this.renderNutritionalSummary()}
                </div>
            </div>
        `;

        this.attachEventListeners();
    }

    /**
     * Render the category grid
     * @returns {string} HTML for category grid
     */
    renderCategoryGrid() {
        const categories = this.foodCategoryManager.getAllCategories();
        const stats = this.foodCategoryManager.getCategoryStatistics();

        return categories.map(category => {
            const categoryStats = stats[category.id];
            const isSelected = this.currentCategory === category.id;
            
            return `
                <div class="food-category-card ${isSelected ? 'selected' : ''}" 
                     data-category="${category.id}">
                    <div class="category-icon" style="color: ${category.color}">
                        ${category.icon}
                    </div>
                    <div class="category-info">
                        <h4>${category.displayName}</h4>
                        <p>${category.description}</p>
                        <span class="item-count">${categoryStats.itemCount} items</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Render food items for the selected category
     * @returns {string} HTML for food items
     */
    renderFoodItems() {
        if (!this.currentCategory) {
            return '<div class="no-category-selected">Select a category to view food items</div>';
        }

        const category = this.foodCategoryManager.getCategory(this.currentCategory);
        const items = this.getFilteredItems();
        const subcategories = this.foodCategoryManager.getSubcategories(this.currentCategory);

        return `
            <div class="food-items-container">
                <div class="category-header">
                    <h4>${category.displayName} ${category.icon}</h4>
                    <div class="subcategory-filters">
                        <button class="subcategory-btn ${!this.currentSubcategory ? 'active' : ''}" 
                                data-subcategory="">All</button>
                        ${subcategories.map(sub => `
                            <button class="subcategory-btn ${this.currentSubcategory === sub ? 'active' : ''}" 
                                    data-subcategory="${sub}">${this.formatSubcategoryName(sub)}</button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="food-items-grid">
                    ${this.renderFoodItemsGrid(items)}
                </div>
            </div>
        `;
    }

    /**
     * Render individual food items grid
     * @param {Array} items - Food items to render
     * @returns {string} HTML for food items grid
     */
    renderFoodItemsGrid(items) {
        if (items.length === 0) {
            return '<div class="no-items">No food items found</div>';
        }

        return items.map(item => {
            const inventoryItem = this.inventoryManager.getItem(item.id);
            const quantity = inventoryItem ? inventoryItem.quantity : 0;
            const nutritionalValue = item.nutritionalValue || {};
            const effects = item.effects || [];

            return `
                <div class="food-item-card" data-item-id="${item.id}">
                    <div class="item-header">
                        <span class="item-icon">${item.icon}</span>
                        <span class="item-name">${item.displayName}</span>
                        <span class="item-quantity">${quantity}</span>
                    </div>
                    
                    <div class="item-description">${item.description}</div>
                    
                    ${this.renderNutritionalInfo(nutritionalValue)}
                    
                    ${this.renderEffects(effects)}
                    
                    <div class="item-actions">
                        <button class="examine-btn" data-item-id="${item.id}">Examine</button>
                        ${quantity > 0 ? `<button class="consume-btn" data-item-id="${item.id}">Consume</button>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Render nutritional information
     * @param {Object} nutritionalValue - Nutritional values
     * @returns {string} HTML for nutritional info
     */
    renderNutritionalInfo(nutritionalValue) {
        if (!nutritionalValue.calories && !nutritionalValue.protein) {
            return '';
        }

        return `
            <div class="nutritional-info">
                <div class="nutrition-item">
                    <span class="nutrition-label">Calories:</span>
                    <span class="nutrition-value">${nutritionalValue.calories || 0}</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-label">Protein:</span>
                    <span class="nutrition-value">${nutritionalValue.protein || 0}g</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-label">Carbs:</span>
                    <span class="nutrition-value">${nutritionalValue.carbs || 0}g</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-label">Fat:</span>
                    <span class="nutrition-value">${nutritionalValue.fat || 0}g</span>
                </div>
                <div class="nutrition-item">
                    <span class="nutrition-label">Fiber:</span>
                    <span class="nutrition-value">${nutritionalValue.fiber || 0}g</span>
                </div>
            </div>
        `;
    }

    /**
     * Render item effects
     * @param {Array} effects - Item effects
     * @returns {string} HTML for effects
     */
    renderEffects(effects) {
        if (effects.length === 0) {
            return '';
        }

        return `
            <div class="item-effects">
                ${effects.map(effect => `
                    <div class="effect-item effect-${effect.type}">
                        <span class="effect-icon">${this.getEffectIcon(effect.type)}</span>
                        <span class="effect-description">${effect.description}</span>
                        ${effect.duration > 0 ? `<span class="effect-duration">(${effect.duration}s)</span>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Render nutritional summary
     * @returns {string} HTML for nutritional summary
     */
    renderNutritionalSummary() {
        const inventoryItems = this.inventoryManager.getAllItems();
        const foodItems = inventoryItems.filter(item => 
            item.gameObject.type === 'food' && item.quantity > 0
        );

        if (foodItems.length === 0) {
            return '<div class="nutritional-summary-empty">No food items in inventory</div>';
        }

        const totalNutrition = this.foodCategoryManager.calculateNutritionalValue(
            foodItems.map(item => ({
                ...item.gameObject,
                quantity: item.quantity
            }))
        );

        return `
            <div class="nutritional-summary-content">
                <h4>📊 Total Nutrition (Inventory)</h4>
                <div class="nutrition-summary-grid">
                    <div class="nutrition-summary-item">
                        <span class="summary-label">Calories:</span>
                        <span class="summary-value">${totalNutrition.calories}</span>
                    </div>
                    <div class="nutrition-summary-item">
                        <span class="summary-label">Protein:</span>
                        <span class="summary-value">${totalNutrition.protein}g</span>
                    </div>
                    <div class="nutrition-summary-item">
                        <span class="summary-label">Carbs:</span>
                        <span class="summary-value">${totalNutrition.carbs}g</span>
                    </div>
                    <div class="nutrition-summary-item">
                        <span class="summary-label">Fat:</span>
                        <span class="summary-value">${totalNutrition.fat}g</span>
                    </div>
                    <div class="nutrition-summary-item">
                        <span class="summary-label">Fiber:</span>
                        <span class="summary-value">${totalNutrition.fiber}g</span>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Get filtered items based on current selection and search
     * @returns {Array} Filtered items
     */
    getFilteredItems() {
        let items = [];

        if (this.searchQuery) {
            items = this.foodCategoryManager.searchFoodItems(this.searchQuery);
        } else if (this.currentCategory) {
            if (this.currentSubcategory) {
                items = this.foodCategoryManager.getItemsBySubcategory(this.currentSubcategory);
            } else {
                items = this.foodCategoryManager.getItemsByCategory(this.currentCategory);
            }
        }

        return items;
    }

    /**
     * Format subcategory name for display
     * @param {string} subcategory - Subcategory ID
     * @returns {string} Formatted name
     */
    formatSubcategoryName(subcategory) {
        return subcategory.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    /**
     * Get effect icon
     * @param {string} effectType - Effect type
     * @returns {string} Effect icon
     */
    getEffectIcon(effectType) {
        const icons = {
            health: '❤️',
            energy: '⚡',
            stamina: '💪',
            mana: '🔮',
            buff: '⬆️',
            debuff: '⬇️'
        };
        return icons[effectType] || '✨';
    }

    /**
     * Attach event listeners
     */
    attachEventListeners() {
        // Category selection
        this.container.addEventListener('click', (e) => {
            if (e.target.closest('.food-category-card')) {
                const categoryCard = e.target.closest('.food-category-card');
                const categoryId = categoryCard.dataset.category;
                this.selectCategory(categoryId);
            }

            if (e.target.closest('.subcategory-btn')) {
                const subcategoryBtn = e.target.closest('.subcategory-btn');
                const subcategory = subcategoryBtn.dataset.subcategory;
                this.selectSubcategory(subcategory);
            }

            if (e.target.closest('.examine-btn')) {
                const examineBtn = e.target.closest('.examine-btn');
                const itemId = examineBtn.dataset.itemId;
                this.examineItem(itemId);
            }

            if (e.target.closest('.consume-btn')) {
                const consumeBtn = e.target.closest('.consume-btn');
                const itemId = consumeBtn.dataset.itemId;
                this.consumeItem(itemId);
            }
        });

        // Search functionality
        const searchInput = this.container.querySelector('#food-search-input');
        const searchBtn = this.container.querySelector('#food-search-btn');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value;
                this.render();
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.performSearch();
            });
        }
    }

    /**
     * Select a category
     * @param {string} categoryId - Category ID
     */
    selectCategory(categoryId) {
        this.currentCategory = categoryId;
        this.currentSubcategory = null;
        this.render();
    }

    /**
     * Select a subcategory
     * @param {string} subcategoryId - Subcategory ID
     */
    selectSubcategory(subcategoryId) {
        this.currentSubcategory = subcategoryId || null;
        this.render();
    }

    /**
     * Perform search
     */
    performSearch() {
        this.currentCategory = null;
        this.currentSubcategory = null;
        this.render();
    }

    /**
     * Examine an item
     * @param {string} itemId - Item ID
     */
    examineItem(itemId) {
        const gameObject = this.inventoryManager.getGameObject(itemId);
        if (gameObject) {
            // Trigger examine event or show modal
            console.log(`Examining: ${gameObject.displayName}`);
            console.log(`Description: ${gameObject.examineText}`);
            
            // You can implement a modal or notification system here
            if (typeof showToast === 'function') {
                showToast(`Examining ${gameObject.displayName}: ${gameObject.examineText}`, 'info');
            }
        }
    }

    /**
     * Consume an item
     * @param {string} itemId - Item ID
     */
    consumeItem(itemId) {
        const gameObject = this.inventoryManager.getGameObject(itemId);
        if (gameObject && gameObject.type === 'food') {
            // Remove item from inventory
            if (this.inventoryManager.removeItem(itemId, 1)) {
                // Apply effects
                if (gameObject.effects) {
                    for (const effect of gameObject.effects) {
                        this.applyEffect(effect);
                    }
                }

                // Show feedback
                if (typeof showToast === 'function') {
                    showToast(`Consumed ${gameObject.displayName}`, 'success');
                }

                // Re-render to update quantities
                this.render();
            }
        }
    }

    /**
     * Apply an effect
     * @param {Object} effect - Effect to apply
     */
    applyEffect(effect) {
        // This would integrate with your game's effect system
        console.log(`Applying effect: ${effect.type} - ${effect.value} - ${effect.description}`);
        
        // Example integration with game systems
        if (typeof gameEngine !== 'undefined' && gameEngine.stateManager) {
            // Apply effect to player state
            // This is a placeholder - implement based on your game's state system
        }
    }

    /**
     * Update the display
     */
    update() {
        this.render();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FoodCategoryUI;
} 