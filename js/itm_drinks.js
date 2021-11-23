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
exports.Alcohol = exports.Drink = void 0;
// ============================================================================
// Language: TypeScript
// Path: ts\itm_consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var itm_consumables_1 = require("./itm_consumables");
var Drink = /** @class */ (function (_super) {
    __extends(Drink, _super);
    function Drink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Drink;
}(itm_consumables_1.Consumable));
exports.Drink = Drink;
var Alcohol = /** @class */ (function (_super) {
    __extends(Alcohol, _super);
    function Alcohol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Alcohol;
}(Drink));
exports.Alcohol = Alcohol;
