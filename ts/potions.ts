// ============================================================================
// Language: TypeScript
// Path: ts\itm_consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Consumable} from "./consumables"


export class Potion extends Consumable {
}

export class MilkOfThePoppy extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Milk of the Poppy");
        this.singular = "Milk of the Poppy";
        this.plural = "Milk of the Poppy";
        this.description = "Milk of the Poppy";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const milkOfThePoppy_prototype: MilkOfThePoppy = new MilkOfThePoppy();