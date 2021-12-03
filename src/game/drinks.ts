// ============================================================================
// Language: TypeScript
// Path: ts\game\drinks.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Consumable, ConsumableType, dairies } from "./consumables";
import { Source } from "./types";

export class Drink extends Consumable {
	static readonly drink:null;

	hunger: number = 0; // negative makes more hungry
	thirst: number = 0; // negative makes more thirsty

	categories: string[] = [];
}

export type DrinkType = ConsumableType & {drink:null};

export var drinks: DrinkType[] = [];

export class Milk extends Drink {
	static singular : string = "milk";
	static plural : string = "milk";
	static description : string = "A bottle of milk.";
	static sources: Source[] = ["Farming"];
	
	type: "cow" | "goat";
	constructor(type: "cow" | "goat") {
		super();
		this.hasType = true;
		this.type = type;
		this.categories.push("Dairy", "Milk");
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
	}
}
drinks.push(Milk);
dairies.push(Milk);

export class Coffee extends Drink {
	static singular: string = "coffee";
	static plural: string = "coffee";
	static description: string = "A cup of coffee.";
	static sources: Source[] = ["Farming"];

	constructor() {
		super();
		this.categories.push("Coffee");
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
	}
}
drinks.push(Coffee);

export class Milkshake extends Drink {
	static singular = "milkshake";
	static plural = "milkshakes";
	static description: string = "A milkshake.";
	static sources: Source[] = ["Farming"];

	constructor() {
		super();
		this.categories.push("Milkshake");
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
	}
}
drinks.push(Milkshake);
dairies.push(Milkshake);

export class ChocolateMilk extends Drink {
	static singular: string = "chocolate milk";
	static plural : string = "chocolate milk";
	static description : string = "A bottle of chocolate milk.";
	static sources: Source[] = ["Cooking"];
	
	constructor() {
		super();
		this.categories.push("Chocolate Milk");
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
	}
}
drinks.push(ChocolateMilk);
dairies.push(ChocolateMilk);

export class Tea extends Drink {
	static singular: string = "tea";
	static plural: string = "tea";
	static description : string = "A cup of tea.";
	static sources: Source[] = ["Brewing"];
	
	constructor() {
		super();
		this.categories.push("Tea");
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
	}
}
drinks.push(Tea);

export class SlimeSlurpie extends Drink {
	static singular: string = "slime slurpie";
	static plural : string = "slime slurpies";
	static description : string = "A bottle of slime slurpie.";
	static sources: Source[] = ["Cooking"];
	
	constructor() {
		super();
		this.categories.push("Slime Slurpie");
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
	}
}
drinks.push(SlimeSlurpie);

export class BugJuice extends Drink {
	static singular: string = "bug juice";
	static plural: string = "bug juices";
	static description: string = "A bottle of bug juice.";
	static sources: Source[] = ["Brewing"];
	
	constructor() {
		super();
		this.categories.push("Bug Juice");
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
	}
}
drinks.push(BugJuice);

export class Water extends Drink {
	static singular: string = "water";
	static plural: string = "water";
	static description: string = "A bottle of water.";
	static sources: Source[] = ["Water"];
	
	constructor() {
		super();
		this.categories.push("Water");
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
	}
}
drinks.push(Water);
