// ============================================================================
// Language: TypeScript Xtended
// Path: ts\beings.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

const enum Gender {
	Male = "Male",
	Female = "Female",
	None = "None",
	Other = "Other"
}

const enum Rarity {
	Common = "Common",
	Uncommon = "Uncommon",
	Rare = "Rare",
	Exotic = "Exoctic"
}


export class Being {
	name: string;
	gender: Gender;
	membersOnly: Boolean = false;
	plural: string = "Beings";
	singular: string = "Being";
	static readonly description: string = "A living thing including plants, animals, fungi, and Gods.";
	constructor (name: string, gender: Gender) {
		this.name = name;
		this.gender = gender;
	}
}

export class Humanoid extends Being {
	hasBackpack: Boolean;
	description: string;
	plural: string = "Humanoids";
	singular: string = "Humanoid";
	static readonly description: string = "Intelligent and bipedal.";
	constructor (name: string, gender: Gender, description: string) {
		super(name, gender);
		this.description = description;
	}
}

export class Dwarf extends Humanoid {
	rarity: Rarity = Rarity.Common;
	static readonly playable: Boolean = true;
	plural: string = "Dwarves";
	singular: string = "Dwarf";
	static readonly description: string = "Short of stature, short of temper, dwarves enjoy alcohol a little too much and are mostly geologists.";
}

export class Elf extends Humanoid {
	rarity: Rarity = Rarity.Common;
	static readonly playable: Boolean = true;
	plural: string = "Elves";
	singular: string = "Elf";
	static readonly description: string = "Tall, elegant, and haughty, elves outlive all other humanoid races and create magnificent architecture and art.";
}

export class Gnome extends Humanoid {
	rarity: Rarity = Rarity.Uncommon;
	static readonly playable: Boolean = true;
	plural: string = "Gnomes";
	singular: string = "Gnome";
	static readonly description: string = "The shortest of the humanoids, gnomes prefer animal companions over other humanoid races.";
}

export class Halfling extends Humanoid {
	rarity: Rarity = Rarity.Uncommon;
	static readonly playable: Boolean = true;
	plural: string = "Halflings";
	singular: string = "Halfling";
	static readonly description: string = "Halflings are so awkward they end up having the best luck, or, so it seems. They never seem to fit in though.";
}

export class Human extends Humanoid {
	rarity: Rarity = Rarity.Common;
	static readonly playable: Boolean = true;
	plural: string = "Humans";
	singular: string = "Human";
	static readonly description: string = "Pride, Honor, Territory, Ownership: there is rarely anything else on the mind of man";
}

export class Orc extends Humanoid {
	rarity: Rarity = Rarity.Common;
	static readonly playable: Boolean = true;
	plural: string = "Orcs";
	singular: string = "Orc";
	static readonly description: string = "Ugly, brutish, and war-hungry, there is nothing more important then clan and family to an orc.";
}

export class Satyr extends Humanoid {
	rarity: Rarity = Rarity.Exotic;
	static readonly playable: Boolean = true;
	plural: string = "Satyrs";
	singular: string = "Satyr";
	static readonly description: string = "Torso of man, legs and horns of a goat, satyrs are often tricksters or harlots";
}

export class Goliath extends Humanoid {
	rarity: Rarity = Rarity.Rare;
	static readonly playable: Boolean = true;
	plural: string = "Goliaths";
	singular: string = "Goliath";
	static readonly description: string = "The largest of the humanoids. Though clan-like, and brutish like orcs, goliaths are much more peaceful, and less organized.";
}

export class Felix extends Humanoid {
	rarity: Rarity = Rarity.Rare;
	static readonly playable: Boolean = true;
	plural: string = "Felideax";
	singular: string = "Felix";
	static readonly description: string= "Standing on their hind legs, these big cats have integrated well into humanoids' world.";
}

export class Mixedblood extends Humanoid {
	rarity: Rarity = Rarity.Uncommon;
	static readonly playable: Boolean = true;
	plural: string = "Mixedbloods";
	singular: string = "Mixedblood";
	static readonly description: string= "Infertile, and often asexual, mixedblood describes any half breed between two humanoid races.";
}

export class Merfolk extends Humanoid {
	plural: string = "Mermen";
	singular: string = "Merfolk";
	static readonly description: string = "Humanoid torso with the lower body of a fish, these people can breath underwater or above";
}

export class Lizardfolk extends Humanoid {
	plural: string = "Lizardfolk";
	singular: string = "Lizardi";
	static readonly description: string = "Starting as lizardpoles, then crawling on four legs sansclothes until midlife, these creatures lack intelligence so are barely humanoid.";
}

