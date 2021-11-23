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
exports.bugJuice_prototype = exports.BugJuice = exports.slimeSlurpie_prototype = exports.SlimeSlurpie = exports.tea_prototype = exports.Tea = exports.chocolateMilk_prototype = exports.ChocolateMilk = exports.milkshake_prototype = exports.Milkshake = exports.coffee_prototype = exports.Coffee = exports.roseWine_prototype = exports.muscadineWine_prototype = exports.redWine_prototype = exports.whiteWine_prototype = exports.Wine = exports.goatMilk_prototype = exports.cowMilk_prototype = exports.Milk = exports.Alcohol = exports.Drink = void 0;
// ============================================================================
// Language: TypeScript
// Path: ts\itm_consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var consumables_1 = require("./consumables");
var Drink = /** @class */ (function (_super) {
    __extends(Drink, _super);
    function Drink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Drink;
}(consumables_1.Consumable));
exports.Drink = Drink;
var Alcohol = /** @class */ (function (_super) {
    __extends(Alcohol, _super);
    function Alcohol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Alcohol;
}(Drink));
exports.Alcohol = Alcohol;
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
