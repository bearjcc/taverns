# Game Configuration Guide

This folder contains all the game data that can be easily edited by non-coders.

## 📁 Files

- **`game-config.json`** - Main game configuration (skills, actions, messages, UI, constants)
- **`README.md`** - This guide

## 🎮 Editing Game Data

### For Non-Coders

You can edit the game without touching any code! Just modify the `game-config.json` file.

### What You Can Change

#### 1. **XP Rewards**
```json
"xpReward": 10
```
Change this number to make actions give more or less XP.

#### 2. **Level Requirements**
```json
"levelRequired": 5
```
Change this to unlock actions at different levels.

#### 3. **Item Rewards**
```json
"itemReward": "oak_logs",
"itemCount": 1
```
Change what items players receive and how many.

#### 4. **Messages**
```json
"unlockMessage": "You can now chop oak trees!"
```
Change the text that appears when players unlock new actions.

#### 5. **Action Names**
```json
"displayName": "Chop Oak"
```
Change how actions appear in the game interface.

#### 6. **Game Constants** (NEW!)
```json
"constants": {
  "xpMultiplier": 100,
  "defaultLevel": 1,
  "defaultXp": 0,
  "progressMax": 100
}
```
Change the XP formula, default values, and progress calculations.

#### 7. **UI Elements** (NEW!)
```json
"ui": {
  "tabs": [
    {
      "id": "skills",
      "displayName": "Skills", 
      "icon": "⚔️"
    }
  ]
}
```
Add new tabs, change tab names, or modify icons.

#### 8. **CSS Classes** (NEW!)
```json
"cssClasses": {
  "skillItem": "skill-item",
  "actionButton": "action-button"
}
```
Change CSS class names if needed for styling.

### 📝 How to Edit

1. **Open** `game-config.json` in any text editor (Notepad, VS Code, etc.)
2. **Find** the section you want to change
3. **Edit** the values (be careful with quotes and commas!)
4. **Save** the file
5. **Refresh** the game in your browser

### ⚠️ Important Rules

- **Keep quotes**: All text must be in quotes `"like this"`
- **Keep commas**: Separate items with commas, but don't put a comma after the last item
- **Keep brackets**: Don't delete `{` or `}` brackets
- **Test changes**: Always test your changes in the browser

### 🌍 Translation Support

To translate the game:

1. **Copy** `game-config.json` to `game-config-es.json` (for Spanish)
2. **Translate** all the text in quotes
3. **Keep** the structure exactly the same
4. **Update** the game code to load the correct language file

### 📊 Example Changes

#### Make Woodcutting Easier:
```json
"xpReward": 20  // Was 10, now gives more XP
"levelRequired": 3  // Was 5, now unlocks earlier
```

#### Change XP Formula:
```json
"constants": {
  "xpMultiplier": 150  // Was 100, now requires more XP per level
}
```

#### Add New Tab:
```json
"ui": {
  "tabs": [
    // ... existing tabs ...
    {
      "id": "quests",
      "displayName": "Quests",
      "icon": "📜"
    }
  ]
}
```

#### Change Messages:
```json
"unlockMessage": "Congratulations! You can now chop oak trees!"
```

#### Add More Items:
```json
"itemCount": 2  // Was 1, now gives 2 items
```

### 🔧 Advanced Editing

#### Adding New Actions:
1. Copy an existing action
2. Change the name, description, and values
3. Make sure the skill name matches

#### Adding New Skills:
1. Copy an existing skill section
2. Change the skill name and actions
3. The game will automatically load the new skill!

#### Adding New Tabs:
1. Add a new tab to the `ui.tabs` array
2. The game will automatically generate the tab
3. Add content handling in the game code if needed

### 🎯 Magic Numbers Eliminated

The following magic numbers/strings have been moved to configuration:

- **XP Formula**: `level * 100` → `level * xpMultiplier`
- **Default Values**: `level = 1, xp = 0` → `defaultLevel, defaultXp`
- **Progress Calculation**: `* 100` → `* progressMax`
- **CSS Classes**: Hardcoded → `cssClasses` object
- **Element IDs**: Hardcoded → `elementIds` object
- **Tab Names**: Hardcoded → `tabs` array
- **Message Templates**: Hardcoded → `messages` object

### 📞 Need Help?

If you break something:
1. **Don't panic** - the original code is safe
2. **Check** for missing quotes or commas
3. **Compare** with the original file
4. **Ask** a developer for help

### 🎯 Best Practices

- **Backup** before making big changes
- **Test** small changes first
- **Keep** a copy of working configurations
- **Document** your changes
- **Use** consistent naming for items
- **Add** new skills/actions by copying existing ones 