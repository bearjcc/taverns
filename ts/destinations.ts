// ============================================================================
// Language: TypeScript
// Path: ts\destinations.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Being } from "./beings";

export class Destination {
	name: string;
	description: string;
	membersOnly: boolean = false;

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
		this.membersOnly = false;
	}

	species = [];
	residents: Array<Being> = [];

	addSpecies(species) {
		//only add if not already in list
		if (this.species.indexOf(species) === -1) {
			this.species.push(species);
		}
	}

	addResident(resident: Being) {
		//only add if not already in list
		if (this.residents.indexOf(resident) === -1) {
			this.residents.push(resident);
		}

		//add class type to species
		// this.addSpecies(resident.constructor.name);
	}
}

export class Continent extends Destination {
	static readonly description: string =
		"Large body of land whose borders are denoted by techtonic plates: oceans or mountain ranges";

	// array that contains all continents
	static continents: Array<Continent> = [];
}

var Aesepea = new Continent("Aesepea", "");
var Bowoa = new Continent("Bowoa", "");
var Clasia = new Continent("Clasia", "");
var Dasin = new Continent("Dasin", "");

Continent.continents = [Aesepea, Bowoa, Clasia, Dasin];

export class Island extends Destination {
	static readonly description: string =
		"Small body of land surronded by water";
	constructor(name: string, description: string) {
		super(name, description);
	}
}

var DragonIsle = new Island("DragonIsle", "");
var TheBlackSpot = new Island("TheBlackSpot", "");
var BarracudeReef = new Island("BarracudeReef", "");
var WindnearIsle = new Island("WindnearIsle", "");
var TheMistyIsles = new Island("TheMistyIsles", "");
var LoneRefuse = new Island("LoneRefuse", "");
var TheUnsinkingShip = new Island("TheUnsinkingShip", "");
var ParadiseIsle = new Island("ParadiseIsle", "");

export class Region extends Destination {
	static readonly description: string = "Large Area defined culturally";
	constructor(name: string, description: string) {
		super(name, description);
	}
}

var UnderWorld = new Region("The Under World", "Residency of the dead");
var Earth = new Region("Earth", "Residency of the living");

enum Government {
	Anarchy = "Anarchy",
	Democracy = "Democracy",
	Monarchy = "Monarchy",
	Oligarchy = "Oligarchy",
	Theocracy = "Theocracy",
	Technocracy = "Technocracy",
	Tribal = "Tribal",
	None = "None",
}

export class State extends Destination {
	static readonly description: string =
		"Large area of land with a governing body";
	government: Government;
	governmentdescription: string;
	leader: Being;
	region: Region = Earth;
	continent: Continent;

	constructor(name: string, description: string, continent: Continent) {
		super(name, description);
		this.region = Earth;
		this.continent = continent;
	}
}

export class Settlement extends Destination {
	static readonly description: string =
		"An area where Humanoids live with a government";
	government: Government;
	governmentdescription: string;
	leader: Being;
	state: State;
	continent: Continent;
	lat: number;
	lng: number;
	region: Region;

	constructor(name: string, description: string, state: State) {
		super(name, description);
		this.state = state;
		this.continent = this.state.continent;
	}
}

export class SkillingLocation extends Destination {
	static readonly description: string =
		"An area where players can easily increase their skill xp";
	lat: number;
	lng: number;
	region: Region;
	continent: Continent;
	settlement: Settlement;

	constructor(name: string, description: string, settlement: Settlement) {
		super(name, description);
		this.settlement = settlement;
		this.continent = this.settlement.continent;
		this.region = this.settlement.region;
	}
}

export class Ruins extends Settlement {
	static readonly description: string =
		"A place where ancient artifacts can be found";
}

export class City extends Settlement {
	static readonly description: string = "A large, dense settlement";
}

export class Capital extends City {
	static readonly description: string =
		"A city where the seat of government for a state governs from";
}

var GilLadur = new Capital("Gil Ladur", "", null);
// GilLadur.addSpecies(Dwarf)

var Varrum = new City("Varrum", "", null);
// Varrum.addSpecies(Dwarf)

var DhornDarom = new City("Dhorn Darom", "", null);
// DhornDarom.addSpecies(Dwarf)

var Eoserin = new City("E'oserin", "", null);
// Eoserin.addSpecies(Elf)

var Ullagroth = new City("Ullagroth", "", null);
// Ullagroth.addSpecies(Elf)

var Ishelenor = new Capital("Ishelenor", "", null);
// Ishelenor.addSpecies(Elf)

var Aquilina = new City("Aquilina", "", null);
// Aquilina.addSpecies(Merfolk)

var Atlantis = new Ruins("The Lost City of Atlantis", "", null);
// Atlantis.addSpecies(Merfolk)

