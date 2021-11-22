// ============================================================================
// Language: TypeScript Extension
// Path: ts\items\food.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Consumable } from './consumable';
import * as category from './categories';


export class Food extends Consumable {
    singular: string = "Food";
    plural: string = "Food";
    description: string = "Food is something edible";
    hunger: number = 0;
    thirst: number = 0;
    hp: number = 0;
    
    dryLevel: number = 0;
    quality: number = 0;

    constructor() {
        super();
        this.types.push("Food");
    }

    eat(): void {
        console.log(`You eat the ${this.singular}.`);
        this.consume();
        console.log(`Your hunger is satified by ${this.hunger}.`);
        console.log(`Your thirst is satified by ${this.thirst}.`);
        console.log(`You gain ${this.hp} health.`);
    }

    getDryLevel() {
        if(this.dryLevel < 50) {
            return "wet";
        } else if(this.dryLevel < 75) {
            return "damp";
        } else if(this.dryLevel < 90) {
            return "moist";
        } else if(this.dryLevel < 95) {
            return "dry";
        } else {
            return "crispy";
        }
    }

    getQuality() {
        if(this.quality < 30) {
            return "terrible";
        } else if(this.quality < 60) {
            return "poor";
        } else if(this.quality < 70) {
            return "mediocre";
        } else if(this.quality < 80) {
            return "average";
        } else if(this.quality < 90) {
            return "good";
        } else if(this.quality < 97.5) {
            return "great";
        } else if(this.quality < 100) {
            return "superb";
        } else if(this.quality >= 100) {
            return "perfect";
        }
    }
}
export var foods: Food[] = [];

export class Cookable extends Food {
    singular: string = "Cookable";
    plural: string = "Cookables";
    description: string = "Cookable is something that can be cooked";
    cookedLevel: number = 0;

    getInfo(qty: number): string {
        switch(qty) {
            case 0:
                return `No ${this.plural}`;
            case 1:
                if(this.getQuality() === "average") {
                    return `An ${this.getQuality()} ${this.getCookedLevel()} ${this.singular}`;
                } else {
                    return `A ${this.getQuality()} ${this.getCookedLevel()} ${this.singular}`;
                }
            default:
                return `Some ${this.getQuality()} ${this.getCookedLevel()} ${this.plural}`;
        }
    }

    constructor() {
        super();
        this.types.push("Cookable");
    }

    cook(): void {
        console.log(`You cook the ${this.plural}.`);
    }

    getCookedLevel() {
        if(this.cookedLevel < 50) {
            return "raw";
        } else if(this.cookedLevel < 75) {
            return "rare";
        } else if(this.cookedLevel < 90) {
            return "medium-rare";
        } else if(this.cookedLevel < 95) {
            return "medium";
        } else if(this.cookedLevel < 100) {
            return "medium-well";
        } else if(this.cookedLevel < 105) {
            return "well cooked";
        } else if(this.cookedLevel < 110) {
            return "slightly burnt";
        } else if(this.cookedLevel < 115) {
            return "burnt";
        } else if(this.cookedLevel < 120) {
            return "severly burnt";
        } else {
            return "incinerated";
        }
    }
}
export var cookables: Cookable[] = [];


// var salmon = new CookingIngredient("Salmon", fish, [Source.Fishing], false);
export class Salmon extends Cookable {
    singular: string = "Salmon";
    plural: string = "Salmon";
    description: string = "Salmon are fish";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Fish", "Salmon");
    }
}
export const salmon_prototype: Salmon = new Salmon();
cookables.push(salmon_prototype);


// var trout = new CookingIngredient("Trout", fish, [Source.Fishing], false);
export class Trout extends Cookable {
    singular: string = "Trout";
    plural: string = "Trout";
    description: string = "Trout are fish";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Fish", "Trout");
    }
}
export const trout_prototype: Trout = new Trout();
cookables.push(trout_prototype);

// var pike = new CookingIngredient("Pike", fish, [Source.Fishing], true);
export class Pike extends Cookable {
    singular: string = "Pike";
    plural: string = "Pike";
    description: string = "Pike are fish";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Fish", "Pike");
    }
}
export const pike_prototype: Pike = new Pike();
cookables.push(pike_prototype);

