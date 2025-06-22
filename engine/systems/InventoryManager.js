class InventoryManager {
    constructor() {
        this.items = new Map();
        this.gameObjects = new Map();
        this.configManager = null;
        this.uiManager = null;
        this.eventSystem = null;
    }

    /**
     * Set the configuration manager reference
     * @param {ConfigManager} configManager - The configuration manager instance
     */
    setConfigManager(configManager) {
        this.configManager = configManager;
    }

    /**
     * Set the UI manager reference
     * @param {UIManager} uiManager - The UI manager instance
     */
    setUIManager(uiManager) {
        this.uiManager = uiManager;
    }

    /**
     * Set the event system reference
     * @param {EventSystem} eventSystem - The event system instance
     */
    setEventSystem(eventSystem) {
        this.eventSystem = eventSystem;
    }

    registerGameObject(gameObject) {
        this.gameObjects.set(gameObject.id, gameObject);
    }

    addItem(itemId, quantity = 1) {
        const gameObject = this.gameObjects.get(itemId);
        if (!gameObject) {
            console.error(`Game object not found: ${itemId}`);
            return false;
        }

        const existingItem = this.items.get(itemId);
        if (existingItem) {
            existingItem.addQuantity(quantity);
        } else {
            const newItem = new InventoryItem(gameObject, quantity);
            this.items.set(itemId, newItem);
        }

        // Emit inventory item added event for achievement tracking
        if (this.eventSystem) {
            this.eventSystem.emit('inventory:itemAdded', {
                itemId: itemId,
                quantity: quantity,
                totalQuantity: this.getItemCount(itemId)
            });
        }

        return true;
    }

    removeItem(itemId, quantity = 1) {
        const item = this.items.get(itemId);
        if (!item) {
            console.error(`Item not found: ${itemId}`);
            return false;
        }

        if (item.quantity < quantity) {
            console.error(`Insufficient quantity: ${itemId}`);
            return false;
        }

        item.removeQuantity(quantity);

        if (item.quantity <= 0) {
            this.items.delete(itemId);
        }

        return true;
    }

    getItem(itemId) {
        return this.items.get(itemId);
    }

    getAllItems() {
        return Array.from(this.items.values());
    }

    getItemCount(itemId) {
        const item = this.items.get(itemId);
        return item ? item.quantity : 0;
    }

    hasItem(itemId, quantity = 1) {
        const item = this.items.get(itemId);
        return item && item.quantity >= quantity;
    }

    getGameObject(itemId) {
        return this.gameObjects.get(itemId);
    }
}

// GameObject class for defining items
class GameObject {
    constructor(id, name, displayName, description, icon, examineText) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.icon = icon;
        this.examineText = examineText;
    }
}

// InventoryItem class for managing item instances
class InventoryItem {
    constructor(gameObject, quantity = 1) {
        this.gameObject = gameObject;
        this.quantity = quantity;
    }

    addQuantity(amount) {
        this.quantity += amount;
        return this.quantity;
    }

    removeQuantity(amount) {
        this.quantity = Math.max(0, this.quantity - amount);
        return this.quantity;
    }

    getDisplayName() {
        if (this.quantity > 1) {
            return `${this.gameObject.displayName} (${this.quantity})`;
        }
        return this.gameObject.displayName;
    }
}

if (typeof window !== 'undefined') window.InventoryManager = InventoryManager; 