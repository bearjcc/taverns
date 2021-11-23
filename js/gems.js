"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\gems.ts
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
exports.jade_prototype = exports.agate_prototype = exports.quartz_prototype = exports.onyx_prototype = exports.pearl_prototype = exports.garnet_prototype = exports.opal_prototype = exports.amethyst_prototype = exports.diamond_prototype = exports.topaz_prototype = exports.emerald_prototype = exports.sapphire_prototype = exports.ruby_prototype = exports.gems = void 0;
var items_1 = require("./items");
var Gem = /** @class */ (function (_super) {
    __extends(Gem, _super);
    function Gem(weight, quality) {
        var _this = _super.call(this) || this;
        _this.categories.push("Gem");
        return _this;
    }
    return Gem;
}(items_1.Item));
exports.gems = [];
////Gems
//ruby
var Ruby = /** @class */ (function (_super) {
    __extends(Ruby, _super);
    function Ruby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ruby;
}(Gem));
exports.ruby_prototype = new Ruby(1, 100);
exports.gems.push(exports.ruby_prototype);
//sapphire
var Sapphire = /** @class */ (function (_super) {
    __extends(Sapphire, _super);
    function Sapphire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sapphire;
}(Gem));
exports.sapphire_prototype = new Sapphire(1, 100);
exports.gems.push(exports.sapphire_prototype);
//emerald
var Emerald = /** @class */ (function (_super) {
    __extends(Emerald, _super);
    function Emerald() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Emerald;
}(Gem));
exports.emerald_prototype = new Emerald(1, 100);
exports.gems.push(exports.emerald_prototype);
//topaz
var Topaz = /** @class */ (function (_super) {
    __extends(Topaz, _super);
    function Topaz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Topaz;
}(Gem));
exports.topaz_prototype = new Topaz(1, 100);
exports.gems.push(exports.topaz_prototype);
//diamond
var Diamond = /** @class */ (function (_super) {
    __extends(Diamond, _super);
    function Diamond() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Diamond;
}(Gem));
exports.diamond_prototype = new Diamond(1, 100);
exports.gems.push(exports.diamond_prototype);
//amethyst
var Amethyst = /** @class */ (function (_super) {
    __extends(Amethyst, _super);
    function Amethyst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Amethyst;
}(Gem));
exports.amethyst_prototype = new Amethyst(1, 100);
exports.gems.push(exports.amethyst_prototype);
//opal
var Opal = /** @class */ (function (_super) {
    __extends(Opal, _super);
    function Opal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Opal;
}(Gem));
exports.opal_prototype = new Opal(1, 100);
exports.gems.push(exports.opal_prototype);
//garnet
var Garnet = /** @class */ (function (_super) {
    __extends(Garnet, _super);
    function Garnet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Garnet;
}(Gem));
exports.garnet_prototype = new Garnet(1, 100);
exports.gems.push(exports.garnet_prototype);
//pearl
var Pearl = /** @class */ (function (_super) {
    __extends(Pearl, _super);
    function Pearl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Pearl;
}(Gem));
exports.pearl_prototype = new Pearl(1, 100);
exports.gems.push(exports.pearl_prototype);
//onyx
var Onyx = /** @class */ (function (_super) {
    __extends(Onyx, _super);
    function Onyx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Onyx;
}(Gem));
exports.onyx_prototype = new Onyx(1, 100);
exports.gems.push(exports.onyx_prototype);
//quartz
var Quartz = /** @class */ (function (_super) {
    __extends(Quartz, _super);
    function Quartz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Quartz;
}(Gem));
exports.quartz_prototype = new Quartz(1, 100);
exports.gems.push(exports.quartz_prototype);
//agate
var Agate = /** @class */ (function (_super) {
    __extends(Agate, _super);
    function Agate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Agate;
}(Gem));
exports.agate_prototype = new Agate(1, 100);
exports.gems.push(exports.agate_prototype);
//jade
var Jade = /** @class */ (function (_super) {
    __extends(Jade, _super);
    function Jade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Jade;
}(Gem));
exports.jade_prototype = new Jade(1, 100);
exports.gems.push(exports.jade_prototype);
