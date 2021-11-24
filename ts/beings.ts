// ============================================================================
// Language: TypeScript
// Path: ts\beings.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

type Gender = "Male" | "Female" | "None" | "Other";
type Rarity = "Common" | "Uncommon" | "Rare" | "Exotic";

export class Being {
	static readonly singular: string = "Being";
	static readonly plural: string = "Beings";
	static readonly description: string =
		"A living thing including plants, animals, fungi, and Gods.";

	name: string;
	gender: Gender;
	membersOnly: Boolean;
	category: string[];

	constructor(name: string, gender: Gender) {
		this.name = name;
		this.gender = gender;
		this.membersOnly = false;
		this.category.push("Being");
	}
}

export class Humanoid extends Being {
	static readonly singular: string = "Humanoid";
	static readonly plural: string = "Humanoids";
	static readonly description: string = "Intelligent and bipedal.";

	hasBackpack: Boolean;
	description: string;
	rarity: Rarity;

	constructor(name: string, gender: Gender, description: string) {
		super(name, gender);
		this.description = description;
		this.hasBackpack = false;
		this.category.push("Humanoid");
	}
}

export var playableRaces: Humanoid[];

export class Dwarf extends Humanoid {
	static readonly singular: string = "Dwarf";
	static readonly plural: string = "Dwarves";
	static readonly description: string =
		"Short of stature and short of temper, dwarves enjoy alcohol a little too much and are mostly geologists.";

	constructor(name: string, gender: Gender, description: string) {
		super(name, gender, description);
		this.rarity = "Common";
		this.category.push("Dwarf");
	}
}
export var dwarf_prototype = new Dwarf(
	Dwarf.singular,
	"None",
	Dwarf.description
);
playableRaces.push(dwarf_prototype);

export class Elf extends Humanoid {
	static readonly singular: string = "Elf";
	static readonly plural: string = "Elves";
	static readonly description: string =
		"Tall, elegant, and haughty, elves outlive all other humanoid races and create magnificent architecture and art.";
	constructor(name: string, gender: Gender, description: string) {
		super(name, gender, description);
		this.rarity = "Common";
		this.category.push("Elf");
	}
}
export var elf_prototype = new Elf(Elf.singular, "None", Elf.description);
playableRaces.push(elf_prototype);

export class Gnome extends Humanoid {
	static readonly singular: string = "Gnome";
	static readonly plural: string = "Gnomes";
	static readonly description: string =
		"The shortest of the humanoids, gnomes prefer animal companions over other humanoid races.";

	constructor(name: string, gender: Gender, description: string) {
		super(name, gender, description);
		this.rarity = "Uncommon";
		this.category.push("Gnome");
	}
}
export var gnome_prototype = new Gnome(
	Gnome.singular,
	"None",
	Gnome.description
);
playableRaces.push(gnome_prototype);

export class Halfling extends Humanoid {
	static readonly singular: string = "Halfling";
	static readonly plural: string = "Halflings";
	static readonly description: string =
		"Halflings are so awkward they end up having the best luck, or, so it seems. They never seem to fit in though.";

	constructor(name: string, gender: Gender, description: string) {
		super(name, gender, description);
		this.rarity = "Uncommon";
		this.category.push("Halfling");
	}
}
export var halfling_prototype = new Halfling(
	Halfling.singular,
	"None",
	Halfling.description
);
playableRaces.push(halfling_prototype);

export class Human extends Humanoid {
	static readonly singular: string = "Human";
	static readonly plural: string = "Humans";
	static readonly description: string =
		"Pride, Honor, Territory, Ownership: there is rarely anything else on the mind of man";
	constructor(name: string, gender: Gender, description: string) {
		super(name, gender, description);
		this.rarity = "Common";
		this.category.push("Human");
	}
}
export var human_prototype = new Human(
	Human.singular,
	"None",
	Human.description
);
playableRaces.push(human_prototype);

export class Orc extends Humanoid {
	static readonly singular: string = "Orc";
	static readonly plural: string = "Orcs";
	static readonly description: string =
		"Ugly, brutish, and war-hungry, there is nothing more important then clan and family to an orc.";

	constructor(name: string, gender: Gender, description: string) {
		super(name, gender, description);
		this.rarity = "Common";
		this.category.push("Orc");
	}
}
export var orc_prototype = new Orc(Orc.singular, "None", Orc.description);
playableRaces.push(orc_prototype);

