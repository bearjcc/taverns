// ============================================================================
// Language: TypeScript
// Path: ts\skills.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

// define class Person
export class Person {
  name: string;
  description: string;
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}

// define class Professional
export class Professional extends Person {
  static readonly description: string = "Professional";
}

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
export class Skill {
    name: string;
    description: string;
    person: Person;
    static readonly description: string = "Skill";
    constructor(name: string, description: string, person: Person) {
        this.name = name;
        this.description = description;
        this.person = person;
    }
}

export class CombatSkill extends Skill {
    static readonly description: string = "Combat";
    constructor(name: string, description: string) {
        super(name, description, Combatant);
    }
}

export class SurvivalSkill extends Skill {
    static readonly description: string = "Survival";
    constructor(name: string, description: string) {
        super(name, description, Generic);
    }
}

export class ProfessionSkill extends Skill {
    static readonly description: string = "Profession";
    person = Professional.prototype;
}

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



