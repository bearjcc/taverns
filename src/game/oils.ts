// ============================================================================
// Language: TypeScript
// Path: src\game\oils.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Consumable } from "./consumables";

export class Oil extends Consumable {
	static singular = "oil";
	static plural = "oils";
	static description = "A bottle of oil.";
}

export class VegetableOil extends Oil {
	static singular = "vegetable oil";
	static plural = "vegetable oil";
	static description = "oil";
}

export class GrapeseedOil extends Oil {
	static singular = "grapeseed oil";
	static plural = "grapeseed oil";
	static description = "oil";
}

export class OliveOil extends Oil {
	static singular = "olive oil";
	static plural = "olive oil";
	static description = "oil";
}

export class AvocadoOil extends Oil {
	static singular = "avocado oil";
	static plural = "avocado oil";
	static description = "oil";
}

export class PeanutOil extends Oil {
	static singular = "peanut oil";
	static plural = "peanut oil";
	static description = "oil";
}

export class StickyOil extends Oil {
	static singular = "sticky oil";
	static plural = "sticky oil";
	static description = "oil";
}

export class DragonessenceOil extends Oil {
	static singular = "Dragonessence oil";
	static plural = "Dragonessence oil";
	static description = "oil";
}
