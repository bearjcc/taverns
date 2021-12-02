// ============================================================================
// Language: TypeScript
// Path: ts\game\alcohols.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Drink, drinks } from "./drinks";
import { Source } from "./items";
import { Class } from "./types";

export class Alcohol extends Drink {
	drunkness: number = 0; // positive makes more intoxicated
}

export type AlcoholType = {
	singular: string;
	plural: string;
	description: string;
} & Class;

export var alcohols: AlcoholType[] = [];

export class Wine extends Alcohol {
	static singular : string = "wine";
	static plural : string = "wines";
	static description : string = "A bottle of wine.";
	static sources: Source[] = ["Brewing"];
	
	type: "white" | "red" | "muscadine" | "rosé";
	constructor() {
		super();
		this.categories.push("Alcohol");
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}

export class WhiteWine extends Wine {
	static singular : string = "white wine";
	static plural : string = "white wines";
	static description : string = "A bottle of white wine.";
	static sources: Source[] = ["Brewing"];

	constructor() {
		super();
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(WhiteWine);

export class RedWine extends Wine {
	static singular : string = "red wine";
	static plural : string = "red wines";
	static description : string = "A bottle of red wine.";
	static sources: Source[] = ["Brewing"];

	constructor() {
		super();
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(RedWine);

export class MuscadineWine extends Wine {
	static singular : string = "muscadine wine";
	static plural : string = "muscadine wines";
	static description : string = "A bottle of muscadine wine.";
	static sources: Source[] = ["Brewing"];

	constructor() {
		super();
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(MuscadineWine);

export class Rosé extends Wine {
	static singular : string = "Rosé";
	static plural : string = "Rosé";
	static description : string = "A bottle of Rosé.";
	static sources: Source[] = ["Brewing"];

	constructor() {
		super();
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Rosé);

export class Beer extends Alcohol {
	static singular : string = "beer";
	static plural: string = "beers";
	static description : string = "A bottle of beer.";
	static sources: Source[] = ["Brewing"];
	
	constructor() {
		super();
		this.categories.push("Beer");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Beer);

export class Whiskey extends Alcohol {
	static singular : string = "whiskey";
	static plural : string = "whiskeys";
	static description: string = "A bottle of whiskey.";
	static sources: Source[] = ["Distilling"];
	
	constructor() {
		super();
		this.categories.push("Whiskey");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Whiskey);

export class Vodka extends Alcohol {
	static singular : string = "vodka";
	static plural : string = "vodkas";
	static description: string = "A bottle of vodka.";
	static sources: Source[] = ["Distilling"];
	
	constructor() {
		super();
		this.categories.push("Vodka");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Vodka);

export class Rum extends Alcohol {
	static singular : string = "rum";
	static plural : string = "rums";
	static description: string = "A bottle of rum.";
	static sources: Source[] = ["Distilling"];
	
	constructor() {
		super();
		this.categories.push("Rum");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Rum);

export class Tequila extends Alcohol {
	static singular : string = "tequila";
	static plural : string = "tequilas";
	static description: string = "A bottle of tequila.";
	static sources: Source[] = ["Distilling"];
	
	constructor() {
		super();
		this.categories.push("Tequila");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Tequila);

export class Gin extends Alcohol {
	static singular : string = "gin";
	static plural : string = "gins";
	static description: string = "A bottle of gin.";
	static sources: Source[] = ["Distilling"];
	
	constructor() {
		super();
		this.categories.push("Gin");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Gin);

export class Brandy extends Alcohol {
	static singular : string = "brandy";
	static plural : string = "brandies";
	static description: string = "A bottle of brandy.";
	static sources: Source[] = ["Distilling"];
	
	constructor() {
		super();
		this.categories.push("Brandy");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Brandy);

export class Cocktail extends Alcohol {
	static singular : string = "cocktail";
	static plural : string = "cocktails";
	static description: string = "A bottle of cocktail.";
	static sources: Source[] = ["Distilling"];
	
	constructor() {
		super();
		this.categories.push("Cocktail");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Cocktail);

export class Grog extends Alcohol {
	static singular : string = "grog";
	static plural : string = "grogs";
	static description: string = "A bottle of grog.";
	static sources: Source[] = ["Distilling"];
	
	constructor() {
		super();
		this.categories.push("Grog");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Grog);

export class DevilsBlood extends Alcohol {
	static singular : string = "devil's blood";
	static plural : string = "devil's blood";
	static description: string = "A bottle of devil's blood.";
	static sources: Source[] = ["Distilling"];
	
	constructor() {
		super();
		this.categories.push("Devil's Blood");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(DevilsBlood);

export class Cider extends Alcohol {
	static singular : string = "cider";
	static plural : string = "ciders";
	static description: string = "A bottle of cider.";
	static sources: Source[] = ["Brewing"];
	
	type: "Apple" | "Cherry" | "Pear";
	constructor(type: "Apple" | "Cherry" | "Pear") {
		super();
		this.type = type;
		this.categories.push("Cider");
		this.hunger = 0;
		this.thirst = 0;
		this.drunkness = 0;
		this.hp = 0;
		this.weight = 1;
	}
}
alcohols.push(Cider);

// *****************************
// Must come at end of file
// Combine alcohols into drinks array
// *****************************
drinks.push(...alcohols);