export class Troll extends Humanoid {
	plural: string = "Trolls";
	singular: string = "Troll";
	static readonly description: string = "Strong, hardy, but lacking intelligence trolls tend to live alone.";
}

export class Goblin extends Humanoid {
	plural: string = "Goblins";
	singular: string = "Goblin";
	static readonly description: string = "Some think them cute, others think they are hideous, either way, better watch your gold while goblins are around!";
}

export class God extends Being {
	plural: string = "Gods";
	singular: string = "God";
	static readonly description: string = "Immortal beings that interact with the world through their followers rather then with a body of their own";
}

export class Djin extends Being {
	plural: string = "Djins";
	singular: string = "Djin";
	static readonly description: string = "Djins are a manifestation of pure Mystic Force. Powerful, Ephemeral, Tricksters.";
}

export class Imp extends Being {
	plural: string = "Imps";
	singular: string = "Imp";
	static readonly description: string = "Small, fiendish, impudient creatures with mild magical abilities";
}

export class Ghost extends Being {
	plural: string = "Ghosts";
	singular: string = "Ghost";
	static readonly description: string = "A soul dettached from a body. May be seen around the world if they get lost on their way to Styx";
}

export class Valkyrie extends Being {
	plural: string = "Valkyries";
	singular: string = "Valkry";
	static readonly description: string;
}

export class Fairy extends Being {
	plural: string = "Fairies";
	singular: string = "Fairy";
	static readonly description: string;
}

export class Leprechaun extends Fairy {
	plural: string = "Leprechauns";
	singular: string = "Leprechaun";
	static readonly description: string;
}

export class Kobold extends Fairy {
	plural: string = "Kobolds";
	singular: string = "Kobold";
	static readonly description: string;
}

export class Pixie extends Fairy {
	plural: string = "Pixies";
	singular: string = "Pixie";
	static readonly description: string;
}

export class Kitsune extends Fairy {
	plural: string = "Kitsune";
	singular: string = "Kitsune";
	static readonly description: string;
}

export class Sphinx extends Being {
	plural: string = "Sphinx";
	singular: string = "Sphinx";
	static readonly description: string;
}

export class Monster extends Being {
	plural: string = "Monsters";
	singular: string = "Monster";
	static readonly description: string;
}

export class Minotaur extends Monster {
	plural: string = "Minotaurs";
	singular: string = "Minotaur";
	static readonly description: string;
}

export class Hydra extends Monster {
	plural: string = "Hydra";
	singular: string = "Hydra";
	static readonly description: string;
}

export class Banshee extends Monster {
	plural: string = "Banshee";
	singular: string = "Banshee";
	static readonly description: string;
}

export class Animal extends Being {
	plural: string = "Animals";
	singular: string = "Animal";
	static readonly description: string;
}

export class Unicorn extends Animal {
	plural: string = "Unicorn";
	singular: string = "Unicorn";
	static readonly description: string;
}

export class Phoenix extends Animal {
	plural: string = "Phoneix";
	singular: string = "Phoneix";
	static readonly description: string;
}

export class Dragon extends Animal {
	plural: string = "Dragons";
	singular: string = "Dragon";
	static readonly description: string;
}

export class Gryphon extends Animal {
	plural: string = "Gryphon";
	singular: string = "Gryphon";
	static readonly description: string;
}

export class Elephant extends Animal {
	plural: string = "Elphants";
	singular: string = "Elephant";
	static readonly description: string;
}

export class Lizardmount extends Animal {
	plural: string = "Lizardmounts";
	singular: string = "Lizardmount";
	static readonly description: string;
}

export class Ostrich extends Animal {
	plural: string = "Ostriches";
	singular: string = "Ostrich";
	static readonly description: string;
}

export class Pet extends Animal {
	plural: string = "Pets";
	singular: string = "Pet";
	static readonly description: string;
	canLeash: Boolean;
}

export class Cat extends Pet {
	plural: string = "Cats";
	singular: string = "Cat";
	static readonly description: string;
}

export class Dog extends Pet {
	plural: string = "Dogs";
	singular: string = "Dog";
	static readonly description: string;
}

export class Chameleon extends Pet {
	plural: string = "Chameleon";
	singular: string = "Chameleon";
	static readonly description: string;
}

export class Parrot extends Pet {
	plural: string = "Parrots";
	singular: string = "Parrot";
	static readonly description: string;
}

