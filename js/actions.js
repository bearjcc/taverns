"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\actions.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
exports.__esModule = true;
exports.Action = void 0;
var Action = /** @class */ (function () {
    function Action(name, description) {
        this.name = name;
        this.description = description;
    }
    Action.description = "Action";
    return Action;
}());
exports.Action = Action;
// Action: Light Fire
var lightFire = new Action("Light Fire", "I attempt to light a fire");
lightFire["do"] = function () {
    console.log("Lighting a fire");
};
// Action: Explore Area
var exploreArea = new Action("Explore Area", "I explore the area");
exploreArea["do"] = function () {
    console.log("Exploring the area");
};
