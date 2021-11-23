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
exports.buckwheatFlour_prototype = exports.ryeFlour_prototype = exports.oatFlour_prototype = exports.barleyFlour_prototype = exports.wheatFlour_prototype = exports.riceFlour_prototype = exports.Flour = exports.beets_prototype = exports.Beets = exports.goldenCurry_prototype = exports.yellowCurry_prototype = exports.greenCurry_prototype = exports.redCurry_prototype = exports.Curry = exports.roseWine_prototype = exports.muscadineWine_prototype = exports.redWine_prototype = exports.whiteWine_prototype = exports.Wine = exports.dragonessence_prototype = exports.stickyOil_prototype = exports.peanutOil_prototype = exports.avocadoOil_prototype = exports.oliveOil_prototype = exports.grapeseedOil_prototype = exports.vegetableOil_prototype = exports.Oil = exports.barley_prototype = exports.Barley = exports.oats_prototype = exports.Oats = exports.wheat_prototype = exports.Wheat = exports.teaLeaves_prototype = exports.TeaLeaves = exports.coffeeBeans_prototype = exports.CoffeeBeans = exports.cocoaBeans_prototype = exports.CocoaBeans = exports.milkOfThePoppy_prototype = exports.MilkOfThePoppy = exports.goatMilk_prototype = exports.cowMilk_prototype = exports.Milk = exports.soySauce_prototype = exports.SoySauce = exports.dragonEgg_prototype = exports.lizardEgg_prototype = exports.snakeEgg_prototype = exports.fishEgg_prototype = exports.chickenEgg_prototype = exports.Egg = exports.redOnion_prototype = exports.greenOnion_prototype = exports.whiteOnion_prototype = exports.purpleOnion_prototype = exports.Onion = exports.cucumbers_prototype = exports.Cucumbers = exports.vanillaBean_prototype = exports.VanillaBean = exports.acorns_prototype = exports.Acorns = exports.mapleSap_prototype = exports.MapleSap = exports.wasabi_prototype = exports.Wasabi = exports.sprouts_prototype = exports.Sprouts = exports.venison_prototype = exports.Venison = exports.humanoidFlesh_prototype = exports.HumanoidFlesh = exports.glowworm_prototype = exports.Glowworm = exports.oozePurple_prototype = exports.oozeSuperior_prototype = exports.oozeGreen_prototype = exports.oozeGray_prototype = exports.Ooze = exports.antsFire_prototype = exports.antsBlack_prototype = exports.antsRed_prototype = exports.Ants = exports.beetles_prototype = exports.Beetles = exports.mealworms_prototype = exports.Mealworms = exports.brains_prototype = exports.Brains = exports.grubs_prototype = exports.Grubs = exports.dragonmeat_prototype = exports.Dragonmeat = exports.questionableMeat_prototype = exports.QuestionableMeat = exports.rancidMeat_prototype = exports.RancidMeat = exports.broccoli_prototype = exports.Broccoli = exports.cauliflower_prototype = exports.Cauliflower = exports.cabbage_prototype = exports.Cabbage = exports.lettuce_prototype = exports.Lettuce = exports.tomatoes_prototype = exports.Tomatoes = exports.basil_prototype = exports.Basil = exports.sage_prototype = exports.Sage = exports.chives_prototype = exports.Chives = exports.turmeric_prototype = exports.Turmeric = exports.thyme_prototype = exports.Thyme = exports.rosemary_prototype = exports.Rosemary = exports.parsley_prototype = exports.Parsley = exports.oregano_prototype = exports.Oregano = exports.ginger_prototype = exports.Ginger = exports.garlic_prototype = exports.Garlic = exports.fennel_prototype = exports.Fennel = exports.dill_prototype = exports.Dill = exports.cumin_prototype = exports.Cumin = exports.cilantro_prototype = exports.Cilantro = exports.coriander_prototype = exports.Coriander = exports.pepperChili_prototype = exports.pepperCayenne_prototype = exports.pepperJalapeno_prototype = exports.pepperBell_prototype = exports.pepperWhite_prototype = exports.pepperBlack_prototype = exports.Pepper = exports.pineapple_prototype = exports.Pineapple = exports.banana_prototype = exports.Banana = exports.berryBlackCurrant_prototype = exports.berryBlueCurrant_prototype = exports.berryRasp_prototype = exports.berryStraw_prototype = exports.berryCherry_prototype = exports.berrySnozz_prototype = exports.berryBlack_prototype = exports.berryBlue_prototype = exports.berryRed_prototype = exports.Berry = exports.eggplant_prototype = exports.Eggplant = exports.beet_prototype = exports.Beet = exports.potato_prototype = exports.Potato = exports.carrot_prototype = exports.Carrot = exports.coconut_prototype = exports.Coconut = exports.chestnut_prototype = exports.Chestnut = exports.brazilNut_prototype = exports.BrazilNut = exports.almond_prototype = exports.Almond = exports.walnut_prototype = exports.Walnut = exports.peanut_prototype = exports.Peanut = exports.citrusTangerine_prototype = exports.citrusGrapefruit_prototype = exports.citrusLime_prototype = exports.citrusLemon_prototype = exports.citrusOrange_prototype = exports.Citrus = exports.avocado_prototype = exports.Avocado = exports.grapeMuscadine_prototype = exports.grapePurple_prototype = exports.grapeWhite_prototype = exports.grapeRed_prototype = exports.Grape = exports.pear_prototype = exports.Pear = exports.appleGolden_prototype = exports.appleGreen_prototype = exports.appleRed_prototype = exports.Apple = exports.mushroomRed_prototype = exports.mushroomMorel_prototype = exports.mushroomGlowing_prototype = exports.mushroomPurple_prototype = exports.mushroomBrown_prototype = exports.mushroomWhite_prototype = exports.Mushroom = exports.beansSoy_prototype = exports.beansJack_prototype = exports.beansGarbanzo_prototype = exports.beansMung_prototype = exports.beansLima_prototype = exports.beansGreen_prototype = exports.beansBlack_prototype = exports.beansPinto_prototype = exports.beansKidney_prototype = exports.Beans = exports.asparagus_prototype = exports.Asparagus = exports.cornOnOheCob_prototype = exports.CornOnTheCob = exports.corn_prototype = exports.Corn = exports.rice_prototype = exports.Rice = exports.seaweedBrown_prototype = exports.seaweedGreen_prototype = exports.seaweedRed_prototype = exports.Seaweed = exports.sugar_prototype = exports.Sugar = exports.pig_feet_prototype = exports.PigFeet = exports.pig_skin_prototype = exports.PigSkin = exports.pork_prototype = exports.Pork = exports.beef_prototype = exports.Beef = exports.shark_meat_prototype = exports.SharkMeat = exports.shrimp_prototype = exports.Shrimp = exports.clam_meat_prototype = exports.ClamMeat = exports.lobster_prototype = exports.Lobster = exports.catfish_prototype = exports.Catfish = exports.crayfish_prototype = exports.Crayfish = exports.carp_prototype = exports.Carp = exports.pike_prototype = exports.Pike = exports.rainbowTrout_prototype = exports.RainbowTrout = exports.trout_prototype = exports.Trout = exports.salmon_prototype = exports.Salmon = exports.foods = exports.Food = void 0;
var itm_consumables_1 = require("./itm_consumables");
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
// var salmon = new CookingIngredient("Salmon", fish, [Source.Fishing], false);
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
exports.foods.push(exports.salmon_prototype);
// var trout = new CookingIngredient("Trout", fish, [Source.Fishing], false);
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
exports.foods.push(exports.trout_prototype);
var RainbowTrout = /** @class */ (function (_super) {
    __extends(RainbowTrout, _super);
    function RainbowTrout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RainbowTrout;
}(Trout));
exports.RainbowTrout = RainbowTrout;
exports.rainbowTrout_prototype = new RainbowTrout();
exports.foods.push(exports.rainbowTrout_prototype);
// var pike = new CookingIngredient("Pike", fish, [Source.Fishing], true);
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
exports.foods.push(exports.pike_prototype);
// var carp = new CookingIngredient("Carp", fish, [Source.Fishing], false);
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
exports.foods.push(exports.carp_prototype);
// var crayfish = new CookingIngredient("Crayfish", fish, [Source.Fishing], false);
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
exports.foods.push(exports.crayfish_prototype);
// var catfish = new CookingIngredient("Catfish", fish, [Source.Fishing], false);
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
exports.foods.push(exports.catfish_prototype);
// var lobster = new CookingIngredient("Lobster", fish, [Source.Fishing], false);
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
exports.foods.push(exports.lobster_prototype);
// var clamMeat = new CookingIngredient("Clam Meat", fish, [Source.Fishing], false);
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
exports.foods.push(exports.clam_meat_prototype);
// var shrimp = new CookingIngredient("Shrimp", fish, [Source.Fishing], false);
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
exports.foods.push(exports.shrimp_prototype);
// var sharkMeat = new CookingIngredient("Shark Meat", fish, [Source.Fishing], true);
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
exports.foods.push(exports.shark_meat_prototype);
// var beef = new CookingIngredient("Beef", meat, [Source.Farming], false);
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
exports.foods.push(exports.beef_prototype);
// var pork = new CookingIngredient("Pork", meat, [Source.Farming], false);
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
exports.foods.push(exports.pork_prototype);
// var pigSkin = new CookingIngredient("Pig Skin", other, [Source.Farming], true);
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
exports.foods.push(exports.pig_skin_prototype);
// var pigFeet = new CookingIngredient("Pig's Feet", other, [Source.Farming], true);
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
exports.foods.push(exports.pig_feet_prototype);
// var sugar = new CookingIngredient("Sugar", baking, [Source.Milling], false);
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
exports.foods.push(exports.sugar_prototype);
// var seaweed = new CookingIngredient("Seaweed", sushi, [Source.Foraging], true);
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
exports.foods.push(exports.seaweedRed_prototype, exports.seaweedGreen_prototype, exports.seaweedBrown_prototype);
// var rice = new CookingIngredient("Rice", grain, [Source.Farming], false);
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
exports.foods.push(exports.rice_prototype);
// var corn = new CookingIngredient("Corn", grain, [Source.Farming], false);
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
exports.foods.push(exports.corn_prototype);
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
exports.foods.push(exports.cornOnOheCob_prototype);
// var asparagus = new CookingIngredient("Asparagus", vegetable, [Source.Farming], false);
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
exports.foods.push(exports.asparagus_prototype);
// var redBeans = new CookingIngredient("Red Beans", protein, [Source.Foraging], false);
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
exports.foods.push(exports.beansKidney_prototype, exports.beansPinto_prototype, exports.beansBlack_prototype, exports.beansGreen_prototype, exports.beansLima_prototype, exports.beansMung_prototype, exports.beansGarbanzo_prototype, exports.beansJack_prototype, exports.beansSoy_prototype);
// var whiteMushroom = new CookingIngredient("White Mushroom", protein, [Source.Foraging, Source.Farming], false);
// var brownMushroom = new CookingIngredient("Brown Mushroom", fungi, [Source.Foraging, Source.Farming], false);
// var purpleMushroom = new CookingIngredient("Purple Mushroom", fungi, [Source.Foraging, Source.Farming], true);
// var glowingMushrooms = new CookingIngredient("Glowing Mushrooms", fungi, [Source.Foraging, Source.Farming], true);
// var morels = new CookingIngredient("Morels", protein, [Source.Foraging, Source.Farming], false);
// var redMushrooms = new CookingIngredient("Red Mushrooms", poison, [Source.Foraging], false);
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
exports.foods.push(exports.mushroomWhite_prototype, exports.mushroomBrown_prototype, exports.mushroomPurple_prototype, exports.mushroomGlowing_prototype, exports.mushroomMorel_prototype, exports.mushroomRed_prototype);
// var apples = new CookingIngredient("Apples", fruit, [Source.Farming, Source.Foraging], false);
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
exports.foods.push(exports.appleRed_prototype, exports.appleGreen_prototype, exports.appleGolden_prototype);
// var pears = new CookingIngredient("Pears", fruit, [Source.Farming], true);
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
exports.foods.push(exports.pear_prototype);
// var grapes = new CookingIngredient("Grapes", fruit, [Source.Farming], false);
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
exports.foods.push(exports.grapeRed_prototype, exports.grapeWhite_prototype, exports.grapePurple_prototype, exports.grapeMuscadine_prototype);
// var avocados = new CookingIngredient("Avocados", fruit, [Source.Farming], true);
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
exports.foods.push(exports.avocado_prototype);
// var citrus = new CookingIngredient("Citrus", fruit, [Source.Farming], true);
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
exports.foods.push(exports.citrusOrange_prototype, exports.citrusLemon_prototype, exports.citrusLime_prototype, exports.citrusGrapefruit_prototype, exports.citrusTangerine_prototype);
// var peanuts = new CookingIngredient("Peanuts", nut, [Source.Farming], false);
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
exports.foods.push(exports.peanut_prototype);
// var walnuts = new CookingIngredient("Walnuts", nut, [Source.Foraging], false);
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
exports.foods.push(exports.walnut_prototype);
// var almonds = new CookingIngredient("Almonds", nut, [Source.Farming], true);
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
exports.foods.push(exports.almond_prototype);
// var brazilNuts = new CookingIngredient("Brazil Nuts", nut, [Source.Foraging], true);
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
exports.foods.push(exports.brazilNut_prototype);
// var chestnuts = new CookingIngredient("Chestnuts", nut, [Source.Questing], false);
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
exports.foods.push(exports.chestnut_prototype);
// var coconut = new CookingIngredient("Coconut", fruit, [Source.Foraging], false);
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
exports.foods.push(exports.coconut_prototype);
// var carrots = new CookingIngredient("Carrots", vegetable, [Source.Farming], false);
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
exports.foods.push(exports.carrot_prototype);
// var potatoes = new CookingIngredient("Potatoes", starch, [Source.Farming, Source.Foraging], false);
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
exports.foods.push(exports.potato_prototype);
// var beets = new CookingIngredient("Beets", vegetable, [Source.Farming], true);
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
exports.foods.push(exports.beet_prototype);
// var eggplant = new CookingIngredient("Eggplant", vegetable, [Source.Farming], true);
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
exports.foods.push(exports.eggplant_prototype);
// var redBerries = new CookingIngredient("Red Berries", berry, [Source.Foraging], false);
// var blueberries = new CookingIngredient("Blueberries", berry, [Source.Foraging], false);
// var boysenberries = new CookingIngredient("Boysenberries", berry, [Source.Foraging], true);
// var snozzberries = new CookingIngredient("Snozzberries", berry, [Source.Foraging], false);
// var cherries = new CookingIngredient("Cherries", fruit, [Source.Questing], false);
// var strawberries = new CookingIngredient("Strawberries", fruit, [Source.Foraging], false);
// var blackberries = new CookingIngredient("Blackberries", berry, [Source.Foraging], false);
// var raspberries = new CookingIngredient("Raspberries", berry, [Source.Foraging], false);
// var blueCurrants = new CookingIngredient("Blue Currants", berry, [Source.Foraging], false);
// var blackCurrants = new CookingIngredient("Black Currants", berry, [Source.Foraging], false);
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
exports.foods.push(exports.berryRed_prototype, exports.berryBlue_prototype, exports.berryBlack_prototype, exports.berrySnozz_prototype, exports.berryCherry_prototype, exports.berryStraw_prototype, exports.berryRasp_prototype, exports.berryBlueCurrant_prototype, exports.berryBlackCurrant_prototype);
// var bananas = new CookingIngredient("Bananas", fruit, [Source.Farming], false);
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
exports.foods.push(exports.banana_prototype);
// var pineapples = new CookingIngredient("Pineapples", fruit, [Source.Foraging], false);
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
exports.foods.push(exports.pineapple_prototype);
// var blackPepper = new CookingIngredient("Black Pepper", spice, [Source.Trading], false);
// var whitePepper = new CookingIngredient("White Pepper", spice, [Source.Trading], false);
// var bellPepper = new CookingIngredient("Bell Pepper", vegetable, [Source.Farming], false);
// var jalapenos = new CookingIngredient("Jalapenos", vegetable, [Source.Farming], false);
// var cayennePepper = new CookingIngredient("Cayenne Pepper", spice, [Source.Trading], false);
// var chiliPepper = new CookingIngredient("Chili Pepper", spice, [Source.Trading], false);
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
exports.foods.push(exports.pepperBlack_prototype, exports.pepperWhite_prototype, exports.pepperBell_prototype, exports.pepperJalapeno_prototype, exports.pepperCayenne_prototype, exports.pepperChili_prototype);
// var coriander = new CookingIngredient("Coriander", herb, [Source.Trading], false);
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
exports.foods.push(exports.coriander_prototype);
// var cilantro = new CookingIngredient("Cilantro", herb, [Source.Trading], false);
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
exports.foods.push(exports.cilantro_prototype);
// var cumin = new CookingIngredient("Cumin", spice, [Source.Trading], false);
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
exports.foods.push(exports.cumin_prototype);
// var dill = new CookingIngredient("Dill", herb, [Source.Trading], false);
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
exports.foods.push(exports.dill_prototype);
// var fennel = new CookingIngredient("Fennel", herb, [Source.Trading], false);
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
exports.foods.push(exports.fennel_prototype);
// var garlic = new CookingIngredient("Garlic", herb, [Source.Trading], false);
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
exports.foods.push(exports.garlic_prototype);
// var ginger = new CookingIngredient("Ginger", herb, [Source.Trading], false);
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
exports.foods.push(exports.ginger_prototype);
// var oregano = new CookingIngredient("Oregano", herb, [Source.Trading], false);
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
exports.foods.push(exports.oregano_prototype);
// var parsley = new CookingIngredient("Parsley", herb, [Source.Trading], false);
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
exports.foods.push(exports.parsley_prototype);
// var rosemary = new CookingIngredient("Rosemary", herb, [Source.Trading], false);
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
exports.foods.push(exports.rosemary_prototype);
// var thyme = new CookingIngredient("Thyme", herb, [Source.Trading], false);
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
exports.foods.push(exports.thyme_prototype);
// var turmeric = new CookingIngredient("Turmeric", spice, [Source.Trading], false);
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
exports.foods.push(exports.turmeric_prototype);
// var chives = new CookingIngredient("Chives", herb, [Source.Trading], false);
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
exports.foods.push(exports.chives_prototype);
// var sage = new CookingIngredient("Sage", herb, [Source.Trading], false);
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
exports.foods.push(exports.sage_prototype);
// var basil = new CookingIngredient("Basil", herb, [Source.Trading], false);
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
exports.foods.push(exports.basil_prototype);
// var tomatoes = new CookingIngredient("Tomatoes", fruit, [Source.Farming], false);
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
exports.foods.push(exports.tomatoes_prototype);
// var lettuce = new CookingIngredient("Lettuce", vegetable, [Source.Farming], false);
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
exports.foods.push(exports.lettuce_prototype);
// var cabbage = new CookingIngredient("Cabbage", vegetable, [Source.Farming], true);
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
exports.foods.push(exports.cabbage_prototype);
// var cauliflower = new CookingIngredient("Cauliflower", vegetable, [Source.Farming], true);
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
exports.foods.push(exports.cauliflower_prototype);
// var broccoli = new CookingIngredient("Broccoli", vegetable, [Source.Farming], false);
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
exports.foods.push(exports.broccoli_prototype);
// var rancidMeat = new CookingIngredient("Rancid Meat", protein, [Source.Questing], false);
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
exports.foods.push(exports.rancidMeat_prototype);
// var questionableMeat = new CookingIngredient("Questionable Meat", protein, [Source.Questing], false);
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
exports.foods.push(exports.questionableMeat_prototype);
// var dragonmeat = new CookingIngredient("Dragonmeat", protein, [Source.Questing], true);
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
exports.foods.push(exports.dragonmeat_prototype);
// var grubs = new CookingIngredient("Grubs", protein, [Source.Foraging], false);
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
exports.foods.push(exports.grubs_prototype);
// var brains = new CookingIngredient("Brains", other, [Source.Foraging], true);
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
exports.foods.push(exports.brains_prototype);
// var mealworms = new CookingIngredient("Mealworms", protein, [Source.Foraging], false);
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
exports.foods.push(exports.mealworms_prototype);
// var beetles = new CookingIngredient("Beetles", protein, [Source.Foraging], false);
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
exports.foods.push(exports.beetles_prototype);
// var fireAnts = new CookingIngredient("Fire Ants", protein, [Source.Foraging], true);
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
exports.foods.push(exports.antsRed_prototype, exports.antsBlack_prototype, exports.antsFire_prototype);
// var grayOoze = new CookingIngredient("Gray Ooze", other, [Source.Foraging, Source.Questing], false);
// var greenOoze = new CookingIngredient("Green Ooze", other, [Source.Questing], false);
// var superiorOoze = new CookingIngredient("Superior Ooze", other, [Source.Questing], true);
// var purpleOoze = new CookingIngredient("Purple Ooze", other, [Source.Questing], true);
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
exports.foods.push(exports.oozeGray_prototype, exports.oozeGreen_prototype, exports.oozeSuperior_prototype, exports.oozePurple_prototype);
// var glowworm = new CookingIngredient("Glowworm", protein, [Source.Foraging], false);
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
exports.foods.push(exports.glowworm_prototype);
// var humanoidFlesh = new CookingIngredient("Humanoid Flesh", protein, [Source.ReligiousCeremony], true);
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
exports.foods.push(exports.humanoidFlesh_prototype);
// var deerMeat = new CookingIngredient("Deer Meat", protein, [Source.Hunting], false);
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
exports.foods.push(exports.venison_prototype);
// var sprouts = new CookingIngredient("Sprouts", spice, [Source.Foraging], true);
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
exports.foods.push(exports.sprouts_prototype);
// var wasabi = new CookingIngredient("Wasabi", spice, [Source.Trading], true);
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
exports.foods.push(exports.wasabi_prototype);
// var mapleSap = new CookingIngredient("Maple Sap", other, [Source.Foraging], false);
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
exports.foods.push(exports.mapleSap_prototype);
// var acorns = new CookingIngredient("Acorns", other, [Source.Foraging], false);
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
exports.foods.push(exports.acorns_prototype);
// var vanillaBean = new CookingIngredient("Vanilla Bean", spice, [Source.Farming], true);
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
exports.foods.push(exports.vanillaBean_prototype);
// var cucumbers = new CookingIngredient("Cucumbers", vegetable, [Source.Farming], false);
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
exports.foods.push(exports.cucumbers_prototype);
// var purpleOnion = new CookingIngredient("Purple Onion", vegetable, [Source.Farming], true);
// var whiteOnion = new CookingIngredient("White Onion", vegetable, [Source.Farming], false);
// var greenOnion = new CookingIngredient("Green Onion", vegetable, [Source.Foraging], false);
// var redOnion = new CookingIngredient("Red Onion", vegetable, [Source.Foraging], false);
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
exports.foods.push(exports.purpleOnion_prototype, exports.whiteOnion_prototype, exports.greenOnion_prototype, exports.redOnion_prototype);
// var chickenEgg = new CookingIngredient("Chicken Egg", egg, [Source.Farming], false);
// var fishEgg = new CookingIngredient("Fish Egg", egg, [Source.Fishing], true);
// var snakeEgg = new CookingIngredient("Snake Egg", egg, [Source.Foraging], false);
// var lizardEgg = new CookingIngredient("Lizard Egg", egg, [Source.Foraging], false);
// var dragonEgg = new CookingIngredient("Dragon Egg", egg, [Source.Questing], true);
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
exports.foods.push(exports.chickenEgg_prototype, exports.fishEgg_prototype, exports.snakeEgg_prototype, exports.lizardEgg_prototype, exports.dragonEgg_prototype);
// var soySauce = new CookingIngredient("Soy Sauce", spice, [Source.Trading], false);
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
exports.foods.push(exports.soySauce_prototype);
// var cowMilk = new CookingIngredient("Cow Milk", dairy, [Source.Farming], false);
// var goatMilk = new CookingIngredient("Goat Milk", dairy, [Source.Farming], true);
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
exports.foods.push(exports.cowMilk_prototype, exports.goatMilk_prototype);
// var milkOfThePoppy = new CookingIngredient("Milk of the Poppy", spice, [Source.Foraging], true);
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
exports.foods.push(exports.milkOfThePoppy_prototype);
// var cocoaBeans = new CookingIngredient("Cocoa Beans", spice, [Source.Farming], true);
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
exports.foods.push(exports.cocoaBeans_prototype);
// var coffeeBeans = new CookingIngredient("Coffee Beans", tea, [Source.Farming], true);
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
exports.foods.push(exports.coffeeBeans_prototype);
// var teaLeaves = new CookingIngredient("Tea Leaves", tea, [Source.Farming], false);
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
exports.foods.push(exports.teaLeaves_prototype);
// var wheat = new CookingIngredient("Wheat", grain, [Source.Farming], false);
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
exports.foods.push(exports.wheat_prototype);
// var oats = new CookingIngredient("Oats", grain, [Source.Farming], false);
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
exports.foods.push(exports.oats_prototype);
// var barley = new CookingIngredient("Barley", grain, [Source.Farming], true);
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
exports.foods.push(exports.barley_prototype);
// var vegetableOil = new CookingIngredient("Vegetable Oil", oil, [Source.Distilling], false);
// var grapeseedOil = new CookingIngredient("Grapeseed Oil", oil, [Source.Distilling], true);
// var oliveOil = new CookingIngredient("Olive Oil", oil, [Source.Distilling], true);
// var avocadoOil = new CookingIngredient("Avocado Oil", oil, [Source.Distilling], true);
// var peanutOil = new CookingIngredient("Peanut Oil", oil, [Source.Distilling], true);
// var stickyOil = new CookingIngredient("Sticky Oil", oil, [Source.Questing], false);
// var dragonessence = new CookingIngredient("Dragonessence", oil, [Source.Questing], true);
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
exports.foods.push(exports.vegetableOil_prototype, exports.grapeseedOil_prototype, exports.oliveOil_prototype, exports.avocadoOil_prototype, exports.peanutOil_prototype, exports.stickyOil_prototype, exports.dragonessence_prototype);
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
exports.foods.push(exports.whiteWine_prototype, exports.redWine_prototype, exports.muscadineWine_prototype, exports.roseWine_prototype);
// var redCurry = new CookingIngredient("Red Curry", spice, [Source.Trading], false);
// var greenCurry = new CookingIngredient("Green Curry", spice, [Source.Trading], false);
// var yellowCurry = new CookingIngredient("Yellow Curry", spice, [Source.Trading], false);
// var goldenCurry = new CookingIngredient("Golden Curry", spice, [Source.Trading], true);
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
exports.foods.push(exports.redCurry_prototype, exports.greenCurry_prototype, exports.yellowCurry_prototype, exports.goldenCurry_prototype);
// var beets = new CookingIngredient("Beets", vegetable, [Source.Farming], true);
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
exports.foods.push(exports.beets_prototype);
// var water = new CookingIngredient("Water", water, [Source.Water], false);
// var cleanWater = new CookingIngredient("Clean Water", water, [Source.Potions], true);
// var purifiedWater = new CookingIngredient("Purified Water", water, [Source.Potions], false);
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
exports.foods.push(exports.riceFlour_prototype, exports.wheatFlour_prototype, exports.barleyFlour_prototype, exports.oatFlour_prototype, exports.ryeFlour_prototype, exports.buckwheatFlour_prototype);
