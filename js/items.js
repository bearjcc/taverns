"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\items.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item() {
        this.singular = "Item";
        this.plural = "Items";
        this.description = "An Item is something that a player can take with them and use.";
        this.weight = 0; // kilograms
        this.membersOnly = false;
        this.categories = [];
        this.categories.push("Item");
    }
    Item.prototype.getInfo = function (qty) {
        switch (qty) {
            case 0:
                return "No " + this.plural;
            case 1:
                if (this.getQuality() === "average") {
                    return "An " + this.getQuality() + " " + this.singular;
                }
                else {
                    return "A " + this.getQuality() + " " + this.singular;
                }
            default:
                return "Some " + this.getQuality() + " " + this.plural;
        }
    };
    Item.prototype.getQuality = function () {
        if (this.quality < 30) {
            return "terrible";
        }
        else if (this.quality < 60) {
            return "poor";
        }
        else if (this.quality < 70) {
            return "mediocre";
        }
        else if (this.quality < 80) {
            return "average";
        }
        else if (this.quality < 90) {
            return "good";
        }
        else if (this.quality < 97.5) {
            return "great";
        }
        else if (this.quality < 100) {
            return "superb";
        }
        else if (this.quality >= 100) {
            return "perfect";
        }
        else {
            return "legendary";
        }
    };
    return Item;
}());
exports.Item = Item;
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
