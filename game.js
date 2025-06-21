// Game state
const gameState = {
    narration: [],
    woodCount: 0
};

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
}

// Event listeners
chopWoodBtn.addEventListener('click', handleChopWood);

// Initialize game
function initGame() {
    addNarrationMessage('Hello world');
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame); 