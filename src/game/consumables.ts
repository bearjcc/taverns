// ============================================================================
// Language: TypeScript
// Path: ts\consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Item } from "./items";

export class Consumable extends Item {
	singular = "Consumable";
	plural = "Consumables";
	description = "A consumable is something that a player can use up";

	hasType: boolean = false; // does the consumable have a type?
	hp: number = 0; // positive number heals, negative number damages

	constructor() {
		super();
		this.categories.push("Consumable");
	}

	consume() {
		console.log(`You consumed the ${this.singular}`);
	}
}

export var dairies: Consumable[] = [];

export class Ice extends Consumable {
	constructor() {
		super();
		this.categories.push("Crushed Ice");
		this.singular = "crushed ice";
		this.plural = "crushed ice";
		this.description = "crushed ice";
		this.hp = 0;
		this.weight = 1;
	}
}
export const crushedIce_prototype: Ice = new Ice();
