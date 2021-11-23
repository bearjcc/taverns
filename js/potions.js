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
exports.aquaExevoTerra_prototype = exports.AquaExevoTerra = exports.aquaExevoVitae_prototype = exports.AquaExevoVitae = exports.aquaExevoTenebrae_prototype = exports.AquaExevoTenebrae = exports.aquaExevoSanctus_prototype = exports.AquaExevoSanctus = exports.aquaExevoPotentia_prototype = exports.AquaExevoPotentia = exports.aquaExevo_prototype = exports.AquaExevo = exports.aquaExana_prototype = exports.AquaExana = exports.aquaExorta_prototype = exports.AquaExorta = exports.aquaVitae_prototype = exports.AquaVitae = exports.aquaTerra_prototype = exports.AquaTerra = exports.aquaMentalis_prototype = exports.AquaMentalis = exports.aquaRegia_prototype = exports.AquaRegia = exports.turpentine_prototype = exports.Turpentine = exports.aquaFortis_prototype = exports.AquaFortis = exports.cloud9_prototype = exports.Cloud9 = exports.strengthPotion_prototype = exports.StrengthPotion = exports.sleepingPotion_prototype = exports.SleepingDraught = exports.staminaPotion_prototype = exports.StaminaPotion = exports.manaPotion_prototype = exports.ManaPotion = exports.healthPotion_prototype = exports.HealthPotion = exports.milkOfThePoppy_prototype = exports.MilkOfThePoppy = exports.potions = exports.Potion = void 0;
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
exports.potions = [];
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
}(Potion));
exports.MilkOfThePoppy = MilkOfThePoppy;
exports.milkOfThePoppy_prototype = new MilkOfThePoppy();
exports.potions.push(exports.milkOfThePoppy_prototype);
var HealthPotion = /** @class */ (function (_super) {
    __extends(HealthPotion, _super);
    function HealthPotion() {
        var _this = _super.call(this) || this;
        _this.categories.push("Health");
        _this.singular = "health potion";
        _this.plural = "health potions";
        _this.description = "health potion";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 50;
        _this.weight = 1;
        _this.sources = ["Alchemy"];
        return _this;
    }
    return HealthPotion;
}(Potion));
exports.HealthPotion = HealthPotion;
exports.healthPotion_prototype = new HealthPotion();
exports.potions.push(exports.healthPotion_prototype);
var ManaPotion = /** @class */ (function (_super) {
    __extends(ManaPotion, _super);
    function ManaPotion() {
        var _this = _super.call(this) || this;
        _this.categories.push("Mana");
        _this.singular = "mana potion";
        _this.plural = "mana potions";
        _this.description = "mana potion";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Alchemy"];
        return _this;
    }
    return ManaPotion;
}(Potion));
exports.ManaPotion = ManaPotion;
exports.manaPotion_prototype = new ManaPotion();
exports.potions.push(exports.manaPotion_prototype);
var StaminaPotion = /** @class */ (function (_super) {
    __extends(StaminaPotion, _super);
    function StaminaPotion() {
        var _this = _super.call(this) || this;
        _this.categories.push("Stamina");
        _this.singular = "stamina potion";
        _this.plural = "stamina potions";
        _this.description = "stamina potion";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Alchemy"];
        return _this;
    }
    return StaminaPotion;
}(Potion));
exports.StaminaPotion = StaminaPotion;
exports.staminaPotion_prototype = new StaminaPotion();
exports.potions.push(exports.staminaPotion_prototype);
var SleepingDraught = /** @class */ (function (_super) {
    __extends(SleepingDraught, _super);
    function SleepingDraught() {
        var _this = _super.call(this) || this;
        _this.categories.push("Sleeping");
        _this.singular = "sleeping draught";
        _this.plural = "sleeping draughts";
        _this.description = "sleeping potion";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Alchemy"];
        return _this;
    }
    return SleepingDraught;
}(Potion));
exports.SleepingDraught = SleepingDraught;
exports.sleepingPotion_prototype = new SleepingDraught();
exports.potions.push(exports.sleepingPotion_prototype);
var StrengthPotion = /** @class */ (function (_super) {
    __extends(StrengthPotion, _super);
    function StrengthPotion() {
        var _this = _super.call(this) || this;
        _this.categories.push("Strength");
        _this.singular = "strength potion";
        _this.plural = "strength potions";
        _this.description = "strength potion";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Alchemy"];
        return _this;
    }
    return StrengthPotion;
}(Potion));
exports.StrengthPotion = StrengthPotion;
exports.strengthPotion_prototype = new StrengthPotion();
exports.potions.push(exports.strengthPotion_prototype);
var Cloud9 = /** @class */ (function (_super) {
    __extends(Cloud9, _super);
    function Cloud9() {
        var _this = _super.call(this) || this;
        _this.categories.push("Cloud9");
        _this.singular = "Cloud9";
        _this.plural = "Cloud9";
        _this.description = "Creates a sense of euphoria.";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Alchemy"];
        return _this;
    }
    return Cloud9;
}(Potion));
exports.Cloud9 = Cloud9;
exports.cloud9_prototype = new Cloud9();
exports.potions.push(exports.cloud9_prototype);
var AquaFortis = /** @class */ (function (_super) {
    __extends(AquaFortis, _super);
    function AquaFortis() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Fortis");
        _this.singular = "Aqua Fortis";
        _this.plural = "Aqua Fortis";
        _this.description = "Aqua Fortis";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Alchemy"];
        return _this;
    }
    return AquaFortis;
}(Potion));
exports.AquaFortis = AquaFortis;
exports.aquaFortis_prototype = new AquaFortis();
exports.potions.push(exports.aquaFortis_prototype);
var Turpentine = /** @class */ (function (_super) {
    __extends(Turpentine, _super);
    function Turpentine() {
        var _this = _super.call(this) || this;
        _this.categories.push("Turpentine");
        _this.singular = "Turpentine";
        _this.plural = "Turpentine";
        _this.description = "Turpentine";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return Turpentine;
}(Potion));
exports.Turpentine = Turpentine;
exports.turpentine_prototype = new Turpentine();
exports.potions.push(exports.turpentine_prototype);
var AquaRegia = /** @class */ (function (_super) {
    __extends(AquaRegia, _super);
    function AquaRegia() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Regia");
        _this.singular = "Aqua Regia";
        _this.plural = "Aqua Regia";
        _this.description = "Aqua Regia";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaRegia;
}(Potion));
exports.AquaRegia = AquaRegia;
exports.aquaRegia_prototype = new AquaRegia();
exports.potions.push(exports.aquaRegia_prototype);
var AquaMentalis = /** @class */ (function (_super) {
    __extends(AquaMentalis, _super);
    function AquaMentalis() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Mentalis");
        _this.singular = "Aqua Mentalis";
        _this.plural = "Aqua Mentalis";
        _this.description = "Aqua Mentalis";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaMentalis;
}(Potion));
exports.AquaMentalis = AquaMentalis;
exports.aquaMentalis_prototype = new AquaMentalis();
exports.potions.push(exports.aquaMentalis_prototype);
var AquaTerra = /** @class */ (function (_super) {
    __extends(AquaTerra, _super);
    function AquaTerra() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Terra");
        _this.singular = "Aqua Terra";
        _this.plural = "Aqua Terra";
        _this.description = "Aqua Terra";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaTerra;
}(Potion));
exports.AquaTerra = AquaTerra;
exports.aquaTerra_prototype = new AquaTerra();
exports.potions.push(exports.aquaTerra_prototype);
var AquaVitae = /** @class */ (function (_super) {
    __extends(AquaVitae, _super);
    function AquaVitae() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Vitae");
        _this.singular = "Aqua Vitae";
        _this.plural = "Aqua Vitae";
        _this.description = "Aqua Vitae";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaVitae;
}(Potion));
exports.AquaVitae = AquaVitae;
exports.aquaVitae_prototype = new AquaVitae();
exports.potions.push(exports.aquaVitae_prototype);
var AquaExorta = /** @class */ (function (_super) {
    __extends(AquaExorta, _super);
    function AquaExorta() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Exorta");
        _this.singular = "Aqua Exorta";
        _this.plural = "Aqua Exorta";
        _this.description = "Aqua Exorta";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaExorta;
}(Potion));
exports.AquaExorta = AquaExorta;
exports.aquaExorta_prototype = new AquaExorta();
exports.potions.push(exports.aquaExorta_prototype);
var AquaExana = /** @class */ (function (_super) {
    __extends(AquaExana, _super);
    function AquaExana() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Exana");
        _this.singular = "Aqua Exana";
        _this.plural = "Aqua Exana";
        _this.description = "Aqua Exana";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaExana;
}(Potion));
exports.AquaExana = AquaExana;
exports.aquaExana_prototype = new AquaExana();
exports.potions.push(exports.aquaExana_prototype);
var AquaExevo = /** @class */ (function (_super) {
    __extends(AquaExevo, _super);
    function AquaExevo() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Exevo");
        _this.singular = "Aqua Exevo";
        _this.plural = "Aqua Exevo";
        _this.description = "Aqua Exevo";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaExevo;
}(Potion));
exports.AquaExevo = AquaExevo;
exports.aquaExevo_prototype = new AquaExevo();
exports.potions.push(exports.aquaExevo_prototype);
var AquaExevoPotentia = /** @class */ (function (_super) {
    __extends(AquaExevoPotentia, _super);
    function AquaExevoPotentia() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Exevo Potentia");
        _this.singular = "Aqua Exevo Potentia";
        _this.plural = "Aqua Exevo Potentia";
        _this.description = "Aqua Exevo Potentia";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaExevoPotentia;
}(Potion));
exports.AquaExevoPotentia = AquaExevoPotentia;
exports.aquaExevoPotentia_prototype = new AquaExevoPotentia();
exports.potions.push(exports.aquaExevoPotentia_prototype);
var AquaExevoSanctus = /** @class */ (function (_super) {
    __extends(AquaExevoSanctus, _super);
    function AquaExevoSanctus() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Exevo Sanctus");
        _this.singular = "Aqua Exevo Sanctus";
        _this.plural = "Aqua Exevo Sanctus";
        _this.description = "Aqua Exevo Sanctus";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaExevoSanctus;
}(Potion));
exports.AquaExevoSanctus = AquaExevoSanctus;
exports.aquaExevoSanctus_prototype = new AquaExevoSanctus();
exports.potions.push(exports.aquaExevoSanctus_prototype);
var AquaExevoTenebrae = /** @class */ (function (_super) {
    __extends(AquaExevoTenebrae, _super);
    function AquaExevoTenebrae() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Exevo Tenebrae");
        _this.singular = "Aqua Exevo Tenebrae";
        _this.plural = "Aqua Exevo Tenebrae";
        _this.description = "Aqua Exevo Tenebrae";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaExevoTenebrae;
}(Potion));
exports.AquaExevoTenebrae = AquaExevoTenebrae;
exports.aquaExevoTenebrae_prototype = new AquaExevoTenebrae();
exports.potions.push(exports.aquaExevoTenebrae_prototype);
var AquaExevoVitae = /** @class */ (function (_super) {
    __extends(AquaExevoVitae, _super);
    function AquaExevoVitae() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Exevo Vitae");
        _this.singular = "Aqua Exevo Vitae";
        _this.plural = "Aqua Exevo Vitae";
        _this.description = "Aqua Exevo Vitae";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaExevoVitae;
}(Potion));
exports.AquaExevoVitae = AquaExevoVitae;
exports.aquaExevoVitae_prototype = new AquaExevoVitae();
exports.potions.push(exports.aquaExevoVitae_prototype);
var AquaExevoTerra = /** @class */ (function (_super) {
    __extends(AquaExevoTerra, _super);
    function AquaExevoTerra() {
        var _this = _super.call(this) || this;
        _this.categories.push("Aqua Exevo Terra");
        _this.singular = "Aqua Exevo Terra";
        _this.plural = "Aqua Exevo Terra";
        _this.description = "Aqua Exevo Terra";
        _this.hunger = 0;
        _this.thirst = 0;
        _this.hp = 0;
        _this.weight = 1;
        _this.sources = ["Distilling"];
        return _this;
    }
    return AquaExevoTerra;
}(Potion));
exports.AquaExevoTerra = AquaExevoTerra;
exports.aquaExevoTerra_prototype = new AquaExevoTerra();
exports.potions.push(exports.aquaExevoTerra_prototype);
