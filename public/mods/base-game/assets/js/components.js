// Component Library for Taverns Game
// Base Component Class
class Component {
    constructor(element, config = {}) {
        this.element = element;
        this.config = { ...this.defaultConfig, ...config };
        this.init();
    }

    get defaultConfig() {
        return {};
    }

    init() {
        // Override in subclasses
    }

    render() {
        // Override in subclasses
    }

    destroy() {
        // Cleanup - override in subclasses
        if (this.element && this.element.parentNode) {
            this.element.remove();
        }
    }
}

// Component Registry
class ComponentRegistry {
    constructor() {
        this.components = new Map();
        this.instances = new Map();
    }

    register(name, componentClass) {
        this.components.set(name, componentClass);
    }

    create(name, element, config) {
        const ComponentClass = this.components.get(name);
        if (!ComponentClass) {
            throw new Error(`Component ${name} not found`);
        }
        
        const instance = new ComponentClass(element, config);
        this.instances.set(element, instance);
        return instance;
    }

    getInstance(element) {
        return this.instances.get(element);
    }

    destroyInstance(element) {
        const instance = this.instances.get(element);
        if (instance) {
            instance.destroy();
            this.instances.delete(element);
        }
    }
}

// Modal Component
class Modal extends Component {
    get defaultConfig() {
        return {
            title: '',
            content: '',
            closeOnOverlay: true,
            showCloseButton: true,
            width: '500px',
            height: 'auto'
        };
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.element.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-container" style="max-width: ${this.config.width}; max-height: ${this.config.height};">
                    <div class="modal-header">
                        <h3>${this.config.title}</h3>
                        ${this.config.showCloseButton ? '<button class="modal-close" aria-label="Close">&times;</button>' : ''}
                    </div>
                    <div class="modal-content">
                        ${this.config.content}
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        const closeBtn = this.element.querySelector('.modal-close');
        const overlay = this.element.querySelector('.modal-overlay');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }
        
        if (this.config.closeOnOverlay && overlay) {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) this.close();
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
    }

    open() {
        this.element.classList.add('modal-open');
        document.body.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.element.classList.remove('modal-open');
        document.body.classList.remove('modal-active');
        document.body.style.overflow = '';
        this.element.dispatchEvent(new CustomEvent('modal:close'));
    }

    isOpen() {
        return this.element.classList.contains('modal-open');
    }

    setContent(content) {
        const contentElement = this.element.querySelector('.modal-content');
        if (contentElement) {
            contentElement.innerHTML = content;
        }
    }

    setTitle(title) {
        const titleElement = this.element.querySelector('.modal-header h3');
        if (titleElement) {
            titleElement.textContent = title;
        }
    }
}

// Tooltip Component
class Tooltip extends Component {
    get defaultConfig() {
        return {
            content: '',
            position: 'top',
            delay: 200,
            maxWidth: '200px'
        };
    }

    init() {
        this.tooltip = null;
        this.timeout = null;
        this.bindEvents();
    }

    bindEvents() {
        this.element.addEventListener('mouseenter', () => this.show());
        this.element.addEventListener('mouseleave', () => this.hide());
        this.element.addEventListener('focus', () => this.show());
        this.element.addEventListener('blur', () => this.hide());
    }

    show() {
        this.timeout = setTimeout(() => {
            this.createTooltip();
            this.positionTooltip();
        }, this.config.delay);
    }

    hide() {
        clearTimeout(this.timeout);
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = `tooltip tooltip-${this.config.position}`;
        this.tooltip.style.maxWidth = this.config.maxWidth;
        this.tooltip.textContent = this.config.content;
        document.body.appendChild(this.tooltip);
    }

    positionTooltip() {
        const rect = this.element.getBoundingClientRect();
        const tooltipRect = this.tooltip.getBoundingClientRect();
        
        let top, left;
        
        switch (this.config.position) {
            case 'top':
                top = rect.top - tooltipRect.height - 8;
                left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
                break;
            case 'bottom':
                top = rect.bottom + 8;
                left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
                break;
            case 'left':
                top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
                left = rect.left - tooltipRect.width - 8;
                break;
            case 'right':
                top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
                left = rect.right + 8;
                break;
            default:
                top = rect.top - tooltipRect.height - 8;
                left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        }
        
        // Ensure tooltip stays within viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        if (left < 8) left = 8;
        if (left + tooltipRect.width > viewportWidth - 8) {
            left = viewportWidth - tooltipRect.width - 8;
        }
        if (top < 8) top = 8;
        if (top + tooltipRect.height > viewportHeight - 8) {
            top = viewportHeight - tooltipRect.height - 8;
        }
        
        this.tooltip.style.top = `${top}px`;
        this.tooltip.style.left = `${left}px`;
    }
}

