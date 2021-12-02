// ============================================================================
// Language: TypeScript
// Path: ts\game\cooking-items.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Item } from "./items";

export class FryingPan extends Item {
	static singular = "Frying Pan";
	static plural = "Frying Pans";
	static description = "A pan that can be used to fry food.";
}
export class Jar extends Item {
	static singular = "Jar";
	static plural = "Jars";
	static description = "A jar that can hold liquids.";
}
export class BreadTin extends Item {
	static singular = "Bread Tin";
	static plural = "Bread Tins";
	static description = "A tin that can hold bread.";
}
export class Pot extends Item {
	static singular = "Pot";
	static plural = "Pots";
	static description = "A pot that can hold food.";
}
export class PieTin extends Item {
	static singular = "Pie Tin";
	static plural = "Pie Tins";
	static description = "A tin that can hold pies.";
}