export class Satyr extends Humanoid {
	rarity: Rarity = "Exotic";
	static readonly playable: Boolean = true;
	static readonly plural: string = "Satyrs";
	static readonly singular: string = "Satyr";
	static readonly description: string =
		"Torso of man, legs and horns of a goat, satyrs are often tricksters or harlots";
}

export class Goliath extends Humanoid {
	rarity: Rarity = "Rare";
	static readonly playable: Boolean = true;
	static readonly plural: string = "Goliaths";
	static readonly singular: string = "Goliath";
	static readonly description: string =
		"The largest of the humanoids. Though clan-like, and brutish like orcs, goliaths are much more peaceful, and less organized.";
}

export class Felix extends Humanoid {
	rarity: Rarity = "Rare";
	static readonly playable: Boolean = true;
	static readonly plural: string = "Felideax";
	static readonly singular: string = "Felix";
	static readonly description: string =
		"Standing on their hind legs, these big cats have integrated well into humanoids' world.";
}

export class Mixedblood extends Humanoid {
	rarity: Rarity = "Uncommon";
	static readonly playable: Boolean = true;
	static readonly plural: string = "Mixedbloods";
	static readonly singular: string = "Mixedblood";
	static readonly description: string =
		"Infertile, and often asexual, mixedblood describes any half breed between two humanoid races.";
}

export class Merfolk extends Humanoid {
	static readonly plural: string = "Mermen";
	static readonly singular: string = "Merfolk";
	static readonly description: string =
		"Humanoid torso with the lower body of a fish, these people can breath underwater or above";
}

export class Lizardfolk extends Humanoid {
	static readonly plural: string = "Lizardfolk";
	static readonly singular: string = "Lizardi";
	static readonly description: string =
		"Lizardfolk are slimy, gangly and not to be trusted.";
}

export class Troll extends Humanoid {
	static readonly plural: string = "Trolls";
	static readonly singular: string = "Troll";
	static readonly description: string =
		"Strong and hardy, but lacking intelligence, trolls tend to live alone.";
}

export class Goblin extends Humanoid {
	static readonly plural: string = "Goblins";
	static readonly singular: string = "Goblin";
	static readonly description: string =
		"Some think them cute, others think they are hideous, either way, better watch your gold while goblins are around!";
}

export class God extends Being {
	static readonly plural: string = "Gods";
	static readonly singular: string = "God";
	static readonly description: string =
		"Immortal beings that interact with the world through their followers rather then with a body of their own";
}

export class Djin extends Being {
	static readonly plural: string = "Djins";
	static readonly singular: string = "Djin";
	static readonly description: string =
		"Djins are a manifestation of pure Mystic Force. Powerful, Ephemeral, Tricksters.";
}

export class Imp extends Being {
	static readonly plural: string = "Imps";
	static readonly singular: string = "Imp";
	static readonly description: string =
		"Small, fiendish, impudent creatures with mild magical abilities";
}

export class Ghost extends Being {
	static readonly plural: string = "Ghosts";
	static readonly singular: string = "Ghost";
	static readonly description: string =
		"A soul dettached from a body. May be seen around the world if they get lost on their way to Styx";
}

export class Valkyrie extends Being {
	static readonly plural: string = "Valkyries";
	static readonly singular: string = "Valkry";
	static readonly description: string;
}

export class Fairy extends Being {
	static readonly plural: string = "Fairies";
	static readonly singular: string = "Fairy";
	static readonly description: string;
}

export class Leprechaun extends Fairy {
	static readonly plural: string = "Leprechauns";
	static readonly singular: string = "Leprechaun";
	static readonly description: string;
}

export class Kobold extends Fairy {
	static readonly plural: string = "Kobolds";
	static readonly singular: string = "Kobold";
	static readonly description: string;
}

export class Pixie extends Fairy {
	static readonly plural: string = "Pixies";
	static readonly singular: string = "Pixie";
	static readonly description: string;
}

export class Kitsune extends Fairy {
	static readonly plural: string = "Kitsune";
	static readonly singular: string = "Kitsune";
	static readonly description: string;
}

export class Sphinx extends Being {
	static readonly plural: string = "Sphinx";
	static readonly singular: string = "Sphinx";
	static readonly description: string;
}

export class Monster extends Being {
	static readonly plural: string = "Monsters";
	static readonly singular: string = "Monster";
	static readonly description: string;
}

