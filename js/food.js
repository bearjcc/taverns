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
exports.__esModule = true;
exports.scoopOGloop_prototype = exports.ScoopOGloop = exports.ooeyGooeyFreshNFruity_prototype = exports.OoeyGooeyFreshNFruity = exports.muddyMossyMoldyMess_prototype = exports.MuddyMossyMoldyMess = exports.caveCritterFritters_prototype = exports.CaveCritterFritters = exports.algaePaste_prototype = exports.AlgaePaste = exports.bugJuice_prototype = exports.BugJuice = exports.slimeSlurpie_prototype = exports.SlimeSlurpie = exports.mossWrap_prototype = exports.MossWrap = exports.bugsNOoze_prototype = exports.BugsNOoze = exports.bugsNSlime_prototype = exports.BugsNSlime = exports.seasonedInsects_prototype = exports.SeasonedInsects = exports.roastedInsects_prototype = exports.RoastedInsects = exports.insectPuree_prototype = exports.InsectPuree = exports.rawInsects_prototype = exports.RawInsects = exports.funGuyFungiFeast_prototype = exports.FunGuyFungiFeast = exports.friedDumplings_prototype = exports.FriedDumplings = exports.steamedDumplings_prototype = exports.SteamedDumplings = exports.caviar_prototype = exports.Caviar = exports.friedRice_prototype = exports.FriedRice = exports.chickenPotPie_prototype = exports.ChickenPotPie = exports.friedProtein_prototype = exports.FriedProtein = exports.grilledProtein_prototype = exports.GrilledProtein = exports.rawMeat_prototype = exports.RawMeat = exports.quesadillas_prototype = exports.Quesadillas = exports.pie_prototype = exports.Pie = exports.yogurtParfait_prototype = exports.YogurtParfait = exports.waffles_prototype = exports.Waffles = exports.avocadoToast_prototype = exports.AvocadoToast = exports.fishAndFungi_prototype = exports.FishAndFungi = exports.meatloaf_prototype = exports.Meatloaf = exports.fruitSnack_prototype = exports.FruitSnack = exports.oatmeal_prototype = exports.Oatmeal = exports.cornBread_prototype = exports.CornBread = exports.riceAndBeans_prototype = exports.RiceAndBeans = exports.pho_prototype = exports.Pho = exports.cabbageRolls_prototype = exports.CabbageRolls = exports.chickenAndRice_prototype = exports.ChickenAndRice = exports.hamAndEggs_prototype = exports.HamAndEggs = exports.steakAndEggs_prototype = exports.SteakAndEggs = exports.stirFry_prototype = exports.StirFry = exports.eggSalad_prototype = exports.EggSalad = exports.eggRolls_prototype = exports.EggRolls = exports.stuffedShrooms_prototype = exports.StuffedShrooms = exports.bruschetta_prototype = exports.Bruschetta = exports.roastedVegetables_prototype = exports.RoastedVegetables = exports.gumbo_prototype = exports.Gumbo = exports.ratatouille_prototype = exports.Ratatouille = exports.steakAndPotatoes_prototype = exports.SteakAndPotatoes = exports.coleslaw_prototype = exports.Coleslaw = exports.sausageAndPeppers_prototype = exports.SausageAndPeppers = exports.frenchFries_prototype = exports.FrenchFries = exports.sushi_prototype = exports.Sushi = exports.jerky_prototype = exports.Jerky = exports.curryRice_prototype = exports.CurryRice = exports.bakedPotato_prototype = exports.BakedPotato = exports.bananaBread_prototype = exports.BananaBread = exports.fruitSalad_prototype = exports.FruitSalad = exports.pizza_prototype = exports.Pizza = exports.cake_prototype = exports.Cake = exports.nutsNBerries_prototype = exports.NutsNBerries = exports.boiledEgg_prototype = exports.BoiledEgg = exports.tea_prototype = exports.Tea = exports.chocolateMilk_prototype = exports.ChocolateMilk = exports.milkshake_prototype = exports.Milkshake = exports.coffee_prototype = exports.Coffee = exports.lettuceWrap_prototype = exports.LettuceWrap = exports.pBJ_prototype = exports.PBJ = exports.toasties_prototype = exports.Toasties = exports.burger_prototype = exports.Burger = exports.bLT_prototype = exports.BLT = exports.chickenNoodleSoup_prototype = exports.ChickenNoodleSoup = exports.chili_prototype = exports.Chili = exports.cornChowder_prototype = exports.CornChowder = exports.lobsterBisque_prototype = exports.LobsterBisque = exports.clamChowder_prototype = exports.ClamChowder = exports.lasagna_prototype = exports.Lasagna = exports.beefStroganoff_prototype = exports.BeefStroganoff = exports.carbonara_prototype = exports.Carbonara = exports.macNCheese_prototype = exports.MacNCheese = exports.pastaSauceMeat_prototype = exports.PastaSauceMeat = exports.pastaAndSauce_prototype = exports.PastaAndSauce = exports.plainPasta_prototype = exports.PlainPasta = exports.chiliFlakes_prototype = exports.ChiliFlakes = exports.ketchup_prototype = exports.Ketchup = exports.mayonnaise_prototype = exports.Mayonnaise = exports.jellies_prototype = exports.Jellies = exports.peanutButter_prototype = exports.PeanutButter = exports.salsa_prototype = exports.Salsa = exports.guacamole_prototype = exports.Guacamole = exports.syrup_prototype = exports.Syrup = exports.groundGinger_prototype = exports.GroundGinger = exports.yogurt_prototype = exports.Yogurt = exports.whippedCream_prototype = exports.WhippedCream = exports.cheese_prototype = exports.Cheese = exports.sourCream_prototype = exports.SourCream = exports.cream_prototype = exports.Cream = exports.butter_prototype = exports.Butter = exports.goatCheese_prototype = exports.GoatCheese = exports.iceCream_prototype = exports.IceCream = exports.pastryDough_prototype = exports.PastryDough = exports.pizzaDough_prototype = exports.PizzaDough = exports.pieFilling_prototype = exports.PieFilling = exports.tortilla_prototype = exports.Tortilla = exports.broth_prototype = exports.Broth = exports.tofu_prototype = exports.Tofu = exports.batter_prototype = exports.Batter = exports.cookedRice_prototype = exports.CookedRice = exports.rawRiceNoodles_prototype = exports.RawRiceNoodles = exports.rawNoodles_prototype = exports.RawNoodles = exports.breadDough_prototype = exports.BreadDough = exports.granola_prototype = exports.Granola = exports.crushedIce_prototype = exports.CrushedIce = exports.pancake_prototype = exports.Pancake = exports.pickle_prototype = exports.Pickle = exports.poachedEgg_prototype = exports.PoachedEgg = exports.scrambledEgg_prototype = exports.ScrambledEgg = exports.omelet_prototype = exports.Omelet = exports.friedEgg_prototype = exports.FriedEgg = exports.chocolate_prototype = exports.Chocolate = exports.chiliPowder_prototype = exports.ChiliPowder = exports.jam_prototype = exports.Jam = exports.pancakeBatter_prototype = exports.PancakeBatter = exports.honey_prototype = exports.Honey = exports.CookingRecipe = exports.buckwheatFlour_prototype = exports.ryeFlour_prototype = exports.oatFlour_prototype = exports.barleyFlour_prototype = exports.wheatFlour_prototype = exports.riceFlour_prototype = exports.Flour = exports.beets_prototype = exports.Beets = exports.goldenCurry_prototype = exports.yellowCurry_prototype = exports.greenCurry_prototype = exports.redCurry_prototype = exports.Curry = exports.roseWine_prototype = exports.muscadineWine_prototype = exports.redWine_prototype = exports.whiteWine_prototype = exports.Wine = exports.dragonessence_prototype = exports.stickyOil_prototype = exports.peanutOil_prototype = exports.avocadoOil_prototype = exports.oliveOil_prototype = exports.grapeseedOil_prototype = exports.vegetableOil_prototype = exports.Oil = exports.barley_prototype = exports.Barley = exports.oats_prototype = exports.Oats = exports.wheat_prototype = exports.Wheat = exports.teaLeaves_prototype = exports.TeaLeaves = exports.coffeeBeans_prototype = exports.CoffeeBeans = exports.cocoaBeans_prototype = exports.CocoaBeans = exports.milkOfThePoppy_prototype = exports.MilkOfThePoppy = exports.goatMilk_prototype = exports.cowMilk_prototype = exports.Milk = exports.soySauce_prototype = exports.SoySauce = exports.dragonEgg_prototype = exports.lizardEgg_prototype = exports.snakeEgg_prototype = exports.fishEgg_prototype = exports.chickenEgg_prototype = exports.Egg = exports.redOnion_prototype = exports.greenOnion_prototype = exports.whiteOnion_prototype = exports.purpleOnion_prototype = exports.Onion = exports.cucumbers_prototype = exports.Cucumbers = exports.vanillaBean_prototype = exports.VanillaBean = exports.acorns_prototype = exports.Acorns = exports.mapleSap_prototype = exports.MapleSap = exports.wasabi_prototype = exports.Wasabi = exports.sprouts_prototype = exports.Sprouts = exports.venison_prototype = exports.Venison = exports.humanoidFlesh_prototype = exports.HumanoidFlesh = exports.glowworm_prototype = exports.Glowworm = exports.oozePurple_prototype = exports.oozeSuperior_prototype = exports.oozeGreen_prototype = exports.oozeGray_prototype = exports.Ooze = exports.antsFire_prototype = exports.antsBlack_prototype = exports.antsRed_prototype = exports.Ants = exports.beetles_prototype = exports.Beetles = exports.mealworms_prototype = exports.Mealworms = exports.brains_prototype = exports.Brains = exports.grubs_prototype = exports.Grubs = exports.dragonmeat_prototype = exports.Dragonmeat = exports.questionableMeat_prototype = exports.QuestionableMeat = exports.rancidMeat_prototype = exports.RancidMeat = exports.broccoli_prototype = exports.Broccoli = exports.cauliflower_prototype = exports.Cauliflower = exports.cabbage_prototype = exports.Cabbage = exports.lettuce_prototype = exports.Lettuce = exports.tomatoes_prototype = exports.Tomatoes = exports.basil_prototype = exports.Basil = exports.sage_prototype = exports.Sage = exports.chives_prototype = exports.Chives = exports.turmeric_prototype = exports.Turmeric = exports.thyme_prototype = exports.Thyme = exports.rosemary_prototype = exports.Rosemary = exports.parsley_prototype = exports.Parsley = exports.oregano_prototype = exports.Oregano = exports.ginger_prototype = exports.Ginger = exports.garlic_prototype = exports.Garlic = exports.fennel_prototype = exports.Fennel = exports.dill_prototype = exports.Dill = exports.cumin_prototype = exports.Cumin = exports.cilantro_prototype = exports.Cilantro = exports.coriander_prototype = exports.Coriander = exports.pepperChili_prototype = exports.pepperCayenne_prototype = exports.pepperJalapeno_prototype = exports.pepperBell_prototype = exports.pepperWhite_prototype = exports.pepperBlack_prototype = exports.Pepper = exports.pineapple_prototype = exports.Pineapple = exports.banana_prototype = exports.Banana = exports.berryBlackCurrant_prototype = exports.berryBlueCurrant_prototype = exports.berryRasp_prototype = exports.berryStraw_prototype = exports.berryCherry_prototype = exports.berrySnozz_prototype = exports.berryBlack_prototype = exports.berryBlue_prototype = exports.berryRed_prototype = exports.Berry = exports.eggplant_prototype = exports.Eggplant = exports.beet_prototype = exports.Beet = exports.potato_prototype = exports.Potato = exports.carrot_prototype = exports.Carrot = exports.coconut_prototype = exports.Coconut = exports.chestnut_prototype = exports.Chestnut = exports.brazilNut_prototype = exports.BrazilNut = exports.almond_prototype = exports.Almond = exports.walnut_prototype = exports.Walnut = exports.peanut_prototype = exports.Peanut = exports.citrusTangerine_prototype = exports.citrusGrapefruit_prototype = exports.citrusLime_prototype = exports.citrusLemon_prototype = exports.citrusOrange_prototype = exports.Citrus = exports.avocado_prototype = exports.Avocado = exports.grapeMuscadine_prototype = exports.grapePurple_prototype = exports.grapeWhite_prototype = exports.grapeRed_prototype = exports.Grape = exports.pear_prototype = exports.Pear = exports.appleGolden_prototype = exports.appleGreen_prototype = exports.appleRed_prototype = exports.Apple = exports.mushroomRed_prototype = exports.mushroomMorel_prototype = exports.mushroomGlowing_prototype = exports.mushroomPurple_prototype = exports.mushroomBrown_prototype = exports.mushroomWhite_prototype = exports.Mushroom = exports.beansSoy_prototype = exports.beansJack_prototype = exports.beansGarbanzo_prototype = exports.beansMung_prototype = exports.beansLima_prototype = exports.beansGreen_prototype = exports.beansBlack_prototype = exports.beansPinto_prototype = exports.beansKidney_prototype = exports.Beans = exports.asparagus_prototype = exports.Asparagus = exports.cornOnOheCob_prototype = exports.CornOnTheCob = exports.corn_prototype = exports.Corn = exports.rice_prototype = exports.Rice = exports.seaweedBrown_prototype = exports.seaweedGreen_prototype = exports.seaweedRed_prototype = exports.Seaweed = exports.sugar_prototype = exports.Sugar = exports.pig_feet_prototype = exports.PigFeet = exports.pig_skin_prototype = exports.PigSkin = exports.pork_prototype = exports.Pork = exports.beef_prototype = exports.Beef = exports.shark_meat_prototype = exports.SharkMeat = exports.shrimp_prototype = exports.Shrimp = exports.clam_meat_prototype = exports.ClamMeat = exports.lobster_prototype = exports.Lobster = exports.catfish_prototype = exports.Catfish = exports.crayfish_prototype = exports.Crayfish = exports.carp_prototype = exports.Carp = exports.pike_prototype = exports.Pike = exports.rainbowTrout_prototype = exports.RainbowTrout = exports.trout_prototype = exports.Trout = exports.salmon_prototype = exports.Salmon = exports.fishes = exports.nuts = exports.oils = exports.grains = exports.fruits = exports.vegetables = exports.seafoods = exports.crustaceans = exports.meats = exports.proteins = exports.foods = exports.Food = void 0;
var itm_consumables_1 = require("./itm_consumables");
var recipes_1 = require("./recipes");
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food() {
        var _this = _super.call(this) || this;
        _this.mustBeDry = false; // does the food need to be dried?
        _this.canBeCooked = true; // can the food be cooked?
        _this.hasType = false; // does the food have a type?
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
}(itm_consumables_1.Consumable));
exports.Food = Food;
exports.foods = [];
exports.proteins = [];
exports.meats = [];
exports.crustaceans = [];
exports.seafoods = [];
exports.vegetables = [];
exports.fruits = [];
exports.grains = [];
exports.oils = [];
exports.nuts = [];
exports.fishes = [];
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
        else if (type === "cherry") {
            _this.singular = "cherry";
            _this.plural = "cherries";
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
exports.berryCherry_prototype = new Berry("cherry");
exports.berryStraw_prototype = new Berry("straw");
exports.berryRasp_prototype = new Berry("rasp");
exports.berryBlueCurrant_prototype = new Berry("blue currant");
exports.berryBlackCurrant_prototype = new Berry("black currant");
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
var RancidMeat = /** @class */ (function (_super) {
    __extends(RancidMeat, _super);
    function RancidMeat() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Rancid Meat");
        _this.singular = "Rancid Meat";
        _this.plural = "Rancid Meat";
        _this.description = "Rancid Meat";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Questing"];
        return _this;
    }
    return RancidMeat;
}(Food));
exports.RancidMeat = RancidMeat;
exports.rancidMeat_prototype = new RancidMeat();
var QuestionableMeat = /** @class */ (function (_super) {
    __extends(QuestionableMeat, _super);
    function QuestionableMeat() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Questionable Meat");
        _this.singular = "Questionable Meat";
        _this.plural = "Questionable Meat";
        _this.description = "Questionable Meat";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Questing"];
        return _this;
    }
    return QuestionableMeat;
}(Food));
exports.QuestionableMeat = QuestionableMeat;
exports.questionableMeat_prototype = new QuestionableMeat();
var Dragonmeat = /** @class */ (function (_super) {
    __extends(Dragonmeat, _super);
    function Dragonmeat() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Dragonmeat");
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
var Mealworms = /** @class */ (function (_super) {
    __extends(Mealworms, _super);
    function Mealworms() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Mealworm");
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
var Beetles = /** @class */ (function (_super) {
    __extends(Beetles, _super);
    function Beetles() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Beetle");
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
var Ants = /** @class */ (function (_super) {
    __extends(Ants, _super);
    function Ants(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Protein", "Ant");
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
var Glowworm = /** @class */ (function (_super) {
    __extends(Glowworm, _super);
    function Glowworm() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Glowworm");
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
var HumanoidFlesh = /** @class */ (function (_super) {
    __extends(HumanoidFlesh, _super);
    function HumanoidFlesh() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Humanoid Flesh");
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
var Venison = /** @class */ (function (_super) {
    __extends(Venison, _super);
    function Venison() {
        var _this = _super.call(this) || this;
        _this.categories.push("Protein", "Venison");
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
var Sprouts = /** @class */ (function (_super) {
    __extends(Sprouts, _super);
    function Sprouts() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Sprout");
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
var Wasabi = /** @class */ (function (_super) {
    __extends(Wasabi, _super);
    function Wasabi() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Wasabi");
        _this.singular = "Wasabi";
        _this.plural = "Wasabi";
        _this.description = "Wasabi";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Trading"];
        return _this;
    }
    return Wasabi;
}(Food));
exports.Wasabi = Wasabi;
exports.wasabi_prototype = new Wasabi();
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
var Acorns = /** @class */ (function (_super) {
    __extends(Acorns, _super);
    function Acorns() {
        var _this = _super.call(this) || this;
        _this.categories.push("Other", "Acorn");
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
var Egg = /** @class */ (function (_super) {
    __extends(Egg, _super);
    function Egg(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Egg");
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
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Dairy", "Milk");
        _this.singular = _this.type + " milk";
        _this.plural = _this.singular;
        _this.description = "milk";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Milk;
}(Food));
exports.Milk = Milk;
exports.cowMilk_prototype = new Milk("cow");
exports.goatMilk_prototype = new Milk("goat");
var MilkOfThePoppy = /** @class */ (function (_super) {
    __extends(MilkOfThePoppy, _super);
    function MilkOfThePoppy() {
        var _this = _super.call(this) || this;
        _this.categories.push("Spice", "Milk of the Poppy");
        _this.singular = "Milk of the Poppy";
        _this.plural = "Milk of the Poppy";
        _this.description = "Milk of the Poppy";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Foraging"];
        return _this;
    }
    return MilkOfThePoppy;
}(Food));
exports.MilkOfThePoppy = MilkOfThePoppy;
exports.milkOfThePoppy_prototype = new MilkOfThePoppy();
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
var CoffeeBeans = /** @class */ (function (_super) {
    __extends(CoffeeBeans, _super);
    function CoffeeBeans() {
        var _this = _super.call(this) || this;
        _this.categories.push("Tea", "Coffee Beans");
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
var TeaLeaves = /** @class */ (function (_super) {
    __extends(TeaLeaves, _super);
    function TeaLeaves() {
        var _this = _super.call(this) || this;
        _this.categories.push("Tea", "Tea Leaves");
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
var Oil = /** @class */ (function (_super) {
    __extends(Oil, _super);
    function Oil(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Oil");
        _this.singular = _this.type + " oil";
        _this.plural = _this.singular;
        if (type === "dragonessence") {
            _this.singular = "Dragonessence";
            _this.plural = "Dragonessence";
        }
        _this.description = "oil";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Oil;
}(Food));
exports.Oil = Oil;
exports.vegetableOil_prototype = new Oil("vegetable");
exports.grapeseedOil_prototype = new Oil("grapeseed");
exports.oliveOil_prototype = new Oil("olive");
exports.avocadoOil_prototype = new Oil("avocado");
exports.peanutOil_prototype = new Oil("peanut");
exports.stickyOil_prototype = new Oil("sticky");
exports.dragonessence_prototype = new Oil("dragonessence");
var Wine = /** @class */ (function (_super) {
    __extends(Wine, _super);
    function Wine(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Alcohol");
        _this.singular = _this.type + " wine";
        _this.plural = _this.singular;
        if (type === "rosé") {
            _this.singular = "Rosé";
            _this.plural = "Rosé";
        }
        _this.description = "wine";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Wine;
}(Food));
exports.Wine = Wine;
exports.whiteWine_prototype = new Wine("white");
exports.redWine_prototype = new Wine("red");
exports.muscadineWine_prototype = new Wine("muscadine");
exports.roseWine_prototype = new Wine("rosé");
var Curry = /** @class */ (function (_super) {
    __extends(Curry, _super);
    function Curry(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Spice");
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
var Flour = /** @class */ (function (_super) {
    __extends(Flour, _super);
    function Flour(type) {
        var _this = _super.call(this) || this;
        _this.hasType = true;
        _this.type = type;
        _this.categories.push("Pasta");
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
var CookingRecipe = /** @class */ (function (_super) {
    __extends(CookingRecipe, _super);
    function CookingRecipe(name, description) {
        return _super.call(this, name, description) || this;
    }
    return CookingRecipe;
}(recipes_1.Recipe));
exports.CookingRecipe = CookingRecipe;
var Honey = /** @class */ (function (_super) {
    __extends(Honey, _super);
    function Honey() {
        var _this = _super.call(this) || this;
        _this.categories.push("Honey");
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
var cookingRecipes = [];
var PancakeBatter = /** @class */ (function (_super) {
    __extends(PancakeBatter, _super);
    function PancakeBatter() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pancake Batter");
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
var Jam = /** @class */ (function (_super) {
    __extends(Jam, _super);
    function Jam() {
        var _this = _super.call(this) || this;
        _this.categories.push("Jam");
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
var ChiliPowder = /** @class */ (function (_super) {
    __extends(ChiliPowder, _super);
    function ChiliPowder() {
        var _this = _super.call(this) || this;
        _this.categories.push("Chili Powder");
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
var Chocolate = /** @class */ (function (_super) {
    __extends(Chocolate, _super);
    function Chocolate() {
        var _this = _super.call(this) || this;
        _this.categories.push("Chocolate");
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
var FriedEgg = /** @class */ (function (_super) {
    __extends(FriedEgg, _super);
    function FriedEgg() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fried Egg");
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
var Omelet = /** @class */ (function (_super) {
    __extends(Omelet, _super);
    function Omelet() {
        var _this = _super.call(this) || this;
        _this.categories.push("Omelet");
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
var ScrambledEgg = /** @class */ (function (_super) {
    __extends(ScrambledEgg, _super);
    function ScrambledEgg() {
        var _this = _super.call(this) || this;
        _this.categories.push("Scrambled Egg");
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
var PoachedEgg = /** @class */ (function (_super) {
    __extends(PoachedEgg, _super);
    function PoachedEgg() {
        var _this = _super.call(this) || this;
        _this.categories.push("Poached Egg");
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
var Pickle = /** @class */ (function (_super) {
    __extends(Pickle, _super);
    function Pickle() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pickle");
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
var Pancake = /** @class */ (function (_super) {
    __extends(Pancake, _super);
    function Pancake() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pancake");
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
var CrushedIce = /** @class */ (function (_super) {
    __extends(CrushedIce, _super);
    function CrushedIce() {
        var _this = _super.call(this) || this;
        _this.categories.push("Crushed Ice");
        _this.singular = "crushed ice";
        _this.plural = "crushed ice";
        _this.description = "crushed ice";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CrushedIce;
}(Food));
exports.CrushedIce = CrushedIce;
exports.crushedIce_prototype = new CrushedIce();
var Granola = /** @class */ (function (_super) {
    __extends(Granola, _super);
    function Granola() {
        var _this = _super.call(this) || this;
        _this.categories.push("Granola");
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
var BreadDough = /** @class */ (function (_super) {
    __extends(BreadDough, _super);
    function BreadDough() {
        var _this = _super.call(this) || this;
        _this.categories.push("Bread Dough");
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
var RawNoodles = /** @class */ (function (_super) {
    __extends(RawNoodles, _super);
    function RawNoodles() {
        var _this = _super.call(this) || this;
        _this.categories.push("Raw Noodles");
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
    return RawNoodles;
}(Food));
exports.RawNoodles = RawNoodles;
exports.rawNoodles_prototype = new RawNoodles();
var RawRiceNoodles = /** @class */ (function (_super) {
    __extends(RawRiceNoodles, _super);
    function RawRiceNoodles() {
        var _this = _super.call(this) || this;
        _this.categories.push("Raw Rice Noodles");
        _this.singular = "raw rice noodles";
        _this.plural = "raw rice noodles";
        _this.description = "raw rice noodles";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return RawRiceNoodles;
}(Food));
exports.RawRiceNoodles = RawRiceNoodles;
exports.rawRiceNoodles_prototype = new RawRiceNoodles();
var CookedRice = /** @class */ (function (_super) {
    __extends(CookedRice, _super);
    function CookedRice() {
        var _this = _super.call(this) || this;
        _this.categories.push("Cooked Rice");
        _this.singular = "cooked rice";
        _this.plural = "cooked rice";
        _this.description = "cooked rice";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CookedRice;
}(Food));
exports.CookedRice = CookedRice;
exports.cookedRice_prototype = new CookedRice();
var Batter = /** @class */ (function (_super) {
    __extends(Batter, _super);
    function Batter() {
        var _this = _super.call(this) || this;
        _this.categories.push("Batter");
        _this.singular = "batter";
        _this.plural = "batter";
        _this.description = "batter";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Batter;
}(Food));
exports.Batter = Batter;
exports.batter_prototype = new Batter();
var Tofu = /** @class */ (function (_super) {
    __extends(Tofu, _super);
    function Tofu() {
        var _this = _super.call(this) || this;
        _this.categories.push("Tofu");
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
var Broth = /** @class */ (function (_super) {
    __extends(Broth, _super);
    function Broth() {
        var _this = _super.call(this) || this;
        _this.categories.push("Broth");
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
var Tortilla = /** @class */ (function (_super) {
    __extends(Tortilla, _super);
    function Tortilla() {
        var _this = _super.call(this) || this;
        _this.categories.push("Tortilla");
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
var PieFilling = /** @class */ (function (_super) {
    __extends(PieFilling, _super);
    function PieFilling() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pie Filling");
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
var PizzaDough = /** @class */ (function (_super) {
    __extends(PizzaDough, _super);
    function PizzaDough() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pizza Dough");
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
var PastryDough = /** @class */ (function (_super) {
    __extends(PastryDough, _super);
    function PastryDough() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pastry Dough");
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
var IceCream = /** @class */ (function (_super) {
    __extends(IceCream, _super);
    function IceCream() {
        var _this = _super.call(this) || this;
        _this.categories.push("Ice Cream");
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
var GoatCheese = /** @class */ (function (_super) {
    __extends(GoatCheese, _super);
    function GoatCheese() {
        var _this = _super.call(this) || this;
        _this.categories.push("Goat Cheese");
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
var Butter = /** @class */ (function (_super) {
    __extends(Butter, _super);
    function Butter() {
        var _this = _super.call(this) || this;
        _this.categories.push("Butter");
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
var Cream = /** @class */ (function (_super) {
    __extends(Cream, _super);
    function Cream() {
        var _this = _super.call(this) || this;
        _this.categories.push("Cream");
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
var SourCream = /** @class */ (function (_super) {
    __extends(SourCream, _super);
    function SourCream() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sour Cream");
        _this.singular = "sour cream";
        _this.plural = "sour cream";
        _this.description = "sour cream";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return SourCream;
}(Food));
exports.SourCream = SourCream;
exports.sourCream_prototype = new SourCream();
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
var WhippedCream = /** @class */ (function (_super) {
    __extends(WhippedCream, _super);
    function WhippedCream() {
        var _this = _super.call(this) || this;
        _this.categories.push("Whipped Cream");
        _this.singular = "whipped cream";
        _this.plural = "whipped cream";
        _this.description = "whipped cream";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return WhippedCream;
}(Food));
exports.WhippedCream = WhippedCream;
exports.whippedCream_prototype = new WhippedCream();
var Yogurt = /** @class */ (function (_super) {
    __extends(Yogurt, _super);
    function Yogurt() {
        var _this = _super.call(this) || this;
        _this.categories.push("Yogurt");
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
var Wasabi = /** @class */ (function (_super) {
    __extends(Wasabi, _super);
    function Wasabi() {
        var _this = _super.call(this) || this;
        _this.categories.push("Wasabi");
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
var GroundGinger = /** @class */ (function (_super) {
    __extends(GroundGinger, _super);
    function GroundGinger() {
        var _this = _super.call(this) || this;
        _this.categories.push("Ground Ginger");
        _this.singular = "ground ginger";
        _this.plural = "ground ginger";
        _this.description = "ground ginger";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return GroundGinger;
}(Food));
exports.GroundGinger = GroundGinger;
exports.groundGinger_prototype = new GroundGinger();
var Syrup = /** @class */ (function (_super) {
    __extends(Syrup, _super);
    function Syrup() {
        var _this = _super.call(this) || this;
        _this.categories.push("Syrup");
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
var Guacamole = /** @class */ (function (_super) {
    __extends(Guacamole, _super);
    function Guacamole() {
        var _this = _super.call(this) || this;
        _this.categories.push("Guacamole");
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
var Salsa = /** @class */ (function (_super) {
    __extends(Salsa, _super);
    function Salsa() {
        var _this = _super.call(this) || this;
        _this.categories.push("Salsa");
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
var PeanutButter = /** @class */ (function (_super) {
    __extends(PeanutButter, _super);
    function PeanutButter() {
        var _this = _super.call(this) || this;
        _this.categories.push("Peanut Butter");
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
var Jellies = /** @class */ (function (_super) {
    __extends(Jellies, _super);
    function Jellies() {
        var _this = _super.call(this) || this;
        _this.categories.push("Jellies");
        _this.singular = "jellies";
        _this.plural = "jellies";
        _this.description = "jellies";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Jellies;
}(Food));
exports.Jellies = Jellies;
exports.jellies_prototype = new Jellies();
var Mayonnaise = /** @class */ (function (_super) {
    __extends(Mayonnaise, _super);
    function Mayonnaise() {
        var _this = _super.call(this) || this;
        _this.categories.push("Mayonnaise");
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
var Ketchup = /** @class */ (function (_super) {
    __extends(Ketchup, _super);
    function Ketchup() {
        var _this = _super.call(this) || this;
        _this.categories.push("Ketchup");
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
var ChiliFlakes = /** @class */ (function (_super) {
    __extends(ChiliFlakes, _super);
    function ChiliFlakes() {
        var _this = _super.call(this) || this;
        _this.categories.push("Chili Flakes");
        _this.singular = "chili flakes";
        _this.plural = "chili flakes";
        _this.description = "chili flakes";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return ChiliFlakes;
}(Food));
exports.ChiliFlakes = ChiliFlakes;
exports.chiliFlakes_prototype = new ChiliFlakes();
var PlainPasta = /** @class */ (function (_super) {
    __extends(PlainPasta, _super);
    function PlainPasta() {
        var _this = _super.call(this) || this;
        _this.categories.push("Plain Pasta");
        _this.singular = "plain pasta";
        _this.plural = "plain pasta";
        _this.description = "plain pasta";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PlainPasta;
}(Food));
exports.PlainPasta = PlainPasta;
exports.plainPasta_prototype = new PlainPasta();
var PastaAndSauce = /** @class */ (function (_super) {
    __extends(PastaAndSauce, _super);
    function PastaAndSauce() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pasta and Sauce");
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
    return PastaAndSauce;
}(Food));
exports.PastaAndSauce = PastaAndSauce;
exports.pastaAndSauce_prototype = new PastaAndSauce();
var PastaSauceMeat = /** @class */ (function (_super) {
    __extends(PastaSauceMeat, _super);
    function PastaSauceMeat() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pasta, Sauce, and Meat");
        _this.singular = "pasta, sauce, and meat";
        _this.plural = "pasta, sauce, and meat";
        _this.description = "pasta, sauce, and meat";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return PastaSauceMeat;
}(Food));
exports.PastaSauceMeat = PastaSauceMeat;
exports.pastaSauceMeat_prototype = new PastaSauceMeat();
var MacNCheese = /** @class */ (function (_super) {
    __extends(MacNCheese, _super);
    function MacNCheese() {
        var _this = _super.call(this) || this;
        _this.categories.push("Mac 'n' Cheese");
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
var Carbonara = /** @class */ (function (_super) {
    __extends(Carbonara, _super);
    function Carbonara() {
        var _this = _super.call(this) || this;
        _this.categories.push("Carbonara");
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
var BeefStroganoff = /** @class */ (function (_super) {
    __extends(BeefStroganoff, _super);
    function BeefStroganoff() {
        var _this = _super.call(this) || this;
        _this.categories.push("Beef Stroganoff");
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
var Lasagna = /** @class */ (function (_super) {
    __extends(Lasagna, _super);
    function Lasagna() {
        var _this = _super.call(this) || this;
        _this.categories.push("Lasagna");
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
var ClamChowder = /** @class */ (function (_super) {
    __extends(ClamChowder, _super);
    function ClamChowder() {
        var _this = _super.call(this) || this;
        _this.categories.push("Clam Chowder");
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
var LobsterBisque = /** @class */ (function (_super) {
    __extends(LobsterBisque, _super);
    function LobsterBisque() {
        var _this = _super.call(this) || this;
        _this.categories.push("Lobster Bisque");
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
var CornChowder = /** @class */ (function (_super) {
    __extends(CornChowder, _super);
    function CornChowder() {
        var _this = _super.call(this) || this;
        _this.categories.push("Corn Chowder");
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
var Chili = /** @class */ (function (_super) {
    __extends(Chili, _super);
    function Chili() {
        var _this = _super.call(this) || this;
        _this.categories.push("Chili");
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
var ChickenNoodleSoup = /** @class */ (function (_super) {
    __extends(ChickenNoodleSoup, _super);
    function ChickenNoodleSoup() {
        var _this = _super.call(this) || this;
        _this.categories.push("Chicken Noodle Soup");
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
var BLT = /** @class */ (function (_super) {
    __extends(BLT, _super);
    function BLT() {
        var _this = _super.call(this) || this;
        _this.categories.push("BLT");
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
var Burger = /** @class */ (function (_super) {
    __extends(Burger, _super);
    function Burger() {
        var _this = _super.call(this) || this;
        _this.categories.push("Burger");
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
var Toasties = /** @class */ (function (_super) {
    __extends(Toasties, _super);
    function Toasties() {
        var _this = _super.call(this) || this;
        _this.categories.push("Toasties");
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
var LettuceWrap = /** @class */ (function (_super) {
    __extends(LettuceWrap, _super);
    function LettuceWrap() {
        var _this = _super.call(this) || this;
        _this.categories.push("Lettuce Wrap");
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
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee() {
        var _this = _super.call(this) || this;
        _this.categories.push("Coffee");
        _this.singular = "coffee";
        _this.plural = "coffee";
        _this.description = "coffee";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Coffee;
}(Food));
exports.Coffee = Coffee;
exports.coffee_prototype = new Coffee();
var Milkshake = /** @class */ (function (_super) {
    __extends(Milkshake, _super);
    function Milkshake() {
        var _this = _super.call(this) || this;
        _this.categories.push("Milkshake");
        _this.singular = "milkshake";
        _this.plural = "milkshake";
        _this.description = "milkshake";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Milkshake;
}(Food));
exports.Milkshake = Milkshake;
exports.milkshake_prototype = new Milkshake();
var ChocolateMilk = /** @class */ (function (_super) {
    __extends(ChocolateMilk, _super);
    function ChocolateMilk() {
        var _this = _super.call(this) || this;
        _this.categories.push("Chocolate Milk");
        _this.singular = "chocolate milk";
        _this.plural = "chocolate milk";
        _this.description = "chocolate milk";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return ChocolateMilk;
}(Food));
exports.ChocolateMilk = ChocolateMilk;
exports.chocolateMilk_prototype = new ChocolateMilk();
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        var _this = _super.call(this) || this;
        _this.categories.push("Tea");
        _this.singular = "tea";
        _this.plural = "tea";
        _this.description = "tea";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Tea;
}(Food));
exports.Tea = Tea;
exports.tea_prototype = new Tea();
var BoiledEgg = /** @class */ (function (_super) {
    __extends(BoiledEgg, _super);
    function BoiledEgg() {
        var _this = _super.call(this) || this;
        _this.categories.push("Boiled Egg");
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
var NutsNBerries = /** @class */ (function (_super) {
    __extends(NutsNBerries, _super);
    function NutsNBerries() {
        var _this = _super.call(this) || this;
        _this.categories.push("Nuts 'n' Berries");
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
var Cake = /** @class */ (function (_super) {
    __extends(Cake, _super);
    function Cake() {
        var _this = _super.call(this) || this;
        _this.categories.push("Cake");
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
var Pizza = /** @class */ (function (_super) {
    __extends(Pizza, _super);
    function Pizza() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pizza");
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
var FruitSalad = /** @class */ (function (_super) {
    __extends(FruitSalad, _super);
    function FruitSalad() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit Salad");
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
var BananaBread = /** @class */ (function (_super) {
    __extends(BananaBread, _super);
    function BananaBread() {
        var _this = _super.call(this) || this;
        _this.categories.push("Banana Bread");
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
var BakedPotato = /** @class */ (function (_super) {
    __extends(BakedPotato, _super);
    function BakedPotato() {
        var _this = _super.call(this) || this;
        _this.categories.push("Baked Potato");
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
var CurryRice = /** @class */ (function (_super) {
    __extends(CurryRice, _super);
    function CurryRice() {
        var _this = _super.call(this) || this;
        _this.categories.push("Curry and Rice");
        _this.singular = "curry and rice";
        _this.plural = "curry and rice";
        _this.description = "curry and rice";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return CurryRice;
}(Food));
exports.CurryRice = CurryRice;
exports.curryRice_prototype = new CurryRice();
var Jerky = /** @class */ (function (_super) {
    __extends(Jerky, _super);
    function Jerky() {
        var _this = _super.call(this) || this;
        _this.categories.push("Jerky");
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
var Sushi = /** @class */ (function (_super) {
    __extends(Sushi, _super);
    function Sushi() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sushi");
        _this.singular = "sushi";
        _this.plural = "sushi";
        _this.description = "sushi";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Fishing"];
        return _this;
    }
    return Sushi;
}(Food));
exports.Sushi = Sushi;
exports.sushi_prototype = new Sushi();
var FrenchFries = /** @class */ (function (_super) {
    __extends(FrenchFries, _super);
    function FrenchFries() {
        var _this = _super.call(this) || this;
        _this.categories.push("French Fries");
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
var SausageAndPeppers = /** @class */ (function (_super) {
    __extends(SausageAndPeppers, _super);
    function SausageAndPeppers() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sausage and Peppers");
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
var Coleslaw = /** @class */ (function (_super) {
    __extends(Coleslaw, _super);
    function Coleslaw() {
        var _this = _super.call(this) || this;
        _this.categories.push("Coleslaw");
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
var SteakAndPotatoes = /** @class */ (function (_super) {
    __extends(SteakAndPotatoes, _super);
    function SteakAndPotatoes() {
        var _this = _super.call(this) || this;
        _this.categories.push("Steak and Potatoes");
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
var Ratatouille = /** @class */ (function (_super) {
    __extends(Ratatouille, _super);
    function Ratatouille() {
        var _this = _super.call(this) || this;
        _this.categories.push("Ratatouille");
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
var Gumbo = /** @class */ (function (_super) {
    __extends(Gumbo, _super);
    function Gumbo() {
        var _this = _super.call(this) || this;
        _this.categories.push("Gumbo");
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
var RoastedVegetables = /** @class */ (function (_super) {
    __extends(RoastedVegetables, _super);
    function RoastedVegetables() {
        var _this = _super.call(this) || this;
        _this.categories.push("Roasted Vegetables");
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
var Bruschetta = /** @class */ (function (_super) {
    __extends(Bruschetta, _super);
    function Bruschetta() {
        var _this = _super.call(this) || this;
        _this.categories.push("Bruschetta");
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
var StuffedShrooms = /** @class */ (function (_super) {
    __extends(StuffedShrooms, _super);
    function StuffedShrooms() {
        var _this = _super.call(this) || this;
        _this.categories.push("Stuffed 'Shrooms");
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
var EggRolls = /** @class */ (function (_super) {
    __extends(EggRolls, _super);
    function EggRolls() {
        var _this = _super.call(this) || this;
        _this.categories.push("Egg Rolls");
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
var EggSalad = /** @class */ (function (_super) {
    __extends(EggSalad, _super);
    function EggSalad() {
        var _this = _super.call(this) || this;
        _this.categories.push("Egg Salad");
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
var StirFry = /** @class */ (function (_super) {
    __extends(StirFry, _super);
    function StirFry() {
        var _this = _super.call(this) || this;
        _this.categories.push("Stir Fry");
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
var SteakAndEggs = /** @class */ (function (_super) {
    __extends(SteakAndEggs, _super);
    function SteakAndEggs() {
        var _this = _super.call(this) || this;
        _this.categories.push("Steak and Eggs");
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
var HamAndEggs = /** @class */ (function (_super) {
    __extends(HamAndEggs, _super);
    function HamAndEggs() {
        var _this = _super.call(this) || this;
        _this.categories.push("Ham and Eggs");
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
var ChickenAndRice = /** @class */ (function (_super) {
    __extends(ChickenAndRice, _super);
    function ChickenAndRice() {
        var _this = _super.call(this) || this;
        _this.categories.push("Chicken 'n' Rice");
        _this.singular = "chicken 'n' rice";
        _this.plural = "chicken 'n' rice";
        _this.description = "chicken 'n' rice";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return ChickenAndRice;
}(Food));
exports.ChickenAndRice = ChickenAndRice;
exports.chickenAndRice_prototype = new ChickenAndRice();
var CabbageRolls = /** @class */ (function (_super) {
    __extends(CabbageRolls, _super);
    function CabbageRolls() {
        var _this = _super.call(this) || this;
        _this.categories.push("Cabbage Rolls");
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
var Pho = /** @class */ (function (_super) {
    __extends(Pho, _super);
    function Pho() {
        var _this = _super.call(this) || this;
        _this.categories.push("Pho");
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
var RiceAndBeans = /** @class */ (function (_super) {
    __extends(RiceAndBeans, _super);
    function RiceAndBeans() {
        var _this = _super.call(this) || this;
        _this.categories.push("Rice and Beans");
        _this.singular = "rice and beans";
        _this.plural = "rice and beans";
        _this.description = "rice and beans";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return RiceAndBeans;
}(Food));
exports.RiceAndBeans = RiceAndBeans;
exports.riceAndBeans_prototype = new RiceAndBeans();
var CornBread = /** @class */ (function (_super) {
    __extends(CornBread, _super);
    function CornBread() {
        var _this = _super.call(this) || this;
        _this.categories.push("Corn Bread");
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
var Oatmeal = /** @class */ (function (_super) {
    __extends(Oatmeal, _super);
    function Oatmeal() {
        var _this = _super.call(this) || this;
        _this.categories.push("Oatmeal");
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
var FruitSnack = /** @class */ (function (_super) {
    __extends(FruitSnack, _super);
    function FruitSnack() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fruit Snack");
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
var Meatloaf = /** @class */ (function (_super) {
    __extends(Meatloaf, _super);
    function Meatloaf() {
        var _this = _super.call(this) || this;
        _this.categories.push("Meatloaf");
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
var FishAndFungi = /** @class */ (function (_super) {
    __extends(FishAndFungi, _super);
    function FishAndFungi() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fish 'n' Fungi");
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
var AvocadoToast = /** @class */ (function (_super) {
    __extends(AvocadoToast, _super);
    function AvocadoToast() {
        var _this = _super.call(this) || this;
        _this.categories.push("Avocado Toast");
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
var Waffles = /** @class */ (function (_super) {
    __extends(Waffles, _super);
    function Waffles() {
        var _this = _super.call(this) || this;
        _this.categories.push("Waffles");
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
        _this.categories.push("Pie");
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
var Quesadillas = /** @class */ (function (_super) {
    __extends(Quesadillas, _super);
    function Quesadillas() {
        var _this = _super.call(this) || this;
        _this.categories.push("Quesadillas");
        _this.singular = "quesadillas";
        _this.plural = "quesadillas";
        _this.description = "quesadillas";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return Quesadillas;
}(Food));
exports.Quesadillas = Quesadillas;
exports.quesadillas_prototype = new Quesadillas();
var RawMeat = /** @class */ (function (_super) {
    __extends(RawMeat, _super);
    function RawMeat() {
        var _this = _super.call(this) || this;
        _this.categories.push("Raw Meat");
        _this.singular = "raw meat";
        _this.plural = "raw meat";
        _this.description = "raw meat";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return RawMeat;
}(Food));
exports.RawMeat = RawMeat;
exports.rawMeat_prototype = new RawMeat();
var GrilledProtein = /** @class */ (function (_super) {
    __extends(GrilledProtein, _super);
    function GrilledProtein() {
        var _this = _super.call(this) || this;
        _this.categories.push("Grilled Protein");
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
var FriedProtein = /** @class */ (function (_super) {
    __extends(FriedProtein, _super);
    function FriedProtein() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fried Protein");
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
var ChickenPotPie = /** @class */ (function (_super) {
    __extends(ChickenPotPie, _super);
    function ChickenPotPie() {
        var _this = _super.call(this) || this;
        _this.categories.push("Chicken Pot Pie");
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
var FriedRice = /** @class */ (function (_super) {
    __extends(FriedRice, _super);
    function FriedRice() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fried Rice");
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
var Caviar = /** @class */ (function (_super) {
    __extends(Caviar, _super);
    function Caviar() {
        var _this = _super.call(this) || this;
        _this.categories.push("Caviar");
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
var SteamedDumplings = /** @class */ (function (_super) {
    __extends(SteamedDumplings, _super);
    function SteamedDumplings() {
        var _this = _super.call(this) || this;
        _this.categories.push("Steamed Dumplings");
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
var FriedDumplings = /** @class */ (function (_super) {
    __extends(FriedDumplings, _super);
    function FriedDumplings() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fried Dumplings");
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
var FunGuyFungiFeast = /** @class */ (function (_super) {
    __extends(FunGuyFungiFeast, _super);
    function FunGuyFungiFeast() {
        var _this = _super.call(this) || this;
        _this.categories.push("Fun Guy's Fantastic Fungi Feast");
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
var RawInsects = /** @class */ (function (_super) {
    __extends(RawInsects, _super);
    function RawInsects() {
        var _this = _super.call(this) || this;
        _this.categories.push("Raw Insects");
        _this.singular = "raw insects";
        _this.plural = "raw insects";
        _this.description = "raw insects";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return RawInsects;
}(Food));
exports.RawInsects = RawInsects;
exports.rawInsects_prototype = new RawInsects();
var InsectPuree = /** @class */ (function (_super) {
    __extends(InsectPuree, _super);
    function InsectPuree() {
        var _this = _super.call(this) || this;
        _this.categories.push("Insect Puree");
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
var RoastedInsects = /** @class */ (function (_super) {
    __extends(RoastedInsects, _super);
    function RoastedInsects() {
        var _this = _super.call(this) || this;
        _this.categories.push("Roasted Insects");
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
var SeasonedInsects = /** @class */ (function (_super) {
    __extends(SeasonedInsects, _super);
    function SeasonedInsects() {
        var _this = _super.call(this) || this;
        _this.categories.push("Seasoned Insects");
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
var BugsNSlime = /** @class */ (function (_super) {
    __extends(BugsNSlime, _super);
    function BugsNSlime() {
        var _this = _super.call(this) || this;
        _this.categories.push("Bugs 'n' Slime");
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
var BugsNOoze = /** @class */ (function (_super) {
    __extends(BugsNOoze, _super);
    function BugsNOoze() {
        var _this = _super.call(this) || this;
        _this.categories.push("Bugs 'n' Ooze");
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
var MossWrap = /** @class */ (function (_super) {
    __extends(MossWrap, _super);
    function MossWrap() {
        var _this = _super.call(this) || this;
        _this.categories.push("Moss Wrap");
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
var SlimeSlurpie = /** @class */ (function (_super) {
    __extends(SlimeSlurpie, _super);
    function SlimeSlurpie() {
        var _this = _super.call(this) || this;
        _this.categories.push("Slime Slurpie");
        _this.singular = "slime slurpie";
        _this.plural = "slime slurpies";
        _this.description = "slime slurpie";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return SlimeSlurpie;
}(Food));
exports.SlimeSlurpie = SlimeSlurpie;
exports.slimeSlurpie_prototype = new SlimeSlurpie();
var BugJuice = /** @class */ (function (_super) {
    __extends(BugJuice, _super);
    function BugJuice() {
        var _this = _super.call(this) || this;
        _this.categories.push("Bug Juice");
        _this.singular = "bug juice";
        _this.plural = "bug juices";
        _this.description = "bug juice";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Farming"];
        return _this;
    }
    return BugJuice;
}(Food));
exports.BugJuice = BugJuice;
exports.bugJuice_prototype = new BugJuice();
var AlgaePaste = /** @class */ (function (_super) {
    __extends(AlgaePaste, _super);
    function AlgaePaste() {
        var _this = _super.call(this) || this;
        _this.categories.push("Algae Paste");
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
var CaveCritterFritters = /** @class */ (function (_super) {
    __extends(CaveCritterFritters, _super);
    function CaveCritterFritters() {
        var _this = _super.call(this) || this;
        _this.categories.push("Cave Critter Fritters");
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
var MuddyMossyMoldyMess = /** @class */ (function (_super) {
    __extends(MuddyMossyMoldyMess, _super);
    function MuddyMossyMoldyMess() {
        var _this = _super.call(this) || this;
        _this.categories.push("Muddy, Mossy, Moldy Mess");
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
var OoeyGooeyFreshNFruity = /** @class */ (function (_super) {
    __extends(OoeyGooeyFreshNFruity, _super);
    function OoeyGooeyFreshNFruity() {
        var _this = _super.call(this) || this;
        _this.categories.push("Ooey Gooey Fresh 'n' Fruity");
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
var ScoopOGloop = /** @class */ (function (_super) {
    __extends(ScoopOGloop, _super);
    function ScoopOGloop() {
        var _this = _super.call(this) || this;
        _this.categories.push("Scoop O' Gloop");
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
exports.foods.push(exports.scoopOGloop_prototype);
