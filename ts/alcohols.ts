// ============================================================================
// Language: TypeScript
// Path: ts\alcohols.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Drink, drinks} from "./drinks"


export class Alcohol extends Drink {
    drunkness: number = 0; // positive makes more intoxicated
}

export var alcohols : Alcohol[] = [];

export class Wine extends Alcohol {
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
        this.thirst = 0;
        this.drunkness = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const whiteWine_prototype: Wine = new Wine("white");
export const redWine_prototype: Wine = new Wine("red");
export const muscadineWine_prototype: Wine = new Wine("muscadine");
export const roseWine_prototype: Wine = new Wine("rosé");
alcohols.push(whiteWine_prototype, redWine_prototype, muscadineWine_prototype, roseWine_prototype);

export class Beer extends Alcohol {
    constructor() {
        super();
        this.categories.push("Beer");
        this.singular = "beer";
        this.plural = "beers";
        this.description = "beer";
        this.hunger = 0;
        this.thirst = 0;
        this.drunkness = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Brewing"];
    }
}
export const beer_prototype: Beer = new Beer();
alcohols.push(beer_prototype);

export class Whiskey extends Alcohol {
    constructor() {
        super();
        this.categories.push("Whiskey");
        this.singular = "whiskey";
        this.plural = "whiskeys";
        this.description = "whiskey";
        this.hunger = 0;
        this.thirst = 0;
        this.drunkness = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const whiskey_prototype: Whiskey = new Whiskey();
alcohols.push(whiskey_prototype);

export class Vodka extends Alcohol {
    constructor() {
        super();
        this.categories.push("Vodka");
        this.singular = "vodka";
        this.plural = "vodkas";
        this.description = "vodka";
        this.hunger = 0;
        this.thirst = 0;
        this.drunkness = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const vodka_prototype: Vodka = new Vodka();
alcohols.push(vodka_prototype);

export class Rum extends Alcohol {
    constructor() {
        super();
        this.categories.push("Rum");
        this.singular = "rum";
        this.plural = "rums";
        this.description = "rum";
        this.hunger = 0;
        this.thirst = 0;
        this.drunkness = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const rum_prototype: Rum = new Rum();
alcohols.push(rum_prototype);

export class Tequila extends Alcohol {
    constructor() {
        super();
        this.categories.push("Tequila");
        this.singular = "tequila";
        this.plural = "tequilas";
        this.description = "tequila";
        this.hunger = 0;
        this.thirst = 0;
        this.drunkness = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const tequila_prototype: Tequila = new Tequila();
alcohols.push(tequila_prototype);

export class Gin extends Alcohol {
    constructor() {
        super();
        this.categories.push("Gin");
        this.singular = "gin";
        this.plural = "gins";
        this.description = "gin";
        this.hunger = 0;
        this.thirst = 0;
        this.drunkness = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const gin_prototype: Gin = new Gin();
alcohols.push(gin_prototype);

export class Brandy extends Alcohol {
    constructor() {
        super();
        this.categories.push("Brandy");
        this.singular = "brandy";
        this.plural = "brandy";
        this.description = "brandy";
        this.hunger = 0;
        this.thirst = 0;
        this.drunkness = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const brandy_prototype: Brandy = new Brandy();
alcohols.push(brandy_prototype);

export class Cocktail extends Alcohol {
    constructor() {
        super();
        this.categories.push("Cocktail");
        this.singular = "cocktail";
        this.plural = "cocktails";
        this.description = "rum cocktail";
        this.hunger = 0;
        this.thirst = 0;
        this.drunkness = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const rumCocktail_prototype: Cocktail = new Cocktail();
alcohols.push(rumCocktail_prototype);




// *****************************
// Must come at end of file
// Combine alchols into drinks array
// *****************************
drinks.push(...alcohols);
