// ============================================================================
// Language: TypeScript
// Path: ts\beings.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Gender, Rarity } from "./types";

export class Being {
  static singular: string = "Being";
  static plural: string = "Beings";
  static description: string =
    "A living thing including plants, animals, fungi, and Gods.";

  membersOnly: Boolean;
  types: BeingType[] = [];

  constructor() {
    this.membersOnly = false;
    this.types.push(Being);
  }
}

export type BeingType = {
  singular: string;
  plural: string;
  description: string;
};
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
    this.types.push(Humanoid);
  }
}
beings.push(Humanoid);

export type HumanoidType = {
  singular: string;
  plural: string;
  description: string;
};
export var playableRaces: HumanoidType[] = [];

export class Dwarf extends Humanoid {
  static singular: string = "Dwarf";
  static plural: string = "Dwarves";
  static description: string =
    "Short of stature and short of temper, dwarves enjoy alcohol a little too much and are mostly geologists.";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Common";
    this.types.push(Dwarf);
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
    this.types.push(Elf);
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
    this.types.push(Gnome);
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
    this.types.push(Halfling);
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
    this.types.push(Human);
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
    this.types.push(Orc);
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
    this.types.push(Satyr);
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
    this.types.push(Goliath);
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
    this.types.push(Felix);
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
    description: string,
    parent1: HumanoidType,
    parent2: HumanoidType
  ) {
    super(name, gender);
    this.rarity = "Uncommon";
    this.types.push(Mixedblood);
  }
}
playableRaces.push(Mixedblood);

export class Merfolk extends Humanoid {
  static plural: string = "Mermen";
  static singular: string = "Merfolk";
  static description: string =
    "Humanoid torso with the lower body of a fish, these people can breath underwater or above";

  constructor(name: string, gender: Gender) {
    super(name, gender);
    this.rarity = "Exotic";
    this.types.push(Merfolk);
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
    this.rarity = "Uncommon";
    this.types.push(Lizardfolk);
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
    this.rarity = "Uncommon";
    this.types.push(Troll);
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
    this.rarity = "Common";
    this.types.push(Goblin);
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
    this.types.push(God);
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
    this.types.push(Djin);
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
    this.types.push(Imp);
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
    this.types.push(Undead);
  }
}

export class Ghost extends Undead {
  static plural: string = "Ghosts";
  static singular: string = "Ghost";
  static description: string =
    "A soul dettached from a body. May be seen around the world if they get lost on their way to Styx";

  constructor() {
    super();
    this.types.push(Ghost);
  }
}
beings.push(Ghost);

export class Skeleton extends Undead {
  static plural: string = "Skeletons";
  static singular: string = "Skeleton";
  static description: string = "There is nothing left of this being but bones";

  constructor() {
    super();
    this.types.push(Skeleton);
  }
}

export class Valkyrie extends Being {
  static plural: string = "Valkyries";
  static singular: string = "Valkry";
  static description: string = "Valkyries guide the dead to the the afterlife.";

  constructor() {
    super();
    this.types.push(Valkyrie);
  }
}
beings.push(Valkyrie);

export class Fairy extends Being {
  static plural: string = "Fairies";
  static singular: string = "Fairy";
  static description: string =
    "Fairies are small, flying creatures that are known for their magic";
}
beings.push(Fairy);

export class Leprechaun extends Fairy {
  static plural: string = "Leprechauns";
  static singular: string = "Leprechaun";
  static description: string =
    "Leprechauns can make gold appear out of thin air and are often found drinking far too much";

  constructor() {
    super();
    this.types.push(Leprechaun);
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
    this.types.push(Kobold);
  }
}
beings.push(Kobold);

export class Pixie extends Fairy {
  static plural: string = "Pixies";
  static singular: string = "Pixie";
  static description: string =
    "Pixies are the smallest of the fairest and the most playful";
}
beings.push(Pixie);

export class Kitsune extends Fairy {
  static plural: string = "Kitsune";
  static singular: string = "Kitsune";
  static description: string =
    "Kitsune are fairies in the shape of a fox, with a human face and tail. Most server the Sphinx as assistants.";