export class Minotaur extends Monster {
	static readonly plural: string = "Minotaurs";
	static readonly singular: string = "Minotaur";
	static readonly description: string;
}

export class Hydra extends Monster {
	static readonly plural: string = "Hydra";
	static readonly singular: string = "Hydra";
	static readonly description: string;
}

export class Banshee extends Monster {
	static readonly plural: string = "Banshee";
	static readonly singular: string = "Banshee";
	static readonly description: string;
}

export class Animal extends Being {
	static readonly plural: string = "Animals";
	static readonly singular: string = "Animal";
	static readonly description: string;
}

export class Unicorn extends Animal {
	static readonly plural: string = "Unicorn";
	static readonly singular: string = "Unicorn";
	static readonly description: string;
}

export class Phoenix extends Animal {
	static readonly plural: string = "Phoneix";
	static readonly singular: string = "Phoneix";
	static readonly description: string;
}

export class Dragon extends Animal {
	static readonly plural: string = "Dragons";
	static readonly singular: string = "Dragon";
	static readonly description: string;
}

export class Gryphon extends Animal {
	static readonly plural: string = "Gryphon";
	static readonly singular: string = "Gryphon";
	static readonly description: string;
}

export class Elephant extends Animal {
	static readonly plural: string = "Elphants";
	static readonly singular: string = "Elephant";
	static readonly description: string;
}

export class Lizardmount extends Animal {
	static readonly plural: string = "Lizardmounts";
	static readonly singular: string = "Lizardmount";
	static readonly description: string;
}

export class Ostrich extends Animal {
	static readonly plural: string = "Ostriches";
	static readonly singular: string = "Ostrich";
	static readonly description: string;
}

export class Pet extends Animal {
	static readonly plural: string = "Pets";
	static readonly singular: string = "Pet";
	static readonly description: string;
	canLeash: Boolean;
}

export class Cat extends Pet {
	static readonly plural: string = "Cats";
	static readonly singular: string = "Cat";
	static readonly description: string;
}

export class Dog extends Pet {
	static readonly plural: string = "Dogs";
	static readonly singular: string = "Dog";
	static readonly description: string;
}

export class Chameleon extends Pet {
	static readonly plural: string = "Chameleon";
	static readonly singular: string = "Chameleon";
	static readonly description: string;
}

export class Parrot extends Pet {
	static readonly plural: string = "Parrots";
	static readonly singular: string = "Parrot";
	static readonly description: string;
}

export class Ferret extends Pet {
	static readonly plural: string = "Ferrets";
	static readonly singular: string = "Ferret";
	static readonly description: string;
}

export class Songbird extends Pet {
	static readonly plural: string = "Songbirds";
	static readonly singular: string = "Songbird";
	static readonly description: string;
}

export class Rabbit extends Pet {
	static readonly plural: string = "Rabbits";
	static readonly singular: string = "Rabbit";
	static readonly description: string;
}

export class Mouse extends Pet {
	static readonly plural: string = "Mice";
	static readonly singular: string = "Mouse";
	static readonly description: string;
}

export class Hedgehog extends Pet {
	static readonly plural: string = "Hedgehogs";
	static readonly singular: string = "Hedgehog";
	static readonly description: string;
}

export class FarmAnimal extends Animal {
	static readonly plural: string = "Farm Animals";
	static readonly singular: string = "Farm Animal";
	static readonly description: string;
}

export class Horse extends FarmAnimal {
	static readonly plural: string = "Horses";
	static readonly singular: string = "Horse";
	static readonly description: string;
}

export class Llama extends FarmAnimal {
	static readonly plural: string = "Llamas";
	static readonly singular: string = "Llama";
	static readonly description: string;
}

export class Donkey extends FarmAnimal {
	static readonly plural: string = "Donkeys";
	static readonly singular: string = "Donkey";
	static readonly description: string;
}

export class Ox extends FarmAnimal {
	static readonly plural: string = "Oxen";
	static readonly singular: string = "Ox";
	static readonly description: string;
}

export class Fish extends Animal {
	static readonly plural: string = "Fish";
	static readonly singular: string = "Fish";
	static readonly description: string;
}

export class Deer extends Animal {
	static readonly plural: string = "Deer";
	static readonly singular: string = "Deer";
	static readonly description: string;
}

export class Reindeer extends Animal {
	static readonly plural: string = "Reindeer";
	static readonly singular: string = "Reindeer";
	static readonly description: string;
}

