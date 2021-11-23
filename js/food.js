"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.scoopOGloop_prototype = exports.ScoopOGloop = exports.ooeyGooeyFreshNFruity_prototype = exports.OoeyGooeyFreshNFruity = exports.muddyMossyMoldyMess_prototype = exports.MuddyMossyMoldyMess = exports.caveCritterFritters_prototype = exports.CaveCritterFritters = exports.algaePaste_prototype = exports.AlgaePaste = exports.mossWrap_prototype = exports.MossWrap = exports.bugsNOoze_prototype = exports.BugsNOoze = exports.bugsNSlime_prototype = exports.BugsNSlime = exports.seasonedInsects_prototype = exports.SeasonedInsects = exports.roastedInsects_prototype = exports.RoastedInsects = exports.insectPuree_prototype = exports.InsectPuree = exports.funGuyFungiFeast_prototype = exports.FunGuyFungiFeast = exports.friedDumplings_prototype = exports.FriedDumplings = exports.steamedDumplings_prototype = exports.SteamedDumplings = exports.caviar_prototype = exports.Caviar = exports.friedRice_prototype = exports.FriedRice = exports.riceEntree_prototype = exports.RiceEntree = exports.chickenPotPie_prototype = exports.ChickenPotPie = exports.friedProtein_prototype = exports.FriedProtein = exports.grilledProtein_prototype = exports.GrilledProtein = exports.quesadillas_prototype = exports.Quesadilla = exports.pie_prototype = exports.Pie = exports.yogurtParfait_prototype = exports.YogurtParfait = exports.waffles_prototype = exports.Waffles = exports.avocadoToast_prototype = exports.AvocadoToast = exports.fishAndFungi_prototype = exports.FishAndFungi = exports.meatloaf_prototype = exports.Meatloaf = exports.fruitSnack_prototype = exports.FruitSnack = exports.oatmeal_prototype = exports.Oatmeal = exports.cornBread_prototype = exports.CornBread = exports.pho_prototype = exports.Pho = exports.cabbageRolls_prototype = exports.CabbageRolls = exports.hamAndEggs_prototype = exports.HamAndEggs = exports.steakAndEggs_prototype = exports.SteakAndEggs = exports.stirFry_prototype = exports.StirFry = exports.eggSalad_prototype = exports.EggSalad = exports.eggRolls_prototype = exports.EggRolls = exports.stuffedShrooms_prototype = exports.StuffedShrooms = exports.bruschetta_prototype = exports.Bruschetta = exports.roastedVegetables_prototype = exports.RoastedVegetables = exports.gumbo_prototype = exports.Gumbo = exports.ratatouille_prototype = exports.Ratatouille = exports.steakAndPotatoes_prototype = exports.SteakAndPotatoes = exports.coleslaw_prototype = exports.Coleslaw = exports.sausageAndPeppers_prototype = exports.SausageAndPeppers = exports.frenchFries_prototype = exports.FrenchFries = exports.jerky_prototype = exports.Jerky = exports.bakedPotato_prototype = exports.BakedPotato = exports.bananaBread_prototype = exports.BananaBread = exports.fruitSalad_prototype = exports.FruitSalad = exports.pizza_prototype = exports.Pizza = exports.cake_prototype = exports.Cake = exports.nutsNBerries_prototype = exports.NutsNBerries = exports.boiledEgg_prototype = exports.BoiledEgg = exports.lettuceWrap_prototype = exports.LettuceWrap = exports.pBJ_prototype = exports.PBJ = exports.toasties_prototype = exports.Toasties = exports.burger_prototype = exports.Burger = exports.bLT_prototype = exports.BLT = exports.chickenNoodleSoup_prototype = exports.ChickenNoodleSoup = exports.chili_prototype = exports.Chili = exports.cornChowder_prototype = exports.CornChowder = exports.lobsterBisque_prototype = exports.LobsterBisque = exports.clamChowder_prototype = exports.ClamChowder = exports.lasagna_prototype = exports.Lasagna = exports.beefStroganoff_prototype = exports.BeefStroganoff = exports.carbonara_prototype = exports.Carbonara = exports.macNCheese_prototype = exports.MacNCheese = exports.pastaEntree_prototype = exports.PastaEntree = exports.ketchup_prototype = exports.Ketchup = exports.mayonnaise_prototype = exports.Mayonnaise = exports.jellies_prototype = exports.Jelliy = exports.peanutButter_prototype = exports.PeanutButter = exports.salsa_prototype = exports.Salsa = exports.guacamole_prototype = exports.Guacamole = exports.syrup_prototype = exports.Syrup = exports.wasabi_prototype = exports.Wasabi = exports.yogurt_prototype = exports.Yogurt = exports.cheese_prototype = exports.Cheese = exports.cream_prototype = exports.Cream = exports.butter_prototype = exports.Butter = exports.goatCheese_prototype = exports.GoatCheese = exports.iceCream_prototype = exports.IceCream = exports.pastryDough_prototype = exports.PastryDough = exports.pizzaDough_prototype = exports.PizzaDough = exports.pieFilling_prototype = exports.PieFilling = exports.tortilla_prototype = exports.Tortilla = exports.broth_prototype = exports.Broth = exports.tofu_prototype = exports.Tofu = exports.noodles_prototype = exports.Noodles = exports.breadDough_prototype = exports.BreadDough = exports.granola_prototype = exports.Granola = exports.pancake_prototype = exports.Pancake = exports.pickle_prototype = exports.Pickle = exports.poachedEgg_prototype = exports.PoachedEgg = exports.scrambledEgg_prototype = exports.ScrambledEgg = exports.omelet_prototype = exports.Omelet = exports.friedEgg_prototype = exports.FriedEgg = exports.chocolate_prototype = exports.Chocolate = exports.chiliPowder_prototype = exports.ChiliPowder = exports.jam_prototype = exports.Jam = exports.pancakeBatter_prototype = exports.PancakeBatter = exports.honey_prototype = exports.Honey = exports.buckwheatFlour_prototype = exports.ryeFlour_prototype = exports.oatFlour_prototype = exports.barleyFlour_prototype = exports.wheatFlour_prototype = exports.riceFlour_prototype = exports.Flour = exports.beets_prototype = exports.Beets = exports.goldenCurry_prototype = exports.yellowCurry_prototype = exports.greenCurry_prototype = exports.redCurry_prototype = exports.Curry = exports.barley_prototype = exports.Barley = exports.oats_prototype = exports.Oats = exports.wheat_prototype = exports.Wheat = exports.teaLeaves_prototype = exports.TeaLeaves = exports.coffeeBeans_prototype = exports.CoffeeBeans = exports.cocoaBeans_prototype = exports.CocoaBeans = exports.soySauce_prototype = exports.SoySauce = exports.dragonEgg_prototype = exports.lizardEgg_prototype = exports.snakeEgg_prototype = exports.fishEgg_prototype = exports.chickenEgg_prototype = exports.Egg = exports.redOnion_prototype = exports.greenOnion_prototype = exports.whiteOnion_prototype = exports.purpleOnion_prototype = exports.Onion = exports.cucumbers_prototype = exports.Cucumbers = exports.vanillaBean_prototype = exports.VanillaBean = exports.acorns_prototype = exports.Acorns = exports.mapleSap_prototype = exports.MapleSap = exports.sprouts_prototype = exports.Sprouts = exports.reindeer_venison_prototype = exports.ReindeerVenison = exports.venison_prototype = exports.Venison = exports.humanoidFlesh_prototype = exports.HumanoidFlesh = exports.glowworm_prototype = exports.Glowworm = exports.oozePurple_prototype = exports.oozeSuperior_prototype = exports.oozeGreen_prototype = exports.oozeGray_prototype = exports.Ooze = exports.antsFire_prototype = exports.antsBlack_prototype = exports.antsRed_prototype = exports.Ants = exports.beetles_prototype = exports.Beetles = exports.mealworms_prototype = exports.Mealworms = exports.brains_prototype = exports.Brains = exports.grubs_prototype = exports.Grubs = exports.dragonmeat_prototype = exports.Dragonmeat = exports.broccoli_prototype = exports.Broccoli = exports.cauliflower_prototype = exports.Cauliflower = exports.cabbage_prototype = exports.Cabbage = exports.lettuce_prototype = exports.Lettuce = exports.tomatoes_prototype = exports.Tomatoes = exports.basil_prototype = exports.Basil = exports.sage_prototype = exports.Sage = exports.chives_prototype = exports.Chives = exports.turmeric_prototype = exports.Turmeric = exports.thyme_prototype = exports.Thyme = exports.rosemary_prototype = exports.Rosemary = exports.parsley_prototype = exports.Parsley = exports.oregano_prototype = exports.Oregano = exports.ginger_prototype = exports.Ginger = exports.garlic_prototype = exports.Garlic = exports.fennel_prototype = exports.Fennel = exports.dill_prototype = exports.Dill = exports.cumin_prototype = exports.Cumin = exports.cilantro_prototype = exports.Cilantro = exports.coriander_prototype = exports.Coriander = exports.pepperChili_prototype = exports.pepperCayenne_prototype = exports.pepperJalapeno_prototype = exports.pepperBell_prototype = exports.pepperWhite_prototype = exports.pepperBlack_prototype = exports.Pepper = exports.pineapple_prototype = exports.Pineapple = exports.banana_prototype = exports.Banana = exports.cherry_prototype = exports.Cherry = exports.berryBlackCurrant_prototype = exports.berryBlueCurrant_prototype = exports.berryRasp_prototype = exports.berryStraw_prototype = exports.berrySnozz_prototype = exports.berryBlack_prototype = exports.berryBlue_prototype = exports.berryRed_prototype = exports.Berry = exports.eggplant_prototype = exports.Eggplant = exports.beet_prototype = exports.Beet = exports.potato_prototype = exports.Potato = exports.carrot_prototype = exports.Carrot = exports.coconut_prototype = exports.Coconut = exports.chestnut_prototype = exports.Chestnut = exports.brazilNut_prototype = exports.BrazilNut = exports.almond_prototype = exports.Almond = exports.walnut_prototype = exports.Walnut = exports.peanut_prototype = exports.Peanut = exports.citrusTangerine_prototype = exports.citrusGrapefruit_prototype = exports.citrusLime_prototype = exports.citrusLemon_prototype = exports.citrusOrange_prototype = exports.Citrus = exports.avocado_prototype = exports.Avocado = exports.grapeMuscadine_prototype = exports.grapePurple_prototype = exports.grapeWhite_prototype = exports.grapeRed_prototype = exports.Grape = exports.sapientPear_prototype = exports.SapientPear = exports.pear_prototype = exports.Pear = exports.appleGolden_prototype = exports.appleGreen_prototype = exports.appleRed_prototype = exports.Apple = exports.mushroomRed_prototype = exports.mushroomMorel_prototype = exports.mushroomGlowing_prototype = exports.mushroomPurple_prototype = exports.mushroomBrown_prototype = exports.mushroomWhite_prototype = exports.Mushroom = exports.beansSoy_prototype = exports.beansJack_prototype = exports.beansGarbanzo_prototype = exports.beansMung_prototype = exports.beansLima_prototype = exports.beansGreen_prototype = exports.beansBlack_prototype = exports.beansPinto_prototype = exports.beansKidney_prototype = exports.Beans = exports.asparagus_prototype = exports.Asparagus = exports.cornOnOheCob_prototype = exports.CornOnTheCob = exports.corn_prototype = exports.Corn = exports.rice_prototype = exports.Rice = exports.seaweedBrown_prototype = exports.seaweedGreen_prototype = exports.seaweedRed_prototype = exports.Seaweed = exports.sugar_prototype = exports.Sugar = exports.pig_feet_prototype = exports.PigFeet = exports.pig_skin_prototype = exports.PigSkin = exports.pork_prototype = exports.Pork = exports.beef_prototype = exports.Beef = exports.shark_meat_prototype = exports.SharkMeat = exports.shrimp_prototype = exports.Shrimp = exports.clam_meat_prototype = exports.ClamMeat = exports.lobster_prototype = exports.Lobster = exports.catfish_prototype = exports.Catfish = exports.crayfish_prototype = exports.Crayfish = exports.carp_prototype = exports.Carp = exports.pike_prototype = exports.Pike = exports.rainbowTrout_prototype = exports.RainbowTrout = exports.trout_prototype = exports.Trout = exports.salmon_prototype = exports.Salmon = exports.sushis = exports.breads = exports.snacks = exports.sandwiches = exports.condiments = exports.spreads = exports.entrees = exports.sides = exports.sauces = exports.cheeses = exports.soups = exports.brines = exports.doughs = exports.sweets = exports.eggs = exports.fungi = exports.insects = exports.others = exports.herbs = exports.spices = exports.berries = exports.starchs = exports.fishes = exports.nuts = exports.grains = exports.fruits = exports.vegetables = exports.seafoods = exports.crustaceans = exports.meats = exports.proteins = exports.foods = exports.Food = void 0;
// ============================================================================
// Language: TypeScript
// Path: ts\itm_food.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var consumables_1 = require("./consumables");
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food() {
        var _this = _super.call(this) || this;
        _this.mustBeDry = false; // does the food need to be dried?
        _this.canBeCooked = true; // can the food be cooked?
        _this.categories.push("Food"); // add food to the list of categories
        _this.singular = "Food";
        _this.plural = "Food";
        _this.description = "Food is something edible";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.dryLevel = 0;
        _this.cookedLevel = 0;
        _this.quality = 0;
        return _this;
    }
    Food.prototype.getInfo = function (qty) {
        switch (qty) {
            case 0:
                return "No " + this.plural;
            case 1:
                var msg = this.canBeCooked ? this.getCookedLevel() + " " : "";
                msg += this.mustBeDry ? this.getDryLevel() + " " : "";
                msg += this.hasType ? this.type + " " : "";
                if (this.getQuality() === "average") {
                    return "An " + this.getQuality() + " " + msg + this.singular;
                }
                else {
                    return "A " + this.getQuality() + " " + msg + this.singular;
                }
            default:
                return "Some " + this.getQuality() + " " + msg + this.plural;
        }
    };
    Food.prototype.getCookedLevel = function () {
        if (this.cookedLevel < 50) {
            return "raw";
        }
        else if (this.cookedLevel < 75) {
            return "rare";
        }
        else if (this.cookedLevel < 90) {
            return "medium-rare";
        }
        else if (this.cookedLevel < 95) {
            return "medium";
        }
        else if (this.cookedLevel < 100) {
            return "medium-well";
        }
        else if (this.cookedLevel < 105) {
            return "well cooked";
        }
        else if (this.cookedLevel < 110) {
            return "slightly burnt";
        }
        else if (this.cookedLevel < 115) {
            return "burnt";
        }
        else if (this.cookedLevel < 120) {
            return "severly burnt";
        }
        else {
            return "incinerated";
        }
    };
    Food.prototype.eat = function () {
        console.log("You eat the " + this.singular + ".");
        this.consume();
        console.log("Your hunger is satified by " + this.hunger + ".");
        console.log("Your thirst is satified by " + this.thirst + ".");
        console.log("You gain " + this.hp + " health.");
    };
    Food.prototype.getDryLevel = function () {
        if (this.dryLevel < 50) {
            return "wet";
        }
        else if (this.dryLevel < 75) {
            return "damp";
        }
        else if (this.dryLevel < 90) {
            return "moist";
        }
        else if (this.dryLevel < 95) {
            return "dry";
        }
        else {
            return "crispy";
        }
    };
    return Food;
}(consumables_1.Consumable));
exports.Food = Food;
exports.foods = [];
exports.proteins = [];
exports.meats = [];
exports.crustaceans = [];
exports.seafoods = [];
exports.vegetables = [];
exports.fruits = [];
exports.grains = [];
exports.nuts = [];
exports.fishes = [];
exports.starchs = [];
exports.berries = [];
exports.spices = [];
exports.herbs = [];
exports.others = [];
exports.insects = [];
exports.fungi = [];
exports.eggs = [];
exports.sweets = [];
exports.doughs = [];
exports.brines = [];
exports.soups = [];
exports.cheeses = [];
exports.sauces = [];
exports.sides = [];
exports.entrees = [];
exports.spreads = [];
exports.condiments = [];
exports.sandwiches = [];
exports.snacks = [];
exports.breads = [];
exports.sushis = [];
var Salmon = /** @class */ (function (_super) {
    __extends(Salmon, _super);
    function Salmon() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Fish", "Salmon");
        _this.singular = "Salmon";
        _this.plural = "Salmon";
        _this.description = "Salmon are fish";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Salmon;
}(Food));
exports.Salmon = Salmon;
exports.salmon_prototype = new Salmon();
exports.fishes.push(exports.salmon_prototype);
var Trout = /** @class */ (function (_super) {
    __extends(Trout, _super);
    function Trout() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Fish", "Trout");
        _this.singular = "Trout";
        _this.plural = "Trout";
        _this.description = "Trout are fish";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Trout;
}(Food));
exports.Trout = Trout;
exports.trout_prototype = new Trout();
exports.fishes.push(exports.trout_prototype);
var RainbowTrout = /** @class */ (function (_super) {
    __extends(RainbowTrout, _super);
    function RainbowTrout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RainbowTrout;
}(Trout));
exports.RainbowTrout = RainbowTrout;
exports.rainbowTrout_prototype = new RainbowTrout();
exports.fishes.push(exports.rainbowTrout_prototype);
var Pike = /** @class */ (function (_super) {
    __extends(Pike, _super);
    function Pike() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Fish", "Pike");
        _this.singular = "Pike";
        _this.plural = "Pike";
        _this.description = "Pike are fish";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Pike;
}(Food));
exports.Pike = Pike;
exports.pike_prototype = new Pike();
exports.fishes.push(exports.pike_prototype);
var Carp = /** @class */ (function (_super) {
    __extends(Carp, _super);
    function Carp() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Fish", "Carp");
        _this.singular = "Carp";
        _this.plural = "Carp";
        _this.description = "Carp are fish";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Carp;
}(Food));
exports.Carp = Carp;
exports.carp_prototype = new Carp();
exports.fishes.push(exports.carp_prototype);
var Crayfish = /** @class */ (function (_super) {
    __extends(Crayfish, _super);
    function Crayfish() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Crustacean", "Crayfish");
        _this.singular = "Crayfish";
        _this.plural = "Crayfish";
        _this.description = "Crayfish are small crustacean";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Crayfish;
}(Food));
exports.Crayfish = Crayfish;
exports.crayfish_prototype = new Crayfish();
exports.crustaceans.push(exports.crayfish_prototype);
var Catfish = /** @class */ (function (_super) {
    __extends(Catfish, _super);
    function Catfish() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Fish", "Catfish");
        _this.singular = "Catfish";
        _this.plural = "Catfish";
        _this.description = "Whiskered bottom feeders";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Catfish;
}(Food));
exports.Catfish = Catfish;
exports.catfish_prototype = new Catfish();
exports.fishes.push(exports.catfish_prototype);
var Lobster = /** @class */ (function (_super) {
    __extends(Lobster, _super);
    function Lobster() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Crustacean", "Lobster");
        _this.singular = "Lobster";
        _this.plural = "Lobster";
        _this.description = "Lobsters are crustaceans";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Lobster;
}(Food));
exports.Lobster = Lobster;
exports.lobster_prototype = new Lobster();
exports.crustaceans.push(exports.lobster_prototype);
var ClamMeat = /** @class */ (function (_super) {
    __extends(ClamMeat, _super);
    function ClamMeat() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Clam Meat");
        _this.singular = "Clam Meat";
        _this.plural = "Clam Meat";
        _this.description = "The fleshy bits from inside a clam";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return ClamMeat;
}(Food));
exports.ClamMeat = ClamMeat;
exports.clam_meat_prototype = new ClamMeat();
exports.seafoods.push(exports.clam_meat_prototype);
var Shrimp = /** @class */ (function (_super) {
    __extends(Shrimp, _super);
    function Shrimp() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Fish", "Shrimp");
        _this.singular = "Shrimp";
        _this.plural = "Shrimp";
        _this.description = "Shrimp are small crustaceans";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Shrimp;
}(Food));
exports.Shrimp = Shrimp;
exports.shrimp_prototype = new Shrimp();
exports.fishes.push(exports.shrimp_prototype);
var SharkMeat = /** @class */ (function (_super) {
    __extends(SharkMeat, _super);
    function SharkMeat() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Seafood", "Fish", "Shark Meat");
        _this.singular = "Shark Meat";
        _this.plural = "Shark Meat";
        _this.description = "Shark meat";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return SharkMeat;
}(Food));
exports.SharkMeat = SharkMeat;
exports.shark_meat_prototype = new SharkMeat();
exports.fishes.push(exports.shark_meat_prototype);
var Beef = /** @class */ (function (_super) {
    __extends(Beef, _super);
    function Beef() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Meat", "Beef");
        _this.singular = "Beef";
        _this.plural = "Beef";
        _this.description = "Meat from a cow";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Beef;
}(Food));
exports.Beef = Beef;
exports.beef_prototype = new Beef();
exports.meats.push(exports.beef_prototype);
var Pork = /** @class */ (function (_super) {
    __extends(Pork, _super);
    function Pork() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Meat", "Pork");
        _this.singular = "Pork";
        _this.plural = "Pork";
        _this.description = "Meat from a pig";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Pork;
}(Food));
exports.Pork = Pork;
exports.pork_prototype = new Pork();
exports.meats.push(exports.pork_prototype);
var PigSkin = /** @class */ (function (_super) {
    __extends(PigSkin, _super);
    function PigSkin() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Pig Skin");
        _this.singular = "Pig Skin";
        _this.plural = "Pig Skin";
        _this.description = "Skin from a pig";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.mustBeDry = true;
        _this.sources = ["Farming"];
        return _this;
    }
    return PigSkin;
}(Food));
exports.PigSkin = PigSkin;
exports.pig_skin_prototype = new PigSkin();
exports.meats.push(exports.pig_skin_prototype);
var PigFeet = /** @class */ (function (_super) {
    __extends(PigFeet, _super);
    function PigFeet() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Pig Feet");
        _this.singular = "Pig's Feet";
        _this.plural = "Pig's Feet";
        _this.description = "Feet from a pig";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PigFeet;
}(Food));
exports.PigFeet = PigFeet;
exports.pig_feet_prototype = new PigFeet();
exports.meats.push(exports.pig_feet_prototype);
var Sugar = /** @class */ (function (_super) {
    __extends(Sugar, _super);
    function Sugar() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sugar");
        _this.singular = "Sugar";
        _this.plural = "Sugar";
        _this.description = "Sweet powder";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.mustBeDry = true;
        _this.canBeCooked = false;
        _this.sources = ["Milling"];
        return _this;
    }
    return Sugar;
}(Food));
exports.Sugar = Sugar;
exports.sugar_prototype = new Sugar();
exports.sweets.push(exports.sugar_prototype);
var Seaweed = /** @class */ (function (_super) {
    __extends(Seaweed, _super);
    function Seaweed(type) {
        var _this = _super.call(this) || this;
        _this.categories.push("Seafood", "Seaweed");
        _this.hasType = true;
        _this.type = type;
        _this.singular = "Seaweed";
        _this.plural = "Seaweed";
        _this.description = "Seaweed";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Seaweed;
}(Food));
exports.Seaweed = Seaweed;
exports.seaweedRed_prototype = new Seaweed("red");
exports.seaweedGreen_prototype = new Seaweed("green");
exports.seaweedBrown_prototype = new Seaweed("brown");
exports.seafoods.push(exports.seaweedRed_prototype, exports.seaweedGreen_prototype, exports.seaweedBrown_prototype);
var Rice = /** @class */ (function (_super) {
    __extends(Rice, _super);
    function Rice() {
        var _this = _super.call(this) || this;
        _this.categories.push("Grain", "Rice");
        _this.singular = "Rice";
        _this.plural = "Rice";
        _this.description = "Rice";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Rice;
}(Food));
exports.Rice = Rice;
exports.rice_prototype = new Rice();
exports.grains.push(exports.rice_prototype);
var Corn = /** @class */ (function (_super) {
    __extends(Corn, _super);
    function Corn() {
        var _this = _super.call(this) || this;
        _this.categories.push("Grain", "Corn");
        _this.singular = "Corn";
        _this.plural = "Corn";
        _this.description = "Corn";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Corn;
}(Food));
exports.Corn = Corn;
exports.corn_prototype = new Corn();
exports.grains.push(exports.corn_prototype);
var CornOnTheCob = /** @class */ (function (_super) {
    __extends(CornOnTheCob, _super);
    function CornOnTheCob() {
        var _this = _super.call(this) || this;
        _this.categories.push("Grain", "Corn on the Cob");
        _this.singular = "Corn on the Cob";
        _this.plural = "Corn on the Cob";
        _this.description = "Corn on the Cob";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CornOnTheCob;
}(Food));
exports.CornOnTheCob = CornOnTheCob;
exports.cornOnOheCob_prototype = new CornOnTheCob();
exports.grains.push(exports.cornOnOheCob_prototype);
var Asparagus = /** @class */ (function (_super) {
    __extends(Asparagus, _super);
    function Asparagus() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Asparagus");
        _this.singular = "Asparagus";
        _this.plural = "Asparagus";
        _this.description = "Asparagus";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Asparagus;
}(Food));
exports.Asparagus = Asparagus;
exports.asparagus_prototype = new Asparagus();
exports.vegetables.push(exports.asparagus_prototype);
var Beans = /** @class */ (function (_super) {
    __extends(Beans, _super);
    function Beans(type) {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Beans");
        _this.hasType = true;
        _this.type = type;
        _this.singular = type + " bean";
        _this.plural = _this.singular + "s";
        _this.description = "good for your heart";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Beans;
}(Food));
exports.Beans = Beans;
exports.beansKidney_prototype = new Beans("kidney");
exports.beansPinto_prototype = new Beans("pinto");
exports.beansBlack_prototype = new Beans("black");
exports.beansGreen_prototype = new Beans("green");
exports.beansLima_prototype = new Beans("lima");
exports.beansMung_prototype = new Beans("mung");
exports.beansGarbanzo_prototype = new Beans("garbanzo");
exports.beansJack_prototype = new Beans("jack");
exports.beansSoy_prototype = new Beans("soy");
exports.proteins.push(exports.beansKidney_prototype, exports.beansPinto_prototype, exports.beansBlack_prototype, exports.beansGreen_prototype, exports.beansLima_prototype, exports.beansMung_prototype, exports.beansGarbanzo_prototype, exports.beansJack_prototype, exports.beansSoy_prototype);
var Mushroom = /** @class */ (function (_super) {
    __extends(Mushroom, _super);
    function Mushroom(type, weight) {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Mushroom");
        _this.hasType = true;
        _this.type = type;
        _this.singular = (_this.type === "morel") ? _this.type : _this.type + " mushroom";
        _this.plural = _this.singular + "s";
        _this.description = "fun mush";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = weight; // weight defined on the objet itself instead of globally
        _this.sources = ["Foraging", "Farming"];
        return _this;
    }
    return Mushroom;
}(Food));
exports.Mushroom = Mushroom;
exports.mushroomWhite_prototype = new Mushroom("white", 0);
exports.mushroomBrown_prototype = new Mushroom("brown", 0);
exports.mushroomPurple_prototype = new Mushroom("purple", 0);
exports.mushroomGlowing_prototype = new Mushroom("glowing", 0);
exports.mushroomMorel_prototype = new Mushroom("morel", 0);
exports.mushroomRed_prototype = new Mushroom("red", 0);
exports.proteins.push(exports.mushroomWhite_prototype, exports.mushroomBrown_prototype, exports.mushroomPurple_prototype, exports.mushroomGlowing_prototype, exports.mushroomMorel_prototype, exports.mushroomRed_prototype);
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(type) {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit", "Apple");
        _this.hasType = true;
        _this.type = type;
        _this.singular = type + " apple";
        _this.plural = _this.singular + "s";
        _this.description = "fun apple";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming", "Foraging"];
        return _this;
    }
    return Apple;
}(Food));
exports.Apple = Apple;
exports.appleRed_prototype = new Apple("red");
exports.appleGreen_prototype = new Apple("green");
exports.appleGolden_prototype = new Apple("golden");
exports.fruits.push(exports.appleRed_prototype, exports.appleGreen_prototype, exports.appleGolden_prototype);
var Pear = /** @class */ (function (_super) {
    __extends(Pear, _super);
    function Pear() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit", "Pear");
        _this.singular = "Pear";
        _this.plural = "Pears";
        _this.description = "Pear";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Pear;
}(Food));
exports.Pear = Pear;
exports.pear_prototype = new Pear();
exports.fruits.push(exports.pear_prototype);
var SapientPear = /** @class */ (function (_super) {
    __extends(SapientPear, _super);
    function SapientPear() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit", "Pear");
        _this.singular = "Pear";
        _this.plural = "Pears";
        _this.description = "Pear";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return SapientPear;
}(Food));
exports.SapientPear = SapientPear;
exports.sapientPear_prototype = new SapientPear();
exports.fruits.push(exports.sapientPear_prototype);
var Grape = /** @class */ (function (_super) {
    __extends(Grape, _super);
    function Grape(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Fruit", "Grape");
        _this.singular = "Grape";
        _this.plural = "Grapes";
        _this.description = "Grape";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Grape;
}(Food));
exports.Grape = Grape;
exports.grapeRed_prototype = new Grape("red");
exports.grapeWhite_prototype = new Grape("white");
exports.grapePurple_prototype = new Grape("purple");
exports.grapeMuscadine_prototype = new Grape("muscadine");
exports.fruits.push(exports.grapeRed_prototype, exports.grapeWhite_prototype, exports.grapePurple_prototype, exports.grapeMuscadine_prototype);
var Avocado = /** @class */ (function (_super) {
    __extends(Avocado, _super);
    function Avocado() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit", "Avocado");
        _this.singular = "Avocado";
        _this.plural = "Avocados";
        _this.description = "Avocado";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Avocado;
}(Food));
exports.Avocado = Avocado;
exports.avocado_prototype = new Avocado();
exports.fruits.push(exports.avocado_prototype);
var Citrus = /** @class */ (function (_super) {
    __extends(Citrus, _super);
    function Citrus(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Fruit", "Citrus");
        _this.singular = "Citrus";
        _this.plural = "Citrus";
        _this.description = "acidic fruit with a protective peel";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Citrus;
}(Food));
exports.Citrus = Citrus;
exports.citrusOrange_prototype = new Citrus("orange");
exports.citrusLemon_prototype = new Citrus("lemon");
exports.citrusLime_prototype = new Citrus("lime");
exports.citrusGrapefruit_prototype = new Citrus("grapefruit");
exports.citrusTangerine_prototype = new Citrus("tangerine");
exports.fruits.push(exports.citrusOrange_prototype, exports.citrusLemon_prototype, exports.citrusLime_prototype, exports.citrusGrapefruit_prototype, exports.citrusTangerine_prototype);
var Peanut = /** @class */ (function (_super) {
    __extends(Peanut, _super);
    function Peanut() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Nut", "Peanut");
        _this.singular = "Peanut";
        _this.plural = "Peanuts";
        _this.description = "Peanut";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Peanut;
}(Food));
exports.Peanut = Peanut;
exports.peanut_prototype = new Peanut();
exports.nuts.push(exports.peanut_prototype);
var Walnut = /** @class */ (function (_super) {
    __extends(Walnut, _super);
    function Walnut() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Nut", "Walnut");
        _this.singular = "Walnut";
        _this.plural = "Walnuts";
        _this.description = "Walnut";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Walnut;
}(Food));
exports.Walnut = Walnut;
exports.walnut_prototype = new Walnut();
exports.nuts.push(exports.walnut_prototype);
var Almond = /** @class */ (function (_super) {
    __extends(Almond, _super);
    function Almond() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Nut", "Almond");
        _this.singular = "Almond";
        _this.plural = "Almonds";
        _this.description = "Almond";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Almond;
}(Food));
exports.Almond = Almond;
exports.almond_prototype = new Almond();
exports.nuts.push(exports.almond_prototype);
var BrazilNut = /** @class */ (function (_super) {
    __extends(BrazilNut, _super);
    function BrazilNut() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Nut", "Brazil Nut");
        _this.singular = "Brazil Nut";
        _this.plural = "Brazil Nuts";
        _this.description = "Brazil Nut";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return BrazilNut;
}(Food));
exports.BrazilNut = BrazilNut;
exports.brazilNut_prototype = new BrazilNut();
exports.nuts.push(exports.brazilNut_prototype);
var Chestnut = /** @class */ (function (_super) {
    __extends(Chestnut, _super);
    function Chestnut() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Nut", "Chestnut");
        _this.singular = "Chestnut";
        _this.plural = "Chestnuts";
        _this.description = "Chestnut";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Questing"];
        return _this;
    }
    return Chestnut;
}(Food));
exports.Chestnut = Chestnut;
exports.chestnut_prototype = new Chestnut();
exports.nuts.push(exports.chestnut_prototype);
var Coconut = /** @class */ (function (_super) {
    __extends(Coconut, _super);
    function Coconut() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit", "Coconut");
        _this.singular = "Coconut";
        _this.plural = "Coconuts";
        _this.description = "Coconut";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Coconut;
}(Food));
exports.Coconut = Coconut;
exports.coconut_prototype = new Coconut();
exports.fruits.push(exports.coconut_prototype);
var Carrot = /** @class */ (function (_super) {
    __extends(Carrot, _super);
    function Carrot() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Carrot");
        _this.singular = "Carrot";
        _this.plural = "Carrots";
        _this.description = "Carrot";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Carrot;
}(Food));
exports.Carrot = Carrot;
exports.carrot_prototype = new Carrot();
exports.vegetables.push(exports.carrot_prototype);
var Potato = /** @class */ (function (_super) {
    __extends(Potato, _super);
    function Potato() {
        var _this = _super.call(this) || this;
        _this.categories.push("Starch", "Potato");
        _this.singular = "Potato";
        _this.plural = "Potatoes";
        _this.description = "Potato";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming", "Foraging"];
        return _this;
    }
    return Potato;
}(Food));
exports.Potato = Potato;
exports.potato_prototype = new Potato();
exports.starchs.push(exports.potato_prototype);
var Beet = /** @class */ (function (_super) {
    __extends(Beet, _super);
    function Beet() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Beet");
        _this.singular = "Beet";
        _this.plural = "Beets";
        _this.description = "Beet";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Beet;
}(Food));
exports.Beet = Beet;
exports.beet_prototype = new Beet();
exports.vegetables.push(exports.beet_prototype);
var Eggplant = /** @class */ (function (_super) {
    __extends(Eggplant, _super);
    function Eggplant() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Eggplant");
        _this.singular = "Eggplant";
        _this.plural = "Eggplants";
        _this.description = "Eggplant";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Eggplant;
}(Food));
exports.Eggplant = Eggplant;
exports.eggplant_prototype = new Eggplant();
exports.vegetables.push(exports.eggplant_prototype);
var Berry = /** @class */ (function (_super) {
    __extends(Berry, _super);
    function Berry(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Fruit", "Berry");
        if (type === "blue currant" || type === "black currant") {
            _this.singular = _this.type;
            _this.plural = _this.singular + "s";
        }
        else {
            _this.singular = _this.type + "berry";
            _this.plural = _this.type + "berries";
        }
        _this.description = "sweet fruit from a bush";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Berry;
}(Food));
exports.Berry = Berry;
exports.berryRed_prototype = new Berry("red");
exports.berryBlue_prototype = new Berry("blue");
exports.berryBlack_prototype = new Berry("black");
exports.berrySnozz_prototype = new Berry("snozz");
exports.berryStraw_prototype = new Berry("straw");
exports.berryRasp_prototype = new Berry("rasp");
exports.berryBlueCurrant_prototype = new Berry("blue currant");
exports.berryBlackCurrant_prototype = new Berry("black currant");
exports.berries.push(exports.berryRed_prototype, exports.berryBlue_prototype, exports.berryBlack_prototype, exports.berrySnozz_prototype, exports.berryStraw_prototype, exports.berryRasp_prototype, exports.berryBlueCurrant_prototype, exports.berryBlackCurrant_prototype);
var Cherry = /** @class */ (function (_super) {
    __extends(Cherry, _super);
    function Cherry() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit", "Cherry");
        _this.singular = "Cherry";
        _this.plural = "Cherries";
        _this.description = "Cherry";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Cherry;
}(Food));
exports.Cherry = Cherry;
exports.cherry_prototype = new Cherry();
exports.fruits.push(exports.cherry_prototype);
var Banana = /** @class */ (function (_super) {
    __extends(Banana, _super);
    function Banana() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit", "Banana");
        _this.singular = "Banana";
        _this.plural = "Bananas";
        _this.description = "Banana";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Banana;
}(Food));
exports.Banana = Banana;
exports.banana_prototype = new Banana();
exports.fruits.push(exports.banana_prototype);
var Pineapple = /** @class */ (function (_super) {
    __extends(Pineapple, _super);
    function Pineapple() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit", "Pineapple");
        _this.singular = "Pineapple";
        _this.plural = "Pineapples";
        _this.description = "Pineapple";
        _this.hunger = 10;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Pineapple;
}(Food));
exports.Pineapple = Pineapple;
exports.pineapple_prototype = new Pineapple();
exports.fruits.push(exports.pineapple_prototype);
var Pepper = /** @class */ (function (_super) {
    __extends(Pepper, _super);
    function Pepper(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Spice", "Pepper");
        _this.singular = _this.type + " pepper";
        _this.plural = _this.singular + "s";
        _this.description = "pepper";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Pepper;
}(Food));
exports.Pepper = Pepper;
exports.pepperBlack_prototype = new Pepper("black");
exports.pepperWhite_prototype = new Pepper("white");
exports.pepperBell_prototype = new Pepper("bell");
exports.pepperJalapeno_prototype = new Pepper("jalapeno");
exports.pepperCayenne_prototype = new Pepper("cayenne");
exports.pepperChili_prototype = new Pepper("chili");
exports.spices.push(exports.pepperBlack_prototype, exports.pepperWhite_prototype, exports.pepperBell_prototype, exports.pepperJalapeno_prototype, exports.pepperCayenne_prototype, exports.pepperChili_prototype);
var Coriander = /** @class */ (function (_super) {
    __extends(Coriander, _super);
    function Coriander() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Coriander");
        _this.singular = "Coriander";
        _this.plural = "Coriander";
        _this.description = "Coriander";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Coriander;
}(Food));
exports.Coriander = Coriander;
exports.coriander_prototype = new Coriander();
exports.herbs.push(exports.coriander_prototype);
var Cilantro = /** @class */ (function (_super) {
    __extends(Cilantro, _super);
    function Cilantro() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Cilantro");
        _this.singular = "Cilantro";
        _this.plural = "Cilantro";
        _this.description = "Cilantro";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Cilantro;
}(Food));
exports.Cilantro = Cilantro;
exports.cilantro_prototype = new Cilantro();
exports.herbs.push(exports.cilantro_prototype);
var Cumin = /** @class */ (function (_super) {
    __extends(Cumin, _super);
    function Cumin() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Cumin");
        _this.singular = "Cumin";
        _this.plural = "Cumin";
        _this.description = "Cumin";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Cumin;
}(Food));
exports.Cumin = Cumin;
exports.cumin_prototype = new Cumin();
exports.spices.push(exports.cumin_prototype);
var Dill = /** @class */ (function (_super) {
    __extends(Dill, _super);
    function Dill() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Dill");
        _this.singular = "Dill";
        _this.plural = "Dill";
        _this.description = "Dill";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Dill;
}(Food));
exports.Dill = Dill;
exports.dill_prototype = new Dill();
exports.herbs.push(exports.dill_prototype);
var Fennel = /** @class */ (function (_super) {
    __extends(Fennel, _super);
    function Fennel() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Fennel");
        _this.singular = "Fennel";
        _this.plural = "Fennel";
        _this.description = "Fennel";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Fennel;
}(Food));
exports.Fennel = Fennel;
exports.fennel_prototype = new Fennel();
exports.herbs.push(exports.fennel_prototype);
var Garlic = /** @class */ (function (_super) {
    __extends(Garlic, _super);
    function Garlic() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Garlic");
        _this.singular = "Garlic";
        _this.plural = "Garlic";
        _this.description = "Garlic";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Garlic;
}(Food));
exports.Garlic = Garlic;
exports.garlic_prototype = new Garlic();
exports.herbs.push(exports.garlic_prototype);
var Ginger = /** @class */ (function (_super) {
    __extends(Ginger, _super);
    function Ginger() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Ginger");
        _this.singular = "Ginger";
        _this.plural = "Ginger";
        _this.description = "Ginger";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Ginger;
}(Food));
exports.Ginger = Ginger;
exports.ginger_prototype = new Ginger();
exports.herbs.push(exports.ginger_prototype);
var Oregano = /** @class */ (function (_super) {
    __extends(Oregano, _super);
    function Oregano() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Oregano");
        _this.singular = "Oregano";
        _this.plural = "Oregano";
        _this.description = "Oregano";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Oregano;
}(Food));
exports.Oregano = Oregano;
exports.oregano_prototype = new Oregano();
exports.herbs.push(exports.oregano_prototype);
var Parsley = /** @class */ (function (_super) {
    __extends(Parsley, _super);
    function Parsley() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Parsley");
        _this.singular = "Parsley";
        _this.plural = "Parsley";
        _this.description = "Parsley";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Parsley;
}(Food));
exports.Parsley = Parsley;
exports.parsley_prototype = new Parsley();
exports.herbs.push(exports.parsley_prototype);
var Rosemary = /** @class */ (function (_super) {
    __extends(Rosemary, _super);
    function Rosemary() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Rosemary");
        _this.singular = "Rosemary";
        _this.plural = "Rosemary";
        _this.description = "Rosemary";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Rosemary;
}(Food));
exports.Rosemary = Rosemary;
exports.rosemary_prototype = new Rosemary();
exports.herbs.push(exports.rosemary_prototype);
var Thyme = /** @class */ (function (_super) {
    __extends(Thyme, _super);
    function Thyme() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Thyme");
        _this.singular = "Thyme";
        _this.plural = "Thyme";
        _this.description = "Thyme";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Thyme;
}(Food));
exports.Thyme = Thyme;
exports.thyme_prototype = new Thyme();
exports.herbs.push(exports.thyme_prototype);
var Turmeric = /** @class */ (function (_super) {
    __extends(Turmeric, _super);
    function Turmeric() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Turmeric");
        _this.singular = "Turmeric";
        _this.plural = "Turmeric";
        _this.description = "Turmeric";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Turmeric;
}(Food));
exports.Turmeric = Turmeric;
exports.turmeric_prototype = new Turmeric();
exports.spices.push(exports.turmeric_prototype);
var Chives = /** @class */ (function (_super) {
    __extends(Chives, _super);
    function Chives() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Chives");
        _this.singular = "Chives";
        _this.plural = "Chives";
        _this.description = "Chives";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Chives;
}(Food));
exports.Chives = Chives;
exports.chives_prototype = new Chives();
exports.herbs.push(exports.chives_prototype);
var Sage = /** @class */ (function (_super) {
    __extends(Sage, _super);
    function Sage() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Sage");
        _this.singular = "Sage";
        _this.plural = "Sage";
        _this.description = "Sage";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Sage;
}(Food));
exports.Sage = Sage;
exports.sage_prototype = new Sage();
exports.herbs.push(exports.sage_prototype);
var Basil = /** @class */ (function (_super) {
    __extends(Basil, _super);
    function Basil() {
        var _this = _super.call(this) || this;
        _this.categories.push("Herb", "Basil");
        _this.singular = "Basil";
        _this.plural = "Basil";
        _this.description = "Basil";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Basil;
}(Food));
exports.Basil = Basil;
exports.basil_prototype = new Basil();
exports.herbs.push(exports.basil_prototype);
var Tomatoes = /** @class */ (function (_super) {
    __extends(Tomatoes, _super);
    function Tomatoes() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit", "Tomatoes");
        _this.singular = "Tomato";
        _this.plural = "Tomatoes";
        _this.description = "Tomatoes";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Tomatoes;
}(Food));
exports.Tomatoes = Tomatoes;
exports.tomatoes_prototype = new Tomatoes();
exports.fruits.push(exports.tomatoes_prototype);
var Lettuce = /** @class */ (function (_super) {
    __extends(Lettuce, _super);
    function Lettuce() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Lettuce");
        _this.singular = "Lettuce";
        _this.plural = "Lettuce";
        _this.description = "Lettuce";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Lettuce;
}(Food));
exports.Lettuce = Lettuce;
exports.lettuce_prototype = new Lettuce();
exports.vegetables.push(exports.lettuce_prototype);
var Cabbage = /** @class */ (function (_super) {
    __extends(Cabbage, _super);
    function Cabbage() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Cabbage");
        _this.singular = "Cabbage";
        _this.plural = "Cabbage";
        _this.description = "Cabbage";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Cabbage;
}(Food));
exports.Cabbage = Cabbage;
exports.cabbage_prototype = new Cabbage();
exports.vegetables.push(exports.cabbage_prototype);
var Cauliflower = /** @class */ (function (_super) {
    __extends(Cauliflower, _super);
    function Cauliflower() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Cauliflower");
        _this.singular = "Cauliflower";
        _this.plural = "Cauliflower";
        _this.description = "Cauliflower";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Cauliflower;
}(Food));
exports.Cauliflower = Cauliflower;
exports.cauliflower_prototype = new Cauliflower();
exports.vegetables.push(exports.cauliflower_prototype);
var Broccoli = /** @class */ (function (_super) {
    __extends(Broccoli, _super);
    function Broccoli() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Broccoli");
        _this.singular = "Broccoli";
        _this.plural = "Broccoli";
        _this.description = "Broccoli";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Broccoli;
}(Food));
exports.Broccoli = Broccoli;
exports.broccoli_prototype = new Broccoli();
exports.vegetables.push(exports.broccoli_prototype);
var Dragonmeat = /** @class */ (function (_super) {
    __extends(Dragonmeat, _super);
    function Dragonmeat() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Meat", "Dragonmeat");
        _this.singular = "Dragonmeat";
        _this.plural = "Dragonmeat";
        _this.description = "Dragonmeat";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Questing"];
        return _this;
    }
    return Dragonmeat;
}(Food));
exports.Dragonmeat = Dragonmeat;
exports.dragonmeat_prototype = new Dragonmeat();
exports.meats.push(exports.dragonmeat_prototype);
var Grubs = /** @class */ (function (_super) {
    __extends(Grubs, _super);
    function Grubs() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Grubs");
        _this.singular = "Grub";
        _this.plural = "Grubs";
        _this.description = "Grubs";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Grubs;
}(Food));
exports.Grubs = Grubs;
exports.grubs_prototype = new Grubs();
exports.proteins.push(exports.grubs_prototype);
var Brains = /** @class */ (function (_super) {
    __extends(Brains, _super);
    function Brains() {
        var _this = _super.call(this) || this;
        _this.categories.push("Other", "Brain");
        _this.singular = "Brain";
        _this.plural = "Brains";
        _this.description = "Brains";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Brains;
}(Food));
exports.Brains = Brains;
exports.brains_prototype = new Brains();
exports.others.push(exports.brains_prototype);
var Mealworms = /** @class */ (function (_super) {
    __extends(Mealworms, _super);
    function Mealworms() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Insects", "Mealworm");
        _this.singular = "Mealworm";
        _this.plural = "Mealworms";
        _this.description = "Mealworms";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Mealworms;
}(Food));
exports.Mealworms = Mealworms;
exports.mealworms_prototype = new Mealworms();
exports.insects.push(exports.mealworms_prototype);
var Beetles = /** @class */ (function (_super) {
    __extends(Beetles, _super);
    function Beetles() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Insects", "Beetle");
        _this.singular = "Beetle";
        _this.plural = "Beetles";
        _this.description = "Beetles";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Beetles;
}(Food));
exports.Beetles = Beetles;
exports.beetles_prototype = new Beetles();
exports.insects.push(exports.beetles_prototype);
var Ants = /** @class */ (function (_super) {
    __extends(Ants, _super);
    function Ants(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Protein", "Insects", "Ant");
        _this.singular = _this.type + "ant";
        _this.plural = _this.singular + "s";
        _this.description = "ants";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Ants;
}(Food));
exports.Ants = Ants;
exports.antsRed_prototype = new Ants("red");
exports.antsBlack_prototype = new Ants("black");
exports.antsFire_prototype = new Ants("fire");
exports.insects.push(exports.antsRed_prototype, exports.antsBlack_prototype, exports.antsFire_prototype);
var Ooze = /** @class */ (function (_super) {
    __extends(Ooze, _super);
    function Ooze(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Other", "Ooze");
        _this.singular = _this.type + "Ooze";
        _this.plural = _this.singular;
        _this.description = "Ooze";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging", "Questing"];
        return _this;
    }
    return Ooze;
}(Food));
exports.Ooze = Ooze;
exports.oozeGray_prototype = new Ooze("gray");
exports.oozeGreen_prototype = new Ooze("green");
exports.oozeSuperior_prototype = new Ooze("superior");
exports.oozePurple_prototype = new Ooze("purple");
exports.others.push(exports.oozeGray_prototype, exports.oozeGreen_prototype, exports.oozeSuperior_prototype, exports.oozePurple_prototype);
var Glowworm = /** @class */ (function (_super) {
    __extends(Glowworm, _super);
    function Glowworm() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Insects", "Glowworm");
        _this.singular = "Glowworm";
        _this.plural = "Glowworms";
        _this.description = "Glowworms";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Glowworm;
}(Food));
exports.Glowworm = Glowworm;
exports.glowworm_prototype = new Glowworm();
exports.insects.push(exports.glowworm_prototype);
var HumanoidFlesh = /** @class */ (function (_super) {
    __extends(HumanoidFlesh, _super);
    function HumanoidFlesh() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Meat", "Other", "Humanoid Flesh");
        _this.singular = "Humanoid Flesh";
        _this.plural = "Humanoid Flesh";
        _this.description = "Humanoid Flesh";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Religious Ceremony"];
        return _this;
    }
    return HumanoidFlesh;
}(Food));
exports.HumanoidFlesh = HumanoidFlesh;
exports.humanoidFlesh_prototype = new HumanoidFlesh();
exports.meats.push(exports.humanoidFlesh_prototype);
exports.others.push(exports.humanoidFlesh_prototype);
var Venison = /** @class */ (function (_super) {
    __extends(Venison, _super);
    function Venison() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Meat", "Venison");
        _this.singular = "Venison";
        _this.plural = "Venison";
        _this.description = "Deer Meat";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Hunting"];
        return _this;
    }
    return Venison;
}(Food));
exports.Venison = Venison;
exports.venison_prototype = new Venison();
exports.meats.push(exports.venison_prototype);
var ReindeerVenison = /** @class */ (function (_super) {
    __extends(ReindeerVenison, _super);
    function ReindeerVenison() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReindeerVenison;
}(Venison));
exports.ReindeerVenison = ReindeerVenison;
exports.reindeer_venison_prototype = new ReindeerVenison();
exports.meats.push(exports.reindeer_venison_prototype);
var Sprouts = /** @class */ (function (_super) {
    __extends(Sprouts, _super);
    function Sprouts() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegatable", "Sprout");
        _this.singular = "Sprout";
        _this.plural = "Sprouts";
        _this.description = "Sprouts";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Sprouts;
}(Food));
exports.Sprouts = Sprouts;
exports.sprouts_prototype = new Sprouts();
exports.vegetables.push(exports.sprouts_prototype);
var MapleSap = /** @class */ (function (_super) {
    __extends(MapleSap, _super);
    function MapleSap() {
        var _this = _super.call(this) || this;
        _this.categories.push("Other", "Maple Sap");
        _this.singular = "Maple Sap";
        _this.plural = "Maple Sap";
        _this.description = "Maple Sap";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return MapleSap;
}(Food));
exports.MapleSap = MapleSap;
exports.mapleSap_prototype = new MapleSap();
exports.others.push(exports.mapleSap_prototype);
var Acorns = /** @class */ (function (_super) {
    __extends(Acorns, _super);
    function Acorns() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Nuts", "Acorn");
        _this.singular = "Acorn";
        _this.plural = "Acorns";
        _this.description = "Acorns";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return Acorns;
}(Food));
exports.Acorns = Acorns;
exports.acorns_prototype = new Acorns();
exports.nuts.push(exports.acorns_prototype);
var VanillaBean = /** @class */ (function (_super) {
    __extends(VanillaBean, _super);
    function VanillaBean() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Vanilla Bean");
        _this.singular = "Vanilla Bean";
        _this.plural = "Vanilla Beans";
        _this.description = "Vanilla Beans";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return VanillaBean;
}(Food));
exports.VanillaBean = VanillaBean;
exports.vanillaBean_prototype = new VanillaBean();
exports.spices.push(exports.vanillaBean_prototype);
var Cucumbers = /** @class */ (function (_super) {
    __extends(Cucumbers, _super);
    function Cucumbers() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Cucumber");
        _this.singular = "Cucumber";
        _this.plural = "Cucumbers";
        _this.description = "Cucumbers";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Cucumbers;
}(Food));
exports.Cucumbers = Cucumbers;
exports.cucumbers_prototype = new Cucumbers();
exports.vegetables.push(exports.cucumbers_prototype);
var Onion = /** @class */ (function (_super) {
    __extends(Onion, _super);
    function Onion(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Vegetable", "Onion");
        _this.singular = _this.type + "onion";
        _this.plural = _this.singular + "s";
        _this.description = "they have layers";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Onion;
}(Food));
exports.Onion = Onion;
exports.purpleOnion_prototype = new Onion("purple");
exports.whiteOnion_prototype = new Onion("white");
exports.greenOnion_prototype = new Onion("green");
exports.redOnion_prototype = new Onion("red");
exports.vegetables.push(exports.purpleOnion_prototype, exports.whiteOnion_prototype, exports.greenOnion_prototype, exports.redOnion_prototype);
var Egg = /** @class */ (function (_super) {
    __extends(Egg, _super);
    function Egg(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Protein", "Dairy", "Egg");
        _this.singular = _this.type + " egg";
        _this.plural = _this.singular + "s";
        _this.description = "unborn animal in a shell";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming", "Fishing", "Foraging", "Questing"];
        return _this;
    }
    return Egg;
}(Food));
exports.Egg = Egg;
exports.chickenEgg_prototype = new Egg("chicken");
exports.fishEgg_prototype = new Egg("fish");
exports.snakeEgg_prototype = new Egg("snake");
exports.lizardEgg_prototype = new Egg("lizard");
exports.dragonEgg_prototype = new Egg("dragon");
exports.eggs.push(exports.chickenEgg_prototype, exports.fishEgg_prototype, exports.snakeEgg_prototype, exports.lizardEgg_prototype, exports.dragonEgg_prototype);
consumables_1.dairies.push(exports.chickenEgg_prototype, exports.fishEgg_prototype, exports.snakeEgg_prototype, exports.lizardEgg_prototype, exports.dragonEgg_prototype);
var SoySauce = /** @class */ (function (_super) {
    __extends(SoySauce, _super);
    function SoySauce() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Soy Sauce");
        _this.singular = "Soy Sauce";
        _this.plural = "Soy Sauce";
        _this.description = "Soy Sauce";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return SoySauce;
}(Food));
exports.SoySauce = SoySauce;
exports.soySauce_prototype = new SoySauce();
exports.spices.push(exports.soySauce_prototype);
var CocoaBeans = /** @class */ (function (_super) {
    __extends(CocoaBeans, _super);
    function CocoaBeans() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Cocoa Beans");
        _this.singular = "Cocoa Beans";
        _this.plural = "Cocoa Beans";
        _this.description = "Cocoa Beans";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CocoaBeans;
}(Food));
exports.CocoaBeans = CocoaBeans;
exports.cocoaBeans_prototype = new CocoaBeans();
exports.spices.push(exports.cocoaBeans_prototype);
var CoffeeBeans = /** @class */ (function (_super) {
    __extends(CoffeeBeans, _super);
    function CoffeeBeans() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Coffee Beans");
        _this.singular = "Coffee Beans";
        _this.plural = "Coffee Beans";
        _this.description = "Coffee Beans";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CoffeeBeans;
}(Food));
exports.CoffeeBeans = CoffeeBeans;
exports.coffeeBeans_prototype = new CoffeeBeans();
exports.spices.push(exports.coffeeBeans_prototype);
var TeaLeaves = /** @class */ (function (_super) {
    __extends(TeaLeaves, _super);
    function TeaLeaves() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Tea Leaves");
        _this.singular = "Tea Leaves";
        _this.plural = "Tea Leaves";
        _this.description = "Tea Leaves";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return TeaLeaves;
}(Food));
exports.TeaLeaves = TeaLeaves;
exports.teaLeaves_prototype = new TeaLeaves();
exports.spices.push(exports.teaLeaves_prototype);
var Wheat = /** @class */ (function (_super) {
    __extends(Wheat, _super);
    function Wheat() {
        var _this = _super.call(this) || this;
        _this.categories.push("Grain", "Wheat");
        _this.singular = "Wheat";
        _this.plural = "Wheat";
        _this.description = "Wheat";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Wheat;
}(Food));
exports.Wheat = Wheat;
exports.wheat_prototype = new Wheat();
exports.grains.push(exports.wheat_prototype);
var Oats = /** @class */ (function (_super) {
    __extends(Oats, _super);
    function Oats() {
        var _this = _super.call(this) || this;
        _this.categories.push("Grain", "Oats");
        _this.singular = "Oats";
        _this.plural = "Oats";
        _this.description = "Oats";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Oats;
}(Food));
exports.Oats = Oats;
exports.oats_prototype = new Oats();
exports.grains.push(exports.oats_prototype);
var Barley = /** @class */ (function (_super) {
    __extends(Barley, _super);
    function Barley() {
        var _this = _super.call(this) || this;
        _this.categories.push("Grain", "Barley");
        _this.singular = "Barley";
        _this.plural = "Barley";
        _this.description = "Barley";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Barley;
}(Food));
exports.Barley = Barley;
exports.barley_prototype = new Barley();
exports.grains.push(exports.barley_prototype);
var Curry = /** @class */ (function (_super) {
    __extends(Curry, _super);
    function Curry(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Spice", "Curry");
        _this.singular = _this.type + " curry";
        _this.plural = _this.singular;
        if (type === "golden") {
            _this.singular = "Golden Curry";
            _this.plural = "Golden Curry";
        }
        _this.description = "curry";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Curry;
}(Food));
exports.Curry = Curry;
exports.redCurry_prototype = new Curry("red");
exports.greenCurry_prototype = new Curry("green");
exports.yellowCurry_prototype = new Curry("yellow");
exports.goldenCurry_prototype = new Curry("golden");
exports.spices.push(exports.redCurry_prototype, exports.greenCurry_prototype, exports.yellowCurry_prototype, exports.goldenCurry_prototype);
var Beets = /** @class */ (function (_super) {
    __extends(Beets, _super);
    function Beets() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vegetable", "Beets");
        _this.singular = "Beets";
        _this.plural = "Beets";
        _this.description = "Beets";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Beets;
}(Food));
exports.Beets = Beets;
exports.beets_prototype = new Beets();
exports.vegetables.push(exports.beets_prototype);
var Flour = /** @class */ (function (_super) {
    __extends(Flour, _super);
    function Flour(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Starch");
        _this.singular = _this.type + " flour";
        _this.plural = _this.singular;
        if (type === "buckwheat") {
            _this.singular = "Buckwheat Flour";
            _this.plural = "Buckwheat Flour";
        }
        _this.description = "flour";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Flour;
}(Food));
exports.Flour = Flour;
exports.riceFlour_prototype = new Flour("rice");
exports.wheatFlour_prototype = new Flour("wheat");
exports.barleyFlour_prototype = new Flour("barley");
exports.oatFlour_prototype = new Flour("oat");
exports.ryeFlour_prototype = new Flour("rye");
exports.buckwheatFlour_prototype = new Flour("buckwheat");
exports.starchs.push(exports.riceFlour_prototype, exports.wheatFlour_prototype, exports.barleyFlour_prototype, exports.oatFlour_prototype, exports.ryeFlour_prototype, exports.buckwheatFlour_prototype);
var Honey = /** @class */ (function (_super) {
    __extends(Honey, _super);
    function Honey() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sweet", "Honey");
        _this.singular = "honey";
        _this.plural = "honey";
        _this.description = "honey";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Honey;
}(Food));
exports.Honey = Honey;
exports.honey_prototype = new Honey();
exports.sweets.push(exports.honey_prototype);
var PancakeBatter = /** @class */ (function (_super) {
    __extends(PancakeBatter, _super);
    function PancakeBatter() {
        var _this = _super.call(this) || this;
        _this.categories.push("Dough");
        _this.singular = "pancake batter";
        _this.plural = "pancake batter";
        _this.description = "pancake batter";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PancakeBatter;
}(Food));
exports.PancakeBatter = PancakeBatter;
exports.pancakeBatter_prototype = new PancakeBatter();
exports.doughs.push(exports.pancakeBatter_prototype);
var Jam = /** @class */ (function (_super) {
    __extends(Jam, _super);
    function Jam() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sweet", "Jam");
        _this.singular = "jam";
        _this.plural = "jam";
        _this.description = "jam";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Jam;
}(Food));
exports.Jam = Jam;
exports.jam_prototype = new Jam();
exports.sweets.push(exports.jam_prototype);
var ChiliPowder = /** @class */ (function (_super) {
    __extends(ChiliPowder, _super);
    function ChiliPowder() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice");
        _this.singular = "chili powder";
        _this.plural = "chili powder";
        _this.description = "chili powder";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return ChiliPowder;
}(Food));
exports.ChiliPowder = ChiliPowder;
exports.chiliPowder_prototype = new ChiliPowder();
exports.spices.push(exports.chiliPowder_prototype);
var Chocolate = /** @class */ (function (_super) {
    __extends(Chocolate, _super);
    function Chocolate() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sweet", "Chocolate");
        _this.singular = "chocolate";
        _this.plural = "chocolate";
        _this.description = "chocolate";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Chocolate;
}(Food));
exports.Chocolate = Chocolate;
exports.chocolate_prototype = new Chocolate();
exports.sweets.push(exports.chocolate_prototype);
var FriedEgg = /** @class */ (function (_super) {
    __extends(FriedEgg, _super);
    function FriedEgg() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein");
        _this.singular = "fried egg";
        _this.plural = "fried egg";
        _this.description = "fried egg";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return FriedEgg;
}(Food));
exports.FriedEgg = FriedEgg;
exports.friedEgg_prototype = new FriedEgg();
exports.proteins.push(exports.friedEgg_prototype);
var Omelet = /** @class */ (function (_super) {
    __extends(Omelet, _super);
    function Omelet() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Omelet");
        _this.singular = "omelet";
        _this.plural = "omelet";
        _this.description = "omelet";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Omelet;
}(Food));
exports.Omelet = Omelet;
exports.omelet_prototype = new Omelet();
exports.proteins.push(exports.omelet_prototype);
var ScrambledEgg = /** @class */ (function (_super) {
    __extends(ScrambledEgg, _super);
    function ScrambledEgg() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein");
        _this.singular = "scrambled egg";
        _this.plural = "scrambled egg";
        _this.description = "scrambled egg";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return ScrambledEgg;
}(Food));
exports.ScrambledEgg = ScrambledEgg;
exports.scrambledEgg_prototype = new ScrambledEgg();
exports.proteins.push(exports.scrambledEgg_prototype);
var PoachedEgg = /** @class */ (function (_super) {
    __extends(PoachedEgg, _super);
    function PoachedEgg() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein");
        _this.singular = "poached egg";
        _this.plural = "poached egg";
        _this.description = "poached egg";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PoachedEgg;
}(Food));
exports.PoachedEgg = PoachedEgg;
exports.poachedEgg_prototype = new PoachedEgg();
exports.proteins.push(exports.poachedEgg_prototype);
var Pickle = /** @class */ (function (_super) {
    __extends(Pickle, _super);
    function Pickle() {
        var _this = _super.call(this) || this;
        _this.categories.push("Brined");
        _this.singular = "pickle";
        _this.plural = "pickle";
        _this.description = "pickle";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Pickle;
}(Food));
exports.Pickle = Pickle;
exports.pickle_prototype = new Pickle();
exports.brines.push(exports.pickle_prototype);
var Pancake = /** @class */ (function (_super) {
    __extends(Pancake, _super);
    function Pancake() {
        var _this = _super.call(this) || this;
        _this.categories.push("Starch");
        _this.singular = "pancake";
        _this.plural = "pancake";
        _this.description = "pancake";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Pancake;
}(Food));
exports.Pancake = Pancake;
exports.pancake_prototype = new Pancake();
exports.starchs.push(exports.pancake_prototype);
var Granola = /** @class */ (function (_super) {
    __extends(Granola, _super);
    function Granola() {
        var _this = _super.call(this) || this;
        _this.categories.push("Starch");
        _this.singular = "granola";
        _this.plural = "granola";
        _this.description = "granola";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Granola;
}(Food));
exports.Granola = Granola;
exports.granola_prototype = new Granola();
exports.starchs.push(exports.granola_prototype);
var BreadDough = /** @class */ (function (_super) {
    __extends(BreadDough, _super);
    function BreadDough() {
        var _this = _super.call(this) || this;
        _this.categories.push("Dough");
        _this.singular = "bread dough";
        _this.plural = "bread dough";
        _this.description = "bread dough";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return BreadDough;
}(Food));
exports.BreadDough = BreadDough;
exports.breadDough_prototype = new BreadDough();
exports.doughs.push(exports.breadDough_prototype);
var Noodles = /** @class */ (function (_super) {
    __extends(Noodles, _super);
    function Noodles() {
        var _this = _super.call(this) || this;
        _this.categories.push("Noodles");
        _this.singular = "raw noodles";
        _this.plural = "raw noodles";
        _this.description = "raw noodles";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Noodles;
}(Food));
exports.Noodles = Noodles;
exports.noodles_prototype = new Noodles();
var Tofu = /** @class */ (function (_super) {
    __extends(Tofu, _super);
    function Tofu() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein");
        _this.singular = "tofu";
        _this.plural = "tofu";
        _this.description = "tofu";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Tofu;
}(Food));
exports.Tofu = Tofu;
exports.tofu_prototype = new Tofu();
exports.proteins.push(exports.tofu_prototype);
var Broth = /** @class */ (function (_super) {
    __extends(Broth, _super);
    function Broth() {
        var _this = _super.call(this) || this;
        _this.categories.push("Soup", "Broth");
        _this.singular = "broth";
        _this.plural = "broth";
        _this.description = "broth";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Broth;
}(Food));
exports.Broth = Broth;
exports.broth_prototype = new Broth();
exports.soups.push(exports.broth_prototype);
var Tortilla = /** @class */ (function (_super) {
    __extends(Tortilla, _super);
    function Tortilla() {
        var _this = _super.call(this) || this;
        _this.categories.push("Starch", "Tortilla");
        _this.singular = "tortilla";
        _this.plural = "tortilla";
        _this.description = "tortilla";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Tortilla;
}(Food));
exports.Tortilla = Tortilla;
exports.tortilla_prototype = new Tortilla();
exports.starchs.push(exports.tortilla_prototype);
var PieFilling = /** @class */ (function (_super) {
    __extends(PieFilling, _super);
    function PieFilling() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sweet");
        _this.singular = "pie filling";
        _this.plural = "pie fillings";
        _this.description = "pie fillings";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PieFilling;
}(Food));
exports.PieFilling = PieFilling;
exports.pieFilling_prototype = new PieFilling();
exports.sweets.push(exports.pieFilling_prototype);
var PizzaDough = /** @class */ (function (_super) {
    __extends(PizzaDough, _super);
    function PizzaDough() {
        var _this = _super.call(this) || this;
        _this.categories.push("Dough");
        _this.singular = "pizza dough";
        _this.plural = "pizza dough";
        _this.description = "pizza dough";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PizzaDough;
}(Food));
exports.PizzaDough = PizzaDough;
exports.pizzaDough_prototype = new PizzaDough();
exports.doughs.push(exports.pizzaDough_prototype);
var PastryDough = /** @class */ (function (_super) {
    __extends(PastryDough, _super);
    function PastryDough() {
        var _this = _super.call(this) || this;
        _this.categories.push("Dough");
        _this.singular = "pastry dough";
        _this.plural = "pastry dough";
        _this.description = "pastry dough";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PastryDough;
}(Food));
exports.PastryDough = PastryDough;
exports.pastryDough_prototype = new PastryDough();
exports.doughs.push(exports.pastryDough_prototype);
var IceCream = /** @class */ (function (_super) {
    __extends(IceCream, _super);
    function IceCream() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sweets");
        _this.singular = "ice cream";
        _this.plural = "ice cream";
        _this.description = "ice cream";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return IceCream;
}(Food));
exports.IceCream = IceCream;
exports.iceCream_prototype = new IceCream();
exports.sweets.push(exports.iceCream_prototype);
var GoatCheese = /** @class */ (function (_super) {
    __extends(GoatCheese, _super);
    function GoatCheese() {
        var _this = _super.call(this) || this;
        _this.categories.push("Cheese");
        _this.singular = "goat cheese";
        _this.plural = "goat cheese";
        _this.description = "goat cheese";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return GoatCheese;
}(Food));
exports.GoatCheese = GoatCheese;
exports.goatCheese_prototype = new GoatCheese();
exports.cheeses.push(exports.goatCheese_prototype);
var Butter = /** @class */ (function (_super) {
    __extends(Butter, _super);
    function Butter() {
        var _this = _super.call(this) || this;
        _this.categories.push("Dairy");
        _this.singular = "butter";
        _this.plural = "butter";
        _this.description = "butter";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Butter;
}(Food));
exports.Butter = Butter;
exports.butter_prototype = new Butter();
consumables_1.dairies.push(exports.butter_prototype);
var Cream = /** @class */ (function (_super) {
    __extends(Cream, _super);
    function Cream() {
        var _this = _super.call(this) || this;
        _this.categories.push("Dairy", "Cream");
        _this.singular = "cream";
        _this.plural = "cream";
        _this.description = "cream";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Cream;
}(Food));
exports.Cream = Cream;
exports.cream_prototype = new Cream();
consumables_1.dairies.push(exports.cream_prototype);
var Cheese = /** @class */ (function (_super) {
    __extends(Cheese, _super);
    function Cheese() {
        var _this = _super.call(this) || this;
        _this.categories.push("Cheese");
        _this.singular = "cheese";
        _this.plural = "cheese";
        _this.description = "cheese";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Cheese;
}(Food));
exports.Cheese = Cheese;
exports.cheese_prototype = new Cheese();
exports.cheeses.push(exports.cheese_prototype);
var Yogurt = /** @class */ (function (_super) {
    __extends(Yogurt, _super);
    function Yogurt() {
        var _this = _super.call(this) || this;
        _this.categories.push("Dairy", "Yogurt");
        _this.singular = "yogurt";
        _this.plural = "yogurt";
        _this.description = "yogurt";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Yogurt;
}(Food));
exports.Yogurt = Yogurt;
exports.yogurt_prototype = new Yogurt();
consumables_1.dairies.push(exports.yogurt_prototype);
var Wasabi = /** @class */ (function (_super) {
    __extends(Wasabi, _super);
    function Wasabi() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Wasabi");
        _this.singular = "wasabi";
        _this.plural = "wasabi";
        _this.description = "wasabi";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Wasabi;
}(Food));
exports.Wasabi = Wasabi;
exports.wasabi_prototype = new Wasabi();
exports.spices.push(exports.wasabi_prototype);
var Syrup = /** @class */ (function (_super) {
    __extends(Syrup, _super);
    function Syrup() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sweet");
        _this.singular = "syrup";
        _this.plural = "syrup";
        _this.description = "syrup";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Syrup;
}(Food));
exports.Syrup = Syrup;
exports.syrup_prototype = new Syrup();
exports.sweets.push(exports.syrup_prototype);
var Guacamole = /** @class */ (function (_super) {
    __extends(Guacamole, _super);
    function Guacamole() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sauce", "Spread", "Guacamole");
        _this.singular = "guacamole";
        _this.plural = "guacamole";
        _this.description = "guacamole";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Guacamole;
}(Food));
exports.Guacamole = Guacamole;
exports.guacamole_prototype = new Guacamole();
exports.spreads.push(exports.guacamole_prototype);
exports.sauces.push(exports.guacamole_prototype);
var Salsa = /** @class */ (function (_super) {
    __extends(Salsa, _super);
    function Salsa() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sauce");
        _this.singular = "salsa";
        _this.plural = "salsa";
        _this.description = "salsa";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Salsa;
}(Food));
exports.Salsa = Salsa;
exports.salsa_prototype = new Salsa();
exports.sauces.push(exports.salsa_prototype);
var PeanutButter = /** @class */ (function (_super) {
    __extends(PeanutButter, _super);
    function PeanutButter() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spread");
        _this.singular = "peanut butter";
        _this.plural = "peanut butter";
        _this.description = "peanut butter";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PeanutButter;
}(Food));
exports.PeanutButter = PeanutButter;
exports.peanutButter_prototype = new PeanutButter();
exports.spreads.push(exports.peanutButter_prototype);
var Jelliy = /** @class */ (function (_super) {
    __extends(Jelliy, _super);
    function Jelliy() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spread");
        _this.singular = "jelly";
        _this.plural = "jellies";
        _this.description = "jellies";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Jelliy;
}(Food));
exports.Jelliy = Jelliy;
exports.jellies_prototype = new Jelliy();
exports.spreads.push(exports.jellies_prototype);
var Mayonnaise = /** @class */ (function (_super) {
    __extends(Mayonnaise, _super);
    function Mayonnaise() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spread");
        _this.singular = "mayonnaise";
        _this.plural = "mayonnaise";
        _this.description = "mayonnaise";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Mayonnaise;
}(Food));
exports.Mayonnaise = Mayonnaise;
exports.mayonnaise_prototype = new Mayonnaise();
exports.spreads.push(exports.mayonnaise_prototype);
exports.condiments.push(exports.mayonnaise_prototype);
var Ketchup = /** @class */ (function (_super) {
    __extends(Ketchup, _super);
    function Ketchup() {
        var _this = _super.call(this) || this;
        _this.categories.push("Condiment");
        _this.singular = "ketchup";
        _this.plural = "ketchup";
        _this.description = "ketchup";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Ketchup;
}(Food));
exports.Ketchup = Ketchup;
exports.ketchup_prototype = new Ketchup();
exports.condiments.push(exports.ketchup_prototype);
var PastaEntree = /** @class */ (function (_super) {
    __extends(PastaEntree, _super);
    function PastaEntree() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree", "Pasta");
        _this.singular = "pasta and sauce";
        _this.plural = "pasta and sauce";
        _this.description = "pasta and sauce";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PastaEntree;
}(Food));
exports.PastaEntree = PastaEntree;
exports.pastaEntree_prototype = new PastaEntree();
exports.entrees.push(exports.pastaEntree_prototype);
var MacNCheese = /** @class */ (function (_super) {
    __extends(MacNCheese, _super);
    function MacNCheese() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree", "Pasta");
        _this.singular = "mac 'n' cheese";
        _this.plural = "mac 'n' cheese";
        _this.description = "mac 'n' cheese";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return MacNCheese;
}(Food));
exports.MacNCheese = MacNCheese;
exports.macNCheese_prototype = new MacNCheese();
exports.entrees.push(exports.macNCheese_prototype);
var Carbonara = /** @class */ (function (_super) {
    __extends(Carbonara, _super);
    function Carbonara() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree", "Pasta");
        _this.singular = "carbonara";
        _this.plural = "carbonara";
        _this.description = "carbonara";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Carbonara;
}(Food));
exports.Carbonara = Carbonara;
exports.carbonara_prototype = new Carbonara();
exports.entrees.push(exports.carbonara_prototype);
var BeefStroganoff = /** @class */ (function (_super) {
    __extends(BeefStroganoff, _super);
    function BeefStroganoff() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree", "Pasta");
        _this.singular = "beef stroganoff";
        _this.plural = "beef stroganoff";
        _this.description = "beef stroganoff";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return BeefStroganoff;
}(Food));
exports.BeefStroganoff = BeefStroganoff;
exports.beefStroganoff_prototype = new BeefStroganoff();
exports.entrees.push(exports.beefStroganoff_prototype);
var Lasagna = /** @class */ (function (_super) {
    __extends(Lasagna, _super);
    function Lasagna() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree", "Pasta");
        _this.singular = "lasagna";
        _this.plural = "lasagna";
        _this.description = "lasagna";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Lasagna;
}(Food));
exports.Lasagna = Lasagna;
exports.lasagna_prototype = new Lasagna();
exports.entrees.push(exports.lasagna_prototype);
var ClamChowder = /** @class */ (function (_super) {
    __extends(ClamChowder, _super);
    function ClamChowder() {
        var _this = _super.call(this) || this;
        _this.categories.push("Soup");
        _this.singular = "clam chowder";
        _this.plural = "clam chowder";
        _this.description = "clam chowder";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return ClamChowder;
}(Food));
exports.ClamChowder = ClamChowder;
exports.clamChowder_prototype = new ClamChowder();
exports.soups.push(exports.clamChowder_prototype);
var LobsterBisque = /** @class */ (function (_super) {
    __extends(LobsterBisque, _super);
    function LobsterBisque() {
        var _this = _super.call(this) || this;
        _this.categories.push("Soup");
        _this.singular = "lobster bisque";
        _this.plural = "lobster bisque";
        _this.description = "lobster bisque";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return LobsterBisque;
}(Food));
exports.LobsterBisque = LobsterBisque;
exports.lobsterBisque_prototype = new LobsterBisque();
exports.soups.push(exports.lobsterBisque_prototype);
var CornChowder = /** @class */ (function (_super) {
    __extends(CornChowder, _super);
    function CornChowder() {
        var _this = _super.call(this) || this;
        _this.categories.push("Soup");
        _this.singular = "corn chowder";
        _this.plural = "corn chowder";
        _this.description = "corn chowder";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CornChowder;
}(Food));
exports.CornChowder = CornChowder;
exports.cornChowder_prototype = new CornChowder();
exports.soups.push(exports.cornChowder_prototype);
var Chili = /** @class */ (function (_super) {
    __extends(Chili, _super);
    function Chili() {
        var _this = _super.call(this) || this;
        _this.categories.push("Soup");
        _this.singular = "chili";
        _this.plural = "chili";
        _this.description = "chili";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Chili;
}(Food));
exports.Chili = Chili;
exports.chili_prototype = new Chili();
exports.soups.push(exports.chili_prototype);
var ChickenNoodleSoup = /** @class */ (function (_super) {
    __extends(ChickenNoodleSoup, _super);
    function ChickenNoodleSoup() {
        var _this = _super.call(this) || this;
        _this.categories.push("Soup");
        _this.singular = "chicken noodle soup";
        _this.plural = "chicken noodle soup";
        _this.description = "chicken noodle soup";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return ChickenNoodleSoup;
}(Food));
exports.ChickenNoodleSoup = ChickenNoodleSoup;
exports.chickenNoodleSoup_prototype = new ChickenNoodleSoup();
exports.soups.push(exports.chickenNoodleSoup_prototype);
var BLT = /** @class */ (function (_super) {
    __extends(BLT, _super);
    function BLT() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sandwich");
        _this.singular = "BLT";
        _this.plural = "BLT";
        _this.description = "BLT";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return BLT;
}(Food));
exports.BLT = BLT;
exports.bLT_prototype = new BLT();
exports.sandwiches.push(exports.bLT_prototype);
var Burger = /** @class */ (function (_super) {
    __extends(Burger, _super);
    function Burger() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sandwich");
        _this.singular = "burger";
        _this.plural = "burger";
        _this.description = "burger";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Burger;
}(Food));
exports.Burger = Burger;
exports.burger_prototype = new Burger();
exports.sandwiches.push(exports.burger_prototype);
var Toasties = /** @class */ (function (_super) {
    __extends(Toasties, _super);
    function Toasties() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sandwich");
        _this.singular = "toasties";
        _this.plural = "toasties";
        _this.description = "toasties";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Toasties;
}(Food));
exports.Toasties = Toasties;
exports.toasties_prototype = new Toasties();
exports.sandwiches.push(exports.toasties_prototype);
var PBJ = /** @class */ (function (_super) {
    __extends(PBJ, _super);
    function PBJ() {
        var _this = _super.call(this) || this;
        _this.categories.push("PBJ");
        _this.singular = "PBJ";
        _this.plural = "PBJ";
        _this.description = "PBJ";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PBJ;
}(Food));
exports.PBJ = PBJ;
exports.pBJ_prototype = new PBJ();
exports.sandwiches.push(exports.pBJ_prototype);
var LettuceWrap = /** @class */ (function (_super) {
    __extends(LettuceWrap, _super);
    function LettuceWrap() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sandwich");
        _this.singular = "lettuce wrap";
        _this.plural = "lettuce wrap";
        _this.description = "lettuce wrap";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return LettuceWrap;
}(Food));
exports.LettuceWrap = LettuceWrap;
exports.lettuceWrap_prototype = new LettuceWrap();
exports.sandwiches.push(exports.lettuceWrap_prototype);
var BoiledEgg = /** @class */ (function (_super) {
    __extends(BoiledEgg, _super);
    function BoiledEgg() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein");
        _this.singular = "boiled egg";
        _this.plural = "boiled eggs";
        _this.description = "boiled egg";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return BoiledEgg;
}(Food));
exports.BoiledEgg = BoiledEgg;
exports.boiledEgg_prototype = new BoiledEgg();
exports.proteins.push(exports.boiledEgg_prototype);
var NutsNBerries = /** @class */ (function (_super) {
    __extends(NutsNBerries, _super);
    function NutsNBerries() {
        var _this = _super.call(this) || this;
        _this.categories.push("Snack");
        _this.singular = "nuts 'n' berries";
        _this.plural = "nuts 'n' berries";
        _this.description = "nuts 'n' berries";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return NutsNBerries;
}(Food));
exports.NutsNBerries = NutsNBerries;
exports.nutsNBerries_prototype = new NutsNBerries();
exports.snacks.push(exports.nutsNBerries_prototype);
var Cake = /** @class */ (function (_super) {
    __extends(Cake, _super);
    function Cake() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sweet");
        _this.singular = "cake";
        _this.plural = "cakes";
        _this.description = "cake";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Cake;
}(Food));
exports.Cake = Cake;
exports.cake_prototype = new Cake();
exports.sweets.push(exports.cake_prototype);
var Pizza = /** @class */ (function (_super) {
    __extends(Pizza, _super);
    function Pizza() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "pizza";
        _this.plural = "pizzas";
        _this.description = "pizza";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Pizza;
}(Food));
exports.Pizza = Pizza;
exports.pizza_prototype = new Pizza();
exports.entrees.push(exports.pizza_prototype);
var FruitSalad = /** @class */ (function (_super) {
    __extends(FruitSalad, _super);
    function FruitSalad() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "fruit salad";
        _this.plural = "fruit salad";
        _this.description = "fruit salad";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return FruitSalad;
}(Food));
exports.FruitSalad = FruitSalad;
exports.fruitSalad_prototype = new FruitSalad();
exports.sides.push(exports.fruitSalad_prototype);
var BananaBread = /** @class */ (function (_super) {
    __extends(BananaBread, _super);
    function BananaBread() {
        var _this = _super.call(this) || this;
        _this.categories.push("Bread");
        _this.singular = "banana bread";
        _this.plural = "banana bread";
        _this.description = "banana bread";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return BananaBread;
}(Food));
exports.BananaBread = BananaBread;
exports.bananaBread_prototype = new BananaBread();
exports.breads.push(exports.bananaBread_prototype);
var BakedPotato = /** @class */ (function (_super) {
    __extends(BakedPotato, _super);
    function BakedPotato() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "baked potato";
        _this.plural = "baked potatoes";
        _this.description = "baked potato";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return BakedPotato;
}(Food));
exports.BakedPotato = BakedPotato;
exports.bakedPotato_prototype = new BakedPotato();
exports.sides.push(exports.bakedPotato_prototype);
var Jerky = /** @class */ (function (_super) {
    __extends(Jerky, _super);
    function Jerky() {
        var _this = _super.call(this) || this;
        _this.categories.push("Snack");
        _this.singular = "jerky";
        _this.plural = "jerky";
        _this.description = "jerky";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Jerky;
}(Food));
exports.Jerky = Jerky;
exports.jerky_prototype = new Jerky();
exports.snacks.push(exports.jerky_prototype);
var FrenchFries = /** @class */ (function (_super) {
    __extends(FrenchFries, _super);
    function FrenchFries() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "french fries";
        _this.plural = "french fries";
        _this.description = "french fries";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return FrenchFries;
}(Food));
exports.FrenchFries = FrenchFries;
exports.frenchFries_prototype = new FrenchFries();
exports.sides.push(exports.frenchFries_prototype);
var SausageAndPeppers = /** @class */ (function (_super) {
    __extends(SausageAndPeppers, _super);
    function SausageAndPeppers() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "sausage and peppers";
        _this.plural = "sausage and peppers";
        _this.description = "sausage and peppers";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return SausageAndPeppers;
}(Food));
exports.SausageAndPeppers = SausageAndPeppers;
exports.sausageAndPeppers_prototype = new SausageAndPeppers();
exports.entrees.push(exports.sausageAndPeppers_prototype);
var Coleslaw = /** @class */ (function (_super) {
    __extends(Coleslaw, _super);
    function Coleslaw() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "coleslaw";
        _this.plural = "coleslaw";
        _this.description = "coleslaw";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Coleslaw;
}(Food));
exports.Coleslaw = Coleslaw;
exports.coleslaw_prototype = new Coleslaw();
exports.sides.push(exports.coleslaw_prototype);
var SteakAndPotatoes = /** @class */ (function (_super) {
    __extends(SteakAndPotatoes, _super);
    function SteakAndPotatoes() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "steak and potatoes";
        _this.plural = "steak and potatoes";
        _this.description = "steak and potatoes";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return SteakAndPotatoes;
}(Food));
exports.SteakAndPotatoes = SteakAndPotatoes;
exports.steakAndPotatoes_prototype = new SteakAndPotatoes();
exports.entrees.push(exports.steakAndPotatoes_prototype);
var Ratatouille = /** @class */ (function (_super) {
    __extends(Ratatouille, _super);
    function Ratatouille() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "ratatouille";
        _this.plural = "ratatouille";
        _this.description = "ratatouille";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Ratatouille;
}(Food));
exports.Ratatouille = Ratatouille;
exports.ratatouille_prototype = new Ratatouille();
exports.entrees.push(exports.ratatouille_prototype);
var Gumbo = /** @class */ (function (_super) {
    __extends(Gumbo, _super);
    function Gumbo() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "gumbo";
        _this.plural = "gumbo";
        _this.description = "gumbo";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Gumbo;
}(Food));
exports.Gumbo = Gumbo;
exports.gumbo_prototype = new Gumbo();
exports.entrees.push(exports.gumbo_prototype);
var RoastedVegetables = /** @class */ (function (_super) {
    __extends(RoastedVegetables, _super);
    function RoastedVegetables() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "roasted vegetables";
        _this.plural = "roasted vegetables";
        _this.description = "roasted vegetables";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return RoastedVegetables;
}(Food));
exports.RoastedVegetables = RoastedVegetables;
exports.roastedVegetables_prototype = new RoastedVegetables();
exports.sides.push(exports.roastedVegetables_prototype);
var Bruschetta = /** @class */ (function (_super) {
    __extends(Bruschetta, _super);
    function Bruschetta() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "bruschetta";
        _this.plural = "bruschetta";
        _this.description = "bruschetta";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Bruschetta;
}(Food));
exports.Bruschetta = Bruschetta;
exports.bruschetta_prototype = new Bruschetta();
exports.sides.push(exports.bruschetta_prototype);
var StuffedShrooms = /** @class */ (function (_super) {
    __extends(StuffedShrooms, _super);
    function StuffedShrooms() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "stuffed 'shrooms";
        _this.plural = "stuffed 'shrooms";
        _this.description = "stuffed 'shrooms";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return StuffedShrooms;
}(Food));
exports.StuffedShrooms = StuffedShrooms;
exports.stuffedShrooms_prototype = new StuffedShrooms();
exports.sides.push(exports.stuffedShrooms_prototype);
var EggRolls = /** @class */ (function (_super) {
    __extends(EggRolls, _super);
    function EggRolls() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "egg rolls";
        _this.plural = "egg rolls";
        _this.description = "egg rolls";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return EggRolls;
}(Food));
exports.EggRolls = EggRolls;
exports.eggRolls_prototype = new EggRolls();
exports.sides.push(exports.eggRolls_prototype);
var EggSalad = /** @class */ (function (_super) {
    __extends(EggSalad, _super);
    function EggSalad() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spread");
        _this.singular = "egg salad";
        _this.plural = "egg salad";
        _this.description = "egg salad";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return EggSalad;
}(Food));
exports.EggSalad = EggSalad;
exports.eggSalad_prototype = new EggSalad();
exports.spreads.push(exports.eggSalad_prototype);
var StirFry = /** @class */ (function (_super) {
    __extends(StirFry, _super);
    function StirFry() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "stir fry";
        _this.plural = "stir fry";
        _this.description = "stir fry";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return StirFry;
}(Food));
exports.StirFry = StirFry;
exports.stirFry_prototype = new StirFry();
exports.entrees.push(exports.stirFry_prototype);
var SteakAndEggs = /** @class */ (function (_super) {
    __extends(SteakAndEggs, _super);
    function SteakAndEggs() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "steak and eggs";
        _this.plural = "steak and eggs";
        _this.description = "steak and eggs";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return SteakAndEggs;
}(Food));
exports.SteakAndEggs = SteakAndEggs;
exports.steakAndEggs_prototype = new SteakAndEggs();
exports.entrees.push(exports.steakAndEggs_prototype);
var HamAndEggs = /** @class */ (function (_super) {
    __extends(HamAndEggs, _super);
    function HamAndEggs() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "ham and eggs";
        _this.plural = "ham and eggs";
        _this.description = "ham and eggs";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return HamAndEggs;
}(Food));
exports.HamAndEggs = HamAndEggs;
exports.hamAndEggs_prototype = new HamAndEggs();
exports.entrees.push(exports.hamAndEggs_prototype);
var CabbageRolls = /** @class */ (function (_super) {
    __extends(CabbageRolls, _super);
    function CabbageRolls() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "cabbage rolls";
        _this.plural = "cabbage rolls";
        _this.description = "cabbage rolls";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CabbageRolls;
}(Food));
exports.CabbageRolls = CabbageRolls;
exports.cabbageRolls_prototype = new CabbageRolls();
exports.sides.push(exports.cabbageRolls_prototype);
var Pho = /** @class */ (function (_super) {
    __extends(Pho, _super);
    function Pho() {
        var _this = _super.call(this) || this;
        _this.categories.push("Soup");
        _this.singular = "pho";
        _this.plural = "pho";
        _this.description = "pho";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Pho;
}(Food));
exports.Pho = Pho;
exports.pho_prototype = new Pho();
exports.soups.push(exports.pho_prototype);
var CornBread = /** @class */ (function (_super) {
    __extends(CornBread, _super);
    function CornBread() {
        var _this = _super.call(this) || this;
        _this.categories.push("Bread");
        _this.singular = "corn bread";
        _this.plural = "corn bread";
        _this.description = "corn bread";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CornBread;
}(Food));
exports.CornBread = CornBread;
exports.cornBread_prototype = new CornBread();
exports.breads.push(exports.cornBread_prototype);
var Oatmeal = /** @class */ (function (_super) {
    __extends(Oatmeal, _super);
    function Oatmeal() {
        var _this = _super.call(this) || this;
        _this.categories.push("Soup");
        _this.singular = "oatmeal";
        _this.plural = "oatmeal";
        _this.description = "oatmeal";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Oatmeal;
}(Food));
exports.Oatmeal = Oatmeal;
exports.oatmeal_prototype = new Oatmeal();
exports.soups.push(exports.oatmeal_prototype);
var FruitSnack = /** @class */ (function (_super) {
    __extends(FruitSnack, _super);
    function FruitSnack() {
        var _this = _super.call(this) || this;
        _this.categories.push("Snack");
        _this.singular = "fruit snack";
        _this.plural = "fruit snack";
        _this.description = "fruit snack";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return FruitSnack;
}(Food));
exports.FruitSnack = FruitSnack;
exports.fruitSnack_prototype = new FruitSnack();
exports.snacks.push(exports.fruitSnack_prototype);
var Meatloaf = /** @class */ (function (_super) {
    __extends(Meatloaf, _super);
    function Meatloaf() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "meatloaf";
        _this.plural = "meatloaf";
        _this.description = "meatloaf";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Meatloaf;
}(Food));
exports.Meatloaf = Meatloaf;
exports.meatloaf_prototype = new Meatloaf();
exports.entrees.push(exports.meatloaf_prototype);
var FishAndFungi = /** @class */ (function (_super) {
    __extends(FishAndFungi, _super);
    function FishAndFungi() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "fish 'n' fungi";
        _this.plural = "fish 'n' fungi";
        _this.description = "fish 'n' fungi";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return FishAndFungi;
}(Food));
exports.FishAndFungi = FishAndFungi;
exports.fishAndFungi_prototype = new FishAndFungi();
exports.entrees.push(exports.fishAndFungi_prototype);
var AvocadoToast = /** @class */ (function (_super) {
    __extends(AvocadoToast, _super);
    function AvocadoToast() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sandwich");
        _this.singular = "avocado toast";
        _this.plural = "avocado toast";
        _this.description = "avocado toast";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return AvocadoToast;
}(Food));
exports.AvocadoToast = AvocadoToast;
exports.avocadoToast_prototype = new AvocadoToast();
exports.sandwiches.push(exports.avocadoToast_prototype);
var Waffles = /** @class */ (function (_super) {
    __extends(Waffles, _super);
    function Waffles() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "waffles";
        _this.plural = "waffles";
        _this.description = "waffles";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Waffles;
}(Food));
exports.Waffles = Waffles;
exports.waffles_prototype = new Waffles();
exports.entrees.push(exports.waffles_prototype);
var YogurtParfait = /** @class */ (function (_super) {
    __extends(YogurtParfait, _super);
    function YogurtParfait() {
        var _this = _super.call(this) || this;
        _this.categories.push("Yogurt Parfait");
        _this.singular = "yogurt parfait";
        _this.plural = "yogurt parfait";
        _this.description = "yogurt parfait";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return YogurtParfait;
}(Food));
exports.YogurtParfait = YogurtParfait;
exports.yogurtParfait_prototype = new YogurtParfait();
var Pie = /** @class */ (function (_super) {
    __extends(Pie, _super);
    function Pie() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sweet");
        _this.singular = "pie";
        _this.plural = "pie";
        _this.description = "pie";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Pie;
}(Food));
exports.Pie = Pie;
exports.pie_prototype = new Pie();
exports.sweets.push(exports.pie_prototype);
var Quesadilla = /** @class */ (function (_super) {
    __extends(Quesadilla, _super);
    function Quesadilla() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "quesadilla";
        _this.plural = "quesadillas";
        _this.description = "quesadillas";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Quesadilla;
}(Food));
exports.Quesadilla = Quesadilla;
exports.quesadillas_prototype = new Quesadilla();
exports.entrees.push(exports.quesadillas_prototype);
var GrilledProtein = /** @class */ (function (_super) {
    __extends(GrilledProtein, _super);
    function GrilledProtein() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein");
        _this.singular = "grilled protein";
        _this.plural = "grilled protein";
        _this.description = "grilled protein";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return GrilledProtein;
}(Food));
exports.GrilledProtein = GrilledProtein;
exports.grilledProtein_prototype = new GrilledProtein();
exports.proteins.push(exports.grilledProtein_prototype);
var FriedProtein = /** @class */ (function (_super) {
    __extends(FriedProtein, _super);
    function FriedProtein() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein");
        _this.singular = "fried protein";
        _this.plural = "fried protein";
        _this.description = "fried protein";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return FriedProtein;
}(Food));
exports.FriedProtein = FriedProtein;
exports.friedProtein_prototype = new FriedProtein();
exports.proteins.push(exports.friedProtein_prototype);
var ChickenPotPie = /** @class */ (function (_super) {
    __extends(ChickenPotPie, _super);
    function ChickenPotPie() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "chicken pot pie";
        _this.plural = "chicken pot pie";
        _this.description = "chicken pot pie";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return ChickenPotPie;
}(Food));
exports.ChickenPotPie = ChickenPotPie;
exports.chickenPotPie_prototype = new ChickenPotPie();
exports.entrees.push(exports.chickenPotPie_prototype);
var RiceEntree = /** @class */ (function (_super) {
    __extends(RiceEntree, _super);
    function RiceEntree() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "rice entree";
        _this.plural = "rice entree";
        _this.description = "rice entree";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return RiceEntree;
}(Food));
exports.RiceEntree = RiceEntree;
exports.riceEntree_prototype = new RiceEntree();
exports.entrees.push(exports.riceEntree_prototype);
var FriedRice = /** @class */ (function (_super) {
    __extends(FriedRice, _super);
    function FriedRice() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "fried rice";
        _this.plural = "fried rice";
        _this.description = "fried rice";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return FriedRice;
}(Food));
exports.FriedRice = FriedRice;
exports.friedRice_prototype = new FriedRice();
exports.entrees.push(exports.friedRice_prototype);
var Caviar = /** @class */ (function (_super) {
    __extends(Caviar, _super);
    function Caviar() {
        var _this = _super.call(this) || this;
        _this.categories.push("seafood");
        _this.singular = "caviar";
        _this.plural = "caviar";
        _this.description = "caviar";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Caviar;
}(Food));
exports.Caviar = Caviar;
exports.caviar_prototype = new Caviar();
exports.seafoods.push(exports.caviar_prototype);
var SteamedDumplings = /** @class */ (function (_super) {
    __extends(SteamedDumplings, _super);
    function SteamedDumplings() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "steamed dumplings";
        _this.plural = "steamed dumplings";
        _this.description = "steamed dumplings";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return SteamedDumplings;
}(Food));
exports.SteamedDumplings = SteamedDumplings;
exports.steamedDumplings_prototype = new SteamedDumplings();
exports.sides.push(exports.steamedDumplings_prototype);
var FriedDumplings = /** @class */ (function (_super) {
    __extends(FriedDumplings, _super);
    function FriedDumplings() {
        var _this = _super.call(this) || this;
        _this.categories.push("Side");
        _this.singular = "fried dumplings";
        _this.plural = "fried dumplings";
        _this.description = "fried dumplings";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return FriedDumplings;
}(Food));
exports.FriedDumplings = FriedDumplings;
exports.friedDumplings_prototype = new FriedDumplings();
exports.sides.push(exports.friedDumplings_prototype);
var FunGuyFungiFeast = /** @class */ (function (_super) {
    __extends(FunGuyFungiFeast, _super);
    function FunGuyFungiFeast() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree");
        _this.singular = "fun guy's fantastic fungi feast";
        _this.plural = "fun guy's fantastic fungi feasts";
        _this.description = "fun guy's fantastic fungi feast";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return FunGuyFungiFeast;
}(Food));
exports.FunGuyFungiFeast = FunGuyFungiFeast;
exports.funGuyFungiFeast_prototype = new FunGuyFungiFeast();
exports.entrees.push(exports.funGuyFungiFeast_prototype);
var InsectPuree = /** @class */ (function (_super) {
    __extends(InsectPuree, _super);
    function InsectPuree() {
        var _this = _super.call(this) || this;
        _this.categories.push("Insect");
        _this.singular = "insect puree";
        _this.plural = "insect purees";
        _this.description = "insect puree";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return InsectPuree;
}(Food));
exports.InsectPuree = InsectPuree;
exports.insectPuree_prototype = new InsectPuree();
exports.insects.push(exports.insectPuree_prototype);
var RoastedInsects = /** @class */ (function (_super) {
    __extends(RoastedInsects, _super);
    function RoastedInsects() {
        var _this = _super.call(this) || this;
        _this.categories.push("Insect");
        _this.singular = "roasted insects";
        _this.plural = "roasted insects";
        _this.description = "roasted insects";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return RoastedInsects;
}(Food));
exports.RoastedInsects = RoastedInsects;
exports.roastedInsects_prototype = new RoastedInsects();
exports.insects.push(exports.roastedInsects_prototype);
var SeasonedInsects = /** @class */ (function (_super) {
    __extends(SeasonedInsects, _super);
    function SeasonedInsects() {
        var _this = _super.call(this) || this;
        _this.categories.push("Insect");
        _this.singular = "seasoned insects";
        _this.plural = "seasoned insects";
        _this.description = "seasoned insects";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return SeasonedInsects;
}(Food));
exports.SeasonedInsects = SeasonedInsects;
exports.seasonedInsects_prototype = new SeasonedInsects();
exports.insects.push(exports.seasonedInsects_prototype);
var BugsNSlime = /** @class */ (function (_super) {
    __extends(BugsNSlime, _super);
    function BugsNSlime() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree", "Other");
        _this.singular = "bugs 'n' slime";
        _this.plural = "bugs 'n' slime";
        _this.description = "bugs 'n' slime";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return BugsNSlime;
}(Food));
exports.BugsNSlime = BugsNSlime;
exports.bugsNSlime_prototype = new BugsNSlime();
exports.entrees.push(exports.bugsNSlime_prototype);
exports.others.push(exports.bugsNSlime_prototype);
var BugsNOoze = /** @class */ (function (_super) {
    __extends(BugsNOoze, _super);
    function BugsNOoze() {
        var _this = _super.call(this) || this;
        _this.categories.push("Entree", "Others");
        _this.singular = "bugs 'n' ooze";
        _this.plural = "bugs 'n' ooze";
        _this.description = "bugs 'n' ooze";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return BugsNOoze;
}(Food));
exports.BugsNOoze = BugsNOoze;
exports.bugsNOoze_prototype = new BugsNOoze();
exports.entrees.push(exports.bugsNOoze_prototype);
exports.others.push(exports.bugsNOoze_prototype);
var MossWrap = /** @class */ (function (_super) {
    __extends(MossWrap, _super);
    function MossWrap() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sandwich");
        _this.singular = "moss wrap";
        _this.plural = "moss wraps";
        _this.description = "moss wrap";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return MossWrap;
}(Food));
exports.MossWrap = MossWrap;
exports.mossWrap_prototype = new MossWrap();
exports.sandwiches.push(exports.mossWrap_prototype);
var AlgaePaste = /** @class */ (function (_super) {
    __extends(AlgaePaste, _super);
    function AlgaePaste() {
        var _this = _super.call(this) || this;
        _this.categories.push("Other");
        _this.singular = "algae paste";
        _this.plural = "algae pastes";
        _this.description = "algae paste";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return AlgaePaste;
}(Food));
exports.AlgaePaste = AlgaePaste;
exports.algaePaste_prototype = new AlgaePaste();
exports.others.push(exports.algaePaste_prototype);
var CaveCritterFritters = /** @class */ (function (_super) {
    __extends(CaveCritterFritters, _super);
    function CaveCritterFritters() {
        var _this = _super.call(this) || this;
        _this.categories.push("Insects");
        _this.singular = "cave critter fritters";
        _this.plural = "cave critter fritters";
        _this.description = "cave critter fritters";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CaveCritterFritters;
}(Food));
exports.CaveCritterFritters = CaveCritterFritters;
exports.caveCritterFritters_prototype = new CaveCritterFritters();
exports.insects.push(exports.caveCritterFritters_prototype);
var MuddyMossyMoldyMess = /** @class */ (function (_super) {
    __extends(MuddyMossyMoldyMess, _super);
    function MuddyMossyMoldyMess() {
        var _this = _super.call(this) || this;
        _this.categories.push("Others");
        _this.singular = "muddy, mossy, moldy mess";
        _this.plural = "muddy, mossy, moldy messes";
        _this.description = "muddy, mossy, moldy mess";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return MuddyMossyMoldyMess;
}(Food));
exports.MuddyMossyMoldyMess = MuddyMossyMoldyMess;
exports.muddyMossyMoldyMess_prototype = new MuddyMossyMoldyMess();
exports.others.push(exports.muddyMossyMoldyMess_prototype);
var OoeyGooeyFreshNFruity = /** @class */ (function (_super) {
    __extends(OoeyGooeyFreshNFruity, _super);
    function OoeyGooeyFreshNFruity() {
        var _this = _super.call(this) || this;
        _this.categories.push("Others");
        _this.singular = "ooey gooey fresh 'n' fruity";
        _this.plural = "ooey gooey fresh 'n' fruity";
        _this.description = "ooey gooey fresh 'n' fruity";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return OoeyGooeyFreshNFruity;
}(Food));
exports.OoeyGooeyFreshNFruity = OoeyGooeyFreshNFruity;
exports.ooeyGooeyFreshNFruity_prototype = new OoeyGooeyFreshNFruity();
exports.others.push(exports.ooeyGooeyFreshNFruity_prototype);
var ScoopOGloop = /** @class */ (function (_super) {
    __extends(ScoopOGloop, _super);
    function ScoopOGloop() {
        var _this = _super.call(this) || this;
        _this.categories.push("Others");
        _this.singular = "scoop o' gloop";
        _this.plural = "scoops o' gloop";
        _this.description = "scoop o' gloop";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return ScoopOGloop;
}(Food));
exports.ScoopOGloop = ScoopOGloop;
exports.scoopOGloop_prototype = new ScoopOGloop();
exports.others.push(exports.scoopOGloop_prototype);
// *****************************
// Must come at end of file
// Combine subcategory arrays into category arrays
// Combine all categories into food
// Ensure food array only contains unqiue items
// *****************************
exports.fruits.push.apply(exports.fruits, exports.berries);
consumables_1.dairies.push.apply(consumables_1.dairies, exports.eggs);
exports.seafoods.push.apply(exports.seafoods, __spreadArrays(exports.fishes, exports.crustaceans, exports.sushis));
exports.proteins.push.apply(exports.proteins, __spreadArrays(exports.fishes, exports.eggs, exports.fungi, exports.meats, exports.nuts));
exports.foods.push.apply(exports.foods, __spreadArrays(exports.vegetables, exports.grains, exports.starchs, exports.spices, exports.herbs, exports.others, exports.insects, exports.sweets, exports.doughs, exports.brines, exports.soups, exports.cheeses, exports.sauces, exports.sides, exports.entrees, exports.spreads, exports.condiments, exports.sandwiches, exports.snacks, exports.breads, exports.fruits, exports.seafoods, exports.proteins));
//make sure foods only contains unqiue items
exports.foods = exports.foods.filter(function (item, index, self) { return self.indexOf(item) === index; });
