"use strict";
exports.__esModule = true;
exports.Recipe = void 0;
var Recipe = /** @class */ (function () {
    function Recipe(name, description, ingredients, skill, level, membersOnly) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.skill = skill;
        this.level = level;
        this.membersOnly = membersOnly;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
