// ============================================================================
// Language: TypeScript
// Path: ts\itm_food.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Source} from "./ingredients"
import {Consumable} from "./itm_consumables"



export class Food extends Consumable {
    sources: Source[]; // where a user can obtain the food
    
    hunger: number; // positive number makes eater more full, less hungry
    thirst: number; // positive number makes eater less thirsty
    hp: number; // positive number heals, negative number damages

    dryLevel: number; // how dry is the food? (0-100)
    cookedLevel: number; // how much the food has been cooked
    type: string; // a modifier for the color and or flavor of the food

    mustBeDry: boolean = false; // does the food need to be dried?
    canBeCooked: boolean = true; // can the food be cooked?
    hasType: boolean = false; // does the food have a type?

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

// var salmon = new CookingIngredient("Salmon", fish, [Source.Fishing], false);
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
foods.push(salmon_prototype);

// var trout = new CookingIngredient("Trout", fish, [Source.Fishing], false);
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
foods.push(trout_prototype);

export class RainbowTrout extends Trout {}
export const rainbowTrout_prototype: RainbowTrout = new RainbowTrout();
foods.push(rainbowTrout_prototype);

// var pike = new CookingIngredient("Pike", fish, [Source.Fishing], true);
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
foods.push(pike_prototype);

// var carp = new CookingIngredient("Carp", fish, [Source.Fishing], false);
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
foods.push(carp_prototype);

// var crayfish = new CookingIngredient("Crayfish", fish, [Source.Fishing], false);
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
foods.push(crayfish_prototype);

// var catfish = new CookingIngredient("Catfish", fish, [Source.Fishing], false);
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
foods.push(catfish_prototype);

// var lobster = new CookingIngredient("Lobster", fish, [Source.Fishing], false);
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
foods.push(lobster_prototype);

// var clamMeat = new CookingIngredient("Clam Meat", fish, [Source.Fishing], false);
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
foods.push(clam_meat_prototype);

// var shrimp = new CookingIngredient("Shrimp", fish, [Source.Fishing], false);
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
foods.push(shrimp_prototype);

// var sharkMeat = new CookingIngredient("Shark Meat", fish, [Source.Fishing], true);
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
foods.push(shark_meat_prototype);

// var beef = new CookingIngredient("Beef", meat, [Source.Farming], false);
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
foods.push(beef_prototype);

// var pork = new CookingIngredient("Pork", meat, [Source.Farming], false);
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
foods.push(pork_prototype);

// var pigSkin = new CookingIngredient("Pig Skin", other, [Source.Farming], true);
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
foods.push(pig_skin_prototype);

// var pigFeet = new CookingIngredient("Pig's Feet", other, [Source.Farming], true);
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
foods.push(pig_feet_prototype);

// var sugar = new CookingIngredient("Sugar", baking, [Source.Milling], false);
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
foods.push(sugar_prototype);

// var seaweed = new CookingIngredient("Seaweed", sushi, [Source.Foraging], true);
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
foods.push(seaweedRed_prototype, seaweedGreen_prototype, seaweedBrown_prototype);

// var rice = new CookingIngredient("Rice", grain, [Source.Farming], false);
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
foods.push(rice_prototype);

// var corn = new CookingIngredient("Corn", grain, [Source.Farming], false);
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
foods.push(corn_prototype);

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
foods.push(cornOnOheCob_prototype);

// var asparagus = new CookingIngredient("Asparagus", vegetable, [Source.Farming], false);
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
foods.push(asparagus_prototype);

// var redBeans = new CookingIngredient("Red Beans", protein, [Source.Foraging], false);
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
foods.push(beansKidney_prototype, beansPinto_prototype, beansBlack_prototype, beansGreen_prototype, beansLima_prototype, beansMung_prototype, beansGarbanzo_prototype, beansJack_prototype, beansSoy_prototype);

// var whiteMushroom = new CookingIngredient("White Mushroom", protein, [Source.Foraging, Source.Farming], false);
// var brownMushroom = new CookingIngredient("Brown Mushroom", fungi, [Source.Foraging, Source.Farming], false);
// var purpleMushroom = new CookingIngredient("Purple Mushroom", fungi, [Source.Foraging, Source.Farming], true);
// var glowingMushrooms = new CookingIngredient("Glowing Mushrooms", fungi, [Source.Foraging, Source.Farming], true);
// var morels = new CookingIngredient("Morels", protein, [Source.Foraging, Source.Farming], false);
// var redMushrooms = new CookingIngredient("Red Mushrooms", poison, [Source.Foraging], false);
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
foods.push(mushroomWhite_prototype, mushroomBrown_prototype, mushroomPurple_prototype, mushroomGlowing_prototype, mushroomMorel_prototype, mushroomRed_prototype);

// var apples = new CookingIngredient("Apples", fruit, [Source.Farming, Source.Foraging], false);
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
foods.push(appleRed_prototype, appleGreen_prototype, appleGolden_prototype);

// var pears = new CookingIngredient("Pears", fruit, [Source.Farming], true);
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
foods.push(pear_prototype);

// var grapes = new CookingIngredient("Grapes", fruit, [Source.Farming], false);


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
foods.push(grapeRed_prototype, grapeWhite_prototype, grapePurple_prototype, grapeMuscadine_prototype);

// var avocados = new CookingIngredient("Avocados", fruit, [Source.Farming], true);
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
foods.push(avocado_prototype);

// var citrus = new CookingIngredient("Citrus", fruit, [Source.Farming], true);
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
foods.push(citrusOrange_prototype, citrusLemon_prototype, citrusLime_prototype, citrusGrapefruit_prototype, citrusTangerine_prototype);

// var peanuts = new CookingIngredient("Peanuts", nut, [Source.Farming], false);
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
foods.push(peanut_prototype);

// var walnuts = new CookingIngredient("Walnuts", nut, [Source.Foraging], false);
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
foods.push(walnut_prototype);

// var almonds = new CookingIngredient("Almonds", nut, [Source.Farming], true);
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
foods.push(almond_prototype);

// var brazilNuts = new CookingIngredient("Brazil Nuts", nut, [Source.Foraging], true);
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
foods.push(brazilNut_prototype);

// var chestnuts = new CookingIngredient("Chestnuts", nut, [Source.Questing], false);
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
foods.push(chestnut_prototype);

// var coconut = new CookingIngredient("Coconut", fruit, [Source.Foraging], false);
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
foods.push(coconut_prototype);

// var carrots = new CookingIngredient("Carrots", vegetable, [Source.Farming], false);
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
foods.push(carrot_prototype);

// var potatoes = new CookingIngredient("Potatoes", starch, [Source.Farming, Source.Foraging], false);
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
foods.push(potato_prototype);

// var beets = new CookingIngredient("Beets", vegetable, [Source.Farming], true);
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
foods.push(beet_prototype);

// var eggplant = new CookingIngredient("Eggplant", vegetable, [Source.Farming], true);
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
foods.push(eggplant_prototype);

// var redBerries = new CookingIngredient("Red Berries", berry, [Source.Foraging], false);
// var blueberries = new CookingIngredient("Blueberries", berry, [Source.Foraging], false);
// var boysenberries = new CookingIngredient("Boysenberries", berry, [Source.Foraging], true);
// var snozzberries = new CookingIngredient("Snozzberries", berry, [Source.Foraging], false);
// var cherries = new CookingIngredient("Cherries", fruit, [Source.Questing], false);
// var strawberries = new CookingIngredient("Strawberries", fruit, [Source.Foraging], false);
// var blackberries = new CookingIngredient("Blackberries", berry, [Source.Foraging], false);
// var raspberries = new CookingIngredient("Raspberries", berry, [Source.Foraging], false);
// var blueCurrants = new CookingIngredient("Blue Currants", berry, [Source.Foraging], false);
// var blackCurrants = new CookingIngredient("Black Currants", berry, [Source.Foraging], false);
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
foods.push(berryRed_prototype, berryBlue_prototype, berryBlack_prototype, berrySnozz_prototype, berryCherry_prototype, berryStraw_prototype, berryRasp_prototype, berryBlueCurrant_prototype, berryBlackCurrant_prototype);

// var bananas = new CookingIngredient("Bananas", fruit, [Source.Farming], false);
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
foods.push(banana_prototype);

// var pineapples = new CookingIngredient("Pineapples", fruit, [Source.Foraging], false);
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
foods.push(pineapple_prototype);

// var blackPepper = new CookingIngredient("Black Pepper", spice, [Source.Trading], false);
// var whitePepper = new CookingIngredient("White Pepper", spice, [Source.Trading], false);
// var bellPepper = new CookingIngredient("Bell Pepper", vegetable, [Source.Farming], false);
// var jalapenos = new CookingIngredient("Jalapenos", vegetable, [Source.Farming], false);
// var cayennePepper = new CookingIngredient("Cayenne Pepper", spice, [Source.Trading], false);
// var chiliPepper = new CookingIngredient("Chili Pepper", spice, [Source.Trading], false);
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
foods.push(pepperBlack_prototype, pepperWhite_prototype, pepperBell_prototype, pepperJalapeno_prototype, pepperCayenne_prototype, pepperChili_prototype);

// var coriander = new CookingIngredient("Coriander", herb, [Source.Trading], false);
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
foods.push(coriander_prototype);

// var cilantro = new CookingIngredient("Cilantro", herb, [Source.Trading], false);
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
foods.push(cilantro_prototype);

// var cumin = new CookingIngredient("Cumin", spice, [Source.Trading], false);
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
foods.push(cumin_prototype);

// var dill = new CookingIngredient("Dill", herb, [Source.Trading], false);
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
foods.push(dill_prototype);

// var fennel = new CookingIngredient("Fennel", herb, [Source.Trading], false);
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
foods.push(fennel_prototype);

// var garlic = new CookingIngredient("Garlic", herb, [Source.Trading], false);
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
foods.push(garlic_prototype);

// var ginger = new CookingIngredient("Ginger", herb, [Source.Trading], false);
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
foods.push(ginger_prototype);

// var oregano = new CookingIngredient("Oregano", herb, [Source.Trading], false);
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
foods.push(oregano_prototype);

// var parsley = new CookingIngredient("Parsley", herb, [Source.Trading], false);
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
foods.push(parsley_prototype);

// var rosemary = new CookingIngredient("Rosemary", herb, [Source.Trading], false);
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
foods.push(rosemary_prototype);

// var thyme = new CookingIngredient("Thyme", herb, [Source.Trading], false);
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
foods.push(thyme_prototype);

// var turmeric = new CookingIngredient("Turmeric", spice, [Source.Trading], false);
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
foods.push(turmeric_prototype);

// var chives = new CookingIngredient("Chives", herb, [Source.Trading], false);
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
foods.push(chives_prototype);

// var sage = new CookingIngredient("Sage", herb, [Source.Trading], false);
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
foods.push(sage_prototype);

// var basil = new CookingIngredient("Basil", herb, [Source.Trading], false);
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
foods.push(basil_prototype);

// var tomatoes = new CookingIngredient("Tomatoes", fruit, [Source.Farming], false);
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
foods.push(tomatoes_prototype);

// var lettuce = new CookingIngredient("Lettuce", vegetable, [Source.Farming], false);
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
foods.push(lettuce_prototype);

// var cabbage = new CookingIngredient("Cabbage", vegetable, [Source.Farming], true);
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
foods.push(cabbage_prototype);

// var cauliflower = new CookingIngredient("Cauliflower", vegetable, [Source.Farming], true);
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
foods.push(cauliflower_prototype);

// var broccoli = new CookingIngredient("Broccoli", vegetable, [Source.Farming], false);
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
foods.push(broccoli_prototype);

// var rancidMeat = new CookingIngredient("Rancid Meat", protein, [Source.Questing], false);
export class RancidMeat extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Rancid Meat");
        this.singular = "Rancid Meat";
        this.plural = "Rancid Meat";
        this.description = "Rancid Meat";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Questing"];
    }
}
export const rancidMeat_prototype: RancidMeat = new RancidMeat();
foods.push(rancidMeat_prototype);

