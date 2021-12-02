// ============================================================================
// Language: TypeScript
// Path: ts\interactables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

// An Interactable is something that is permanant in the world and players can use it, generally for skilling

export type InteractableType = {
	singular: string;
	plural: string;
	description: string;
}

export class Interactable {
	static singular: string;
	static plural: string;
	static description: string;

	interact() {
		// do something
	}
}

// Cooking
// var Oven = new Interactable("Oven", "A oven that cooks food.");
export class Oven extends Interactable {
	static singular = "Oven";
	static plural = "Ovens";
	static description = "A oven that cooks food.";
}
// var Stove = new Interactable("Stove", "A stove that cooks food.");
export class Stove extends Interactable {
	static singular = "Stove";
	static plural = "Stoves";
	static description = "A stove that cooks food.";
}
// var Grill = new Interactable("Grill", "A grill that cooks food.");
export class Grill extends Interactable {
	static singular = "Grill";
	static plural = "Grills";
	static description = "A grill that cooks food.";
}
// var Fire = new Interactable("Campfire", "A campfire that cooks food.");
export class Fire extends Interactable {
	static singular = "Campfire";
	static plural = "Campfires";
	static description = "A campfire that cooks food.";
}
// var MortarAndPestle = new Interactable("Mortar and Pestle", "A mortar and pestle that cooks food.");
export class MortarAndPestle extends Interactable {
	static singular = "Mortar and Pestle";
	static plural = "Mortar and Pestles";
	static description = "A mortar and pestle that cooks food.";
}

// Crafting
// var SpinningWheel = new Interactable("Spinning Wheel", "A wheel for spinning thread");
export class SpinningWheel extends Interactable {
	static singular = "Spinning Wheel";
	static plural = "Spinning Wheels";
	static description = "A wheel for spinning thread";
}

// var Anvil = new Interactable("Anvil", "An anvil for working metal");
export class Anvil extends Interactable {
	static singular = "Anvil";
	static plural = "Anvils";
	static description = "An anvil for working metal";
}

// var Sawmill = new Interactable("Sawmill", "A sawmill for cutting wood");
export class Sawmill extends Interactable {
	static singular = "Sawmill";
	static plural = "Sawmills";
	static description = "A sawmill for cutting wood";
}

// var Forge = new Interactable("Forge", "A forge for working metal");
export class Forge extends Interactable {
	static singular = "Forge";
	static plural = "Forges";
	static description = "A forge for working metal";
}

// Farming
//chicken coop
export class ChickenCoop extends Interactable {
	static singular = "Chicken Coop";
	static plural = "Chicken Coops";
	static description = "A chicken coop for growing chickens";
}
//animal pen
export class AnimalPen extends Interactable {
	static singular = "Animal Pen";
	static plural = "Animal Pens";
	static description = "A pen for growing animals";
}

//mills:
// wind, water, or animal
// grain, or sugar

// Hearth
export class Hearth extends Interactable {
	static singular = "Hearth";
	static plural = "Hearths";
	static description = "A hearth for cooking food.";
}

// Firepit
export class Firepit extends Interactable {
	static singular = "Firepit";
	static plural = "Firepits";
	static description = "A firepit for cooking food.";
}
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