// Progress Bar Component
class ProgressBar extends Component {
    get defaultConfig() {
        return {
            value: 0,
            max: 100,
            showLabel: true,
            labelFormat: '{value}/{max}',
            animated: true,
            color: 'var(--primary-color)'
        };
    }

    init() {
        this.render();
        this.updateProgress();
    }

    render() {
        this.element.innerHTML = `
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                ${this.config.showLabel ? '<div class="progress-label"></div>' : ''}
            </div>
        `;
    }

    updateProgress() {
        const fill = this.element.querySelector('.progress-fill');
        const label = this.element.querySelector('.progress-label');
        
        const percentage = (this.config.value / this.config.max) * 100;
        
        if (fill) {
            fill.style.width = `${percentage}%`;
            fill.style.backgroundColor = this.config.color;
        }
        
        if (label) {
            const formattedLabel = this.config.labelFormat
                .replace('{value}', this.config.value)
                .replace('{max}', this.config.max)
                .replace('{percentage}', Math.round(percentage));
            label.textContent = formattedLabel;
        }
    }

    setValue(value) {
        this.config.value = Math.max(0, Math.min(value, this.config.max));
        this.updateProgress();
    }

    setMax(max) {
        this.config.max = max;
        this.updateProgress();
    }
}

// Dropdown Component
class Dropdown extends Component {
    get defaultConfig() {
        return {
            options: [],
            placeholder: 'Select an option',
            value: null,
            onChange: null
        };
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.element.innerHTML = `
            <div class="dropdown-container">
                <button class="dropdown-trigger" type="button">
                    <span class="dropdown-value">${this.getDisplayValue()}</span>
                    <span class="dropdown-arrow">▼</span>
                </button>
                <div class="dropdown-menu">
                    ${this.config.options.map(option => `
                        <div class="dropdown-item" data-value="${option.value}">
                            ${option.label}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    bindEvents() {
        const trigger = this.element.querySelector('.dropdown-trigger');
        const menu = this.element.querySelector('.dropdown-menu');
        
        trigger.addEventListener('click', () => this.toggle());
        
        menu.addEventListener('click', (e) => {
            const item = e.target.closest('.dropdown-item');
            if (item) {
                const value = item.dataset.value;
                this.setValue(value);
            }
        });
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.element.contains(e.target)) {
                this.close();
            }
        });
    }

    toggle() {
        const menu = this.element.querySelector('.dropdown-menu');
        if (menu.classList.contains('dropdown-open')) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        const menu = this.element.querySelector('.dropdown-menu');
        menu.classList.add('dropdown-open');
    }

    close() {
        const menu = this.element.querySelector('.dropdown-menu');
        menu.classList.remove('dropdown-open');
    }

    setValue(value) {
        this.config.value = value;
        const valueElement = this.element.querySelector('.dropdown-value');
        if (valueElement) {
            valueElement.textContent = this.getDisplayValue();
        }
        this.close();
        
        if (this.config.onChange) {
            this.config.onChange(value);
        }
    }

    getDisplayValue() {
        if (this.config.value === null) {
            return this.config.placeholder;
        }
        
        const option = this.config.options.find(opt => opt.value === this.config.value);
        return option ? option.label : this.config.placeholder;
    }
}

// Game UI Manager
class GameUI {
    constructor() {
        this.components = new ComponentRegistry();
        this.initComponents();
    }

    initComponents() {
        this.components.register('modal', Modal);
        this.components.register('tooltip', Tooltip);
        this.components.register('progressBar', ProgressBar);
        this.components.register('dropdown', Dropdown);
    }

    // Convenience methods for common UI operations
    showModal(title, content, config = {}) {
        const modalElement = document.createElement('div');
        document.body.appendChild(modalElement);
        
        const modal = this.components.create('modal', modalElement, {
            title,
            content,
            ...config
        });
        
        modal.open();
        return modal;
    }

    addTooltip(element, content, config = {}) {
        return this.components.create('tooltip', element, {
            content,
            ...config
        });
    }

    createProgressBar(element, config = {}) {
        return this.components.create('progressBar', element, config);
    }

    createDropdown(element, config = {}) {
        return this.components.create('dropdown', element, config);
    }
}

// Export for use in other files
window.Component = Component;
window.ComponentRegistry = ComponentRegistry;
window.Modal = Modal;
window.Tooltip = Tooltip;
window.ProgressBar = ProgressBar;
window.Dropdown = Dropdown;
window.GameUI = GameUI;

