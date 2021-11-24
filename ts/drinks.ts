// ============================================================================
// Language: TypeScript
// Path: ts\itm_consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Consumable, dairies } from "./consumables";

export class Drink extends Consumable {
	hunger: number = 0; // negative makes more hungry
	thirst: number = 0; // negative makes more thirsty
}

export var drinks: Drink[] = [];

export class Milk extends Drink {
	type: "cow" | "goat";
	constructor(type: "cow" | "goat") {
		super();
		this.hasType = true;
		this.type = type;
		this.categories.push("Dairy", "Milk");
		this.singular = this.type + " milk";
		this.plural = this.singular;
		this.description = "milk";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.weight = 1;
		this.sources = ["Farming"];
	}
}
export const cowMilk_prototype: Milk = new Milk("cow");
export const goatMilk_prototype: Milk = new Milk("goat");
drinks.push(cowMilk_prototype, goatMilk_prototype);
dairies.push(cowMilk_prototype, goatMilk_prototype);

export class Coffee extends Drink {
	constructor() {
		super();
		this.categories.push("Coffee");
		this.singular = "coffee";
		this.plural = "coffee";
		this.description = "coffee";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.weight = 1;
		this.sources = ["Farming"];
	}
}
export const coffee_prototype: Coffee = new Coffee();
drinks.push(coffee_prototype);

export class Milkshake extends Drink {
	constructor() {
		super();
		this.categories.push("Milkshake");
		this.singular = "milkshake";
		this.plural = "milkshake";
		this.description = "milkshake";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.weight = 1;
		this.sources = ["Farming"];
	}
}
export const milkshake_prototype: Milkshake = new Milkshake();
drinks.push(milkshake_prototype);
dairies.push(milkshake_prototype);

export class ChocolateMilk extends Drink {
	constructor() {
		super();
		this.categories.push("Chocolate Milk");
		this.singular = "chocolate milk";
		this.plural = "chocolate milk";
		this.description = "chocolate milk";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.weight = 1;
		this.sources = ["Farming"];
	}
}
export const chocolateMilk_prototype: ChocolateMilk = new ChocolateMilk();
drinks.push(chocolateMilk_prototype);
dairies.push(chocolateMilk_prototype);

export class Tea extends Drink {
	constructor() {
		super();
		this.categories.push("Tea");
		this.singular = "tea";
		this.plural = "tea";
		this.description = "tea";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.weight = 1;
		this.sources = ["Farming"];
	}
}
export const tea_prototype: Tea = new Tea();
drinks.push(tea_prototype);

export class SlimeSlurpie extends Drink {
	constructor() {
		super();
		this.categories.push("Slime Slurpie");
		this.singular = "slime slurpie";
		this.plural = "slime slurpies";
		this.description = "slime slurpie";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.weight = 1;
		this.sources = ["Farming"];
	}
}
export const slimeSlurpie_prototype: SlimeSlurpie = new SlimeSlurpie();
drinks.push(slimeSlurpie_prototype);

export class BugJuice extends Drink {
	constructor() {
		super();
		this.categories.push("Bug Juice");
		this.singular = "bug juice";
		this.plural = "bug juices";
		this.description = "bug juice";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.weight = 1;
		this.sources = ["Farming"];
	}
}
export const bugJuice_prototype: BugJuice = new BugJuice();
drinks.push(bugJuice_prototype);

export class Water extends Drink {
	constructor() {
		super();
		this.categories.push("Water");
		this.singular = "water";
		this.plural = "water";
		this.description = "water";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.weight = 1;
		this.sources = ["Farming"];
	}
}
export const water_prototype: Water = new Water();
drinks.push(water_prototype);