// var carp = new CookingIngredient("Carp", fish, [Source.Fishing], false);
export class Carp extends Cookable {
    singular: string = "Carp";
    plural: string = "Carp";
    description: string = "Carp are fish";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Fish", "Carp");
    }
}
export const carp_prototype: Carp = new Carp();
cookables.push(carp_prototype);

// var crayfish = new CookingIngredient("Crayfish", fish, [Source.Fishing], false);
export class Crayfish extends Cookable {
    singular: string = "Crayfish";
    plural: string = "Crayfish";
    description: string = "Crayfish are small crustacean";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Crustacean", "Crayfish");
    }
}
export const crayfish_prototype: Crayfish = new Crayfish();
cookables.push(crayfish_prototype);

// var catfish = new CookingIngredient("Catfish", fish, [Source.Fishing], false);
export class Catfish extends Cookable {
    singular: string = "Catfish";
    plural: string = "Catfish";
    description: string = "Whiskered bottom feeders";
    hunger: number = 10;
    thirst: number = 0; 
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Fish", "Catfish");
    }
}
export const catfish_prototype: Catfish = new Catfish();
cookables.push(catfish_prototype);

// var lobster = new CookingIngredient("Lobster", fish, [Source.Fishing], false);
export class Lobster extends Cookable {
    singular: string = "Lobster";
    plural: string = "Lobster";
    description: string = "Lobsters are crustaceans";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Crustacean", "Lobster");
    }
}
export const lobster_prototype: Lobster = new Lobster();
cookables.push(lobster_prototype);

// var clamMeat = new CookingIngredient("Clam Meat", fish, [Source.Fishing], false);
export class ClamMeat extends Cookable {
    singular: string = "Clam Meat";
    plural: string = "Clam Meat";
    description: string = "The fleshy bits from inside a clam";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Clam Meat");
    }
}
export const clam_meat_prototype: ClamMeat = new ClamMeat();
cookables.push(clam_meat_prototype);

// var shrimp = new CookingIngredient("Shrimp", fish, [Source.Fishing], false);
export class Shrimp extends Cookable {
    singular: string = "Shrimp";
    plural: string = "Shrimp";
    description: string = "Shrimp are small crustaceans";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Fish", "Shrimp");
    }
}
export const shrimp_prototype: Shrimp = new Shrimp();
cookables.push(shrimp_prototype);

// var sharkMeat = new CookingIngredient("Shark Meat", fish, [Source.Fishing], true);
export class SharkMeat extends Cookable {
    singular: string = "Shark Meat";
    plural: string = "Shark Meat";
    description: string = "Shark meat";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Seafood", "Fish", "Shark Meat");
    }
}
export const shark_meat_prototype: SharkMeat = new SharkMeat();
cookables.push(shark_meat_prototype);

// var beef = new CookingIngredient("Beef", meat, [Source.Farming], false);
export class Beef extends Cookable {
    singular: string = "Beef";
    plural: string = "Beef";
    description: string = "Meat from a cow";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Meat", "Beef");
    }
}
export const beef_prototype: Beef = new Beef();
cookables.push(beef_prototype);

// var pork = new CookingIngredient("Pork", meat, [Source.Farming], false);
export class Pork extends Cookable {
    singular: string = "Pork";
    plural: string = "Pork";
    description: string = "Meat from a pig";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Meat", "Pork");
    }
}
export const pork_prototype: Pork = new Pork();
cookables.push(pork_prototype);

// var pigSkin = new CookingIngredient("Pig Skin", other, [Source.Farming], true);
export class PigSkin extends Food {
    singular: string = "Pig Skin";
    plural: string = "Pig Skin";
    description: string = "Skin from a pig";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Pig Skin");
    }

    getInfo(qty: number): string {
        switch(qty) {
            case 0:
                return `No ${this.plural}`;
            case 1:
                if(this.getQuality() === "average") {
                    return `An ${this.getQuality()} ${this.getDryLevel()} ${this.singular}`;
                } else {
                    return `A ${this.getQuality()} ${this.getDryLevel()} ${this.singular}`;
                }
            default:
                return `Some ${this.getQuality()} ${this.getDryLevel()} ${this.plural}`;
        }
    }
}
export const pig_skin_prototype: PigSkin = new PigSkin();
foods.push(pig_skin_prototype);

