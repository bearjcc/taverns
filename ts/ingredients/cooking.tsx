// ============================================================================
// Language: TypeScript Extended
// Path: tsx\ingredients\cooking.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================


export class CookingCategory {
    static readonly name: string = "Cooking Category";
    static readonly description: string = "What category a particular food is from";
    name: string;
    description: string;

    constructor(name: string, desc: string) {
        this.name = name;
        this.description = desc;
    }
}

// initiate each CookingCategory object
const alcohol = new CookingCategory("Alcohol", "Can get Humanoids drunk");
const baking = new CookingCategory("Baking", "Baked Goods");
const berry = new CookingCategory("Berry", "Fruit that grows in bushes");
const dairy = new CookingCategory("Dairy", "Milk, Cheese, and Eggs");
const egg = new CookingCategory("Egg", "Unborn Animal in a shell");
const fish = new CookingCategory("Fish", "Something fishy about this");
const fruit = new CookingCategory("Fruit", "A sweet enclosed flower");
const fungus = new CookingCategory("Fungi", "A plant that grows in the soil");
const grain = new CookingCategory("Grain", "Seeds from grass");
const meat = new CookingCategory("Meat", "Parts of a dead animal");
const nut = new CookingCategory("Nut", "A encased seed");
const oil = new CookingCategory("Oil", "Does not mix with water");
const other = new CookingCategory("Other", "Anything that is not listed");
const pasta = new CookingCategory("Pasta", "A dish made of pasta");
const poison = new CookingCategory("Poison", "A deadly substance");
const protein = new CookingCategory("Protein", "Protein is important to grow");
const spice = new CookingCategory("Spice", "A spice that is used in cooking");
const starch = new CookingCategory("Starch", "A substance that is used in cooking");
const sushi = new CookingCategory("Sushi", "A dish made of rice");
const tea = new CookingCategory("Tea", "A drink made from leaves");
const vegetable = new CookingCategory("Vegetable", "A plant that grows in the soil");
const water = new CookingCategory("Water", "A liquid that is used in cooking");



export class CookingIngredient extends Ingredient {
    category: CookingCategory;
    constructor(name: string, category: CookingCategory, sources: Array<Source>, membersOnly: boolean) {
        super(name, "", sources, membersOnly);
        this.category = category;
    }
}

