// ============================================================================
// Language: TypeScript
// Path: ts\itm_consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Consumable} from "./consumables"


export class Drink extends Consumable {
}

export class Alcohol extends Drink {
}

export class Milk extends Food {
    type: "cow"| "goat";
    constructor(type: "cow"| "goat") {
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

export class Wine extends Food {
    type: "white"| "red" | "muscadine" | "rosé";
    constructor(type: "white"| "red" | "muscadine" | "rosé") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Alcohol");
        this.singular = this.type + " wine";
        this.plural = this.singular;
        if(type === "rosé") {
            this.singular = "Rosé";
            this.plural = "Rosé";
        }
        this.description = "wine";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const whiteWine_prototype: Wine = new Wine("white");
export const redWine_prototype: Wine = new Wine("red");
export const muscadineWine_prototype: Wine = new Wine("muscadine");
export const roseWine_prototype: Wine = new Wine("rosé");

export class Coffee extends Food {
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

export class Milkshake extends Food {
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

export class ChocolateMilk extends Food {
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

export class Tea extends Food {
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

export class SlimeSlurpie extends Food {
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

export class BugJuice extends Food {
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