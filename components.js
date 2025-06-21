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
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.element.classList.remove('modal-open');
        document.body.style.overflow = '';
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