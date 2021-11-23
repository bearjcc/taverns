// ============================================================================
// Language: TypeScript
// Path: ts\consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Item} from "./items"


export class Consumable extends Item {
    singular = "Consumable";
    plural = "Consumables";
    description = "A consumable is something that a player can use up";

    constructor() {
        super();
        this.categories.push("Consumable");
    }

    consume() {
        console.log(`You consumed the ${this.singular}`);
    }
}

export var dairies: Consumable[] = [];

export class CrushedIce extends Food {
    constructor() {
        super();
        this.categories.push("Crushed Ice");
        this.singular = "crushed ice";
        this.plural = "crushed ice";
        this.description = "crushed ice";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const crushedIce_prototype: CrushedIce = new CrushedIce();