export class Ferret extends Pet {
	plural: string = "Ferrets";
	singular: string = "Ferret";
	static readonly description: string;
}

export class Songbird extends Pet {
	plural: string = "Songbirds";
	singular: string = "Songbird";
	static readonly description: string;
}

export class Rabbit extends Pet {
	plural: string = "Rabbits";
	singular: string = "Rabbit";
	static readonly description: string;
}

export class Mouse extends Pet {
	plural: string = "Mice";
	singular: string = "Mouse";
	static readonly description: string;
}

export class Hedgehog extends Pet {
	plural: string = "Hedgehogs";
	singular: string = "Hedgehog";
	static readonly description: string;
}

export class FarmAnimal extends Animal {
	plural: string = "Farm Animals";
	singular: string = "Farm Animal";
	static readonly description: string;
}

export class Horse extends FarmAnimal {
	plural: string = "Horses";
	singular: string = "Horse";
	static readonly description: string;
}

export class Llama extends FarmAnimal {
	plural: string = "Llamas";
	singular: string = "Llama";
	static readonly description: string;
}

export class Donkey extends FarmAnimal {
	plural: string = "Donkeys";
	singular: string = "Donkey";
	static readonly description: string;
}

export class Ox extends FarmAnimal {
	plural: string = "Oxen";
	singular: string = "Ox";
	static readonly description: string;
}

export class Fish extends Animal {
	plural: string = "Fish";
	singular: string = "Fish";
	static readonly description: string;
}

export class Adder extends Fish {
	plural: string = "Adders";
	singular: string = "Adder";
	static readonly description: string = "";
}

export class Barracuda extends Fish {
	plural: string = "Barracuda";
	singular: string = "Barracudas";
	static readonly description: string = "";
}

export class Carp extends Fish {
	plural: string = "Carp";
	singular: string = "Carp";
	static readonly description: string = "";
}

export class Catfish extends Fish {
	plural: string = "Catfish";
	singular: string = "Catfish";
	static readonly description: string = "";
}

export class Crayfish extends Fish {
	plural: string = "Crayfish";
	singular: string = "Crayfish";
	static readonly description: string = "";
}

export class Eel extends Fish {
	plural: string = "Eels";
	singular: string = "Eel";
	static readonly description: string = "";
}

export class Jewelfish extends Fish {
	plural: string = "Jewelfish";
	singular: string = "Jewelfish";
	static readonly description: string = "";
}

export class Silverling extends Fish {
	plural: string = "Silverlings";
	singular: string = "Silverling";
	static readonly description: string = "";
}

export class Swordfish extends Fish {
	plural: string = "Swordfish";
	singular: string = "Swordfish";
	static readonly description: string = "";
}

export class Trout extends Fish {
	plural: string = "Trout";
	singular: string = "Trout";
	static readonly description: string = "";
}

export class RainbowTrout extends Trout {
	plural: string = "Rainbow Trout";
	singular: string = "Rainbow Trout";
	static readonly description: string = "";
}

export class Salmon extends Fish {
	plural: string = "Salmon";
	singular: string = "Salmon";
	static readonly description: string = "";
}

export class Cod extends Fish {
	plural: string = "Cod";
	singular: string = "Cod";
	static readonly description: string = "";
}

export class Mahi extends Fish {
	plural: string = "Mahi-Mahi";
	singular: string = "Mahi-Mahi";
	static readonly description: string = "";
}

export class Jellyfish extends Fish {
	plural: string = "Jellyfish";
	singular: string = "Jellyfish";
	static readonly description: string = "";
}

export class Anchovy extends Fish {
	plural: string = "Anchovies";
	singular: string = "Anchovy";
	static readonly description: string = "";
}

export class Barrelfish extends Fish {
	plural: string = "Barrelfish";
	singular: string = "Barrelfsih";
	static readonly description: string = "";
}

export class Octopus extends Fish {
	plural: string = "Octopuses";
	singular: string = "Octopus";
	static readonly description: string = "";
}

export class Dolphin extends Fish {
	plural: string = "Dolphins";
	singular: string = "Dolphin";
	static readonly description: string = "";
}

export class Whale extends Fish {
	plural: string = "Whales";
	singular: string = "Whale";
	static readonly description: string = "";
}

export class Squid extends Fish {
	plural: string = "Squids";
	singular: string = "Squid";
	static readonly description: string = "";
}

export class Anglerfish extends Fish {
	plural: string = "Anglerfish";
	singular: string = "Anglerfish";
	static readonly description: string = "";
}

