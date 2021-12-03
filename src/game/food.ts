// ============================================================================
// Language: TypeScript
// Path: ts\game\food.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Consumable, dairies } from './consumables';
import { GameClass, Source } from "./types";

export type FoodType = GameClass & {food:null} & {
  mustBeDry: boolean;
  canBeCooked: boolean;
  edible: boolean;
}

export class Food extends Consumable {
  static readonly food: null;
  static singular = "food";
  static plural = "food";
  static description = "Food is something edible";

  static mustBeDry: boolean = false; // does the food need to be dried?
  static canBeCooked: boolean = true; // can the food be cooked?
  static edible: boolean = true; // can the food be eaten?
  
  hunger: number = 0; // positive number makes eater more full, less hungry
  thirst: number = 0; // positive number makes eater less thirsty

  dryLevel: number = 0; // how dry is the food? (0-100) 0 is wet, 100 is dry
  cookedLevel: number = 0; // how much the food has been cooked see getCookedLevel()

  getTypes(): FoodType[] {
    let types: FoodType[] = [];
    for (
      let prototype = Object.getPrototypeOf(this);
      prototype !== Object.prototype;
      prototype = Object.getPrototypeOf(prototype)
    )
      types.push(prototype.constructor);
    return types;
  }

  getType(): FoodType {
    return Object.getPrototypeOf(this).constructor;
  }