// var pigFeet = new CookingIngredient("Pig's Feet", other, [Source.Farming], true);
export class PigFeet extends Cookable {
    singular: string = "Pig's Feet";
    plural: string = "Pig's Feet";
    description: string = "Feet from a pig";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Pig Feet");
    }
}
export const pig_feet_prototype: PigFeet = new PigFeet();
cookables.push(pig_feet_prototype);

// var sugar = new CookingIngredient("Sugar", baking, [Source.Milling], false);
export class Sugar extends Food {
    singular: string = "Sugar";
    plural: string = "Sugar";
    description: string = "Sweet powder";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Sugar");
    }

    getInfo(qty: number): string {
        switch(qty) {
            case 0:
                return `No ${this.plural}`;
            case 1:
                return `A ${this.getQuality()} ${this.getDryLevel()} ${this.singular}`;
            default:
                return `Some ${this.getQuality()} ${this.getDryLevel()} ${this.plural}`;
        }
    }
}
export const sugar_prototype: Sugar = new Sugar();
foods.push(sugar_prototype);

// var seaweed = new CookingIngredient("Seaweed", sushi, [Source.Foraging], true);
export class Seaweed extends Food {
    color: "red" | "green" | "brown";
    singular: string = "Seaweed";
    plural: string = "Seaweed";
    description: string = "Seaweed";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor(color: "red" | "green" | "brown") {
        super();
        this.types.push("Seafood", "Seaweed");
        this.color = color;
    }

    // description: string = `${this.getQuality()} ${this.getDryLevel()} ${this.color} seaweed`;

    getInfo(qty: number): string {
        switch(qty) {
            case 0:
                return `No ${this.color} ${this.plural}`;
            case 1:
                return `A ${this.getQuality()} ${this.getDryLevel()} ${this.color} ${this.singular}`;
            default:
                return `Some ${this.getQuality()} ${this.getDryLevel()} ${this.color} ${this.plural}`;
        }
    }
}
export const seaweed_red_prototype: Seaweed = new Seaweed("red");
export const seaweed_green_prototype: Seaweed = new Seaweed("green");
export const seaweed_brown_prototype: Seaweed = new Seaweed("brown");
foods.push(seaweed_red_prototype, seaweed_green_prototype, seaweed_brown_prototype);

// var rice = new CookingIngredient("Rice", grain, [Source.Farming], false);
export class Rice extends Cookable {
    singular: string = "Rice";
    plural: string = "Rice";
    description: string = "Rice";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Grain", "Rice");
    }
}
export const rice_prototype: Rice = new Rice();
cookables.push(rice_prototype);

// var corn = new CookingIngredient("Corn", grain, [Source.Farming], false);
export class Corn extends Cookable {
    singular: string = "Corn";
    plural: string = "Corn";
    description: string = "Corn";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Grain", "Corn");
    }
}
export const corn_prototype: Corn = new Corn();
cookables.push(corn_prototype);

export class CornOnTheCob extends Cookable {
    singular: string = "Corn on the Cob";
    plural: string = "Corn on the Cob";
    description: string = "Corn on the Cob";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Grain", "Corn on the Cob");
    }
}
export const cornOnOheCob_prototype: CornOnTheCob = new CornOnTheCob();
foods.push(cornOnOheCob_prototype);

// var asparagus = new CookingIngredient("Asparagus", vegetable, [Source.Farming], false);
export class Asparagus extends Cookable {
    singular: string = "Asparagus";
    plural: string = "Asparagus";
    description: string = "Asparagus";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Vegetable", "Asparagus");
    }
}
export const asparagus_prototype: Asparagus = new Asparagus();
cookables.push(asparagus_prototype);

const enum BeanType {
    kidney = "kidney",
    pinto = "pinto",
    black = "black",
    green = "green",
    lima = "lima",
    mung = "mung",
    garbanzo = "garbanzo",
    jack = "jack",
    soy = "soy"
}

