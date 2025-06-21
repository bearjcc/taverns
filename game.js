// Game state
const gameState = {
    narration: [],
    woodCount: 0,
    skills: {
        woodcutting: {
            name: "Woodcutting",
            xp: 0,
            level: 1,
            xpToNext: 100
        }
    },
    newlyUnlockedActions: [] // Track newly unlocked actions for visual feedback
};

// Woodcutting progression unlocks
const woodcuttingUnlocks = {
    1: {
        name: "Chop Oak",
        description: "Chop oak logs",
        xpReward: 10,
        itemReward: "oak_logs",
        itemCount: 1
    },
    5: {
        name: "Chop Willow",
        description: "Chop willow logs",
        xpReward: 15,
        itemReward: "willow_logs",
        itemCount: 1
    },
    10: {
        name: "Chop Maple",
        description: "Chop maple logs",
        xpReward: 25,
        itemReward: "maple_logs",
        itemCount: 1
    },
    20: {
        name: "Chop Yew",
        description: "Chop yew logs",
        xpReward: 50,
        itemReward: "yew_logs",
        itemCount: 1
    },
    30: {
        name: "Chop Magic",
        description: "Chop magic logs",
        xpReward: 100,
        itemReward: "magic_logs",
        itemCount: 1
    }
};

// Get available actions based on current woodcutting level
function getAvailableWoodcuttingActions() {
    const woodcuttingLevel = gameState.skills.woodcutting.level;
    const availableActions = [];
    
    Object.entries(woodcuttingUnlocks).forEach(([level, action]) => {
        if (woodcuttingLevel >= parseInt(level)) {
            availableActions.push({
                level: parseInt(level),
                ...action
            });
        }
    });
    
    return availableActions;
}

// XP requirements for each level (simple formula: level * 100)
function getXpToNextLevel(level) {
    return level * 100;
}

// Add XP to a skill and handle level ups
function addSkillXp(skillName, xpAmount) {
    const skill = gameState.skills[skillName];
    if (!skill) return;
    
    skill.xp += xpAmount;
    
    // Check for level up
    while (skill.xp >= skill.xpToNext) {
        skill.level++;
        skill.xp -= skill.xpToNext;
        skill.xpToNext = getXpToNextLevel(skill.level);
        
        // Add level up message to narration
        addNarrationMessage(`🎉 ${skill.name} level up! You are now level ${skill.level}.`);
        
        // Check for new unlocks
        checkForNewUnlocks(skillName, skill.level);
    }
    
    // Update skills display
    updateSkillsDisplay();
    // Update actions display
    updateActionsDisplay();
}

// Check for new skill unlocks
function checkForNewUnlocks(skillName, newLevel) {
    if (skillName === 'woodcutting') {
        const unlock = woodcuttingUnlocks[newLevel];
        if (unlock) {
            addNarrationMessage(`🔓 New action unlocked: ${unlock.name} (Level ${newLevel})`);
            // Add to newly unlocked actions for visual feedback
            gameState.newlyUnlockedActions.push(unlock.name);
        }
    }
}

// Calculate progress percentage for skill bar
function getSkillProgress(skill) {
    const progressInLevel = skill.xp;
    const totalForLevel = skill.xpToNext;
    return (progressInLevel / totalForLevel) * 100;
}

// Update the skills display in the sidebar
function updateSkillsDisplay() {
    const skillsContent = document.getElementById('skills-content');
    if (!skillsContent) return;
    
    skillsContent.innerHTML = '';
    
    Object.values(gameState.skills).forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        
        const progress = getSkillProgress(skill);
        
        skillElement.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">Level ${skill.level}</span>
            </div>
            <div class="skill-progress-container">
                <div class="skill-progress-bar">
                    <div class="skill-progress-fill" style="width: ${progress}%"></div>
                </div>
                <span class="skill-xp">${skill.xp}/${skill.xpToNext} XP</span>
            </div>
        `;
        
        skillsContent.appendChild(skillElement);
    });
}

// Update the actions display
function updateActionsDisplay() {
    const actionsContent = document.querySelector('.actions-content');
    if (!actionsContent) return;
    
    actionsContent.innerHTML = '';
    
    const availableActions = getAvailableWoodcuttingActions();
    
    availableActions.forEach(action => {
        const actionButton = document.createElement('button');
        actionButton.className = 'action-button';
        actionButton.textContent = `${action.name} (${action.xpReward} XP)`;
        actionButton.setAttribute('data-action', action.name.toLowerCase().replace(/\s+/g, '-'));
        actionButton.setAttribute('data-xp', action.xpReward);
        actionButton.setAttribute('data-item', action.itemReward);
        actionButton.setAttribute('data-count', action.itemCount);
        
        // Add visual feedback for newly unlocked actions
        if (gameState.newlyUnlockedActions.includes(action.name)) {
            actionButton.classList.add('new-unlock');
        }
        
        actionButton.addEventListener('click', () => handleWoodcuttingAction(action));
        actionsContent.appendChild(actionButton);
    });
}

// Handle woodcutting actions
function handleWoodcuttingAction(action) {
    // Add XP to woodcutting skill
    addSkillXp('woodcutting', action.xpReward);
    
    // Add item to inventory (placeholder for now)
    if (!gameState.inventory) {
        gameState.inventory = {};
    }
    
    if (!gameState.inventory[action.itemReward]) {
        gameState.inventory[action.itemReward] = 0;
    }
    
    gameState.inventory[action.itemReward] += action.itemCount;
    
    // Add narration message
    addNarrationMessage(`You ${action.name.toLowerCase()} and gained ${action.xpReward} XP. (${action.itemReward}: ${gameState.inventory[action.itemReward]})`);
    
    // Remove from newly unlocked actions after first use
    const index = gameState.newlyUnlockedActions.indexOf(action.name);
    if (index > -1) {
        gameState.newlyUnlockedActions.splice(index, 1);
        updateActionsDisplay(); // Refresh to remove the visual effect
    }
}

// Tab switching functionality
function switchTab(tabName) {
    // Remove active class from all tabs and panels
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    // Add active class to selected tab and panel
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// DOM elements
const narrationContent = document.getElementById('narration-content');

// Narration system
function addNarrationMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'narration-message';
    messageElement.textContent = message;
    
    narrationContent.appendChild(messageElement);
    
    // Auto-scroll to bottom
    narrationContent.scrollTop = narrationContent.scrollHeight;
    
    // Store in game state
    gameState.narration.push(message);
}

// Tab event listeners
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
});

// Initialize game
function initGame() {
    addNarrationMessage('Hello world');
    updateSkillsDisplay();
    updateActionsDisplay();
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame); 