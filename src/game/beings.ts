// ============================================================================
// Language: TypeScript
// Path: ts\beings.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Gender, Rarity, DamageType, CombatType, Class } from "./types";
import * as Affect from "./affects";
import { Meat, Skeleton, Skull, Feather } from "./being-items";

export type BeingType = {
  singular: string;
  plural: string;
  description: string;
} & Class;

export class Being {
  static singular: string = "Being";
  static plural: string = "Beings";
  static description: string =
    "A living thing including plants, animals, fungi, and Gods.";

  membersOnly: Boolean = false;
  strength: number = 0;
  dexterity: number = 0;
  stamina: number = 0;
  fortitude: number = 0;
  intelligence: number = 0;
  charisma: number = 0;
  speed: number = 30; //kilometers per hour
  maxHealth: number = 100;
  health: number = 100;
  maxMana: number = 0;
  mana: number = 0;
  maxEnergy: number = 100;
  energy: number = 100;
  affects: Affect.Affect[] = [];
  damageResistances: { [key in DamageType]: number } = {
    Slashing: 0,
    Crushing: 0,
    Blunt: 0,
    Piercing: 0,
    Fire: 0,
    Cold: 0,
    Lightning: 0,
    Poison: 0,
    Holy: 0,
    Unholy: 0,
    Arcane: 0,
  };
  combatProficiencies: { [key in CombatType]: Boolean } = {
    Melee: true,
    Ranged: false,
    Magic: false,
  };
  canFly: Boolean = false;

  getTypes(): BeingType[] {
    let types: BeingType[] = [];
    for (
      let prototype = Object.getPrototypeOf(this);
      prototype !== Object.prototype;
      prototype = Object.getPrototypeOf(prototype)
    )
      types.push(prototype);
    return types;
  }

  getType(): BeingType {
    return Object.getPrototypeOf(this);
  }

  getMeat(): Meat {
    // TODO: quality and weight of meat
    return this.health === 0 ? new Meat(this) : null;
  }

  getSkull(): Skull {
    // TODO: quality and weight of skull
    return this.health === 0 ? new Skull(this) : null;
  }

  getSkeleton(): Skeleton {
    // TODO: quality and weight of skeleton
    return this.health === 0 ? new Skeleton(this) : null;
  }
}

export var beings: BeingType[] = [];
beings.push(Being);

export class Humanoid extends Being {
  static singular: string = "Humanoid";
  static plural: string = "Humanoids";
  static description: string = "Intelligent and bipedal.";

  name: string;
  gender: Gender;
  hasBackpack: Boolean;
  description: string;
  rarity: Rarity = "Common";

  constructor(name: string, gender: Gender) {
    super();
    this.name = name;
    this.gender = gender;
    this.hasBackpack = false;
  }
}
beings.push(Humanoid);

export type HumanoidType = {
  singular: string;
  plural: string;
  description: string;
} & Class;
export var playableRaces: HumanoidType[] = [];

export class Dwarf extends Humanoid {
  static singular: string = "Dwarf";
  static plural: string = "Dwarves";
  static description: string =
    "Short of stature and short of temper, dwarves enjoy alcohol a little too much and are mostly geologists.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Common";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Dwarf);

export class Elf extends Humanoid {
  static singular: string = "Elf";
  static plural: string = "Elves";
  static description: string =
    "Tall, elegant, and haughty, elves outlive all other humanoid races and create magnificent architecture and art.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Common";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Elf);

export class Gnome extends Humanoid {
  static singular: string = "Gnome";
  static plural: string = "Gnomes";
  static description: string =
    "The shortest of the humanoids, gnomes prefer animal companions over other humanoid races.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Uncommon";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Gnome);

export class Halfling extends Humanoid {
  static singular: string = "Halfling";
  static plural: string = "Halflings";
  static description: string =
    "Halflings are so awkward they end up having the best luck, or, so it seems. They never seem to fit in though.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Uncommon";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Halfling);

