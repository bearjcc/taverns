// ============================================================================
// Language: TypeScript Extension
// Path: ts\items\items.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

export class Item {
    singular: string = "Item";
    plural: string = "Items";
    description: string = "An Item is something that a player can take with them and use.";

    weight: number = 0; // kilograms
    membersOnly: boolean = false;
    types: string[] = [];

    constructor() {
        this.types.push("Item");
    }
}


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