export class Elk extends Animal {
	static readonly plural: string = "Elk";
	static readonly singular: string = "Elk";
	static readonly description: string;
}

export class Adder extends Fish {
	static readonly plural: string = "Adders";
	static readonly singular: string = "Adder";
	static readonly description: string = "";
}

export class Barracuda extends Fish {
	static readonly plural: string = "Barracuda";
	static readonly singular: string = "Barracudas";
	static readonly description: string = "";
}

export class Carp extends Fish {
	static readonly plural: string = "Carp";
	static readonly singular: string = "Carp";
	static readonly description: string = "";
}

export class Catfish extends Fish {
	static readonly plural: string = "Catfish";
	static readonly singular: string = "Catfish";
	static readonly description: string = "";
}

export class Crayfish extends Fish {
	static readonly plural: string = "Crayfish";
	static readonly singular: string = "Crayfish";
	static readonly description: string = "";
}

export class Eel extends Fish {
	static readonly plural: string = "Eels";
	static readonly singular: string = "Eel";
	static readonly description: string = "";
}

export class Jewelfish extends Fish {
	static readonly plural: string = "Jewelfish";
	static readonly singular: string = "Jewelfish";
	static readonly description: string = "";
}

export class Silverling extends Fish {
	static readonly plural: string = "Silverlings";
	static readonly singular: string = "Silverling";
	static readonly description: string = "";
}

export class Swordfish extends Fish {
	static readonly plural: string = "Swordfish";
	static readonly singular: string = "Swordfish";
	static readonly description: string = "";
}

export class Trout extends Fish {
	static readonly plural: string = "Trout";
	static readonly singular: string = "Trout";
	static readonly description: string = "";
}

export class RainbowTrout extends Trout {
	static readonly plural: string = "Rainbow Trout";
	static readonly singular: string = "Rainbow Trout";
	static readonly description: string = "";
}

export class Salmon extends Fish {
	static readonly plural: string = "Salmon";
	static readonly singular: string = "Salmon";
	static readonly description: string = "";
}

export class Cod extends Fish {
	static readonly plural: string = "Cod";
	static readonly singular: string = "Cod";
	static readonly description: string = "";
}

export class Mahi extends Fish {
	static readonly plural: string = "Mahi-Mahi";
	static readonly singular: string = "Mahi-Mahi";
	static readonly description: string = "";
}

export class Jellyfish extends Fish {
	static readonly plural: string = "Jellyfish";
	static readonly singular: string = "Jellyfish";
	static readonly description: string = "";
}

export class Anchovy extends Fish {
	static readonly plural: string = "Anchovies";
	static readonly singular: string = "Anchovy";
	static readonly description: string = "";
}

export class Barrelfish extends Fish {
	static readonly plural: string = "Barrelfish";
	static readonly singular: string = "Barrelfsih";
	static readonly description: string = "";
}

export class Octopus extends Fish {
	static readonly plural: string = "Octopuses";
	static readonly singular: string = "Octopus";
	static readonly description: string = "";
}

export class Dolphin extends Fish {
	static readonly plural: string = "Dolphins";
	static readonly singular: string = "Dolphin";
	static readonly description: string = "";
}

export class Whale extends Fish {
	static readonly plural: string = "Whales";
	static readonly singular: string = "Whale";
	static readonly description: string = "";
}

export class Squid extends Fish {
	static readonly plural: string = "Squids";
	static readonly singular: string = "Squid";
	static readonly description: string = "";
}

export class Anglerfish extends Fish {
	static readonly plural: string = "Anglerfish";
	static readonly singular: string = "Anglerfish";
	static readonly description: string = "";
}

export class SandDollar extends Fish {
	static readonly plural: string = "Sand Dollars";
	static readonly singular: string = "Sand Dollar";
	static readonly description: string = "";
}

export class Starfish extends Fish {
	static readonly plural: string = "Starfish";
	static readonly singular: string = "Starfish";
	static readonly description: string = "";
}

export class SeaUrchin extends Fish {
	static readonly plural: string = "Sea Urchins";
	static readonly singular: string = "Sea Urchin";
	static readonly description: string = "";
}

export class Lobster extends Fish {
	static readonly plural: string = "Lobsters";
	static readonly singular: string = "Lobster";
	static readonly description: string = "";
}

export class Clam extends Fish {
	static readonly plural: string = "Clams";
	static readonly singular: string = "Clam";
	static readonly description: string = "";
}

