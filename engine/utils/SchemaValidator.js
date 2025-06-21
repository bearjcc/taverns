/**
 * Schema validation utility for runtime validation of game data.
 * Provides methods to validate JSON data against predefined schemas.
 * 
 * @class SchemaValidator
 */
class SchemaValidator {
    /**
     * Creates a new SchemaValidator instance.
     * Initializes the Ajv validator with proper configuration.
     */
    constructor() {
        /** @type {Object} The Ajv validator instance */
        this.ajv = null;
        
        /** @type {Object} Cache for compiled validators */
        this.validators = new Map();
        
        /** @type {Object} Schema definitions */
        this.schemas = {};
        
        this.initializeValidator();
    }

    /**
     * Initializes the Ajv validator with proper configuration.
     * 
     * @private
     * @returns {void}
     */
    initializeValidator() {
        // Note: In a browser environment, Ajv would need to be loaded via CDN or bundled
        // For now, we'll provide a fallback validation system
        if (typeof Ajv !== 'undefined') {
            this.ajv = new Ajv({
                allErrors: true,
                verbose: true,
                strict: false
            });
            
            if (typeof addFormats !== 'undefined') {
                addFormats(this.ajv);
            }
        } else {
            console.warn('Ajv not available, using fallback validation');
            this.ajv = this.createFallbackValidator();
        }
    }

    /**
     * Creates a fallback validator when Ajv is not available.
     * 
     * @private
     * @returns {Object} Fallback validator object
     */
    createFallbackValidator() {
        return {
            compile: (schema) => {
                return (data) => {
                    const errors = this.validateWithFallback(data, schema);
                    return errors.length === 0;
                };
            },
            errors: []
        };
    }

    /**
     * Fallback validation method when Ajv is not available.
     * 
     * @private
     * @param {*} data - Data to validate
     * @param {Object} schema - Schema to validate against
     * @returns {Array} Array of validation errors
     */
    validateWithFallback(data, schema) {
        const errors = [];
        
        // Basic type validation
        if (schema.type && typeof data !== schema.type) {
            errors.push({
                instancePath: '',
                message: `Expected ${schema.type}, got ${typeof data}`
            });
        }
        
        // Required fields validation
        if (schema.required && Array.isArray(schema.required)) {
            for (const field of schema.required) {
                if (data[field] === undefined) {
                    errors.push({
                        instancePath: `/${field}`,
                        message: `Missing required field: ${field}`
                    });
                }
            }
        }
        
        // Properties validation
        if (schema.properties && typeof data === 'object') {
            for (const [propName, propSchema] of Object.entries(schema.properties)) {
                if (data[propName] !== undefined) {
                    const propErrors = this.validateWithFallback(data[propName], propSchema);
                    errors.push(...propErrors.map(error => ({
                        ...error,
                        instancePath: `/${propName}${error.instancePath}`
                    })));
                }
            }
        }
        
        return errors;
    }

    /**
     * Loads a schema definition from a file or object.
     * 
     * @param {string|Object} schemaSource - Schema file path or schema object
     * @param {string} [schemaName] - Optional name for the schema
     * @returns {Promise<Object>} The loaded schema
     * @throws {Error} If schema cannot be loaded
     */
    async loadSchema(schemaSource, schemaName = null) {
        try {
            let schema;
            
            if (typeof schemaSource === 'string') {
                // Load from file
                const response = await fetch(schemaSource);
                if (!response.ok) {
                    throw new Error(`Failed to load schema: ${response.status}`);
                }
                schema = await response.json();
            } else {
                // Use provided schema object
                schema = schemaSource;
            }
            
            const name = schemaName || schema.title || 'unnamed';
            this.schemas[name] = schema;
            
            // Compile validator
            if (this.ajv) {
                this.validators.set(name, this.ajv.compile(schema));
            }
            
            return schema;
        } catch (error) {
            console.error('Failed to load schema:', error);
            throw error;
        }
    }

    /**
     * Validates data against a schema.
     * 
     * @param {*} data - Data to validate
     * @param {string|Object} schema - Schema name or schema object
     * @returns {Object} Validation result with isValid and errors properties
     */
    validate(data, schema) {
        try {
            let validator;
            
            if (typeof schema === 'string') {
                // Use cached validator
                validator = this.validators.get(schema);
                if (!validator) {
                    throw new Error(`Schema not found: ${schema}`);
                }
            } else {
                // Compile schema on the fly
                validator = this.ajv.compile(schema);
            }
            
            const isValid = validator(data);
            
            return {
                isValid,
                errors: this.ajv.errors || []
            };
        } catch (error) {
            console.error('Validation error:', error);
            return {
                isValid: false,
                errors: [{
                    instancePath: '',
                    message: `Validation failed: ${error.message}`
                }]
            };
        }
    }

    /**
     * Validates data and throws an error if invalid.
     * 
     * @param {*} data - Data to validate
     * @param {string|Object} schema - Schema name or schema object
     * @param {string} [context] - Context for error messages
     * @throws {Error} If validation fails
     */
    validateOrThrow(data, schema, context = 'Data') {
        const result = this.validate(data, schema);
        
        if (!result.isValid) {
            const errorMessages = result.errors.map(error => 
                `${error.instancePath}: ${error.message}`
            ).join(', ');
            
            throw new Error(`${context} validation failed: ${errorMessages}`);
        }
    }

    /**
     * Validates data and provides fallback values for missing properties.
     * 
     * @param {*} data - Data to validate
     * @param {string|Object} schema - Schema name or schema object
     * @returns {Object} Validated data with fallback values applied
     */
    validateWithDefaults(data, schema) {
        const schemaObj = typeof schema === 'string' ? this.schemas[schema] : schema;
        if (!schemaObj) {
            throw new Error(`Schema not found: ${schema}`);
        }
        
        return this.applyDefaults(data, schemaObj);
    }

    /**
     * Applies default values from schema to data.
     * 
     * @private
     * @param {*} data - Data to apply defaults to
     * @param {Object} schema - Schema containing default values
     * @returns {*} Data with defaults applied
     */
    applyDefaults(data, schema) {
        if (typeof data !== 'object' || data === null) {
            return data;
        }
        
        const result = { ...data };
        
        if (schema.properties) {
            for (const [propName, propSchema] of Object.entries(schema.properties)) {
                if (result[propName] === undefined && propSchema.default !== undefined) {
                    result[propName] = propSchema.default;
                } else if (result[propName] !== undefined && propSchema.properties) {
                    result[propName] = this.applyDefaults(result[propName], propSchema);
                }
            }
        }
        
        return result;
    }

    /**
     * Gets validation errors as a formatted string.
     * 
     * @param {Array} errors - Array of validation errors
     * @returns {string} Formatted error string
     */
    formatErrors(errors) {
        if (!Array.isArray(errors)) {
            return 'Unknown validation error';
        }
        
        return errors.map((error, index) => 
            `${index + 1}. ${error.instancePath}: ${error.message}`
        ).join('\n');
    }

    /**
     * Clears all cached schemas and validators.
     * 
     * @returns {void}
     */
    clearCache() {
        this.schemas = {};
        this.validators.clear();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SchemaValidator;
} 