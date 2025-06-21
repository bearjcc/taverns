/**
 * Inventory System
 * 
 * Manages all inventory-related functionality including items,
 * item management, and inventory operations.
 */

class GameObject {
    constructor(id, name, displayName, description, icon, examineText, stackable = true, maxStack = 999) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.icon = icon;
        this.examineText = examineText;
        this.stackable = stackable;
        this.maxStack = maxStack;
    }
}

class InventoryItem {
    constructor(gameObject, quantity = 1) {
        this.gameObject = gameObject;
        this.quantity = quantity;
    }

    addQuantity(amount) {
        const newQuantity = this.quantity + amount;
        if (newQuantity <= this.gameObject.maxStack) {
            this.quantity = newQuantity;
            return true;
        }
        return false;
    }

    removeQuantity(amount) {
        if (this.quantity >= amount) {
            this.quantity -= amount;
            return true;
        }
        return false;
    }

    getDisplayName() {
        if (this.quantity > 1 && this.gameObject.stackable) {
            return `${this.gameObject.displayName} (${this.quantity})`;
        }
        return this.gameObject.displayName;
    }
}

class InventorySystem {
    constructor(itemsConfig, stateManager, eventSystem) {
        this.itemsConfig = itemsConfig;
        this.stateManager = stateManager;
        this.eventSystem = eventSystem;
        
        this.items = new Map(); // Map of itemId -> InventoryItem
        this.gameObjects = new Map(); // Map of itemId -> GameObject
        
        // Bind methods to maintain context
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.getItem = this.getItem.bind(this);
        this.hasItem = this.hasItem.bind(this);
    }
    
    /**
     * Initialize the inventory system
     */
    async initialize() {
        try {
            console.log('Initializing inventory system...');
            
            // Load game objects from configuration
            await this.loadGameObjects();
            
            // Load inventory from state
            this.loadFromState();
            
            // Set up event listeners
            this._setupEventListeners();
            
            console.log('Inventory system initialized successfully');
            this.eventSystem.emit('inventorySystem:initialized', { 
                itemsCount: this.items.size,
                gameObjectsCount: this.gameObjects.size 
            });
            
        } catch (error) {
            console.error('Failed to initialize inventory system:', error);
            this.eventSystem.emit('inventorySystem:initError', { error });
            throw error;
        }
    }
    
    /**
     * Load game objects from configuration
     */
    async loadGameObjects() {
        try {
            if (!this.itemsConfig) {
                console.warn('Items configuration not provided, skipping game objects loading');
                return;
            }
            
            // If itemsConfig is a path, load from file
            if (typeof this.itemsConfig === 'string') {
                const response = await fetch(this.itemsConfig);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                this.itemsConfig = await response.json();
            }
            
            // Register all game objects
            Object.values(this.itemsConfig).forEach(item => {
                const gameObject = new GameObject(
                    item.id,
                    item.name,
                    item.displayName,
                    item.description,
                    item.icon,
                    item.examineText,
                    item.stackable,
                    item.maxStack
                );
                this.registerGameObject(gameObject);
            });
            
            console.log('Game objects loaded:', this.gameObjects.size);
            
        } catch (error) {
            console.error('Error loading game objects:', error);
            throw error;
        }
    }
    
    /**
     * Load inventory from state manager
     */
    loadFromState() {
        const savedInventory = this.stateManager.get('inventory', {});
        
        for (const [itemId, itemData] of Object.entries(savedInventory)) {
            const gameObject = this.gameObjects.get(itemId);
            if (gameObject) {
                const inventoryItem = new InventoryItem(gameObject, itemData.quantity || 1);
                this.items.set(itemId, inventoryItem);
            }
        }
    }
    
    /**
     * Save inventory to state manager
     */
    saveToState() {
        const inventoryData = {};
        
        this.items.forEach((inventoryItem, itemId) => {
            inventoryData[itemId] = {
                quantity: inventoryItem.quantity
            };
        });
        
        this.stateManager.set('inventory', inventoryData);
    }
    
    /**
     * Register a game object definition
     * @param {GameObject} gameObject - Game object to register
     */
    registerGameObject(gameObject) {
        this.gameObjects.set(gameObject.id, gameObject);
        this.eventSystem.emit('gameObject:registered', { gameObject });
    }
    
