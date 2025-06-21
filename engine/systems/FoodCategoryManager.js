/**
 * Food Category Manager
 * Manages food categories, filtering, and nutritional calculations
 */
class FoodCategoryManager {
    constructor() {
        this.categories = new Map();
        this.itemsByCategory = new Map();
        this.itemsBySubcategory = new Map();
    }

    /**
     * Load food categories from configuration
     * @param {Object} categoriesConfig - Food categories configuration
     */
    loadCategories(categoriesConfig) {
        this.categories.clear();
        this.itemsByCategory.clear();
        this.itemsBySubcategory.clear();

        for (const [categoryId, categoryData] of Object.entries(categoriesConfig)) {
            this.categories.set(categoryId, categoryData);
            this.itemsByCategory.set(categoryId, []);
            for (const subcategory of categoryData.subcategories) {
                this.itemsBySubcategory.set(subcategory, []);
            }
        }
    }

    /**
     * Load food items from data/food/<category>.json files
     * @param {Object} foodDataByCategory - Object mapping categoryId to food data (subcategory arrays)
     */
    loadFoodData(foodDataByCategory) {
        for (const [categoryId, subcategories] of Object.entries(foodDataByCategory)) {
            const categoryItems = [];
            for (const [subcat, items] of Object.entries(subcategories)) {
                for (const item of items) {
                    // Add to category
                    categoryItems.push({ ...item, categoryId, subcategory: subcat });
                    // Add to subcategory
                    const subcatItems = this.itemsBySubcategory.get(subcat) || [];
                    subcatItems.push({ ...item, categoryId, subcategory: subcat });
                    this.itemsBySubcategory.set(subcat, subcatItems);
                }
            }
            this.itemsByCategory.set(categoryId, categoryItems);
        }
    }

    /**
     * Register a food item with its category
     * @param {string} itemId - Item ID
     * @param {Object} itemData - Item data
     */
    registerFoodItem(itemId, itemData) {
        if (itemData.type !== 'food' || !itemData.foodCategory) {
            return;
        }

        const category = this.categories.get(itemData.foodCategory);
        if (!category) {
            console.warn(`Unknown food category: ${itemData.foodCategory} for item: ${itemId}`);
            return;
        }

        // Add to category
        const categoryItems = this.itemsByCategory.get(itemData.foodCategory) || [];
        categoryItems.push({ id: itemId, ...itemData });
        this.itemsByCategory.set(itemData.foodCategory, categoryItems);

        // Add to subcategory if specified
        if (itemData.foodSubcategory) {
            const subcategoryItems = this.itemsBySubcategory.get(itemData.foodSubcategory) || [];
            subcategoryItems.push({ id: itemId, ...itemData });
            this.itemsBySubcategory.set(itemData.foodSubcategory, subcategoryItems);
        }
    }

    /**
     * Get all food categories
     * @returns {Array} Array of category objects
     */
    getAllCategories() {
        return Array.from(this.categories.values());
    }

    /**
     * Get items by category
     * @param {string} categoryId - Category ID
     * @returns {Array} Array of items in the category
     */
    getItemsByCategory(categoryId) {
        return this.itemsByCategory.get(categoryId) || [];
    }

    /**
     * Get items by subcategory
     * @param {string} subcategoryId - Subcategory ID
     * @returns {Array} Array of items in the subcategory
     */
    getItemsBySubcategory(subcategoryId) {
        return this.itemsBySubcategory.get(subcategoryId) || [];
    }

    /**
     * Get category by ID
     * @param {string} categoryId - Category ID
     * @returns {Object|null} Category object or null
     */
    getCategory(categoryId) {
        return this.categories.get(categoryId) || null;
    }

    /**
     * Get subcategories for a category
     * @param {string} categoryId - Category ID
     * @returns {Array} Array of subcategory IDs
     */
    getSubcategories(categoryId) {
        const category = this.categories.get(categoryId);
        return category ? category.subcategories : [];
    }

    /**
     * Calculate total nutritional value for a list of items
     * @param {Array} items - Array of items with quantities
     * @returns {Object} Total nutritional values
     */
    calculateNutritionalValue(items) {
        return {};
    }

    /**
     * Get food items grouped by category
     * @returns {Object} Items grouped by category
     */
    getItemsGroupedByCategory() {
        const grouped = {};
        for (const [categoryId, items] of this.itemsByCategory) {
            grouped[categoryId] = items;
        }
        return grouped;
    }

    /**
     * Get food items grouped by subcategory
     * @returns {Object} Items grouped by subcategory
     */
    getItemsGroupedBySubcategory() {
        const grouped = {};
        for (const [subcategoryId, items] of this.itemsBySubcategory) {
            grouped[subcategoryId] = items;
        }
        return grouped;
    }

    /**
     * Search food items by name or description
     * @param {string} query - Search query
     * @returns {Array} Matching items
     */
    searchFoodItems(query) {
        const results = [];
        const lowerQuery = query.toLowerCase();
        for (const [categoryId, items] of this.itemsByCategory) {
            for (const item of items) {
                if (item.name.toLowerCase().includes(lowerQuery) ||
                    (item.description && item.description.toLowerCase().includes(lowerQuery))) {
                    results.push({ ...item, categoryId });
                }
            }
        }
        return results;
    }

    /**
     * Get items with specific nutritional requirements
     * @param {Object} requirements - Nutritional requirements
     * @returns {Array} Items meeting requirements
     */
    getItemsByNutritionalRequirements() {
        return [];
    }

    /**
     * Get items with specific effects
     * @param {string} effectType - Type of effect to search for
     * @returns {Array} Items with the specified effect
     */
    getItemsByEffect() {
        return [];
    }

    /**
     * Get category statistics
     * @returns {Object} Statistics for each category
     */
    getCategoryStatistics() {
        const stats = {};
        for (const [categoryId, items] of this.itemsByCategory) {
            const category = this.categories.get(categoryId);
            stats[categoryId] = {
                name: category.displayName,
                icon: category.icon,
                color: category.color,
                itemCount: items.length,
                subcategories: category.subcategories.map(sub => ({
                    id: sub,
                    itemCount: this.getItemsBySubcategory(sub).length
                }))
            };
        }
        return stats;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FoodCategoryManager;
} 