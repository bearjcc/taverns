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

    updateSkillsDisplay(skillManager, skillsConfig) {
        const skillsContent = document.getElementById('skills-content');
        if (!skillsContent) return;

        const { skill_categories, skills: skillsData } = skillsConfig;
        const playerSkills = skillManager.getAllSkills();
        let html = '';

        skill_categories.forEach(category => {
            html += this.createSkillCategoryHtml(category);

            const skillsInCategoryNames = Object.keys(skillsData).filter(skillName => skillsData[skillName].type === category.id);

            if (skillsInCategoryNames.length > 0) {
                skillsInCategoryNames.forEach(skillName => {
                    const skillDetails = skillsData[skillName];
                    let playerSkill = playerSkills.find(s => s.name === skillName);

                    if (!playerSkill) {
                        // Create a mock skill object for locked skills or skills the player hasn't acquired yet
                        playerSkill = { name: skillName, level: 0, locked: skillDetails.locked, xp: 0, xpToNext: 100, getProgress: () => 0 };
                    }
                    html += this.createSkillHtml(skillName, skillDetails, playerSkill);
                });
            }
            html += `</div></div>`;
        });

        skillsContent.innerHTML = html;
    }

    createSkillCategoryHtml(category) {
        return `
            <div class="skill-category">
                <div class="skill-category-header" onclick="uiManager.toggleSkillCategory(this)">
                    <span class="skill-category-toggle">▶</span>
                    <span class="skill-category-name">${category.name.toUpperCase()}</span>
                </div>
                <div class="skill-items-container">
        `;
    }

    createSkillHtml(skillName, skillDetails, playerSkill) {
        const isLocked = playerSkill.locked || skillDetails.locked;

        if (isLocked) {
            return `
                <div class="skill-item locked">
                    <div class="skill-info">
                        <span class="skill-icon">${skillDetails.icon}</span>
                        <span class="skill-name">${skillName}</span>
                    </div>
                    <span class="skill-lock-icon">🔒</span>
                </div>
            `;
        }

        const progress = playerSkill.getProgress ? playerSkill.getProgress() : 0;

        return `
            <div class="skill-item">
                <div class="skill-info">
                    <span class="skill-icon">${skillDetails.icon}</span>
                    <span class="skill-name">${skillName}</span>
                    <span class="skill-level-info">(${playerSkill.level} / 120)</span>
                </div>
                <div class="skill-progress-container">
                    <div class="skill-progress-bar">
                        <div class="skill-progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
            </div>
        `;
    }

    toggleSkillCategory(headerElement) {
        const category = headerElement.closest('.skill-category');
        category.classList.toggle('collapsed');
    }

    updateActionsDisplay(actionManager, skillManager, inventoryManager, gameConfig) {
        const actionsContent = document.getElementById('actions-content');
        if (!actionsContent) return;

        const availableActions = actionManager.getAvailableActions(skillManager, inventoryManager);
        let html = '';

        for (const action of availableActions) {
            html += this.createActionHtml(action, actionManager, skillManager, inventoryManager, gameConfig);
        }

        actionsContent.innerHTML = html;
    }

    createActionHtml(action, actionManager, skillManager, inventoryManager, gameConfig) {
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
        const inventoryContent = document.getElementById('inventory-content');
        if (!inventoryContent) return;

        const items = inventoryManager.getAllItems();
        let html = '';

        if (items.length === 0) {
            html += '<p class="text-muted">Your inventory is empty.</p>';
        } else {
            for (const item of items) {
                html += this.createInventoryItemHtml(item, gameConfig);
            }
        }

        inventoryContent.innerHTML = html;
    }

    createInventoryItemHtml(inventoryItem, gameConfig) {
        const gameObject = inventoryItem.gameObject;
        const itemJson = JSON.stringify(inventoryItem).replace(/"/g, '&quot;');
        return `
            <div class="inventory-item" 
                 onclick="uiManager.showItemContextMenu(event, '${gameObject.id}', ${itemJson})">
                <div class="item-icon">${gameObject.icon}</div>
                <div class="item-info">
                    <span class="item-name">${gameObject.displayName}</span>
                    <span class="item-quantity">x${inventoryItem.quantity}</span>
                </div>
            </div>
        `;
    }

    updateCharacterDisplay(traitManager, gameConfig) {
        const characterContent = document.getElementById('character-content');
        if (!characterContent) return;

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

        characterContent.innerHTML = html;
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

    updateAchievementsDisplay(achievementSystem, gameConfig) {
        const achievementsContent = document.getElementById('achievements-content');
        if (!achievementsContent) return;

        const achievementsData = achievementSystem.getAllAchievements();
        const unlockedAchievements = achievementSystem.getUnlockedAchievements();
        const achievementProgress = achievementSystem.getAchievementProgress();

        // Group by category
        const categories = {};
        for (const [id, achievement] of Object.entries(achievementsData)) {
            const category = achievement.category || 'General';
            if (!categories[category]) categories[category] = [];
            categories[category].push({ ...achievement, id });
        }
        // Sort by points descending
        for (const cat in categories) {
            categories[cat].sort((a, b) => (b.points || 0) - (a.points || 0));
        }

        let html = '';
        Object.entries(categories).forEach(([category, achievements]) => {
            html += `
                <div class="skill-category">
                    <div class="skill-category-header" onclick="uiManager.toggleSkillCategory(this)">
                        <span class="skill-category-toggle">▶</span>
                        <span class="skill-category-name">${category.toUpperCase()}</span>
                    </div>
                    <div class="skill-items-container">
            `;
            achievements.forEach(achievement => {
                const isUnlocked = unlockedAchievements.has(achievement.id);
                const progress = achievementProgress[achievement.id] || null;
                html += `
                    <div class="skill-item${isUnlocked ? '' : ' locked'}">
                        <div class="skill-info">
                            <span class="skill-icon">${achievement.icon || '🏆'}</span>
                            <span class="skill-name">${(isUnlocked || !achievement.secret) ? achievement.name : '???'}</span>
                            ${isUnlocked ? '<span class="skill-level-info">Unlocked</span>' : '<span class="skill-lock-icon">🔒</span>'}
                        </div>
                        <div class="skill-progress-container">
                            <div class="skill-progress-bar">
                                <div class="skill-progress-fill" style="width: ${progress && progress.required > 1 ? Math.min((progress.current / progress.required) * 100, 100) : 0}%"></div>
                            </div>
                            ${progress && progress.required > 1 ? `<span class="skill-xp">${progress.current}/${progress.required}</span>` : ''}
                        </div>
                        <div class="skill-description" style="color:#aaa;font-size:12px;margin-top:2px;">
                            ${(isUnlocked || !achievement.secret) ? achievement.description : 'Unlock this secret achievement to reveal its details.'}
                        </div>
                        <div class="skill-level-info" style="font-size:11px;color:#888;">${achievement.points || 0} pts</div>
                    </div>
                `;
            });
            html += `</div></div>`;
        });
        achievementsContent.innerHTML = html;
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

        // After switching tab, we might need to update its content
        switch(tabName) {
            case 'skills':
                // Assuming skillManager is available here
                // this.updateSkillsDisplay(skillManager, gameConfig);
                break;
            case 'inventory':
                // Assuming inventoryManager is available here
                // this.updateInventoryDisplay(inventoryManager, gameConfig);
                break;
            case 'character':
                // Assuming traitManager is available here
                // this.updateCharacterDisplay(traitManager, gameConfig);
                break;
            case 'achievements':
                this.updateAchievementsDisplay(window.achievementSystem, window.configManager.getGameConfig());
                break;
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

        sidebar.innerHTML = tabsHtml + panelsHtml;
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