/**
 * Achievement Components
 */

/**
 * Create an achievement item element
 * @param {Object} achievement - Achievement data
 * @param {boolean} isUnlocked - Whether the achievement is unlocked
 * @param {Object} progress - Progress data for the achievement
 * @returns {HTMLElement} Achievement item element
 */
function createAchievementItem(achievement, isUnlocked = false, progress = null) {
    const achievementItem = document.createElement('div');
    achievementItem.className = 'achievement-item';

    if (isUnlocked) {
        achievementItem.classList.add('achievement-unlocked');
    } else {
        achievementItem.classList.add('achievement-locked');
    }

    // Icon
    const iconWrapper = document.createElement('div');
    iconWrapper.className = 'achievement-icon-wrapper';
    const achievementIcon = document.createElement('span');
    achievementIcon.className = 'achievement-icon';
    achievementIcon.textContent = achievement.icon || '🏆';
    iconWrapper.appendChild(achievementIcon);

    // Details
    const detailsWrapper = document.createElement('div');
    detailsWrapper.className = 'achievement-details';

    const achievementName = document.createElement('span');
    achievementName.className = 'achievement-name';
    achievementName.textContent = achievement.name;

    const achievementDescription = document.createElement('div');
    achievementDescription.className = 'achievement-description';
    achievementDescription.textContent = achievement.description;

    detailsWrapper.appendChild(achievementName);
    detailsWrapper.appendChild(achievementDescription);

    // Points
    const pointsWrapper = document.createElement('div');
    pointsWrapper.className = 'achievement-points-wrapper';
    const achievementPoints = document.createElement('div');
    achievementPoints.className = 'achievement-points';
    achievementPoints.textContent = `${achievement.points || 0} pts`;
    pointsWrapper.appendChild(achievementPoints);

    // Progress bar (if applicable)
    if (progress && progress.required > 1) {
        const progressBar = createAchievementProgressBar(progress);
        detailsWrapper.appendChild(progressBar);
    }

    // Secret indicator
    if (achievement.secret && !isUnlocked) {
        const secretIndicator = document.createElement('div');
        secretIndicator.className = 'achievement-secret';
        secretIndicator.textContent = '🔒 Secret Achievement';
        detailsWrapper.appendChild(secretIndicator);
        achievementDescription.textContent = 'Unlock this secret achievement to reveal its details.';
    }

    // Assemble achievement item
    achievementItem.appendChild(iconWrapper);
    achievementItem.appendChild(detailsWrapper);
    achievementItem.appendChild(pointsWrapper);

    return achievementItem;
}

/**
 * Create achievement progress bar
 * @param {Object} progress - Progress data
 * @returns {HTMLElement} Progress bar element
 */
function createAchievementProgressBar(progress) {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'achievement-progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'achievement-progress-bar';
    
    const progressFill = document.createElement('div');
    progressFill.className = 'achievement-progress-fill';
    
    const progressText = document.createElement('div');
    progressText.className = 'achievement-progress-text';
    progressText.textContent = `${progress.current}/${progress.required}`;
    
    // Calculate progress percentage
    const percentage = Math.min((progress.current / progress.required) * 100, 100);
    progressFill.style.width = `${percentage}%`;
    
    progressBar.appendChild(progressFill);
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(progressText);
    
    return progressContainer;
}

/**
 * Create achievements tab content
 * @param {Object} achievementsData - All achievements data
 * @param {Set} unlockedAchievements - Set of unlocked achievement IDs
 * @param {Object} achievementProgress - Progress data for achievements
 * @returns {HTMLElement} Achievements tab content
 */
function createAchievementsTabContent(achievementsData, unlockedAchievements, achievementProgress) {
    const achievementsContent = document.createElement('div');
    achievementsContent.className = 'achievements-content';
    achievementsContent.id = 'achievements-content';
    
    // Header with total points
    const header = document.createElement('div');
    header.className = 'achievements-header';
    
    const totalPoints = calculateTotalPoints(achievementsData, unlockedAchievements);
    const totalAchievements = Object.keys(achievementsData).length;
    const unlockedCount = unlockedAchievements.size;
    
    header.innerHTML = `
        <h3>Achievements</h3>
        <div class="achievements-summary">
            <span class="achievements-progress">${unlockedCount}/${totalAchievements}</span>
            <span class="achievements-points">${totalPoints} pts</span>
        </div>
    `;
    
    achievementsContent.appendChild(header);
    
    // Group achievements by category
    const categories = groupAchievementsByCategory(achievementsData);
    
    // Create category sections
    for (const [category, achievements] of Object.entries(categories)) {
        const categorySection = createAchievementCategorySection(category, achievements, unlockedAchievements, achievementProgress);
        achievementsContent.appendChild(categorySection);
    }
    
    return achievementsContent;
}

