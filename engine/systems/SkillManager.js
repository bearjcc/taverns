class SkillManager {
    constructor() {
        this.skills = new Map();
        this.newlyUnlockedActions = new Set();
    }

    loadFromConfig(skillsConfig, gameConfig) {
        try {
            console.log('Loading skills...');
            this.skills.clear();

            if (skillsConfig) {
                const processCategory = (categoryData) => {
                    for (const [key, data] of Object.entries(categoryData)) {
                        // Create skill with default values if level/experience not specified
                        const level = data.hasOwnProperty('level') ? data.level : null;
                        const experience = data.hasOwnProperty('experience') ? data.experience : null;
                        const skill = new Skill(key, level, experience);
                        this.skills.set(key, skill);
                        
                        if (data.sub_skills) {
                            processCategory(data.sub_skills);
                        }
                    }
                };

                for (const category in skillsConfig) {
                    processCategory(skillsConfig[category]);
                }
            }
            
            console.log(`Loaded ${this.skills.size} skills`);
        } catch (error) {
            console.error('Error loading skills:', error);
        }
    }

    addSkill(skillName, skill) {
        this.skills.set(skillName, skill);
    }

    getSkill(skillName) {
        return this.skills.get(skillName);
    }

    addSkillXp(skillName, xpAmount) {
        const skill = this.skills.get(skillName);
        if (skill) {
            const fromLevel = skill.level;
            const levelUps = skill.addXp(xpAmount);
            
            if (levelUps > 0) {
                const message = configManager.getMessage('levelUp', {
                    skillName: skillName,
                    level: skill.level
                });
                uiManager.showToast(message, 'success');
            }
            
            return levelUps;
        }
        return 0;
    }

    getAllSkills() {
        return Array.from(this.skills.values());
    }

    checkForNewUnlocks(skillName, fromLevel, toLevel) {
        // This will be handled by ActionManager
    }
}

// Skill class for managing individual skills
class Skill {
    constructor(name, level = null, xp = null) {
        this.name = name;
        this.level = level !== null ? level : 1;
        this.xp = xp !== null ? xp : 0;
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