// var redBeans = new CookingIngredient("Red Beans", protein, [Source.Foraging], false);
export class Beans extends Cookable {
    type: BeanType = BeanType.kidney;
    singular: string = "Red Beans";
    plural: string = "Red Beans";
    description: string = "Red Beans";
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;

    constructor() {
        super();
        this.types.push("Protein", "Red Beans");
    }
}
export const beans_prototype: Beans = new Beans();
cookables.push(beans_prototype);

// var whiteMushroom = new CookingIngredient("White Mushroom", protein, [Source.Foraging, Source.Farming], false);
// var brownMushroom = new CookingIngredient("Brown Mushroom", fungi, [Source.Foraging, Source.Farming], false);
// var purpleMushroom = new CookingIngredient("Purple Mushroom", fungi, [Source.Foraging, Source.Farming], true);
// var glowingMushrooms = new CookingIngredient("Glowing Mushrooms", fungi, [Source.Foraging, Source.Farming], true);
// var morels = new CookingIngredient("Morels", protein, [Source.Foraging, Source.Farming], false);
// var redMushrooms = new CookingIngredient("Red Mushrooms", poison, [Source.Foraging], false);

const enum MushroomType {
    white = "white",
    brown = "brown",
    purple = "purple",
    glowing = "glowing",
    morel = "morel",
    red = "red"
}

export class Mushroom extends Cookable {
    category = category.protein;

    type: MushroomType = MushroomType.white;
    name: string = (this.type == MushroomType.morel) ? this.type : this.type + Mushroom.name;
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    // weight defined on the objet itself
}
export const mushroom_prototype: Mushroom = new Mushroom("Mushroom", "protein filled fungi");
cookables.push(mushroom_prototype);

// var apples = new CookingIngredient("Apples", fruit, [Source.Farming, Source.Foraging], false);
const enum AppleType {
    red = "red",
    green = "green",
    golden = "golden"
}

export class Apple extends Cookable {
    category = category.fruit;

    type: AppleType = AppleType.red;
    name: string = this.type + Apple.name;
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;
}
export const apple_prototype: Apple = new Apple("Apple", "fruit");
cookables.push(apple_prototype);

// var pears = new CookingIngredient("Pears", fruit, [Source.Farming], true);
export class Pear extends Cookable {
    category = category.fruit;

    name: string = Pear.name;
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;
}
export const pear_prototype: Pear = new Pear("Pear", "fruit");
cookables.push(pear_prototype);

// var grapes = new CookingIngredient("Grapes", fruit, [Source.Farming], false);
const enum GrapeType {
    red = "red",
    white = "white",
    purple = "purple",
    muscadine = "muscadine"
}

export class Grape extends Food {
    category = category.fruit;

    type: GrapeType = GrapeType.red;
    name: string = this.type + Grape.name;
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;
}
export const grape_prototype: Grape = new Grape("Grape", "fruit");
foods.push(grape_prototype);

// var avocados = new CookingIngredient("Avocados", fruit, [Source.Farming], true);
export class Avocado extends Cookable {
    category = category.fruit;

    name: string = Avocado.name;
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;
}
export const avocado_prototype: Avocado = new Avocado("Avocado", "fruit");
cookables.push(avocado_prototype);

// var citrus = new CookingIngredient("Citrus", fruit, [Source.Farming], true);
export class Citrus extends Food {
    category = category.fruit;

    name: string = Citrus.name;
    hunger: number = 10;
    thirst: number = 0;
    hp: number = 0;
    weight: number = 1;
}
export const citrus_prototype: Citrus = new Citrus("Citrus", "acidic fruit with a protective peel");
foods.push(citrus_prototype);

