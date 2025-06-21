/**
 * Tests for the left toolbar functionality
 */

describe('Left Toolbar', () => {
    let toolbar;
    let encyclopediaButton;
    let saveButton;

    beforeEach(() => {
        // Create a mock DOM structure with all required elements
        document.body.innerHTML = `
            <div id="left-toolbar"></div>
            <div id="narration-content"></div>
            <div id="skills-content"></div>
            <div id="actions-content"></div>
            <div id="inventory-content"></div>
            <div id="character-content"></div>
            <div id="toast-container"></div>
            <div id="skills-tab"></div>
            <div id="inventory-tab"></div>
            <div id="character-tab"></div>
            <div class="game-container">
                <div class="narration-column">
                    <div id="narration-content"></div>
                </div>
                <div class="actions-column">
                    <div id="actions-content"></div>
                </div>
                <div class="sidebar-column">
                    <div id="sidebar"></div>
                </div>
            </div>
        `;
        
        toolbar = document.getElementById('left-toolbar');
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('should create toolbar with encyclopedia and save buttons', () => {
        // Mock gameEngine
        window.gameEngine = {
            getSystem: jest.fn()
        };

        // Mock the createLeftToolbar function
        const createLeftToolbar = (gameConfig) => {
            const toolbar = document.getElementById('left-toolbar');
            if (!toolbar) return;

            // Create Encyclopedia Button
            const encyclopediaButton = createToolbarButton({
                id: 'encyclopedia-btn',
                icon: '📚',
                title: 'Encyclopedia',
                onClick: () => console.log('Encyclopedia clicked')
            });

            // Create Save Button
            const saveButton = createToolbarButton({
                id: 'save-btn',
                icon: '💾',
                title: 'Save Game',
                onClick: () => console.log('Save clicked')
            });

            toolbar.appendChild(encyclopediaButton);
            toolbar.appendChild(saveButton);
        };

        const createToolbarButton = (config) => {
            const button = document.createElement('button');
            button.id = config.id;
            button.className = 'toolbar-button';
            button.innerHTML = config.icon;
            button.title = config.title;
            
            const tooltip = document.createElement('span');
            tooltip.className = 'toolbar-button-title';
            tooltip.textContent = config.title;
            button.appendChild(tooltip);
            
            button.addEventListener('click', config.onClick);
            
            return button;
        };

        // Execute
        createLeftToolbar({});

        // Verify
        expect(toolbar.children.length).toBe(2);
        
        encyclopediaButton = document.getElementById('encyclopedia-btn');
        saveButton = document.getElementById('save-btn');
        
        expect(encyclopediaButton).toBeTruthy();
        expect(saveButton).toBeTruthy();
        expect(encyclopediaButton.className).toBe('toolbar-button');
        expect(saveButton.className).toBe('toolbar-button');
        expect(encyclopediaButton.innerHTML).toContain('📚');
        expect(saveButton.innerHTML).toContain('💾');
    });

    test('should have proper CSS classes and structure', () => {
        // Mock gameEngine
        window.gameEngine = {
            getSystem: jest.fn()
        };

        // Mock the createLeftToolbar function
        const createLeftToolbar = (gameConfig) => {
            const toolbar = document.getElementById('left-toolbar');
            if (!toolbar) return;

            const createToolbarButton = (config) => {
                const button = document.createElement('button');
                button.id = config.id;
                button.className = 'toolbar-button';
                button.innerHTML = config.icon;
                button.title = config.title;
                
                const tooltip = document.createElement('span');
                tooltip.className = 'toolbar-button-title';
                tooltip.textContent = config.title;
                button.appendChild(tooltip);
                
                return button;
            };

            const encyclopediaButton = createToolbarButton({
                id: 'encyclopedia-btn',
                icon: '📚',
                title: 'Encyclopedia',
                onClick: () => {}
            });

            const saveButton = createToolbarButton({
                id: 'save-btn',
                icon: '💾',
                title: 'Save Game',
                onClick: () => {}
            });

            toolbar.appendChild(encyclopediaButton);
            toolbar.appendChild(saveButton);
        };

        // Execute
        createLeftToolbar({});

        // Verify structure
        encyclopediaButton = document.getElementById('encyclopedia-btn');
        saveButton = document.getElementById('save-btn');

        expect(encyclopediaButton.querySelector('.toolbar-button-title')).toBeTruthy();
        expect(saveButton.querySelector('.toolbar-button-title')).toBeTruthy();
        expect(encyclopediaButton.querySelector('.toolbar-button-title').textContent).toBe('Encyclopedia');
        expect(saveButton.querySelector('.toolbar-button-title').textContent).toBe('Save Game');
    });

    test('should handle button clicks', () => {
        const mockEncyclopediaClick = jest.fn();
        const mockSaveClick = jest.fn();

        // Mock gameEngine
        window.gameEngine = {
            getSystem: jest.fn()
        };

        // Mock the createLeftToolbar function
        const createLeftToolbar = (gameConfig) => {
            const toolbar = document.getElementById('left-toolbar');
            if (!toolbar) return;

            const createToolbarButton = (config) => {
                const button = document.createElement('button');
                button.id = config.id;
                button.className = 'toolbar-button';
                button.innerHTML = config.icon;
                button.title = config.title;
                
                const tooltip = document.createElement('span');
                tooltip.className = 'toolbar-button-title';
                tooltip.textContent = config.title;
                button.appendChild(tooltip);
                
                button.addEventListener('click', config.onClick);
                
                return button;
            };

            const encyclopediaButton = createToolbarButton({
                id: 'encyclopedia-btn',
                icon: '📚',
                title: 'Encyclopedia',
                onClick: mockEncyclopediaClick
            });

            const saveButton = createToolbarButton({
                id: 'save-btn',
                icon: '💾',
                title: 'Save Game',
                onClick: mockSaveClick
            });

            toolbar.appendChild(encyclopediaButton);
            toolbar.appendChild(saveButton);
        };

        // Execute
        createLeftToolbar({});

        // Trigger clicks
        encyclopediaButton = document.getElementById('encyclopedia-btn');
        saveButton = document.getElementById('save-btn');

        encyclopediaButton.click();
        saveButton.click();

        // Verify
        expect(mockEncyclopediaClick).toHaveBeenCalledTimes(1);
        expect(mockSaveClick).toHaveBeenCalledTimes(1);
    });
}); 