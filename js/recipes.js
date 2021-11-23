"use strict";
exports.__esModule = true;
exports.Recipe = void 0;
var Recipe = /** @class */ (function () {
    function Recipe(name, description) {
        this.name = name;
        this.description = description;
        this.ingredients = [];
        this.skill = null;
        this.level = 0;
        this.membersOnly = false;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