  getInfo(qty: number): string {
    switch (qty) {
      case 0:
        return `No ${this.getType().plural}`;
      case 1:
        var msg = this.getType().canBeCooked ? `${this.getCookedLevel()} ` : "";
        msg += this.getType().mustBeDry ? `${this.getDryLevel()} ` : "";
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

  getCookedLevel() : string{
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
    if (!this.getType().edible) {
      console.log("This is not edible, try making something with it.");
      return;
    }
    
    console.log(`You eat the ${this.getType().singular}.`);
    this.consume();
    console.log(`Your hunger is satified by ${this.hunger}.`);
    console.log(`Your thirst is satified by ${this.thirst}.`);
    console.log(`You gain ${this.hp} health.`);
  }

  getDryLevel() : string {
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

export class CompoundFood extends Food {
  //a compound food can have many varients: it is generally what is made from a cooking recipe
  static readonly compoundfood:null;
  static singular = "compound food";
  static plural = "compound food";
  static description = "compound food";
  static sources: Source[] = ["Cooking"];
}
export type CompoundFoodType = FoodType & { compoundfood:null };

export class Protein extends Food {
  static readonly protein: null;
  static singular = "protein";
  static plural = "proteins";
  static description = "Proteins give long lasting energy";
}
export type ProteinType = FoodType & { protein: null };

export class Seafood extends Protein {
  static readonly seafood: null;
  static singular = "seafood";
  static plural = "seafood";
  static description = "Seafood is any food that is found in water";
}
export type SeafoodType = ProteinType & { seafood: null };

export class Fish extends Seafood {
  static readonly food: null;
  static singular = "fish";
  static plural = "fish";
  static description = "Fishes live in water";
  static sources: Source[] = ["Fishing"];
}
export type FishType = SeafoodType & { fish: null };

export class Salmon extends Fish {
  static singular = "salmon";
  static plural = "salmon";
  static description = "salmon are fish";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
fishes.push(Salmon);

export class Trout extends Fish {
  static singular = "trout";
  static plural = "trout";
  static description = "trout are fish";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
fishes.push(Trout);

export class RainbowTrout extends Trout {}
fishes.push(RainbowTrout);

export class Pike extends Fish {
  static singular = "pike";
  static plural = "pike";
  static description = "pike are fish";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
fishes.push(Pike);

export class Carp extends Fish {
  static singular = "carp";
  static plural = "carp";
  static description = "carp are fish";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
fishes.push(Carp);

export class Crustacean extends Seafood {
  static readonly food: null;
  static singular = "crustacean";
  static plural = "crustaceans";
  static description = "Crustaceans hard a hard shell and live in water";
  static sources: Source[] = ["Fishing"];
}
export type CrustaceanType = SeafoodType & { crustacean: null };

export class Crayfish extends Crustacean {
  static singular = "crayfish";
  static plural = "crayfish";
  static description =
    "Crayfish are small crustaceans found in freshwater";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
crustaceans.push(Crayfish);

export class Catfish extends Fish {
  static singular = "catfish";
  static plural = "catfish";
  static description = "Whiskered bottom feeders";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
fishes.push(Catfish);

export class Lobster extends Crustacean {
  static singular = "lobster";
  static plural = "lobster";
  static description =
    "Lobsters are large crustaceans found in the ocean";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
crustaceans.push(Lobster);

export class ClamMeat extends Seafood {
  static singular = "clam meat";
  static plural = "clam meat";
  static description = "The fleshy bits from inside a clam";
  static sources: Source[] = ["Fishing", "Foraging"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
seafoods.push(ClamMeat);

export class Shrimp extends Crustacean {
  static singular = "shrimp";
  static plural = "shrimp";
  static description =
    "Shrimp are small crustaceans found in the ocean";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
crustaceans.push(Shrimp);

export class SharkMeat extends Fish {
  static singular = "shark meat";
  static plural = "shark meat";
  static description = "shark meat";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
fishes.push(SharkMeat);

export class Meat extends Protein {
  static readonly food: null;
  static singular = "meat";
  static plural = "meat";
  static description = "Meat is the muscles of an animal";
}
export type MeatType = ProteinType & { meat: null };

export class Beef extends Meat {
  static singular = "beef";
  static plural = "beef";
  static description = "Meat from a cow";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
meats.push(Beef);

export class Pork extends Meat {
  static singular = "pork";
  static plural = "pork";
  static description = "Meat from a pig";
  static sources: Source[] = ["Farming", "Hunting"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
meats.push(Pork);

export class PigSkin extends Protein {
  static singular = "pig skin";
  static plural = "pig skin";
  static description = "The skin from a pig";
  static sources: Source[] = ["Farming", "Hunting"];
  static mustBeDry: boolean = true;

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
proteins.push(PigSkin);

export class PigFeet extends Meat {
  static singular = "pig's foot";
  static plural = "pig's feet";
  static description = "The feet from a pig";
  static sources: Source[] = ["Farming", "Hunting"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
meats.push(PigFeet);

export class Sugar extends Food {
  static singular = "sugar";
  static plural = "sugar";
  static description = "Sugar is a sweet, white crystalline substance";
  static sources: Source[] = ["Milling"];

  edible = false;
}
foods.push(Sugar);

export class Seaweed extends Seafood {
  static readonly seaweed:null;
  static singular = "seaweed";
  static plural = "seaweed";
  static description = "Seaweed is a plant that grows in the ocean";
  static sources: Source[] = ["Fishing", "Foraging"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
export type SeaweedType = FoodType & {seaweed:null};

export class SeaweedRed extends Seaweed {
  static singular = "red seaweed";
  static plural = "red seaweed";
  static description = "Red seaweed is a plant that grows in the ocean";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
seaweeds.push(SeaweedRed);

export class SeaweedGreen extends Seaweed {
  static singular = "green seaweed";
  static plural = "green seaweed";
  static description =
    "Green seaweed is a plant that grows in the ocean";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
seaweeds.push(SeaweedGreen);

export class SeaweedBrown extends Seaweed {
  static singular = "brown seaweed";
  static plural = "brown seaweed";
  static description =
    "Brown seaweed is a plant that grows in the ocean";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
seaweeds.push(SeaweedBrown);

export class Grain extends Food {
  static readonly grain: null;
  static singular = "grain";
  static plural = "grain";
  static description = "Grain is ground in a mill and can be used ot make flour";
  static sources: Source[] = ["Milling"];
  edible = false;
}
export type GrainType = FoodType & { grain: null };

export class Rice extends Food {
  static singular = "grain of rice";
  static plural = "rice";
  static description = "rice";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(Rice);

export class Riceflour extends Grain {
  static singular = "rice flour";
  static plural = "rice flour";
  static description = "ground rice";

  constructor() {
    super();
    this.mass = 1;
  }
}
grains.push(Riceflour);

export class Vegetable extends Food {
  static readonly vegetable: null;
  static singular = "vegetable";
  static plural = "vegetables";
  static description = "Vegetables are plants that grow in the soil";
  static sources: Source[] = ["Farming"];
}
export type VegetableType = FoodType & { vegetable: null };

export class CornOnTheCob extends Vegetable {
  static singular = "corn on the cob";
  static plural = "corn on the cob";
  static description = "corn still on the cob";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(CornOnTheCob);

export class Corn extends Vegetable {
  static singular = "kernel of corn";
  static plural = "corn";
  static description = "corn";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(Corn);

export class Cornmeal extends Grain {
  static singular = "cornmeal";
  static plural = "cornmeal";
  static description = "ground corn ready for baking";
  static sources: Source[] = ["Milling"];
  edible = false;
}
grains.push(Cornmeal);

export class Asparagus extends Vegetable {
  static singular = "asparagus";
  static plural = "asparagus";
  static description = "asparagus";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Asparagus);

export class Beans extends Food {
  static readonly beans:null;
  static singular = "bean";
  static plural = "beans";
  static description = "beans";
  static sources: Source[] = ["Farming"];
}
export type BeansType = FoodType & {beans:null};

export class BeansKidney extends Beans {
  static singular = "kidney beans";
  static plural = "kidney beans";
  static description = "kidney beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
beans.push(BeansKidney);

export class BeansPinto extends Beans {
  static singular = "pinto beans";
  static plural = "pinto beans";
  static description = "pinto beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
beans.push(BeansPinto);

export class BeansBlack extends Beans {
  static singular = "black beans";
  static plural = "black beans";
  static description = "black beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
beans.push(BeansBlack);

export class BeansGreen extends Beans {
  static singular = "green beans";
  static plural = "green beans";
  static description = "green beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
beans.push(BeansGreen);

export class BeansLima extends Beans {
  static singular = "lima beans";
  static plural = "lima beans";
  static description = "lima beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
beans.push(BeansLima);

export class BeansMung extends Beans {
  static singular = "mung beans";
  static plural = "mung beans";
  static description = "mung beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
beans.push(BeansMung);

export class BeansGarbanzo extends Beans {
  static singular = "garbanzo beans";
  static plural = "garbanzo beans";
  static description = "garbanzo beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
beans.push(BeansGarbanzo);

export class BeansJack extends Beans {
  static singular = "jack beans";
  static plural = "jack beans";
  static description = "jack beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
beans.push(BeansJack);

export class BeansSoy extends Beans {
  static singular = "soy beans";
  static plural = "soy beans";
  static description = "soy beans";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
beans.push(BeansSoy);

export class Mushroom extends Protein {
  static readonly mushroom:null;
  static singular = "mushroom";
  static plural = "mushrooms";
  static description = "mushrooms";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super();
    this.mass = weight; // weight defined on the objet itself instead of globally
  }
}
export type MushroomType = FoodType & {mushroom:null};

export class MushroomWhite extends Mushroom {
  static singular = "white mushroom";
  static plural = "white mushrooms";
  static description = "white mushrooms";
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
  static singular = "brown mushroom";
  static plural = "brown mushrooms";
  static description = "brown mushrooms";
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
  static singular = "purple mushroom";
  static plural = "purple mushrooms";
  static description = "purple mushrooms";
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
  static singular = "glowing mushroom";
  static plural = "glowing mushrooms";
  static description = "glowing mushrooms";
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
  static singular = "morel";
  static plural = "morels";
  static description = "morels";
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
  static singular = "red mushroom";
  static plural = "red mushrooms";
  static description = "red mushrooms";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
mushrooms.push(MushroomRed);

export class Fruit extends Food {
  static readonly fruit:null;
  static singular = "fruit";
  static plural = "fruits";
  static description = "fruits";
  static sources: Source[] = ["Foraging", "Farming"];

  constructor(weight: number) {
    super();
    this.mass = weight; // weight defined on the objet itself instead of globally
  }
}
export type FruitType = FoodType & {fruit:null};

export class Apple extends Fruit {
  static readonly apple:null;
  static singular = "apple";
  static plural = "apples";
  static description = "apples";
  static sources: Source[] = ["Foraging", "Farming"];
}
export type AppleType = FoodType & {apple:null};

export class AppleRed extends Apple {
  static singular = "red apple";
  static plural = "red apples";
  static description = "red apples";

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
apples.push(AppleRed);

export class AppleGreen extends Apple {
  static singular = "green apple";
  static plural = "green apples";
  static description = "green apples";

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
apples.push(AppleGreen);

export class AppleGolden extends Apple {
  static singular = "golden apple";
  static plural = "golden apples";
  static description = "golden apples";

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
apples.push(AppleGolden);

export class Pear extends Fruit {
  static singular = "Pear";
  static plural = "Pears";
  static description = "pears";

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
fruits.push(Pear);

export class SapientPear extends Pear {
  static singular = "Sapient Pear";
  static plural = "Sapient Pears";
  static description = "Sapient pears";
  static sources: Source[] = ["Woodcutting"];

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
fruits.push(SapientPear);

export class Grape extends Fruit {
  static readonly grape:null;
  static singular = "grape";
  static plural = "grapes";
  static description = "grapes";
  static sources: Source[] = ["Farming"];

  constructor() {
    super(.007); // 7 grams
  }
}
export type GrapeType = FoodType & {grape:null};

export class GrapeRed extends Grape {
  static singular = "red grape";
  static plural = "red grapes";
  static description = "red grapes";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
grapes.push(GrapeRed);

export class GrapeWhite extends Grape {
  static singular = "white grape";
  static plural = "white grapes";
  static description = "white grapes";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
grapes.push(GrapeWhite);

export class GrapePurple extends Grape {
  static singular = "purple grape";
  static plural = "purple grapes";
  static description = "purple grapes";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
grapes.push(GrapePurple);

export class GrapeMuscadine extends Grape {
  static singular = "muscadine grape";
  static plural = "muscadine grapes";
  static description = "muscadine grapes";

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
grapes.push(GrapeMuscadine);

export class Avocado extends Fruit {
  static singular = "avocado";
  static plural = "avocados";
  static description = "avocados";
  static sources: Source[] = ["Farming"];
  
  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
fruits.push(Avocado);

export class Citrus extends Fruit {
  static readonly citrus:null;
  static singular = "citrus";
  static plural = "citrus";
  static description = "citrus";
  static sources: Source[] = ["Farming"];
}
export type CitrusType = FoodType & {citrus:null};

export class Orange extends Citrus {
  static singular = "orange";
  static plural = "oranges";
  static description = "oranges";
  
  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
citruses.push(Orange);

export class Lemon extends Citrus {
  static singular = "lemon";
  static plural = "lemons";
  static description = "lemons";

  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
citruses.push(Lemon);

export class Lime extends Citrus {
  static singular = "lime";
  static plural = "limes";
  static description = "limes";
  
  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
citruses.push(Lime);

export class Grapefruit extends Citrus {
  static singular = "grapefruit";
  static plural = "grapefruits";
  static description = "grapefruits";
  
  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
citruses.push(Grapefruit);

export class Tangerine extends Citrus {
  static singular = "tangerine";
  static plural = "tangerines";
  static description = "tangerines";
  
  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
citruses.push(Tangerine);

export class Nut extends Protein {
  static readonly nut:null;
  static singular = "nut";
  static plural = "nuts";
  static description = "nuts";
  static sources: Source[] = ["Farming", "Foraging"];
}
export type NutType = FoodType & {nut:null};

export class Peanut extends Nut {
  static singular = "peanut";
  static plural = "peanuts";
  static description = "peanuts";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
nuts.push(Peanut);

export class Walnut extends Nut {
  static singular = "walnut";
  static plural = "walnuts";
  static description = "walnuts";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
nuts.push(Walnut);

export class Almond extends Nut {
  static singular = "almond";
  static plural = "almonds";
  static description = "almonds";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
nuts.push(Almond);

export class BrazilNut extends Nut {
  static singular = "brazil nut";
  static plural = "brazil nuts";
  static description = "brazil nuts";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
nuts.push(BrazilNut);

export class Chestnut extends Nut {
  static singular = "chestnut";
  static plural = "chestnuts";
  static description = "chestnuts";
  static sources: Source[] = ["Questing"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
nuts.push(Chestnut);

export class Coconut extends Fruit {
  static singular = "coconut";
  static plural = "coconuts";
  static description = "coconuts";
  static sources: Source[] = ["Foraging"];
  
  constructor(weight: number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
fruits.push(Coconut);

export class Carrot extends Vegetable {
  static singular = "carrot";
  static plural = "carrots";
  static description = "carrots";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Carrot);

export class Potato extends Food {
  static singular = "potato";
  static plural = "potatoes";
  static description = "potatoes";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(Potato);

export class Beet extends Vegetable {
  static singular = "beet";
  static plural = "beets";
  static description = "beets";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Beet);

export class Eggplant extends Vegetable {
  static singular = "eggplant";
  static plural = "eggplants";
  static description = "eggplants";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Eggplant);

export class Berry extends Fruit {
  static singular = "berry";
  static plural = "berries";
  static description = "berries";
  static sources: Source[] = ["Foraging"];
}
export type BerryType = FruitType & {berry:null};

export class Blackberry extends Berry {
  static singular = "blackberry";
  static plural = "blackberries";
  static description = "blackberries";
  
  constructor() {
    super(0.007); // 7 grams
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
berries.push(Blackberry);

export class Blueberry extends Berry {
  static singular = "blueberry";
  static plural = "blueberries";
  static description = "blueberries";
  
  constructor() {
    super(0.0075); // 7.5 grams
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
berries.push(Blueberry);

export class Currant extends Berry {
  static singular = "currant";
  static plural = "currants";
  static description = "currants";
  constructor() {
    super(.001); // 1 gram
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
berries.push(Currant);

export class Raspberry extends Berry {
  static singular = "raspberry";
  static plural = "raspberries";
  static description = "raspberries";
  
  constructor() {
    super(0.005); // 5 grams
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
berries.push(Raspberry);

export class Strawberry extends Berry {
  static singular = "strawberry";
  static plural = "strawberries";
  static description = "strawberries";

  constructor() {
    super(0.015); // 15 grams
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
berries.push(Strawberry);

export class Snozzberry extends Berry {
  static singular = "snozzberry";
  static plural = "snozzberries";
  static description = "snozzberries";

  constructor() {
    super(.007); // 7 grams
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
berries.push(Snozzberry);

export class Watermelon extends Fruit {
  static singular = "watermelon";
  static plural = "watermelons";
  static description = "watermelons";
  static sources: Source[] = ["Farming"];
  
  constructor(weight : number) {
    super(weight);
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
fruits.push(Watermelon);

export class Cherry extends Fruit {
  static singular = "cherry";
  static plural = "cherries";
  static description = "cherries";
  static sources: Source[] = ["Foraging"];
  
  constructor() {
    super(0.0115); // 11.5 grams
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
  }
}
fruits.push(Cherry);

export class Banana extends Fruit {
  static singular = "banana";
  static plural = "bananas";
  static description = "bananas";

  constructor() {
    super(.125); // 125 grams
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
fruits.push(Banana);

export class Pineapple extends Fruit {
  static singular = "pineapple";
  static plural = "pineapples";
  static description = "pineapples";
  static sources: Source[] = ["Farming"];

  constructor() {
    super(1); // 1 kg
    this.hunger = 10;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
fruits.push(Pineapple);

export class Spice extends Food {
  static readonly spice:null;
  static singular = "spice";
  static plural = "spices";
  static description = "spices";
  static sources: Source[] = ["Trading"];
  static edible = false;
  static mustBeDry = true;
}
export type SpiceType = FoodType & {spice:null};

export class Pepper extends Spice {
  static readonly pepper:null;
  static singular = "pepper";
  static plural = "peppers";
  static description = "peppers";
  static sources: Source[] = ["Trading"];
}
export type PepperType = FoodType & {pepper:null}

export class BlackPepper extends Pepper {
  static singular = "black pepper";
  static plural = "black peppers";
  static description = "black peppers";
}
spices.push(BlackPepper);

export class WhitePepper extends Pepper {
  static singular = "white pepper";
  static plural = "white peppers";
  static description = "white peppers";
}
spices.push(WhitePepper);

export class BellPepper extends Pepper {
  static singular = "bell pepper";
  static plural = "bell peppers";
  static description = "bell peppers";
  static edible = true;
  static mustBeDry = false;

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(BellPepper);

export class JalapenoPepper extends Pepper {
  static singular = "jalapeno pepper";
  static plural = "jalapeno peppers";
  static description = "jalapeno peppers";
  static edible = true;
  static mustBeDry = false;

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(JalapenoPepper);

export class CayennePepper extends Pepper {
  static singular = "cayenne pepper";
  static plural = "cayenne peppers";
  static description = "cayenne peppers";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(CayennePepper);

export class ChiliPepper extends Pepper {
  static singular = "chili pepper";
  static plural = "chili peppers";
  static description = "chili peppers";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(ChiliPepper);

export class Coriander extends Spice {
  static singular = "coriander";
  static plural = "corianders";
  static description = "corianders";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(Coriander);

export class Cilantro extends Spice {
  static singular = "cilantro";
  static plural = "cilantros";
  static description = "cilantros";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(Cilantro);

export class Cumin extends Spice {
  static singular = "cumin";
  static plural = "cumin";
  static description = "cumin";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(Cumin);

export class Dill extends Spice {
  static singular = "dill";
  static plural = "dills";
  static description = "dills";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(Dill);

export class Fennel extends Spice {
  static singular = "fennel";
  static plural = "fennels";
  static description = "fennels";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(Fennel);

export class Garlic extends Vegetable {
  static singular = "garlic";
  static plural = "garlic";
  static description = "garlic";
  static sources: Source[] = ["Trading", "Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Garlic);

export class Ginger extends Spice {
  static singular = "ginger";
  static plural = "gingers";
  static description = "gingers";
  static mustBeDry = false;
  static edible = true;

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(Ginger);

export class Herb extends Food {
  static readonly herb:null;
  static singular = "herb";
  static plural = "herbs";
  static description = "herbs";
  static sources: Source[] = ["Herbology"];
  static edible = false;
}
export type HerbType = FoodType & {herb:null};

export class Oregano extends Herb {
  static singular = "oregano";
  static plural = "oregano";
  static description = "oregano";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
herbs.push(Oregano);

export class Parsley extends Herb {
  static singular = "parsley";
  static plural = "parsley";
  static description = "parsley";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
herbs.push(Parsley);

export class Rosemary extends Herb {
  static singular = "rosemary";
  static plural = "rosemary";
  static description = "rosemary";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
herbs.push(Rosemary);

export class Thyme extends Herb {
  static singular = "thyme";
  static plural = "thyme";
  static description = "thyme";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
herbs.push(Thyme);

export class Turmeric extends Spice {
  static singular = "turmeric";
  static plural = "turmeric";
  static description = "turmeric";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(Turmeric);

export class Chives extends Herb {
  static singular = "chives";
  static plural = "chives";
  static description = "chives";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
herbs.push(Chives);

export class Sage extends Herb {
  static singular = "sage";
  static plural = "sage";
  static description = "sage";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
herbs.push(Sage);

export class Basil extends Herb {
  static singular = "basil";
  static plural = "basil";
  static description = "basil";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
herbs.push(Basil);

export class Tomatoes extends Vegetable {
  static singular = "tomatoes";
  static plural = "tomatoes";
  static description = "tomatoes";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Tomatoes);

export class Lettuce extends Vegetable {
  static singular = "lettuce";
  static plural = "lettuce";
  static description = "lettuce";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Lettuce);

export class Cabbage extends Vegetable {
  static singular = "cabbage";
  static plural = "cabbage";
  static description = "cabbage";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}

export class Cauliflower extends Vegetable {
  static singular = "cauliflower";
  static plural = "cauliflower";
  static description = "cauliflower";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Cauliflower);

export class Broccoli extends Vegetable {
  static singular = "broccoli";
  static plural = "broccoli";
  static description = "broccoli";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Broccoli);

export class Insect extends Food {
  static readonly insect:null;
  static singular = "insect";
  static plural = "insects";
  static description = "insects";
  static sources: Source[] = ["Foraging"];
}
export type InsectType = FoodType & {insect:null};

export class Grubs extends Insect {
  static singular = "grubs";
  static plural = "grubs";
  static description = "grubs";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
insects.push(Grubs);

export class Mealworms extends Insect {
  static singular = "mealworms";
  static plural = "mealworms";
  static description = "mealworms";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
insects.push(Mealworms);

export class Beetles extends Insect {
  static singular = "beetles";
  static plural = "beetles";
  static description = "beetles";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
insects.push(Beetles);

export class Ants extends Insect {
  static readonly ant:null;
  static singular = "ant";
  static plural = "ants";
  static description = "ant";
  static sources: Source[] = ["Foraging", "Farming"];
}
export type AntType = InsectType & {ant:null};

export class RedAnts extends Ants {
  static singular = "red ant";
  static plural = "red ants";
  static description = "red ant";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
insects.push(RedAnts);

export class BlackAnts extends Ants {
  static singular = "black ant";
  static plural = "black ants";
  static description = "black ant";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
insects.push(BlackAnts);

export class FireAnts extends Ants {
  static singular = "fire ant";
  static plural = "fire ants";
  static description = "fire ant";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
insects.push(FireAnts);

export class Ooze extends Food {
  static readonly ooze:null;
  static singular = "ooze";
  static plural = "oozes";
  static description = "ooze";
  static sources: Source[] = ["Foraging", "Questing"];
}
export type OozeType = FoodType & {ooze:null};

export class GrayOoze extends Ooze {
  static singular = "gray ooze";
  static plural = "gray oozes";
  static description = "gray ooze";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
oozes.push(GrayOoze);

export class GreenOoze extends Ooze {
  static singular = "green ooze";
  static plural = "green oozes";
  static description = "green ooze";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
oozes.push(GreenOoze);

export class SuperiorOoze extends Ooze {
  static singular = "superior ooze";
  static plural = "superior oozes";
  static description = "superior ooze";
  static sources: Source[] = ["Questing"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
oozes.push(SuperiorOoze);

export class PurpleOoze extends Ooze {
  static singular = "purple ooze";
  static plural = "purple oozes";
  static description = "purple ooze";
  static sources: Source[] = ["Questing"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
oozes.push(PurpleOoze);

export class Glowworm extends Insect {
  static singular = "glowworm";
  static plural = "glowworms";
  static description = "glowworm";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
insects.push(Glowworm);

export class Venison extends Meat {
  static singular = "venison";
  static plural = "venison";
  static description = "venison";
  static sources: Source[] = ["Hunting"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
meats.push(Venison);

export class ReindeerVenison extends Venison {}
meats.push(ReindeerVenison);

export class Sprouts extends Vegetable {
  static singular = "sprouts";
  static plural = "sprouts";
  static description = "sprouts";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Sprouts);

export class MapleSap extends Food {
  static singular = "maple sap";
  static plural = "maple sap";
  static description = "maple sap";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(MapleSap);

export class Acorns extends Nut {
  static singular = "acorn";
  static plural = "acorns";
  static description = "acorn";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
nuts.push(Acorns);

export class VanillaBean extends Spice {
  static singular = "vanilla bean";
  static plural = "vanilla beans";
  static description = "vanilla bean";
  static sources: Source[] = ["Foraging"];
  static edible = false;
}
spices.push(VanillaBean);

export class Cucumbers extends Vegetable {
  static singular = "cucumber";
  static plural = "cucumbers";
  static description = "cucumber";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Cucumbers);

export class Onion extends Vegetable {
  static readonly onion:null;
  static singular = "onion";
  static plural = "onions";
  static description = "onion";
  static sources: Source[] = ["Farming"];
}
export type OnionType = VegetableType & {onion:null};

export class RedOnion extends Onion {
  static singular = "red onion";
  static plural = "red onions";
  static description = "red onion";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
onions.push(RedOnion);

export class WhiteOnion extends Onion {
  static singular = "white onion";
  static plural = "white onions";
  static description = "white onion";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
onions.push(WhiteOnion);

export class GreenOnion extends Onion {
  static singular = "green onion";
  static plural = "green onions";
  static description = "green onion";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
onions.push(GreenOnion);

export class WildOnion extends Onion {
  static singular = "wild onion";
  static plural = "wild onions";
  static description = "wild onion";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
onions.push(WildOnion);

export class SoySauce extends Food {
  static singular = "soy sauce";
  static plural = "soy sauce";
  static description = "soy sauce";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sauces.push(SoySauce);

export class CocoaBeans extends Food {
  static singular = "cocoa bean";
  static plural = "cocoa beans";
  static description = "cocoa bean";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(CocoaBeans);

export class CoffeeBeans extends Food {
  static singular = "coffee bean";
  static plural = "coffee beans";
  static description = "coffee bean";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(CoffeeBeans);

export class TeaLeaves extends Food {
  static singular = "tea leaf";
  static plural = "tea leaves";
  static description = "tea leaf";
  static sources: Source[] = ["Foraging"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(TeaLeaves);

export class Wheat extends Grain {
  static singular = "wheat";
  static plural = "wheat";
  static description = "wheat";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
grains.push(Wheat);


export class Oats extends Grain {
  static singular = "oats";
  static plural = "oats";
  static description = "oats";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
grains.push(Oats);

export class Barley extends Grain {
  static singular = "barley";
  static plural = "barley";
  static description = "barley";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
grains.push(Barley);

export class Curry extends Spice {
  static readonly curry:null;
  static singular = "curry";
  static plural = "curry";
  static description = "curry";
  static sources: Source[] = ["Trading"];
}
export type CurryType = SpiceType & {curry:null};

export class CurryRed extends Curry {
  static singular = "red curry";
  static plural = "red curry";
  static description = "red curry";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(CurryRed);

export class CurryGreen extends Curry {
  static singular = "green curry";
  static plural = "green curry";
  static description = "green curry";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(CurryGreen);

export class CurryYellow extends Curry {
  static singular = "yellow curry";
  static plural = "yellow curry";
  static description = "yellow curry";
  static sources: Source[] = ["Trading"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(CurryYellow);

export class Beets extends Vegetable {
  static singular = "beet";
  static plural = "beets";
  static description = "beet";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
vegetables.push(Beets);

export class Rye extends Grain {
  static singular = "rye";
  static plural = "rye";
  static description = "rye";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
grains.push(Rye);

export class Buckwheat extends Grain {
  static singular = "buckwheat";
  static plural = "buckwheat";
  static description = "buckwheat";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
grains.push(Buckwheat);

export class Flour extends Food {
  static readonly flour:null;
  static singular = "flour";
  static plural = "flour";
  static description = "flour";
  static sources: Source[] = ["Milling"];
}
export type FlourType = FoodType & {flour:null};

export class RiceFlour extends Flour {
  static singular = "rice flour";
  static plural = "rice flour";
  static description = "rice flour";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
flours.push(RiceFlour);

export class WheatFlour extends Flour {
  static singular = "wheat flour";
  static plural = "wheat flour";
  static description = "wheat flour";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
flours.push(WheatFlour);

export class BarleyFlour extends Flour {
  static singular = "barley flour";
  static plural = "barley flour";
  static description = "barley flour";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
flours.push(BarleyFlour);

export class OatsFlour extends Flour {
  static singular = "oats flour";
  static plural = "oats flour";
  static description = "oats flour";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
flours.push(OatsFlour);

export class RyeFlour extends Flour {
  static singular = "rye flour";
  static plural = "rye flour";
  static description = "rye flour";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
flours.push(RyeFlour);

export class BuckwheatFlour extends Flour {
  static singular = "buckwheat flour";
  static plural = "buckwheat flour";
  static description = "buckwheat flour";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
flours.push(BuckwheatFlour);

export class Honey extends Food {
  static singular = "honey";
  static plural = "honey";
  static description = "honey";
  static sources: Source[] = ["Farming"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sweets.push(Honey);

export class Dough extends CompoundFood {
  static readonly dough:null;
  static singular = "dough";
  static plural = "dough";
  static description = "dough";
}
export type DoughType = CompoundFoodType & {dough:null};

export class PancakeBatter extends Dough {
  static singular = "pancake batter";
  static plural = "pancake batter";
  static description = "pancake batter";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
doughs.push(PancakeBatter);

export class Jam extends CompoundFood {
  static singular = "jam";
  static plural = "jams";
  static description = "jam";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sweets.push(Jam);

export class Chocolate extends Food {
  static singular = "chocolate";
  static plural = "chocolate";
  static description = "chocolate";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sweets.push(Chocolate);

export class Omelet extends CompoundFood {
  static singular = "omelet";
  static plural = "omelets";
  static description = "omelet";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
proteins.push(Omelet);

export class Pickle extends Food {
  static singular = "pickle";
  static plural = "pickles";
  static description = "pickle";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(Pickle);

export class Pancake extends CompoundFood {
  static singular = "pancake";
  static plural = "pancakes";
  static description = "pancake";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Pancake);

export class Granola extends Food {
  static singular = "granola";
  static plural = "granola";
  static description = "granola";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(Granola);

export class BreadDough extends Dough {
  static singular = "bread dough";
  static plural = "bread dough";
  static description = "bread dough";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
doughs.push(BreadDough);

export class Noodles extends Food {
  static singular = "noodles";
  static plural = "noodles";
  static description = "noodles";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
starchs.push(Noodles);

export class Tofu extends Protein {
  static singular = "tofu";
  static plural = "tofu";
  static description = "tofu";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
proteins.push(Tofu);

export class Broth extends CompoundFood {
  static singular = "broth";
  static plural = "broth";
  static description = "broth";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
soups.push(Broth);

export class Tortilla extends Food {
  static singular = "tortilla";
  static plural = "tortillas";
  static description = "tortilla";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
starchs.push(Tortilla);

export class PieFilling extends CompoundFood {
  static singular = "pie filling";
  static plural = "pie fillings";
  static description = "pie filling";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sweets.push(PieFilling);

export class PizzaDough extends Dough {
  static singular = "pizza dough";
  static plural = "pizza dough";
  static description = "pizza dough";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
doughs.push(PizzaDough);

export class PastryDough extends Dough {
  static singular = "pastry dough";
  static plural = "pastry dough";
  static description = "pastry dough";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}

export class IceCream extends CompoundFood {
  static singular = "ice cream";
  static plural = "ice cream";
  static description = "ice cream";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sweets.push(IceCream);

export class Butter extends CompoundFood {
  static singular = "butter";
  static plural = "butter";
  static description = "butter";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spreads.push(Butter);
dairies.push(Butter);

export class Cream extends CompoundFood {
  static singular = "cream";
  static plural = "cream";
  static description = "cream";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(Cream);
dairies.push(Cream);

export class Cheese extends CompoundFood {
  static singular = "cheese";
  static plural = "cheese";
  static description = "cheese";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(Cheese);
dairies.push(Cheese);

export class Yogurt extends CompoundFood {
  static singular = "yogurt";
  static plural = "yogurt";
  static description = "yogurt";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
foods.push(Yogurt);
dairies.push(Yogurt);

export class Wasabi extends Spice {
  static singular = "wasabi";
  static plural = "wasabi";
  static description = "wasabi";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spices.push(Wasabi);

export class Syrup extends Food {
  static singular = "syrup";
  static plural = "syrup";
  static description = "syrup";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sauces.push(Syrup);

export class Guacamole extends Food {
  static singular = "guacamole";
  static plural = "guacamole";
  static description = "guacamole";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sauces.push(Guacamole);
spreads.push(Guacamole);

export class Salsa extends CompoundFood {
  static singular = "salsa";
  static plural = "salsa";
  static description = "salsa";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sauces.push(Salsa);

export class NutButter extends CompoundFood {
  static singular = "peanut butter";
  static plural = "peanut butter";
  static description = "peanut butter";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spreads.push(NutButter);

export class Jelly extends CompoundFood {
  static singular = "jelly";
  static plural = "jelly";
  static description = "jelly";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spreads.push(Jelly);

export class Mayonnaise extends Food {
  static singular = "mayonnaise";
  static plural = "mayonnaise";
  static description = "mayonnaise";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
condiments.push(Mayonnaise);

export class Ketchup extends Food {
  static singular = "ketchup";
  static plural = "ketchup";
  static description = "ketchup";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
condiments.push(Ketchup);

export class PastaEntree extends CompoundFood {
  static singular = "pasta entree";
  static plural = "pasta entree";
  static description = "pasta entree";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(PastaEntree);

export class MacNCheese extends CompoundFood {
  static singular = "mac n cheese";
  static plural = "mac n cheese";
  static description = "mac n cheese";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(MacNCheese);

export class Carbonara extends CompoundFood {
  static singular = "carbonara";
  static plural = "carbonara";
  static description = "carbonara";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Carbonara);

export class BeefStroganoff extends CompoundFood {
  static singular = "beef stroganoff";
  static plural = "beef stroganoff";
  static description = "beef stroganoff";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(BeefStroganoff);

export class Lasagna extends CompoundFood {
  static singular = "lasagna";
  static plural = "lasagna";
  static description = "lasagna";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Lasagna);

export class ClamChowder extends CompoundFood {
  static singular = "clam chowder";
  static plural = "clam chowder";
  static description = "clam chowder";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
soups.push(ClamChowder);

export class LobsterBisque extends CompoundFood {
  static singular = "lobster bisque";
  static plural = "lobster bisque";
  static description = "lobster bisque";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
soups.push(LobsterBisque);

export class CornChowder extends CompoundFood {
  static singular = "corn chowder";
  static plural = "corn chowder";
  static description = "corn chowder";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
soups.push(CornChowder);

export class Chili extends CompoundFood {
  static singular = "chili";
  static plural = "chili";
  static description = "chili";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
soups.push(Chili);

export class ChickenNoodleSoup extends CompoundFood {
  static singular = "chicken noodle soup";
  static plural = "chicken noodle soup";
  static description = "chicken noodle soup";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
soups.push(ChickenNoodleSoup);

export class BLT extends CompoundFood {
  static singular = "blt";
  static plural = "blts";
  static description = "bacon lettuce tomato sandwich";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sandwiches.push(BLT);

export class Burger extends CompoundFood {
  static singular = "burger";
  static plural = "burgers";
  static description = "burger";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sandwiches.push(Burger);

export class Toasties extends CompoundFood {
  static singular = "toastie";
  static plural = "toasties";
  static description = "cheese toast sandwhich";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sandwiches.push(Toasties);

export class PBJ extends CompoundFood {
  static singular = "pbj";
  static plural = "pbjs";
  static description = "peanut butter and jelly sandwich";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sandwiches.push(PBJ);

export class LettuceWrap extends CompoundFood {
  static singular = "lettuce wrap";
  static plural = "lettuce wraps";
  static description = "lettuce wrap";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sandwiches.push(LettuceWrap);

export class NutsNBerries extends CompoundFood {
  static singular = "nuts n berries";
  static plural = "nuts n berries";
  static description = "nuts n berries";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
snacks.push(NutsNBerries);

export class Cake extends CompoundFood {
  static singular = "cake";
  static plural = "cakes";
  static description = "cake";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sweets.push(Cake);

export class Pizza extends CompoundFood {
  static singular = "pizza";
  static plural = "pizzas";
  static description = "pizza";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sweets.push(Pizza);

export class FruitSalad extends CompoundFood {
  static singular = "fruit salad";
  static plural = "fruit salads";
  static description = "fruit salad";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(FruitSalad);

export class Bread extends CompoundFood {
  static readonly bread:null;
  static singular = "bread";
  static plural = "bread";
  static description = "bread";
}

export class BananaBread extends Bread {
  static singular = "banana bread";
  static plural = "banana bread";
  static description = "banana bread";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
breads.push(BananaBread);


export class BakedPotato extends CompoundFood {
  static singular = "baked potato";
  static plural = "baked potatoes";
  static description = "baked potato";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
starchs.push(BakedPotato);

export class Jerky extends CompoundFood {
  static singular = "jerky";
  static plural = "jerky";
  static description = "jerky";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
meats.push(Jerky);

export class FrenchFries extends Food {
  static singular = "french fries";
  static plural = "french fries";
  static description = "french fries";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
starchs.push(FrenchFries);

export class SausageAndPeppers extends CompoundFood {
  static singular = "sausage and peppers";
  static plural = "sausage and peppers";
  static description = "sausage and peppers";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(SausageAndPeppers);

export class Coleslaw extends CompoundFood {
  static singular = "coleslaw";
  static plural = "coleslaw";
  static description = "coleslaw";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(Coleslaw);

export class SteakAndPotatoes extends CompoundFood {
  static singular = "steak and potatoes";
  static plural = "steak and potatoes";
  static description = "steak and potatoes";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(SteakAndPotatoes);

export class Ratatouille extends CompoundFood {
  static singular = "ratatouille";
  static plural = "ratatouille";
  static description = "ratatouille";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Ratatouille);

export class Gumbo extends CompoundFood {
  static singular = "gumbo";
  static plural = "gumbo";
  static description = "gumbo";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Gumbo);

export class RoastedVegetables extends CompoundFood {
  static singular = "roasted vegetables";
  static plural = "roasted vegetables";
  static description = "roasted vegetables";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(RoastedVegetables);

export class Bruschetta extends CompoundFood {
  static singular = "bruschetta";
  static plural = "bruschetta";
  static description = "bruschetta";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(Bruschetta);

export class StuffedShrooms extends CompoundFood {
  static singular = "stuffed shrooms";
  static plural = "stuffed shrooms";
  static description = "stuffed shrooms";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(StuffedShrooms);

export class EggRolls extends CompoundFood {
  static singular = "egg roll";
  static plural = "egg rolls";
  static description = "egg rolls";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(EggRolls);

export class EggSalad extends CompoundFood {
  static singular = "egg salad";
  static plural = "egg salads";
  static description = "egg salads";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(EggSalad);

export class StirFry extends CompoundFood {
  static singular = "stir fry";
  static plural = "stir fries";
  static description = "stir fries";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(StirFry);

export class SteakAndEggs extends CompoundFood {
  static singular = "steak and eggs";
  static plural = "steak and eggs";
  static description = "steak and eggs";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(SteakAndEggs);

export class HamAndEggs extends CompoundFood {
  static singular = "ham and eggs";
  static plural = "ham and eggs";
  static description = "ham and eggs";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(HamAndEggs);

export class CabbageRolls extends CompoundFood {
  static singular = "cabbage rolls";
  static plural = "cabbage rolls";
  static description = "cabbage rolls";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(CabbageRolls);

export class Pho extends CompoundFood {
  static singular = "pho";
  static plural = "pho";
  static description = "pho";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Pho);

export class CornBread extends Bread {
  static singular = "corn bread";
  static plural = "corn bread";
  static description = "corn bread";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
breads.push(CornBread);

export class Oatmeal extends CompoundFood {
  static singular = "oatmeal";
  static plural = "oatmeal";
  static description = "oatmeal";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(Oatmeal);

export class FruitSnack extends CompoundFood {
  static singular = "fruit snack";
  static plural = "fruit snacks";
  static description = "fruit snacks";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(FruitSnack);

export class Meatloaf extends CompoundFood {
  static singular = "meatloaf";
  static plural = "meatloaf";
  static description = "meatloaf";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Meatloaf);

export class FishAndFungi extends CompoundFood {
  static singular = "fish and fungi";
  static plural = "fish and fungi";
  static description = "fish and fungi";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(FishAndFungi);

export class AvocadoToast extends CompoundFood {
  static singular = "avocado toast";
  static plural = "avocado toast";
  static description = "avocado toast";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sides.push(AvocadoToast);

export class Waffles extends CompoundFood {
  static singular = "waffles";
  static plural = "waffles";
  static description = "waffles";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Waffles);

export class Pie extends CompoundFood {
  static singular = "pie";
  static plural = "pies";
  static description = "pies";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
sweets.push(Pie);

export class Quesadilla extends CompoundFood {
  static singular = "quesadilla";
  static plural = "quesadillas";
  static description = "quesadillas";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Quesadilla);

export class GrilledProtein extends CompoundFood {
  static singular = "grilled protein";
  static plural = "grilled protein";
  static description = "grilled protein";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(GrilledProtein);

export class FriedProtein extends CompoundFood {
  static singular = "fried protein";
  static plural = "fried protein";
  static description = "fried protein";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(FriedProtein);

export class ChickenPotPie extends CompoundFood {
  static singular = "chicken pot pie";
  static plural = "chicken pot pies";
  static description = "chicken pot pies";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(ChickenPotPie);

export class RiceEntree extends CompoundFood {
  static singular = "rice entree";
  static plural = "rice entrees";
  static description = "rice entrees";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(RiceEntree);

export class FriedRice extends CompoundFood {
  static singular = "fried rice";
  static plural = "fried rice";
  static description = "fried rice";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(FriedRice);

export class Caviar extends CompoundFood {
  static singular = "caviar";
  static plural = "caviar";
  static description = "caviar";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(Caviar);

export class SteamedDumplings extends CompoundFood {
  static singular = "steamed dumplings";
  static plural = "steamed dumplings";
  static description = "steamed dumplings";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(SteamedDumplings);

export class FriedDumplings extends CompoundFood {
  static singular = "fried dumplings";
  static plural = "fried dumplings";
  static description = "fried dumplings";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(FriedDumplings);

export class FunGuyFungiFeast extends CompoundFood {
  static singular = "fun guy fungi feast";
  static plural = "fun guy fungi feasts";
  static description = "fun guy fungi feasts";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(FunGuyFungiFeast);

export class InsectPuree extends CompoundFood {
  static singular = "insect puree";
  static plural = "insect puree";
  static description = "insect puree";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(InsectPuree);

export class RoastedInsects extends CompoundFood {
  static singular = "roasted insects";
  static plural = "roasted insects";
  static description = "roasted insects";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(RoastedInsects);

export class SeasonedInsects extends CompoundFood {
  static singular = "seasoned insects";
  static plural = "seasoned insects";
  static description = "seasoned insects";
  

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(SeasonedInsects);

export class BugsNSlime extends CompoundFood {
  static singular = "bugs n' slime";
  static plural = "bugs n' slime";
  static description = "bugs n' slime";
  

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(BugsNSlime);

export class BugsNOoze extends CompoundFood {
  static singular = "bugs n' ooze";
  static plural = "bugs n' ooze";
  static description = "bugs n' ooze";
  

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(BugsNOoze);

export class MossWrap extends CompoundFood {
  static singular = "moss wrap";
  static plural = "moss wrap";
  static description = "moss wrap";
  

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(MossWrap);

export class AlgaePaste extends CompoundFood {
  static singular = "algae paste";
  static plural = "algae paste";
  static description = "algae paste";
  

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
spreads.push(AlgaePaste);

export class CaveCritterFritters extends CompoundFood {
  static singular = "cave critter fritters";
  static plural = "cave critter fritters";
  static description = "cave critter fritters";
  

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(CaveCritterFritters);

export class MuddyMossyMoldyMess extends CompoundFood {
  static singular = "muddy, mossy, moldy mess";
  static plural = "muddy, mossy, moldy mess";
  static description = "muddy, mossy, moldy mess";
  static sources: Source[] = ["Cooking"];

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(MuddyMossyMoldyMess);

export class OoeyGooeyFreshNFruity extends CompoundFood {
  static singular = "ooey gooey fresh n fruity";
  static plural = "ooey gooey fresh n fruity";
  static description = "ooey gooey fresh n fruity";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(OoeyGooeyFreshNFruity);

export class ScoopOGloop extends CompoundFood {
  static singular = "Scoop O'Gloop";
  static plural = "Scoop O'Gloop";
  static description = "Scoop O'Gloop";

  constructor() {
    super();
    this.hunger = 0;
    this.thirst = 0;
    this.hp = 0;
    this.mass = 1;
  }
}
entrees.push(ScoopOGloop);

// *****************************
// Must come at end of file
// Combine subcategory arrays into category arrays
// Combine all categories into food
// Ensure food array only contains unqiue items
// *****************************
seafoods.push(...fishes, ...crustaceans, ...seaweeds, ...sushis);
proteins.push(...meats, ...seafoods, ...nuts, ...insects, ...fungi, ...beans);
fruits.push(...berries, ...apples, ...citruses, ...grapes);
vegetables.push(...onions);
spices.push(...curries);

foods.push(
...proteins,
...vegetables,
...fruits,
...oozes,
...curries,
...grains,
...flours,
...starchs,
...spices,
...herbs,
...others,
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
);
//make sure foods only contains unqiue items
foods = foods.filter((item, index, self) => self.indexOf(item) === index);
console.log(foods.length);
