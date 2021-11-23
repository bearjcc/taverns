// ============================================================================
// Language: TypeScript
// Path: ts\itm_food.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Consumable, dairies} from "./consumables"

export class Food extends Consumable {
    hunger: number; // positive number makes eater more full, less hungry
    thirst: number; // positive number makes eater less thirsty

    dryLevel: number; // how dry is the food? (0-100)
    cookedLevel: number; // how much the food has been cooked
    type: string; // a modifier for the color and or flavor of the food

    mustBeDry: boolean = false; // does the food need to be dried?
    canBeCooked: boolean = true; // can the food be cooked?
    

    constructor() {
        super();
        this.categories.push("Food"); // add food to the list of categories

        this.singular = "Food";
        this.plural = "Food";
        this.description = "Food is something edible";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;

        this.dryLevel = 0;
        this.cookedLevel = 0;
        this.quality = 0;
    }

    getInfo(qty: number): string {
        switch (qty) {
            case 0:
                return `No ${this.plural}`;
            case 1:
                var msg = this.canBeCooked ? `${this.getCookedLevel()} ` : "";
                msg += this.mustBeDry ? `${this.getDryLevel()} ` : "";
                msg += this.hasType ? `${this.type} ` : "";
                if (this.getQuality() === "average") {
                    return `An ${this.getQuality()} ${msg}${this.singular}`;
                } else {
                    return `A ${this.getQuality()} ${msg}${this.singular}`;
                }
                default:
                    return `Some ${this.getQuality()} ${msg}${this.plural}`;
        }
    }

    getCookedLevel() {
        if (this.cookedLevel < 50) {
            return "raw";
        } else if (this.cookedLevel < 75) {
            return "rare";
        } else if (this.cookedLevel < 90) {
            return "medium-rare";
        } else if (this.cookedLevel < 95) {
            return "medium";
        } else if (this.cookedLevel < 100) {
            return "medium-well";
        } else if (this.cookedLevel < 105) {
            return "well cooked";
        } else if (this.cookedLevel < 110) {
            return "slightly burnt";
        } else if (this.cookedLevel < 115) {
            return "burnt";
        } else if (this.cookedLevel < 120) {
            return "severly burnt";
        } else {
            return "incinerated";
        }
    }

    eat(): void {
        console.log(`You eat the ${this.singular}.`);
        this.consume();
        console.log(`Your hunger is satified by ${this.hunger}.`);
        console.log(`Your thirst is satified by ${this.thirst}.`);
        console.log(`You gain ${this.hp} health.`);
    }

    getDryLevel() {
        if (this.dryLevel < 50) {
            return "wet";
        } else if (this.dryLevel < 75) {
            return "damp";
        } else if (this.dryLevel < 90) {
            return "moist";
        } else if (this.dryLevel < 95) {
            return "dry";
        } else {
            return "crispy";
        }
    }


}
export var foods: Food[] = [];
export var proteins: Food[] = [];
export var meats: Food[] = [];
export var crustaceans: Food[] = [];
export var seafoods: Food[] = [];
export var vegetables: Food[] = [];
export var fruits: Food[] = [];
export var grains: Food[] = [];
export var nuts: Food[] = [];
export var fishes: Food[] = [];
export var starchs: Food[] = [];
export var berries: Food[] = [];
export var spices: Food[] = [];
export var herbs: Food[] = [];
export var others: Food[] = [];
export var insects: Food[] = [];
export var fungi: Food[] = [];
export var eggs: Food[] = [];
export var sweets: Food[] = [];
export var doughs: Food[] = [];
export var brines: Food[] = [];
export var soups: Food[] = [];
export var cheeses: Food[] = [];
export var sauces: Food[] = [];
export var sides: Food[] = [];
export var entrees: Food[] = [];
export var spreads: Food[] = [];
export var condiments: Food[] = [];
export var sandwiches: Food[] = [];
export var snacks: Food[] = [];
export var breads: Food[] = [];
export var sushis: Food[] = [];

export class Salmon extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Fish", "Salmon");
        this.singular = "Salmon";
        this.plural = "Salmon";
        this.description = "Salmon are fish";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const salmon_prototype: Salmon = new Salmon();
fishes.push(salmon_prototype);

export class Trout extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Fish", "Trout");
        this.singular = "Trout";
        this.plural = "Trout";
        this.description = "Trout are fish";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const trout_prototype: Trout = new Trout();
fishes.push(trout_prototype);

export class RainbowTrout extends Trout {}
export const rainbowTrout_prototype: RainbowTrout = new RainbowTrout();
fishes.push(rainbowTrout_prototype);

export class Pike extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Fish", "Pike");
        this.singular = "Pike";
        this.plural = "Pike";
        this.description = "Pike are fish";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const pike_prototype: Pike = new Pike();
fishes.push(pike_prototype);

export class Carp extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Fish", "Carp");
        this.singular = "Carp";
        this.plural = "Carp";
        this.description = "Carp are fish";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const carp_prototype: Carp = new Carp();
fishes.push(carp_prototype);

export class Crayfish extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Crustacean", "Crayfish");
        this.singular = "Crayfish";
        this.plural = "Crayfish";
        this.description = "Crayfish are small crustacean";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const crayfish_prototype: Crayfish = new Crayfish();
crustaceans.push(crayfish_prototype);

export class Catfish extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Fish", "Catfish");
        this.singular = "Catfish";
        this.plural = "Catfish";
        this.description = "Whiskered bottom feeders";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const catfish_prototype: Catfish = new Catfish();
fishes.push(catfish_prototype);

export class Lobster extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Crustacean", "Lobster");
        this.singular = "Lobster";
        this.plural = "Lobster";
        this.description = "Lobsters are crustaceans";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const lobster_prototype: Lobster = new Lobster();
crustaceans.push(lobster_prototype);

export class ClamMeat extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Clam Meat");
        this.singular = "Clam Meat";
        this.plural = "Clam Meat";
        this.description = "The fleshy bits from inside a clam";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const clam_meat_prototype: ClamMeat = new ClamMeat();
seafoods.push(clam_meat_prototype);

export class Shrimp extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Fish", "Shrimp");
        this.singular = "Shrimp";
        this.plural = "Shrimp";
        this.description = "Shrimp are small crustaceans";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const shrimp_prototype: Shrimp = new Shrimp();
fishes.push(shrimp_prototype);

export class SharkMeat extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Seafood", "Fish", "Shark Meat");
        this.singular = "Shark Meat";
        this.plural = "Shark Meat";
        this.description = "Shark meat";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const shark_meat_prototype: SharkMeat = new SharkMeat();
fishes.push(shark_meat_prototype);

export class Beef extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Meat", "Beef");
        this.singular = "Beef";
        this.plural = "Beef";
        this.description = "Meat from a cow";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const beef_prototype: Beef = new Beef();
meats.push(beef_prototype);

export class Pork extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Meat", "Pork");
        this.singular = "Pork";
        this.plural = "Pork";
        this.description = "Meat from a pig";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pork_prototype: Pork = new Pork();
meats.push(pork_prototype);

export class PigSkin extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Pig Skin");
        this.singular = "Pig Skin";
        this.plural = "Pig Skin";
        this.description = "Skin from a pig";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.mustBeDry = true;
        this.sources = ["Farming"];
    }
}
export const pig_skin_prototype: PigSkin = new PigSkin();
meats.push(pig_skin_prototype);

export class PigFeet extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Pig Feet");
        this.singular = "Pig's Feet";
        this.plural = "Pig's Feet";
        this.description = "Feet from a pig";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pig_feet_prototype: PigFeet = new PigFeet();
meats.push(pig_feet_prototype);

export class Sugar extends Food {
    constructor() {
        super();
        this.categories.push("Sugar");
        this.singular = "Sugar";
        this.plural = "Sugar";
        this.description = "Sweet powder";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.mustBeDry = true;
        this.canBeCooked = false;
        this.sources = ["Milling"];
    }
}
export const sugar_prototype: Sugar = new Sugar();
sweets.push(sugar_prototype);

export class Seaweed extends Food {
    type: "red" | "green" | "brown";

