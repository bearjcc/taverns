"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\ore-items.ts
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
exports.runite_ore_prototype = exports.RuniteOre = exports.adamantite_ore_prototype = exports.AdamantiteOre = exports.mithril_ore_prototype = exports.MithrilOre = exports.platinum_ore_prototype = exports.PlatinumOre = exports.limestone_prototype = exports.Limestone = exports.gold_ore_prototype = exports.GoldOre = exports.silver_ore_prototype = exports.SilverOre = exports.coal_prototype = exports.Coal = exports.iron_ore_prototype = exports.IronOre = exports.tin_ore_prototype = exports.TinOre = exports.copper_ore_prototype = exports.CopperOre = exports.geode_prototype = exports.Geode = exports.clay_prototype = exports.Clay = exports.ores = exports.OreItem = void 0;
var items_1 = require("./items");
var Gems = require("./gems");
var OreItem = /** @class */ (function (_super) {
    __extends(OreItem, _super);
    function OreItem(weight, quality) {
        var _this = _super.call(this) || this;
        _this.categories.push("Ore");
        _this.weight = weight;
        _this.quality = quality; //in this case quality means how much of that element you can get from it
        return _this;
    }
    return OreItem;
}(items_1.Item));
exports.OreItem = OreItem;
exports.ores = [];
//clay
var Clay = /** @class */ (function (_super) {
    __extends(Clay, _super);
    function Clay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Clay;
}(OreItem));
exports.Clay = Clay;
exports.clay_prototype = new Clay(1, 100);
exports.ores.push(exports.clay_prototype);
//geodes
var Geode = /** @class */ (function (_super) {
    __extends(Geode, _super);
    function Geode(weight, quality) {
        var _this = _super.call(this, weight, quality) || this;
        _this.categories.push("Geode");
        return _this;
    }
    Geode.prototype["break"] = function (skillLevel) {
        console.log("You break open the geode in an attempt to find a gem inside...");
        // chance that you smash the geode
        var rdm = Math.ceil(Math.random() * 100);
        if (rdm > skillLevel) {
            console.log("You smash the geode into pieces.");
            return null;
        }
        rdm = Math.ceil(Math.random() * 100);
        // chance that there is no gem
        if (rdm > this.quality) {
            console.log("There was no gem inside.");
            return null;
        }
        //randomly generated quality
        //geometric avarage of geode quality and skill level
        var quality = Math.pow(Math.random() * skillLevel, .5);
        //chance of getting a gem of a certain type
        rdm = Math.ceil(Math.random() * 150);
        if (rdm < 10) {
            return new Gems.Ruby(this.weight * .75, quality);
        }
        else if (rdm < 20) {
            return new Gems.Sapphire(this.weight * .75, quality);
        }
        else if (rdm < 30) {
            return new Gems.Emerald(this.weight * .75, quality);
        }
        else if (rdm < 40) {
            return new Gems.Topaz(this.weight * .75, quality);
        }
        else if (rdm < 50) {
            return new Gems.Diamond(this.weight * .75, quality);
        }
        else if (rdm < 60) {
            return new Gems.Amethyst(this.weight * .75, quality);
        }
        else if (rdm < 70) {
            return new Gems.Opal(this.weight * .75, quality);
        }
        else if (rdm < 80) {
            return new Gems.Garnet(this.weight * .75, quality);
        }
        else if (rdm < 90) {
            return new Gems.Onyx(this.weight * .75, quality);
        }
        else if (rdm < 100) {
            return new Gems.Quartz(this.weight * .75, quality);
        }
        else if (rdm < 110) {
            return new Gems.Agate(this.weight * .75, quality);
        }
        else if (rdm < 120) {
            return new Gems.Jade(this.weight * .75, quality);
        }
        else if (rdm < 130) {
            return new Gems.Lapis(this.weight * .75, quality);
        }
        else {
            return new Gems.Rock(this.weight * .75);
        }
    };
    return Geode;
}(OreItem));
exports.Geode = Geode;
exports.geode_prototype = new Geode(1, 100);
exports.ores.push(exports.geode_prototype);
//copper ore
var CopperOre = /** @class */ (function (_super) {
    __extends(CopperOre, _super);
    function CopperOre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CopperOre;
}(OreItem));
exports.CopperOre = CopperOre;
exports.copper_ore_prototype = new CopperOre(1, 100);
exports.ores.push(exports.copper_ore_prototype);
//tin ore
var TinOre = /** @class */ (function (_super) {
    __extends(TinOre, _super);
    function TinOre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TinOre;
}(OreItem));
exports.TinOre = TinOre;
exports.tin_ore_prototype = new TinOre(1, 100);
exports.ores.push(exports.tin_ore_prototype);
//iron ore
var IronOre = /** @class */ (function (_super) {
    __extends(IronOre, _super);
    function IronOre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IronOre;
}(OreItem));
exports.IronOre = IronOre;
exports.iron_ore_prototype = new IronOre(1, 100);
exports.ores.push(exports.iron_ore_prototype);
//coal
var Coal = /** @class */ (function (_super) {
    __extends(Coal, _super);
    function Coal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Coal;
}(OreItem));
exports.Coal = Coal;
exports.coal_prototype = new Coal(1, 100);
exports.ores.push(exports.coal_prototype);
//silver ore
var SilverOre = /** @class */ (function (_super) {
    __extends(SilverOre, _super);
    function SilverOre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SilverOre;
}(OreItem));
exports.SilverOre = SilverOre;
exports.silver_ore_prototype = new SilverOre(1, 100);
exports.ores.push(exports.silver_ore_prototype);
//gold ore
var GoldOre = /** @class */ (function (_super) {
    __extends(GoldOre, _super);
    function GoldOre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GoldOre;
}(OreItem));
exports.GoldOre = GoldOre;
exports.gold_ore_prototype = new GoldOre(1, 100);
exports.ores.push(exports.gold_ore_prototype);
//limestone
var Limestone = /** @class */ (function (_super) {
    __extends(Limestone, _super);
    function Limestone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Limestone;
}(OreItem));
exports.Limestone = Limestone;
exports.limestone_prototype = new Limestone(1, 100);
exports.ores.push(exports.limestone_prototype);
//platinum ore
var PlatinumOre = /** @class */ (function (_super) {
    __extends(PlatinumOre, _super);
    function PlatinumOre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PlatinumOre;
}(OreItem));
exports.PlatinumOre = PlatinumOre;
exports.platinum_ore_prototype = new PlatinumOre(1, 100);
exports.ores.push(exports.platinum_ore_prototype);
//mithril ore
var MithrilOre = /** @class */ (function (_super) {
    __extends(MithrilOre, _super);
    function MithrilOre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MithrilOre;
}(OreItem));
exports.MithrilOre = MithrilOre;
exports.mithril_ore_prototype = new MithrilOre(1, 100);
exports.ores.push(exports.mithril_ore_prototype);
//adamantite ore
var AdamantiteOre = /** @class */ (function (_super) {
    __extends(AdamantiteOre, _super);
    function AdamantiteOre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdamantiteOre;
}(OreItem));
exports.AdamantiteOre = AdamantiteOre;
exports.adamantite_ore_prototype = new AdamantiteOre(1, 100);
exports.ores.push(exports.adamantite_ore_prototype);
//runite ore
var RuniteOre = /** @class */ (function (_super) {
    __extends(RuniteOre, _super);
    function RuniteOre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RuniteOre;
}(OreItem));
exports.RuniteOre = RuniteOre;
exports.runite_ore_prototype = new RuniteOre(1, 100);
exports.ores.push(exports.runite_ore_prototype);
