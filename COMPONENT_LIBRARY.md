# Taverns Game - Component Library

A lightweight, vanilla JavaScript component library designed specifically for the Taverns game. This library provides reusable UI components without external dependencies.

## Features

- **No Dependencies**: Pure vanilla JavaScript and CSS
- **Dark Theme**: Matches the game's aesthetic
- **Lightweight**: Minimal bundle size impact
- **Customizable**: Easy to modify and extend
- **Accessible**: Built with accessibility in mind

## Components

### Modal
A modal dialog component for displaying content over the game interface.

```javascript
// Basic usage
const modal = gameState.ui.showModal('Title', 'Content');

// Advanced usage
const modal = gameState.ui.components.create('modal', element, {
    title: 'Custom Title',
    content: '<p>HTML content</p>',
    width: '600px',
    closeOnOverlay: true,
    showCloseButton: true
});

modal.open();
modal.close();
modal.setContent('New content');
modal.setTitle('New title');
```

### Tooltip
Contextual information that appears on hover or focus.

```javascript
// Add tooltip to any element
gameState.ui.addTooltip(element, 'Tooltip text', {
    position: 'top', // 'top', 'bottom', 'left', 'right'
    delay: 200,
    maxWidth: '200px'
});
```

### Progress Bar
Animated progress indicators with customizable labels.

```javascript
// Create progress bar
const progressBar = gameState.ui.createProgressBar(element, {
    value: 25,
    max: 100,
    showLabel: true,
    labelFormat: '{value}/{max}',
    color: 'var(--primary-color)'
});

// Update progress
progressBar.setValue(50);
progressBar.setMax(200);
```

### Dropdown
Select dropdown with customizable options.

```javascript
// Create dropdown
const dropdown = gameState.ui.createDropdown(element, {
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
    ],
    placeholder: 'Select an option',
    onChange: (value) => console.log('Selected:', value)
});

// Set value programmatically
dropdown.setValue('option1');
```

## Utility Classes

The component library includes utility CSS classes for common styling needs:

### Layout
- `.flex` - Display flex
- `.flex-column` - Flex direction column
- `.flex-center` - Center content
- `.flex-between` - Space between
- `.flex-1` - Flex grow 1

### Spacing
- `.mt-10`, `.mb-10`, `.ml-10`, `.mr-10` - Margins
- `.p-10`, `.p-15`, `.p-20` - Padding
- `.gap-10`, `.gap-15` - Gap between flex items

### Text
- `.text-center`, `.text-right` - Text alignment
- `.text-muted`, `.text-primary`, `.text-success`, `.text-warning`, `.text-error` - Text colors

### Components
- `.card` - Card container
- `.card-header` - Card header
- `.card-title` - Card title
- `.card-content` - Card content
- `.button` - Base button
- `.button-primary`, `.button-success`, `.button-warning`, `.button-error` - Button variants
- `.form-group` - Form group container
- `.form-label` - Form label
- `.form-input` - Form input
- `.form-textarea` - Form textarea

## Usage Examples

### Creating a Custom Modal
```javascript
function showSkillDetails(skillName) {
    const skill = gameState.skillManager.getSkill(skillName);
    const content = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${skillName}</h3>
            </div>
            <div class="card-content">
                <p>Level: ${skill.level}</p>
                <p>Experience: ${skill.xp}/${skill.xpToNext}</p>
                <div id="skill-progress"></div>
            </div>
        </div>
    `;
    
    const modal = gameState.ui.showModal(`${skillName} Details`, content);
    
    // Add progress bar to modal
    setTimeout(() => {
        const progressElement = modal.element.querySelector('#skill-progress');
        if (progressElement) {
            gameState.ui.createProgressBar(progressElement, {
                value: skill.xp,
                max: skill.xpToNext,
                labelFormat: '{value}/{max} XP'
            });
        }
    }, 100);
}
```

### Adding Tooltips to Action Buttons
```javascript
function addActionTooltips() {
    const actionButtons = document.querySelectorAll('.action-button');
    actionButtons.forEach(button => {
        const actionName = button.textContent;
        const action = findActionByName(actionName);
        if (action) {
            gameState.ui.addTooltip(button, action.description, {
                position: 'left',
                maxWidth: '250px'
            });
        }
    });
}
```

### Creating a Settings Panel
```javascript
function showSettings() {
    const content = `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Game Settings</h3>
            </div>
            <div class="card-content">
                <div class="form-group">
                    <label class="form-label">Auto-save Interval:</label>
                    <div id="autosave-dropdown"></div>
                </div>
                <div class="form-group">
                    <label class="form-label">Sound Volume:</label>
                    <div id="volume-progress"></div>
                </div>
                <div class="flex gap-10 mt-15">
                    <button class="button button-primary" id="save-settings">Save Settings</button>
                    <button class="button" id="reset-settings">Reset to Default</button>
                </div>
            </div>
        </div>
    `;
    
    const modal = gameState.ui.showModal('Settings', content);
    
    setTimeout(() => {
        // Add dropdown
        const dropdownElement = modal.element.querySelector('#autosave-dropdown');
        if (dropdownElement) {
            gameState.ui.createDropdown(dropdownElement, {
                options: [
                    { value: 1, label: '1 minute' },
                    { value: 2, label: '2 minutes' },
                    { value: 5, label: '5 minutes' }
                ],
                placeholder: 'Select interval',
                value: 2
            });
        }
        
        // Add progress bar
        const progressElement = modal.element.querySelector('#volume-progress');
        if (progressElement) {
            gameState.ui.createProgressBar(progressElement, {
                value: 75,
                max: 100,
                labelFormat: '{value}%'
            });
        }
    }, 100);
}
```

## Extending the Library

### Creating a New Component
```javascript
class CustomComponent extends Component {
    get defaultConfig() {
        return {
            // Default configuration
        };
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.element.innerHTML = `
            <!-- Component HTML -->
        `;
    }

    bindEvents() {
        // Add event listeners
    }
}

// Register the component
gameState.ui.components.register('custom', CustomComponent);
```

### Adding Custom Styles
```css
/* Add to components.css */
.custom-component {
    /* Component styles */
}

.custom-component-header {
    /* Header styles */
}

.custom-component-content {
    /* Content styles */
}
```

## Best Practices

1. **Always check for UI availability**: `if (gameState.ui) { ... }`
2. **Use setTimeout for dynamic content**: When adding components to modals
3. **Clean up components**: Use `destroy()` method when removing components
4. **Follow the dark theme**: Use CSS custom properties for colors
5. **Maintain accessibility**: Include proper ARIA labels and keyboard navigation

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- No IE11 support (by design)

## Performance Notes

- Components are lightweight and optimized for the game's needs
- No virtual DOM or complex state management
- Direct DOM manipulation for maximum performance
- Minimal memory footprint 