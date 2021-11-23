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
exports.rumCocktail_prototype = exports.Cocktail = exports.brandy_prototype = exports.Brandy = exports.gin_prototype = exports.Gin = exports.tequila_prototype = exports.Tequila = exports.rum_prototype = exports.Rum = exports.vodka_prototype = exports.Vodka = exports.whiskey_prototype = exports.Whiskey = exports.beer_prototype = exports.Beer = exports.roseWine_prototype = exports.muscadineWine_prototype = exports.redWine_prototype = exports.whiteWine_prototype = exports.Wine = exports.alcohols = exports.Alcohol = void 0;
// ============================================================================
// Language: TypeScript
// Path: ts\alcohols.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var drinks_1 = require("./drinks");
var Alcohol = /** @class */ (function (_super) {
    __extends(Alcohol, _super);
    function Alcohol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drunkness = 0; // positive makes more intoxicated
        return _this;
    }
    return Alcohol;
}(drinks_1.Drink));
exports.Alcohol = Alcohol;
exports.alcohols = [];
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
        _this.thirst = 0;
        _this.drunkness = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Wine;
}(Alcohol));
exports.Wine = Wine;
exports.whiteWine_prototype = new Wine("white");
exports.redWine_prototype = new Wine("red");
exports.muscadineWine_prototype = new Wine("muscadine");
exports.roseWine_prototype = new Wine("rosé");
exports.alcohols.push(exports.whiteWine_prototype, exports.redWine_prototype, exports.muscadineWine_prototype, exports.roseWine_prototype);
var Beer = /** @class */ (function (_super) {
    __extends(Beer, _super);
    function Beer() {
        var _this = _super.call(this) || this;
        _this.categories.push("Beer");
        _this.singular = "beer";
        _this.plural = "beers";
        _this.description = "beer";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.drunkness = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Brewing"];
        return _this;
    }
    return Beer;
}(Alcohol));
exports.Beer = Beer;
exports.beer_prototype = new Beer();
exports.alcohols.push(exports.beer_prototype);
var Whiskey = /** @class */ (function (_super) {
    __extends(Whiskey, _super);
    function Whiskey() {
        var _this = _super.call(this) || this;
        _this.categories.push("Whiskey");
        _this.singular = "whiskey";
        _this.plural = "whiskeys";
        _this.description = "whiskey";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.drunkness = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Whiskey;
}(Alcohol));
exports.Whiskey = Whiskey;
exports.whiskey_prototype = new Whiskey();
exports.alcohols.push(exports.whiskey_prototype);
var Vodka = /** @class */ (function (_super) {
    __extends(Vodka, _super);
    function Vodka() {
        var _this = _super.call(this) || this;
        _this.categories.push("Vodka");
        _this.singular = "vodka";
        _this.plural = "vodkas";
        _this.description = "vodka";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.drunkness = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Vodka;
}(Alcohol));
exports.Vodka = Vodka;
exports.vodka_prototype = new Vodka();
exports.alcohols.push(exports.vodka_prototype);
var Rum = /** @class */ (function (_super) {
    __extends(Rum, _super);
    function Rum() {
        var _this = _super.call(this) || this;
        _this.categories.push("Rum");
        _this.singular = "rum";
        _this.plural = "rums";
        _this.description = "rum";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.drunkness = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Rum;
}(Alcohol));
exports.Rum = Rum;
exports.rum_prototype = new Rum();
exports.alcohols.push(exports.rum_prototype);
var Tequila = /** @class */ (function (_super) {
    __extends(Tequila, _super);
    function Tequila() {
        var _this = _super.call(this) || this;
        _this.categories.push("Tequila");
        _this.singular = "tequila";
        _this.plural = "tequilas";
        _this.description = "tequila";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.drunkness = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Tequila;
}(Alcohol));
exports.Tequila = Tequila;
exports.tequila_prototype = new Tequila();
exports.alcohols.push(exports.tequila_prototype);
var Gin = /** @class */ (function (_super) {
    __extends(Gin, _super);
    function Gin() {
        var _this = _super.call(this) || this;
        _this.categories.push("Gin");
        _this.singular = "gin";
        _this.plural = "gins";
        _this.description = "gin";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.drunkness = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Gin;
}(Alcohol));
exports.Gin = Gin;
exports.gin_prototype = new Gin();
exports.alcohols.push(exports.gin_prototype);
var Brandy = /** @class */ (function (_super) {
    __extends(Brandy, _super);
    function Brandy() {
        var _this = _super.call(this) || this;
        _this.categories.push("Brandy");
        _this.singular = "brandy";
        _this.plural = "brandy";
        _this.description = "brandy";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.drunkness = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Brandy;
}(Alcohol));
exports.Brandy = Brandy;
exports.brandy_prototype = new Brandy();
exports.alcohols.push(exports.brandy_prototype);
var Cocktail = /** @class */ (function (_super) {
    __extends(Cocktail, _super);
    function Cocktail() {
        var _this = _super.call(this) || this;
        _this.categories.push("Cocktail");
        _this.singular = "cocktail";
        _this.plural = "cocktails";
        _this.description = "rum cocktail";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.drunkness = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Cocktail;
}(Alcohol));
exports.Cocktail = Cocktail;
exports.rumCocktail_prototype = new Cocktail();
exports.alcohols.push(exports.rumCocktail_prototype);
// *****************************
// Must come at end of file
// Combine alchols into drinks array
// *****************************
drinks_1.drinks.push.apply(drinks_1.drinks, exports.alcohols);