var Amber = new Ruins("The Lost City of Amber", "", null);

var UddigAhk = new City("Uddig Ahk", "", null);
// UddigAhk.addSpecies(Orc)

var Drughobar = new Capital("Drughobar", "", null);
// Drughobar.addSpecies(Orc)

var Azgaz = new City("Azgaz", "", null);
// Azgaz.addSpecies(Orc)

var Amityville = new City("Amityville", "spoooooky", null);

var Ogden = new City("The City of Og", "", null);

var Vrobridge = new City("Vrobridge", "", null);

var Plago = new City("Plago", "", null);
Plago.region = UnderWorld;

var Alochester = new Capital("Alochester", "", null);
// Alochester.addSpecies(Human)

var MossyStone = new City("Mossy Stone", "", null);
// MossyStone.addSpecies(Dwarf)

var Krefund = new City("Krefund", "", null);

var Arcbridge = new City("Arcbridge", "", null);

export class Town extends Settlement {
	static readonly description: string = "A small, rural settlement";
}

var Whalehorn = new Town("Whalehorn", "", null);

var Appix = new Town("Appix", "", null);

var Purewater = new Town("Purewater", "", null);

var MapleRun = new Town("Maple Run", "", null);

var SunGrove = new Town("Sun Grove", "", null);

var Bonewater = new Town("Bonewater", "", null);

var Beargulch = new Town("Beargulch", "", null);

var HogsHead = new Town("Hogs Head", "", null);

var Zalakia = new Town("Zalakia", "", null);

var SantasVillage = new Town("Santa's Village", "", null);

export class Castle extends Settlement {
	static readonly description: string = "A large, fortified settlement";
}

export class Outpost extends Settlement {
	static readonly description: string = "A small, fortified settlement";
}

export class Homestead extends Settlement {
	static readonly description: string =
		"A small, rural settlement with a single owner";
}

var MossyGlade = new Homestead("Mossy Glade", "", null);
var ForestClearing = new Homestead("Forest Clearing", "", null);
var MountainPass = new Homestead("Mountain Pass", "", null);
var EchoingCavern = new Homestead("Echoing Cavern", "", null);

export class Port extends Settlement {
	static readonly description: string =
		"A place for boats to dock and load or unload goods";
}

export class Mine extends SkillingLocation {
	static readonly description: string = "A place for miners to work";
}

export class IronMine extends Mine {
	static readonly description: string = "A mine for Iron";
}

export class CoalMine extends Mine {
	static readonly description: string = "A mine for Coal";
}

export class SulfurMine extends Mine {
	static readonly description: string = "A mine for Sulfur";
}

export class MithrilMine extends Mine {
	static readonly description: string = "A mine for Mithril";
}

export class CopperMine extends Mine {
	static readonly description: string = "A mine for Copper";
}

export class AdamantiumMine extends Mine {
	static readonly description: string = "A mine for Adamantium";
}

export class ClayMine extends Mine {
	static readonly description: string = "A mine for Clay";
}

export class GoldMine extends Mine {
	static readonly description: string = "A mine for Gold";
}

export class DigSite extends SkillingLocation {
	static readonly description: string =
		"A place where artifacts can be found";
}

export class Building extends Destination {
	static readonly description: string =
		"A permanent Humanoid built structure";
	settlement: Settlement;

	constructor(name: string, description: string, settlement: Settlement) {
		super(name, description);
		this.settlement = settlement;
	}
}

export class Apothecary extends Building {
	static readonly description: string = "A building for the sale of potions";
}

var Wormtails = new Apothecary(
	"Wormtail's Apothecary and Magic Shop",
	"",
	HogsHead
);

var FlasksPotions = new Apothecary(
	"Flasks, Potions, and Bezoars, Oh My!",
	"",
	null
);

export class Temple extends Building {
	static readonly description: string =
		"A building for the worship of the gods";
}

export class Tavern extends Building {
	static readonly description: string =
		"A building for the sale of drinks and food";
}

var MerryMeat = new Tavern(
	"Merry Meat, Merry Part, and Merry Meat Again",
	"",
	null
);

var LeakyLoaf = new Tavern("Leaky and Loaf's", "", null);

var Mumsies = new Tavern("Mumsies", "", null);

var HappyYapper = new Tavern("The Happy Yapper", "", null);

var DarkLyte = new Tavern("Dark Lyte", "", null);

var LastStop = new Tavern("Last Stop", "", null);

var FunGuys = new Tavern("Fun Guy's Friendly Tavern", "", null);
// only location where you can learn Fun Guy's Fantastic Fungi Feast (cooking recipe)