// var peanuts = new CookingIngredient("Peanuts", nut, [Source.Farming], false);
// var walnuts = new CookingIngredient("Walnuts", nut, [Source.Foraging], false);
// var almonds = new CookingIngredient("Almonds", nut, [Source.Farming], true);
// var brazilNuts = new CookingIngredient("Brazil Nuts", nut, [Source.Foraging], true);
// var chestnuts = new CookingIngredient("Chestnuts", nut, [Source.Questing], false);
// var coconut = new CookingIngredient("Coconut", fruit, [Source.Foraging], false);
// var carrots = new CookingIngredient("Carrots", vegetable, [Source.Farming], false);
// var potatoes = new CookingIngredient("Potatoes", starch, [Source.Farming, Source.Foraging], false);
// var beets = new CookingIngredient("Beets", vegetable, [Source.Farming], true);
// var eggplant = new CookingIngredient("Eggplant", vegetable, [Source.Farming], true);
// var redBerries = new CookingIngredient("Red Berries", berry, [Source.Foraging], false);
// var blueberries = new CookingIngredient("Blueberries", berry, [Source.Foraging], false);
// var boysenberries = new CookingIngredient("Boysenberries", berry, [Source.Foraging], true);
// var snozzberries = new CookingIngredient("Snozzberries", berry, [Source.Foraging], false);
// var bananas = new CookingIngredient("Bananas", fruit, [Source.Farming], false);
// var cherries = new CookingIngredient("Cherries", fruit, [Source.Questing], false);
// var pineapples = new CookingIngredient("Pineapples", fruit, [Source.Foraging], false);
// var blackPepper = new CookingIngredient("Black Pepper", spice, [Source.Trading], false);
// var bellPepper = new CookingIngredient("Bell Pepper", vegetable, [Source.Farming], false);
// var hotPeppers = new CookingIngredient("Hot Peppers", spice, [Source.Farming], false);
// var tomatoes = new CookingIngredient("Tomatoes", fruit, [Source.Farming], false);
// var lettuce = new CookingIngredient("Lettuce", vegetable, [Source.Farming], false);
// var cabbage = new CookingIngredient("Cabbage", vegetable, [Source.Farming], true);
// var cauliflower = new CookingIngredient("Cauliflower", vegetable, [Source.Farming], true);
// var broccoli = new CookingIngredient("Broccoli", vegetable, [Source.Farming], false);
// var rancidMeat = new CookingIngredient("Rancid Meat", protein, [Source.Questing], false);
// var questionableMeat = new CookingIngredient("Questionable Meat", protein, [Source.Questing], false);
// var dragonmeat = new CookingIngredient("Dragonmeat", protein, [Source.Questing], true);
// var grubs = new CookingIngredient("Grubs", protein, [Source.Foraging], false);
// var brains = new CookingIngredient("Brains", other, [Source.Foraging], true);
// var mealworms = new CookingIngredient("Mealworms", protein, [Source.Foraging], false);
// var beetles = new CookingIngredient("Beetles", protein, [Source.Foraging], false);
// var fireAnts = new CookingIngredient("Fire Ants", protein, [Source.Foraging], true);
// var grayOoze = new CookingIngredient("Gray Ooze", other, [Source.Foraging, Source.Questing], false);
// var greenOoze = new CookingIngredient("Green Ooze", other, [Source.Questing], false);
// var superiorOoze = new CookingIngredient("Superior Ooze", other, [Source.Questing], true);
// var glowworm = new CookingIngredient("Glowworm", protein, [Source.Foraging], false);
// var humanoidFlesh = new CookingIngredient("Humanoid Flesh", protein, [Source.ReligiousCeremony], true);
// var ginger = new CookingIngredient("Ginger", spice, [Source.Foraging], false);
// var deerMeat = new CookingIngredient("Deer Meat", protein, [Source.Hunting], false);
// var basil = new CookingIngredient("Basil", spice, [Source.Farming], false);
// var sprouts = new CookingIngredient("Sprouts", spice, [Source.Foraging], true);
// var wasabi = new CookingIngredient("Wasabi", spice, [Source.Trading], true);
// var mapleSap = new CookingIngredient("Maple Sap", other, [Source.Foraging], false);
// var acorns = new CookingIngredient("Acorns", other, [Source.Foraging], false);
// var vanillaBean = new CookingIngredient("Vanilla Bean", spice, [Source.Farming], true);
// var cucumbers = new CookingIngredient("Cucumbers", vegetable, [Source.Farming], false);
// var purpleOnion = new CookingIngredient("Purple Onion", vegetable, [Source.Farming], true);
// var whiteOnion = new CookingIngredient("White Onion", vegetable, [Source.Farming], false);
// var greenOnion = new CookingIngredient("Green Onion", vegetable, [Source.Foraging], false);