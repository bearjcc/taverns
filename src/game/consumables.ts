// ============================================================================
// Language: TypeScript
// Path: ts\game\consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Item, ItemType } from './items';
import { Source } from "./types";

export type ConsumableType = ItemType & {consumable:null}

export class Consumable extends Item {
	static readonly consumable: null;
	static singular = "Consumable";
	static plural = "Consumables";
	static description = "A consumable is something that a player can use up";
	static sources: Source[];

	hasType: boolean = false; // does the consumable have a type?
	hp: number = 0; // positive number heals, negative number damages

	consume() {
		console.log(`You consumed the ${this.getType().singular}`);
	}
}

export var dairies: ConsumableType[] = [];

export class Water extends Consumable {
	static singular: string = "Water";
	static plural: string = "Water";
	static description: string = "liquid sustenance";

	constructor() {
		super();
		this.hp = 0;
		this.mass = 1;
	}
}

export class Ice extends Consumable {
	static singular = "crushed ice";
	static plural = "crushed ice";
	static description = "crushed ice";
	
	constructor() {
		super();
		this.hp = 0;
		this.mass = 1;
	}
}