export class Human extends Humanoid {
  static singular: string = "Human";
  static plural: string = "Humans";
  static description: string =
    "Pride, Honor, Territory, Ownership: there is rarely anything else on the mind of man";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Common";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Human);

export class Orc extends Humanoid {
  static singular: string = "Orc";
  static plural: string = "Orcs";
  static description: string =
    "Ugly, brutish, and war-hungry, there is nothing more important then clan and family to an orc.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Common";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Orc);

export class Satyr extends Humanoid {
  static playable: Boolean = true;
  static plural: string = "Satyrs";
  static singular: string = "Satyr";
  static description: string =
    "Torso of man, legs and horns of a goat, satyrs are often tricksters or harlots";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Exotic";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Satyr);

export class Goliath extends Humanoid {
  static playable: Boolean = true;
  static plural: string = "Goliaths";
  static singular: string = "Goliath";
  static description: string =
    "The largest of the humanoids. Though clan-like, and brutish like orcs, goliaths are much more peaceful, and less organized.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Rare";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Goliath);

export class Felix extends Humanoid {
  static playable: Boolean = true;
  static plural: string = "Felideax";
  static singular: string = "Felix";
  static description: string =
    "Standing on their hind legs, these big cats have integrated well into humanoids' world.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Rare";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Felix);

export class Mixedblood extends Humanoid {
  static playable: Boolean = true;
  static plural: string = "Mixedbloods";
  static singular: string = "Mixedblood";
  static description: string =
    "Infertile, and often asexual, mixedblood describes any half breed between two humanoid races.";

  // what type of beings are the parents?
  parent1: HumanoidType;
  parent2: HumanoidType;

