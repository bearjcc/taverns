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
exports.crushedIce_prototype = exports.CrushedIce = exports.dairies = exports.Consumable = void 0;
// ============================================================================
// Language: TypeScript
// Path: ts\consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var items_1 = require("./items");
var Consumable = /** @class */ (function (_super) {
    __extends(Consumable, _super);
    function Consumable() {
        var _this = _super.call(this) || this;
        _this.singular = "Consumable";
        _this.plural = "Consumables";
        _this.description = "A consumable is something that a player can use up";
        _this.categories.push("Consumable");
        return _this;
    }
    Consumable.prototype.consume = function () {
        console.log("You consumed the " + this.singular);
    };
    return Consumable;
}(items_1.Item));
exports.Consumable = Consumable;
exports.dairies = [];
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
