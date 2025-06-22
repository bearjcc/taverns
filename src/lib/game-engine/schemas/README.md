# JSON Schema Validation

This directory contains JSON schemas for validating game configuration files. The schemas ensure data integrity and provide clear documentation of expected data structures.

## Schema Files

### game-config.schema.json
Validates the main game configuration file (`data/config/game-config.json`).

**Validates:**
- UI configuration (tabs, CSS classes, element IDs)
- Game constants (XP multiplier, default levels, etc.)
- User-facing messages
- Game settings

### skills.schema.json
Validates the skills configuration file (`data/skills.json`).

**Validates:**
- Skill definitions with levels and experience
- Sub-skills and their requirements
- Skill hierarchies and dependencies

### items.schema.json
Validates the items configuration file (`data/items.json`).

**Validates:**
- Item properties (name, description, icon)
- Stacking behavior and limits
- Item types and rarity
- Value and examine text

### actions.schema.json
Validates the actions configuration file (`data/config/actions.json`).

**Validates:**
- Action definitions and requirements
- Skill type associations
- XP and item rewards
- Item consumption requirements
- Time requirements and cooldowns

### traits.schema.json
Validates the traits configuration file (`data/traits.json`).

**Validates:**
- Trait definitions and categories
- Effect bonuses and requirements
- Rarity and icon specifications

### species.schema.json
Validates the species configuration file (`data/species.json`).

**Validates:**
- Species definitions and base stats
- Skill bonuses and starting items
- Trait associations and unlocked actions

## Usage

### Command Line Validation

```bash
# Validate all configuration files
npm run validate

# Validate with watch mode (revalidates on file changes)
npm run validate:watch
```

### Runtime Validation

The game engine includes a `SchemaValidator` class for runtime validation:

```javascript
import { SchemaValidator } from './engine/utils/SchemaValidator.js';

const validator = new SchemaValidator();

// Load and validate configuration
const result = validator.validate(configData, 'game-config');
if (!result.isValid) {
    console.error('Validation errors:', validator.formatErrors(result.errors));
}
```

### Validation in GitHub Actions

The validation runs automatically on:
- Push to main/develop branches
- Pull requests to main/develop branches

The workflow validates all schemas and runs linting before allowing merges.

## Schema Standards

### Naming Conventions
- Schema files use kebab-case: `game-config.schema.json`
- Schema titles use Title Case: "Game Configuration Schema"
- Property names use camelCase for consistency

### Validation Rules
- All required fields are explicitly defined
- Default values are provided where appropriate
- String patterns use regex for validation
- Numeric values have minimum/maximum constraints
- Enums are used for constrained string values

### Error Handling
- Schemas provide meaningful error messages
- Fallback values are applied for missing optional fields
- Validation errors are logged with context

## Adding New Schemas

1. Create a new schema file in this directory
2. Follow the naming convention: `{config-name}.schema.json`
3. Include proper JSON Schema metadata
4. Add the schema to the validation script mapping
5. Update this README with schema documentation

### Schema Template

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Configuration Schema",
  "description": "Schema for configuration file",
  "type": "object",
  "properties": {
    // Define properties here
  },
  "required": ["requiredField1", "requiredField2"],
  "additionalProperties": false
}
```

## Best Practices

1. **Be Specific**: Define exact types and constraints
2. **Provide Defaults**: Include default values for optional fields
3. **Document**: Add descriptions for complex properties
4. **Test**: Validate schemas against sample data
5. **Version**: Use JSON Schema Draft 07 for compatibility

## Troubleshooting

### Common Validation Errors

1. **Missing Required Fields**: Ensure all required properties are present
2. **Type Mismatches**: Check that values match expected types
3. **Pattern Violations**: Verify string patterns (regex) are correct
4. **Enum Values**: Ensure values are from the allowed enum list

### Debugging

Use the watch mode to see validation errors in real-time:

```bash
npm run validate:watch
```

Check the console output for detailed error messages and file paths. 