    constructor(type: "red" | "green" | "brown") {
        super();
        this.categories.push("Seafood", "Seaweed");
        this.hasType = true;
        this.type = type;
        this.singular = "Seaweed";
        this.plural = "Seaweed";
        this.description = "Seaweed";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const seaweedRed_prototype: Seaweed = new Seaweed("red");
export const seaweedGreen_prototype: Seaweed = new Seaweed("green");
export const seaweedBrown_prototype: Seaweed = new Seaweed("brown");
seafoods.push(seaweedRed_prototype, seaweedGreen_prototype, seaweedBrown_prototype);

export class Rice extends Food {
    constructor() {
        super();
        this.categories.push("Grain", "Rice");
        this.singular = "Rice";
        this.plural = "Rice";
        this.description = "Rice";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const rice_prototype: Rice = new Rice();
grains.push(rice_prototype);

export class Corn extends Food {
    constructor() {
        super();
        this.categories.push("Grain", "Corn");
        this.singular = "Corn";
        this.plural = "Corn";
        this.description = "Corn";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const corn_prototype: Corn = new Corn();
grains.push(corn_prototype);

export class CornOnTheCob extends Food {
    constructor() {
        super();
        this.categories.push("Grain", "Corn on the Cob");
        this.singular = "Corn on the Cob";
        this.plural = "Corn on the Cob";
        this.description = "Corn on the Cob";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cornOnOheCob_prototype: CornOnTheCob = new CornOnTheCob();
grains.push(cornOnOheCob_prototype);

export class Asparagus extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Asparagus");
        this.singular = "Asparagus";
        this.plural = "Asparagus";
        this.description = "Asparagus";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const asparagus_prototype: Asparagus = new Asparagus();
vegetables.push(asparagus_prototype);

export class Beans extends Food {
    type: "kidney" | "pinto" | "black" | "green" | "lima" | "mung" | "garbanzo" | "jack" | "soy";

    constructor(type: "kidney" | "pinto" | "black" | "green" | "lima" | "mung" | "garbanzo" | "jack" | "soy") {
        super();
        this.categories.push("Protein", "Beans");
        this.hasType = true;
        this.type = type;
        this.singular = type + " bean";
        this.plural = this.singular + "s";
        this.description = "good for your heart";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const beansKidney_prototype: Beans = new Beans("kidney");
export const beansPinto_prototype: Beans = new Beans("pinto");
export const beansBlack_prototype: Beans = new Beans("black");
export const beansGreen_prototype: Beans = new Beans("green");
export const beansLima_prototype: Beans = new Beans("lima");
export const beansMung_prototype: Beans = new Beans("mung");
export const beansGarbanzo_prototype: Beans = new Beans("garbanzo");
export const beansJack_prototype: Beans = new Beans("jack");
export const beansSoy_prototype: Beans = new Beans("soy");
proteins.push(beansKidney_prototype, beansPinto_prototype, beansBlack_prototype, beansGreen_prototype, beansLima_prototype, beansMung_prototype, beansGarbanzo_prototype, beansJack_prototype, beansSoy_prototype);

export class Mushroom extends Food {
    type: "white" | "brown" | "purple" | "glowing" | "morel" | "red";

    constructor(type: "white" | "brown" | "purple" | "glowing" | "morel" | "red", weight: number) {
        super();
        this.categories.push("Protein", "Mushroom");
        this.hasType = true;
        this.type = type;
        this.singular = (this.type === "morel") ? this.type : this.type + " mushroom";
        this.plural = this.singular + "s";
        this.description = "fun mush";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = weight // weight defined on the objet itself instead of globally
        this.sources = ["Foraging", "Farming"];
    }
}
export const mushroomWhite_prototype: Mushroom = new Mushroom("white", 0);
export const mushroomBrown_prototype: Mushroom = new Mushroom("brown", 0);
export const mushroomPurple_prototype: Mushroom = new Mushroom("purple", 0);
export const mushroomGlowing_prototype: Mushroom = new Mushroom("glowing", 0);
export const mushroomMorel_prototype: Mushroom = new Mushroom("morel", 0);
export const mushroomRed_prototype: Mushroom = new Mushroom("red", 0);
proteins.push(mushroomWhite_prototype, mushroomBrown_prototype, mushroomPurple_prototype, mushroomGlowing_prototype, mushroomMorel_prototype, mushroomRed_prototype);

export class Apple extends Food {
    type: "red" | "green" | "golden";

    constructor(type: "red" | "green" | "golden") {
        super();
        this.categories.push("Fruit", "Apple");
        this.hasType = true;
        this.type = type;
        this.singular = type + " apple";
        this.plural = this.singular + "s";
        this.description = "fun apple";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming", "Foraging"];
    }
}
export const appleRed_prototype: Apple = new Apple("red");
export const appleGreen_prototype: Apple = new Apple("green");
export const appleGolden_prototype: Apple = new Apple("golden");
fruits.push(appleRed_prototype, appleGreen_prototype, appleGolden_prototype);

export class Pear extends Food {
    constructor() {
        super();
        this.categories.push("Fruit", "Pear");
        this.singular = "Pear";
        this.plural = "Pears";
        this.description = "Pear";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pear_prototype: Pear = new Pear();
fruits.push(pear_prototype);

export class Grape extends Food {
    type: "red" | "white" | "purple" | "muscadine";

    constructor(type: "red" | "white" | "purple" | "muscadine") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Fruit", "Grape");
        this.singular = "Grape";
        this.plural = "Grapes";
        this.description = "Grape";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const grapeRed_prototype: Grape = new Grape("red");
export const grapeWhite_prototype: Grape = new Grape("white");
export const grapePurple_prototype: Grape = new Grape("purple");
export const grapeMuscadine_prototype: Grape = new Grape("muscadine");
fruits.push(grapeRed_prototype, grapeWhite_prototype, grapePurple_prototype, grapeMuscadine_prototype);

export class Avocado extends Food {
    constructor() {
        super();
        this.categories.push("Fruit", "Avocado");
        this.singular = "Avocado";
        this.plural = "Avocados";
        this.description = "Avocado";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const avocado_prototype: Avocado = new Avocado();
fruits.push(avocado_prototype);

export class Citrus extends Food {
    type: "orange" | "lemon" | "lime" | "grapefruit" | "tangerine";

    constructor(type: "orange" | "lemon" | "lime" | "grapefruit" | "tangerine") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Fruit", "Citrus");
        this.singular = "Citrus";
        this.plural = "Citrus";
        this.description = "acidic fruit with a protective peel";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const citrusOrange_prototype: Citrus = new Citrus("orange");
export const citrusLemon_prototype: Citrus = new Citrus("lemon");
export const citrusLime_prototype: Citrus = new Citrus("lime");
export const citrusGrapefruit_prototype: Citrus = new Citrus("grapefruit");
export const citrusTangerine_prototype: Citrus = new Citrus("tangerine");
fruits.push(citrusOrange_prototype, citrusLemon_prototype, citrusLime_prototype, citrusGrapefruit_prototype, citrusTangerine_prototype);

export class Peanut extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Nut", "Peanut");
        this.singular = "Peanut";
        this.plural = "Peanuts";
        this.description = "Peanut";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const peanut_prototype: Peanut = new Peanut();
nuts.push(peanut_prototype);

export class Walnut extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Nut", "Walnut");
        this.singular = "Walnut";
        this.plural = "Walnuts";
        this.description = "Walnut";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const walnut_prototype: Walnut = new Walnut();
nuts.push(walnut_prototype);

export class Almond extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Nut", "Almond");
        this.singular = "Almond";
        this.plural = "Almonds";
        this.description = "Almond";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const almond_prototype: Almond = new Almond();
nuts.push(almond_prototype);

export class BrazilNut extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Nut", "Brazil Nut");
        this.singular = "Brazil Nut";
        this.plural = "Brazil Nuts";
        this.description = "Brazil Nut";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const brazilNut_prototype: BrazilNut = new BrazilNut();
nuts.push(brazilNut_prototype);

export class Chestnut extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Nut", "Chestnut");
        this.singular = "Chestnut";
        this.plural = "Chestnuts";
        this.description = "Chestnut";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Questing"];
    }
}
export const chestnut_prototype: Chestnut = new Chestnut();
nuts.push(chestnut_prototype);

export class Coconut extends Food {
    constructor() {
        super();
        this.categories.push("Fruit", "Coconut");
        this.singular = "Coconut";
        this.plural = "Coconuts";
        this.description = "Coconut";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const coconut_prototype: Coconut = new Coconut();
fruits.push(coconut_prototype);

export class Carrot extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Carrot");
        this.singular = "Carrot";
        this.plural = "Carrots";
        this.description = "Carrot";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const carrot_prototype: Carrot = new Carrot();
vegetables.push(carrot_prototype);

export class Potato extends Food {
    constructor() {
        super();
        this.categories.push("Starch", "Potato");
        this.singular = "Potato";
        this.plural = "Potatoes";
        this.description = "Potato";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming", "Foraging"];
    }
}
export const potato_prototype: Potato = new Potato();
starchs.push(potato_prototype);

export class Beet extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Beet");
        this.singular = "Beet";
        this.plural = "Beets";
        this.description = "Beet";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const beet_prototype: Beet = new Beet();
vegetables.push(beet_prototype);

export class Eggplant extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Eggplant");
        this.singular = "Eggplant";
        this.plural = "Eggplants";
        this.description = "Eggplant";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const eggplant_prototype: Eggplant = new Eggplant();
vegetables.push(eggplant_prototype);

export class Berry extends Food {
    type: "red" | "blue" | "black" | "snozz" | "cherry" | "straw" | "rasp" | "blue currant" | "black currant";
    constructor(type: "red" | "blue" | "black" | "snozz" | "cherry" | "straw" | "rasp" | "blue currant" | "black currant") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Fruit", "Berry");
        if (type === "blue currant" || type === "black currant") {
            this.singular = this.type;
            this.plural = this.singular + "s";
        } else if (type === "cherry") {
            this.singular = "cherry";
            this.plural = "cherries";
        } else {
            this.singular = this.type + "berry";
            this.plural = this.type + "berries";
        }
        this.description = "sweet fruit from a bush";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const berryRed_prototype: Berry = new Berry("red");
export const berryBlue_prototype: Berry = new Berry("blue");
export const berryBlack_prototype: Berry = new Berry("black");
export const berrySnozz_prototype: Berry = new Berry("snozz");
export const berryCherry_prototype: Berry = new Berry("cherry");
export const berryStraw_prototype: Berry = new Berry("straw");
export const berryRasp_prototype: Berry = new Berry("rasp");
export const berryBlueCurrant_prototype: Berry = new Berry("blue currant");
export const berryBlackCurrant_prototype: Berry = new Berry("black currant");
berries.push(berryRed_prototype, berryBlue_prototype, berryBlack_prototype, berrySnozz_prototype, berryCherry_prototype, berryStraw_prototype, berryRasp_prototype, berryBlueCurrant_prototype, berryBlackCurrant_prototype);

export class Banana extends Food {
    constructor() {
        super();
        this.categories.push("Fruit", "Banana");
        this.singular = "Banana";
        this.plural = "Bananas";
        this.description = "Banana";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const banana_prototype: Banana = new Banana();
fruits.push(banana_prototype);

export class Pineapple extends Food {
    constructor() {
        super();
        this.categories.push("Fruit", "Pineapple");
        this.singular = "Pineapple";
        this.plural = "Pineapples";
        this.description = "Pineapple";
        this.hunger = 10;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const pineapple_prototype: Pineapple = new Pineapple();
fruits.push(pineapple_prototype);

export class Pepper extends Food {
    type: "black" | "white" | "bell" | "jalapeno" | "cayenne" | "chili";
    constructor(type: "black" | "white" | "bell" | "jalapeno" | "cayenne" | "chili") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Spice", "Pepper");
        this.singular = this.type + " pepper";
        this.plural = this.singular + "s";
        this.description = "pepper";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const pepperBlack_prototype: Pepper = new Pepper("black");
export const pepperWhite_prototype: Pepper = new Pepper("white");
export const pepperBell_prototype: Pepper = new Pepper("bell");
export const pepperJalapeno_prototype: Pepper = new Pepper("jalapeno");
export const pepperCayenne_prototype: Pepper = new Pepper("cayenne");
export const pepperChili_prototype: Pepper = new Pepper("chili");
spices.push(pepperBlack_prototype, pepperWhite_prototype, pepperBell_prototype, pepperJalapeno_prototype, pepperCayenne_prototype, pepperChili_prototype);

export class Coriander extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Coriander");
        this.singular = "Coriander";
        this.plural = "Coriander";
        this.description = "Coriander";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const coriander_prototype: Coriander = new Coriander();
herbs.push(coriander_prototype);

export class Cilantro extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Cilantro");
        this.singular = "Cilantro";
        this.plural = "Cilantro";
        this.description = "Cilantro";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const cilantro_prototype: Cilantro = new Cilantro();
herbs.push(cilantro_prototype);

export class Cumin extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Cumin");
        this.singular = "Cumin";
        this.plural = "Cumin";
        this.description = "Cumin";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const cumin_prototype: Cumin = new Cumin();
spices.push(cumin_prototype);

export class Dill extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Dill");
        this.singular = "Dill";
        this.plural = "Dill";
        this.description = "Dill";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const dill_prototype: Dill = new Dill();
herbs.push(dill_prototype);

export class Fennel extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Fennel");
        this.singular = "Fennel";
        this.plural = "Fennel";
        this.description = "Fennel";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const fennel_prototype: Fennel = new Fennel();
herbs.push(fennel_prototype);

export class Garlic extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Garlic");
        this.singular = "Garlic";
        this.plural = "Garlic";
        this.description = "Garlic";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const garlic_prototype: Garlic = new Garlic();
herbs.push(garlic_prototype);

export class Ginger extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Ginger");
        this.singular = "Ginger";
        this.plural = "Ginger";
        this.description = "Ginger";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const ginger_prototype: Ginger = new Ginger();
herbs.push(ginger_prototype);

export class Oregano extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Oregano");
        this.singular = "Oregano";
        this.plural = "Oregano";
        this.description = "Oregano";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const oregano_prototype: Oregano = new Oregano();
herbs.push(oregano_prototype);

export class Parsley extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Parsley");
        this.singular = "Parsley";
        this.plural = "Parsley";
        this.description = "Parsley";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const parsley_prototype: Parsley = new Parsley();
herbs.push(parsley_prototype);

export class Rosemary extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Rosemary");
        this.singular = "Rosemary";
        this.plural = "Rosemary";
        this.description = "Rosemary";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const rosemary_prototype: Rosemary = new Rosemary();
herbs.push(rosemary_prototype);

export class Thyme extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Thyme");
        this.singular = "Thyme";
        this.plural = "Thyme";
        this.description = "Thyme";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const thyme_prototype: Thyme = new Thyme();
herbs.push(thyme_prototype);

export class Turmeric extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Turmeric");
        this.singular = "Turmeric";
        this.plural = "Turmeric";
        this.description = "Turmeric";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const turmeric_prototype: Turmeric = new Turmeric();
spices.push(turmeric_prototype);

export class Chives extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Chives");
        this.singular = "Chives";
        this.plural = "Chives";
        this.description = "Chives";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;    
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const chives_prototype: Chives = new Chives();
herbs.push(chives_prototype);

export class Sage extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Sage");
        this.singular = "Sage";
        this.plural = "Sage";
        this.description = "Sage";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const sage_prototype: Sage = new Sage();
herbs.push(sage_prototype);

export class Basil extends Food {
    constructor() {
        super();
        this.categories.push("Herb", "Basil");
        this.singular = "Basil";
        this.plural = "Basil";
        this.description = "Basil";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const basil_prototype: Basil = new Basil();
herbs.push(basil_prototype);

export class Tomatoes extends Food {
    constructor() {
        super();
        this.categories.push("Fruit", "Tomatoes");
        this.singular = "Tomato";
        this.plural = "Tomatoes";
        this.description = "Tomatoes";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const tomatoes_prototype: Tomatoes = new Tomatoes();
fruits.push(tomatoes_prototype);

export class Lettuce extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Lettuce");
        this.singular = "Lettuce";
        this.plural = "Lettuce";
        this.description = "Lettuce";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const lettuce_prototype: Lettuce = new Lettuce();
vegetables.push(lettuce_prototype);

export class Cabbage extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Cabbage");
        this.singular = "Cabbage";
        this.plural = "Cabbage";
        this.description = "Cabbage";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cabbage_prototype: Cabbage = new Cabbage();
vegetables.push(cabbage_prototype);

export class Cauliflower extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Cauliflower");
        this.singular = "Cauliflower";
        this.plural = "Cauliflower";
        this.description = "Cauliflower";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cauliflower_prototype: Cauliflower = new Cauliflower();
vegetables.push(cauliflower_prototype);

export class Broccoli extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Broccoli");
        this.singular = "Broccoli";
        this.plural = "Broccoli";
        this.description = "Broccoli";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const broccoli_prototype: Broccoli = new Broccoli();
vegetables.push(broccoli_prototype);

export class Dragonmeat extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Meat", "Dragonmeat");
        this.singular = "Dragonmeat";
        this.plural = "Dragonmeat";
        this.description = "Dragonmeat";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Questing"];
    }
}
export const dragonmeat_prototype: Dragonmeat = new Dragonmeat();
meats.push(dragonmeat_prototype);

export class Grubs extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Grubs");
        this.singular = "Grub";
        this.plural = "Grubs";
        this.description = "Grubs";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const grubs_prototype: Grubs = new Grubs();
proteins.push(grubs_prototype);

export class Brains extends Food {
    constructor() {
        super();
        this.categories.push("Other", "Brain");
        this.singular = "Brain";
        this.plural = "Brains";
        this.description = "Brains";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const brains_prototype: Brains = new Brains();
others.push(brains_prototype);

export class Mealworms extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Insects", "Mealworm");
        this.singular = "Mealworm";
        this.plural = "Mealworms";
        this.description = "Mealworms";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const mealworms_prototype: Mealworms = new Mealworms();
insects.push(mealworms_prototype);

export class Beetles extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Insects", "Beetle");
        this.singular = "Beetle";
        this.plural = "Beetles";
        this.description = "Beetles";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const beetles_prototype: Beetles = new Beetles();
insects.push(beetles_prototype);

export class Ants extends Food {
    type : "red" | "black"| "fire";
    constructor(type: "red" | "black"| "fire") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Protein", "Insects", "Ant");
        this.singular = this.type + "ant";
        this.plural = this.singular + "s";
        this.description = "ants";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const antsRed_prototype: Ants = new Ants("red");
export const antsBlack_prototype: Ants = new Ants("black");
export const antsFire_prototype: Ants = new Ants("fire");
insects.push(antsRed_prototype, antsBlack_prototype, antsFire_prototype);

export class Ooze extends Food {
    type : "gray" | "green" | "superior" | "purple";
    constructor(type: "gray" | "green" | "superior" | "purple") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Other", "Ooze");
        this.singular = this.type + "Ooze";
        this.plural = this.singular;
        this.description = "Ooze";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging", "Questing"];
    }
}
export const oozeGray_prototype: Ooze = new Ooze("gray");
export const oozeGreen_prototype: Ooze = new Ooze("green");
export const oozeSuperior_prototype: Ooze = new Ooze("superior");
export const oozePurple_prototype: Ooze = new Ooze("purple");
others.push(oozeGray_prototype, oozeGreen_prototype, oozeSuperior_prototype, oozePurple_prototype);

export class Glowworm extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Insects", "Glowworm");
        this.singular = "Glowworm";
        this.plural = "Glowworms";
        this.description = "Glowworms";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const glowworm_prototype: Glowworm = new Glowworm();
insects.push(glowworm_prototype);

export class HumanoidFlesh extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Meat", "Other", "Humanoid Flesh");
        this.singular = "Humanoid Flesh";
        this.plural = "Humanoid Flesh";
        this.description = "Humanoid Flesh";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Religious Ceremony"];
    }
}
export const humanoidFlesh_prototype: HumanoidFlesh = new HumanoidFlesh();
meats.push(humanoidFlesh_prototype);
others.push(humanoidFlesh_prototype);

export class Venison extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Meat", "Venison");
        this.singular = "Venison";
        this.plural = "Venison";
        this.description = "Deer Meat";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Hunting"];
    }
}
export const venison_prototype: Venison = new Venison();
meats.push(venison_prototype);

export class Sprouts extends Food {
    constructor() {
        super();
        this.categories.push("Vegatable", "Sprout");
        this.singular = "Sprout";
        this.plural = "Sprouts";
        this.description = "Sprouts";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const sprouts_prototype: Sprouts = new Sprouts();
vegetables.push(sprouts_prototype);

export class MapleSap extends Food {
    constructor() {
        super();
        this.categories.push("Other", "Maple Sap");
        this.singular = "Maple Sap";
        this.plural = "Maple Sap";
        this.description = "Maple Sap";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const mapleSap_prototype: MapleSap = new MapleSap();
others.push(mapleSap_prototype);

export class Acorns extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Nuts", "Acorn");
        this.singular = "Acorn";
        this.plural = "Acorns";
        this.description = "Acorns";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Foraging"];
    }
}
export const acorns_prototype: Acorns = new Acorns();
nuts.push(acorns_prototype);

export class VanillaBean extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Vanilla Bean");
        this.singular = "Vanilla Bean";
        this.plural = "Vanilla Beans";
        this.description = "Vanilla Beans";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const vanillaBean_prototype: VanillaBean = new VanillaBean();
spices.push(vanillaBean_prototype);

export class Cucumbers extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Cucumber");
        this.singular = "Cucumber";
        this.plural = "Cucumbers";
        this.description = "Cucumbers";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cucumbers_prototype: Cucumbers = new Cucumbers();
vegetables.push(cucumbers_prototype);

export class Onion extends Food {
    type: "purple"| "white"| "green"| "red";
    constructor(type: "purple"| "white"| "green"| "red") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Vegetable", "Onion");
        this.singular = this.type + "onion";
        this.plural = this.singular + "s";
        this.description = "they have layers";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const purpleOnion_prototype: Onion = new Onion("purple");
export const whiteOnion_prototype: Onion = new Onion("white");
export const greenOnion_prototype: Onion = new Onion("green");
export const redOnion_prototype: Onion = new Onion("red");
vegetables.push(purpleOnion_prototype, whiteOnion_prototype, greenOnion_prototype, redOnion_prototype);

export class Egg extends Food {
    type: "chicken"| "fish"| "snake"| "lizard"| "dragon";
    constructor(type: "chicken"| "fish"| "snake"| "lizard"| "dragon") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Protein", "Dairy", "Egg");
        this.singular = this.type + " egg";
        this.plural = this.singular + "s";
        this.description = "unborn animal in a shell";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming", "Fishing", "Foraging", "Questing"];
    }
}
export const chickenEgg_prototype: Egg = new Egg("chicken");
export const fishEgg_prototype: Egg = new Egg("fish");
export const snakeEgg_prototype: Egg = new Egg("snake");
export const lizardEgg_prototype: Egg = new Egg("lizard");
export const dragonEgg_prototype: Egg = new Egg("dragon");
eggs.push(chickenEgg_prototype, fishEgg_prototype, snakeEgg_prototype, lizardEgg_prototype, dragonEgg_prototype);
dairies.push(chickenEgg_prototype, fishEgg_prototype, snakeEgg_prototype, lizardEgg_prototype, dragonEgg_prototype);

export class SoySauce extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Soy Sauce");
        this.singular = "Soy Sauce";
        this.plural = "Soy Sauce";
        this.description = "Soy Sauce";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const soySauce_prototype: SoySauce = new SoySauce();
spices.push(soySauce_prototype);

export class CocoaBeans extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Cocoa Beans");
        this.singular = "Cocoa Beans";
        this.plural = "Cocoa Beans";
        this.description = "Cocoa Beans";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cocoaBeans_prototype: CocoaBeans = new CocoaBeans();
spices.push(cocoaBeans_prototype);

export class CoffeeBeans extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Coffee Beans");
        this.singular = "Coffee Beans";
        this.plural = "Coffee Beans";
        this.description = "Coffee Beans";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const coffeeBeans_prototype: CoffeeBeans = new CoffeeBeans();
spices.push(coffeeBeans_prototype);

export class TeaLeaves extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Tea Leaves");
        this.singular = "Tea Leaves";
        this.plural = "Tea Leaves";
        this.description = "Tea Leaves";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const teaLeaves_prototype: TeaLeaves = new TeaLeaves();
spices.push(teaLeaves_prototype);

export class Wheat extends Food {
    constructor() {
        super();
        this.categories.push("Grain", "Wheat");
        this.singular = "Wheat";
        this.plural = "Wheat";
        this.description = "Wheat";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const wheat_prototype: Wheat = new Wheat();
grains.push(wheat_prototype);

export class Oats extends Food {
    constructor() {
        super();
        this.categories.push("Grain", "Oats");
        this.singular = "Oats";
        this.plural = "Oats";
        this.description = "Oats";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const oats_prototype: Oats = new Oats();
grains.push(oats_prototype);

export class Barley extends Food {
    constructor() {
        super();
        this.categories.push("Grain", "Barley");
        this.singular = "Barley";
        this.plural = "Barley";
        this.description = "Barley";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const barley_prototype: Barley = new Barley();
grains.push(barley_prototype);

export class Curry extends Food {
    type: "red"| "green"| "yellow"| "golden";
    constructor(type: "red"| "green"| "yellow"| "golden") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Spice", "Curry");
        this.singular = this.type + " curry";
        this.plural = this.singular;
        if(type === "golden") {
            this.singular = "Golden Curry";
            this.plural = "Golden Curry";
        }
        this.description = "curry";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const redCurry_prototype: Curry = new Curry("red");
export const greenCurry_prototype: Curry = new Curry("green");
export const yellowCurry_prototype: Curry = new Curry("yellow");
export const goldenCurry_prototype: Curry = new Curry("golden");
spices.push(redCurry_prototype, greenCurry_prototype, yellowCurry_prototype, goldenCurry_prototype);

export class Beets extends Food {
    constructor() {
        super();
        this.categories.push("Vegetable", "Beets");
        this.singular = "Beets";
        this.plural = "Beets";
        this.description = "Beets";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const beets_prototype: Beets = new Beets();
vegetables.push(beets_prototype);

export class Flour extends Food {
    type: "rice"| "wheat"| "barley"| "oat"| "rye"| "buckwheat";
    constructor(type: "rice"| "wheat"| "barley"| "oat"| "rye"| "buckwheat") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Starch");
        this.singular = this.type + " flour";
        this.plural = this.singular;
        if(type === "buckwheat") {
            this.singular = "Buckwheat Flour";
            this.plural = "Buckwheat Flour";
        }
        this.description = "flour";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const riceFlour_prototype: Flour = new Flour("rice");
export const wheatFlour_prototype: Flour = new Flour("wheat");
export const barleyFlour_prototype: Flour = new Flour("barley");
export const oatFlour_prototype: Flour = new Flour("oat");
export const ryeFlour_prototype: Flour = new Flour("rye");
export const buckwheatFlour_prototype: Flour = new Flour("buckwheat");
starchs.push(riceFlour_prototype, wheatFlour_prototype, barleyFlour_prototype, oatFlour_prototype, ryeFlour_prototype, buckwheatFlour_prototype);


export class Honey extends Food {
    constructor() {
        super();
        this.categories.push("Sweet", "Honey");
        this.singular = "honey";
        this.plural = "honey";
        this.description = "honey";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const honey_prototype: Honey = new Honey();
sweets.push(honey_prototype);

export class PancakeBatter extends Food {
    constructor() {
        super();
        this.categories.push("Dough");
        this.singular = "pancake batter";
        this.plural = "pancake batter";
        this.description = "pancake batter";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pancakeBatter_prototype: PancakeBatter = new PancakeBatter();
doughs.push(pancakeBatter_prototype);

export class Jam extends Food {
    constructor() {
        super();
        this.categories.push("Sweet", "Jam");
        this.singular = "jam";
        this.plural = "jam";
        this.description = "jam";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const jam_prototype: Jam = new Jam();
sweets.push(jam_prototype);

export class ChiliPowder extends Food {
    constructor() {
        super();
        this.categories.push("Spice");
        this.singular = "chili powder";
        this.plural = "chili powder";
        this.description = "chili powder";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const chiliPowder_prototype: ChiliPowder = new ChiliPowder();
spices.push(chiliPowder_prototype);

export class Chocolate extends Food {
    constructor() {
        super();
        this.categories.push("Sweet", "Chocolate");
        this.singular = "chocolate";
        this.plural = "chocolate";
        this.description = "chocolate";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const chocolate_prototype: Chocolate = new Chocolate();
sweets.push(chocolate_prototype);

export class FriedEgg extends Food {
    constructor() {
        super();
        this.categories.push("Protein");
        this.singular = "fried egg";
        this.plural = "fried egg";
        this.description = "fried egg";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const friedEgg_prototype: FriedEgg = new FriedEgg();
proteins.push(friedEgg_prototype);

export class Omelet extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Omelet");
        this.singular = "omelet";
        this.plural = "omelet";
        this.description = "omelet";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const omelet_prototype: Omelet = new Omelet();
proteins.push(omelet_prototype);

export class ScrambledEgg extends Food {
    constructor() {
        super();
        this.categories.push("Protein");
        this.singular = "scrambled egg";
        this.plural = "scrambled egg";
        this.description = "scrambled egg";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const scrambledEgg_prototype: ScrambledEgg = new ScrambledEgg();
proteins.push(scrambledEgg_prototype);

export class PoachedEgg extends Food {
    constructor() {
        super();
        this.categories.push("Protein");
        this.singular = "poached egg";
        this.plural = "poached egg";
        this.description = "poached egg";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const poachedEgg_prototype: PoachedEgg = new PoachedEgg();
proteins.push(poachedEgg_prototype);

export class Pickle extends Food {
    constructor() {
        super();
        this.categories.push("Brined");
        this.singular = "pickle";
        this.plural = "pickle";
        this.description = "pickle";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pickle_prototype: Pickle = new Pickle();
brines.push(pickle_prototype);

export class Pancake extends Food {
    constructor() {
        super();
        this.categories.push("Starch");
        this.singular = "pancake";
        this.plural = "pancake";
        this.description = "pancake";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pancake_prototype: Pancake = new Pancake();
starchs.push(pancake_prototype);

export class Granola extends Food {
    constructor() {
        super();
        this.categories.push("Starch");
        this.singular = "granola";
        this.plural = "granola";
        this.description = "granola";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const granola_prototype: Granola = new Granola();
starchs.push(granola_prototype);

export class BreadDough extends Food {
    constructor() {
        super();
        this.categories.push("Dough");
        this.singular = "bread dough";
        this.plural = "bread dough";
        this.description = "bread dough";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const breadDough_prototype: BreadDough = new BreadDough();
doughs.push(breadDough_prototype);

export class Noodles extends Food {
    constructor() {
        super();
        this.categories.push("Noodles");
        this.singular = "raw noodles";
        this.plural = "raw noodles";
        this.description = "raw noodles";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const noodles_prototype: Noodles = new Noodles();

export class Tofu extends Food {
    constructor() {
        super();
        this.categories.push("Protein");
        this.singular = "tofu";
        this.plural = "tofu";
        this.description = "tofu";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const tofu_prototype: Tofu = new Tofu();
proteins.push(tofu_prototype);

export class Broth extends Food {
    constructor() {
        super();
        this.categories.push("Soup", "Broth");
        this.singular = "broth";
        this.plural = "broth";
        this.description = "broth";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const broth_prototype: Broth = new Broth();
soups.push(broth_prototype);

export class Tortilla extends Food {
    constructor() {
        super();
        this.categories.push("Starch", "Tortilla");
        this.singular = "tortilla";
        this.plural = "tortilla";
        this.description = "tortilla";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const tortilla_prototype: Tortilla = new Tortilla();
starchs.push(tortilla_prototype);

export class PieFilling extends Food {
    constructor() {
        super();
        this.categories.push("Sweet");
        this.singular = "pie filling";
        this.plural = "pie fillings";
        this.description = "pie fillings";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pieFilling_prototype: PieFilling = new PieFilling();
sweets.push(pieFilling_prototype);

export class PizzaDough extends Food {
    constructor() {
        super();
        this.categories.push("Dough");
        this.singular = "pizza dough";
        this.plural = "pizza dough";
        this.description = "pizza dough";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pizzaDough_prototype: PizzaDough = new PizzaDough();
doughs.push(pizzaDough_prototype);

export class PastryDough extends Food {
    constructor() {
        super();
        this.categories.push("Dough");
        this.singular = "pastry dough";
        this.plural = "pastry dough";
        this.description = "pastry dough";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pastryDough_prototype: PastryDough = new PastryDough();
doughs.push(pastryDough_prototype);


export class IceCream extends Food {
    constructor() {
        super();
        this.categories.push("Sweets");
        this.singular = "ice cream";
        this.plural = "ice cream";
        this.description = "ice cream";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const iceCream_prototype: IceCream = new IceCream();
sweets.push(iceCream_prototype);

export class GoatCheese extends Food {
    constructor() {
        super();
        this.categories.push("Cheese");
        this.singular = "goat cheese";
        this.plural = "goat cheese";
        this.description = "goat cheese";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const goatCheese_prototype: GoatCheese = new GoatCheese();
cheeses.push(goatCheese_prototype);

export class Butter extends Food {
    constructor() {
        super();
        this.categories.push("Dairy");
        this.singular = "butter";
        this.plural = "butter";
        this.description = "butter";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const butter_prototype: Butter = new Butter();
dairies.push(butter_prototype);

export class Cream extends Food {
    constructor() {
        super();
        this.categories.push("Dairy", "Cream");
        this.singular = "cream";
        this.plural = "cream";
        this.description = "cream";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cream_prototype: Cream = new Cream();
dairies.push(cream_prototype);

export class Cheese extends Food {
    constructor() {
        super();
        this.categories.push("Cheese");
        this.singular = "cheese";
        this.plural = "cheese";
        this.description = "cheese";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cheese_prototype: Cheese = new Cheese();
cheeses.push(cheese_prototype);

export class Yogurt extends Food {
    constructor() {
        super();
        this.categories.push("Dairy", "Yogurt");
        this.singular = "yogurt";
        this.plural = "yogurt";
        this.description = "yogurt";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const yogurt_prototype: Yogurt = new Yogurt();
dairies.push(yogurt_prototype);


export class Wasabi extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Wasabi");
        this.singular = "wasabi";
        this.plural = "wasabi";
        this.description = "wasabi";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const wasabi_prototype: Wasabi = new Wasabi();
spices.push(wasabi_prototype);

export class Syrup extends Food {
    constructor() {
        super();
        this.categories.push("Sweet");
        this.singular = "syrup";
        this.plural = "syrup";
        this.description = "syrup";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const syrup_prototype: Syrup = new Syrup();
sweets.push(syrup_prototype);

export class Guacamole extends Food {
    constructor() {
        super();
        this.categories.push("Sauce", "Spread", "Guacamole");
        this.singular = "guacamole";
        this.plural = "guacamole";
        this.description = "guacamole";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const guacamole_prototype: Guacamole = new Guacamole();
spreads.push(guacamole_prototype);
sauces.push(guacamole_prototype);

export class Salsa extends Food {
    constructor() {
        super();
        this.categories.push("Sauce");
        this.singular = "salsa";
        this.plural = "salsa";
        this.description = "salsa";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const salsa_prototype: Salsa = new Salsa();
sauces.push(salsa_prototype);

export class PeanutButter extends Food {
    constructor() {
        super();
        this.categories.push("Spread");
        this.singular = "peanut butter";
        this.plural = "peanut butter";
        this.description = "peanut butter";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const peanutButter_prototype: PeanutButter = new PeanutButter();
spreads.push(peanutButter_prototype);

export class Jelliy extends Food {
    constructor() {
        super();
        this.categories.push("Spread");
        this.singular = "jelly";
        this.plural = "jellies";
        this.description = "jellies";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const jellies_prototype: Jelliy = new Jelliy();
spreads.push(jellies_prototype);

export class Mayonnaise extends Food {
    constructor() {
        super();
        this.categories.push("Spread");
        this.singular = "mayonnaise";
        this.plural = "mayonnaise";
        this.description = "mayonnaise";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const mayonnaise_prototype: Mayonnaise = new Mayonnaise();
spreads.push(mayonnaise_prototype);
condiments.push(mayonnaise_prototype);

export class Ketchup extends Food {
    constructor() {
        super();
        this.categories.push("Condiment");
        this.singular = "ketchup";
        this.plural = "ketchup";
        this.description = "ketchup";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const ketchup_prototype: Ketchup = new Ketchup();
condiments.push(ketchup_prototype);

export class PastaEntree extends Food {
    constructor() {
        super();
        this.categories.push("Entree", "Pasta");
        this.singular = "pasta and sauce";
        this.plural = "pasta and sauce";
        this.description = "pasta and sauce";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pastaEntree_prototype: PastaEntree = new PastaEntree();
entrees.push(pastaEntree_prototype);

export class MacNCheese extends Food {
    constructor() {
        super();
        this.categories.push("Entree", "Pasta");
        this.singular = "mac 'n' cheese";
        this.plural = "mac 'n' cheese";
        this.description = "mac 'n' cheese";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const macNCheese_prototype: MacNCheese = new MacNCheese();
entrees.push(macNCheese_prototype);

export class Carbonara extends Food {
    constructor() {
        super();
        this.categories.push("Entree", "Pasta");
        this.singular = "carbonara";
        this.plural = "carbonara";
        this.description = "carbonara";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const carbonara_prototype: Carbonara = new Carbonara();
entrees.push(carbonara_prototype);

export class BeefStroganoff extends Food {
    constructor() {
        super();
        this.categories.push("Entree", "Pasta");
        this.singular = "beef stroganoff";
        this.plural = "beef stroganoff";
        this.description = "beef stroganoff";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const beefStroganoff_prototype: BeefStroganoff = new BeefStroganoff();
entrees.push(beefStroganoff_prototype);

export class Lasagna extends Food {
    constructor() {
        super();
        this.categories.push("Entree", "Pasta");
        this.singular = "lasagna";
        this.plural = "lasagna";
        this.description = "lasagna";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const lasagna_prototype: Lasagna = new Lasagna();
entrees.push(lasagna_prototype);

export class ClamChowder extends Food {
    constructor() {
        super();
        this.categories.push("Soup");
        this.singular = "clam chowder";
        this.plural = "clam chowder";
        this.description = "clam chowder";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const clamChowder_prototype: ClamChowder = new ClamChowder();
soups.push(clamChowder_prototype);

export class LobsterBisque extends Food {
    constructor() {
        super();
        this.categories.push("Soup");
        this.singular = "lobster bisque";
        this.plural = "lobster bisque";
        this.description = "lobster bisque";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const lobsterBisque_prototype: LobsterBisque = new LobsterBisque();
soups.push(lobsterBisque_prototype);

export class CornChowder extends Food {
    constructor() {
        super();
        this.categories.push("Soup");
        this.singular = "corn chowder";
        this.plural = "corn chowder";
        this.description = "corn chowder";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cornChowder_prototype: CornChowder = new CornChowder();
soups.push(cornChowder_prototype);

export class Chili extends Food {
    constructor() {
        super();
        this.categories.push("Soup");
        this.singular = "chili";
        this.plural = "chili";
        this.description = "chili";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const chili_prototype: Chili = new Chili();
soups.push(chili_prototype);

export class ChickenNoodleSoup extends Food {
    constructor() {
        super();
        this.categories.push("Soup");
        this.singular = "chicken noodle soup";
        this.plural = "chicken noodle soup";
        this.description = "chicken noodle soup";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const chickenNoodleSoup_prototype: ChickenNoodleSoup = new ChickenNoodleSoup();
soups.push(chickenNoodleSoup_prototype);

export class BLT extends Food {
    constructor() {
        super();
        this.categories.push("Sandwich");
        this.singular = "BLT";
        this.plural = "BLT";
        this.description = "BLT";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const bLT_prototype: BLT = new BLT();
sandwiches.push(bLT_prototype);

export class Burger extends Food {
    constructor() {
        super();
        this.categories.push("Sandwich");
        this.singular = "burger";
        this.plural = "burger";
        this.description = "burger";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const burger_prototype: Burger = new Burger();
sandwiches.push(burger_prototype);

export class Toasties extends Food {
    constructor() {
        super();
        this.categories.push("Sandwich");
        this.singular = "toasties";
        this.plural = "toasties";
        this.description = "toasties";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const toasties_prototype: Toasties = new Toasties();
sandwiches.push(toasties_prototype);

export class PBJ extends Food {
    constructor() {
        super();
        this.categories.push("PBJ");
        this.singular = "PBJ";
        this.plural = "PBJ";
        this.description = "PBJ";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pBJ_prototype: PBJ = new PBJ();
sandwiches.push(pBJ_prototype);

export class LettuceWrap extends Food {
    constructor() {
        super();
        this.categories.push("Sandwich");
        this.singular = "lettuce wrap";
        this.plural = "lettuce wrap";
        this.description = "lettuce wrap";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const lettuceWrap_prototype: LettuceWrap = new LettuceWrap();
sandwiches.push(lettuceWrap_prototype);

export class BoiledEgg extends Food {
    constructor() {
        super();
        this.categories.push("Protein");
        this.singular = "boiled egg";
        this.plural = "boiled eggs";
        this.description = "boiled egg";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const boiledEgg_prototype: BoiledEgg = new BoiledEgg();
proteins.push(boiledEgg_prototype);

export class NutsNBerries extends Food {
    constructor() {
        super();
        this.categories.push("Snack");
        this.singular = "nuts 'n' berries";
        this.plural = "nuts 'n' berries";
        this.description = "nuts 'n' berries";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const nutsNBerries_prototype: NutsNBerries = new NutsNBerries();
snacks.push(nutsNBerries_prototype);

export class Cake extends Food {
    constructor() {
        super();
        this.categories.push("Sweet");
        this.singular = "cake";
        this.plural = "cakes";
        this.description = "cake";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cake_prototype: Cake = new Cake();
sweets.push(cake_prototype);

export class Pizza extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "pizza";
        this.plural = "pizzas";
        this.description = "pizza";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pizza_prototype: Pizza = new Pizza();
entrees.push(pizza_prototype);

export class FruitSalad extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "fruit salad";
        this.plural = "fruit salad";
        this.description = "fruit salad";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const fruitSalad_prototype: FruitSalad = new FruitSalad();
sides.push(fruitSalad_prototype);

export class BananaBread extends Food {
    constructor() {
        super();
        this.categories.push("Bread");
        this.singular = "banana bread";
        this.plural = "banana bread";
        this.description = "banana bread";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const bananaBread_prototype: BananaBread = new BananaBread();
breads.push(bananaBread_prototype);

export class BakedPotato extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "baked potato";
        this.plural = "baked potatoes";
        this.description = "baked potato";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const bakedPotato_prototype: BakedPotato = new BakedPotato();
sides.push(bakedPotato_prototype);

export class Jerky extends Food {
    constructor() {
        super();
        this.categories.push("Snack");
        this.singular = "jerky";
        this.plural = "jerky";
        this.description = "jerky";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const jerky_prototype: Jerky = new Jerky();
snacks.push(jerky_prototype);

export class FrenchFries extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "french fries";
        this.plural = "french fries";
        this.description = "french fries";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const frenchFries_prototype: FrenchFries = new FrenchFries();
sides.push(frenchFries_prototype);

export class SausageAndPeppers extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "sausage and peppers";
        this.plural = "sausage and peppers";
        this.description = "sausage and peppers";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const sausageAndPeppers_prototype: SausageAndPeppers = new SausageAndPeppers();
entrees.push(sausageAndPeppers_prototype);

export class Coleslaw extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "coleslaw";
        this.plural = "coleslaw";
        this.description = "coleslaw";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const coleslaw_prototype: Coleslaw = new Coleslaw();
sides.push(coleslaw_prototype);

export class SteakAndPotatoes extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "steak and potatoes";
        this.plural = "steak and potatoes";
        this.description = "steak and potatoes";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const steakAndPotatoes_prototype: SteakAndPotatoes = new SteakAndPotatoes();
entrees.push(steakAndPotatoes_prototype);

export class Ratatouille extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "ratatouille";
        this.plural = "ratatouille";
        this.description = "ratatouille";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const ratatouille_prototype: Ratatouille = new Ratatouille();
entrees.push(ratatouille_prototype);

export class Gumbo extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "gumbo";
        this.plural = "gumbo";
        this.description = "gumbo";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const gumbo_prototype: Gumbo = new Gumbo();
entrees.push(gumbo_prototype);

export class RoastedVegetables extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "roasted vegetables";
        this.plural = "roasted vegetables";
        this.description = "roasted vegetables";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const roastedVegetables_prototype: RoastedVegetables = new RoastedVegetables();
sides.push(roastedVegetables_prototype);

export class Bruschetta extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "bruschetta";
        this.plural = "bruschetta";
        this.description = "bruschetta";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const bruschetta_prototype: Bruschetta = new Bruschetta();
sides.push(bruschetta_prototype);

export class StuffedShrooms extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "stuffed 'shrooms";
        this.plural = "stuffed 'shrooms";
        this.description = "stuffed 'shrooms";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const stuffedShrooms_prototype: StuffedShrooms = new StuffedShrooms();
sides.push(stuffedShrooms_prototype);

export class EggRolls extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "egg rolls";
        this.plural = "egg rolls";
        this.description = "egg rolls";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const eggRolls_prototype: EggRolls = new EggRolls();
sides.push(eggRolls_prototype);

export class EggSalad extends Food {
    constructor() {
        super();
        this.categories.push("Spread");
        this.singular = "egg salad";
        this.plural = "egg salad";
        this.description = "egg salad";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const eggSalad_prototype: EggSalad = new EggSalad();
spreads.push(eggSalad_prototype);

export class StirFry extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "stir fry";
        this.plural = "stir fry";
        this.description = "stir fry";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const stirFry_prototype: StirFry = new StirFry();
entrees.push(stirFry_prototype);

export class SteakAndEggs extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "steak and eggs";
        this.plural = "steak and eggs";
        this.description = "steak and eggs";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const steakAndEggs_prototype: SteakAndEggs = new SteakAndEggs();
entrees.push(steakAndEggs_prototype);

export class HamAndEggs extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "ham and eggs";
        this.plural = "ham and eggs";
        this.description = "ham and eggs";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const hamAndEggs_prototype: HamAndEggs = new HamAndEggs();
entrees.push(hamAndEggs_prototype);

export class CabbageRolls extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "cabbage rolls";
        this.plural = "cabbage rolls";
        this.description = "cabbage rolls";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cabbageRolls_prototype: CabbageRolls = new CabbageRolls();
sides.push(cabbageRolls_prototype);

export class Pho extends Food {
    constructor() {
        super();
        this.categories.push("Soup");
        this.singular = "pho";
        this.plural = "pho";
        this.description = "pho";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pho_prototype: Pho = new Pho();
soups.push(pho_prototype);

export class CornBread extends Food {
    constructor() {
        super();
        this.categories.push("Bread");
        this.singular = "corn bread";
        this.plural = "corn bread";
        this.description = "corn bread";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cornBread_prototype: CornBread = new CornBread();
breads.push(cornBread_prototype);

export class Oatmeal extends Food {
    constructor() {
        super();
        this.categories.push("Soup");
        this.singular = "oatmeal";
        this.plural = "oatmeal";
        this.description = "oatmeal";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const oatmeal_prototype: Oatmeal = new Oatmeal();
soups.push(oatmeal_prototype);

export class FruitSnack extends Food {
    constructor() {
        super();
        this.categories.push("Snack");
        this.singular = "fruit snack";
        this.plural = "fruit snack";
        this.description = "fruit snack";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const fruitSnack_prototype: FruitSnack = new FruitSnack();
snacks.push(fruitSnack_prototype);

export class Meatloaf extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "meatloaf";
        this.plural = "meatloaf";
        this.description = "meatloaf";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const meatloaf_prototype: Meatloaf = new Meatloaf();
entrees.push(meatloaf_prototype);

export class FishAndFungi extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "fish 'n' fungi";
        this.plural = "fish 'n' fungi";
        this.description = "fish 'n' fungi";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const fishAndFungi_prototype: FishAndFungi = new FishAndFungi();
entrees.push(fishAndFungi_prototype);

export class AvocadoToast extends Food {
    constructor() {
        super();
        this.categories.push("Sandwich");
        this.singular = "avocado toast";
        this.plural = "avocado toast";
        this.description = "avocado toast";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const avocadoToast_prototype: AvocadoToast = new AvocadoToast();
sandwiches.push(avocadoToast_prototype);

export class Waffles extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "waffles";
        this.plural = "waffles";
        this.description = "waffles";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const waffles_prototype: Waffles = new Waffles();
entrees.push(waffles_prototype);

export class YogurtParfait extends Food {
    constructor() {
        super();
        this.categories.push("Yogurt Parfait");
        this.singular = "yogurt parfait";
        this.plural = "yogurt parfait";
        this.description = "yogurt parfait";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const yogurtParfait_prototype: YogurtParfait = new YogurtParfait();

export class Pie extends Food {
    constructor() {
        super();
        this.categories.push("Sweet");
        this.singular = "pie";
        this.plural = "pie";
        this.description = "pie";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const pie_prototype: Pie = new Pie();
sweets.push(pie_prototype);

export class Quesadilla extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "quesadilla";
        this.plural = "quesadillas";
        this.description = "quesadillas";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const quesadillas_prototype: Quesadilla = new Quesadilla();
entrees.push(quesadillas_prototype);

export class GrilledProtein extends Food {
    constructor() {
        super();
        this.categories.push("Protein");
        this.singular = "grilled protein";
        this.plural = "grilled protein";
        this.description = "grilled protein";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const grilledProtein_prototype: GrilledProtein = new GrilledProtein();
proteins.push(grilledProtein_prototype);

export class FriedProtein extends Food {
    constructor() {
        super();
        this.categories.push("Protein");
        this.singular = "fried protein";
        this.plural = "fried protein";
        this.description = "fried protein";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const friedProtein_prototype: FriedProtein = new FriedProtein();
proteins.push(friedProtein_prototype);

export class ChickenPotPie extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "chicken pot pie";
        this.plural = "chicken pot pie";
        this.description = "chicken pot pie";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const chickenPotPie_prototype: ChickenPotPie = new ChickenPotPie();
entrees.push(chickenPotPie_prototype);

export class RiceEntree extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "rice entree";
        this.plural = "rice entree";
        this.description = "rice entree";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const riceEntree_prototype: RiceEntree = new RiceEntree();
entrees.push(riceEntree_prototype);

export class FriedRice extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "fried rice";
        this.plural = "fried rice";
        this.description = "fried rice";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const friedRice_prototype: FriedRice = new FriedRice();
entrees.push(friedRice_prototype);

export class Caviar extends Food {
    constructor() {
        super();
        this.categories.push("seafood");
        this.singular = "caviar";
        this.plural = "caviar";
        this.description = "caviar";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Fishing"];
    }
}
export const caviar_prototype: Caviar = new Caviar();
seafoods.push(caviar_prototype);

export class SteamedDumplings extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "steamed dumplings";
        this.plural = "steamed dumplings";
        this.description = "steamed dumplings";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const steamedDumplings_prototype: SteamedDumplings = new SteamedDumplings();
sides.push(steamedDumplings_prototype);

export class FriedDumplings extends Food {
    constructor() {
        super();
        this.categories.push("Side");
        this.singular = "fried dumplings";
        this.plural = "fried dumplings";
        this.description = "fried dumplings";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const friedDumplings_prototype: FriedDumplings = new FriedDumplings();
sides.push(friedDumplings_prototype);

export class FunGuyFungiFeast extends Food {
    constructor() {
        super();
        this.categories.push("Entree");
        this.singular = "fun guy's fantastic fungi feast";
        this.plural = "fun guy's fantastic fungi feasts";
        this.description = "fun guy's fantastic fungi feast";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const funGuyFungiFeast_prototype: FunGuyFungiFeast = new FunGuyFungiFeast();
entrees.push(funGuyFungiFeast_prototype);

export class InsectPuree extends Food {
    constructor() {
        super();
        this.categories.push("Insect");
        this.singular = "insect puree";
        this.plural = "insect purees";
        this.description = "insect puree";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const insectPuree_prototype: InsectPuree = new InsectPuree();
insects.push(insectPuree_prototype);

export class RoastedInsects extends Food {
    constructor() {
        super();
        this.categories.push("Insect");
        this.singular = "roasted insects";
        this.plural = "roasted insects";
        this.description = "roasted insects";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const roastedInsects_prototype: RoastedInsects = new RoastedInsects();
insects.push(roastedInsects_prototype);

export class SeasonedInsects extends Food {
    constructor() {
        super();
        this.categories.push("Insect");
        this.singular = "seasoned insects";
        this.plural = "seasoned insects";
        this.description = "seasoned insects";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const seasonedInsects_prototype: SeasonedInsects = new SeasonedInsects();
insects.push(seasonedInsects_prototype);

export class BugsNSlime extends Food {
    constructor() {
        super();
        this.categories.push("Entree", "Other");
        this.singular = "bugs 'n' slime";
        this.plural = "bugs 'n' slime";
        this.description = "bugs 'n' slime";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const bugsNSlime_prototype: BugsNSlime = new BugsNSlime();
entrees.push(bugsNSlime_prototype);
others.push(bugsNSlime_prototype);

export class BugsNOoze extends Food {
    constructor() {
        super();
        this.categories.push("Entree", "Others");
        this.singular = "bugs 'n' ooze";
        this.plural = "bugs 'n' ooze";
        this.description = "bugs 'n' ooze";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const bugsNOoze_prototype: BugsNOoze = new BugsNOoze();
entrees.push(bugsNOoze_prototype);
others.push(bugsNOoze_prototype);

export class MossWrap extends Food {
    constructor() {
        super();
        this.categories.push("Sandwich");
        this.singular = "moss wrap";
        this.plural = "moss wraps";
        this.description = "moss wrap";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const mossWrap_prototype: MossWrap = new MossWrap();
sandwiches.push(mossWrap_prototype);

export class AlgaePaste extends Food {
    constructor() {
        super();
        this.categories.push("Other");
        this.singular = "algae paste";
        this.plural = "algae pastes";
        this.description = "algae paste";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const algaePaste_prototype: AlgaePaste = new AlgaePaste();
others.push(algaePaste_prototype);

export class CaveCritterFritters extends Food {
    constructor() {
        super();
        this.categories.push("Insects");
        this.singular = "cave critter fritters";
        this.plural = "cave critter fritters";
        this.description = "cave critter fritters";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const caveCritterFritters_prototype: CaveCritterFritters = new CaveCritterFritters();
insects.push(caveCritterFritters_prototype);

export class MuddyMossyMoldyMess extends Food {
    constructor() {
        super();
        this.categories.push("Others");
        this.singular = "muddy, mossy, moldy mess";
        this.plural = "muddy, mossy, moldy messes";
        this.description = "muddy, mossy, moldy mess";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const muddyMossyMoldyMess_prototype: MuddyMossyMoldyMess = new MuddyMossyMoldyMess();
others.push(muddyMossyMoldyMess_prototype);

export class OoeyGooeyFreshNFruity extends Food {
    constructor() {
        super();
        this.categories.push("Others");
        this.singular = "ooey gooey fresh 'n' fruity";
        this.plural = "ooey gooey fresh 'n' fruity";
        this.description = "ooey gooey fresh 'n' fruity";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const ooeyGooeyFreshNFruity_prototype: OoeyGooeyFreshNFruity = new OoeyGooeyFreshNFruity();
others.push(ooeyGooeyFreshNFruity_prototype);

export class ScoopOGloop extends Food {
    constructor() {
        super();
        this.categories.push("Others");
        this.singular = "scoop o' gloop";
        this.plural = "scoops o' gloop";
        this.description = "scoop o' gloop";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const scoopOGloop_prototype: ScoopOGloop = new ScoopOGloop();
others.push(scoopOGloop_prototype);




// *****************************
// Must come at end of file
// Combine subcategory arrays into category arrays
// Combine all categories into food
// Ensure food array only contains unqiue items
// *****************************

fruits.push(...berries);
dairies.push(...eggs);
seafoods.push(...fishes, ...crustaceans, ...sushis);
proteins.push(...fishes, ...eggs, ...fungi, ...meats, ...nuts);
foods.push(...vegetables, ...grains, ...starchs, ...spices, ...herbs, ...others, ...insects, ...sweets, ...doughs, ...brines, ...soups, ...cheeses, ...sauces, ...sides, ...entrees, ...spreads, ...condiments, ...sandwiches, ...snacks, ...breads, ...fruits, ...seafoods, ...proteins);
//condense foods into unqiue values only
foods = foods.filter((food, index, self) => self.findIndex(f => f.singular === food.singular) === index);