export class Crab extends Animal {
	static readonly plural: string = "Crabs";
	static readonly singular: string = "Crab";
	static readonly description: string = "";
}

export class Shrimp extends Fish {
	static readonly plural: string = "Shrimp";
	static readonly singular: string = "Shrimp";
	static readonly description: string = "";
}

export class Seal extends Animal {
	static readonly plural: string = "Seals";
	static readonly singular: string = "Seal";
	static readonly description: string = "";
}

export class Shark extends Fish {
	static readonly plural: string = "Sharks";
	static readonly singular: string = "Shark";
	static readonly description: string = "";
}

export class Walrus extends Animal {
	static readonly plural: string = "Walruses";
	static readonly singular: string = "Walrus";
	static readonly description: string = "";
}

export class Ray extends Animal {
	static readonly plural: string = "Rays";
	static readonly singular: string = "Ray";
	static readonly description: string = "";
}

export class Bird extends Animal {
	static readonly plural: string = "Birds";
	static readonly singular: string = "Bird";
	static readonly description: string = "";
}

export class Condor extends Bird {
	static readonly plural: string = "Condors";
	static readonly singular: string = "Condor";
	static readonly description: string = "";
}

export class Dove extends Bird {
	static readonly plural: string = "Doves";
	static readonly singular: string = "Dove";
	static readonly description: string = "";
}

export class Eagle extends Bird {
	static readonly plural: string = "Eagles";
	static readonly singular: string = "Eagle";
	static readonly description: string = "";
}

export class Hawk extends Bird {
	static readonly plural: string = "Hawks";
	static readonly singular: string = "Hawk";
	static readonly description: string = "";
}

export class Owl extends Bird {
	static readonly plural: string = "Owls";
	static readonly singular: string = "Owl";
	static readonly description: string = "";
}

export class Pheasant extends Bird {
	static readonly plural: string = "Pheasants";
	static readonly singular: string = "Pheasant";
	static readonly description: string = "";
}

export class Raven extends Bird {
	static readonly plural: string = "Ravens";
	static readonly singular: string = "Raven";
	static readonly description: string = "";
}

export class Insect extends Animal {
	static readonly plural: string = "Insects";
	static readonly singular: string = "Insect";
	static readonly description: string = "";
}

export class Snake extends Animal {
	static readonly plural: string = "Snakes";
	static readonly singular: string = "Snake";
	static readonly description: string = "";
}

export class Anaconda extends Snake {
	static readonly plural: string = "";
	static readonly singular: string = "";
	static readonly description: string = "";
}

export class RatSnake extends Snake {
	static readonly plural: string = "Rat Snakes";
	static readonly singular: string = "Rat Snake";
	static readonly description: string = "";
}

export class RattleSnake extends Snake {
	static readonly plural: string = "Rattle Snakes";
	static readonly singular: string = "Rattle Snake";
	static readonly description: string = "";
}

export class Fox extends Animal {
	static readonly plural: string = "Foxes";
	static readonly singular: string = "Fox";
	static readonly description: string = "";
}

export class ArticFox extends Fox {
	static readonly plural: string = "Artic Foxes";
	static readonly singular: string = "Artic Fox";
	static readonly description: string = "";
}

export class Baboon extends Animal {
	static readonly plural: string = "";
	static readonly singular: string = "";
	static readonly description: string = "";
}

export class Ape extends Animal {
	static readonly plural: string = "Apes";
	static readonly singular: string = "Ape";
	static readonly description: string = "";
}

export class Badger extends Animal {
	static readonly plural: string = "Badgers";
	static readonly singular: string = "Badger";
	static readonly description: string = "";
}

export class Bat extends Animal {
	static readonly plural: string = "Bats";
	static readonly singular: string = "Bat";
	static readonly description: string = "";
}

export class Bear extends Animal {
	static readonly plural: string = "Bears";
	static readonly singular: string = "Bear";
	static readonly description: string = "";
}

export class BlackBear extends Bear {
	static readonly plural: string = "Black Bears";
	static readonly singular: string = "Black Bear";
	static readonly description: string = "";
}

export class Grizzly extends Bear {
	static readonly plural: string = "Grizzlies";
	static readonly singular: string = "Grizzly";
	static readonly description: string = "";
}

export class PolarBear extends Bear {
	static readonly plural: string = "Polar Bears";
	static readonly singular: string = "Polar Bear";
	static readonly description: string = "";
}
