"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\interactables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
exports.__esModule = true;
exports.Interactable = void 0;
// An Interactable is something that is permanant in the world and players can use it, generally for skilling
var Interactable = /** @class */ (function () {
    function Interactable(name, description) {
        this.name = name;
        this.description = description;
    }
    Interactable.prototype["do"] = function () {
        console.log(this.name);
    };
    return Interactable;
}());
exports.Interactable = Interactable;
// Cooking
var Oven = new Interactable("Oven", "A oven that cooks food.");
var Stove = new Interactable("Stove", "A stove that cooks food.");
var Grill = new Interactable("Grill", "A grill that cooks food.");
var Fire = new Interactable("Campfire", "A campfire that cooks food.");
var MortarAndPestle = new Interactable("Mortar and Pestle", "A mortar and pestle that cooks food.");
// Crafting
var SpinningWheel = new Interactable("Spinning Wheel", "A wheel for spinning thread");
var Anvil = new Interactable("Anvil", "An anvil for working metal");
var Sawmill = new Interactable("Sawmill", "A sawmill for cutting wood");
var Forge = new Interactable("Forge", "A forge for working metal");
