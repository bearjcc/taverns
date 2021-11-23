"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\items.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item() {
        this.singular = "Item";
        this.plural = "Items";
        this.description = "An Item is something that a player can take with them and use.";
        this.weight = 0; // kilograms
        this.membersOnly = false;
        this.categories = [];
        this.categories.push("Item");
    }
    Item.prototype.getInfo = function (qty) {
        switch (qty) {
            case 0:
                return "No " + this.plural;
            case 1:
                if (this.getQuality() === "average") {
                    return "An " + this.getQuality() + " " + this.singular;
                }
                else {
                    return "A " + this.getQuality() + " " + this.singular;
                }
            default:
                return "Some " + this.getQuality() + " " + this.plural;
        }
    };
    Item.prototype.getQuality = function () {
        if (this.quality < 30) {
            return "terrible";
        }
        else if (this.quality < 60) {
            return "poor";
        }
        else if (this.quality < 70) {
            return "mediocre";
        }
        else if (this.quality < 80) {
            return "average";
        }
        else if (this.quality < 90) {
            return "good";
        }
        else if (this.quality < 97.5) {
            return "great";
        }
        else if (this.quality < 100) {
            return "superb";
        }
        else if (this.quality >= 100) {
            return "perfect";
        }
        else {
            return "legendary";
        }
    };
    return Item;
}());
exports.Item = Item;
// // Cooking
// var FryingPan = new Item("Frying Pan", "A pan that can be used to fry food.");
// var Jar = new Item("Jar", "A jar that can hold liquids.");
// var BreadTin = new Item("Bread Tin", "A tin that can hold bread.");
// var Pot = new Item("Pot", "A pot that can hold food.");
// var PieTin = new Item("Pie Tin", "A tin that can hold pies.");
// // Crafting
// //Weapons
// var Hammer = new Item("Hammer", "A hammer that can be used to smash things.");
// var Pick = new Item("Pick", "A pick that can be used to mine things.");
// var Axe = new Item("Axe", "An axe that can be used to chop things.");
// var Saw = new Item("Saw", "A saw that can be used to cut things.");
// var Knife = new Item("Knife", "A knife that can be used to cut things.");
// var Sword = new Item("Sword", "A sword that can be used to cut things.");
// var Mace = new Item("Mace", "A mace that can be used to smash things.");
// var Spear = new Item("Spear", "A spear that can be used to smash things.");
// var Bow = new Item("Bow", "A bow that can be used to shoot things.");
// var Crossbow = new Item("Crossbow", "A crossbow that can be used to shoot things.");