var chickenEgg = new CookingIngredient("Chicken Egg", egg, [Source.Farming], false);
var fishEgg = new CookingIngredient("Fish Egg", egg, [Source.Fishing], true);
var snakeEgg = new CookingIngredient("Snake Egg", egg, [Source.Foraging], false);
var lizardEgg = new CookingIngredient("Lizard Egg", egg, [Source.Foraging], false);
var dragonEgg = new CookingIngredient("Dragon Egg", egg, [Source.Questing], true);
var soySauce = new CookingIngredient("Soy Sauce", spice, [Source.Trading], false);
var cowMilk = new CookingIngredient("Cow Milk", dairy, [Source.Farming], false);
var goatMilk = new CookingIngredient("Goat Milk", dairy, [Source.Farming], true);
var milkOfThePoppy = new CookingIngredient("Milk of the Poppy", spice, [Source.Foraging], true);
var cocoaBeans = new CookingIngredient("Cocoa Beans", spice, [Source.Farming], true);
var coffeeBeans = new CookingIngredient("Coffee Beans", tea, [Source.Farming], true);
var teaLeaves = new CookingIngredient("Tea Leaves", tea, [Source.Farming], false);
var salmon = new CookingIngredient("Salmon", fish, [Source.Fishing], false);
var trout = new CookingIngredient("Trout", fish, [Source.Fishing], false);
var pike = new CookingIngredient("Pike", fish, [Source.Fishing], true);
var carp = new CookingIngredient("Carp", fish, [Source.Fishing], false);
var crayfish = new CookingIngredient("Crayfish", fish, [Source.Fishing], false);
var catfish = new CookingIngredient("Catfish", fish, [Source.Fishing], false);
var lobster = new CookingIngredient("Lobster", fish, [Source.Fishing], false);
var clamMeat = new CookingIngredient("Clam Meat", fish, [Source.Fishing], false);
var shrimp = new CookingIngredient("Shrimp", fish, [Source.Fishing], false);
var sharkMeat = new CookingIngredient("Shark Meat", fish, [Source.Fishing], true);
var beef = new CookingIngredient("Beef", meat, [Source.Farming], false);
var pork = new CookingIngredient("Pork", meat, [Source.Farming], false);
var pigSkin = new CookingIngredient("Pig Skin", other, [Source.Farming], true);
var pigFeet = new CookingIngredient("Pig's Feet", other, [Source.Farming], true);
var sugar = new CookingIngredient("Sugar", baking, [Source.Milling], false);
var seaweed = new CookingIngredient("Seaweed", sushi, [Source.Foraging], true);
var wheat = new CookingIngredient("Wheat", grain, [Source.Farming], false);
var oats = new CookingIngredient("Oats", grain, [Source.Farming], false);
var barley = new CookingIngredient("Barley", grain, [Source.Farming], true);
var rice = new CookingIngredient("Rice", grain, [Source.Farming], false);
var corn = new CookingIngredient("Corn", grain, [Source.Farming], false);
var asparagus = new CookingIngredient("Asparagus", vegetable, [Source.Farming], false);
var vegetableOil = new CookingIngredient("Vegetable Oil", oil, [Source.Distilling], false);
var grapeseedOil = new CookingIngredient("Grapeseed Oil", oil, [Source.Distilling], true);
var oliveOil = new CookingIngredient("Olive Oil", oil, [Source.Distilling], true);
var avocadoOil = new CookingIngredient("Avocado Oil", oil, [Source.Distilling], true);
var peanutOil = new CookingIngredient("Peanut Oil", oil, [Source.Distilling], true);
var stickyOil = new CookingIngredient("Sticky Oil", oil, [Source.Questing], false);
var dragonessence = new CookingIngredient("Dragonessence", oil, [Source.Questing], true);
var basicRedWine = new CookingIngredient("Basic Red Wine", alcohol, [Source.Distilling], false);
var superiorRedWine = new CookingIngredient("Superior Red Wine", alcohol, [Source.Distilling], true);
var basicWhiteWine = new CookingIngredient("Basic White Wine", alcohol, [Source.Distilling], false);
var superiorWhiteWine = new CookingIngredient("Superior White Wine", alcohol, [Source.Distilling], false);
var redCurry = new CookingIngredient("Red Curry", spice, [Source.Trading], false);
var greenCurry = new CookingIngredient("Green Curry", spice, [Source.Trading], false);
var yellowCurry = new CookingIngredient("Yellow Curry", spice, [Source.Trading], false);
var goldenCurry = new CookingIngredient("Golden Curry", spice, [Source.Trading], true);
var soybeans = new CookingIngredient("Soybeans", protein, [Source.Farming], true);
var redBeans = new CookingIngredient("Red Beans", protein, [Source.Foraging], false);
var whiteMushroom = new CookingIngredient("White Mushroom", protein, [Source.Foraging, Source.Farming], false);
var brownMushroom = new CookingIngredient("Brown Mushroom", fungi, [Source.Foraging, Source.Farming], false);
var purpleMushroom = new CookingIngredient("Purple Mushroom", fungi, [Source.Foraging, Source.Farming], true);
var glowingMushrooms = new CookingIngredient("Glowing Mushrooms", fungi, [Source.Foraging, Source.Farming], true);
var morels = new CookingIngredient("Morels", protein, [Source.Foraging, Source.Farming], false);
var redMushrooms = new CookingIngredient("Red Mushrooms", poison, [Source.Foraging], false);
var apples = new CookingIngredient("Apples", fruit, [Source.Farming, Source.Foraging], false);
var pears = new CookingIngredient("Pears", fruit, [Source.Farming], true);
var grapes = new CookingIngredient("Grapes", fruit, [Source.Farming], false);
var avocados = new CookingIngredient("Avocados", fruit, [Source.Farming], true);
var citrus = new CookingIngredient("Citrus", fruit, [Source.Farming], true);
var peanuts = new CookingIngredient("Peanuts", nut, [Source.Farming], false);
var walnuts = new CookingIngredient("Walnuts", nut, [Source.Foraging], false);
var almonds = new CookingIngredient("Almonds", nut, [Source.Farming], true);
var brazilNuts = new CookingIngredient("Brazil Nuts", nut, [Source.Foraging], true);
var chestnuts = new CookingIngredient("Chestnuts", nut, [Source.Questing], false);
var coconut = new CookingIngredient("Coconut", fruit, [Source.Foraging], false);
var carrots = new CookingIngredient("Carrots", vegetable, [Source.Farming], false);
var potatoes = new CookingIngredient("Potatoes", starch, [Source.Farming, Source.Foraging], false);
var beets = new CookingIngredient("Beets", vegetable, [Source.Farming], true);
var eggplant = new CookingIngredient("Eggplant", vegetable, [Source.Farming], true);
var redBerries = new CookingIngredient("Red Berries", berry, [Source.Foraging], false);
var blueberries = new CookingIngredient("Blueberries", berry, [Source.Foraging], false);
var boysenberries = new CookingIngredient("Boysenberries", berry, [Source.Foraging], true);
var snozzberries = new CookingIngredient("Snozzberries", berry, [Source.Foraging], false);
var bananas = new CookingIngredient("Bananas", fruit, [Source.Farming], false);
var cherries = new CookingIngredient("Cherries", fruit, [Source.Questing], false);
var pineapples = new CookingIngredient("Pineapples", fruit, [Source.Foraging], false);
var blackPepper = new CookingIngredient("Black Pepper", spice, [Source.Trading], false);
var bellPepper = new CookingIngredient("Bell Pepper", vegetable, [Source.Farming], false);
var hotPeppers = new CookingIngredient("Hot Peppers", spice, [Source.Farming], false);
var tomatoes = new CookingIngredient("Tomatoes", fruit, [Source.Farming], false);
var lettuce = new CookingIngredient("Lettuce", vegetable, [Source.Farming], false);
var cabbage = new CookingIngredient("Cabbage", vegetable, [Source.Farming], true);
var cauliflower = new CookingIngredient("Cauliflower", vegetable, [Source.Farming], true);
var broccoli = new CookingIngredient("Broccoli", vegetable, [Source.Farming], false);
var rancidMeat = new CookingIngredient("Rancid Meat", protein, [Source.Questing], false);
var questionableMeat = new CookingIngredient("Questionable Meat", protein, [Source.Questing], false);
var dragonmeat = new CookingIngredient("Dragonmeat", protein, [Source.Questing], true);
var grubs = new CookingIngredient("Grubs", protein, [Source.Foraging], false);
var brains = new CookingIngredient("Brains", other, [Source.Foraging], true);
var mealworms = new CookingIngredient("Mealworms", protein, [Source.Foraging], false);
var beetles = new CookingIngredient("Beetles", protein, [Source.Foraging], false);
var fireAnts = new CookingIngredient("Fire Ants", protein, [Source.Foraging], true);
var grayOoze = new CookingIngredient("Gray Ooze", other, [Source.Foraging, Source.Questing], false);
var greenOoze = new CookingIngredient("Green Ooze", other, [Source.Questing], false);
var superiorOoze = new CookingIngredient("Superior Ooze", other, [Source.Questing], true);
var glowworm = new CookingIngredient("Glowworm", protein, [Source.Foraging], false);
var humanoidFlesh = new CookingIngredient("Humanoid Flesh", protein, [Source.ReligiousCeremony], true);
var ginger = new CookingIngredient("Ginger", spice, [Source.Foraging], false);
var chamomile = new CookingIngredient("Chamomile", tea, [Source.Trading], false);
var mint = new CookingIngredient("Mint", spice, [Source.Trading], true);
var cinnamon = new CookingIngredient("Cinnamon", spice, [Source.Foraging], false);
var nutmeg = new CookingIngredient("Nutmeg", spice, [Source.Trading], true);
var cloves = new CookingIngredient("Cloves", spice, [Source.Foraging], false);
var rhubarb = new CookingIngredient("Rhubarb", vegetable, [Source.Trading], true);
var water = new CookingIngredient("Water", water, [Source.Water], false);
var cleanWater = new CookingIngredient("Clean Water", water, [Source.Potions], true);
var purifiedWater = new CookingIngredient("Purified Water", water, [Source.Potions], false);
var deerMeat = new CookingIngredient("Deer Meat", protein, [Source.Hunting], false);
var basil = new CookingIngredient("Basil", spice, [Source.Farming], false);
var sprouts = new CookingIngredient("Sprouts", spice, [Source.Foraging], true);
var wasabi = new CookingIngredient("Wasabi", spice, [Source.Trading], true);
var mapleSap = new CookingIngredient("Maple Sap", other, [Source.Foraging], false);
var acorns = new CookingIngredient("Acorns", other, [Source.Foraging], false);
var vanillaBean = new CookingIngredient("Vanilla Bean", spice, [Source.Farming], true);
var cucumbers = new CookingIngredient("Cucumbers", vegetable, [Source.Farming], false);
var purpleOnion = new CookingIngredient("Purple Onion", vegetable, [Source.Farming], true);
var whiteOnion = new CookingIngredient("White Onion", vegetable, [Source.Farming], false);
var greenOnion = new CookingIngredient("Green Onion", vegetable, [Source.Foraging], false);
var riceFlour = new CookingIngredient("Rice Flour", pasta, [Source.Milling], true);
var wheatFlour = new CookingIngredient("Wheat Flour", pasta, [Source.Milling], false);





