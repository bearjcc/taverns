"use strict";
// ============================================================================
// Language: TypeScript Extension
// Path: ts\items\consumable.tsx
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
exports.consumable_prototype = exports.Consumable = void 0;
var items_1 = require("./items");
var Consumable = /** @class */ (function (_super) {
    __extends(Consumable, _super);
    function Consumable(name, description) {
        return _super.call(this, name, description) || this;
    }
    Consumable.prototype.consume = function () {
        console.log(this.name + " was consumed.");
    };
    return Consumable;
}(items_1.Item));
exports.Consumable = Consumable;
exports.consumable_prototype = new Consumable("Consumable", "A consumable item.");
