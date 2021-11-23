"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\ore-deposits.ts
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
exports.runiteOreDeposit_prototype = exports.RuniteOreDeposit = exports.adamantiteOreDeposit_prototype = exports.AdamantiteOreDeposit = exports.mithrilOreDeposit_prototype = exports.MithrilOreDeposit = exports.platinumOreDeposit_prototype = exports.PlatinumOreDeposit = exports.limestoneDeposit_prototype = exports.LimestoneDeposit = exports.goldOreDeposit_prototype = exports.GoldOreDeposit = exports.silverOreDeposit_prototype = exports.SilverOreDeposit = exports.coalDeposit_prototype = exports.CoalDeposit = exports.ironOreDeposit_prototype = exports.IronOreDeposit = exports.tinOreDeposit_prototype = exports.TinOreDeposit = exports.copperOreDeposit_prototype = exports.CopperOreDeposit = exports.geodeDeposit_prototype = exports.GeodeDeposit = exports.clayDeposit_prototype = exports.ClayDeposit = exports.oreDeposits = exports.OreDeposit = void 0;
var interactables_1 = require("./interactables");
var OreItems = require("./ore-items");
var Gems = require("./gems");
var OreDeposit = /** @class */ (function (_super) {
    __extends(OreDeposit, _super);
    function OreDeposit(quantity, quality) {
        var _this = _super.call(this) || this;
        _this, _this.categories.push("Geode");
        _this.quantity = quantity;
        _this.quality = quality;
        return _this;
    }
    OreDeposit.prototype.prospect = function () {
        console.log("You prospect the ore deposit and find " +
            this.quantity +
            " " +
            this.name +
            ".");
    };
    OreDeposit.prototype.mine = function (skillLevel) {
        console.log("You attempt to mine the deposit...");
        if ((this.quantity = 0)) {
            console.log("There is no remaining ore in the deposit.");
            return null;
        }
        // chance that you get nothing
        var rdm = Math.ceil(Math.random() * 100);
        if (rdm > skillLevel) {
            console.log("You are unable to mine anything from the deposit");
            return null;
        }
        var weight = Math.ceil(Math.random() * 100);
        // chance that all you get is a rock
        if (rdm > this.quality) {
            console.log("All you get is rocks");
            return new Gems.Rock(weight);
        }
        //randomly generated quality
        //geometric avarage of geode quality and skill level
        var quality = Math.pow(Math.random() * skillLevel, 0.5);
        // chance that you get a gem
        rdm = Math.ceil(Math.random() * 100);
        if (rdm <= 1) {
            //chance of getting a gem of a certain type
            rdm = Math.ceil(Math.random() * 1000);
            if (rdm < 10) {
                return new Gems.Ruby(weight * 0.75, quality);
            }
            else if (rdm < 20) {
                return new Gems.Sapphire(weight * 0.75, quality);
            }
            else if (rdm < 30) {
                return new Gems.Emerald(weight * 0.75, quality);
            }
            else if (rdm < 40) {
                return new Gems.Topaz(weight * 0.75, quality);
            }
            else if (rdm < 50) {
                return new Gems.Diamond(weight * 0.75, quality);
            }
            else if (rdm < 60) {
                return new Gems.Amethyst(weight * 0.75, quality);
            }
            else if (rdm < 70) {
                return new Gems.Opal(weight * 0.75, quality);
            }
            else if (rdm < 80) {
                return new Gems.Garnet(weight * 0.75, quality);
            }
            else if (rdm < 90) {
                return new Gems.Onyx(weight * 0.75, quality);
            }
            else if (rdm < 100) {
                return new Gems.Quartz(weight * 0.75, quality);
            }
            else if (rdm < 110) {
                return new Gems.Agate(weight * 0.75, quality);
            }
            else if (rdm < 120) {
                return new Gems.Jade(weight * 0.75, quality);
            }
            else if (rdm < 130) {
                return new Gems.Lapis(weight * 0.75, quality);
            }
            else {
                return new OreItems.Geode(weight, quality);
            }
        }
        return this.getOre(weight, quality);
    };
    OreDeposit.prototype.getOre = function (weight, quality) {
        //define this on sub classes
        return null;
    };
    return OreDeposit;
}(interactables_1.Interactable));
exports.OreDeposit = OreDeposit;
exports.oreDeposits = [];
//clay
var ClayDeposit = /** @class */ (function (_super) {
    __extends(ClayDeposit, _super);
    function ClayDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Clay";
        _this.categories.push("Clay");
        return _this;
    }
    ClayDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.Clay(weight, quality);
    };
    return ClayDeposit;
}(OreDeposit));
exports.ClayDeposit = ClayDeposit;
exports.clayDeposit_prototype = new ClayDeposit(1, 100);
exports.oreDeposits.push(exports.clayDeposit_prototype);
//geodes
var GeodeDeposit = /** @class */ (function (_super) {
    __extends(GeodeDeposit, _super);
    function GeodeDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Geode";
        _this.categories.push("Geode");
        return _this;
    }
    GeodeDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.Geode(weight, quality);
    };
    return GeodeDeposit;
}(OreDeposit));
exports.GeodeDeposit = GeodeDeposit;
exports.geodeDeposit_prototype = new GeodeDeposit(1, 100);
exports.oreDeposits.push(exports.geodeDeposit_prototype);
//copper ore
var CopperOreDeposit = /** @class */ (function (_super) {
    __extends(CopperOreDeposit, _super);
    function CopperOreDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Copper Ore";
        _this.categories.push("Copper");
        return _this;
    }
    CopperOreDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.CopperOre(weight, quality);
    };
    return CopperOreDeposit;
}(OreDeposit));
exports.CopperOreDeposit = CopperOreDeposit;
exports.copperOreDeposit_prototype = new CopperOreDeposit(1, 100);
exports.oreDeposits.push(exports.copperOreDeposit_prototype);
//tin ore
var TinOreDeposit = /** @class */ (function (_super) {
    __extends(TinOreDeposit, _super);
    function TinOreDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Tin Ore";
        _this.categories.push("Tin");
        return _this;
    }
    TinOreDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.TinOre(weight, quality);
    };
    return TinOreDeposit;
}(OreDeposit));
exports.TinOreDeposit = TinOreDeposit;
exports.tinOreDeposit_prototype = new TinOreDeposit(1, 100);
exports.oreDeposits.push(exports.tinOreDeposit_prototype);
//iron ore
var IronOreDeposit = /** @class */ (function (_super) {
    __extends(IronOreDeposit, _super);
    function IronOreDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Iron Ore";
        _this.categories.push("Iron");
        return _this;
    }
    IronOreDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.IronOre(weight, quality);
    };
    return IronOreDeposit;
}(OreDeposit));
exports.IronOreDeposit = IronOreDeposit;
exports.ironOreDeposit_prototype = new IronOreDeposit(1, 100);
exports.oreDeposits.push(exports.ironOreDeposit_prototype);
//coal
var CoalDeposit = /** @class */ (function (_super) {
    __extends(CoalDeposit, _super);
    function CoalDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Coal";
        _this.categories.push("Coal");
        return _this;
    }
    CoalDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.Coal(weight, quality);
    };
    return CoalDeposit;
}(OreDeposit));
exports.CoalDeposit = CoalDeposit;
exports.coalDeposit_prototype = new CoalDeposit(1, 100);
exports.oreDeposits.push(exports.coalDeposit_prototype);
//silver ore
var SilverOreDeposit = /** @class */ (function (_super) {
    __extends(SilverOreDeposit, _super);
    function SilverOreDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Silver Ore";
        _this.categories.push("Silver");
        return _this;
    }
    SilverOreDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.SilverOre(weight, quality);
    };
    return SilverOreDeposit;
}(OreDeposit));
exports.SilverOreDeposit = SilverOreDeposit;
exports.silverOreDeposit_prototype = new SilverOreDeposit(1, 100);
exports.oreDeposits.push(exports.silverOreDeposit_prototype);
//gold ore
var GoldOreDeposit = /** @class */ (function (_super) {
    __extends(GoldOreDeposit, _super);
    function GoldOreDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Gold Ore";
        _this.categories.push("Gold");
        return _this;
    }
    GoldOreDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.GoldOre(weight, quality);
    };
    return GoldOreDeposit;
}(OreDeposit));
exports.GoldOreDeposit = GoldOreDeposit;
exports.goldOreDeposit_prototype = new GoldOreDeposit(1, 100);
exports.oreDeposits.push(exports.goldOreDeposit_prototype);
//limestone
var LimestoneDeposit = /** @class */ (function (_super) {
    __extends(LimestoneDeposit, _super);
    function LimestoneDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Limestone";
        _this.categories.push("Limestone");
        return _this;
    }
    LimestoneDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.Limestone(weight, quality);
    };
    return LimestoneDeposit;
}(OreDeposit));
exports.LimestoneDeposit = LimestoneDeposit;
exports.limestoneDeposit_prototype = new LimestoneDeposit(1, 100);
exports.oreDeposits.push(exports.limestoneDeposit_prototype);
//platinum ore
var PlatinumOreDeposit = /** @class */ (function (_super) {
    __extends(PlatinumOreDeposit, _super);
    function PlatinumOreDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Platinum Ore";
        _this.categories.push("Platinum");
        return _this;
    }
    PlatinumOreDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.PlatinumOre(weight, quality);
    };
    return PlatinumOreDeposit;
}(OreDeposit));
exports.PlatinumOreDeposit = PlatinumOreDeposit;
exports.platinumOreDeposit_prototype = new PlatinumOreDeposit(1, 100);
exports.oreDeposits.push(exports.platinumOreDeposit_prototype);
//mithril ore
var MithrilOreDeposit = /** @class */ (function (_super) {
    __extends(MithrilOreDeposit, _super);
    function MithrilOreDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Mithril Ore";
        _this.categories.push("Mithril");
        return _this;
    }
    MithrilOreDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.MithrilOre(weight, quality);
    };
    return MithrilOreDeposit;
}(OreDeposit));
exports.MithrilOreDeposit = MithrilOreDeposit;
exports.mithrilOreDeposit_prototype = new MithrilOreDeposit(1, 100);
exports.oreDeposits.push(exports.mithrilOreDeposit_prototype);
//adamantite ore
var AdamantiteOreDeposit = /** @class */ (function (_super) {
    __extends(AdamantiteOreDeposit, _super);
    function AdamantiteOreDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Adamantite Ore";
        _this.categories.push("Adamantite");
        return _this;
    }
    AdamantiteOreDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.AdamantiteOre(weight, quality);
    };
    return AdamantiteOreDeposit;
}(OreDeposit));
exports.AdamantiteOreDeposit = AdamantiteOreDeposit;
exports.adamantiteOreDeposit_prototype = new AdamantiteOreDeposit(1, 100);
exports.oreDeposits.push(exports.adamantiteOreDeposit_prototype);
//runite ore
var RuniteOreDeposit = /** @class */ (function (_super) {
    __extends(RuniteOreDeposit, _super);
    function RuniteOreDeposit(quantity, quality) {
        var _this = _super.call(this, quantity, quality) || this;
        _this.name = "Runite Ore";
        _this.categories.push("Runite");
        return _this;
    }
    RuniteOreDeposit.prototype.getOre = function (weight, quality) {
        return new OreItems.RuniteOre(weight, quality);
    };
    return RuniteOreDeposit;
}(OreDeposit));
exports.RuniteOreDeposit = RuniteOreDeposit;
exports.runiteOreDeposit_prototype = new RuniteOreDeposit(1, 100);
exports.oreDeposits.push(exports.runiteOreDeposit_prototype);
