// ============================================================================
// Language: TypeScript
// Path: ts\interactables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

// An Interactable is something that is permanant in the world and players can use it, generally for skilling

export class Interactable {
	name: string;
	categories: string[] = [];

	constructor() {
		this.categories.push("Interactable");
	}

	interact() {
		// do something
	}
}

// Cooking
// var Oven = new Interactable("Oven", "A oven that cooks food.");
// var Stove = new Interactable("Stove", "A stove that cooks food.");
// var Grill = new Interactable("Grill", "A grill that cooks food.");
// var Fire = new Interactable("Campfire", "A campfire that cooks food.");
// var MortarAndPestle = new Interactable("Mortar and Pestle", "A mortar and pestle that cooks food.");

// Crafting
// var SpinningWheel = new Interactable("Spinning Wheel", "A wheel for spinning thread");
// var Anvil = new Interactable("Anvil", "An anvil for working metal");
// var Sawmill = new Interactable("Sawmill", "A sawmill for cutting wood");
// var Forge = new Interactable("Forge", "A forge for working metal");

// Farming
//chicken coop
//animal pen

//mills:
// wind, water, or animal
// grain, or sugar

// Hearth
// Firepit
// Fireplace
// Grill
// Furnace
// Stove
// Oven
// Brazier
// Kiln

// Clay Mining Site
// Geode Mining Site
// Copper Ore Mining Site
// Tin Ore Mining Site
// Iron Ore Mining Site
// Coal Mining Site
// Silver Ore Mining Site
// Gold Ore Mining Site
// Limestone Mining Site
// Platinum Ore Mining Site
// Mithril Ore Mining Site
// Adamantite Ore Mining Site
// Runite Ore Mining Site
