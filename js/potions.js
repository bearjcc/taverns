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
exports.milkOfThePoppy_prototype = exports.MilkOfThePoppy = exports.Potion = void 0;
// ============================================================================
// Language: TypeScript
// Path: ts\itm_consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var consumables_1 = require("./consumables");
var Potion = /** @class */ (function (_super) {
    __extends(Potion, _super);
    function Potion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Potion;
}(consumables_1.Consumable));
exports.Potion = Potion;
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
