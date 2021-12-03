// ============================================================================
// Language: TypeScript
// Path: ts\game\items.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { GameClass, GameMechanic, Source } from './types';

export type ItemType = GameClass & {item:null}

export class Item extends GameMechanic {
	static readonly item:null;
	static singular: string = "Item";
	static plural: string = "Items";
	static description: string =
		"An Item is something that a player can take with them and use.";
	static sources: Source[] = []; // where a user can obtain the item
	static membersOnly: boolean = false;
	
	quality: number = 0; // (0-100)
	mass: number = 0; // kilograms

	getInfo(qty: number): string {
		var name = this.getName(qty);
		switch (qty) {
			case 0:
				return `No ${name}`;
			case 1:
				if (this.getQuality() === "average") {
					return `An ${this.getQuality()} ${name}`;
				} else {
					return `A ${this.getQuality()} ${name}`;
				}
			default:
				return `Some ${this.getQuality()} ${name}`;
		}
	}

	getQuality() {
		if (this.quality < 30) {
			return "terrible";
		} else if (this.quality < 60) {
			return "poor";
		} else if (this.quality < 70) {
			return "mediocre";
		} else if (this.quality < 80) {
			return "average";
		} else if (this.quality < 90) {
			return "good";
		} else if (this.quality < 97.5) {
			return "great";
		} else if (this.quality < 100) {
			return "superb";
		} else if (this.quality >= 100) {
			return "perfect";
		} else {
			return "legendary";
		}
	}
}


// // Crafting

// //Weapons
// var Hammer = new Item("Hammer", "A hammer that can be used to smash things.");
export class Hammer extends Item {
	static singular = "Hammer";
	static plural = "Hammers";
	static description = "A hammer that can be used to smash things.";
}
// var Pick = new Item("Pick", "A pick that can be used to mine things.");
export class Pick extends Item {
	static singular = "Pick";
	static plural = "Picks";
	static description = "A pick that can be used to mine things.";
}
// var Axe = new Item("Axe", "An axe that can be used to chop things.");
export class Axe extends Item {
	static singular = "Axe";
	static plural = "Axes";
	static description = "An axe that can be used to chop things.";
}
// var Saw = new Item("Saw", "A saw that can be used to cut things.");
export class Saw extends Item {
	static singular = "Saw";
	static plural = "Saws";
	static description = "A saw that can be used to cut things.";
}
// var Knife = new Item("Knife", "A knife that can be used to cut things.");
export class Knife extends Item {
	static singular = "Knife";
	static plural = "Knives";
	static description = "A knife that can be used to cut things.";
}
// var Sword = new Item("Sword", "A sword that can be used to cut things.");
export class Sword extends Item {
	static singular = "Sword";
	static plural = "Swords";
	static description = "A sword that can be used to cut things.";
}
// var Mace = new Item("Mace", "A mace that can be used to smash things.");
export class Mace extends Item {
	static singular = "Mace";
	static plural = "Maces";
	static description = "A mace that can be used to smash things.";
}
// var Spear = new Item("Spear", "A spear that can be used to smash things.");
export class Spear extends Item {
	static singular = "Spear";
	static plural = "Spears";
	static description = "A spear that can be used to smash things.";
}
// var Bow = new Item("Bow", "A bow that can be used to shoot things.");
export class Bow extends Item {
	static singular = "Bow";
	static plural = "Bows";
	static description = "A bow that can be used to shoot things.";
}
// var Crossbow = new Item("Crossbow", "A crossbow that can be used to shoot things.");
export class Crossbow extends Item {
	static singular = "Crossbow";
	static plural = "Crossbows";
	static description = "A crossbow that can be used to shoot things.";
}

// arsenic
// azuth

//grit
//salt
//clay
//sand

////Knives
//Bronze Knife
//Iron Knife
//Steel Knife
//Mithril Knife
//Adamantite Knife
//Mystic Knife
//Butteryfly Knife
//Pairing Knife
//Chef's Knife
//Ethereal Knife

////Axes
//Bronze Axe
//Iron Axe
//Steel Axe
//Mithril Axe
//Adamantite Axe
//Mystic Axe
export type AxeType =
	| "Bronze"
	| "Iron"
	| "Steel"
	| "Mithril"
	| "Adamantite"
	| "Mystic";

