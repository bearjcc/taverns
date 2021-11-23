"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\skills.ts
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
exports.ProfessionSkill = exports.SurvivalSkill = exports.CombatSkill = exports.Skill = exports.Professional = exports.Person = void 0;
// define class Person
var Person = /** @class */ (function () {
    function Person(name, description) {
        this.name = name;
        this.description = description;
    }
    return Person;
}());
exports.Person = Person;
// define class Professional
var Professional = /** @class */ (function (_super) {
    __extends(Professional, _super);
    function Professional() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professional.description = "Professional";
    return Professional;
}(Person));
exports.Professional = Professional;
var Combatant = new Person("Combatant", "A person who is in combat.");
var Generic = new Person("Generic", "Nothing special");
var Pyro = new Professional("Pyro", "Professioanl Fire Maker");
var Pyrotechnician = new Professional("Pyrotechnician", "Pyrotechnics Expert");
var Demoman = new Professional("Demoman", "Explosives Expert");
var Archeologist = new Professional("Archeologist", "Archaeology Expert");
var Tracker = new Professional("Tracker", "Tracking Expert");
var Chef = new Professional("Chef", "Cooking Expert");
var Brewster = new Professional("Brewster", "Brewing Expert");
var Farmer = new Professional("Farmer", "Farming Expert");
var Carpenter = new Professional("Carpenter", "Carpentry Expert");
var Hunter = new Professional("Hunter", "Hunting Expert");
var Fisherman = new Professional("Fisherman", "Fishing Expert");
var Geologist = new Professional("Geologist", "Geology Expert");
var Crafter = new Professional("Crafter", "Crafting Expert");
var Engineer = new Professional("Engineer", "Engineering Expert");
var Mage = new Professional("Mage", "Magecraft Expert");
var Seaman = new Professional("Seaman", "Seamanship Expert");
var Merchant = new Professional("Merchant", "Salesmanship Expert");
var Harlot = new Professional("Harlot", "Seduction Expert");
var Athlete = new Professional("Athlete", "Athletics Expert");
var Healer = new Professional("Healer", "Medicinal Arts Expert");
var Hustler = new Professional("Hustler", "Deception Expert");
var Scholar = new Professional("Scholar", "Scholarship Expert");
var Ascetic = new Professional("Ascetic", "Spirituality Expert");
var Alchemist = new Professional("Alchemist", "Alchemy Expert");
// define class Skill
var Skill = /** @class */ (function () {
    function Skill(name, description, person) {
        this.name = name;
        this.description = description;
        this.person = person;
    }
    Skill.description = "Skill";
    return Skill;
}());
exports.Skill = Skill;
var CombatSkill = /** @class */ (function (_super) {
    __extends(CombatSkill, _super);
    function CombatSkill(name, description) {
        return _super.call(this, name, description, Combatant) || this;
    }
    CombatSkill.description = "Combat";
    return CombatSkill;
}(Skill));
exports.CombatSkill = CombatSkill;
var SurvivalSkill = /** @class */ (function (_super) {
    __extends(SurvivalSkill, _super);
    function SurvivalSkill(name, description) {
        return _super.call(this, name, description, Generic) || this;
    }
    SurvivalSkill.description = "Survival";
    return SurvivalSkill;
}(Skill));
exports.SurvivalSkill = SurvivalSkill;
var ProfessionSkill = /** @class */ (function (_super) {
    __extends(ProfessionSkill, _super);
    function ProfessionSkill() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.person = Professional.prototype;
        return _this;
    }
    ProfessionSkill.description = "Profession";
    return ProfessionSkill;
}(Skill));
exports.ProfessionSkill = ProfessionSkill;
var fireMaking = new ProfessionSkill("Fire Making", "Make fire", Pyro);
var archeology = new ProfessionSkill("Archeology", "Dig up the past", Archeologist);
var tracking = new ProfessionSkill("Tracking", "Find what you are looking for", Tracker);
var cooking = new ProfessionSkill("Cooking", "Cook food", Chef);
var distillery = new ProfessionSkill("Distillery", "Make alcohol", Brewster);
var farming = new ProfessionSkill("Farming", "Grow plants", Farmer);
var woodworking = new ProfessionSkill("Woodworking", "Carve wood", Carpenter);
var hunting = new ProfessionSkill("Hunting", "Kill animals", Hunter);
var fishing = new ProfessionSkill("Fishing", "Catch fish", Fisherman);
var geoworking = new ProfessionSkill("Geoworking", "Prospect, mine, smith", Geologist);
var crafting = new ProfessionSkill("Crafting", "Make pottery, create fabrics, and leatherwork", Crafter);
var engineering = new ProfessionSkill("Engineering", "Design and build toys, siege weapons, walls, buildings, and aqueducts", Engineer);
var magecraft = new ProfessionSkill("Magecraft", "Harness the Mystic force", Mage);
var seamanship = new ProfessionSkill("Seamanship", "Brave the seas", Seaman);
var salesmanship = new ProfessionSkill("Salemanship", "Get the best prices", Merchant);
var seduction = new ProfessionSkill("Seduction", "Use your body, words, and movements", Harlot);
var athletics = new ProfessionSkill("Athletics", "Learn to swim, play sports, or become an acrobat", Athlete);
var medicinalArts = new ProfessionSkill("Medicinal Arts", "Craft medicines and heal the sick and dying", Healer);
var deception = new ProfessionSkill("Deception", "Lie, cheat, steal, lock-pick, assassinate, or simply stay hidden", Hustler);
var scholarship = new ProfessionSkill("Scholarship", "Learn history, arcana, languages, or music", Scholar);
var spirituality = new ProfessionSkill("Spirituality", "Stay in contact with your inner self and one or more gods", Ascetic);
var alchemy = new ProfessionSkill("Alchemy", "Brew potions and unlock the secrets of chemistry and metallurgy", Alchemist);