// var questionableMeat = new CookingIngredient("Questionable Meat", protein, [Source.Questing], false);
export class QuestionableMeat extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Questionable Meat");
        this.singular = "Questionable Meat";
        this.plural = "Questionable Meat";
        this.description = "Questionable Meat";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Questing"];
    }
}
export const questionableMeat_prototype: QuestionableMeat = new QuestionableMeat();
foods.push(questionableMeat_prototype);

// var dragonmeat = new CookingIngredient("Dragonmeat", protein, [Source.Questing], true);
export class Dragonmeat extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Dragonmeat");
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
foods.push(dragonmeat_prototype);

// var grubs = new CookingIngredient("Grubs", protein, [Source.Foraging], false);
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
foods.push(grubs_prototype);

// var brains = new CookingIngredient("Brains", other, [Source.Foraging], true);
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
foods.push(brains_prototype);

// var mealworms = new CookingIngredient("Mealworms", protein, [Source.Foraging], false);
export class Mealworms extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Mealworm");
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
foods.push(mealworms_prototype);

// var beetles = new CookingIngredient("Beetles", protein, [Source.Foraging], false);
export class Beetles extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Beetle");
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
foods.push(beetles_prototype);

// var fireAnts = new CookingIngredient("Fire Ants", protein, [Source.Foraging], true);
export class Ants extends Food {
    type : "red" | "black"| "fire";
    constructor(type: "red" | "black"| "fire") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Protein", "Ant");
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
foods.push(antsRed_prototype, antsBlack_prototype, antsFire_prototype);

// var grayOoze = new CookingIngredient("Gray Ooze", other, [Source.Foraging, Source.Questing], false);
// var greenOoze = new CookingIngredient("Green Ooze", other, [Source.Questing], false);
// var superiorOoze = new CookingIngredient("Superior Ooze", other, [Source.Questing], true);
// var purpleOoze = new CookingIngredient("Purple Ooze", other, [Source.Questing], true);
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
foods.push(oozeGray_prototype, oozeGreen_prototype, oozeSuperior_prototype, oozePurple_prototype);

// var glowworm = new CookingIngredient("Glowworm", protein, [Source.Foraging], false);
export class Glowworm extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Glowworm");
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
foods.push(glowworm_prototype);

// var humanoidFlesh = new CookingIngredient("Humanoid Flesh", protein, [Source.ReligiousCeremony], true);
export class HumanoidFlesh extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Humanoid Flesh");
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
foods.push(humanoidFlesh_prototype);

// var deerMeat = new CookingIngredient("Deer Meat", protein, [Source.Hunting], false);
export class Venison extends Food {
    constructor() {
        super();
        this.categories.push("Protein", "Venison");
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
foods.push(venison_prototype);

// var sprouts = new CookingIngredient("Sprouts", spice, [Source.Foraging], true);
export class Sprouts extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Sprout");
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
foods.push(sprouts_prototype);

// var wasabi = new CookingIngredient("Wasabi", spice, [Source.Trading], true);
export class Wasabi extends Food {
    constructor() {
        super();
        this.categories.push("Spice", "Wasabi");
        this.singular = "Wasabi";
        this.plural = "Wasabi";
        this.description = "Wasabi";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Trading"];
    }
}
export const wasabi_prototype: Wasabi = new Wasabi();
foods.push(wasabi_prototype);

// var mapleSap = new CookingIngredient("Maple Sap", other, [Source.Foraging], false);
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
foods.push(mapleSap_prototype);

// var acorns = new CookingIngredient("Acorns", other, [Source.Foraging], false);
export class Acorns extends Food {
    constructor() {
        super();
        this.categories.push("Other", "Acorn");
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
foods.push(acorns_prototype);

// var vanillaBean = new CookingIngredient("Vanilla Bean", spice, [Source.Farming], true);
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
foods.push(vanillaBean_prototype);

// var cucumbers = new CookingIngredient("Cucumbers", vegetable, [Source.Farming], false);
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
foods.push(cucumbers_prototype);

// var purpleOnion = new CookingIngredient("Purple Onion", vegetable, [Source.Farming], true);
// var whiteOnion = new CookingIngredient("White Onion", vegetable, [Source.Farming], false);
// var greenOnion = new CookingIngredient("Green Onion", vegetable, [Source.Foraging], false);
// var redOnion = new CookingIngredient("Red Onion", vegetable, [Source.Foraging], false);
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
foods.push(purpleOnion_prototype, whiteOnion_prototype, greenOnion_prototype, redOnion_prototype);

// var chickenEgg = new CookingIngredient("Chicken Egg", egg, [Source.Farming], false);
// var fishEgg = new CookingIngredient("Fish Egg", egg, [Source.Fishing], true);
// var snakeEgg = new CookingIngredient("Snake Egg", egg, [Source.Foraging], false);
// var lizardEgg = new CookingIngredient("Lizard Egg", egg, [Source.Foraging], false);
// var dragonEgg = new CookingIngredient("Dragon Egg", egg, [Source.Questing], true);
export class Egg extends Food {
    type: "chicken"| "fish"| "snake"| "lizard"| "dragon";
    constructor(type: "chicken"| "fish"| "snake"| "lizard"| "dragon") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Egg");
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
foods.push(chickenEgg_prototype, fishEgg_prototype, snakeEgg_prototype, lizardEgg_prototype, dragonEgg_prototype);

// var soySauce = new CookingIngredient("Soy Sauce", spice, [Source.Trading], false);
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
foods.push(soySauce_prototype);

// var cowMilk = new CookingIngredient("Cow Milk", dairy, [Source.Farming], false);
// var goatMilk = new CookingIngredient("Goat Milk", dairy, [Source.Farming], true);
export class Milk extends Food {
    type: "cow"| "goat";
    constructor(type: "cow"| "goat") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Dairy", "Milk");
        this.singular = this.type + " milk";
        this.plural = this.singular;
        this.description = "milk";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Farming"];
    }
}
export const cowMilk_prototype: Milk = new Milk("cow");
export const goatMilk_prototype: Milk = new Milk("goat");
foods.push(cowMilk_prototype, goatMilk_prototype);

// var milkOfThePoppy = new CookingIngredient("Milk of the Poppy", spice, [Source.Foraging], true);
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
foods.push(milkOfThePoppy_prototype);

// var cocoaBeans = new CookingIngredient("Cocoa Beans", spice, [Source.Farming], true);
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
foods.push(cocoaBeans_prototype);

// var coffeeBeans = new CookingIngredient("Coffee Beans", tea, [Source.Farming], true);
export class CoffeeBeans extends Food {
    constructor() {
        super();
        this.categories.push("Tea", "Coffee Beans");
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
foods.push(coffeeBeans_prototype);

// var teaLeaves = new CookingIngredient("Tea Leaves", tea, [Source.Farming], false);
export class TeaLeaves extends Food {
    constructor() {
        super();
        this.categories.push("Tea", "Tea Leaves");
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
foods.push(teaLeaves_prototype);

// var wheat = new CookingIngredient("Wheat", grain, [Source.Farming], false);
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
foods.push(wheat_prototype);

// var oats = new CookingIngredient("Oats", grain, [Source.Farming], false);
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
foods.push(oats_prototype);

// var barley = new CookingIngredient("Barley", grain, [Source.Farming], true);
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
foods.push(barley_prototype);

// var vegetableOil = new CookingIngredient("Vegetable Oil", oil, [Source.Distilling], false);
// var grapeseedOil = new CookingIngredient("Grapeseed Oil", oil, [Source.Distilling], true);
// var oliveOil = new CookingIngredient("Olive Oil", oil, [Source.Distilling], true);
// var avocadoOil = new CookingIngredient("Avocado Oil", oil, [Source.Distilling], true);
// var peanutOil = new CookingIngredient("Peanut Oil", oil, [Source.Distilling], true);
// var stickyOil = new CookingIngredient("Sticky Oil", oil, [Source.Questing], false);
// var dragonessence = new CookingIngredient("Dragonessence", oil, [Source.Questing], true);
export class Oil extends Food {
    type: "vegetable"| "grapeseed"| "olive"| "avocado"| "peanut"| "sticky"| "dragonessence";
    constructor(type: "vegetable"| "grapeseed"| "olive"| "avocado"| "peanut"| "sticky"| "dragonessence") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Oil");
        this.singular = this.type + " oil";
        this.plural = this.singular;
        if(type === "dragonessence") {
            this.singular = "Dragonessence";
            this.plural = "Dragonessence";
        }
        this.description = "oil";
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const vegetableOil_prototype: Oil = new Oil("vegetable");
export const grapeseedOil_prototype: Oil = new Oil("grapeseed");
export const oliveOil_prototype: Oil = new Oil("olive");
export const avocadoOil_prototype: Oil = new Oil("avocado");
export const peanutOil_prototype: Oil = new Oil("peanut");
export const stickyOil_prototype: Oil = new Oil("sticky");
export const dragonessence_prototype: Oil = new Oil("dragonessence");
foods.push(vegetableOil_prototype, grapeseedOil_prototype, oliveOil_prototype, avocadoOil_prototype, peanutOil_prototype, stickyOil_prototype, dragonessence_prototype);

export class Wine extends Food {
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
        this.hunger = 0;
        this.thirst = 0;
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const whiteWine_prototype: Wine = new Wine("white");
export const redWine_prototype: Wine = new Wine("red");
export const muscadineWine_prototype: Wine = new Wine("muscadine");
export const roseWine_prototype: Wine = new Wine("rosé");
foods.push(whiteWine_prototype, redWine_prototype, muscadineWine_prototype, roseWine_prototype);

// var redCurry = new CookingIngredient("Red Curry", spice, [Source.Trading], false);
// var greenCurry = new CookingIngredient("Green Curry", spice, [Source.Trading], false);
// var yellowCurry = new CookingIngredient("Yellow Curry", spice, [Source.Trading], false);
// var goldenCurry = new CookingIngredient("Golden Curry", spice, [Source.Trading], true);
export class Curry extends Food {
    type: "red"| "green"| "yellow"| "golden";
    constructor(type: "red"| "green"| "yellow"| "golden") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Spice");
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
foods.push(redCurry_prototype, greenCurry_prototype, yellowCurry_prototype, goldenCurry_prototype);

// var beets = new CookingIngredient("Beets", vegetable, [Source.Farming], true);
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
foods.push(beets_prototype);

// var water = new CookingIngredient("Water", water, [Source.Water], false);
// var cleanWater = new CookingIngredient("Clean Water", water, [Source.Potions], true);
// var purifiedWater = new CookingIngredient("Purified Water", water, [Source.Potions], false);


export class Flour extends Food {
    type: "rice"| "wheat"| "barley"| "oat"| "rye"| "buckwheat";
    constructor(type: "rice"| "wheat"| "barley"| "oat"| "rye"| "buckwheat") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Pasta");
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
foods.push(riceFlour_prototype, wheatFlour_prototype, barleyFlour_prototype, oatFlour_prototype, ryeFlour_prototype, buckwheatFlour_prototype);