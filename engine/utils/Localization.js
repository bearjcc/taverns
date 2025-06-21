/**
 * Localization System
 * 
 * Handles multiple languages and provides fallback mechanisms
 * for missing translations.
 */

class Localization {
    constructor(defaultLanguage = 'en') {
        this.defaultLanguage = defaultLanguage;
        this.currentLanguage = defaultLanguage;
        this.translations = new Map();
        this.loadedLanguages = new Set();
        this.fallbackChain = ['en', 'en-US', 'en-GB'];
        this.pluralRules = new Map();
        
        // Initialize plural rules for common languages
        this._initializePluralRules();
    }
    
    /**
     * Set the current language
     * @param {string} language - Language code (e.g., 'en', 'es', 'fr')
     */
    setLanguage(language) {
        this.currentLanguage = language;
        this.emit('language:changed', { language });
    }
    
    /**
     * Get the current language
     * @returns {string} Current language code
     */
    getLanguage() {
        return this.currentLanguage;
    }
    
    /**
     * Get the default language
     * @returns {string} Default language code
     */
    getDefaultLanguage() {
        return this.defaultLanguage;
    }
    
    /**
     * Load translations for a language
     * @param {string} language - Language code
     * @param {Object} translations - Translation data
     */
    loadTranslations(language, translations) {
        this.translations.set(language, translations);
        this.loadedLanguages.add(language);
        this.emit('translations:loaded', { language, count: Object.keys(translations).length });
    }
    
