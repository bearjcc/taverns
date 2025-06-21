const { createTestSkill, createTestSkillManager, createTestSkillAction } = require('./test-utils');

describe('Skill class', () => {
  test('XP gain and level up', () => {
    const skill = createTestSkill('Woodcutting', 1, 0);
    expect(skill.level).toBe(1);
    expect(skill.xp).toBe(0);
    expect(skill.xpToNext).toBe(100);

    // Add less than needed for level up
    let levelUps = skill.addXp(50);
    expect(skill.level).toBe(1);
    expect(skill.xp).toBe(50);
    expect(levelUps).toBe(0);

    // Add enough to level up once
    levelUps = skill.addXp(60); // 50+60=110, should level up once, 10 xp left
    expect(skill.level).toBe(2);
    expect(skill.xp).toBe(10);
    expect(skill.xpToNext).toBe(200);
    expect(levelUps).toBe(1);

    // Add enough to level up multiple times
    levelUps = skill.addXp(500); // 10+500=510, should level up twice (needs 200+300=500)
    expect(skill.level).toBe(4);
    expect(skill.xp).toBe(10);
    expect(skill.xpToNext).toBe(400);
    expect(levelUps).toBe(2);
  });

  test('Progress calculation', () => {
    const skill = createTestSkill('Fishing', 1, 25);
    expect(skill.getProgress()).toBeCloseTo(25);
    skill.addXp(25); // Now 50/100
    expect(skill.getProgress()).toBeCloseTo(50);
  });
});

describe('SkillManager', () => {
  test('Add skill and actions, get available actions', () => {
    const skillManager = createTestSkillManager();
    const skill = createTestSkill('Woodcutting', 1, 0);
    const actions = [
      createTestSkillAction('Chop Oak', 'Chop oak logs', 1, 10, 'oak_logs'),
      createTestSkillAction('Chop Willow', 'Chop willow logs', 5, 15, 'willow_logs')
    ];
    skillManager.addSkill('Woodcutting', skill);
    skillManager.addSkillActions('Woodcutting', actions);

    // Only Chop Oak should be available at level 1
    let available = skillManager.getAvailableActions('Woodcutting');
    expect(available.length).toBe(1);
    expect(available[0].name).toBe('Chop Oak');

    // Level up to 5
    skill.addXp(500); // 1->3 (needs 100+200=300), then 200 left, 3->4 (300), 4->5 (400)
    skill.level = 5;
    available = skillManager.getAvailableActions('Woodcutting');
    expect(available.length).toBe(2);
    expect(available[1].name).toBe('Chop Willow');
  });

  test('Unlocks new actions on level up', () => {
    const skillManager = createTestSkillManager();
    const skill = createTestSkill('Fishing', 1, 0);
    const actions = [
      createTestSkillAction('Fish Shrimp', 'Catch shrimp', 1, 8, 'shrimp'),
      createTestSkillAction('Fish Salmon', 'Catch salmon', 5, 40, 'salmon')
    ];
    skillManager.addSkill('Fishing', skill);
    skillManager.addSkillActions('Fishing', actions);

    // Level up to 5
    skill.addXp(100 + 200 + 300 + 400); // Now level 5
    skillManager.checkForNewUnlocks('Fishing', 1, 5);
    expect(skillManager.isNewlyUnlocked('Fish Salmon')).toBe(true);
    skillManager.markActionUsed('Fish Salmon');
    expect(skillManager.isNewlyUnlocked('Fish Salmon')).toBe(false);
  });
}); 