    /**
     * Add items to inventory
     * @param {string} itemId - ID of the item to add
     * @param {number} quantity - Quantity to add
     * @returns {boolean} Whether the operation was successful
     */
    addItem(itemId, quantity = 1) {
        const gameObject = this.gameObjects.get(itemId);
        if (!gameObject) {
            console.error(`GameObject with id '${itemId}' not found`);
            return false;
        }

        if (gameObject.stackable) {
            // Try to add to existing stack
            const existingItem = this.items.get(itemId);
            if (existingItem) {
                if (existingItem.addQuantity(quantity)) {
                    this.eventSystem.emit('inventory:itemAdded', { 
                        itemId, 
                        quantity, 
                        newQuantity: existingItem.quantity 
                    });
                    this.saveToState();
                    return true;
                } else {
                    console.warn(`Cannot add ${quantity} to stack of ${existingItem.quantity}/${gameObject.maxStack}`);
                    return false;
                }
            } else {
                // Create new stack
                const inventoryItem = new InventoryItem(gameObject, quantity);
                this.items.set(itemId, inventoryItem);
                this.eventSystem.emit('inventory:itemAdded', { 
                    itemId, 
                    quantity, 
                    newQuantity: quantity 
                });
                this.saveToState();
                return true;
            }
        } else {
            // Non-stackable items
            for (let i = 0; i < quantity; i++) {
                const inventoryItem = new InventoryItem(gameObject, 1);
                const uniqueId = `${itemId}_${Date.now()}_${i}`;
                this.items.set(uniqueId, inventoryItem);
            }
            this.eventSystem.emit('inventory:itemAdded', { 
                itemId, 
                quantity, 
                newQuantity: quantity 
            });
            this.saveToState();
            return true;
        }
    }
    
    /**
     * Remove items from inventory
     * @param {string} itemId - ID of the item to remove
     * @param {number} quantity - Quantity to remove
     * @returns {boolean} Whether the operation was successful
     */
    removeItem(itemId, quantity = 1) {
        const gameObject = this.gameObjects.get(itemId);
        if (!gameObject) {
            console.error(`GameObject with id '${itemId}' not found`);
            return false;
        }

        if (gameObject.stackable) {
            const existingItem = this.items.get(itemId);
            if (existingItem && existingItem.removeQuantity(quantity)) {
                if (existingItem.quantity === 0) {
                    this.items.delete(itemId);
                }
                this.eventSystem.emit('inventory:itemRemoved', { 
                    itemId, 
                    quantity, 
                    remainingQuantity: existingItem.quantity || 0 
                });
                this.saveToState();
                return true;
            } else {
                console.warn(`Cannot remove ${quantity} from inventory`);
                return false;
            }
        } else {
            // For non-stackable items, remove by unique IDs
            const itemsToRemove = Array.from(this.items.entries())
                .filter(([id, item]) => id.startsWith(itemId))
                .slice(0, quantity);
            
            if (itemsToRemove.length === quantity) {
                itemsToRemove.forEach(([id]) => {
                    this.items.delete(id);
                });
                this.eventSystem.emit('inventory:itemRemoved', { 
                    itemId, 
                    quantity, 
                    remainingQuantity: 0 
                });
                this.saveToState();
                return true;
            } else {
                console.warn(`Cannot remove ${quantity} non-stackable items`);
                return false;
            }
        }
    }
    
    /**
     * Get an inventory item by ID
     * @param {string} itemId - ID of the item
     * @returns {InventoryItem|null} Inventory item or null if not found
     */
    getItem(itemId) {
        return this.items.get(itemId);
    }
    
    /**
     * Get all inventory items
     * @returns {Array} Array of [itemId, InventoryItem] pairs
     */
    getAllItems() {
        return Array.from(this.items.entries());
    }
    
    /**
     * Get the count of a specific item
     * @param {string} itemId - ID of the item
     * @returns {number} Total quantity of the item
     */
    getItemCount(itemId) {
        const gameObject = this.gameObjects.get(itemId);
        if (!gameObject) return 0;

        if (gameObject.stackable) {
            const item = this.items.get(itemId);
            return item ? item.quantity : 0;
        } else {
            // Count non-stackable items
            return Array.from(this.items.keys())
                .filter(id => id.startsWith(itemId))
                .length;
        }
    }
    
    /**
     * Check if inventory has a specific item
     * @param {string} itemId - ID of the item
     * @param {number} quantity - Required quantity
     * @returns {boolean} Whether the inventory has the required quantity
     */
    hasItem(itemId, quantity = 1) {
        return this.getItemCount(itemId) >= quantity;
    }
    
    /**
     * Get a game object by ID
     * @param {string} itemId - ID of the game object
     * @returns {GameObject|null} Game object or null if not found
     */
    getGameObject(itemId) {
        return this.gameObjects.get(itemId);
    }
    
    /**
     * Get all game objects
     * @returns {Array} Array of all game objects
     */
    getAllGameObjects() {
        return Array.from(this.gameObjects.values());
    }
    
    /**
     * Clear the inventory
     */
    clear() {
        this.items.clear();
        this.eventSystem.emit('inventory:cleared', {});
        this.saveToState();
    }
    
    /**
     * Get inventory statistics
     * @returns {Object} Inventory statistics
     */
    getStats() {
        const totalItems = Array.from(this.items.values())
            .reduce((sum, item) => sum + item.quantity, 0);
        
        const uniqueItems = this.items.size;
        
        return {
            totalItems,
            uniqueItems,
            gameObjectsCount: this.gameObjects.size,
            totalValue: 0 // Could be calculated if items have value
        };
    }
    
    /**
     * Set up event listeners
     */
    _setupEventListeners() {
        // Listen for state changes to save inventory
        this.stateManager.on('state:changed', (data) => {
            if (data.path && data.path.startsWith('inventory.')) {
                this.saveToState();
            }
        });
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GameObject, InventoryItem, InventorySystem };
} 