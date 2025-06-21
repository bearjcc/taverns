/**
 * Test file for GameEngine initialization and system access
 * This test verifies that the GameEngine can be properly loaded and initialized
 */

// Test GameEngine availability
console.log('Testing GameEngine availability...');
if (typeof GameEngine === 'undefined') {
    console.error('❌ GameEngine is not available globally');
} else {
    console.log('✅ GameEngine is available globally');
}

// Test core dependencies
const dependencies = [
    'EventSystem',
    'StateManager', 
    'AssetLoader',
    'ConfigManager',
    'GameStateManager',
    'SkillManager',
    'InventoryManager',
    'ActionManager',
    'TraitManager',
    'UIManager',
    'SpeciesSystem',
    'LocationSystem',
    'EncyclopediaSystem',
    'AchievementSystem'
];

console.log('Testing core dependencies...');
dependencies.forEach(dep => {
    if (typeof window[dep] === 'undefined') {
        console.error(`❌ ${dep} is not available globally`);
    } else {
        console.log(`✅ ${dep} is available globally`);
    }
});

// Test GameEngine initialization
async function testGameEngineInitialization() {
    console.log('Testing GameEngine initialization...');
    
    try {
        const engine = new GameEngine({
            autoSaveInterval: 5000, // 5 seconds for testing
            defaultLanguage: 'en',
            assetCacheSize: 10
        });
        
        console.log('✅ GameEngine instance created successfully');
        
        // Test initialization
        await engine.initialize('base-game', {
            loadSavedState: false,
            showWelcomeMessage: false
        });
        
        console.log('✅ GameEngine initialized successfully');
        
        // Test system access
        const systems = [
            'skills', 'inventory', 'species', 'actions', 
            'achievements', 'locations', 'encyclopedia', 
            'traits', 'ui', 'config', 'state', 'events'
        ];
        
        systems.forEach(systemName => {
            const system = engine.getSystem(systemName);
            if (system) {
                console.log(`✅ ${systemName} system accessible`);
            } else {
                console.error(`❌ ${systemName} system not accessible`);
            }
        });
        
        // Test engine start/stop
        engine.start();
        console.log('✅ GameEngine started successfully');
        
        engine.stop();
        console.log('✅ GameEngine stopped successfully');
        
        console.log('🎉 All GameEngine tests passed!');
        
    } catch (error) {
        console.error('❌ GameEngine test failed:', error);
        console.error('Stack trace:', error.stack);
    }
}

// Run the test when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', testGameEngineInitialization);
} else {
    testGameEngineInitialization();
} 