////Hammers
//Bronze Hammer
//Iron Hammer
//Steel Hammer
//Mithril Hammer
//Adamantite Hammer
//Mystic Hammer
//Sledgehammer
//Silver Hammer

////Archeology
//broken pottery
//fertility statue - common artifact
//The Lionman -an ivory statue from a cave
//Bone Flute
//Bone Beads
//Bone Spearheads
//Cave Painting - common archeology location
//Stone Spearheads
//Flint Spearheads
//Ancient Stone Tools
//Collassal Heads - collection
//Funeral Masks
//Rosetta Stone - boon: learn 5 more languages
//Terracotta Army - collection
//Religious Scrolls -original copies of several religions
//Weeping Lion
//Book of Vile Creatures
//Crown of Teeth - collection
//The Mask of the Forgotten Souls
//The Mark of the Beast
//The Hand of the Chosen One
//The Eye of the Shosen One

//plow
//hoe
//watering can
//bucket
//bridle
//saddle
//saddlebag
//rope
//fertilizer
//seeds
//hay

////bait
//worms
//grubs
//crickets
//raw meat
//silverlings

////hooks
//bone hook
//wooden hook
//bronze hook
//iron hook
//steel hook
//mithril hook
//adamantite hook
//mystic hook

////fishing poles
//pine fishing pole
//deadwood fishing pole
//birch fishing pole
//cinnamon fishing pole
//banana fishing pole
//palm fishing pole
//maple fishing pole
//citrus fishing pole
//oak fishing pole
//apple fishing pole
//cherry fishing pole
//eldertree fishing pole
//willow fishing pole
//pear fishing pole
//peach fishing pole
//magic tree fishing pole
//sapient pear fishing pole
//mystic fishing pole

//fishing net

//diving gear

////Crockery
//pot
//pitcher
//bowl
//urn

//basket

////Jewelry
//ruby ring
//sapphire ring
//emerald ring
//topaz ring
//diamond ring
//amethyst ring
//opal ring
//garnet ring
//pearl ring
//onyx ring
//quartz ring
//agate ring
//jade ring

//ruby necklace
//sapphire necklace
//emerald necklace
//topaz necklace
//diamond necklace
//amethyst necklace
//opal necklace
//garnet necklace
//pearl necklace
//onyx necklace
//quartz necklace
//agate necklace
//jade necklace

//silver bracelet
//gold bracelet
//platinum bracelet

//cotton armband
//silk armband
//wool armband

//scales

////Leather
//cow hide
//deer hide
//lizard hide
//wolf hide
//bear hide
//snake hide
//dragon hide

//cow leather
//deer leather
//lizard leather
//snake leather
//dragon leather

//cow leather gloves
//deer leather gloves
//lizard leather gloves
//snake leather gloves
//dragon leather gloves

//cow leather moccasins
//deer leather moccasins
//lizard leather moccasins
//snake leather moccasins

//waterskins

////glass works
//glass
//glass bottle
//glass bowl
//glass cup
//glass jar
//aquarium
//spectacles
//telescope
//magnifying glass

////weaving
//loose cotton
//loose wool
//loose linen
//loose silk
//loose llama wool
//loose goat hair

//spun cotton
//spun wool
//spun linen
//spun silk
//spun llama wool
//spun mohair - goat hair

//cotton thread
//silk thread

//cotton bolt
//wool bolt
//linen bolt
//silk bolt
//llama wool bolt
//mohair bolt - goat hair

//cotton shirt
//woolen shirt
//linen shirt
//silken shirt
//llama wool shirt
//mohair shirt

//cotton pants
//woolen pants
//linen pants
//silken pants
//llama wool pants
//mohair pants

//cotton dress
//woolen dress
//linen dress
//silken dress
//llama wool dress
//mohair dress

//cotton cap
//woolen cap
//linen cap
//silken cap
//llama wool cap
//mohair cap

//cotton scarf
//woolen scarf
//linen scarf
//silken scarf
//llama wool scarf
//mohair scarf

//cotton socks
//woolen socks
//linen socks
//silken socks
//llama wool socks
//mohair socks

//cotton undergarments
//woolen undergarments
//linen undergarments
//silken undergarments
//llama wool undergarments
//mohair undergarments

//cotton bandage

//woolen coat
//leather coat
//fur coat

//woolen cloak

//fancy hat
//party hat

//sigils

//fan

//headdress

//colander
//kettle
