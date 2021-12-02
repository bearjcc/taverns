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

export const Combatant = new Person("Combatant", "A person who is in combat.");
export const Generic = new Person("Generic", "Nothing special");

export const Pyro = new Professional("Pyro", "Professioanl Fire Maker");
export const Pyrotechnician = new Professional("Pyrotechnician", "Pyrotechnics Expert");
export const Demoman = new Professional("Demoman", "Explosives Expert");
export const Archeologist = new Professional("Archeologist", "Archaeology Expert");
export const Tracker = new Professional("Tracker", "Tracking Expert");
export const Chef = new Professional("Chef", "Cooking Expert");
export const Brewster = new Professional("Brewster", "Brewing Expert");
export const Farmer = new Professional("Farmer", "Farming Expert");
export const Carpenter = new Professional("Carpenter", "Carpentry Expert");
export const Hunter = new Professional("Hunter", "Hunting Expert");
export const Fisherman = new Professional("Fisherman", "Fishing Expert");
export const Geologist = new Professional("Geologist", "Geology Expert");
export const Crafter = new Professional("Crafter", "Crafting Expert");
export const Engineer = new Professional("Engineer", "Engineering Expert");
export const Mage = new Professional("Mage", "Magecraft Expert");
export const Seaman = new Professional("Seaman", "Seamanship Expert");
export const Merchant = new Professional("Merchant", "Salesmanship Expert");
export const Harlot = new Professional("Harlot", "Seduction Expert");
export const Athlete = new Professional("Athlete", "Athletics Expert");
export const Healer = new Professional("Healer", "Medicinal Arts Expert");
export const Hustler = new Professional("Hustler", "Deception Expert");
export const Scholar = new Professional("Scholar", "Scholarship Expert");
export const Ascetic = new Professional("Ascetic", "Spirituality Expert");
export const Alchemist = new Professional("Alchemist", "Alchemy Expert");


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

export const fireMaking = new ProfessionSkill("Fire Making", "Make fire", Pyro);
export const archeology = new ProfessionSkill("Archeology", "Dig up the past", Archeologist);
export const tracking = new ProfessionSkill("Tracking", "Find what you are looking for", Tracker);
export const cooking = new ProfessionSkill("Cooking", "Cook food", Chef);
export const distillery = new ProfessionSkill("Distillery", "Make alcohol", Brewster);
export const farming = new ProfessionSkill("Farming", "Grow plants", Farmer);
export const woodworking = new ProfessionSkill("Woodworking", "Carve wood", Carpenter);
export const hunting = new ProfessionSkill("Hunting", "Kill animals", Hunter);
export const fishing = new ProfessionSkill("Fishing", "Catch fish", Fisherman);
export const geoworking = new ProfessionSkill("Geoworking", "Prospect, mine, smith", Geologist);
export const crafting = new ProfessionSkill("Crafting", "Make pottery, create fabrics, and leatherwork", Crafter);
export const engineering = new ProfessionSkill("Engineering", "Design and build toys, siege weapons, walls, buildings, and aqueducts", Engineer);
export const magecraft = new ProfessionSkill("Magecraft", "Harness the Mystic force", Mage);
export const seamanship = new ProfessionSkill("Seamanship", "Brave the seas", Seaman);
export const salesmanship = new ProfessionSkill("Salemanship", "Get the best prices", Merchant);
export const seduction = new ProfessionSkill("Seduction", "Use your body, words, and movements", Harlot);
export const athletics = new ProfessionSkill("Athletics", "Learn to swim, play sports, or become an acrobat", Athlete);
export const medicinalArts = new ProfessionSkill("Medicinal Arts", "Craft medicines and heal the sick and dying", Healer);
export const deception = new ProfessionSkill("Deception", "Lie, cheat, steal, lock-pick, assassinate, or simply stay hidden", Hustler);
export const scholarship = new ProfessionSkill("Scholarship", "Learn history, arcana, languages, or music", Scholar);
export const spirituality = new ProfessionSkill("Spirituality", "Stay in contact with your inner self and one or more gods", Ascetic);
export const alchemy = new ProfessionSkill("Alchemy", "Brew potions and unlock the secrets of chemistry and metallurgy", Alchemist);



