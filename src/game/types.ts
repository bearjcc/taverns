// ============================================================================
// Language: TypeScript
// Path: ts\game\types.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

export type Gender = "Male" | "Female" | "None" | "Other";
export type Rarity = "Common" | "Uncommon" | "Rare" | "Exotic";
export type CombatType = "Melee" | "Ranged" | "Magic";
export type DamageType =
  | "Slashing"
  | "Crushing"
  | "Blunt"
  | "Piercing"
  | "Fire"
  | "Cold"
  | "Lightning"
  | "Poison"
  | "Holy"
  | "Unholy"
  | "Arcane";

  export type Source =
	| "Farming"
	| "Fishing"
	| "Foraging"
	| "Questing"
	| "Trading"
	| "Milling"
	| "Crafting"
	| "Cooking"
	| "Distilling"
	| "Brewing"
	| "Water"
	| "Potions"
	| "Hunting"
	| "Religious Ceremony"
	| "Alchemy"
	| "Woodcutting"
  | "Mining"
  | "Herbology"

  export type TreeTypes =
	| "Pine"
	| "Deadwood"
	| "Birch"
	| "Cinnamon"
	| "Banana"
	| "Palm"
	| "Maple"
	| "Citrus"
	| "Oak"
	| "Apple"
	| "Cherry"
	| "Elder"
	| "Willow"
	| "Pear"
	| "Peach"
	| "Mystic"
	| "Sapient Pear";

export class GameMechanic {
  static singular: string;
  static plural: string;
  static description: string;
  
  getTypes(): GameClass[] {
    let types: GameClass[] = [];
    for (
      let prototype = Object.getPrototypeOf(this);
      prototype !== Object.prototype;
      prototype = Object.getPrototypeOf(prototype)
    )
      types.push(prototype.constructor);
    return types;
  }

  getType(): GameClass {
    return Object.getPrototypeOf(this).constructor;
  }

  getName(qty:number): string {
    return qty === 1 ? this.getType().singular : this.getType().plural;
  }

  getDescription(): string {
    return this.getType().description;
  }
}

export class GameMechanicWithType extends GameMechanic {
  singular: string;
  plural: string;
  description: string;

  getName(qty: number): string {
    return qty === 1 ? this.singular : this.plural;
  }

  getDescription(): string {
    return this.description;
  }
}

export type GameClass = { 
    new (...args: any[]): any //generic constructor

    // static properties
    singular: string;
    plural: string;
    description: string;
};