    /**
     * Load translations from a file
     * @param {string} language - Language code
     * @param {string} path - Path to translation file
     */
    async loadTranslationsFromFile(language, path) {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const translations = await response.json();
            this.loadTranslations(language, translations);
            return true;
        } catch (error) {
            console.error(`Failed to load translations for ${language}:`, error);
            this.emit('translations:loadError', { language, error });
            return false;
        }
    }
    
    /**
     * Get a translated string
     * @param {string} key - Translation key
     * @param {Object} params - Parameters for interpolation
     * @param {string} language - Optional language override
     * @returns {string} Translated string
     */
    get(key, params = {}, language = null) {
        const targetLanguage = language || this.currentLanguage;
        
        // Try to get translation from target language
        let translation = this._getTranslation(key, targetLanguage);
        
        // If not found, try fallback chain
        if (!translation) {
            for (const fallbackLang of this.fallbackChain) {
                if (fallbackLang !== targetLanguage) {
                    translation = this._getTranslation(key, fallbackLang);
                    if (translation) break;
                }
            }
        }
        
        // If still not found, return the key
        if (!translation) {
            console.warn(`Translation key not found: ${key} for language: ${targetLanguage}`);
            return key;
        }
        
        // Interpolate parameters
        return this._interpolate(translation, params);
    }
    
    /**
     * Get a translated string with pluralization
     * @param {string} key - Translation key
     * @param {number} count - Count for pluralization
     * @param {Object} params - Parameters for interpolation
     * @param {string} language - Optional language override
     * @returns {string} Translated string
     */
    getPlural(key, count, params = {}, language = null) {
        const targetLanguage = language || this.currentLanguage;
        const pluralForm = this._getPluralForm(count, targetLanguage);
        
        // Try to get pluralized key
        const pluralKey = `${key}_${pluralForm}`;
        let translation = this.get(pluralKey, { ...params, count }, language);
        
        // If plural key not found, try the base key
        if (translation === pluralKey) {
            translation = this.get(key, { ...params, count }, language);
        }
        
        return translation;
    }
    
    /**
     * Check if a translation key exists
     * @param {string} key - Translation key
     * @param {string} language - Optional language override
     * @returns {boolean} Whether the key exists
     */
    has(key, language = null) {
        const targetLanguage = language || this.currentLanguage;
        
        // Check target language
        if (this._getTranslation(key, targetLanguage)) {
            return true;
        }
        
        // Check fallback chain
        for (const fallbackLang of this.fallbackChain) {
            if (fallbackLang !== targetLanguage && this._getTranslation(key, fallbackLang)) {
                return true;
            }
        }
        
        return false;
    }
    
    /**
     * Get all loaded languages
     * @returns {Array} Array of loaded language codes
     */
    getLoadedLanguages() {
        return Array.from(this.loadedLanguages);
    }
    
    /**
     * Get translation statistics
     * @param {string} language - Optional language filter
     * @returns {Object} Translation statistics
     */
    getStats(language = null) {
        if (language) {
            const translations = this.translations.get(language);
            return {
                language,
                keyCount: translations ? Object.keys(translations).length : 0,
                loaded: this.loadedLanguages.has(language)
            };
        }
        
        const stats = {};
        for (const lang of this.loadedLanguages) {
            stats[lang] = this.getStats(lang);
        }
        
        return {
            currentLanguage: this.currentLanguage,
            defaultLanguage: this.defaultLanguage,
            loadedLanguages: this.getLoadedLanguages(),
            languages: stats
        };
    }
    
    /**
     * Add a fallback language
     * @param {string} language - Language code to add to fallback chain
     */
    addFallbackLanguage(language) {
        if (!this.fallbackChain.includes(language)) {
            this.fallbackChain.push(language);
        }
    }
    
    /**
     * Remove a fallback language
     * @param {string} language - Language code to remove from fallback chain
     */
    removeFallbackLanguage(language) {
        const index = this.fallbackChain.indexOf(language);
        if (index > -1) {
            this.fallbackChain.splice(index, 1);
        }
    }
    
    /**
     * Get the fallback chain
     * @returns {Array} Array of fallback languages
     */
    getFallbackChain() {
        return [...this.fallbackChain];
    }
    
    /**
     * Clear all translations
     */
    clear() {
        this.translations.clear();
        this.loadedLanguages.clear();
        this.emit('translations:cleared', {});
    }
    
    /**
     * Subscribe to localization events
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     */
    on(event, callback) {
        if (!this.listeners) {
            this.listeners = new Map();
        }
        
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        
        this.listeners.get(event).push(callback);
    }
    
    /**
     * Unsubscribe from localization events
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     */
    off(event, callback) {
        if (this.listeners && this.listeners.has(event)) {
            const callbacks = this.listeners.get(event);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }
    }
    
    /**
     * Emit an event to all listeners
     * @param {string} event - Event name
     * @param {Object} data - Event data
     */
    emit(event, data) {
        if (this.listeners && this.listeners.has(event)) {
            this.listeners.get(event).forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    console.error(`Error in localization event listener for ${event}:`, error);
                }
            });
        }
    }
    
    // Private methods
    
    /**
     * Get translation from a specific language
     * @param {string} key - Translation key
     * @param {string} language - Language code
     * @returns {string|null} Translation or null if not found
     */
    _getTranslation(key, language) {
        const translations = this.translations.get(language);
        if (!translations) return null;
        
        // Support nested keys with dot notation
        const keys = key.split('.');
        let current = translations;
        
        for (const k of keys) {
            if (current && typeof current === 'object' && k in current) {
                current = current[k];
            } else {
                return null;
            }
        }
        
        return typeof current === 'string' ? current : null;
    }
    
    /**
     * Interpolate parameters into a translation string
     * @param {string} text - Text with placeholders
     * @param {Object} params - Parameters to interpolate
     * @returns {string} Interpolated text
     */
    _interpolate(text, params) {
        return text.replace(/\{(\w+)\}/g, (match, key) => {
            return params[key] !== undefined ? params[key] : match;
        });
    }
    
    /**
     * Get plural form for a count
     * @param {number} count - Count
     * @param {string} language - Language code
     * @returns {string} Plural form
     */
    _getPluralForm(count, language) {
        const rule = this.pluralRules.get(language);
        if (!rule) return 'other';
        
        return rule(count);
    }
    
    /**
     * Initialize plural rules for common languages
     */
    _initializePluralRules() {
        // English: 1 = one, other = other
        this.pluralRules.set('en', (count) => {
            return count === 1 ? 'one' : 'other';
        });
        
        // Spanish: 1 = one, other = other
        this.pluralRules.set('es', (count) => {
            return count === 1 ? 'one' : 'other';
        });
        
        // French: 0,1 = one, other = other
        this.pluralRules.set('fr', (count) => {
            return count === 0 || count === 1 ? 'one' : 'other';
        });
        
        // German: 1 = one, other = other
        this.pluralRules.set('de', (count) => {
            return count === 1 ? 'one' : 'other';
        });
        
        // Russian: 1 = one, 2-4 = few, 0,5-20 = other, other = other
        this.pluralRules.set('ru', (count) => {
            const mod10 = count % 10;
            const mod100 = count % 100;
            
            if (mod10 === 1 && mod100 !== 11) return 'one';
            if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return 'few';
            if (mod10 === 0 || [5, 6, 7, 8, 9].includes(mod10) || [11, 12, 13, 14].includes(mod100)) return 'other';
            return 'other';
        });
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Localization;
} 