  constructor() {
    super();
    this.types.push(Kitsune);
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
    this.types.push(Sphinx);
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
    this.types.push(Monster);
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
    this.types.push(Minotaur);
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
    this.types.push(Hydra);
  }
}
beings.push(Hydra);

export class Banshee extends Undead {
  static plural: string = "Banshee";
  static singular: string = "Banshee";
  static description: string = "Banshees are undead women who continually wail their laments of their lost children";

  gender: Gender = "Female"
  constructor() {
	  super()
	  this.types.push(Banshee)
  }
}
beings.push(Banshee);

export class Animal extends Being {
  static plural: string = "Animals";
  static singular: string = "Animal";
  static description: string = "A natural being that is not a person";

  constructor() {
	super();
	this.types.push(Animal);
  }
}
beings.push(Animal);

export class Unicorn extends Animal {
  static plural: string = "Unicorn";
  static singular: string = "Unicorn";
  static description: string = "Unicorns are mythical creatures that resemble horses.";

  constructor() {
	super();
	this.types.push(Unicorn);
  }
}
beings.push(Unicorn);

export class Phoenix extends Animal {
  static plural: string = "Phoneix";
  static singular: string = "Phoneix";
  static description: string = "Phoenixes are mythical creatures reknown for their healing abilities.";

  constructor() {
	super();
	this.types.push(Phoenix);
  }
}
beings.push(Phoenix);

export class Dragon extends Animal {
  static plural: string = "Dragons";
  static singular: string = "Dragon";
  static description: string = "Dragons are fierce and powerful beings who one should not cross.";

  constructor() {
	super();
	this.types.push(Dragon);
  }
}
beings.push(Dragon);

export class Gryphon extends Animal {
  static plural: string = "Gryphon";
  static singular: string = "Gryphon";
  static description: string = "With the body of a horse and the head of a bird, the gryphon is a mythical creature.";

  constructor() {
	super();
	this.types.push(Gryphon);
  }
}
beings.push(Gryphon);

export class Elephant extends Animal {
  static plural: string = "Elphants";
  static singular: string = "Elephant";
  static description: string = "Elephant are large intelligent mounts";

  constructor() {
	super();
	this.types.push(Elephant);
  }
}
beings.push(Elephant);

export class Lizardmount extends Animal {
  static plural: string = "Lizardmounts";
  static singular: string = "Lizardmount";
  static description: string;

  constructor() {
	super();
	this.types.push(Lizardmount);
  }
}
beings.push(Lizardmount);

export class Ostrich extends Animal {
  static plural: string = "Ostriches";
  static singular: string = "Ostrich";
  static description: string;

  constructor() {
	super();
	this.types.push(Ostrich);
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
	this.types.push(Pet);
  }
}
beings.push(Pet);

export class Cat extends Pet {
  static plural: string = "Cats";
  static singular: string = "Cat";
  static description: string = "Cats are small, furry, and domesticated animals.";

  constructor() {
	super();
	this.types.push(Cat);
  }
}
beings.push(Cat);

export class Dog extends Pet {
  static plural: string = "Dogs";
  static singular: string = "Dog";
  static description: string = "Dogs are small, furry, and domesticated animals.";

  constructor() {
	super();
	this.types.push(Dog);
  }
}
beings.push(Dog);

export class Chameleon extends Pet {
  static plural: string = "Chameleon";
  static singular: string = "Chameleon";
  static description: string;

  constructor() {
	super();
	this.types.push(Chameleon);
  }
}
beings.push(Chameleon);

export class Parrot extends Pet {
  static plural: string = "Parrots";
  static singular: string = "Parrot";
  static description: string;

  constructor() {
	super();
	this.types.push(Parrot);
  }
}
beings.push(Parrot);

export class Ferret extends Pet {
  static plural: string = "Ferrets";
  static singular: string = "Ferret";
  static description: string;

  constructor() {
	super();
	this.types.push(Ferret);
  }
}
beings.push(Ferret);

export class Songbird extends Pet {
  static plural: string = "Songbirds";
  static singular: string = "Songbird";
  static description: string;

  constructor() {
	super();
	this.types.push(Songbird);
  }
}
beings.push(Songbird);

