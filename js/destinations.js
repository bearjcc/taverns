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
exports.Bridge = exports.Aqueduct = exports.Battlefield = exports.FishingSpot = exports.Bay = exports.Sea = exports.Creek = exports.River = exports.Pond = exports.Lake = exports.BodyofWater = exports.MountainRange = exports.Mountain = exports.Beach = exports.Desert = exports.Field = exports.Forest = exports.Road = exports.Haberdashery = exports.Armory = exports.GeneralStore = exports.Tavern = exports.Temple = exports.Apothecary = exports.Building = exports.DigSite = exports.GoldMine = exports.ClayMine = exports.AdamantiumMine = exports.CopperMine = exports.MithrilMine = exports.SulfurMine = exports.CoalMine = exports.IronMine = exports.Mine = exports.Port = exports.Homestead = exports.Outpost = exports.Castle = exports.Town = exports.Capital = exports.City = exports.Ruins = exports.SkillingLocation = exports.Settlement = exports.State = exports.Region = exports.Island = exports.Continent = exports.Destination = void 0;
var Destination = /** @class */ (function () {
    function Destination(name, description) {
        this.membersOnly = false;
        this.species = [];
        this.residents = [];
        this.name = name;
        this.description = description;
        this.membersOnly = false;
    }
    Destination.prototype.addSpecies = function (species) {
        //only add if not already in list
        if (this.species.indexOf(species) === -1) {
            this.species.push(species);
        }
    };
    Destination.prototype.addResident = function (resident) {
        //only add if not already in list
        if (this.residents.indexOf(resident) === -1) {
            this.residents.push(resident);
        }
        //add class type to species
        // this.addSpecies(resident.constructor.name);
    };
    return Destination;
}());
exports.Destination = Destination;
var Continent = /** @class */ (function (_super) {
    __extends(Continent, _super);
    function Continent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Continent.description = "Large body of land whose borders are denoted by techtonic plates: oceans or mountain ranges";
    // array that contains all continents
    Continent.continents = [];
    return Continent;
}(Destination));
exports.Continent = Continent;
var Aesepea = new Continent("Aesepea", "");
var Bowoa = new Continent("Bowoa", "");
var Clasia = new Continent("Clasia", "");
var Dasin = new Continent("Dasin", "");
Continent.continents = [Aesepea, Bowoa, Clasia, Dasin];
var Island = /** @class */ (function (_super) {
    __extends(Island, _super);
    function Island(name, description) {
        return _super.call(this, name, description) || this;
    }
    Island.description = "Small body of land surronded by water";
    return Island;
}(Destination));
exports.Island = Island;
var DragonIsle = new Island("DragonIsle", "");
var TheBlackSpot = new Island("TheBlackSpot", "");
var BarracudeReef = new Island("BarracudeReef", "");
var WindnearIsle = new Island("WindnearIsle", "");
var TheMistyIsles = new Island("TheMistyIsles", "");
var LoneRefuse = new Island("LoneRefuse", "");
var TheUnsinkingShip = new Island("TheUnsinkingShip", "");
var ParadiseIsle = new Island("ParadiseIsle", "");
var Region = /** @class */ (function (_super) {
    __extends(Region, _super);
    function Region(name, description) {
        return _super.call(this, name, description) || this;
    }
    Region.description = "Large Area defined culturally";
    return Region;
}(Destination));
exports.Region = Region;
var UnderWorld = new Region("The Under World", "Residency of the dead");
var Earth = new Region("Earth", "Residency of the living");
var Government;
(function (Government) {
    Government["Anarchy"] = "Anarchy";
    Government["Democracy"] = "Democracy";
    Government["Monarchy"] = "Monarchy";
    Government["Oligarchy"] = "Oligarchy";
    Government["Theocracy"] = "Theocracy";
    Government["Technocracy"] = "Technocracy";
    Government["Tribal"] = "Tribal";
    Government["None"] = "None";
})(Government || (Government = {}));
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State(name, description, continent) {
        var _this = _super.call(this, name, description) || this;
        _this.region = Earth;
        _this.region = Earth;
        _this.continent = continent;
        return _this;
    }
    State.description = "Large area of land with a governing body";
    return State;
}(Destination));
exports.State = State;
var Settlement = /** @class */ (function (_super) {
    __extends(Settlement, _super);
    function Settlement(name, description, state) {
        var _this = _super.call(this, name, description) || this;
        _this.state = state;
        _this.continent = _this.state.continent;
        return _this;
    }
    Settlement.description = "An area where Humanoids live with a government";
    return Settlement;
}(Destination));
exports.Settlement = Settlement;
var SkillingLocation = /** @class */ (function (_super) {
    __extends(SkillingLocation, _super);
    function SkillingLocation(name, description, settlement) {
        var _this = _super.call(this, name, description) || this;
        _this.settlement = settlement;
        _this.continent = _this.settlement.continent;
        _this.region = _this.settlement.region;
        return _this;
    }
    SkillingLocation.description = "An area where players can easily increase their skill xp";
    return SkillingLocation;
}(Destination));
exports.SkillingLocation = SkillingLocation;
var Ruins = /** @class */ (function (_super) {
    __extends(Ruins, _super);
    function Ruins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ruins.description = "A place where ancient artifacts can be found";
    return Ruins;
}(Settlement));
exports.Ruins = Ruins;
var City = /** @class */ (function (_super) {
    __extends(City, _super);
    function City() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    City.description = "A large, dense settlement";
    return City;
}(Settlement));
exports.City = City;
var Capital = /** @class */ (function (_super) {
    __extends(Capital, _super);
    function Capital() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Capital.description = "A city where the seat of government for a state governs from";
    return Capital;
}(City));
exports.Capital = Capital;
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
var Town = /** @class */ (function (_super) {
    __extends(Town, _super);
    function Town() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Town.description = "A small, rural settlement";
    return Town;
}(Settlement));
exports.Town = Town;
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
var Castle = /** @class */ (function (_super) {
    __extends(Castle, _super);
    function Castle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Castle.description = "A large, fortified settlement";
    return Castle;
}(Settlement));
exports.Castle = Castle;
var Outpost = /** @class */ (function (_super) {
    __extends(Outpost, _super);
    function Outpost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Outpost.description = "A small, fortified settlement";
    return Outpost;
}(Settlement));
exports.Outpost = Outpost;
var Homestead = /** @class */ (function (_super) {
    __extends(Homestead, _super);
    function Homestead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Homestead.description = "A small, rural settlement with a single owner";
    return Homestead;
}(Settlement));
exports.Homestead = Homestead;
var MossyGlade = new Homestead("Mossy Glade", "", null);
var ForestClearing = new Homestead("Forest Clearing", "", null);
var MountainPass = new Homestead("Mountain Pass", "", null);
var EchoingCavern = new Homestead("Echoing Cavern", "", null);
var Port = /** @class */ (function (_super) {
    __extends(Port, _super);
    function Port() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Port.description = "A place for boats to dock and load or unload goods";
    return Port;
}(Settlement));
exports.Port = Port;
var Mine = /** @class */ (function (_super) {
    __extends(Mine, _super);
    function Mine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mine.description = "A place for miners to work";
    return Mine;
}(SkillingLocation));
exports.Mine = Mine;
var IronMine = /** @class */ (function (_super) {
    __extends(IronMine, _super);
    function IronMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IronMine.description = "A mine for Iron";
    return IronMine;
}(Mine));
exports.IronMine = IronMine;
var CoalMine = /** @class */ (function (_super) {
    __extends(CoalMine, _super);
    function CoalMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoalMine.description = "A mine for Coal";
    return CoalMine;
}(Mine));
exports.CoalMine = CoalMine;
var SulfurMine = /** @class */ (function (_super) {
    __extends(SulfurMine, _super);
    function SulfurMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SulfurMine.description = "A mine for Sulfur";
    return SulfurMine;
}(Mine));
exports.SulfurMine = SulfurMine;
var MithrilMine = /** @class */ (function (_super) {
    __extends(MithrilMine, _super);
    function MithrilMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MithrilMine.description = "A mine for Mithril";
    return MithrilMine;
}(Mine));
exports.MithrilMine = MithrilMine;
var CopperMine = /** @class */ (function (_super) {
    __extends(CopperMine, _super);
    function CopperMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CopperMine.description = "A mine for Copper";
    return CopperMine;
}(Mine));
exports.CopperMine = CopperMine;
var AdamantiumMine = /** @class */ (function (_super) {
    __extends(AdamantiumMine, _super);
    function AdamantiumMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdamantiumMine.description = "A mine for Adamantium";
    return AdamantiumMine;
}(Mine));
exports.AdamantiumMine = AdamantiumMine;
var ClayMine = /** @class */ (function (_super) {
    __extends(ClayMine, _super);
    function ClayMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClayMine.description = "A mine for Clay";
    return ClayMine;
}(Mine));
exports.ClayMine = ClayMine;
var GoldMine = /** @class */ (function (_super) {
    __extends(GoldMine, _super);
    function GoldMine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoldMine.description = "A mine for Gold";
    return GoldMine;
}(Mine));
exports.GoldMine = GoldMine;
var DigSite = /** @class */ (function (_super) {
    __extends(DigSite, _super);
    function DigSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DigSite.description = "A place where artifacts can be found";
    return DigSite;
}(SkillingLocation));
exports.DigSite = DigSite;
var Building = /** @class */ (function (_super) {
    __extends(Building, _super);
    function Building(name, description, settlement) {
        var _this = _super.call(this, name, description) || this;
        _this.settlement = settlement;
        return _this;
    }
    Building.description = "A permanent Humanoid built structure";
    return Building;
}(Destination));
exports.Building = Building;
var Apothecary = /** @class */ (function (_super) {
    __extends(Apothecary, _super);
    function Apothecary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apothecary.description = "A building for the sale of potions";
    return Apothecary;
}(Building));
exports.Apothecary = Apothecary;
var Wormtails = new Apothecary("Wormtail's Apothecary and Magic Shop", "", HogsHead);
var FlasksPotions = new Apothecary("Flasks, Potions, and Bezoars, Oh My!", "", null);
var Temple = /** @class */ (function (_super) {
    __extends(Temple, _super);
    function Temple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Temple.description = "A building for the worship of the gods";
    return Temple;
}(Building));
exports.Temple = Temple;
var Tavern = /** @class */ (function (_super) {
    __extends(Tavern, _super);
    function Tavern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tavern.description = "A building for the sale of drinks and food";
    return Tavern;
}(Building));
exports.Tavern = Tavern;
var MerryMeat = new Tavern("Merry Meat, Merry Part, and Merry Meat Again", "", null);
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
var GeneralStore = /** @class */ (function (_super) {
    __extends(GeneralStore, _super);
    function GeneralStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralStore.description = "A building for the sale of general goods";
    return GeneralStore;
}(Building));
exports.GeneralStore = GeneralStore;
var IggleGiggle = new GeneralStore("Iggle Giggle's Emporium", "", null);
var MoonysMoneyMaker = new GeneralStore("Moony's Money Maker", "", HogsHead);
var FishFowlFungi = new GeneralStore("Fish, Fowl, and Fungi", "All your natural needs met under one roof", null);
var Armory = /** @class */ (function (_super) {
    __extends(Armory, _super);
    function Armory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Armory.description = "A building for the sale of weapons and armor";
    return Armory;
}(Building));
exports.Armory = Armory;
var ArmedtoTheTeeth = new Armory("Armed to the Teeth", "", null);
var PadfootsLeather = new Armory("Padfoot's Leather Goods", "", HogsHead);
var KnivesProngs = new Armory("Knives and Prongs", "", null);
var Haberdashery = /** @class */ (function (_super) {
    __extends(Haberdashery, _super);
    function Haberdashery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Haberdashery.description = "A building for the sale of fancy clothing and accessories";
    return Haberdashery;
}(Building));
exports.Haberdashery = Haberdashery;
var Sophies = new Haberdashery("Sophie's Hat Shope", "", null);
var SaltSeasSales = new Building("Salt, Seas, and Sales", "", null);
//naval shop
var Road = /** @class */ (function (_super) {
    __extends(Road, _super);
    function Road(name, description, settlement1, settlement2) {
        var _this = _super.call(this, name, description) || this;
        _this.settlement1 = settlement1;
        _this.settlement2 = settlement2;
        return _this;
    }
    Road.description = "A road connecting two settlements";
    return Road;
}(Destination));
exports.Road = Road;
var Forest = /** @class */ (function (_super) {
    __extends(Forest, _super);
    function Forest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Forest.description = "A place where trees are in abundance";
    return Forest;
}(Destination));
exports.Forest = Forest;
var DarkForest = new Forest("The Dark Forest", "");
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.description = "An area of open land";
    return Field;
}(Destination));
exports.Field = Field;
var MushroomMeadows = new Field("Mushroom Meadows", "");
var Desert = /** @class */ (function (_super) {
    __extends(Desert, _super);
    function Desert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Desert.description = "An area where very little rain falls";
    return Desert;
}(Destination));
exports.Desert = Desert;
var WeepingPlanes = new Desert("The Weeping Planes", "");
var VastExpanse = new Desert("The Vast Expanse", "");
var NorthPole = new Desert("The North Pole", "");
var Beach = /** @class */ (function (_super) {
    __extends(Beach, _super);
    function Beach() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Beach.description = "Where land meets water";
    return Beach;
}(Destination));
exports.Beach = Beach;
var BeggarsBeach = new Beach("Beggars' Beach", "");
var Mountain = /** @class */ (function (_super) {
    __extends(Mountain, _super);
    function Mountain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mountain.description = "A tall steep hill";
    return Mountain;
}(Destination));
exports.Mountain = Mountain;
var MountainRange = /** @class */ (function (_super) {
    __extends(MountainRange, _super);
    function MountainRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MountainRange.description = "Many mountains in a continuous row caused by techtonic plates colliding";
    return MountainRange;
}(Destination));
exports.MountainRange = MountainRange;
var BodyofWater = /** @class */ (function (_super) {
    __extends(BodyofWater, _super);
    function BodyofWater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BodyofWater.description = "A body of water";
    return BodyofWater;
}(Destination));
exports.BodyofWater = BodyofWater;
var Lake = /** @class */ (function (_super) {
    __extends(Lake, _super);
    function Lake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lake.description = "A large fresh water resovoir";
    return Lake;
}(BodyofWater));
exports.Lake = Lake;
var Pond = /** @class */ (function (_super) {
    __extends(Pond, _super);
    function Pond() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pond.description = "A small fresh water resovoir";
    return Pond;
}(BodyofWater));
exports.Pond = Pond;
var River = /** @class */ (function (_super) {
    __extends(River, _super);
    function River() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    River.description = "A large, long, flowing body of fresh water";
    return River;
}(BodyofWater));
exports.River = River;
var Styx = new River("The River Styx", "");
var Mussup = new River("The River Mussup", "");
var Creek = /** @class */ (function (_super) {
    __extends(Creek, _super);
    function Creek() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Creek.description = "A small, narrow, flowing body of fresh water";
    return Creek;
}(BodyofWater));
exports.Creek = Creek;
var HobbsCrk = new Creek("Hobbs Crk", "");
var ViperStream = new Creek("The Viper Stream", "");
var Sea = /** @class */ (function (_super) {
    __extends(Sea, _super);
    function Sea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sea.description = "A large body of salt water";
    return Sea;
}(BodyofWater));
exports.Sea = Sea;
var BottomlessSea = new Sea("The Bottomless Sea", "");
var SeaOfBlood = new Sea("The Sea of Blood", "");
var VastSea = new Sea("The Vast Sea", "");
var Bay = /** @class */ (function (_super) {
    __extends(Bay, _super);
    function Bay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bay.description = "A small body of salt water";
    return Bay;
}(BodyofWater));
exports.Bay = Bay;
var BayOfPork = new Bay("The Bay of Pork", "");
var SundanceBay = new Bay("The Sundance Bay", "");
var FishingSpot = /** @class */ (function (_super) {
    __extends(FishingSpot, _super);
    function FishingSpot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FishingSpot.description = "A place where you can fish";
    return FishingSpot;
}(SkillingLocation));
exports.FishingSpot = FishingSpot;
var Battlefield = /** @class */ (function (_super) {
    __extends(Battlefield, _super);
    function Battlefield() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Battlefield.description = "A place where a large fight has occured";
    return Battlefield;
}(Destination));
exports.Battlefield = Battlefield;
var Aqueduct = /** @class */ (function (_super) {
    __extends(Aqueduct, _super);
    function Aqueduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aqueduct.description = "A humanoid structure for transporting water suing the power of gravity";
    return Aqueduct;
}(Destination));
exports.Aqueduct = Aqueduct;
var BlackDuct = new Aqueduct("The Black Duct", "");
var Bridge = /** @class */ (function (_super) {
    __extends(Bridge, _super);
    function Bridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bridge.description = "A structure that allows for crossing a body of water";
    return Bridge;
}(Destination));
exports.Bridge = Bridge;
var BlackCrossing = new Bridge("The Black Crossing", "");
var WynganBridge = new Bridge("Wyngan Bridge", "");
// part of The Black Duct
var BrokenBridge = new Bridge("The Broken Bridge", "");
var FlemwaterBridge = new Bridge("The Flemwater Bridge", "");
var StarlitBridge = new Bridge("Starlit Bridge", "");
var SingleCrossing = new Bridge("Single Crossing", "");
//rope bridge
