// ============================================================================
// Language: TypeScript
// Path: ts\game\gems.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Item } from "./items";
import { GameClass } from "./types";

export type GemType = {
	singular: string;
	plural: string;
	description: string;
} & GameClass;

export class Gem extends Item {
	constructor(weight: number, quality: number) {
		super();
		this.mass = weight;
		this.quality = quality;
	}
}

export var gems: GemType[] = [];

////Gems
//ruby
export class Ruby extends Gem {}
gems.push(Ruby);

//sapphire
export class Sapphire extends Gem {}
gems.push(Sapphire);

//emerald
export class Emerald extends Gem {}
gems.push(Emerald);

//topaz
export class Topaz extends Gem {}
gems.push(Topaz);

//diamond
export class Diamond extends Gem {}
gems.push(Diamond);

//amethyst
export class Amethyst extends Gem {}
gems.push(Amethyst);

//opal
export class Opal extends Gem {}
gems.push(Opal);

//garnet
export class Garnet extends Gem {}
gems.push(Garnet);

//pearl
export class Pearl extends Gem {}
gems.push(Pearl);

//onyx
export class Onyx extends Gem {}
gems.push(Onyx);

//quartz
export class Quartz extends Gem {}
gems.push(Quartz);

//agate
export class Agate extends Gem {}
gems.push(Agate);

//jade
export class Jade extends Gem {}
gems.push(Jade);

export class Lapis extends Gem {}
gems.push(Lapis);

export class Rock extends Gem {
	constructor(weight: number) {
		super(weight, 100);
	}
}
gems.push(Rock);

export type GemTypes =
	| "Ruby"
	| "Sapphire"
	| "Emerald"
	| "Topaz"
	| "Diamond"
	| "Amethyst"
	| "Opal"
	| "Garnet"
	| "Pearl"
	| "Onyx"
	| "Quartz"
	| "Agate"
	| "Jade"
	| "Lapis"
	| "Rock";
