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
exports.sapientPear_prototype = exports.SapientPear = exports.magic_prototype = exports.Magic = exports.pear_prototype = exports.Pear = exports.mapleTree_prototype = exports.MapleTree = exports.willow_prototype = exports.Willow = exports.eldertree_prototype = exports.Eldertree = exports.cherry_prototype = exports.Cherry = exports.apple_prototype = exports.Apple = exports.oak_prototype = exports.Oak = exports.citrus_prototype = exports.Citrus = exports.maple_prototype = exports.Maple = exports.palm_prototype = exports.Palm = exports.banana_prototype = exports.Banana = exports.cinnamon_prototype = exports.Cinnamon = exports.birch_prototype = exports.Birch = exports.deadwood_prototype = exports.Deadwood = exports.pine_prototype = exports.Pine = exports.trees = exports.Tree = void 0;
// ============================================================================
// Language: TypeScript
// Path: ts\trees.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var interactables_1 = require("./interactables");
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree(name, description, levelRequired, axeRequired) {
        var _this = _super.call(this, name, description) || this;
        _this.levelRequired = levelRequired;
        _this.axeRequired = axeRequired;
        return _this;
    }
    return Tree;
}(interactables_1.Interactable));
exports.Tree = Tree;
exports.trees = [];
var Pine = /** @class */ (function (_super) {
    __extends(Pine, _super);
    function Pine() {
        return _super.call(this, "Pine", "A pine tree.", 0, "Bronze") || this;
    }
    return Pine;
}(Tree));
exports.Pine = Pine;
exports.pine_prototype = new Pine();
exports.trees.push(exports.pine_prototype);
var Deadwood = /** @class */ (function (_super) {
    __extends(Deadwood, _super);
    function Deadwood() {
        return _super.call(this, "Deadwood", "A deadwood tree.", 5, "Bronze") || this;
    }
    return Deadwood;
}(Tree));
exports.Deadwood = Deadwood;
exports.deadwood_prototype = new Deadwood();
exports.trees.push(exports.deadwood_prototype);
var Birch = /** @class */ (function (_super) {
    __extends(Birch, _super);
    function Birch() {
        return _super.call(this, "Birch", "A birch tree.", 10, "Bronze") || this;
    }
    return Birch;
}(Tree));
exports.Birch = Birch;
exports.birch_prototype = new Birch();
exports.trees.push(exports.birch_prototype);
var Cinnamon = /** @class */ (function (_super) {
    __extends(Cinnamon, _super);
    function Cinnamon() {
        return _super.call(this, "Cinnamon", "A cinnamon tree.", 15, "Iron") || this;
    }
    return Cinnamon;
}(Tree));
exports.Cinnamon = Cinnamon;
exports.cinnamon_prototype = new Cinnamon();
exports.trees.push(exports.cinnamon_prototype);
var Banana = /** @class */ (function (_super) {
    __extends(Banana, _super);
    function Banana() {
        return _super.call(this, "Banana", "A banana tree.", 20, "Iron") || this;
    }
    return Banana;
}(Tree));
exports.Banana = Banana;
exports.banana_prototype = new Banana();
exports.trees.push(exports.banana_prototype);
var Palm = /** @class */ (function (_super) {
    __extends(Palm, _super);
    function Palm() {
        return _super.call(this, "Palm", "A palm tree.", 25, "Iron") || this;
    }
    return Palm;
}(Tree));
exports.Palm = Palm;
exports.palm_prototype = new Palm();
exports.trees.push(exports.palm_prototype);
var Maple = /** @class */ (function (_super) {
    __extends(Maple, _super);
    function Maple() {
        return _super.call(this, "Maple", "A maple tree.", 30, "Iron") || this;
    }
    return Maple;
}(Tree));
exports.Maple = Maple;
exports.maple_prototype = new Maple();
exports.trees.push(exports.maple_prototype);
var Citrus = /** @class */ (function (_super) {
    __extends(Citrus, _super);
    function Citrus() {
        return _super.call(this, "Citrus", "A citrus tree.", 35, "Steel") || this;
    }
    return Citrus;
}(Tree));
exports.Citrus = Citrus;
exports.citrus_prototype = new Citrus();
exports.trees.push(exports.citrus_prototype);
var Oak = /** @class */ (function (_super) {
    __extends(Oak, _super);
    function Oak() {
        return _super.call(this, "Oak", "An oak tree.", 40, "Steel") || this;
    }
    return Oak;
}(Tree));
exports.Oak = Oak;
exports.oak_prototype = new Oak();
exports.trees.push(exports.oak_prototype);
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super.call(this, "Apple", "An apple tree.", 45, "Steel") || this;
    }
    return Apple;
}(Tree));
exports.Apple = Apple;
exports.apple_prototype = new Apple();
exports.trees.push(exports.apple_prototype);
var Cherry = /** @class */ (function (_super) {
    __extends(Cherry, _super);
    function Cherry() {
        return _super.call(this, "Cherry", "A cherry tree.", 50, "Mithril") || this;
    }
    return Cherry;
}(Tree));
exports.Cherry = Cherry;
exports.cherry_prototype = new Cherry();
exports.trees.push(exports.cherry_prototype);
var Eldertree = /** @class */ (function (_super) {
    __extends(Eldertree, _super);
    function Eldertree() {
        return _super.call(this, "Eldertree", "An eldertree tree.", 55, "Mithril") || this;
    }
    return Eldertree;
}(Tree));
exports.Eldertree = Eldertree;
exports.eldertree_prototype = new Eldertree();
exports.trees.push(exports.eldertree_prototype);
var Willow = /** @class */ (function (_super) {
    __extends(Willow, _super);
    function Willow() {
        return _super.call(this, "Willow", "A willow tree.", 60, "Mithril") || this;
    }
    return Willow;
}(Tree));
exports.Willow = Willow;
exports.willow_prototype = new Willow();
exports.trees.push(exports.willow_prototype);
var MapleTree = /** @class */ (function (_super) {
    __extends(MapleTree, _super);
    function MapleTree() {
        return _super.call(this, "MapleTree", "A maple tree.", 65, "Mithril") || this;
    }
    return MapleTree;
}(Tree));
exports.MapleTree = MapleTree;
exports.mapleTree_prototype = new MapleTree();
exports.trees.push(exports.mapleTree_prototype);
var Pear = /** @class */ (function (_super) {
    __extends(Pear, _super);
    function Pear() {
        return _super.call(this, "Pear", "A pear tree.", 70, "Adamantite") || this;
    }
    return Pear;
}(Tree));
exports.Pear = Pear;
exports.pear_prototype = new Pear();
exports.trees.push(exports.pear_prototype);
var Magic = /** @class */ (function (_super) {
    __extends(Magic, _super);
    function Magic() {
        return _super.call(this, "Magic", "A magic tree.", 75, "Adamantite") || this;
    }
    return Magic;
}(Tree));
exports.Magic = Magic;
exports.magic_prototype = new Magic();
exports.trees.push(exports.magic_prototype);
var SapientPear = /** @class */ (function (_super) {
    __extends(SapientPear, _super);
    function SapientPear() {
        return _super.call(this, "Sapient Pear", "A sapient pear tree.", 90, "Mystic") || this;
    }
    return SapientPear;
}(Tree));
exports.SapientPear = SapientPear;
exports.sapientPear_prototype = new SapientPear();
exports.trees.push(exports.sapientPear_prototype);