export class SandDollar extends Fish {
	plural: string = "Sand Dollars";
	singular: string = "Sand Dollar";
	static readonly description: string = "";
}

export class Starfish extends Fish {
	plural: string = "Starfish";
	singular: string = "Starfish";
	static readonly description: string = "";
}

export class SeaUrchin extends Fish {
	plural: string = "Sea Urchins";
	singular: string = "Sea Urchin";
	static readonly description: string = "";
}

export class Lobster extends Fish {
	plural: string = "Lobsters";
	singular: string = "Lobster";
	static readonly description: string = "";
}

export class Clam extends Fish {
	plural: string = "Clams";
	singular: string = "Clam";
	static readonly description: string = "";
}

export class Crab extends Animal {
	plural: string = "Crabs";
	singular: string = "Crab";
	static readonly description: string = "";
}

export class Shrimp extends Fish {
	plural: string = "Shrimp";
	singular: string = "Shrimp";
	static readonly description: string = "";
}

export class Seal extends Animal {
	plural: string = "Seals";
	singular: string = "Seal";
	static readonly description: string = "";
}

export class Shark extends Fish {
	plural: string = "Sharks";
	singular: string = "Shark";
	static readonly description: string = "";
}

export class Walrus extends Animal {
	plural: string = "Walruses";
	singular: string = "Walrus";
	static readonly description: string = "";
}

export class Ray extends Animal {
	plural: string = "Rays";
	singular: string = "Ray";
	static readonly description: string = "";
}

export class Bird extends Animal {
	plural: string = "Birds";
	singular: string = "Bird";
	static readonly description: string = "";
}

export class Condor extends Bird {
	plural: string = "Condors";
	singular: string = "Condor";
	static readonly description: string = "";
}

export class Dove extends Bird {
	plural: string = "Doves";
	singular: string = "Dove";
	static readonly description: string = "";
}

export class Eagle extends Bird {
	plural: string = "Eagles";
	singular: string = "Eagle";
	static readonly description: string = "";
}

export class Hawk extends Bird {
	plural: string = "Hawks";
	singular: string = "Hawk";
	static readonly description: string = "";
}

export class Owl extends Bird {
	plural: string = "Owls";
	singular: string = "Owl";
	static readonly description: string = "";
}

export class Pheasant extends Bird {
	plural: string = "Pheasants";
	singular: string = "Pheasant";
	static readonly description: string = "";
}

export class Raven extends Bird {
	plural: string = "Ravens";
	singular: string = "Raven";
	static readonly description: string = "";
}

export class Insect extends Animal {
	plural: string = "Insects";
	singular: string = "Insect";
	static readonly description: string = "";
}

export class Snake extends Animal {
	plural: string = "Snakes";
	singular: string = "Snake";
	static readonly description: string = "";
}

export class Anaconda extends Snake {
	plural: string = "";
	singular: string = "";
	static readonly description: string = "";
}

export class RatSnake extends Snake {
	plural: string = "Rat Snakes";
	singular: string = "Rat Snake";
	static readonly description: string = "";
}

export class RattleSnake extends Snake {
	plural: string = "Rattle Snakes";
	singular: string = "Rattle Snake";
	static readonly description: string = "";
}

export class Fox extends Animal {
	plural: string = "Foxes";
	singular: string = "Fox";
	static readonly description: string = "";
}

export class ArticFox extends Fox {
	plural: string = "Artic Foxes";
	singular: string = "Artic Fox";
	static readonly description: string = "";
}

export class Baboon extends Animal {
	plural: string = "";
	singular: string = "";
	static readonly description: string = "";
}

export class Ape extends Animal {
	plural: string = "Apes";
	singular: string = "Ape";
	static readonly description: string = "";
}

export class Badger extends Animal {
	plural: string = "Badgers";
	singular: string = "Badger";
	static readonly description: string = "";
}

export class Bat extends Animal {
	plural: string = "Bats";
	singular: string = "Bat";
	static readonly description: string = "";
}

export class Bear extends Animal {
	plural: string = "Bears";
	singular: string = "Bear";
	static readonly description: string = "";
}

export class BlackBear extends Bear {
	plural: string = "Black Bears";
	singular: string = "Black Bear";
	static readonly description: string = "";
}

export class Grizzly extends Bear {
	plural: string = "Grizzlies";
	singular: string = "Grizzly";
	static readonly description: string = "";
}

export class PolarBear extends Bear {
	plural: string = "Polar Bears";
	singular: string = "Polar Bear";
	static readonly description: string = "";
}