export class Rabbit extends Pet {
  static plural: string = "Rabbits";
  static singular: string = "Rabbit";
  static description: string;

  constructor() {
	super();
	this.types.push(Rabbit);
  }
}
beings.push(Rabbit);

export class Mouse extends Pet {
  static plural: string = "Mice";
  static singular: string = "Mouse";
  static description: string;

  constructor() {
	super();
	this.types.push(Mouse);
  }
}
beings.push(Mouse);

export class Hedgehog extends Pet {
  static plural: string = "Hedgehogs";
  static singular: string = "Hedgehog";
  static description: string;

  constructor() {
	super();
	this.types.push(Hedgehog);
  }
}
beings.push(Hedgehog);

export class FarmAnimal extends Animal {
  static plural: string = "Farm Animals";
  static singular: string = "Farm Animal";
  static description: string;

  constructor() {
	super();
	this.types.push(FarmAnimal);
  }
}
beings.push(FarmAnimal);

export class Horse extends FarmAnimal {
  static plural: string = "Horses";
  static singular: string = "Horse";
  static description: string;

  constructor() {
	super();
	this.types.push(Horse);
  }
}
beings.push(Horse);

export class Llama extends FarmAnimal {
  static plural: string = "Llamas";
  static singular: string = "Llama";
  static description: string;

  constructor() {
	super();
	this.types.push(Llama);
  }
}
beings.push(Llama);

export class Donkey extends FarmAnimal {
  static plural: string = "Donkeys";
  static singular: string = "Donkey";
  static description: string;

  constructor() {
	super();
	this.types.push(Donkey);
  }
}
beings.push(Donkey);

export class Ox extends FarmAnimal {
  static plural: string = "Oxen";
  static singular: string = "Ox";
  static description: string;

  constructor() {
	super();
	this.types.push(Ox);
  }
}
beings.push(Ox);

export class Fish extends Animal {
  static plural: string = "Fish";
  static singular: string = "Fish";
  static description: string;

  constructor() {
	super();
	this.types.push(Fish);
  }
}
beings.push(Fish);

export class Deer extends Animal {
  static plural: string = "Deer";
  static singular: string = "Deer";
  static description: string;

  constructor() {
	super();
	this.types.push(Deer);
  }
}
beings.push(Deer);

export class Reindeer extends Animal {
  static plural: string = "Reindeer";
  static singular: string = "Reindeer";
  static description: string;

  constructor() {
	super();
	this.types.push(Reindeer);
  }
}
beings.push(Reindeer);

export class Elk extends Animal {
  static plural: string = "Elk";
  static singular: string = "Elk";
  static description: string;

  constructor() {
	super();
	this.types.push(Elk);
  }
}
beings.push(Elk);

export class Adder extends Fish {
  static plural: string = "Adders";
  static singular: string = "Adder";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Adder);
  }
}
beings.push(Adder);

export class Barracuda extends Fish {
  static plural: string = "Barracuda";
  static singular: string = "Barracudas";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Barracuda);
  }
}
beings.push(Barracuda);

export class Carp extends Fish {
  static plural: string = "Carp";
  static singular: string = "Carp";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Carp);
  }
}
beings.push(Carp);

export class Catfish extends Fish {
  static plural: string = "Catfish";
  static singular: string = "Catfish";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Catfish);
  }
}
beings.push(Catfish);

export class Crayfish extends Fish {
  static plural: string = "Crayfish";
  static singular: string = "Crayfish";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Crayfish);
  }
}
beings.push(Crayfish);

export class Eel extends Fish {
  static plural: string = "Eels";
  static singular: string = "Eel";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Eel);
  }
}
beings.push(Eel);

export class Jewelfish extends Fish {
  static plural: string = "Jewelfish";
  static singular: string = "Jewelfish";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Jewelfish);
  }
}
beings.push(Jewelfish);

export class Silverling extends Fish {
  static plural: string = "Silverlings";
  static singular: string = "Silverling";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Silverling);
  }
}
beings.push(Silverling);

export class Swordfish extends Fish {
  static plural: string = "Swordfish";
  static singular: string = "Swordfish";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Swordfish);
  }
}
beings.push(Swordfish);

