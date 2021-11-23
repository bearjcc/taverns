"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\itm_consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
exports.__esModule = true;
exports.Ingredient = void 0;
var Source;
(function (Source) {
    Source["Farming"] = "Farming";
    Source["Fishing"] = "Fishing";
    Source["Foraging"] = "Foraging";
    Source["Questing"] = "Questing";
    Source["Trading"] = "Trading";
    Source["Milling"] = "Milling";
    Source["Crafting"] = "Crafting";
    Source["Cooking"] = "Cooking";
    Source["Distilling"] = "Distilling";
    Source["Brewing"] = "Brewing";
    Source["Water"] = "Water";
    Source["Potions"] = "Potions";
    Source["Hunting"] = "Hunting";
    Source["ReligiousCeremony"] = "Religious Ceremony";
})(Source || (Source = {}));
var Ingredient = /** @class */ (function () {
    function Ingredient(name, description, sources, membersOnly, cost) {
        if (membersOnly === void 0) { membersOnly = false; }
        if (cost === void 0) { cost = 0; }
        this.name = name;
        this.description = description;
        this.sources = sources;
        this.membersOnly = membersOnly;
        this.cost = cost;
    }
    return Ingredient;
}());
exports.Ingredient = Ingredient;
