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
    }
};

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
    }
    
    // Update skills display
    updateSkillsDisplay();
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
const chopWoodBtn = document.getElementById('chop-wood-btn');

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

// Action handlers
function handleChopWood() {
    gameState.woodCount++;
    addNarrationMessage(`You chopped some wood. (Total: ${gameState.woodCount})`);
    
    // Add XP to woodcutting skill
    addSkillXp('woodcutting', 10);
}

// Event listeners
chopWoodBtn.addEventListener('click', handleChopWood);

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
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame); 