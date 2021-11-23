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
exports.dragonessence_prototype = exports.stickyOil_prototype = exports.peanutOil_prototype = exports.avocadoOil_prototype = exports.oliveOil_prototype = exports.grapeseedOil_prototype = exports.vegetableOil_prototype = exports.Oil = void 0;
// ============================================================================
// Language: TypeScript
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var consumables_1 = require("./consumables");
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
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Oil;
}(consumables_1.Consumable));
exports.Oil = Oil;
exports.vegetableOil_prototype = new Oil("vegetable");
exports.grapeseedOil_prototype = new Oil("grapeseed");
exports.oliveOil_prototype = new Oil("olive");
exports.avocadoOil_prototype = new Oil("avocado");
exports.peanutOil_prototype = new Oil("peanut");
exports.stickyOil_prototype = new Oil("sticky");
exports.dragonessence_prototype = new Oil("dragonessence");
