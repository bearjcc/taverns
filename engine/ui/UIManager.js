class UIManager {
    constructor() {
        this.currentTab = 'skills';
        this.toastContainer = null;
        this.initializeToastContainer();
    }

    initializeToastContainer() {
        this.toastContainer = document.getElementById('toast-container');
        if (!this.toastContainer) {
            this.toastContainer = document.createElement('div');
            this.toastContainer.id = 'toast-container';
            this.toastContainer.className = 'toast-container';
            document.body.appendChild(this.toastContainer);
        }
    }

    updateSkillsDisplay(skillManager, gameConfig) {
        const skillsContent = document.getElementById('skills-content');
        if (!skillsContent) return;

        const skills = skillManager.getAllSkills();
        let html = '<h3>Skills</h3>';

        if (skills.length === 0) {
            html += '<p>No skills available.</p>';
        } else {
            for (const skill of skills) {
                html += this.createSkillHtml(skill.name, skill, gameConfig);
            }
        }

        skillsContent.innerHTML = html;
    }

    createSkillHtml(skillName, skill, gameConfig) {
        const cssClasses = gameConfig?.ui?.cssClasses || {};
        const progress = skill.getProgress();
        
        return `
            <div class="${cssClasses.skillItem || 'skill-item'}">
                <div class="${cssClasses.skillHeader || 'skill-header'}">
                    <span class="${cssClasses.skillName || 'skill-name'}">${skillName}</span>
                    <span class="${cssClasses.skillLevel || 'skill-level'}">Level ${skill.level}</span>
                </div>
                <div class="${cssClasses.skillProgressContainer || 'skill-progress-container'}">
                    <div class="${cssClasses.skillProgressBar || 'skill-progress-bar'}">
                        <div class="${cssClasses.skillProgressFill || 'skill-progress-fill'}" 
                             style="width: ${progress}%"></div>
                    </div>
                    <span class="${cssClasses.skillXp || 'skill-xp'}">${skill.xp}/${skill.xpToNext} XP</span>
                </div>
            </div>
        `;
    }

    updateActionsDisplay(actionManager, skillManager, inventoryManager, gameConfig) {
        const actionsContent = document.getElementById('actions-content');
        if (!actionsContent) return;

        const availableActions = actionManager.getAvailableActions(skillManager, inventoryManager);
        let html = '';

        for (const action of availableActions) {
            html += this.createActionHtml(action, gameConfig);
        }

        actionsContent.innerHTML = html;
    }

    createActionHtml(action, gameConfig) {
        const cssClasses = gameConfig?.ui?.cssClasses || {};
        const isNewlyUnlocked = actionManager.isNewlyUnlocked(action.name);
        const newUnlockClass = isNewlyUnlocked ? ` ${cssClasses.newUnlock || 'new-unlock'}` : '';
        const skill = skillManager.getSkill(action.skillType);
        const canPerform = skill && action.canPerform(skill.level, inventoryManager);
        const disabledAttr = canPerform ? '' : 'disabled';
        const lockedClass = canPerform ? '' : ' locked';
        
        let timeDisplay = '';
        if (action.timeRequired > 0) {
            timeDisplay = `<div class="${cssClasses.actionTime || 'action-time'}">⏱️ ${action.getTimeDisplay()}</div>`;
        }

        let variableInput = '';
        if (action.hasVariables()) {
            variableInput = `
                <div class="${cssClasses.actionVariable || 'action-variable'}">
                    <input type="number" min="1" value="1" id="var-${action.name}" 
                           placeholder="Amount" style="width: 60px; margin-right: 5px;">
                </div>
            `;
        }

        return `
            <button class="${cssClasses.actionButton || 'action-button'}${newUnlockClass}${lockedClass}" 
                    onclick="handleAction('${action.name}')" 
                    title="${action.tooltip || action.description}" ${disabledAttr}>
                <div class="${cssClasses.actionIcon || 'action-icon'}">${action.icon}</div>
                <div class="${cssClasses.actionTitle || 'action-title'}">${action.displayName}</div>
                <div class="${cssClasses.actionDescription || 'action-description'}">${action.description}</div>
                ${timeDisplay}
                ${variableInput}
            </button>
        `;
    }

    updateInventoryDisplay(inventoryManager, gameConfig) {
        const inventoryTab = document.getElementById('inventory-tab');
        if (!inventoryTab) return;

        const items = inventoryManager.getAllItems();
        let html = '<h3>Inventory</h3>';

        if (items.length === 0) {
            html += '<p>Your inventory is empty.</p>';
        } else {
            html += '<div class="inventory-grid">';
            for (const item of items) {
                html += this.createInventoryItemHtml(item, gameConfig);
            }
            html += '</div>';
        }

        inventoryTab.innerHTML = html;
    }

    createInventoryItemHtml(inventoryItem, gameConfig) {
        const gameObject = inventoryItem.gameObject;
        return `
            <div class="inventory-item" 
                 onclick="showItemContextMenu(event, '${gameObject.id}', ${JSON.stringify(inventoryItem).replace(/"/g, '&quot;')})">
                <div class="item-icon">${gameObject.icon}</div>
                <div class="item-name">${gameObject.displayName}</div>
                <div class="item-quantity">x${inventoryItem.quantity}</div>
            </div>
        `;
    }

    updateCharacterDisplay(traitManager, gameConfig) {
        const characterTab = document.getElementById('character-tab');
        if (!characterTab) return;

        const traits = traitManager.getAllTraits();
        let html = '<h3>Character</h3>';

        if (traits.length === 0) {
            html += '<p>No traits available.</p>';
        } else {
            html += '<div class="traits-grid">';
            for (const trait of traits) {
                html += this.createTraitHtml(trait, gameConfig);
            }
            html += '</div>';
        }

        characterTab.innerHTML = html;
    }

    createTraitHtml(trait, gameConfig) {
        const cssClasses = gameConfig?.ui?.cssClasses || {};
        const progress = trait.getProgress();
        
        return `
            <div class="trait-item">
                <div class="trait-header">
                    <span class="trait-icon">${trait.icon}</span>
                    <span class="trait-name">${trait.name}</span>
                    <span class="trait-level">Level ${trait.level}</span>
                </div>
                <div class="trait-description">${trait.description}</div>
                <div class="${cssClasses.skillProgressContainer || 'skill-progress-container'}">
                    <div class="${cssClasses.skillProgressBar || 'skill-progress-bar'}">
                        <div class="${cssClasses.skillProgressFill || 'skill-progress-fill'}" 
                             style="width: ${progress}%"></div>
                    </div>
                    <span class="${cssClasses.skillXp || 'skill-xp'}">${trait.xp}/${trait.xpToNext} XP</span>
                </div>
            </div>
        `;
    }

    switchTab(tabName) {
        this.currentTab = tabName;
        
        // Hide all tab panels
        const tabPanels = document.querySelectorAll('.tab-panel');
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Remove active class from all tab buttons
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => button.classList.remove('active'));
        
        // Show selected tab panel
        const selectedPanel = document.getElementById(`${tabName}-tab`);
        if (selectedPanel) {
            selectedPanel.classList.add('active');
        }
        
        // Add active class to selected tab button
        const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (selectedButton) {
            selectedButton.classList.add('active');
        }
    }

    generateTabsFromConfig(gameConfig) {
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;

        const tabs = gameConfig?.ui?.tabs || [];
        const cssClasses = gameConfig?.ui?.cssClasses || {};
        const elementIds = gameConfig?.ui?.elementIds || {};

        let tabsHtml = '<div class="tab-buttons">';
        let panelsHtml = '<div class="tab-panels">';

        tabs.forEach((tab, index) => {
            const isActive = index === 0 ? 'active' : '';
            const tabId = elementIds[`${tab.id}Tab`] || `${tab.id}-tab`;
            
            tabsHtml += `
                <button class="${cssClasses.tabButton || 'tab-button'} ${isActive}" 
                        data-tab="${tab.id}" 
                        onclick="uiManager.switchTab('${tab.id}')">
                    <span class="tab-icon">${tab.icon}</span>
                    <span class="tab-name">${tab.displayName}</span>
                </button>
            `;

            panelsHtml += `
                <div id="${tabId}" class="${cssClasses.tabPanel || 'tab-panel'} ${isActive}">
                    <div class="tab-content" id="${tab.id}-content">
                        <h3>${tab.displayName}</h3>
                        <p>Loading ${tab.displayName.toLowerCase()}...</p>
                    </div>
                </div>
            `;
        });

        tabsHtml += '</div>';
        panelsHtml += '</div>';

        // Add manual save button
        const saveButtonHtml = `
            <div class="manual-save-container">
                <button class="manual-save-button" onclick="uiManager.manualSave(skillManager, inventoryManager, traitManager)">
                    💾 Save Game
                </button>
                <div id="last-saved-time" class="last-saved-time"></div>
            </div>
        `;

        sidebar.innerHTML = tabsHtml + panelsHtml + saveButtonHtml;
    }

    addNarrationMessage(message) {
        const narrationContent = document.getElementById('narration-content');
        if (!narrationContent) return;

        const messageElement = document.createElement('div');
        messageElement.className = 'narration-message';
        messageElement.textContent = message;
        
        narrationContent.appendChild(messageElement);
        narrationContent.scrollTop = narrationContent.scrollHeight;
    }

    showToast(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        this.toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, duration);
    }

    flashXpGain(skillName, xpAmount) {
        const skillElement = document.querySelector(`[data-skill="${skillName}"]`);
        if (skillElement) {
            skillElement.classList.add('xp-gain');
            setTimeout(() => {
                skillElement.classList.remove('xp-gain');
            }, 1000);
        }
    }

    updateLastSavedTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        console.log(`Game state saved at ${timeString}`);
        
        // Update the display in the UI
        const lastSavedElement = document.getElementById('last-saved-time');
        if (lastSavedElement) {
            lastSavedElement.textContent = `Last saved: ${timeString}`;
        }
    }

    manualSave(skillManager, inventoryManager, traitManager) {
        try {
            const success = gameStateManager.saveGameState(skillManager, inventoryManager, traitManager);
            if (success) {
                this.showToast('Game saved successfully', 'success');
                this.updateLastSavedTime();
            } else {
                this.showToast('Failed to save game', 'error');
            }
        } catch (error) {
            console.error('Manual save failed:', error);
            this.showToast('Failed to save game', 'error');
        }
    }

    showItemContextMenu(event, itemId, inventoryItem) {
        event.preventDefault();
        this.removeContextMenu();

        const menu = document.createElement('div');
        menu.className = 'context-menu';
        menu.innerHTML = `
            <div class="context-menu-item" onclick="handleItemAction('examine', '${itemId}')">Examine</div>
            <div class="context-menu-item" onclick="handleItemAction('use', '${itemId}')">Use</div>
            <div class="context-menu-item" onclick="handleItemAction('drop', '${itemId}')">Drop</div>
        `;

        menu.style.left = event.pageX + 'px';
        menu.style.top = event.pageY + 'px';
        document.body.appendChild(menu);

        document.addEventListener('click', this.removeContextMenu);
    }

    removeContextMenu() {
        const existingMenu = document.querySelector('.context-menu');
        if (existingMenu) {
            existingMenu.remove();
        }
        document.removeEventListener('click', this.removeContextMenu);
    }
} 