// ============================================================================
// Language: TypeScript
// Path: ts\game\interactables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { GameClass, GameMechanic } from './types';

export type InteractableType = GameClass;

export class Interactable extends GameMechanic {
	// An Interactable is something that is permanant in the world and players can use it, generally for skilling
	static singular: string;
	static plural: string;
	static description: string;

	interact() {
		// do something
	}
}

export var interactables : InteractableType[] = [];

// Cooking
export class Oven extends Interactable {
	static singular = "Oven";
	static plural = "Ovens";
	static description = "A oven that cooks food.";
}
interactables.push(Oven);

export class Stove extends Interactable {
	static singular = "Stove";
	static plural = "Stoves";
	static description = "A stove that cooks food.";
}
interactables.push(Stove);

export class Grill extends Interactable {
	static singular = "Grill";
	static plural = "Grills";
	static description = "A grill that cooks food.";
}
interactables.push(Grill);

export class Fire extends Interactable {
	static singular = "Campfire";
	static plural = "Campfires";
	static description = "A campfire that cooks food.";
}
interactables.push(Fire);

export class MortarAndPestle extends Interactable {
	static singular = "Mortar and Pestle";
	static plural = "Mortar and Pestles";
	static description = "A mortar and pestle that cooks food.";
}
interactables.push(MortarAndPestle);

// Crafting
export class SpinningWheel extends Interactable {
	static singular = "Spinning Wheel";
	static plural = "Spinning Wheels";
	static description = "A wheel for spinning thread";
}
interactables.push(SpinningWheel);

export class Anvil extends Interactable {
	static singular = "Anvil";
	static plural = "Anvils";
	static description = "An anvil for working metal";
}
interactables.push(Anvil);

export class Sawmill extends Interactable {
	static singular = "Sawmill";
	static plural = "Sawmills";
	static description = "A sawmill for cutting wood";
}
interactables.push(Sawmill);

export class Forge extends Interactable {
	static singular = "Forge";
	static plural = "Forges";
	static description = "A forge for working metal";
}
interactables.push(Forge);

// Farming
export class ChickenCoop extends Interactable {
	static singular = "Chicken Coop";
	static plural = "Chicken Coops";
	static description = "A chicken coop for growing chickens";
}
interactables.push(ChickenCoop);

export class AnimalPen extends Interactable {
	static singular = "Animal Pen";
	static plural = "Animal Pens";
	static description = "A pen for growing animals";
}
interactables.push(AnimalPen);

//mills:
// wind, water, or animal
// grain, or sugar

export class Hearth extends Interactable {
	static singular = "Hearth";
	static plural = "Hearths";
	static description = "A hearth for cooking food.";
}
interactables.push(Hearth);

export class Firepit extends Interactable {
	static singular = "Firepit";
	static plural = "Firepits";
	static description = "A firepit for cooking food.";
}

export class Fireplace extends Interactable {
	static singular = "Fireplace";
	static plural = "Fireplaces";
	static description = "A fireplace for cooking food.";
}
interactables.push(Fireplace);

export class Furnace extends Interactable {
	static singular = "Furnace";
	static plural = "Furnaces";
	static description = "A furnace for cooking food.";
}
interactables.push(Furnace);

export class Brazier extends Interactable {
	static singular = "Brazier";
	static plural = "Braziers";
	static description = "A brazier for cooking food.";
}
interactables.push(Brazier);

export class Kiln extends Interactable {
	static singular = "Kiln";
	static plural = "Kilns";
	static description = "A kiln for cooking food.";
}
interactables.push(Kiln);

