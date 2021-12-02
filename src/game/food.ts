// ============================================================================
// Language: TypeScript
// Path: ts\itm_food.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Consumable, dairies } from "./consumables";
import { Source } from "./items";
import { Class } from "./types";

export type FoodType = {
  singular: string;
  plural: string;
  description: string;
} & Class;

export class Food extends Consumable {
  static singular: string = "food";
  static plural: string = "food";
  static description: string = "Food is something edible";

  hunger: number; // positive number makes eater more full, less hungry
  thirst: number; // positive number makes eater less thirsty

  dryLevel: number; // how dry is the food? (0-100)
  cookedLevel: number; // how much the food has been cooked

  mustBeDry: boolean = false; // does the food need to be dried?
  canBeCooked: boolean = true; // can the food be cooked?

  categories: string[] = [];

  constructor() {
    super();
    this.categories.push("Food"); // add food to the list of categories

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
        return `No ${this.getType().plural}`;
      case 1:
        var msg = this.canBeCooked ? `${this.getCookedLevel()} ` : "";
        msg += this.mustBeDry ? `${this.getDryLevel()} ` : "";
        if (this.getQuality() === "average") {
          //starts with a vowel
          return `An ${this.getQuality()} ${msg}${this.getType().singular}`;
        } else {
          return `A ${this.getQuality()} ${msg}${this.getType().singular}`;
        }
      default:
        return `Some ${this.getQuality()} ${this.getType().plural}`;
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
    console.log(`You eat the ${this.getType().singular}.`);
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
export var foods: FoodType[] = [];
export var proteins: FoodType[] = [];
export var meats: FoodType[] = [];
export var crustaceans: FoodType[] = [];
export var seafoods: FoodType[] = [];
export var vegetables: FoodType[] = [];
export var fruits: FoodType[] = [];
export var beans: FoodType[] = [];
export var apples: FoodType[] = [];
export var grapes: FoodType[] = [];
export var citruses: FoodType[] = [];
export var mushrooms: FoodType[] = [];
export var seaweeds: FoodType[] = [];
export var oozes: FoodType[] = [];
export var onions: FoodType[] = [];
export var curries: FoodType[] = [];
export var grains: FoodType[] = [];
export var flours: FoodType[] = [];
export var nuts: FoodType[] = [];
export var fishes: FoodType[] = [];
export var starchs: FoodType[] = [];
export var berries: FoodType[] = [];
export var spices: FoodType[] = [];
export var herbs: FoodType[] = [];
export var others: FoodType[] = [];
export var insects: FoodType[] = [];
export var fungi: FoodType[] = [];
export var eggs: FoodType[] = [];
export var sweets: FoodType[] = [];
export var doughs: FoodType[] = [];
export var brines: FoodType[] = [];
export var soups: FoodType[] = [];
export var cheeses: FoodType[] = [];
export var sauces: FoodType[] = [];
export var sides: FoodType[] = [];
export var entrees: FoodType[] = [];
export var spreads: FoodType[] = [];
export var condiments: FoodType[] = [];
export var sandwiches: FoodType[] = [];
export var snacks: FoodType[] = [];
export var breads: FoodType[] = [];
export var sushis: FoodType[] = [];

export class Salmon extends Food {
  static singular: string = "salmon";
  static plural: string = "salmon";
  static description: string = "A fish";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Fish", "Salmon");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fishes.push(Salmon);

export class Trout extends Food {
  static singular: string = "trout";
  static plural: string = "trout";
  static description: string = "A fish";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Fish", "Trout");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fishes.push(Trout);

export class RainbowTrout extends Trout {}
fishes.push(RainbowTrout);

export class Pike extends Food {
  static singular: string = "pike";
  static plural: string = "pike";
  static description: string = "A fish";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Fish", "Pike");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fishes.push(Pike);

export class Carp extends Food {
  static singular: string = "carp";
  static plural: string = "carp";
  static description: string = "A fish";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Fish", "Carp");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fishes.push(Carp);

export class Crayfish extends Food {
  static singular: string = "crayfish";
  static plural: string = "crayfish";
  static description: string =
    "Crayfish are small crustaceans found in freshwater";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Crustacean", "Crayfish");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
crustaceans.push(Crayfish);

export class Catfish extends Food {
  static singular: string = "catfish";
  static plural: string = "catfish";
  static description: string = "Whiskered bottom feeders";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Fish", "Catfish");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fishes.push(Catfish);

export class Lobster extends Food {
  static singular: string = "lobster";
  static plural: string = "lobster";
  static description: string =
    "Lobsters are large crustaceans found in the ocean";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Crustacean", "Lobster");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
crustaceans.push(Lobster);

export class ClamMeat extends Food {
  static singular = "clam meat";
  static plural = "clam meat";
  static description = "The fleshy bits from inside a clam";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Clam Meat");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
seafoods.push(ClamMeat);

export class Shrimp extends Food {
  static singular: string = "shrimp";
  static plural: string = "shrimp";
  static description: string =
    "Shrimp are small crustaceans found in the ocean";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Fish", "Shrimp");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fishes.push(Shrimp);

export class SharkMeat extends Food {
  static singular = "shark meat";
  static plural = "shark meat";
  static description = "shark meat";
  static sources: Source[] = ["Fishing"];

  constructor() {
    super();
    this.categories.push("Protein", "Seafood", "Fish", "Shark Meat");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fishes.push(SharkMeat);

export class Beef extends Food {
  static singular: string = "beef";
  static plural: string = "beef";
  static description: string = "Meat from a cow";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Protein", "Meat", "Beef");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
meats.push(Beef);

export class Pork extends Food {
  static singular: string = "pork";
  static plural: string = "pork";
  static description: string = "Meat from a pig";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Protein", "Meat", "Pork");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
meats.push(Pork);

export class PigSkin extends Food {
  static singular: string = "pig skin";
  static plural: string = "pig skin";
  static description: string = "The skin from a pig";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Protein", "Pig Skin");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
    this.mustBeDry = true;
  }
}
meats.push(PigSkin);

export class PigFeet extends Food {
  static singular: string = "pig's foot";
  static plural: string = "pig's feet";
  static description: string = "The feet from a pig";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Protein", "Pig Feet");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
meats.push(PigFeet);

export class Sugar extends Food {
  static singular: string = "sugar";
  static plural: string = "sugar";
  static description: string = "Sugar is a sweet, white crystalline substance";
  static sources: Source[] = ["Milling"];

  constructor() {
    super();
    this.categories.push("Sugar");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
    this.mustBeDry = true;
    this.canBeCooked = false;
  }
}
sweets.push(Sugar);

export class Seaweed extends Food {
  static singular: string = "seaweed";
  static plural: string = "seaweed";
  static description: string = "Seaweed is a plant that grows in the ocean";
  static sources: Source[] = ["Fishing", "Foraging"];

  constructor() {
    super();
    this.categories.push("Seafood", "Seaweed");
    this.hasType = true;
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
seaweeds.push(Seaweed);

export class SeaweedRed extends Seaweed {
  static singular: string = "red seaweed";
  static plural: string = "red seaweed";
  static description: string = "Red seaweed is a plant that grows in the ocean";
  static sources: Source[] = ["Fishing", "Foraging"];

  constructor() {
    super();
    this.hasType = true;
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
seaweeds.push(SeaweedRed);

export class SeaweedGreen extends Seaweed {
  static singular: string = "green seaweed";
  static plural: string = "green seaweed";
  static description: string =
    "Green seaweed is a plant that grows in the ocean";
  static sources: Source[] = ["Fishing", "Foraging"];

  constructor() {
    super();
    this.hasType = true;
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
seaweeds.push(SeaweedGreen);

export class SeaweedBrown extends Seaweed {
  static singular: string = "brown seaweed";
  static plural: string = "brown seaweed";
  static description: string =
    "Brown seaweed is a plant that grows in the ocean";
  static sources: Source[] = ["Fishing", "Foraging"];

  constructor() {
    super();
    this.hasType = true;
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
seaweeds.push(SeaweedBrown);

export class Rice extends Food {
  static singular: string = "grain of rice";
  static plural: string = "rice";
  static description: string = "rice";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Grain", "Rice");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grains.push(Rice);

export class Corn extends Food {
  static singular: string = "kernel of corn";
  static plural: string = "corn";
  static description: string = "corn";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Grain", "Corn");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grains.push(Corn);

export class CornOnTheCob extends Food {
  static singular: string = "corn on the cob";
  static plural: string = "corn on the cob";
  static description: string = "corn on the cob";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Grain", "Corn on the Cob");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grains.push(CornOnTheCob);

export class Asparagus extends Food {
  static singular: string = "asparagus";
  static plural: string = "asparagus";
  static description: string = "asparagus";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Asparagus");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Asparagus);

export class Beans extends Food {
  static singular: string = "bean";
  static plural: string = "beans";
  static description: string = "beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Protein", "Beans");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class BeansKidney extends Beans {
  static singular: string = "kidney beans";
  static plural: string = "kidney beans";
  static description: string = "kidney beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
beans.push(BeansKidney);

export class BeansPinto extends Beans {
  static singular: string = "pinto beans";
  static plural: string = "pinto beans";
  static description: string = "pinto beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
beans.push(BeansPinto);

export class BeansBlack extends Beans {
  static singular: string = "black beans";
  static plural: string = "black beans";
  static description: string = "black beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
beans.push(BeansBlack);

export class BeansGreen extends Beans {
  static singular: string = "green beans";
  static plural: string = "green beans";
  static description: string = "green beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
beans.push(BeansGreen);

export class BeansLima extends Beans {
  static singular: string = "lima beans";
  static plural: string = "lima beans";
  static description: string = "lima beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
beans.push(BeansLima);

export class BeansMung extends Beans {
  static singular: string = "mung beans";
  static plural: string = "mung beans";
  static description: string = "mung beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
beans.push(BeansMung);

export class BeansGarbanzo extends Beans {
  static singular: string = "garbanzo beans";
  static plural: string = "garbanzo beans";
  static description: string = "garbanzo beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
beans.push(BeansGarbanzo);

export class BeansJack extends Beans {
  static singular: string = "jack beans";
  static plural: string = "jack beans";
  static description: string = "jack beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
beans.push(BeansJack);

export class BeansSoy extends Beans {
  static singular: string = "soy beans";
  static plural: string = "soy beans";
  static description: string = "soy beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
beans.push(BeansSoy);

export class Mushroom extends Food {
  static singular: string = "mushroom";
  static plural: string = "mushrooms";
  static description: string = "mushrooms";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super();
    this.categories.push("Protein", "Mushroom");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = weight; // weight defined on the objet itself instead of globally
  }
}

export class MushroomWhite extends Mushroom {
  static singular: string = "white mushroom";
  static plural: string = "white mushrooms";
  static description: string = "white mushrooms";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
mushrooms.push(MushroomWhite);

export class MushroomBrown extends Mushroom {
  static singular: string = "brown mushroom";
  static plural: string = "brown mushrooms";
  static description: string = "brown mushrooms";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
mushrooms.push(MushroomBrown);

export class MushroomPurple extends Mushroom {
  static singular: string = "purple mushroom";
  static plural: string = "purple mushrooms";
  static description: string = "purple mushrooms";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
mushrooms.push(MushroomPurple);

export class MushroomGlowing extends Mushroom {
  static singular: string = "glowing mushroom";
  static plural: string = "glowing mushrooms";
  static description: string = "glowing mushrooms";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
mushrooms.push(MushroomGlowing);

export class Morel extends Mushroom {
  static singular: string = "morel";
  static plural: string = "morels";
  static description: string = "morels";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
mushrooms.push(Morel);

export class MushroomRed extends Mushroom {
  static singular: string = "red mushroom";
  static plural: string = "red mushrooms";
  static description: string = "red mushrooms";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
mushrooms.push(MushroomRed);

export class Apple extends Food {
  static singular: string = "apple";
  static plural: string = "apples";
  static description: string = "apples";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor() {
    super();
    this.categories.push("Fruit", "Apple");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class AppleRed extends Apple {
  static singular: string = "red apple";
  static plural: string = "red apples";
  static description: string = "red apples";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
apples.push(AppleRed);

export class AppleGreen extends Apple {
  static singular: string = "green apple";
  static plural: string = "green apples";
  static description: string = "green apples";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
apples.push(AppleGreen);

export class AppleGolden extends Apple {
  static singular: string = "golden apple";
  static plural: string = "golden apples";
  static description: string = "golden apples";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
apples.push(AppleGolden);

export class Pear extends Food {
  static singular: string = "Pear";
  static plural: string = "Pears";
  static description: string = "pears";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor() {
    super();
    this.categories.push("Fruit", "Pear");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fruits.push(Pear);

export class SapientPear extends Pear {
  static singular: string = "Sapient Pear";
  static plural: string = "Sapient Pears";
  static description: string = "Sapient pears";
  static sources: Source[] = ["Woodcutting"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fruits.push(SapientPear);

export class Grape extends Food {
  static singular: string = "grape";
  static plural: string = "grapes";
  static description: string = "grapes";
  static sources: Source[] = ["Farming"];

  type: "red" | "white" | "purple" | "muscadine";

  constructor() {
    super();
    this.categories.push("Fruit", "Grape");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class GrapeRed extends Grape {
  static singular: string = "red grape";
  static plural: string = "red grapes";
  static description: string = "red grapes";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grapes.push(GrapeRed);

export class GrapeWhite extends Grape {
  static singular: string = "white grape";
  static plural: string = "white grapes";
  static description: string = "white grapes";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grapes.push(GrapeWhite);

export class GrapePurple extends Grape {
  static singular: string = "purple grape";
  static plural: string = "purple grapes";
  static description: string = "purple grapes";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grapes.push(GrapePurple);

export class GrapeMuscadine extends Grape {
  static singular: string = "muscadine grape";
  static plural: string = "muscadine grapes";
  static description: string = "muscadine grapes";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grapes.push(GrapeMuscadine);

export class Avocado extends Food {
  static singular: string = "avocado";
  static plural: string = "avocados";
  static description: string = "avocados";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Fruit", "Avocado");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fruits.push(Avocado);

export class Citrus extends Food {
  static singular: string = "citrus";
  static plural: string = "citrus";
  static description: string = "citrus";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Fruit", "Citrus");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class Orange extends Citrus {
  static singular: string = "orange";
  static plural: string = "oranges";
  static description: string = "oranges";

  constructor() {
    super();
    this.categories.push("Orange");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
citruses.push(Orange);

export class Lemon extends Citrus {
  static singular: string = "lemon";
  static plural: string = "lemons";
  static description: string = "lemons";

  constructor() {
    super();
    this.categories.push("Lemon");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
citruses.push(Lemon);

export class Lime extends Citrus {
  static singular: string = "lime";
  static plural: string = "limes";
  static description: string = "limes";

  constructor() {
    super();
    this.categories.push("Lime");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
citruses.push(Lime);

export class Grapefruit extends Citrus {
  static singular: string = "grapefruit";
  static plural: string = "grapefruits";
  static description: string = "grapefruits";

  constructor() {
    super();
    this.categories.push("Grapefruit");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
citruses.push(Grapefruit);

export class Tangerine extends Citrus {
  static singular: string = "tangerine";
  static plural: string = "tangerines";
  static description: string = "tangerines";

  constructor() {
    super();
    this.categories.push("Tangerine");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
citruses.push(Tangerine);

export class Peanut extends Food {
  static singular: string = "peanut";
  static plural: string = "peanuts";
  static description: string = "peanuts";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Protein", "Nut", "Peanut");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
nuts.push(Peanut);

export class Walnut extends Food {
  static singular: string = "walnut";
  static plural: string = "walnuts";
  static description: string = "walnuts";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Protein", "Nut", "Walnut");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
nuts.push(Walnut);

export class Almond extends Food {
  static singular: string = "almond";
  static plural: string = "almonds";
  static description: string = "almonds";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Protein", "Nut", "Almond");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
nuts.push(Almond);

export class BrazilNut extends Food {
  static singular: string = "brazil nut";
  static plural: string = "brazil nuts";
  static description: string = "brazil nuts";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Protein", "Nut", "Brazil Nut");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
nuts.push(BrazilNut);

export class Chestnut extends Food {
  static singular: string = "chestnut";
  static plural: string = "chestnuts";
  static description: string = "chestnuts";
  static sources: Source[] = ["Questing"];

  constructor() {
    super();
    this.categories.push("Protein", "Nut", "Chestnut");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
nuts.push(Chestnut);

export class Coconut extends Food {
  static singular: string = "coconut";
  static plural: string = "coconuts";
  static description: string = "coconuts";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Fruit", "Coconut");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fruits.push(Coconut);

export class Carrot extends Food {
  static singular: string = "carrot";
  static plural: string = "carrots";
  static description: string = "carrots";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Carrot");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Carrot);

export class Potato extends Food {
  static singular: string = "potato";
  static plural: string = "potatoes";
  static description: string = "potatoes";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Starch", "Potato");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
starchs.push(Potato);

export class Beet extends Food {
  static singular: string = "beet";
  static plural: string = "beets";
  static description: string = "beets";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Beet");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Beet);

export class Eggplant extends Food {
  static singular: string = "eggplant";
  static plural: string = "eggplants";
  static description: string = "eggplants";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Eggplant");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Eggplant);

export class Berry extends Food {
  static singular: string = "berry";
  static plural: string = "berries";
  static description: string = "berries";
  static sources: Source[] = ["Foraging"];
  constructor() {
    super();
    this.categories.push("Fruit", "Berry");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class Blackberry extends Berry {
  static singular: string = "blackberry";
  static plural: string = "blackberries";
  static description: string = "blackberries";

  constructor() {
    super();
    this.categories.push("Blackberry");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
berries.push(Blackberry);

export class Blueberry extends Berry {
  static singular: string = "blueberry";
  static plural: string = "blueberries";
  static description: string = "blueberries";

  constructor() {
    super();
    this.categories.push("Blueberry");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
berries.push(Blueberry);

export class Currant extends Berry {
  static singular: string = "currant";
  static plural: string = "currants";
  static description: string = "currants";
  constructor() {
    super();
    this.categories.push("Currant");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
berries.push(Currant);

export class Raspberry extends Berry {
  static singular: string = "raspberry";
  static plural: string = "raspberries";
  static description: string = "raspberries";

  constructor() {
    super();
    this.categories.push("Raspberry");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
berries.push(Raspberry);

export class Strawberry extends Berry {
  static singular: string = "strawberry";
  static plural: string = "strawberries";
  static description: string = "strawberries";

  constructor() {
    super();
    this.categories.push("Strawberry");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
berries.push(Strawberry);

export class Snozzberry extends Berry {
  static singular: string = "snozzberry";
  static plural: string = "snozzberries";
  static description: string = "snozzberries";

  constructor() {
    super();
    this.categories.push("Snozzberry");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
berries.push(Snozzberry);

export class Watermelon extends Food {
  static singular: string = "watermelon";
  static plural: string = "watermelons";
  static description: string = "watermelons";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Fruit", "Watermelon");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fruits.push(Watermelon);

export class Cherry extends Food {
  static singular: string = "cherry";
  static plural: string = "cherries";
  static description: string = "cherries";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Fruit", "Cherry");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fruits.push(Cherry);

export class Banana extends Food {
  static singular: string = "banana";
  static plural: string = "bananas";
  static description: string = "bananas";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Fruit", "Banana");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fruits.push(Banana);

export class Pineapple extends Food {
  static singular: string = "pineapple";
  static plural: string = "pineapples";
  static description: string = "pineapples";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Fruit", "Pineapple");
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fruits.push(Pineapple);

export class Pepper extends Food {
  static singular: string = "pepper";
  static plural: string = "peppers";
  static description: string = "peppers";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Spice", "Pepper");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class BlackPepper extends Pepper {
  static singular: string = "black pepper";
  static plural: string = "black peppers";
  static description: string = "black peppers";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Black Pepper");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(BlackPepper);

export class WhitePepper extends Pepper {
  static singular: string = "white pepper";
  static plural: string = "white peppers";
  static description: string = "white peppers";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("White Pepper");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(WhitePepper);

export class BellPepper extends Pepper {
  static singular: string = "bell pepper";
  static plural: string = "bell peppers";
  static description: string = "bell peppers";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Bell Pepper");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(BellPepper);

export class JalapenoPepper extends Pepper {
  static singular: string = "jalapeno pepper";
  static plural: string = "jalapeno peppers";
  static description: string = "jalapeno peppers";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Jalapeno Pepper");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(JalapenoPepper);

export class CayennePepper extends Pepper {
  static singular: string = "cayenne pepper";
  static plural: string = "cayenne peppers";
  static description: string = "cayenne peppers";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Cayenne Pepper");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(CayennePepper);

export class ChiliPepper extends Pepper {
  static singular: string = "chili pepper";
  static plural: string = "chili peppers";
  static description: string = "chili peppers";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Chili Pepper");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(ChiliPepper);

export class Coriander extends Food {
  static singular: string = "coriander";
  static plural: string = "corianders";
  static description: string = "corianders";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Coriander");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Coriander);

export class Cilantro extends Food {
  static singular: string = "cilantro";
  static plural: string = "cilantros";
  static description: string = "cilantros";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Cilantro");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Cilantro);

export class Cumin extends Food {
  static singular: string = "cumin";
  static plural: string = "cumin";
  static description: string = "cumin";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Spice", "Cumin");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(Cumin);

export class Dill extends Food {
  static singular: string = "dill";
  static plural: string = "dills";
  static description: string = "dills";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Dill");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Dill);

export class Fennel extends Food {
  static singular: string = "fennel";
  static plural: string = "fennels";
  static description: string = "fennels";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Fennel");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Fennel);

export class Garlic extends Food {
  static singular: string = "garlic";
  static plural: string = "garlic";
  static description: string = "garlic";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Garlic");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Garlic);

export class Ginger extends Food {
  static singular: string = "ginger";
  static plural: string = "gingers";
  static description: string = "gingers";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Ginger");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Ginger);

export class Oregano extends Food {
  static singular: string = "oregano";
  static plural: string = "oregano";
  static description: string = "oregano";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Oregano");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Oregano);

export class Parsley extends Food {
  static singular: string = "parsley";
  static plural: string = "parsley";
  static description: string = "parsley";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Parsley");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Parsley);

export class Rosemary extends Food {
  static singular: string = "rosemary";
  static plural: string = "rosemary";
  static description: string = "rosemary";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Rosemary");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Rosemary);

export class Thyme extends Food {
  static singular: string = "thyme";
  static plural: string = "thyme";
  static description: string = "thyme";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Thyme");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Thyme);

export class Turmeric extends Food {
  static singular: string = "turmeric";
  static plural: string = "turmeric";
  static description: string = "turmeric";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Spice", "Turmeric");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(Turmeric);

export class Chives extends Food {
  static singular: string = "chives";
  static plural: string = "chives";
  static description: string = "chives";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Chives");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Chives);

export class Sage extends Food {
  static singular: string = "sage";
  static plural: string = "sage";
  static description: string = "sage";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Sage");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Sage);

export class Basil extends Food {
  static singular: string = "basil";
  static plural: string = "basil";
  static description: string = "basil";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Herb", "Basil");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
herbs.push(Basil);

export class Tomatoes extends Food {
  static singular: string = "tomatoes";
  static plural: string = "tomatoes";
  static description: string = "tomatoes";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Fruit", "Tomatoes");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
fruits.push(Tomatoes);

export class Lettuce extends Food {
  static singular: string = "lettuce";
  static plural: string = "lettuce";
  static description: string = "lettuce";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Lettuce");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Lettuce);

export class Cabbage extends Food {
  static singular: string = "cabbage";
  static plural: string = "cabbage";
  static description: string = "cabbage";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Cabbage");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Cabbage);

export class Cauliflower extends Food {
  static singular: string = "cauliflower";
  static plural: string = "cauliflower";
  static description: string = "cauliflower";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Cauliflower");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Cauliflower);

export class Broccoli extends Food {
  static singular: string = "broccoli";
  static plural: string = "broccoli";
  static description: string = "broccoli";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Broccoli");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Broccoli);

export class Grubs extends Food {
  static singular: string = "grubs";
  static plural: string = "grubs";
  static description: string = "grubs";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Protein", "Grubs");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
proteins.push(Grubs);

export class Mealworms extends Food {
  static singular: string = "mealworms";
  static plural: string = "mealworms";
  static description: string = "mealworms";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Protein", "Insects", "Mealworm");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(Mealworms);

export class Beetles extends Food {
  static singular: string = "beetles";
  static plural: string = "beetles";
  static description: string = "beetles";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Protein", "Insects", "Beetle");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(Beetles);

export class Ants extends Food {
  static singular: string = "ant";
  static plural: string = "ants";
  static description: string = "ant";
  static sources: Source[] = ["Foraging"];

  //type: "red" | "black" | "fire";
  constructor() {
    super();
    this.categories.push("Protein", "Insects", "Ant");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class RedAnts extends Ants {
  static singular: string = "red ant";
  static plural: string = "red ants";
  static description: string = "red ant";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(RedAnts);

export class BlackAnts extends Ants {
  static singular: string = "black ant";
  static plural: string = "black ants";
  static description: string = "black ant";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(BlackAnts);

export class FireAnts extends Ants {
  static singular: string = "fire ant";
  static plural: string = "fire ants";
  static description: string = "fire ant";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(FireAnts);

export class Ooze extends Food {
  static singular: string = "ooze";
  static plural: string = "oozes";
  static description: string = "ooze";
  static sources: Source[] = ["Foraging", "Questing"];

  type: "gray" | "green" | "superior" | "purple";
  constructor() {
    super();
    this.categories.push("Other", "Ooze");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class GrayOoze extends Ooze {
  static singular: string = "gray ooze";
  static plural: string = "gray oozes";
  static description: string = "gray ooze";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
oozes.push(GrayOoze);

export class GreenOoze extends Ooze {
  static singular: string = "green ooze";
  static plural: string = "green oozes";
  static description: string = "green ooze";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
oozes.push(GreenOoze);

export class SuperiorOoze extends Ooze {
  static singular: string = "superior ooze";
  static plural: string = "superior oozes";
  static description: string = "superior ooze";
  static sources: Source[] = ["Questing"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
oozes.push(SuperiorOoze);

export class PurpleOoze extends Ooze {
  static singular: string = "purple ooze";
  static plural: string = "purple oozes";
  static description: string = "purple ooze";
  static sources: Source[] = ["Questing"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
oozes.push(PurpleOoze);

export class Glowworm extends Food {
  static singular: string = "glowworm";
  static plural: string = "glowworms";
  static description: string = "glowworm";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Protein", "Insects", "Glowworm");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(Glowworm);

export class Venison extends Food {
  static singular: string = "venison";
  static plural: string = "venison";
  static description: string = "venison";
  static sources: Source[] = ["Hunting"];

  constructor() {
    super();
    this.categories.push("Protein", "Meat", "Venison");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
meats.push(Venison);

export class ReindeerVenison extends Venison {}
meats.push(ReindeerVenison);

export class Sprouts extends Food {
  static singular: string = "sprouts";
  static plural: string = "sprouts";
  static description: string = "sprouts";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Vegatable", "Sprout");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Sprouts);

export class MapleSap extends Food {
  static singular: string = "maple sap";
  static plural: string = "maple sap";
  static description: string = "maple sap";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Other", "Maple Sap");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
others.push(MapleSap);

export class Acorns extends Food {
  static singular: string = "acorn";
  static plural: string = "acorns";
  static description: string = "acorn";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Protein", "Nuts", "Acorn");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
nuts.push(Acorns);

export class VanillaBean extends Food {
  static singular: string = "vanilla bean";
  static plural: string = "vanilla beans";
  static description: string = "vanilla bean";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Spice", "Vanilla Bean");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(VanillaBean);

export class Cucumbers extends Food {
  static singular: string = "cucumber";
  static plural: string = "cucumbers";
  static description: string = "cucumber";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Cucumber");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Cucumbers);

export class Onion extends Food {
  static singular: string = "onion";
  static plural: string = "onions";
  static description: string = "onion";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Onion");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class RedOnion extends Onion {
  static singular: string = "red onion";
  static plural: string = "red onions";
  static description: string = "red onion";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
onions.push(RedOnion);

export class WhiteOnion extends Onion {
  static singular: string = "white onion";
  static plural: string = "white onions";
  static description: string = "white onion";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
onions.push(WhiteOnion);

export class GreenOnion extends Onion {
  static singular: string = "green onion";
  static plural: string = "green onions";
  static description: string = "green onion";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
onions.push(GreenOnion);

export class SoySauce extends Food {
  static singular: string = "soy sauce";
  static plural: string = "soy sauce";
  static description: string = "soy sauce";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Spice", "Soy Sauce");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(SoySauce);

export class CocoaBeans extends Food {
  static singular: string = "cocoa bean";
  static plural: string = "cocoa beans";
  static description: string = "cocoa bean";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Spice", "Cocoa Beans");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(CocoaBeans);

export class CoffeeBeans extends Food {
  static singular: string = "coffee bean";
  static plural: string = "coffee beans";
  static description: string = "coffee bean";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Spice", "Coffee Beans");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(CoffeeBeans);

export class TeaLeaves extends Food {
  static singular: string = "tea leaf";
  static plural: string = "tea leaves";
  static description: string = "tea leaf";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.categories.push("Spice", "Tea Leaves");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(TeaLeaves);

export class Wheat extends Food {
  static singular: string = "wheat";
  static plural: string = "wheat";
  static description: string = "wheat";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Grain", "Wheat");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grains.push(Wheat);

export class Oats extends Food {
  static singular: string = "oats";
  static plural: string = "oats";
  static description: string = "oats";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Grain", "Oats");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grains.push(Oats);

export class Barley extends Food {
  static singular: string = "barley";
  static plural: string = "barley";
  static description: string = "barley";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Grain", "Barley");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grains.push(Barley);

export class Curry extends Food {
  static singular: string = "curry";
  static plural: string = "curry";
  static description: string = "curry";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Spice", "Curry");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class CurryRed extends Curry {
  static singular: string = "red curry";
  static plural: string = "red curry";
  static description: string = "red curry";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
curries.push(CurryRed);

export class CurryGreen extends Curry {
  static singular: string = "green curry";
  static plural: string = "green curry";
  static description: string = "green curry";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
curries.push(CurryGreen);

export class CurryYellow extends Curry {
  static singular: string = "yellow curry";
  static plural: string = "yellow curry";
  static description: string = "yellow curry";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
curries.push(CurryYellow);

export class Beets extends Food {
  static singular: string = "beet";
  static plural: string = "beets";
  static description: string = "beet";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Vegetable", "Beets");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
vegetables.push(Beets);

export class Rye extends Food {
  static singular: string = "rye";
  static plural: string = "rye";
  static description: string = "rye";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Grain", "Rye");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grains.push(Rye);

export class Buckwheat extends Food {
  static singular: string = "buckwheat";
  static plural: string = "buckwheat";
  static description: string = "buckwheat";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Grain", "Buckwheat");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
grains.push(Buckwheat);

export class Flour extends Food {
  static singular: string = "flour";
  static plural: string = "flour";
  static description: string = "flour";
  static sources: Source[] = ["Farming"];
  constructor() {
    super();
    this.categories.push("Starch", "Flour");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class RiceFlour extends Flour {
  static singular: string = "rice flour";
  static plural: string = "rice flour";
  static description: string = "rice flour";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
flours.push(RiceFlour);

export class WheatFlour extends Flour {
  static singular: string = "wheat flour";
  static plural: string = "wheat flour";
  static description: string = "wheat flour";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
flours.push(WheatFlour);

export class BarleyFlour extends Flour {
  static singular: string = "barley flour";
  static plural: string = "barley flour";
  static description: string = "barley flour";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
flours.push(BarleyFlour);

export class OatsFlour extends Flour {
  static singular: string = "oats flour";
  static plural: string = "oats flour";
  static description: string = "oats flour";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
flours.push(OatsFlour);

export class RyeFlour extends Flour {
  static singular: string = "rye flour";
  static plural: string = "rye flour";
  static description: string = "rye flour";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
flours.push(RyeFlour);

export class BuckwheatFlour extends Flour {
  static singular: string = "buckwheat flour";
  static plural: string = "buckwheat flour";
  static description: string = "buckwheat flour";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
flours.push(BuckwheatFlour);

export class Honey extends Food {
  static singular: string = "honey";
  static plural: string = "honey";
  static description: string = "honey";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.categories.push("Sweet", "Honey");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sweets.push(Honey);

export class PancakeBatter extends Food {
  static singular: string = "pancake batter";
  static plural: string = "pancake batter";
  static description: string = "pancake batter";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Dough");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
doughs.push(PancakeBatter);

export class Jam extends Food {
  static singular: string = "jam";
  static plural: string = "jams";
  static description: string = "jam";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sweet", "Jam");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sweets.push(Jam);

export class Chocolate extends Food {
  static singular: string = "chocolate";
  static plural: string = "chocolate";
  static description: string = "chocolate";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sweet", "Chocolate");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sweets.push(Chocolate);

export class Omelet extends Food {
  static singular: string = "omelet";
  static plural: string = "omelets";
  static description: string = "omelet";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Protein", "Omelet");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
proteins.push(Omelet);

export class Pickle extends Food {
  static singular: string = "pickle";
  static plural: string = "pickles";
  static description: string = "pickle";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Brined");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
brines.push(Pickle);

export class Pancake extends Food {
  static singular: string = "pancake";
  static plural: string = "pancakes";
  static description: string = "pancake";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Starch");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
starchs.push(Pancake);

export class Granola extends Food {
  static singular: string = "granola";
  static plural: string = "granola";
  static description: string = "granola";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Starch");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
starchs.push(Granola);

export class BreadDough extends Food {
  static singular: string = "bread dough";
  static plural: string = "bread dough";
  static description: string = "bread dough";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Dough");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
doughs.push(BreadDough);

export class Noodles extends Food {
  static singular: string = "noodles";
  static plural: string = "noodles";
  static description: string = "noodles";

  constructor() {
    super();
    this.categories.push("Noodles");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class Tofu extends Food {
  static singular: string = "tofu";
  static plural: string = "tofu";
  static description: string = "tofu";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Protein");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
proteins.push(Tofu);

export class Broth extends Food {
  static singular: string = "broth";
  static plural: string = "broth";
  static description: string = "broth";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Soup", "Broth");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
soups.push(Broth);

export class Tortilla extends Food {
  static singular: string = "tortilla";
  static plural: string = "tortillas";
  static description: string = "tortilla";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Starch", "Tortilla");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
starchs.push(Tortilla);

export class PieFilling extends Food {
  static singular: string = "pie filling";
  static plural: string = "pie fillings";
  static description: string = "pie filling";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sweet");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sweets.push(PieFilling);

export class PizzaDough extends Food {
  static singular: string = "pizza dough";
  static plural: string = "pizza dough";
  static description: string = "pizza dough";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Dough");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
doughs.push(PizzaDough);

export class PastryDough extends Food {
  static singular: string = "pastry dough";
  static plural: string = "pastry dough";
  static description: string = "pastry dough";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Dough");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
doughs.push(PastryDough);

export class IceCream extends Food {
  static singular: string = "ice cream";
  static plural: string = "ice cream";
  static description: string = "ice cream";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sweets");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sweets.push(IceCream);

export class GoatCheese extends Food {
  static singular: string = "goat cheese";
  static plural: string = "goat cheese";
  static description: string = "goat cheese";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Cheese");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
cheeses.push(GoatCheese);

export class Butter extends Food {
  static singular: string = "butter";
  static plural: string = "butter";
  static description: string = "butter";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Dairy");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
dairies.push(Butter);

export class Cream extends Food {
  static singular: string = "cream";
  static plural: string = "cream";
  static description: string = "cream";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Dairy", "Cream");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
dairies.push(Cream);

export class Cheese extends Food {
  static singular: string = "cheese";
  static plural: string = "cheese";
  static description: string = "cheese";

  constructor() {
    super();
    this.categories.push("Cheese");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
cheeses.push(Cheese);

export class Yogurt extends Food {
  static singular: string = "yogurt";
  static plural: string = "yogurt";
  static description: string = "yogurt";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Dairy", "Yogurt");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
dairies.push(Yogurt);

export class Wasabi extends Food {
  static singular: string = "wasabi";
  static plural: string = "wasabi";
  static description: string = "wasabi";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Spice", "Wasabi");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spices.push(Wasabi);

export class Syrup extends Food {
  static singular: string = "syrup";
  static plural: string = "syrup";
  static description: string = "syrup";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sweet");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sweets.push(Syrup);

export class Guacamole extends Food {
  static singular: string = "guacamole";
  static plural: string = "guacamole";
  static description: string = "guacamole";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sauce", "Spread", "Guacamole");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spreads.push(Guacamole);
sauces.push(Guacamole);

export class Salsa extends Food {
  static singular: string = "salsa";
  static plural: string = "salsa";
  static description: string = "salsa";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sauce");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sauces.push(Salsa);

export class PeanutButter extends Food {
  static singular: string = "peanut butter";
  static plural: string = "peanut butter";
  static description: string = "peanut butter";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Spread");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spreads.push(PeanutButter);

export class Jelly extends Food {
  static singular: string = "jelly";
  static plural: string = "jelly";
  static description: string = "jelly";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Spread");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spreads.push(Jelly);

export class Mayonnaise extends Food {
  static singular: string = "mayonnaise";
  static plural: string = "mayonnaise";
  static description: string = "mayonnaise";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Spread");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spreads.push(Mayonnaise);
condiments.push(Mayonnaise);

export class Ketchup extends Food {
  static singular: string = "ketchup";
  static plural: string = "ketchup";
  static description: string = "ketchup";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Condiment");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
condiments.push(Ketchup);

export class PastaEntree extends Food {
  static singular: string = "pasta entree";
  static plural: string = "pasta entree";
  static description: string = "pasta entree";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree", "Pasta");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(PastaEntree);

export class MacNCheese extends Food {
  static singular: string = "mac n cheese";
  static plural: string = "mac n cheese";
  static description: string = "mac n cheese";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree", "Pasta");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(MacNCheese);

export class Carbonara extends Food {
  static singular: string = "carbonara";
  static plural: string = "carbonara";
  static description: string = "carbonara";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree", "Pasta");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(Carbonara);

export class BeefStroganoff extends Food {
  static singular: string = "beef stroganoff";
  static plural: string = "beef stroganoff";
  static description: string = "beef stroganoff";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree", "Pasta");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(BeefStroganoff);

export class Lasagna extends Food {
  static singular: string = "lasagna";
  static plural: string = "lasagna";
  static description: string = "lasagna";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree", "Pasta");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(Lasagna);

export class ClamChowder extends Food {
  static singular: string = "clam chowder";
  static plural: string = "clam chowder";
  static description: string = "clam chowder";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Soup");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
soups.push(ClamChowder);

export class LobsterBisque extends Food {
  static singular: string = "lobster bisque";
  static plural: string = "lobster bisque";
  static description: string = "lobster bisque";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Soup");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
soups.push(LobsterBisque);

export class CornChowder extends Food {
  static singular: string = "corn chowder";
  static plural: string = "corn chowder";
  static description: string = "corn chowder";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Soup");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
soups.push(CornChowder);

export class Chili extends Food {
  static singular: string = "chili";
  static plural: string = "chili";
  static description: string = "chili";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Soup");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
soups.push(Chili);

export class ChickenNoodleSoup extends Food {
  static singular: string = "chicken noodle soup";
  static plural: string = "chicken noodle soup";
  static description: string = "chicken noodle soup";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Soup");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
soups.push(ChickenNoodleSoup);

export class BLT extends Food {
  static singular: string = "blt";
  static plural: string = "blts";
  static description: string = "bacon lettuce tomato sandwich";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sandwich");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sandwiches.push(BLT);

export class Burger extends Food {
  static singular: string = "burger";
  static plural: string = "burgers";
  static description: string = "burger";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sandwich");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sandwiches.push(Burger);

export class Toasties extends Food {
  static singular: string = "toastie";
  static plural: string = "toasties";
  static description: string = "cheese toast sandwhich";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sandwich");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sandwiches.push(Toasties);

export class PBJ extends Food {
  static singular: string = "pbj";
  static plural: string = "pbjs";
  static description: string = "peanut butter and jelly sandwich";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("PBJ");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sandwiches.push(PBJ);

export class LettuceWrap extends Food {
  static singular: string = "lettuce wrap";
  static plural: string = "lettuce wraps";
  static description: string = "lettuce wrap";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sandwich");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sandwiches.push(LettuceWrap);

export class BoiledEgg extends Food {
  static singular: string = "boiled egg";
  static plural: string = "boiled eggs";
  static description: string = "boiled egg";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Protein");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
proteins.push(BoiledEgg);

export class NutsNBerries extends Food {
  static singular: string = "nuts n berries";
  static plural: string = "nuts n berries";
  static description: string = "nuts n berries";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Snack");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
snacks.push(NutsNBerries);

export class Cake extends Food {
  static singular: string = "cake";
  static plural: string = "cakes";
  static description: string = "cake";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sweet");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sweets.push(Cake);

export class Pizza extends Food {
  static singular: string = "pizza";
  static plural: string = "pizzas";
  static description: string = "pizza";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(Pizza);

export class FruitSalad extends Food {
  static singular: string = "fruit salad";
  static plural: string = "fruit salads";
  static description: string = "fruit salad";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(FruitSalad);

export class BananaBread extends Food {
  static singular: string = "banana bread";
  static plural: string = "banana bread";
  static description: string = "banana bread";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Bread");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
breads.push(BananaBread);

export class BakedPotato extends Food {
  static singular: string = "baked potato";
  static plural: string = "baked potatoes";
  static description: string = "baked potato";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(BakedPotato);

export class Jerky extends Food {
  static singular: string = "jerky";
  static plural: string = "jerky";
  static description: string = "jerky";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Snack");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
snacks.push(Jerky);

export class FrenchFries extends Food {
  static singular: string = "french fries";
  static plural: string = "french fries";
  static description: string = "french fries";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(FrenchFries);

export class SausageAndPeppers extends Food {
  static singular: string = "sausage and peppers";
  static plural: string = "sausage and peppers";
  static description: string = "sausage and peppers";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(SausageAndPeppers);

export class Coleslaw extends Food {
  static singular: string = "coleslaw";
  static plural: string = "coleslaw";
  static description: string = "coleslaw";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(Coleslaw);

export class SteakAndPotatoes extends Food {
  static singular: string = "steak and potatoes";
  static plural: string = "steak and potatoes";
  static description: string = "steak and potatoes";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(SteakAndPotatoes);

export class Ratatouille extends Food {
  static singular: string = "ratatouille";
  static plural: string = "ratatouille";
  static description: string = "ratatouille";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(Ratatouille);

export class Gumbo extends Food {
  static singular: string = "gumbo";
  static plural: string = "gumbo";
  static description: string = "gumbo";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(Gumbo);

export class RoastedVegetables extends Food {
  static singular: string = "roasted vegetables";
  static plural: string = "roasted vegetables";
  static description: string = "roasted vegetables";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(RoastedVegetables);

export class Bruschetta extends Food {
  static singular: string = "bruschetta";
  static plural: string = "bruschetta";
  static description: string = "bruschetta";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(Bruschetta);

export class StuffedShrooms extends Food {
  static singular: string = "stuffed shrooms";
  static plural: string = "stuffed shrooms";
  static description: string = "stuffed shrooms";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(StuffedShrooms);

export class EggRolls extends Food {
  static singular: string = "egg roll";
  static plural: string = "egg rolls";
  static description: string = "egg rolls";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(EggRolls);

export class EggSalad extends Food {
  static singular: string = "egg salad";
  static plural: string = "egg salads";
  static description: string = "egg salads";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Spread");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
spreads.push(EggSalad);

export class StirFry extends Food {
  static singular: string = "stir fry";
  static plural: string = "stir fries";
  static description: string = "stir fries";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(StirFry);

export class SteakAndEggs extends Food {
  static singular: string = "steak and eggs";
  static plural: string = "steak and eggs";
  static description: string = "steak and eggs";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(SteakAndEggs);

export class HamAndEggs extends Food {
  static singular: string = "ham and eggs";
  static plural: string = "ham and eggs";
  static description: string = "ham and eggs";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(HamAndEggs);

export class CabbageRolls extends Food {
  static singular: string = "cabbage rolls";
  static plural: string = "cabbage rolls";
  static description: string = "cabbage rolls";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(CabbageRolls);

export class Pho extends Food {
  static singular: string = "pho";
  static plural: string = "pho";
  static description: string = "pho";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Soup");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
soups.push(Pho);

export class CornBread extends Food {
  static singular: string = "corn bread";
  static plural: string = "corn bread";
  static description: string = "corn bread";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Bread");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
breads.push(CornBread);

export class Oatmeal extends Food {
  static singular: string = "oatmeal";
  static plural: string = "oatmeal";
  static description: string = "oatmeal";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Soup");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
soups.push(Oatmeal);

export class FruitSnack extends Food {
  static singular: string = "fruit snack";
  static plural: string = "fruit snacks";
  static description: string = "fruit snacks";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Snack");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
snacks.push(FruitSnack);

export class Meatloaf extends Food {
  static singular: string = "meatloaf";
  static plural: string = "meatloaf";
  static description: string = "meatloaf";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(Meatloaf);

export class FishAndFungi extends Food {
  static singular: string = "fish and fungi";
  static plural: string = "fish and fungi";
  static description: string = "fish and fungi";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(FishAndFungi);

export class AvocadoToast extends Food {
  static singular: string = "avocado toast";
  static plural: string = "avocado toast";
  static description: string = "avocado toast";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sandwich");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sandwiches.push(AvocadoToast);

export class Waffles extends Food {
  static singular: string = "waffles";
  static plural: string = "waffles";
  static description: string = "waffles";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(Waffles);

export class YogurtParfait extends Food {
  static singular: string = "yogurt parfait";
  static plural: string = "yogurt parfait";
  static description: string = "yogurt parfait";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Yogurt Parfait");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}

export class Pie extends Food {
  static singular: string = "pie";
  static plural: string = "pies";
  static description: string = "pies";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Sweet");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sweets.push(Pie);

export class Quesadilla extends Food {
  static singular: string = "quesadilla";
  static plural: string = "quesadillas";
  static description: string = "quesadillas";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(Quesadilla);

export class GrilledProtein extends Food {
  static singular: string = "grilled protein";
  static plural: string = "grilled protein";
  static description: string = "grilled protein";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Protein");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
proteins.push(GrilledProtein);

export class FriedProtein extends Food {
  static singular: string = "fried protein";
  static plural: string = "fried protein";
  static description: string = "fried protein";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Protein");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
proteins.push(FriedProtein);

export class ChickenPotPie extends Food {
  static singular: string = "chicken pot pie";
  static plural: string = "chicken pot pies";
  static description: string = "chicken pot pies";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(ChickenPotPie);

export class RiceEntree extends Food {
  static singular: string = "rice entree";
  static plural: string = "rice entrees";
  static description: string = "rice entrees";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(RiceEntree);

export class FriedRice extends Food {
  static singular: string = "fried rice";
  static plural: string = "fried rice";
  static description: string = "fried rice";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(FriedRice);

export class Caviar extends Food {
  static singular: string = "caviar";
  static plural: string = "caviar";
  static description: string = "caviar";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("seafood");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
seafoods.push(Caviar);

export class SteamedDumplings extends Food {
  static singular: string = "steamed dumplings";
  static plural: string = "steamed dumplings";
  static description: string = "steamed dumplings";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
export const steamedDumplings_prototype: SteamedDumplings =
  new SteamedDumplings();
sides.push(SteamedDumplings);

export class FriedDumplings extends Food {
  static singular: string = "fried dumplings";
  static plural: string = "fried dumplings";
  static description: string = "fried dumplings";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Side");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sides.push(FriedDumplings);

export class FunGuyFungiFeast extends Food {
  static singular: string = "fun guy fungi feast";
  static plural: string = "fun guy fungi feasts";
  static description: string = "fun guy fungi feasts";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.categories.push("Entree");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(FunGuyFungiFeast);

export class InsectPuree extends Food {
  static singular: string = "insect puree";
  static plural: string = "insect puree";
  static description: string = "insect puree";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Insect");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(InsectPuree);

export class RoastedInsects extends Food {
  static singular: string = "roasted insects";
  static plural: string = "roasted insects";
  static description: string = "roasted insects";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.categories.push("Insect");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(RoastedInsects);

export class SeasonedInsects extends Food {
  static singular: string = "seasoned insects";
  static plural: string = "seasoned insects";
  static description: string = "seasoned insects";
  static sources: Source[] = ["Cooking"];
  	
	constructor() {
    super();
    this.categories.push("Insect");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(SeasonedInsects);

export class BugsNSlime extends Food {
  static singular: string = "bugs n' slime";
  static plural: string = "bugs n' slime";
  static description: string = "bugs n' slime";
  static sources: Source[] = ["Cooking"];
	
	constructor() {
    super();
    this.categories.push("Entree", "Other");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(BugsNSlime);
others.push(BugsNSlime);

export class BugsNOoze extends Food {
  static singular: string = "bugs n' ooze";
  static plural: string = "bugs n' ooze";
  static description: string = "bugs n' ooze";
  static sources: Source[] = ["Cooking"];

	constructor() {
    super();
    this.categories.push("Entree", "Others");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
entrees.push(BugsNOoze);
others.push(BugsNOoze);

export class MossWrap extends Food {
  static singular: string = "moss wrap";
  static plural: string = "moss wrap";
  static description: string = "moss wrap";
  static sources: Source[] = ["Cooking"];
	
	constructor() {
    super();
    this.categories.push("Sandwich");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
sandwiches.push(MossWrap);

export class AlgaePaste extends Food {
  static singular: string = "algae paste";
  static plural: string = "algae paste";
  static description: string = "algae paste";
  static sources: Source[] = ["Cooking"];
	
	constructor() {
    super();
    this.categories.push("Other");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
others.push(AlgaePaste);

export class CaveCritterFritters extends Food {
  static singular: string = "cave critter fritters";
  static plural: string = "cave critter fritters";
  static description: string = "cave critter fritters";
  static sources: Source[] = ["Cooking"];
	
	constructor() {
    super();
    this.categories.push("Insects");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
insects.push(CaveCritterFritters);

export class MuddyMossyMoldyMess extends Food {
  static singular: string = "muddy, mossy, moldy mess";
  static plural: string = "muddy, mossy, moldy mess";
  static description: string = "muddy, mossy, moldy mess";
  static sources: Source[] = ["Cooking"];
	
	constructor() {
    super();
    this.categories.push("Others");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
others.push(MuddyMossyMoldyMess);

export class OoeyGooeyFreshNFruity extends Food {
  static singular: string = "ooey gooey fresh n fruity";
  static plural: string = "ooey gooey fresh n fruity";
  static description: string = "ooey gooey fresh n fruity";
  static sources: Source[] = ["Cooking"];
  	
	constructor() {
    super();
    this.categories.push("Others");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
others.push(OoeyGooeyFreshNFruity);

export class ScoopOGloop extends Food {
  static singular: string = "Scoop O'Gloop";
  static plural: string = "Scoop O'Gloop";
  static description: string = "Scoop O'Gloop";
	
	constructor() {
    super();
    this.categories.push("Others");
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.weight = 1;
  }
}
others.push(ScoopOGloop);

// *****************************
// Must come at end of file
// Combine subcategory arrays into category arrays
// Combine all categories into food
// Ensure food array only contains unqiue items
// *****************************

fruits.push(...berries, ...apples, ...grapes, ...citruses);
vegetables.push(...onions);
dairies.push(...eggs);
seafoods.push(...fishes, ...crustaceans, ...sushis, ...seaweeds);
proteins.push(...fishes, ...eggs, ...fungi, ...meats, ...nuts, ...beans, ...mushrooms);
spices.push(...curries);
others.push(...oozes, ...insects)
foods.push(
  ...vegetables,
  ...grains,
  ...starchs,
  ...spices,
  ...herbs,
  ...others,
  ...insects,
  ...sweets,
  ...doughs,
  ...brines,
  ...soups,
  ...cheeses,
  ...sauces,
  ...sides,
  ...entrees,
  ...spreads,
  ...condiments,
  ...sandwiches,
  ...snacks,
  ...breads,
  ...fruits,
  ...seafoods,
  ...proteins,
  ...flours,

);
//make sure foods only contains unqiue items
foods = foods.filter((item, index, self) => self.indexOf(item) === index);
console.log(foods.length);