/**
 * Create achievement category section
 * @param {string} category - Category name
 * @param {Array} achievements - Achievements in this category
 * @param {Set} unlockedAchievements - Set of unlocked achievement IDs
 * @param {Object} achievementProgress - Progress data for achievements
 * @returns {HTMLElement} Category section element
 */
function createAchievementCategorySection(category, achievements, unlockedAchievements, achievementProgress) {
    const categorySection = document.createElement('div');
    categorySection.className = 'achievement-category';
    
    const categoryHeader = document.createElement('h4');
    categoryHeader.className = 'achievement-category-header';
    categoryHeader.textContent = formatCategoryName(category);
    
    categorySection.appendChild(categoryHeader);
    
    // Add achievements to category
    for (const achievement of achievements) {
        const isUnlocked = unlockedAchievements.has(achievement.id);
        const progress = (achievementProgress && achievementProgress[achievement.id]) ? achievementProgress[achievement.id] : null;
        
        const achievementItem = createAchievementItem(achievement, isUnlocked, progress);
        categorySection.appendChild(achievementItem);
    }
    
    return categorySection;
}

/**
 * Calculate total achievement points
 * @param {Object} achievementsData - All achievements data
 * @param {Set} unlockedAchievements - Set of unlocked achievement IDs
 * @returns {number} Total points
 */
function calculateTotalPoints(achievementsData, unlockedAchievements) {
    let total = 0;
    for (const achievementId of unlockedAchievements) {
        const achievement = achievementsData[achievementId];
        if (achievement) {
            total += achievement.points || 0;
        }
    }
    return total;
}

/**
 * Group achievements by category
 * @param {Object} achievementsData - All achievements data
 * @returns {Object} Achievements grouped by category
 */
function groupAchievementsByCategory(achievementsData) {
    const categories = {};
    
    for (const [id, achievement] of Object.entries(achievementsData)) {
        const category = achievement.category || 'general';
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push({ ...achievement, id });
    }
    
    // Sort achievements within each category by points (descending)
    for (const category in categories) {
        categories[category].sort((a, b) => (b.points || 0) - (a.points || 0));
    }
    
    return categories;
}

/**
 * Format category name for display
 * @param {string} category - Category name
 * @returns {string} Formatted category name
 */
function formatCategoryName(category) {
    const categoryNames = {
        'skills': 'Skill Mastery',
        'progression': 'Progression',
        'collection': 'Collection',
        'secrets': 'Secrets',
        'general': 'General'
    };
    
    return categoryNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * Show achievement unlocked notification
 * @param {Object} achievement - Achievement data
 * @param {number} points - Points earned
 * @param {number} totalPoints - Total points after unlock
 */
function showAchievementUnlocked(achievement, points, totalPoints) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    
    notification.innerHTML = `
        <div class="achievement-notification-content">
            <div class="achievement-notification-icon">${achievement.icon || '🏆'}</div>
            <div class="achievement-notification-text">
                <div class="achievement-notification-title">Achievement Unlocked!</div>
                <div class="achievement-notification-name">${achievement.name}</div>
                <div class="achievement-notification-points">+${points} points</div>
            </div>
        </div>
    `;
    
    // Add to notification container
    const container = document.getElementById('toast-container') || document.body;
    container.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('achievement-notification-show');
    }, 100);
    
    // Remove after animation
    setTimeout(() => {
        notification.classList.remove('achievement-notification-show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/**
 * Achievements Modal
 */
function openAchievementsModal(achievementsData, unlockedAchievements, achievementProgress) {
    const content = createAchievementsTabContent(achievementsData, unlockedAchievements, achievementProgress);
    
    // Create a container for the modal instance
    const modalElement = document.createElement('div');
    document.body.appendChild(modalElement);

    const modal = new Modal(modalElement, {
        title: 'Achievements',
        width: '800px'
    });
    
    // Set the content, which is already an HTML element
    const contentElement = modal.element.querySelector('.modal-content');
    if (contentElement) {
        contentElement.innerHTML = ''; // Clear existing template content
        contentElement.appendChild(content);
    }
    
    modal.open();

    // Add a close listener to destroy the modal element
    modal.element.addEventListener('modal:close', () => {
        modal.destroy();
        modalElement.remove();
    }, { once: true });
}