export class Trout extends Fish {
  static plural: string = "Trout";
  static singular: string = "Trout";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Trout);
  }
}
beings.push(Trout);

export class RainbowTrout extends Trout {
  static plural: string = "Rainbow Trout";
  static singular: string = "Rainbow Trout";
  static description: string = "";

  constructor() {
	super();
	this.types.push(RainbowTrout);
  }
}
beings.push(RainbowTrout);

export class Salmon extends Fish {
  static plural: string = "Salmon";
  static singular: string = "Salmon";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Salmon);
  }
}
beings.push(Salmon);

export class Cod extends Fish {
  static plural: string = "Cod";
  static singular: string = "Cod";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Cod);
  }
}
beings.push(Cod);

export class Mahi extends Fish {
  static plural: string = "Mahi-Mahi";
  static singular: string = "Mahi-Mahi";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Mahi);
  }
}
beings.push(Mahi);

export class Jellyfish extends Fish {
  static plural: string = "Jellyfish";
  static singular: string = "Jellyfish";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Jellyfish);
  }
}
beings.push(Jellyfish);

export class Anchovy extends Fish {
  static plural: string = "Anchovies";
  static singular: string = "Anchovy";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Anchovy);
  }
}
beings.push(Anchovy);

export class Barrelfish extends Fish {
  static plural: string = "Barrelfish";
  static singular: string = "Barrelfsih";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Barrelfish);
  }
}
beings.push(Barrelfish);

export class Octopus extends Fish {
  static plural: string = "Octopuses";
  static singular: string = "Octopus";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Octopus);
  }
}
beings.push(Octopus);

export class Dolphin extends Fish {
  static plural: string = "Dolphins";
  static singular: string = "Dolphin";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Dolphin);
  }
}
beings.push(Dolphin);

export class Whale extends Fish {
  static plural: string = "Whales";
  static singular: string = "Whale";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Whale);
  }
}
beings.push(Whale);

export class Squid extends Fish {
  static plural: string = "Squids";
  static singular: string = "Squid";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Squid);
  }
}
beings.push(Squid);

export class Anglerfish extends Fish {
  static plural: string = "Anglerfish";
  static singular: string = "Anglerfish";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Anglerfish);
  }
}
beings.push(Anglerfish);

export class SandDollar extends Fish {
  static plural: string = "Sand Dollars";
  static singular: string = "Sand Dollar";
  static description: string = "";

  constructor() {
	super();
	this.types.push(SandDollar);
  }
}
beings.push(SandDollar);

export class Starfish extends Fish {
  static plural: string = "Starfish";
  static singular: string = "Starfish";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Starfish);
  }
}
beings.push(Starfish);

export class SeaUrchin extends Fish {
  static plural: string = "Sea Urchins";
  static singular: string = "Sea Urchin";
  static description: string = "";

  constructor() {
	super();
	this.types.push(SeaUrchin);
  }
}
beings.push(SeaUrchin);

export class Lobster extends Fish {
  static plural: string = "Lobsters";
  static singular: string = "Lobster";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Lobster);
  }
}
beings.push(Lobster);

export class Clam extends Fish {
  static plural: string = "Clams";
  static singular: string = "Clam";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Clam);
  }
}
beings.push(Clam);

export class Crab extends Animal {
  static plural: string = "Crabs";
  static singular: string = "Crab";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Crab);
  }
}
beings.push(Crab);

export class Shrimp extends Fish {
  static plural: string = "Shrimp";
  static singular: string = "Shrimp";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Shrimp);
  }
}
beings.push(Shrimp);

export class Seal extends Animal {
  static plural: string = "Seals";
  static singular: string = "Seal";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Seal);
  }
}
beings.push(Seal);

export class Shark extends Fish {
  static plural: string = "Sharks";
  static singular: string = "Shark";
  static description: string = "";

  constructor() {	
	super();
	this.types.push(Shark);
  }
}
beings.push(Shark);

export class Walrus extends Animal {
  static plural: string = "Walruses";
  static singular: string = "Walrus";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Walrus);
  }
}
beings.push(Walrus);

