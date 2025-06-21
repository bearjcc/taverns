#!/usr/bin/env node

/**
 * JSON Schema Validation Script
 * Validates all JSON configuration files against their schemas
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

// Initialize Ajv with formats support
const ajv = new Ajv({
    allErrors: true,
    verbose: true,
    strict: false
});
addFormats(ajv);

/**
 * Configuration mapping for files to their schemas
 * @type {Object.<string, string>}
 */
const CONFIG_MAPPING = {
    'data/config/game-config.json': 'schemas/game-config.schema.json',
    'data/skills.json': 'schemas/skills.schema.json',
    'data/items.json': 'schemas/items.schema.json',
    'data/config/actions.json': 'schemas/actions.schema.json',
    'data/traits.json': 'schemas/traits.schema.json',
    'data/species.json': 'schemas/species.schema.json',
    'data/food-categories.json': 'schemas/food-categories.schema.json'
};

// Add all food category files in data/food/ with the new schema
const foodDir = path.resolve('data/food');
const foodCategoryFileSchema = 'schemas/food-category-file.schema.json';
if (fs.existsSync(foodDir)) {
    const foodFiles = fs.readdirSync(foodDir).filter(f => f.endsWith('.json'));
    for (const file of foodFiles) {
        CONFIG_MAPPING[`data/food/${file}`] = foodCategoryFileSchema;
    }
}

/**
 * Loads a JSON file
 * @param {string} filePath - Path to the JSON file
 * @returns {Object|null} Parsed JSON object or null if error
 */
function loadJsonFile(filePath) {
    try {
        const fullPath = path.resolve(filePath);
        if (!fs.existsSync(fullPath)) {
            console.warn(`⚠️  File not found: ${filePath}`);
            return null;
        }
        
        const content = fs.readFileSync(fullPath, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        console.error(`❌ Error loading ${filePath}:`, error.message);
        return null;
    }
}

/**
 * Loads a JSON schema file
 * @param {string} schemaPath - Path to the schema file
 * @returns {Object|null} Parsed schema object or null if error
 */
function loadSchema(schemaPath) {
    try {
        const fullPath = path.resolve(schemaPath);
        if (!fs.existsSync(fullPath)) {
            console.warn(`⚠️  Schema not found: ${schemaPath}`);
            return null;
        }
        
        const content = fs.readFileSync(fullPath, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        console.error(`❌ Error loading schema ${schemaPath}:`, error.message);
        return null;
    }
}

/**
 * Validates a JSON file against its schema
 * @param {string} filePath - Path to the JSON file
 * @param {string} schemaPath - Path to the schema file
 * @returns {boolean} True if valid, false otherwise
 */
function validateFile(filePath, schemaPath) {
    console.log(`\n🔍 Validating ${filePath}...`);
    
    const data = loadJsonFile(filePath);
    if (data === null) {
        return false;
    }
    
    const schema = loadSchema(schemaPath);
    if (schema === null) {
        return false;
    }
    
    // Compile and validate
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    if (valid) {
        console.log(`✅ ${filePath} is valid`);
        return true;
    } else {
        console.error(`❌ ${filePath} is invalid:`);
        validate.errors.forEach((error, index) => {
            console.error(`  ${index + 1}. ${error.instancePath}: ${error.message}`);
        });
        return false;
    }
}

/**
 * Validates all configuration files
 * @returns {boolean} True if all files are valid, false otherwise
 */
function validateAllFiles() {
    console.log('🚀 Starting JSON Schema Validation...\n');
    
    let allValid = true;
    let validatedCount = 0;
    let totalCount = 0;
    
    for (const [filePath, schemaPath] of Object.entries(CONFIG_MAPPING)) {
        totalCount++;
        if (validateFile(filePath, schemaPath)) {
            validatedCount++;
        } else {
            allValid = false;
        }
    }
    
    console.log(`\n📊 Validation Summary:`);
    console.log(`  Total files: ${totalCount}`);
    console.log(`  Valid files: ${validatedCount}`);
    console.log(`  Invalid files: ${totalCount - validatedCount}`);
    
    if (allValid) {
        console.log('\n🎉 All configuration files are valid!');
    } else {
        console.log('\n⚠️  Some configuration files have validation errors.');
        process.exit(1);
    }
    
    return allValid;
}

/**
 * Watches for file changes and revalidates
 */
function watchFiles() {
    console.log('👀 Watching for file changes...\n');
    
    const chokidar = require('chokidar');
    const watcher = chokidar.watch([
        'data/**/*.json',
        'schemas/**/*.json'
    ], {
        ignored: /node_modules/,
        persistent: true
    });
    
    watcher.on('change', (filePath) => {
        console.log(`\n🔄 File changed: ${filePath}`);
        
        // Find which config file this corresponds to
        for (const [configPath, schemaPath] of Object.entries(CONFIG_MAPPING)) {
            if (filePath.includes(configPath) || filePath.includes(schemaPath)) {
                validateFile(configPath, schemaPath);
                break;
            }
        }
    });
    
    // Initial validation
    validateAllFiles();
}

// Main execution
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.includes('--watch') || args.includes('-w')) {
        // Check if chokidar is available
        try {
            require('chokidar');
            watchFiles();
        } catch (error) {
            console.error('❌ chokidar is required for watch mode. Install it with: npm install chokidar --save-dev');
            process.exit(1);
        }
    } else {
        validateAllFiles();
    }
}

module.exports = {
    validateFile,
    validateAllFiles,
    loadJsonFile,
    loadSchema
}; 