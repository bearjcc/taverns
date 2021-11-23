// ============================================================================
// Language: TypeScript
// Path: ts\gems.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Item } from "./items";

export class Gem extends Item {
    constructor(weight: number, quality: number) {
        super();
        this.categories.push("Gem");
        this.weight = weight;
        this.quality = quality;
    }
}

export var gems: Gem[] = [];

////Gems
//ruby
export class Ruby extends Gem {}
export var ruby_prototype = new Ruby(1, 100);
gems.push(ruby_prototype);

//sapphire
export class Sapphire extends Gem {}
export var sapphire_prototype = new Sapphire(1, 100);
gems.push(sapphire_prototype);

//emerald
export class Emerald extends Gem {}
export var emerald_prototype = new Emerald(1, 100);
gems.push(emerald_prototype);

//topaz
export class Topaz extends Gem {}
export var topaz_prototype = new Topaz(1, 100);
gems.push(topaz_prototype);

//diamond
export class Diamond extends Gem {}
export var diamond_prototype = new Diamond(1, 100);
gems.push(diamond_prototype);

//amethyst
export class Amethyst extends Gem {}
export var amethyst_prototype = new Amethyst(1, 100);
gems.push(amethyst_prototype);

//opal
export class Opal extends Gem {}
export var opal_prototype = new Opal(1, 100);
gems.push(opal_prototype);

//garnet
export class Garnet extends Gem {}
export var garnet_prototype = new Garnet(1, 100);
gems.push(garnet_prototype);

//pearl
export class Pearl extends Gem {}
export var pearl_prototype = new Pearl(1, 100);
gems.push(pearl_prototype);

//onyx
export class Onyx extends Gem {}
export var onyx_prototype = new Onyx(1, 100);
gems.push(onyx_prototype);

//quartz
export class Quartz extends Gem {}
export var quartz_prototype = new Quartz(1, 100);
gems.push(quartz_prototype);

//agate
export class Agate extends Gem {}
export var agate_prototype = new Agate(1, 100);
gems.push(agate_prototype);

//jade
export class Jade extends Gem {}
export var jade_prototype = new Jade(1, 100);
gems.push(jade_prototype);

export class Lapis extends Gem {}
export var lapis_prototype = new Lapis(1, 100);
gems.push(lapis_prototype);

export class Rock extends Gem {
    constructor(weight: number) {
        super(weight, 100);
    }
}
export var rock_prototype = new Rock(1);
gems.push(rock_prototype);

export type GemType = "Ruby" | "Sapphire" | "Emerald" | "Topaz" | "Diamond" | "Amethyst" | "Opal" | "Garnet" | "Pearl" | "Onyx" | "Quartz" | "Agate" | "Jade" | "Lapis" | "Rock";