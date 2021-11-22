// ============================================================================
// Language: TypeScript Extension
// Path: ts\items\consumable.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Item } from "./items";

export class Consumable extends Item {
    singular = "Consumable";
    plural = "Consumables";
    description = "A consumable is something that a player can use up";

    constructor() {
        super();
        this.types.push("Consumable");
    }

    consume() {
        console.log(`You consumed the ${this.singular}`);
    }
}