var SevenDeadlySips = new Tavern("Seven Deadly Sips", "", null);
// only location where you can learn Devil's Blood (distilling recipe)

var BearsDen = new Tavern("The Bear's Den", "", null);

export class GeneralStore extends Building {
	static readonly description: string =
		"A building for the sale of general goods";
}

var IggleGiggle = new GeneralStore("Iggle Giggle's Emporium", "", null);

var MoonysMoneyMaker = new GeneralStore("Moony's Money Maker", "", HogsHead);

var FishFowlFungi = new GeneralStore(
	"Fish, Fowl, and Fungi",
	"All your natural needs met under one roof",
	null
);

export class Armory extends Building {
	static readonly description: string =
		"A building for the sale of weapons and armor";
}

var ArmedtoTheTeeth = new Armory("Armed to the Teeth", "", null);

var PadfootsLeather = new Armory("Padfoot's Leather Goods", "", HogsHead);

var KnivesProngs = new Armory("Knives and Prongs", "", null);

export class Haberdashery extends Building {
	static readonly description: string =
		"A building for the sale of fancy clothing and accessories";
}

var Sophies = new Haberdashery("Sophie's Hat Shope", "", null);

var SaltSeasSales = new Building("Salt, Seas, and Sales", "", null);
//naval shop

export class Road extends Destination {
	static readonly description: string = "A road connecting two settlements";
	settlement1: Settlement;
	settlement2: Settlement;

	constructor(
		name: string,
		description: string,
		settlement1: Settlement,
		settlement2: Settlement
	) {
		super(name, description);
		this.settlement1 = settlement1;
		this.settlement2 = settlement2;
	}
}

export class Forest extends Destination {
	static readonly description: string =
		"A place where trees are in abundance";
}

var DarkForest = new Forest("The Dark Forest", "");

export class Field extends Destination {
	static readonly description: string = "An area of open land";
}

var MushroomMeadows = new Field("Mushroom Meadows", "");

export class Desert extends Destination {
	static readonly description: string =
		"An area where very little rain falls";
}

var WeepingPlanes = new Desert("The Weeping Planes", "");

var VastExpanse = new Desert("The Vast Expanse", "");

var NorthPole = new Desert("The North Pole", "");

export class Beach extends Destination {
	static readonly description: string = "Where land meets water";
}

var BeggarsBeach = new Beach("Beggars' Beach", "");

export class Mountain extends Destination {
	static readonly description: string = "A tall steep hill";
}

export class MountainRange extends Destination {
	static readonly description: string =
		"Many mountains in a continuous row caused by techtonic plates colliding";
}

export class BodyofWater extends Destination {
	static readonly description: string = "A body of water";
}

export class Lake extends BodyofWater {
	static readonly description: string = "A large fresh water resovoir";
}

export class Pond extends BodyofWater {
	static readonly description: string = "A small fresh water resovoir";
}

export class River extends BodyofWater {
	static readonly description: string =
		"A large, long, flowing body of fresh water";
}

var Styx = new River("The River Styx", "");
var Mussup = new River("The River Mussup", "");

export class Creek extends BodyofWater {
	static readonly description: string =
		"A small, narrow, flowing body of fresh water";
}

var HobbsCrk = new Creek("Hobbs Crk", "");
var ViperStream = new Creek("The Viper Stream", "");

export class Sea extends BodyofWater {
	static readonly description: string = "A large body of salt water";
}

var BottomlessSea = new Sea("The Bottomless Sea", "");
var SeaOfBlood = new Sea("The Sea of Blood", "");
var VastSea = new Sea("The Vast Sea", "");

export class Bay extends BodyofWater {
	static readonly description: string = "A small body of salt water";
}

var BayOfPork = new Bay("The Bay of Pork", "");
var SundanceBay = new Bay("The Sundance Bay", "");

export class FishingSpot extends SkillingLocation {
	static readonly description: string = "A place where you can fish";
}

export class Battlefield extends Destination {
	static readonly description: string =
		"A place where a large fight has occured";
}

export class Aqueduct extends Destination {
	static readonly description: string =
		"A humanoid structure for transporting water suing the power of gravity";
}

var BlackDuct = new Aqueduct("The Black Duct", "");

export class Bridge extends Destination {
	static readonly description: string =
		"A structure that allows for crossing a body of water";
}

var BlackCrossing = new Bridge("The Black Crossing", "");

var WynganBridge = new Bridge("Wyngan Bridge", "");
// part of The Black Duct

var BrokenBridge = new Bridge("The Broken Bridge", "");

var FlemwaterBridge = new Bridge("The Flemwater Bridge", "");

var StarlitBridge = new Bridge("Starlit Bridge", "");

var SingleCrossing = new Bridge("Single Crossing", "");
//rope bridge
