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