  constructor(
    name: string,
    gender: Gender,
    parent1: HumanoidType,
    parent2: HumanoidType
  ) {
    super(name, gender);
    this.rarity = "Uncommon";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
playableRaces.push(Mixedblood);
beings.push(...playableRaces);

export class Merfolk extends Humanoid {
  static plural: string = "Mermen";
  static singular: string = "Merfolk";
  static description: string =
    "Humanoid torso with the lower body of a fish, these people can breath underwater or above";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Exotic";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Merfolk);

export class Lizardfolk extends Humanoid {
  static plural: string = "Lizardfolk";
  static singular: string = "Lizardi";
  static description: string =
    "Lizardfolk are slimy, gangly and not to be trusted.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Rare";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Lizardfolk);

export class Troll extends Humanoid {
  static plural: string = "Trolls";
  static singular: string = "Troll";
  static description: string =
    "Strong and hardy, but lacking intelligence, trolls tend to live alone.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Rare";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Troll);

export class Goblin extends Humanoid {
  static plural: string = "Goblins";
  static singular: string = "Goblin";
  static description: string =
    "Some think them cute, others think they are hideous, either way, better watch your gold while goblins are around!";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Rare";
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Goblin);

export class God extends Being {
  static plural: string = "Gods";
  static singular: string = "God";
  static description: string =
    "Immortal beings that interact with the world through their followers rather then with a body of their own";

  name: string;
  gender: Gender;

  constructor(name: string, gender: Gender) {
    super();
    this.name = name;
    this.gender = gender;
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(God);

export class Djin extends Being {
  static plural: string = "Djins";
  static singular: string = "Djin";
  static description: string =
    "Djins are a manifestation of pure Mystic Force. Powerful, Ephemeral, Tricksters.";

  name: string;
  gender: Gender;

  constructor(name: string, gender: Gender) {
    super();
    this.name = name;
    this.gender = gender;
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Djin);

export class Imp extends Being {
  static plural: string = "Imps";
  static singular: string = "Imp";
  static description: string =
    "Small, fiendish, impudent creatures with mild magical abilities";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Imp);

export class Undead extends Being {
  static plural: string = "Undead";
  static singular: string = "Undead";
  static description: string =
    "This being is dead but still wandering the world";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Undead);

export class Ghost extends Undead {
  static plural: string = "Ghosts";
  static singular: string = "Ghost";
  static description: string =
    "A soul dettached from a body. May be seen around the world if they get lost on their way to Styx";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Ghost);

export class WalkingSkeleton extends Undead {
  static plural: string = "Skeletons";
  static singular: string = "Skeleton";
  static description: string = "There is nothing left of this being but bones";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(WalkingSkeleton);

export class Valkyrie extends Being {
  static plural: string = "Valkyries";
  static singular: string = "Valkry";
  static description: string = "Valkyries guide the dead to the the afterlife.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Valkyrie);

export class Fairy extends Being {
  static plural: string = "Fairies";
  static singular: string = "Fairy";
  static description: string =
    "Fairies are small, flying creatures that are known for their magic";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Fairy);

export class Leprechaun extends Fairy {
  static plural: string = "Leprechauns";
  static singular: string = "Leprechaun";
  static description: string =
    "Leprechauns can make gold appear out of thin air and are often found drinking far too much";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Leprechaun);

export class Kobold extends Fairy {
  static plural: string = "Kobolds";
  static singular: string = "Kobold";
  static description: string =
    "An ambivalent, sometimes vindictive, spirit that is capable of materialising as an object or human, often a child.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Kobold);

export class Pixie extends Fairy {
  static plural: string = "Pixies";
  static singular: string = "Pixie";
  static description: string =
    "Pixies are the smallest of the fairest and the most playful";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Pixie);

export class Kitsune extends Fairy {
  static plural: string = "Kitsune";
  static singular: string = "Kitsune";
  static description: string =
    "Kitsune are fairies in the shape of a fox, with a human face and tail. Most server the Sphinx as assistants.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Kitsune);

export class Sphinx extends Being {
  static plural: string = "Sphinx";
  static singular: string = "Sphinx";
  static description: string =
    "Sphinx are the most powerful of all beings, they are able to speak and understand any language.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Sphinx);

export class Monster extends Being {
  static plural: string = "Monsters";
  static singular: string = "Monster";
  static description: string =
    "Monsters are the most dangerous beings in the world.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Monster);

export class Minotaur extends Monster {
  static plural: string = "Minotaurs";
  static singular: string = "Minotaur";
  static description: string =
    "Minotaurs have the body of a massive human and the head of a bull.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Minotaur);

export class Hydra extends Monster {
  static plural: string = "Hydra";
  static singular: string = "Hydra";
  static description: string =
    "Hyrda are fierce creatures with many serpent heads.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Hydra);

export class Banshee extends Undead {
  static plural: string = "Banshee";
  static singular: string = "Banshee";
  static description: string =
    "Banshees are undead women who continually wail their laments of their lost children";
  gender: Gender = "Female";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Banshee);

export class Animal extends Being {
  static plural: string = "Animals";
  static singular: string = "Animal";
  static description: string = "A natural being that is not a person";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Animal);

export class Unicorn extends Animal {
  static plural: string = "Unicorn";
  static singular: string = "Unicorn";
  static description: string =
    "Unicorns are mythical creatures that resemble horses.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Unicorn);

export class Phoenix extends Animal {
  static plural: string = "Phoneix";
  static singular: string = "Phoneix";
  static description: string =
    "Phoenixes are mythical creatures reknown for their healing abilities.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Phoenix);

export class Dragon extends Animal {
  static plural: string = "Dragons";
  static singular: string = "Dragon";
  static description: string =
    "Dragons are fierce and powerful beings who one should not cross.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Dragon);

export class Gryphon extends Animal {
  static plural: string = "Gryphon";
  static singular: string = "Gryphon";
  static description: string =
    "With the body of a horse and the head of a bird, the gryphon is a mythical creature.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Gryphon);

export class Elephant extends Animal {
  static plural: string = "Elphants";
  static singular: string = "Elephant";
  static description: string = "Elephant are large intelligent mounts";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Elephant);

export class Lizardmount extends Animal {
  static plural: string = "Lizardmounts";
  static singular: string = "Lizardmount";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Lizardmount);

export class Ostrich extends Animal {
  static plural: string = "Ostriches";
  static singular: string = "Ostrich";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Ostrich);

export class Pet extends Animal {
  static plural: string = "Pets";
  static singular: string = "Pet";
  static description: string = "Pets are small animals that are not dangerous";
  canLeash: Boolean = true;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Pet);

export class Cat extends Pet {
  static plural: string = "Cats";
  static singular: string = "Cat";
  static description: string =
    "Cats are small, furry, and domesticated animals.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Cat);

export class Dog extends Pet {
  static plural: string = "Dogs";
  static singular: string = "Dog";
  static description: string =
    "Dogs are small, furry, and domesticated animals.";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Dog);

export class Chameleon extends Pet {
  static plural: string = "Chameleon";
  static singular: string = "Chameleon";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Chameleon);

export class Parrot extends Pet {
  static plural: string = "Parrots";
  static singular: string = "Parrot";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Parrot);

export class Ferret extends Pet {
  static plural: string = "Ferrets";
  static singular: string = "Ferret";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Ferret);

export class Songbird extends Pet {
  static plural: string = "Songbirds";
  static singular: string = "Songbird";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Songbird);

export class Rabbit extends Pet {
  static plural: string = "Rabbits";
  static singular: string = "Rabbit";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Rabbit);

export class Mouse extends Pet {
  static plural: string = "Mice";
  static singular: string = "Mouse";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Mouse);

export class Hedgehog extends Pet {
  static plural: string = "Hedgehogs";
  static singular: string = "Hedgehog";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Hedgehog);

export class FarmAnimal extends Animal {
  static plural: string = "Farm Animals";
  static singular: string = "Farm Animal";
  static description: string;
}
beings.push(FarmAnimal);

export class Horse extends FarmAnimal {
  static plural: string = "Horses";
  static singular: string = "Horse";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Horse);

export class Llama extends FarmAnimal {
  static plural: string = "Llamas";
  static singular: string = "Llama";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Llama);

export class Donkey extends FarmAnimal {
  static plural: string = "Donkeys";
  static singular: string = "Donkey";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Donkey);

export class Ox extends FarmAnimal {
  static plural: string = "Oxen";
  static singular: string = "Ox";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Ox);

export class Fish extends Animal {
  static plural: string = "Fish";
  static singular: string = "Fish";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Fish);

export class Deer extends Animal {
  static plural: string = "Deer";
  static singular: string = "Deer";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Deer);

export class Reindeer extends Animal {
  static plural: string = "Reindeer";
  static singular: string = "Reindeer";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Reindeer);

export class Elk extends Animal {
  static plural: string = "Elk";
  static singular: string = "Elk";
  static description: string;

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Elk);

export class Adder extends Fish {
  static plural: string = "Adders";
  static singular: string = "Adder";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Adder);

export class Barracuda extends Fish {
  static plural: string = "Barracuda";
  static singular: string = "Barracudas";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Barracuda);

export class Carp extends Fish {
  static plural: string = "Carp";
  static singular: string = "Carp";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Carp);

export class Catfish extends Fish {
  static plural: string = "Catfish";
  static singular: string = "Catfish";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Catfish);

export class Crayfish extends Fish {
  static plural: string = "Crayfish";
  static singular: string = "Crayfish";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Crayfish);

export class Eel extends Fish {
  static plural: string = "Eels";
  static singular: string = "Eel";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Eel);

export class Jewelfish extends Fish {
  static plural: string = "Jewelfish";
  static singular: string = "Jewelfish";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Jewelfish);

export class Silverling extends Fish {
  static plural: string = "Silverlings";
  static singular: string = "Silverling";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Silverling);

export class Swordfish extends Fish {
  static plural: string = "Swordfish";
  static singular: string = "Swordfish";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Swordfish);

export class Trout extends Fish {
  static plural: string = "Trout";
  static singular: string = "Trout";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Trout);

export class RainbowTrout extends Trout {
  static plural: string = "Rainbow Trout";
  static singular: string = "Rainbow Trout";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(RainbowTrout);

export class Salmon extends Fish {
  static plural: string = "Salmon";
  static singular: string = "Salmon";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Salmon);

export class Cod extends Fish {
  static plural: string = "Cod";
  static singular: string = "Cod";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Cod);

export class Mahi extends Fish {
  static plural: string = "Mahi-Mahi";
  static singular: string = "Mahi-Mahi";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Mahi);

export class Jellyfish extends Fish {
  static plural: string = "Jellyfish";
  static singular: string = "Jellyfish";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Jellyfish);

export class Anchovy extends Fish {
  static plural: string = "Anchovies";
  static singular: string = "Anchovy";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Anchovy);

export class Barrelfish extends Fish {
  static plural: string = "Barrelfish";
  static singular: string = "Barrelfsih";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Barrelfish);

export class Octopus extends Fish {
  static plural: string = "Octopuses";
  static singular: string = "Octopus";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Octopus);

export class Dolphin extends Fish {
  static plural: string = "Dolphins";
  static singular: string = "Dolphin";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Dolphin);

export class Whale extends Fish {
  static plural: string = "Whales";
  static singular: string = "Whale";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Whale);

export class Squid extends Fish {
  static plural: string = "Squids";
  static singular: string = "Squid";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Squid);

export class Anglerfish extends Fish {
  static plural: string = "Anglerfish";
  static singular: string = "Anglerfish";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Anglerfish);

export class SandDollar extends Fish {
  static plural: string = "Sand Dollars";
  static singular: string = "Sand Dollar";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(SandDollar);

export class Starfish extends Fish {
  static plural: string = "Starfish";
  static singular: string = "Starfish";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Starfish);

export class SeaUrchin extends Fish {
  static plural: string = "Sea Urchins";
  static singular: string = "Sea Urchin";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(SeaUrchin);

export class Lobster extends Fish {
  static plural: string = "Lobsters";
  static singular: string = "Lobster";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Lobster);

export class Clam extends Fish {
  static plural: string = "Clams";
  static singular: string = "Clam";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Clam);

export class Crab extends Animal {
  static plural: string = "Crabs";
  static singular: string = "Crab";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Crab);

export class Shrimp extends Fish {
  static plural: string = "Shrimp";
  static singular: string = "Shrimp";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Shrimp);

export class Seal extends Animal {
  static plural: string = "Seals";
  static singular: string = "Seal";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Seal);

export class Shark extends Fish {
  static plural: string = "Sharks";
  static singular: string = "Shark";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Shark);

export class Walrus extends Animal {
  static plural: string = "Walruses";
  static singular: string = "Walrus";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Walrus);

export class Ray extends Animal {
  static plural: string = "Rays";
  static singular: string = "Ray";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Ray);

export class Bird extends Animal {
  static plural: string = "Birds";
  static singular: string = "Bird";
  static description: string = "";

  numFeathers: number;

  getFeathers(): Feather[] {
    if (!this.health)
      //only available if dead
      return null;
    let feathers: Feather[] = [];
    for (let i = 0; i < this.numFeathers; i++) {
      feathers.push(this.getFeather());
    }
    return feathers;
  }

  getFeather(): Feather {
    return new Feather(this);
  }

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = true;
    this.numFeathers = 10;
  }
}
beings.push(Bird);

export class Condor extends Bird {
  static plural: string = "Condors";
  static singular: string = "Condor";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.numFeathers = 20;
  }
}
beings.push(Condor);

export class Dove extends Bird {
  static plural: string = "Doves";
  static singular: string = "Dove";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.numFeathers = 10;
  }
}
beings.push(Dove);

export class Eagle extends Bird {
  static plural: string = "Eagles";
  static singular: string = "Eagle";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.numFeathers = 20;
  }
}
beings.push(Eagle);

export class Hawk extends Bird {
  static plural: string = "Hawks";
  static singular: string = "Hawk";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.numFeathers = 20;
  }
}
beings.push(Hawk);

export class Owl extends Bird {
  static plural: string = "Owls";
  static singular: string = "Owl";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.numFeathers = 20;
  }
}
beings.push(Owl);

export class Pheasant extends Bird {
  static plural: string = "Pheasants";
  static singular: string = "Pheasant";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.numFeathers = 20;
  }
}
beings.push(Pheasant);

export class Raven extends Bird {
  static plural: string = "Ravens";
  static singular: string = "Raven";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.numFeathers = 20;
  }
}
beings.push(Raven);

export class Insect extends Animal {
  static plural: string = "Insects";
  static singular: string = "Insect";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Insect);

export class Snake extends Animal {
  static plural: string = "Snakes";
  static singular: string = "Snake";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Snake);

export class Anaconda extends Snake {
  static plural: string = "";
  static singular: string = "";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Anaconda);

export class RatSnake extends Snake {
  static plural: string = "Rat Snakes";
  static singular: string = "Rat Snake";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(RatSnake);

export class RattleSnake extends Snake {
  static plural: string = "Rattle Snakes";
  static singular: string = "Rattle Snake";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(RattleSnake);

export class Fox extends Animal {
  static plural: string = "Foxes";
  static singular: string = "Fox";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Fox);

export class ArticFox extends Fox {
  static plural: string = "Artic Foxes";
  static singular: string = "Artic Fox";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(ArticFox);

export class Baboon extends Animal {
  static plural: string = "";
  static singular: string = "";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Baboon);

export class Ape extends Animal {
  static plural: string = "Apes";
  static singular: string = "Ape";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Ape);

export class Badger extends Animal {
  static plural: string = "Badgers";
  static singular: string = "Badger";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Badger);

export class Bat extends Animal {
  static plural: string = "Bats";
  static singular: string = "Bat";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Bat);

export class Bear extends Animal {
  static plural: string = "Bears";
  static singular: string = "Bear";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Bear);

export class BlackBear extends Bear {
  static plural: string = "Black Bears";
  static singular: string = "Black Bear";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(BlackBear);

export class Grizzly extends Bear {
  static plural: string = "Grizzlies";
  static singular: string = "Grizzly";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(Grizzly);

export class PolarBear extends Bear {
  static plural: string = "Polar Bears";
  static singular: string = "Polar Bear";
  static description: string = "";

  constructor() {
    super();
    this.membersOnly = false;
    this.strength = 0;
    this.dexterity = 0;
    this.stamina = 0;
    this.fortitude = 0;
    this.intelligence = 0;
    this.charisma = 0;
    this.speed = 30; //kilometers per hour
    this.maxHealth = 100;
    this.health = 100;
    this.maxMana = 0;
    this.mana = 0;
    this.maxEnergy = 0;
    this.energy = 0;
    this.affects = [];
    this.damageResistances.Arcane = 0;
    this.damageResistances.Cold = 0;
    this.damageResistances.Fire = 0;
    this.damageResistances.Holy = 0;
    this.damageResistances.Lightning = 0;
    this.damageResistances.Poison = 0;
    this.damageResistances.Slashing = 0;
    this.damageResistances.Blunt = 0;
    this.damageResistances.Piercing = 0;
    this.damageResistances.Unholy = 0;
    this.combatProficiencies.Melee = false;
    this.combatProficiencies.Ranged = false;
    this.combatProficiencies.Magic = false;
    this.canFly = false;
  }
}
beings.push(PolarBear);
