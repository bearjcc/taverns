"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\beings.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PolarBear = exports.Grizzly = exports.BlackBear = exports.Bear = exports.Bat = exports.Badger = exports.Ape = exports.Baboon = exports.ArticFox = exports.Fox = exports.RattleSnake = exports.RatSnake = exports.Anaconda = exports.Snake = exports.Insect = exports.Raven = exports.Pheasant = exports.Owl = exports.Hawk = exports.Eagle = exports.Dove = exports.Condor = exports.Bird = exports.Ray = exports.Walrus = exports.Shark = exports.Seal = exports.Shrimp = exports.Crab = exports.Clam = exports.Lobster = exports.SeaUrchin = exports.Starfish = exports.SandDollar = exports.Anglerfish = exports.Squid = exports.Whale = exports.Dolphin = exports.Octopus = exports.Barrelfish = exports.Anchovy = exports.Jellyfish = exports.Mahi = exports.Cod = exports.Salmon = exports.RainbowTrout = exports.Trout = exports.Swordfish = exports.Silverling = exports.Jewelfish = exports.Eel = exports.Crayfish = exports.Catfish = exports.Carp = exports.Barracuda = exports.Adder = exports.Fish = exports.Ox = exports.Donkey = exports.Llama = exports.Horse = exports.FarmAnimal = exports.Hedgehog = exports.Mouse = exports.Rabbit = exports.Songbird = exports.Ferret = exports.Parrot = exports.Chameleon = exports.Dog = exports.Cat = exports.Pet = exports.Ostrich = exports.Lizardmount = exports.Elephant = exports.Gryphon = exports.Dragon = exports.Phoenix = exports.Unicorn = exports.Animal = exports.Banshee = exports.Hydra = exports.Minotaur = exports.Monster = exports.Sphinx = exports.Kitsune = exports.Pixie = exports.Kobold = exports.Leprechaun = exports.Fairy = exports.Valkyrie = exports.Ghost = exports.Imp = exports.Djin = exports.God = exports.Goblin = exports.Troll = exports.Lizardfolk = exports.Merfolk = exports.Mixedblood = exports.Felix = exports.Goliath = exports.Satyr = exports.orc_prototype = exports.Orc = exports.human_prototype = exports.Human = exports.halfling_prototype = exports.Halfling = exports.gnome_prototype = exports.Gnome = exports.elf_prototype = exports.Elf = exports.dwarf_prototype = exports.Dwarf = exports.playableRaces = exports.Humanoid = exports.Being = void 0;
var Being = /** @class */ (function () {
    function Being(name, gender) {
        this.name = name;
        this.gender = gender;
        this.membersOnly = false;
        this.category.push("Being");
    }
    Being.singular = "Being";
    Being.plural = "Beings";
    Being.description = "A living thing including plants, animals, fungi, and Gods.";
    return Being;
}());
exports.Being = Being;
var Humanoid = /** @class */ (function (_super) {
    __extends(Humanoid, _super);
    function Humanoid(name, gender, description) {
        var _this = _super.call(this, name, gender) || this;
        _this.description = description;
        _this.hasBackpack = false;
        _this.category.push("Humanoid");
        return _this;
    }
    Humanoid.singular = "Humanoid";
    Humanoid.plural = "Humanoids";
    Humanoid.description = "Intelligent and bipedal.";
    return Humanoid;
}(Being));
exports.Humanoid = Humanoid;
var Dwarf = /** @class */ (function (_super) {
    __extends(Dwarf, _super);
    function Dwarf(name, gender, description) {
        var _this = _super.call(this, name, gender, description) || this;
        _this.rarity = "Common";
        _this.category.push("Dwarf");
        return _this;
    }
    Dwarf.singular = "Dwarf";
    Dwarf.plural = "Dwarves";
    Dwarf.description = "Short of stature and short of temper, dwarves enjoy alcohol a little too much and are mostly geologists.";
    return Dwarf;
}(Humanoid));
exports.Dwarf = Dwarf;
exports.dwarf_prototype = new Dwarf(Dwarf.singular, "None", Dwarf.description);
exports.playableRaces.push(exports.dwarf_prototype);
var Elf = /** @class */ (function (_super) {
    __extends(Elf, _super);
    function Elf(name, gender, description) {
        var _this = _super.call(this, name, gender, description) || this;
        _this.rarity = "Common";
        _this.category.push("Elf");
        return _this;
    }
    Elf.singular = "Elf";
    Elf.plural = "Elves";
    Elf.description = "Tall, elegant, and haughty, elves outlive all other humanoid races and create magnificent architecture and art.";
    return Elf;
}(Humanoid));
exports.Elf = Elf;
exports.elf_prototype = new Elf(Elf.singular, "None", Elf.description);
exports.playableRaces.push(exports.elf_prototype);
var Gnome = /** @class */ (function (_super) {
    __extends(Gnome, _super);
    function Gnome(name, gender, description) {
        var _this = _super.call(this, name, gender, description) || this;
        _this.rarity = "Uncommon";
        _this.category.push("Gnome");
        return _this;
    }
    Gnome.singular = "Gnome";
    Gnome.plural = "Gnomes";
    Gnome.description = "The shortest of the humanoids, gnomes prefer animal companions over other humanoid races.";
    return Gnome;
}(Humanoid));
exports.Gnome = Gnome;
exports.gnome_prototype = new Gnome(Gnome.singular, "None", Gnome.description);
exports.playableRaces.push(exports.gnome_prototype);
var Halfling = /** @class */ (function (_super) {
    __extends(Halfling, _super);
    function Halfling(name, gender, description) {
        var _this = _super.call(this, name, gender, description) || this;
        _this.rarity = "Uncommon";
        _this.category.push("Halfling");
        return _this;
    }
    Halfling.singular = "Halfling";
    Halfling.plural = "Halflings";
    Halfling.description = "Halflings are so awkward they end up having the best luck, or, so it seems. They never seem to fit in though.";
    return Halfling;
}(Humanoid));
exports.Halfling = Halfling;
exports.halfling_prototype = new Halfling(Halfling.singular, "None", Halfling.description);
exports.playableRaces.push(exports.halfling_prototype);
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name, gender, description) {
        var _this = _super.call(this, name, gender, description) || this;
        _this.rarity = "Common";
        _this.category.push("Human");
        return _this;
    }
    Human.singular = "Human";
    Human.plural = "Humans";
    Human.description = "Pride, Honor, Territory, Ownership: there is rarely anything else on the mind of man";
    return Human;
}(Humanoid));
exports.Human = Human;
exports.human_prototype = new Human(Human.singular, "None", Human.description);
exports.playableRaces.push(exports.human_prototype);
var Orc = /** @class */ (function (_super) {
    __extends(Orc, _super);
    function Orc(name, gender, description) {
        var _this = _super.call(this, name, gender, description) || this;
        _this.rarity = "Common";
        _this.category.push("Orc");
        return _this;
    }
    Orc.singular = "Orc";
    Orc.plural = "Orcs";
    Orc.description = "Ugly, brutish, and war-hungry, there is nothing more important then clan and family to an orc.";
    return Orc;
}(Humanoid));
exports.Orc = Orc;
exports.orc_prototype = new Orc(Orc.singular, "None", Orc.description);
exports.playableRaces.push(exports.orc_prototype);
var Satyr = /** @class */ (function (_super) {
    __extends(Satyr, _super);
    function Satyr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rarity = "Exotic";
        return _this;
    }
    Satyr.playable = true;
    Satyr.plural = "Satyrs";
    Satyr.singular = "Satyr";
    Satyr.description = "Torso of man, legs and horns of a goat, satyrs are often tricksters or harlots";
    return Satyr;
}(Humanoid));
exports.Satyr = Satyr;
var Goliath = /** @class */ (function (_super) {
    __extends(Goliath, _super);
    function Goliath() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rarity = "Rare";
        return _this;
    }
    Goliath.playable = true;
    Goliath.plural = "Goliaths";
    Goliath.singular = "Goliath";
    Goliath.description = "The largest of the humanoids. Though clan-like, and brutish like orcs, goliaths are much more peaceful, and less organized.";
    return Goliath;
}(Humanoid));
exports.Goliath = Goliath;
var Felix = /** @class */ (function (_super) {
    __extends(Felix, _super);
    function Felix() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rarity = "Rare";
        return _this;
    }
    Felix.playable = true;
    Felix.plural = "Felideax";
    Felix.singular = "Felix";
    Felix.description = "Standing on their hind legs, these big cats have integrated well into humanoids' world.";
    return Felix;
}(Humanoid));
exports.Felix = Felix;
var Mixedblood = /** @class */ (function (_super) {
    __extends(Mixedblood, _super);
    function Mixedblood() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rarity = "Uncommon";
        return _this;
    }
    Mixedblood.playable = true;
    Mixedblood.plural = "Mixedbloods";
    Mixedblood.singular = "Mixedblood";
    Mixedblood.description = "Infertile, and often asexual, mixedblood describes any half breed between two humanoid races.";
    return Mixedblood;
}(Humanoid));
exports.Mixedblood = Mixedblood;
var Merfolk = /** @class */ (function (_super) {
    __extends(Merfolk, _super);
    function Merfolk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Merfolk.plural = "Mermen";
    Merfolk.singular = "Merfolk";
    Merfolk.description = "Humanoid torso with the lower body of a fish, these people can breath underwater or above";
    return Merfolk;
}(Humanoid));
exports.Merfolk = Merfolk;
var Lizardfolk = /** @class */ (function (_super) {
    __extends(Lizardfolk, _super);
    function Lizardfolk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lizardfolk.plural = "Lizardfolk";
    Lizardfolk.singular = "Lizardi";
    Lizardfolk.description = "Lizardfolk are slimy, gangly and not to be trusted.";
    return Lizardfolk;
}(Humanoid));
exports.Lizardfolk = Lizardfolk;
var Troll = /** @class */ (function (_super) {
    __extends(Troll, _super);
    function Troll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Troll.plural = "Trolls";
    Troll.singular = "Troll";
    Troll.description = "Strong and hardy, but lacking intelligence, trolls tend to live alone.";
    return Troll;
}(Humanoid));
exports.Troll = Troll;
var Goblin = /** @class */ (function (_super) {
    __extends(Goblin, _super);
    function Goblin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Goblin.plural = "Goblins";
    Goblin.singular = "Goblin";
    Goblin.description = "Some think them cute, others think they are hideous, either way, better watch your gold while goblins are around!";
    return Goblin;
}(Humanoid));
exports.Goblin = Goblin;
var God = /** @class */ (function (_super) {
    __extends(God, _super);
    function God() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    God.plural = "Gods";
    God.singular = "God";
    God.description = "Immortal beings that interact with the world through their followers rather then with a body of their own";
    return God;
}(Being));
exports.God = God;
var Djin = /** @class */ (function (_super) {
    __extends(Djin, _super);
    function Djin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Djin.plural = "Djins";
    Djin.singular = "Djin";
    Djin.description = "Djins are a manifestation of pure Mystic Force. Powerful, Ephemeral, Tricksters.";
    return Djin;
}(Being));
exports.Djin = Djin;
var Imp = /** @class */ (function (_super) {
    __extends(Imp, _super);
    function Imp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Imp.plural = "Imps";
    Imp.singular = "Imp";
    Imp.description = "Small, fiendish, impudent creatures with mild magical abilities";
    return Imp;
}(Being));
exports.Imp = Imp;
var Ghost = /** @class */ (function (_super) {
    __extends(Ghost, _super);
    function Ghost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ghost.plural = "Ghosts";
    Ghost.singular = "Ghost";
    Ghost.description = "A soul dettached from a body. May be seen around the world if they get lost on their way to Styx";
    return Ghost;
}(Being));
exports.Ghost = Ghost;
var Valkyrie = /** @class */ (function (_super) {
    __extends(Valkyrie, _super);
    function Valkyrie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Valkyrie.plural = "Valkyries";
    Valkyrie.singular = "Valkry";
    return Valkyrie;
}(Being));
exports.Valkyrie = Valkyrie;
var Fairy = /** @class */ (function (_super) {
    __extends(Fairy, _super);
    function Fairy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fairy.plural = "Fairies";
    Fairy.singular = "Fairy";
    return Fairy;
}(Being));
exports.Fairy = Fairy;
var Leprechaun = /** @class */ (function (_super) {
    __extends(Leprechaun, _super);
    function Leprechaun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Leprechaun.plural = "Leprechauns";
    Leprechaun.singular = "Leprechaun";
    return Leprechaun;
}(Fairy));
exports.Leprechaun = Leprechaun;
var Kobold = /** @class */ (function (_super) {
    __extends(Kobold, _super);
    function Kobold() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kobold.plural = "Kobolds";
    Kobold.singular = "Kobold";
    return Kobold;
}(Fairy));
exports.Kobold = Kobold;
var Pixie = /** @class */ (function (_super) {
    __extends(Pixie, _super);
    function Pixie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pixie.plural = "Pixies";
    Pixie.singular = "Pixie";
    return Pixie;
}(Fairy));
exports.Pixie = Pixie;
var Kitsune = /** @class */ (function (_super) {
    __extends(Kitsune, _super);
    function Kitsune() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kitsune.plural = "Kitsune";
    Kitsune.singular = "Kitsune";
    return Kitsune;
}(Fairy));
exports.Kitsune = Kitsune;
var Sphinx = /** @class */ (function (_super) {
    __extends(Sphinx, _super);
    function Sphinx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sphinx.plural = "Sphinx";
    Sphinx.singular = "Sphinx";
    return Sphinx;
}(Being));
exports.Sphinx = Sphinx;
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monster.plural = "Monsters";
    Monster.singular = "Monster";
    return Monster;
}(Being));
exports.Monster = Monster;
var Minotaur = /** @class */ (function (_super) {
    __extends(Minotaur, _super);
    function Minotaur() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Minotaur.plural = "Minotaurs";
    Minotaur.singular = "Minotaur";
    return Minotaur;
}(Monster));
exports.Minotaur = Minotaur;
var Hydra = /** @class */ (function (_super) {
    __extends(Hydra, _super);
    function Hydra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hydra.plural = "Hydra";
    Hydra.singular = "Hydra";
    return Hydra;
}(Monster));
exports.Hydra = Hydra;
var Banshee = /** @class */ (function (_super) {
    __extends(Banshee, _super);
    function Banshee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Banshee.plural = "Banshee";
    Banshee.singular = "Banshee";
    return Banshee;
}(Monster));
exports.Banshee = Banshee;
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Animal.plural = "Animals";
    Animal.singular = "Animal";
    return Animal;
}(Being));
exports.Animal = Animal;
var Unicorn = /** @class */ (function (_super) {
    __extends(Unicorn, _super);
    function Unicorn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Unicorn.plural = "Unicorn";
    Unicorn.singular = "Unicorn";
    return Unicorn;
}(Animal));
exports.Unicorn = Unicorn;
var Phoenix = /** @class */ (function (_super) {
    __extends(Phoenix, _super);
    function Phoenix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Phoenix.plural = "Phoneix";
    Phoenix.singular = "Phoneix";
    return Phoenix;
}(Animal));
exports.Phoenix = Phoenix;
var Dragon = /** @class */ (function (_super) {
    __extends(Dragon, _super);
    function Dragon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dragon.plural = "Dragons";
    Dragon.singular = "Dragon";
    return Dragon;
}(Animal));
exports.Dragon = Dragon;
var Gryphon = /** @class */ (function (_super) {
    __extends(Gryphon, _super);
    function Gryphon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gryphon.plural = "Gryphon";
    Gryphon.singular = "Gryphon";
    return Gryphon;
}(Animal));
exports.Gryphon = Gryphon;
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Elephant.plural = "Elphants";
    Elephant.singular = "Elephant";
    return Elephant;
}(Animal));
exports.Elephant = Elephant;
var Lizardmount = /** @class */ (function (_super) {
    __extends(Lizardmount, _super);
    function Lizardmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lizardmount.plural = "Lizardmounts";
    Lizardmount.singular = "Lizardmount";
    return Lizardmount;
}(Animal));
exports.Lizardmount = Lizardmount;
var Ostrich = /** @class */ (function (_super) {
    __extends(Ostrich, _super);
    function Ostrich() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ostrich.plural = "Ostriches";
    Ostrich.singular = "Ostrich";
    return Ostrich;
}(Animal));
exports.Ostrich = Ostrich;
var Pet = /** @class */ (function (_super) {
    __extends(Pet, _super);
    function Pet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pet.plural = "Pets";
    Pet.singular = "Pet";
    return Pet;
}(Animal));
exports.Pet = Pet;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.plural = "Cats";
    Cat.singular = "Cat";
    return Cat;
}(Pet));
exports.Cat = Cat;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.plural = "Dogs";
    Dog.singular = "Dog";
    return Dog;
}(Pet));
exports.Dog = Dog;
var Chameleon = /** @class */ (function (_super) {
    __extends(Chameleon, _super);
    function Chameleon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chameleon.plural = "Chameleon";
    Chameleon.singular = "Chameleon";
    return Chameleon;
}(Pet));
exports.Chameleon = Chameleon;
var Parrot = /** @class */ (function (_super) {
    __extends(Parrot, _super);
    function Parrot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parrot.plural = "Parrots";
    Parrot.singular = "Parrot";
    return Parrot;
}(Pet));
exports.Parrot = Parrot;
var Ferret = /** @class */ (function (_super) {
    __extends(Ferret, _super);
    function Ferret() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ferret.plural = "Ferrets";
    Ferret.singular = "Ferret";
    return Ferret;
}(Pet));
exports.Ferret = Ferret;
var Songbird = /** @class */ (function (_super) {
    __extends(Songbird, _super);
    function Songbird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Songbird.plural = "Songbirds";
    Songbird.singular = "Songbird";
    return Songbird;
}(Pet));
exports.Songbird = Songbird;
var Rabbit = /** @class */ (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rabbit.plural = "Rabbits";
    Rabbit.singular = "Rabbit";
    return Rabbit;
}(Pet));
exports.Rabbit = Rabbit;
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouse.plural = "Mice";
    Mouse.singular = "Mouse";
    return Mouse;
}(Pet));
exports.Mouse = Mouse;
var Hedgehog = /** @class */ (function (_super) {
    __extends(Hedgehog, _super);
    function Hedgehog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hedgehog.plural = "Hedgehogs";
    Hedgehog.singular = "Hedgehog";
    return Hedgehog;
}(Pet));
exports.Hedgehog = Hedgehog;
var FarmAnimal = /** @class */ (function (_super) {
    __extends(FarmAnimal, _super);
    function FarmAnimal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FarmAnimal.plural = "Farm Animals";
    FarmAnimal.singular = "Farm Animal";
    return FarmAnimal;
}(Animal));
exports.FarmAnimal = FarmAnimal;
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Horse.plural = "Horses";
    Horse.singular = "Horse";
    return Horse;
}(FarmAnimal));
exports.Horse = Horse;
var Llama = /** @class */ (function (_super) {
    __extends(Llama, _super);
    function Llama() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Llama.plural = "Llamas";
    Llama.singular = "Llama";
    return Llama;
}(FarmAnimal));
exports.Llama = Llama;
var Donkey = /** @class */ (function (_super) {
    __extends(Donkey, _super);
    function Donkey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Donkey.plural = "Donkeys";
    Donkey.singular = "Donkey";
    return Donkey;
}(FarmAnimal));
exports.Donkey = Donkey;
var Ox = /** @class */ (function (_super) {
    __extends(Ox, _super);
    function Ox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ox.plural = "Oxen";
    Ox.singular = "Ox";
    return Ox;
}(FarmAnimal));
exports.Ox = Ox;
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fish.plural = "Fish";
    Fish.singular = "Fish";
    return Fish;
}(Animal));
exports.Fish = Fish;
var Adder = /** @class */ (function (_super) {
    __extends(Adder, _super);
    function Adder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adder.plural = "Adders";
    Adder.singular = "Adder";
    Adder.description = "";
    return Adder;
}(Fish));
exports.Adder = Adder;
var Barracuda = /** @class */ (function (_super) {
    __extends(Barracuda, _super);
    function Barracuda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Barracuda.plural = "Barracuda";
    Barracuda.singular = "Barracudas";
    Barracuda.description = "";
    return Barracuda;
}(Fish));
exports.Barracuda = Barracuda;
var Carp = /** @class */ (function (_super) {
    __extends(Carp, _super);
    function Carp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carp.plural = "Carp";
    Carp.singular = "Carp";
    Carp.description = "";
    return Carp;
}(Fish));
exports.Carp = Carp;
var Catfish = /** @class */ (function (_super) {
    __extends(Catfish, _super);
    function Catfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Catfish.plural = "Catfish";
    Catfish.singular = "Catfish";
    Catfish.description = "";
    return Catfish;
}(Fish));
exports.Catfish = Catfish;
var Crayfish = /** @class */ (function (_super) {
    __extends(Crayfish, _super);
    function Crayfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crayfish.plural = "Crayfish";
    Crayfish.singular = "Crayfish";
    Crayfish.description = "";
    return Crayfish;
}(Fish));
exports.Crayfish = Crayfish;
var Eel = /** @class */ (function (_super) {
    __extends(Eel, _super);
    function Eel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eel.plural = "Eels";
    Eel.singular = "Eel";
    Eel.description = "";
    return Eel;
}(Fish));
exports.Eel = Eel;
var Jewelfish = /** @class */ (function (_super) {
    __extends(Jewelfish, _super);
    function Jewelfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jewelfish.plural = "Jewelfish";
    Jewelfish.singular = "Jewelfish";
    Jewelfish.description = "";
    return Jewelfish;
}(Fish));
exports.Jewelfish = Jewelfish;
var Silverling = /** @class */ (function (_super) {
    __extends(Silverling, _super);
    function Silverling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Silverling.plural = "Silverlings";
    Silverling.singular = "Silverling";
    Silverling.description = "";
    return Silverling;
}(Fish));
exports.Silverling = Silverling;
var Swordfish = /** @class */ (function (_super) {
    __extends(Swordfish, _super);
    function Swordfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Swordfish.plural = "Swordfish";
    Swordfish.singular = "Swordfish";
    Swordfish.description = "";
    return Swordfish;
}(Fish));
exports.Swordfish = Swordfish;
var Trout = /** @class */ (function (_super) {
    __extends(Trout, _super);
    function Trout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trout.plural = "Trout";
    Trout.singular = "Trout";
    Trout.description = "";
    return Trout;
}(Fish));
exports.Trout = Trout;
var RainbowTrout = /** @class */ (function (_super) {
    __extends(RainbowTrout, _super);
    function RainbowTrout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RainbowTrout.plural = "Rainbow Trout";
    RainbowTrout.singular = "Rainbow Trout";
    RainbowTrout.description = "";
    return RainbowTrout;
}(Trout));
exports.RainbowTrout = RainbowTrout;
var Salmon = /** @class */ (function (_super) {
    __extends(Salmon, _super);
    function Salmon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Salmon.plural = "Salmon";
    Salmon.singular = "Salmon";
    Salmon.description = "";
    return Salmon;
}(Fish));
exports.Salmon = Salmon;
var Cod = /** @class */ (function (_super) {
    __extends(Cod, _super);
    function Cod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cod.plural = "Cod";
    Cod.singular = "Cod";
    Cod.description = "";
    return Cod;
}(Fish));
exports.Cod = Cod;
var Mahi = /** @class */ (function (_super) {
    __extends(Mahi, _super);
    function Mahi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mahi.plural = "Mahi-Mahi";
    Mahi.singular = "Mahi-Mahi";
    Mahi.description = "";
    return Mahi;
}(Fish));
exports.Mahi = Mahi;
var Jellyfish = /** @class */ (function (_super) {
    __extends(Jellyfish, _super);
    function Jellyfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jellyfish.plural = "Jellyfish";
    Jellyfish.singular = "Jellyfish";
    Jellyfish.description = "";
    return Jellyfish;
}(Fish));
exports.Jellyfish = Jellyfish;
var Anchovy = /** @class */ (function (_super) {
    __extends(Anchovy, _super);
    function Anchovy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anchovy.plural = "Anchovies";
    Anchovy.singular = "Anchovy";
    Anchovy.description = "";
    return Anchovy;
}(Fish));
exports.Anchovy = Anchovy;
var Barrelfish = /** @class */ (function (_super) {
    __extends(Barrelfish, _super);
    function Barrelfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Barrelfish.plural = "Barrelfish";
    Barrelfish.singular = "Barrelfsih";
    Barrelfish.description = "";
    return Barrelfish;
}(Fish));
exports.Barrelfish = Barrelfish;
var Octopus = /** @class */ (function (_super) {
    __extends(Octopus, _super);
    function Octopus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Octopus.plural = "Octopuses";
    Octopus.singular = "Octopus";
    Octopus.description = "";
    return Octopus;
}(Fish));
exports.Octopus = Octopus;
var Dolphin = /** @class */ (function (_super) {
    __extends(Dolphin, _super);
    function Dolphin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dolphin.plural = "Dolphins";
    Dolphin.singular = "Dolphin";
    Dolphin.description = "";
    return Dolphin;
}(Fish));
exports.Dolphin = Dolphin;
var Whale = /** @class */ (function (_super) {
    __extends(Whale, _super);
    function Whale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Whale.plural = "Whales";
    Whale.singular = "Whale";
    Whale.description = "";
    return Whale;
}(Fish));
exports.Whale = Whale;
var Squid = /** @class */ (function (_super) {
    __extends(Squid, _super);
    function Squid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Squid.plural = "Squids";
    Squid.singular = "Squid";
    Squid.description = "";
    return Squid;
}(Fish));
exports.Squid = Squid;
var Anglerfish = /** @class */ (function (_super) {
    __extends(Anglerfish, _super);
    function Anglerfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anglerfish.plural = "Anglerfish";
    Anglerfish.singular = "Anglerfish";
    Anglerfish.description = "";
    return Anglerfish;
}(Fish));
exports.Anglerfish = Anglerfish;
var SandDollar = /** @class */ (function (_super) {
    __extends(SandDollar, _super);
    function SandDollar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SandDollar.plural = "Sand Dollars";
    SandDollar.singular = "Sand Dollar";
    SandDollar.description = "";
    return SandDollar;
}(Fish));
exports.SandDollar = SandDollar;
var Starfish = /** @class */ (function (_super) {
    __extends(Starfish, _super);
    function Starfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Starfish.plural = "Starfish";
    Starfish.singular = "Starfish";
    Starfish.description = "";
    return Starfish;
}(Fish));
exports.Starfish = Starfish;
var SeaUrchin = /** @class */ (function (_super) {
    __extends(SeaUrchin, _super);
    function SeaUrchin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeaUrchin.plural = "Sea Urchins";
    SeaUrchin.singular = "Sea Urchin";
    SeaUrchin.description = "";
    return SeaUrchin;
}(Fish));
exports.SeaUrchin = SeaUrchin;
var Lobster = /** @class */ (function (_super) {
    __extends(Lobster, _super);
    function Lobster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lobster.plural = "Lobsters";
    Lobster.singular = "Lobster";
    Lobster.description = "";
    return Lobster;
}(Fish));
exports.Lobster = Lobster;
var Clam = /** @class */ (function (_super) {
    __extends(Clam, _super);
    function Clam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clam.plural = "Clams";
    Clam.singular = "Clam";
    Clam.description = "";
    return Clam;
}(Fish));
exports.Clam = Clam;
var Crab = /** @class */ (function (_super) {
    __extends(Crab, _super);
    function Crab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crab.plural = "Crabs";
    Crab.singular = "Crab";
    Crab.description = "";
    return Crab;
}(Animal));
exports.Crab = Crab;
var Shrimp = /** @class */ (function (_super) {
    __extends(Shrimp, _super);
    function Shrimp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shrimp.plural = "Shrimp";
    Shrimp.singular = "Shrimp";
    Shrimp.description = "";
    return Shrimp;
}(Fish));
exports.Shrimp = Shrimp;
var Seal = /** @class */ (function (_super) {
    __extends(Seal, _super);
    function Seal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Seal.plural = "Seals";
    Seal.singular = "Seal";
    Seal.description = "";
    return Seal;
}(Animal));
exports.Seal = Seal;
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shark.plural = "Sharks";
    Shark.singular = "Shark";
    Shark.description = "";
    return Shark;
}(Fish));
exports.Shark = Shark;
var Walrus = /** @class */ (function (_super) {
    __extends(Walrus, _super);
    function Walrus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walrus.plural = "Walruses";
    Walrus.singular = "Walrus";
    Walrus.description = "";
    return Walrus;
}(Animal));
exports.Walrus = Walrus;
var Ray = /** @class */ (function (_super) {
    __extends(Ray, _super);
    function Ray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ray.plural = "Rays";
    Ray.singular = "Ray";
    Ray.description = "";
    return Ray;
}(Animal));
exports.Ray = Ray;
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.plural = "Birds";
    Bird.singular = "Bird";
    Bird.description = "";
    return Bird;
}(Animal));
exports.Bird = Bird;
var Condor = /** @class */ (function (_super) {
    __extends(Condor, _super);
    function Condor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Condor.plural = "Condors";
    Condor.singular = "Condor";
    Condor.description = "";
    return Condor;
}(Bird));
exports.Condor = Condor;
var Dove = /** @class */ (function (_super) {
    __extends(Dove, _super);
    function Dove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dove.plural = "Doves";
    Dove.singular = "Dove";
    Dove.description = "";
    return Dove;
}(Bird));
exports.Dove = Dove;
var Eagle = /** @class */ (function (_super) {
    __extends(Eagle, _super);
    function Eagle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eagle.plural = "Eagles";
    Eagle.singular = "Eagle";
    Eagle.description = "";
    return Eagle;
}(Bird));
exports.Eagle = Eagle;
var Hawk = /** @class */ (function (_super) {
    __extends(Hawk, _super);
    function Hawk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hawk.plural = "Hawks";
    Hawk.singular = "Hawk";
    Hawk.description = "";
    return Hawk;
}(Bird));
exports.Hawk = Hawk;
var Owl = /** @class */ (function (_super) {
    __extends(Owl, _super);
    function Owl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Owl.plural = "Owls";
    Owl.singular = "Owl";
    Owl.description = "";
    return Owl;
}(Bird));
exports.Owl = Owl;
var Pheasant = /** @class */ (function (_super) {
    __extends(Pheasant, _super);
    function Pheasant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pheasant.plural = "Pheasants";
    Pheasant.singular = "Pheasant";
    Pheasant.description = "";
    return Pheasant;
}(Bird));
exports.Pheasant = Pheasant;
var Raven = /** @class */ (function (_super) {
    __extends(Raven, _super);
    function Raven() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Raven.plural = "Ravens";
    Raven.singular = "Raven";
    Raven.description = "";
    return Raven;
}(Bird));
exports.Raven = Raven;
var Insect = /** @class */ (function (_super) {
    __extends(Insect, _super);
    function Insect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insect.plural = "Insects";
    Insect.singular = "Insect";
    Insect.description = "";
    return Insect;
}(Animal));
exports.Insect = Insect;
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.plural = "Snakes";
    Snake.singular = "Snake";
    Snake.description = "";
    return Snake;
}(Animal));
exports.Snake = Snake;
var Anaconda = /** @class */ (function (_super) {
    __extends(Anaconda, _super);
    function Anaconda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anaconda.plural = "";
    Anaconda.singular = "";
    Anaconda.description = "";
    return Anaconda;
}(Snake));
exports.Anaconda = Anaconda;
var RatSnake = /** @class */ (function (_super) {
    __extends(RatSnake, _super);
    function RatSnake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RatSnake.plural = "Rat Snakes";
    RatSnake.singular = "Rat Snake";
    RatSnake.description = "";
    return RatSnake;
}(Snake));
exports.RatSnake = RatSnake;
var RattleSnake = /** @class */ (function (_super) {
    __extends(RattleSnake, _super);
    function RattleSnake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RattleSnake.plural = "Rattle Snakes";
    RattleSnake.singular = "Rattle Snake";
    RattleSnake.description = "";
    return RattleSnake;
}(Snake));
exports.RattleSnake = RattleSnake;
var Fox = /** @class */ (function (_super) {
    __extends(Fox, _super);
    function Fox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fox.plural = "Foxes";
    Fox.singular = "Fox";
    Fox.description = "";
    return Fox;
}(Animal));
exports.Fox = Fox;
var ArticFox = /** @class */ (function (_super) {
    __extends(ArticFox, _super);
    function ArticFox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArticFox.plural = "Artic Foxes";
    ArticFox.singular = "Artic Fox";
    ArticFox.description = "";
    return ArticFox;
}(Fox));
exports.ArticFox = ArticFox;
var Baboon = /** @class */ (function (_super) {
    __extends(Baboon, _super);
    function Baboon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Baboon.plural = "";
    Baboon.singular = "";
    Baboon.description = "";
    return Baboon;
}(Animal));
exports.Baboon = Baboon;
var Ape = /** @class */ (function (_super) {
    __extends(Ape, _super);
    function Ape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ape.plural = "Apes";
    Ape.singular = "Ape";
    Ape.description = "";
    return Ape;
}(Animal));
exports.Ape = Ape;
var Badger = /** @class */ (function (_super) {
    __extends(Badger, _super);
    function Badger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badger.plural = "Badgers";
    Badger.singular = "Badger";
    Badger.description = "";
    return Badger;
}(Animal));
exports.Badger = Badger;
var Bat = /** @class */ (function (_super) {
    __extends(Bat, _super);
    function Bat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bat.plural = "Bats";
    Bat.singular = "Bat";
    Bat.description = "";
    return Bat;
}(Animal));
exports.Bat = Bat;
var Bear = /** @class */ (function (_super) {
    __extends(Bear, _super);
    function Bear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bear.plural = "Bears";
    Bear.singular = "Bear";
    Bear.description = "";
    return Bear;
}(Animal));
exports.Bear = Bear;
var BlackBear = /** @class */ (function (_super) {
    __extends(BlackBear, _super);
    function BlackBear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlackBear.plural = "Black Bears";
    BlackBear.singular = "Black Bear";
    BlackBear.description = "";
    return BlackBear;
}(Bear));
exports.BlackBear = BlackBear;
var Grizzly = /** @class */ (function (_super) {
    __extends(Grizzly, _super);
    function Grizzly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grizzly.plural = "Grizzlies";
    Grizzly.singular = "Grizzly";
    Grizzly.description = "";
    return Grizzly;
}(Bear));
exports.Grizzly = Grizzly;
var PolarBear = /** @class */ (function (_super) {
    __extends(PolarBear, _super);
    function PolarBear() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarBear.plural = "Polar Bears";
    PolarBear.singular = "Polar Bear";
    PolarBear.description = "";
    return PolarBear;
}(Bear));
exports.PolarBear = PolarBear;
