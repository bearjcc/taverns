class TraitManager {
    constructor() {
        this.traits = new Map();
    }

    loadFromConfig(traitsConfig) {
        try {
            console.log('Loading traits...');
            this.traits.clear();

            if (traitsConfig && traitsConfig.traits) {
                for (const [traitName, traitData] of Object.entries(traitsConfig.traits)) {
                    // Create trait with default values if level/experience not specified
                    const level = traitData.hasOwnProperty('level') ? traitData.level : null;
                    const experience = traitData.hasOwnProperty('experience') ? traitData.experience : null;
                    const trait = new Trait(
                        traitName,
                        level,
                        experience,
                        traitData.description || '',
                        traitData.icon || ''
                    );
                    this.traits.set(traitName, trait);
                }
            }
            
            console.log(`Loaded ${this.traits.size} traits`);
        } catch (error) {
            console.error('Error loading traits:', error);
        }
    }

    getTrait(traitName) {
        return this.traits.get(traitName);
    }

    getAllTraits() {
        return Array.from(this.traits.values());
    }

    addTraitXp(traitName, xpAmount) {
        const trait = this.traits.get(traitName);
        if (trait) {
            const fromLevel = trait.level;
            const levelUps = trait.addXp(xpAmount);
            
            if (levelUps > 0) {
                const message = configManager.getMessage('levelUp', {
                    skillName: traitName,
                    level: trait.level
                });
                uiManager.showToast(message, 'success');
            }
            
            return levelUps;
        }
        return 0;
    }
}

// Trait class for managing individual traits
class Trait {
    constructor(name, level = null, xp = null, description = '', icon = '') {
        this.name = name;
        this.level = level !== null ? level : 1;
        this.xp = xp !== null ? xp : 0;
        this.description = description;
        this.icon = icon;
        this.xpToNext = this.getXpToNextLevel(this.level);
    }

    getXpToNextLevel(level) {
        const multiplier = configManager ? configManager.getConstant('xpMultiplier', 100) : 100;
        return level * multiplier;
    }

    addXp(amount) {
        this.xp += amount;
        let levelUps = 0;
        
        while (this.xp >= this.xpToNext) {
            this.level++;
            this.xp -= this.xpToNext;
            this.xpToNext = this.getXpToNextLevel(this.level);
            levelUps++;
        }
        
        return levelUps;
    }

    getProgress() {
        const progressMax = configManager ? configManager.getConstant('progressMax', 100) : 100;
        return (this.xp / this.xpToNext) * progressMax;
    }
} 