export class Ray extends Animal {
  static plural: string = "Rays";
  static singular: string = "Ray";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Ray);
  }
}
beings.push(Ray);

export class Bird extends Animal {
  static plural: string = "Birds";
  static singular: string = "Bird";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Bird);
  }
}
beings.push(Bird);

export class Condor extends Bird {
  static plural: string = "Condors";
  static singular: string = "Condor";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Condor);
  }
}
beings.push(Condor);

export class Dove extends Bird {
  static plural: string = "Doves";
  static singular: string = "Dove";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Dove);
  }
}
beings.push(Dove);

export class Eagle extends Bird {
  static plural: string = "Eagles";
  static singular: string = "Eagle";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Eagle);
  }
}
beings.push(Eagle);

export class Hawk extends Bird {
  static plural: string = "Hawks";
  static singular: string = "Hawk";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Hawk);
  }
}
beings.push(Hawk);

export class Owl extends Bird {
  static plural: string = "Owls";
  static singular: string = "Owl";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Owl);
  }
}
beings.push(Owl);

export class Pheasant extends Bird {
  static plural: string = "Pheasants";
  static singular: string = "Pheasant";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Pheasant);
  }
}
beings.push(Pheasant);

export class Raven extends Bird {
  static plural: string = "Ravens";
  static singular: string = "Raven";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Raven);
  }
}
beings.push(Raven);

export class Insect extends Animal {
  static plural: string = "Insects";
  static singular: string = "Insect";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Insect);
  }
}
beings.push(Insect);

export class Snake extends Animal {
  static plural: string = "Snakes";
  static singular: string = "Snake";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Snake);
  }
}
beings.push(Snake);

export class Anaconda extends Snake {
  static plural: string = "";
  static singular: string = "";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Anaconda);
  }
}
beings.push(Anaconda);

export class RatSnake extends Snake {
  static plural: string = "Rat Snakes";
  static singular: string = "Rat Snake";
  static description: string = "";

  constructor() {
	super();
	this.types.push(RatSnake);
  }
}
beings.push(RatSnake);

export class RattleSnake extends Snake {
  static plural: string = "Rattle Snakes";
  static singular: string = "Rattle Snake";
  static description: string = "";

  constructor() {
	super();
	this.types.push(RattleSnake);
  }
}
beings.push(RattleSnake);

export class Fox extends Animal {
  static plural: string = "Foxes";
  static singular: string = "Fox";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Fox);
  }
}
beings.push(Fox);

export class ArticFox extends Fox {
  static plural: string = "Artic Foxes";
  static singular: string = "Artic Fox";
  static description: string = "";

  constructor() {
	super();
	this.types.push(ArticFox);
  }
}
beings.push(ArticFox);

export class Baboon extends Animal {
  static plural: string = "";
  static singular: string = "";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Baboon);
  }
}
beings.push(Baboon);

export class Ape extends Animal {
  static plural: string = "Apes";
  static singular: string = "Ape";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Ape);
  }
}
beings.push(Ape);

export class Badger extends Animal {
  static plural: string = "Badgers";
  static singular: string = "Badger";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Badger);
  }
}
beings.push(Badger);

export class Bat extends Animal {
  static plural: string = "Bats";
  static singular: string = "Bat";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Bat);
  }
}
beings.push(Bat);

export class Bear extends Animal {
  static plural: string = "Bears";
  static singular: string = "Bear";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Bear);
  }
}
beings.push(Bear);

export class BlackBear extends Bear {
  static plural: string = "Black Bears";
  static singular: string = "Black Bear";
  static description: string = "";

  constructor() {
	super();
	this.types.push(BlackBear);
  }
}
beings.push(BlackBear);

export class Grizzly extends Bear {
  static plural: string = "Grizzlies";
  static singular: string = "Grizzly";
  static description: string = "";

  constructor() {
	super();
	this.types.push(Grizzly);
  }
}
beings.push(Grizzly);

export class PolarBear extends Bear {
  static plural: string = "Polar Bears";
  static singular: string = "Polar Bear";
  static description: string = "";

  constructor() {
	super();
	this.types.push(PolarBear);
  }
}
beings.push(PolarBear);
