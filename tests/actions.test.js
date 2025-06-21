const { createTestSkill, createTestSkillManager, createTestSkillAction } = require('./test-utils');

describe('SkillAction', () => {
  test('SkillAction properties', () => {
    const action = createTestSkillAction('Chop Oak', 'Chop oak logs', 1, 10, 'oak_logs', 2);
    expect(action.name).toBe('Chop Oak');
    expect(action.description).toBe('Chop oak logs');
    expect(action.levelRequired).toBe(1);
    expect(action.xpReward).toBe(10);
    expect(action.itemReward).toBe('oak_logs');
    expect(action.itemCount).toBe(2);
    expect(action.unlockMessage).toMatch(/Chop Oak/);
    expect(action.flavorText).toMatch(/Chop Oak/);
  });
});

describe('Action unlocks and requirements', () => {
  test('Actions are only available at required level', () => {
    const skillManager = createTestSkillManager();
    const skill = createTestSkill('Mining', 1, 0);
    const actions = [
      createTestSkillAction('Mine Copper', 'Mine copper ore', 1, 12, 'copper_ore'),
      createTestSkillAction('Mine Iron', 'Mine iron ore', 5, 25, 'iron_ore'),
      createTestSkillAction('Mine Gold', 'Mine gold ore', 10, 50, 'gold_ore')
    ];
    skillManager.addSkill('Mining', skill);
    skillManager.addSkillActions('Mining', actions);

    // Only Mine Copper should be available at level 1
    let available = skillManager.getAvailableActions('Mining');
    expect(available.length).toBe(1);
    expect(available[0].name).toBe('Mine Copper');

    // Level up to 5
    skill.level = 5;
    available = skillManager.getAvailableActions('Mining');
    expect(available.length).toBe(2);
    expect(available[1].name).toBe('Mine Iron');

    // Level up to 10
    skill.level = 10;
    available = skillManager.getAvailableActions('Mining');
    expect(available.length).toBe(3);
    expect(available[2].name).toBe('Mine Gold');
  });

  test('Unlock message and flavor text are correct', () => {
    const action = createTestSkillAction('Fish Lobster', 'Catch lobster', 40, 80, 'lobster', 1);
    expect(action.unlockMessage).toMatch(/Fish Lobster/);
    expect(action.flavorText).toMatch(/Fish Lobster/);
  });
}); 