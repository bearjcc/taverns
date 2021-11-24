// ============================================================================
// Language: TypeScript
// Path: ts\rcp_cooking.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

// export class CookingRecipe extends Recipe {
//     constructor(name: string, description: string, level: number = 0, membersOnly: boolean = false) {
//         super(name, description, [], cooking, level, membersOnly);
//     }

//     ingredients: Array<Ingredient>;
//     extras: Array<Ingredient>;
//     locations: Array<Interactable>;
//     items: Array<Item>;
//     notes: string;
// }

// var cookingRecipes: Array<CookingRecipe> = [];

// var PancakeBatter = new CookingRecipe("Pancake Batter", "Ready to make pancakes");
// PancakeBatter.level = 1;
// PancakeBatter.ingredients = [flour, water, oil];
// PancakeBatter.extras = [chocolate];
// PancakeBatter.locations = [stove];
// PancakeBatter.items = [fryingPan];
// PancakeBatter.notes = "";
// cookingRecipes.push(PancakeBatter);

// var Jam = new CookingRecipe("Jam", "A bowl of jam.");
// Jam.level = 1;
// Jam.ingredients = [fruit, sugar];
// Jam.extras = [];
// Jam.locations = [stove];
// Jam.items = [jar];
// Jam.notes = "";
// cookingRecipes.push(Jam);

// var ChiliPowder = new CookingRecipe("Chili Powder", "A bowl of chili powder.");
// ChiliPowder.level = 1;
// ChiliPowder.ingredients = [salt, dryedChili];
// ChiliPowder.extras = [];
// ChiliPowder.locations = [];
// ChiliPowder.items = [mortarAndPestle];
// ChiliPowder.notes = "";
// cookingRecipes.push(ChiliPowder);

// var Chocolate = new CookingRecipe("Chocolate", "A cup of chocolate.");
// Chocolate.level = 1;
// Chocolate.ingredients = [cocoa, sugar];
// Chocolate.extras = [];
// Chocolate.locations = [stove];
// Chocolate.items = [fryingPan];
// Chocolate.notes = "";
// cookingRecipes.push(Chocolate);

// var FriedEgg = new CookingRecipe("Fried Egg", "A fried egg.");
// FriedEgg.level = 1;
// FriedEgg.ingredients = [egg, oil];
// FriedEgg.extras = [];
// FriedEgg.locations = [stove];
// FriedEgg.items = [fryingPan];
// FriedEgg.notes = "";
// cookingRecipes.push(FriedEgg);

// var Omevar = new CookingRecipe("Omelet", "A omelet.");
// Omelet.level = 1;
// Omelet.ingredients = [egg, oil];
// Omelet.extras = [];
// Omelet.locations = [stove];
// Omelet.items = [fryingPan];
// Omelet.notes = "";
// cookingRecipes.push(Omelet);

// var ScrambledEgg = new CookingRecipe("Scrambled Egg", "A scrambled egg.");
// ScrambledEgg.level = 1;
// ScrambledEgg.ingredients = [egg, oil];
// ScrambledEgg.extras = [];
// ScrambledEgg.locations = [stove];
// ScrambledEgg.items = [fryingPan];
// ScrambledEgg.notes = "";
// cookingRecipes.push(ScrambledEgg);

// var PoachedEgg = new CookingRecipe("Poached Egg", "A poached egg.");
// PoachedEgg.level = 1;
// PoachedEgg.ingredients = [egg, oil];
// PoachedEgg.extras = [];
// PoachedEgg.locations = [stove];
// PoachedEgg.items = [fryingPan];
// PoachedEgg.notes = "";
// cookingRecipes.push(PoachedEgg);

// var Pickle = new CookingRecipe("Pickle", "A bowl of pickle.");
// Pickle.level = 1;
// Pickle.ingredients = [pickleSauce, water];
// Pickle.extras = [];
// Pickle.locations = [stove];
// Pickle.items = [fryingPan];
// Pickle.notes = "";
// cookingRecipes.push(Pickle);

// var Pancake = new CookingRecipe("Pancake", "A pancake.");
// Pancake.level = 1;
// Pancake.ingredients = [flour, water, oil];
// Pancake.extras = [];
// Pancake.locations = [stove];
// Pancake.items = [fryingPan];
// Pancake.notes = "";
// cookingRecipes.push(Pancake);

// var CrushedIce = new CookingRecipe("Crushed Ice", "A crushed ice cube.");
// CrushedIce.level = 0;
// CrushedIce.ingredients = [ice];
// CrushedIce.extras = [];
// CrushedIce.locations = null;
// CrushedIce.items = [];
// CrushedIce.notes = "";
// cookingRecipes.push(CrushedIce);

// var Granola = new CookingRecipe("Granola", "A bowl of granola.");
// Granola.level = 0;
// Granola.ingredients = [oats, Nuts, Honey];
// Granola.extras = [];
// Granola.locations = null;
// Granola.items = [];
// Granola.notes = "";
// cookingRecipes.push(Granola);

// var BreadDough = new CookingRecipe("Bread Dough", "A loaf of bread dough.");
// BreadDough.level = 0;
// BreadDough.ingredients = [wheatflour, water];
// BreadDough.extras = [];
// BreadDough.locations = [oven];
// BreadDough.items = [breadtin];
// BreadDough.notes = "";
// cookingRecipes.push(BreadDough);

// var RawNoodles = new CookingRecipe("Raw Noodles", "A bowl of raw noodles.");
// RawNoodles.level = 0;
// RawNoodles.ingredients = [wheatflour, Eggs, water];
// RawNoodles.extras = [];
// RawNoodles.locations = null;
// RawNoodles.items = [];
// RawNoodles.notes = "";
// cookingRecipes.push(RawNoodles);

// var RawRiceNoodles = new CookingRecipe("Raw Rice Noodles", "A bowl of raw rice noodles.");
// RawRiceNoodles.level = 0;
// RawRiceNoodles.ingredients = [riceflour, water];
// RawRiceNoodles.extras = [];
// RawRiceNoodles.locations = null;
// RawRiceNoodles.items = [];
// RawRiceNoodles.notes = "";
// cookingRecipes.push(RawRiceNoodles);

// var CookedRice = new CookingRecipe("Cooked Rice", "A bowl of cooked rice.");
// CookedRice.level = 0;
// CookedRice.ingredients = [rice, water];
// CookedRice.extras = [];
// CookedRice.locations = [fire, Stove];
// CookedRice.items = [pot];
// CookedRice.notes = "";
// cookingRecipes.push(CookedRice);

// var Batter = new CookingRecipe("Batter", "A bowl of batter.");
// Batter.level = 0;
// Batter.ingredients = [wheatflour, Eggs, water];
// Batter.extras = [];
// Batter.locations = null;
// Batter.items = [];
// Batter.notes = "";
// cookingRecipes.push(Batter);

// var Tofu = new CookingRecipe("Tofu", "A bowl of tofu.");
// Tofu.level = 0;
// Tofu.ingredients = [soy];
// Tofu.extras = [];
// Tofu.locations = null;
// Tofu.items = [];
// Tofu.notes = "";
// cookingRecipes.push(Tofu);

// var Broth = new CookingRecipe("Broth", "A bowl of broth.");
// Broth.level = 0;
// Broth.ingredients = [water];
// Broth.extras = [];
// Broth.locations = null;
// Broth.items = [];
// Broth.notes = "";
// cookingRecipes.push(Broth);

// var Tortilla = new CookingRecipe("Tortilla", "A tortilla.");
// Tortilla.level = 0;
// Tortilla.ingredients = [wheatflour, water];
// Tortilla.extras = [];
// Tortilla.locations = null;
// Tortilla.items = [];
// Tortilla.notes = "";
// cookingRecipes.push(Tortilla);

// var PieFilling = new CookingRecipe("Pie Filling", "A pie filling.");
// PieFilling.level = 0;
// PieFilling.ingredients = [fruit, sugar];
// PieFilling.extras = [];
// PieFilling.locations = null;
// PieFilling.items = [];
// PieFilling.notes = "";
// cookingRecipes.push(PieFilling);

// var PizzaDough = new CookingRecipe("Pizza Dough", "A pizza dough.");
// PizzaDough.level = 0;
// PizzaDough.ingredients = [wheatflour, water];
// PizzaDough.extras = [];
// PizzaDough.locations = null;
// PizzaDough.items = [];
// PizzaDough.notes = "";
// cookingRecipes.push(PizzaDough);

// var PastryDough = new CookingRecipe("Pastry Dough", "A pastry dough.");
// PastryDough.level = 0;
// PastryDough.ingredients = [wheatflour, water];
// PastryDough.extras = [];
// PastryDough.locations = null;
// PastryDough.items = [];
// PastryDough.notes = "";

// // Dairy Products

// var IceCream = new CookingRecipe("Ice Cream", "A bowl of ice cream.");
// IceCream.level = 0;
// IceCream.ingredients = [milk];
// IceCream.extras = [];
// IceCream.locations = null;
// IceCream.items = [];
// IceCream.notes = "";
// cookingRecipes.push(IceCream);

// var GoatCheese = new CookingRecipe("Goat Cheese", "A bowl of goat cheese.");
// GoatCheese.level = 0;
// GoatCheese.ingredients = [goatmilk];
// GoatCheese.extras = [];
// GoatCheese.locations = null;
// GoatCheese.items = [];
// GoatCheese.notes = "";
// cookingRecipes.push(GoatCheese);

// var Butter = new CookingRecipe("Butter", "A bowl of butter.");
// Butter.level = 0;
// Butter.ingredients = [milk];
// Butter.extras = [];
// Butter.locations = null;
// Butter.items = [];
// Butter.notes = "";
// cookingRecipes.push(Butter);

// var Cream = new CookingRecipe("Cream", "A bowl of cream.");
// Cream.level = 0;
// Cream.ingredients = [milk];
// Cream.extras = [];
// Cream.locations = null;
// Cream.items = [];
// Cream.notes = "";
// cookingRecipes.push(Cream);

// var SourCream = new CookingRecipe("Sour Cream", "A bowl of sour cream.");
// SourCream.level = 0;
// SourCream.ingredients = [milk];
// SourCream.extras = [];
// SourCream.locations = null;
// SourCream.items = [];
// SourCream.notes = "";
// cookingRecipes.push(SourCream);

// var Cheese = new CookingRecipe("Cheese", "A bowl of cheese.");
// Cheese.level = 0;
// Cheese.ingredients = [milk];
// Cheese.extras = [];
// Cheese.locations = null;
// Cheese.items = [];
// Cheese.notes = "";
// cookingRecipes.push(Cheese);

// var WhippedCream = new CookingRecipe("Whipped Cream", "A bowl of whipped cream.");
// WhippedCream.level = 0;
// WhippedCream.ingredients = [milk];
// WhippedCream.extras = [];
// WhippedCream.locations = null;
// WhippedCream.items = [];
// WhippedCream.notes = "";
// cookingRecipes.push(WhippedCream);

// var Yogurt = new CookingRecipe("Yogurt", "A bowl of yogurt.");
// Yogurt.level = 0;
// Yogurt.ingredients = [milk];
// Yogurt.extras = [];
// Yogurt.locations = null;
// Yogurt.items = [];
// Yogurt.notes = "";

// // Condiments and Seasonings

// var Wasabi = new CookingRecipe("Wasabi", "A bowl of wasabi.");
// Wasabi.level = 0;
// Wasabi.ingredients = [];
// Wasabi.extras = [];
// Wasabi.locations = null;
// Wasabi.items = [];
// Wasabi.notes = "for sushi";
// cookingRecipes.push(Wasabi);

// var GroundGinger = new CookingRecipe("Ground Ginger", "A bowl of ground ginger.");
// GroundGinger.level = 0;
// GroundGinger.ingredients = [];
// GroundGinger.extras = [];
// GroundGinger.locations = null;
// GroundGinger.items = [];
// GroundGinger.notes = "for sushi";
// cookingRecipes.push(GroundGinger);

// var Syrup = new CookingRecipe("Syrup", "A bowl of syrup.");
// Syrup.level = 0;
// Syrup.ingredients = [];
// Syrup.extras = [];
// Syrup.locations = null;
// Syrup.items = [];
// Syrup.notes = "";
// cookingRecipes.push(Syrup);

// var Guacamole = new CookingRecipe("Guacamole", "A bowl of guacamole.");
// Guacamole.level = 0;
// Guacamole.ingredients = [avocados];
// Guacamole.extras = [];
// Guacamole.locations = null;
// Guacamole.items = [];
// Guacamole.notes = "";
// cookingRecipes.push(Guacamole);

// var Salsa = new CookingRecipe("Salsa", "A bowl of salsa.");
// Salsa.level = 0;
// Salsa.ingredients = [tomatoes];
// Salsa.extras = [];
// Salsa.locations = null;
// Salsa.items = [];
// Salsa.notes = "";
// cookingRecipes.push(Salsa);

// var PeanutButter = new CookingRecipe("Peanut Butter", "A bowl of peanut butter.");
// PeanutButter.level = 0;
// PeanutButter.ingredients = [peanuts];
// PeanutButter.extras = [];
// PeanutButter.locations = null;
// PeanutButter.items = [];
// PeanutButter.notes = "";
// cookingRecipes.push(PeanutButter);

// var Jellies = new CookingRecipe("Jellies", "A bowl of jellies.");
// Jellies.level = 0;
// Jellies.ingredients = [fruit, sugar];
// Jellies.extras = [];
// Jellies.locations = null;
// Jellies.items = [];
// Jellies.notes = "";
// cookingRecipes.push(Jellies);

// var Mayonnaise = new CookingRecipe("Mayonnaise", "A bowl of mayonnaise.");
// Mayonnaise.level = 0;
// Mayonnaise.ingredients = [];
// Mayonnaise.extras = [];
// Mayonnaise.locations = null;
// Mayonnaise.items = [];
// Mayonnaise.notes = "";
// cookingRecipes.push(Mayonnaise);

// var Ketchup = new CookingRecipe("Ketchup", "A bowl of ketchup.");
// Ketchup.level = 0;
// Ketchup.ingredients = [tomatoes, Vinegar, sugar];
// Ketchup.extras = [];
// Ketchup.locations = null;
// Ketchup.items = [];
// Ketchup.notes = "";
// cookingRecipes.push(Ketchup);

// var ChiliFlakes = new CookingRecipe("Chili Flakes", "A bowl of chili flakes.");
// ChiliFlakes.level = 0;
// ChiliFlakes.ingredients = [hotpeppers];
// ChiliFlakes.extras = [];
// ChiliFlakes.locations = null;
// ChiliFlakes.items = [];
// ChiliFlakes.notes = "Needs to me prepped and dried";
// cookingRecipes.push(ChiliFlakes);

// // Pasta Dishes

// var PlainPasta = new CookingRecipe("Plain Pasta", "A bowl of plain pasta.");
// PlainPasta.level = 0;
// PlainPasta.ingredients = [rawNoodles, water];
// PlainPasta.extras = [cheese];
// PlainPasta.locations = [fire, Stove];
// PlainPasta.items = [pot];
// PlainPasta.notes = "";
// cookingRecipes.push(PlainPasta);

// var PastaAndSauce = new CookingRecipe("Pasta and Sauce", "A bowl of pasta and sauce.");
// PastaAndSauce.level = 0;
// PastaAndSauce.ingredients = [rawNoodles, water, Tomatoes];
// PastaAndSauce.extras = [cheese];
// PastaAndSauce.locations = [fire, Stove];
// PastaAndSauce.items = [pot];
// PastaAndSauce.notes = "";
// cookingRecipes.push(PastaAndSauce);

// var PastaSauceMeat = new CookingRecipe("Pasta, Sauce, and Meat", "A bowl of pasta, sauce, and meat.");
// PastaSauceMeat.level = 0;
// PastaSauceMeat.ingredients = [rawNoodles, water, Meat, Tomatoes];
// PastaSauceMeat.extras = [cheese];
// PastaSauceMeat.locations = [fire, Stove];
// PastaSauceMeat.items = [pot];
// PastaSauceMeat.notes = "";
// cookingRecipes.push(PastaSauceMeat);

// var MacNCheese = new CookingRecipe("Mac 'n' Cheese", "A bowl of mac 'n' cheese.");
// MacNCheese.level = 0;
// MacNCheese.ingredients = [rawNoodles, water, Cheese];
// MacNCheese.extras = [bacon];
// MacNCheese.locations = [fire, Stove];
// MacNCheese.items = [pot];
// MacNCheese.notes = "";
// cookingRecipes.push(MacNCheese);

// var Carbonara = new CookingRecipe("Carbonara", "A bowl of carbonara.");
// Carbonara.level = 0;
// Carbonara.ingredients = [rawNoodles, Bacon, Egg];
// Carbonara.extras = [];
// Carbonara.locations = [fire, Stove];
// Carbonara.items = [pot];
// Carbonara.notes = "";
// cookingRecipes.push(Carbonara);

// var BeefStroganoff = new CookingRecipe("Beef Stroganoff", "A bowl of beef stroganoff.");
// BeefStroganoff.level = 0;
// BeefStroganoff.ingredients = [beef, RawNoodles, water];
// BeefStroganoff.extras = [];
// BeefStroganoff.locations = [fire, Stove];
// BeefStroganoff.items = [pot];
// BeefStroganoff.notes = "";
// cookingRecipes.push(BeefStroganoff);

// var Lasagna = new CookingRecipe("Lasagna", "A bowl of lasagna.");
// Lasagna.level = 0;
// Lasagna.ingredients = [rawNoodles, water, Beef, Cheese, Tomatoes];
// Lasagna.extras = [];
// Lasagna.locations = [oven];
// Lasagna.items = [];
// Lasagna.notes = "";

// // Soups and Stews

// var ClamChowder = new CookingRecipe("Clam Chowder", "A bowl of clam chowder.");
// ClamChowder.level = 0;
// ClamChowder.ingredients = [clams];
// ClamChowder.extras = [];
// ClamChowder.locations = [];
// ClamChowder.items = [];
// ClamChowder.notes = "";
// cookingRecipes.push(ClamChowder);

// var LobsterBisque = new CookingRecipe("Lobster Bisque", "A bowl of lobster bisque.");
// LobsterBisque.level = 0;
// LobsterBisque.ingredients = [lobsters];
// LobsterBisque.extras = [];
// LobsterBisque.locations = [];
// LobsterBisque.items = [];
// LobsterBisque.notes = "";
// cookingRecipes.push(LobsterBisque);

// var CornChowder = new CookingRecipe("Corn Chowder", "A bowl of corn chowder.");
// CornChowder.level = 0;
// CornChowder.ingredients = [];
// CornChowder.extras = [];
// CornChowder.locations = [];
// CornChowder.items = [];
// CornChowder.notes = "";
// cookingRecipes.push(CornChowder);

// var Chili = new CookingRecipe("Chili", "A bowl of chili.");
// Chili.level = 0;
// Chili.ingredients = [beef, Beans, HotPeppers];
// Chili.extras = [cheese, SourCream];
// Chili.locations = [];
// Chili.items = [];
// Chili.notes = "";
// cookingRecipes.push(Chili);

// var ChickenNoodleSoup = new CookingRecipe("Chicken Noodle Soup", "A bowl of chicken noodle soup.");
// ChickenNoodleSoup.level = 0;
// ChickenNoodleSoup.ingredients = [chicken, RawNoodles, Broth];
// ChickenNoodleSoup.extras = [];
// ChickenNoodleSoup.locations = [];
// ChickenNoodleSoup.items = [];
// ChickenNoodleSoup.notes = "";

// // Sandwiches

// var BLT = new CookingRecipe("BLT", "A BLT sandwich.");
// BLT.level = 0;
// BLT.ingredients = [bacon, Lettuce, Tomato, Bread];
// BLT.extras = [mayonnaise, Avocado];
// BLT.locations = [];
// BLT.items = [];
// BLT.notes = "";
// cookingRecipes.push(BLT);

// var Burger = new CookingRecipe("Burger", "A burger.");
// Burger.level = 0;
// Burger.ingredients = [bread, Beef];
// Burger.extras = [cheese, Ketchup, Lettuce, Tomatoes, Mayonnaise];
// Burger.locations = [fire, Stove];
// Burger.items = [fryingPan];
// Burger.notes = "";
// cookingRecipes.push(Burger);

// var Toasties = new CookingRecipe("Toasties", "A bowl of toasties.");
// Toasties.level = 0;
// Toasties.ingredients = [bread, Cheese];
// Toasties.extras = [avocado, Bacon, Tomatoes];
// Toasties.locations = [fire, Stove];
// Toasties.items = [fryingPan];
// Toasties.notes = "";
// cookingRecipes.push(Toasties);

// var PBJ = new CookingRecipe("PB&J", "A bowl of PB&J.");
// PBJ.level = 0;
// PBJ.ingredients = [bread, PeanutButter, Jelly];
// PBJ.extras = [];
// PBJ.locations = [];
// PBJ.items = [];
// PBJ.notes = "";
// cookingRecipes.push(PBJ);

// var LettuceWrap = new CookingRecipe("Lettuce Wraps", "A bowl of lettuce wraps.");
// LettuceWrap.level = 0;
// LettuceWrap.ingredients = [lettuce, Protein];
// LettuceWrap.extras = [mayonnaise, Cheese, Tomato, SoySauce];
// LettuceWrap.locations = [];
// LettuceWrap.items = [];
// LettuceWrap.notes = "";

// // Drinks

// var Coffee = new CookingRecipe("Coffee", "A cup of coffee.");
// Coffee.level = 0;
// Coffee.ingredients = [coffeeBeans, water];
// Coffee.extras = [cream, sugar, Chocolate];
// Coffee.locations = [fire, Stove];
// Coffee.items = [];
// Coffee.notes = "+ energy";
// cookingRecipes.push(Coffee);

// var Milkshake = new CookingRecipe("Milkshake", "A milkshake.");
// Milkshake.level = 0;
// Milkshake.ingredients = [iceCream, Milk];
// Milkshake.extras = [chocolate, Berries, Vanilla];
// Milkshake.locations = [];
// Milkshake.items = [];
// Milkshake.notes = "";
// cookingRecipes.push(Milkshake);

// var ChocolateMilk = new CookingRecipe("Chocolate Milk", "A chocolate milk.");
// ChocolateMilk.level = 0;
// ChocolateMilk.ingredients = [milk, Chocolate];
// ChocolateMilk.extras = [];
// ChocolateMilk.locations = [];
// ChocolateMilk.items = [];
// ChocolateMilk.notes = "";
// cookingRecipes.push(ChocolateMilk);

// var Tea = new CookingRecipe("Tea", "A cup of tea.");
// Tea.level = 0;
// Tea.ingredients = [teaLeaves, water];
// Tea.extras = [honey, sugar, Milk];
// Tea.locations = [fire, Stove];
// Tea.items = [];
// Tea.notes = "+energy OR +stress relief";
// cookingRecipes.push(Tea);

// // Other Humanoid Recipes

// var BoiledEgg = new CookingRecipe("Boiled Eggs", "A bowl of boiled eggs.");
// BoiledEgg.level = 0;
// BoiledEgg.ingredients = [egg, water];
// BoiledEgg.extras = [];
// BoiledEgg.locations = [fire, Stove];
// BoiledEgg.items = [];
// BoiledEgg.notes = "";
// cookingRecipes.push(BoiledEgg);

// var NutsNBerries = new CookingRecipe("Nuts 'n' Berries", "A bowl of nuts 'n' berries.");
// NutsNBerries.level = 0;
// NutsNBerries.ingredients = [nuts, Berries];
// NutsNBerries.extras = [chocolate, Granola];
// NutsNBerries.locations = [];
// NutsNBerries.items = [bowl];
// NutsNBerries.notes = "Non-perishable";
// cookingRecipes.push(NutsNBerries);

// var Cake = new CookingRecipe("Cake", "A cake.");
// Cake.level = 0;
// Cake.ingredients = [wheatflour, Milk, Eggs];
// Cake.extras = [chocolate];
// Cake.locations = [oven];
// Cake.items = [bowl, CakeTin];
// Cake.notes = "";
// cookingRecipes.push(Cake);

// var Pizza = new CookingRecipe("Pizza", "A pizza.");
// Pizza.level = 0;
// Pizza.ingredients = [pizzaDough, Tomatoes, Cheese];
// Pizza.extras = [protein, Herbs];
// Pizza.locations = [oven];
// Pizza.items = [];
// Pizza.notes = "";
// cookingRecipes.push(Pizza);

// var FruitSalad = new CookingRecipe("Fruit Salad", "A bowl of fruit salad.");
// FruitSalad.level = 0;
// FruitSalad.ingredients = [fruit];
// FruitSalad.extras = [];
// FruitSalad.locations = [];
// FruitSalad.items = [bowl];
// FruitSalad.notes = "Requires _#_ fruits or the more fruits used, the more health/energy it provides";
// cookingRecipes.push(FruitSalad);

// var BananaBread = new CookingRecipe("Banana Bread", "A loaf of banana bread.");
// BananaBread.level = 0;
// BananaBread.ingredients = [wheatflour, Eggs, Bananas];
// BananaBread.extras = [walnuts];
// BananaBread.locations = [oven];
// BananaBread.items = [bowl, BreadTin];
// BananaBread.notes = "";
// cookingRecipes.push(BananaBread);

// var BakedPotato = new CookingRecipe("Baked Potato", "A baked potato.");
// BakedPotato.level = 0;
// BakedPotato.ingredients = [potato];
// BakedPotato.extras = [butter, Cheese, Chili, Chives, SourCream];
// BakedPotato.locations = [];
// BakedPotato.items = [];
// BakedPotato.notes = "";
// cookingRecipes.push(BakedPotato);

// var CurryRice = new CookingRecipe("Curry and Rice", "A bowl of curry and rice.");
// CurryRice.level = 0;
// CurryRice.ingredients = [cookedRice, Protein, CurryPowder, water];
// CurryRice.extras = [chiliFlakes, Vegetables];
// CurryRice.locations = [];
// CurryRice.items = [];
// CurryRice.notes = "";
// cookingRecipes.push(CurryRice);

// var Jerky = new CookingRecipe("Jerky", "A piece of smoked meat.");
// Jerky.level = 0;
// Jerky.ingredients = [meat];
// Jerky.extras = [];
// Jerky.locations = [];
// Jerky.items = [];
// Jerky.notes = "Needs to be smoked, salted, or dried; non-perishable";
// cookingRecipes.push(Jerky);

// var Sushi = new CookingRecipe("Sushi", "A bowl of sushi.");
// Sushi.level = 0;
// Sushi.ingredients = [fish, Seaweed, CookedRice];
// Sushi.extras = [wasabi, Ginger, SoySauce];
// Sushi.locations = [];
// Sushi.items = [];
// Sushi.notes = "";
// cookingRecipes.push(Sushi);

// var FrenchFries = new CookingRecipe("French Fries", "A bowl of french fries.");
// FrenchFries.level = 0;
// FrenchFries.ingredients = [potatoes, oil];
// FrenchFries.extras = [mayonnaise, Ketchup];
// FrenchFries.locations = [];
// FrenchFries.items = [];
// FrenchFries.notes = "";
// cookingRecipes.push(FrenchFries);

// var SausageAndPeppers = new CookingRecipe("Sausage and Peppers", "A bowl of sausage and peppers.");
// SausageAndPeppers.level = 0;
// SausageAndPeppers.ingredients = [pork, BellPeppers];
// SausageAndPeppers.extras = [chiliFlakes, CookedPasta];
// SausageAndPeppers.locations = [];
// SausageAndPeppers.items = [];
// SausageAndPeppers.notes = "";
// cookingRecipes.push(SausageAndPeppers);

// var Coleslaw = new CookingRecipe("Coleslaw", "A bowl of coleslaw.");
// Coleslaw.level = 0;
// Coleslaw.ingredients = [cabbage];
// Coleslaw.extras = [];
// Coleslaw.locations = [];
// Coleslaw.items = [];
// Coleslaw.notes = "";
// cookingRecipes.push(Coleslaw);

// var SteakAndPotatoes = new CookingRecipe("Steak and Potatoes", "A bowl of steak and potatoes.");
// SteakAndPotatoes.level = 0;
// SteakAndPotatoes.ingredients = [beef, Potatoes];
// SteakAndPotatoes.extras = [];
// SteakAndPotatoes.locations = [];
// SteakAndPotatoes.items = [];
// SteakAndPotatoes.notes = "";
// cookingRecipes.push(SteakAndPotatoes);

// var Ratatouille = new CookingRecipe("Ratatouille", "A bowl of ratatouille.");
// Ratatouille.level = 0;
// Ratatouille.ingredients = [];
// Ratatouille.extras = [];
// Ratatouille.locations = [];
// Ratatouille.items = [];
// Ratatouille.notes = "";
// cookingRecipes.push(Ratatouille);

// var Gumbo = new CookingRecipe("Gumbo", "A bowl of gumbo.");
// Gumbo.level = 0;
// Gumbo.ingredients = [];
// Gumbo.extras = [];
// Gumbo.locations = [];
// Gumbo.items = [];
// Gumbo.notes = "";
// cookingRecipes.push(Gumbo);

// var RoastedVegetables = new CookingRecipe("Roasted Vegetables", "A bowl of roasted vegetables.");
// RoastedVegetables.level = 0;
// RoastedVegetables.ingredients = [vegetables];
// RoastedVegetables.extras = [];
// RoastedVegetables.locations = [];
// RoastedVegetables.items = [];
// RoastedVegetables.notes = "Requires _#_ vegetables or the more vegetables used, the more health/energy it provides";
// cookingRecipes.push(RoastedVegetables);

// var Bruschetta = new CookingRecipe("Bruschetta", "A bowl of bruschetta.");
// Bruschetta.level = 0;
// Bruschetta.ingredients = [bread, Tomato, Cheese];
// Bruschetta.extras = [basilLeaves, BalsamicVinaigrette];
// Bruschetta.locations = [];
// Bruschetta.items = [];
// Bruschetta.notes = "";
// cookingRecipes.push(Bruschetta);

// var StuffedShrooms = new CookingRecipe("Stuffed 'Shrooms", "A bowl of stuffed shrooms.");
// StuffedShrooms.level = 0;
// StuffedShrooms.ingredients = [mushrooms, Protein];
// StuffedShrooms.extras = [algaePaste, Cheese];
// StuffedShrooms.locations = [];
// StuffedShrooms.items = [];
// StuffedShrooms.notes = "";
// cookingRecipes.push(StuffedShrooms);

// var EggRolls = new CookingRecipe("Egg Rolls", "A bowl of egg rolls.");
// EggRolls.level = 0;
// EggRolls.ingredients = [];
// EggRolls.extras = [];
// EggRolls.locations = [];
// EggRolls.items = [];
// EggRolls.notes = "";
// cookingRecipes.push(EggRolls);

// var EggSalad = new CookingRecipe("Egg Salad", "A bowl of egg salad.");
// EggSalad.level = 0;
// EggSalad.ingredients = [eggs, Mayonnaise];
// EggSalad.extras = [chiliFlakes, Bread];
// EggSalad.locations = [];
// EggSalad.items = [];
// EggSalad.notes = "";
// cookingRecipes.push(EggSalad);

// var StirFry = new CookingRecipe("Stir Fry", "A bowl of stir fry.");
// StirFry.level = 0;
// StirFry.ingredients = [protein, Vegetables, SoySauce];
// StirFry.extras = [chiliFlakes, CookedRice, Noodles];
// StirFry.locations = [fire, Stove];
// StirFry.items = [];
// StirFry.notes = "";
// cookingRecipes.push(StirFry);

// var SteakAndEggs = new CookingRecipe("Steak and Eggs", "A bowl of steak and eggs.");
// SteakAndEggs.level = 0;
// StirFry.ingredients = [beef, Eggs];
// StirFry.extras = [];
// StirFry.locations = [];
// StirFry.items = [];
// StirFry.notes = "";
// cookingRecipes.push(SteakAndEggs);

// var HamAndEggs = new CookingRecipe("Ham and Eggs", "A bowl of ham and eggs.");
// HamAndEggs.level = 0;
// HamAndEggs.ingredients = [ham, Eggs];
// HamAndEggs.extras = [];
// HamAndEggs.locations = [];
// HamAndEggs.items = [];
// HamAndEggs.notes = "";
// cookingRecipes.push(HamAndEggs);

// var ChickenAndRice = new CookingRecipe("Chicken 'n' Rice", "A bowl of chicken 'n' rice.");
// ChickenAndRice.level = 0;
// ChickenAndRice.ingredients = [chicken, CookedRice];
// ChickenAndRice.extras = [cheese];
// ChickenAndRice.locations = [];
// ChickenAndRice.items = [];
// ChickenAndRice.notes = "";
// cookingRecipes.push(ChickenAndRice);

// var CabbageRolls = new CookingRecipe("Cabbage Rolls", "A bowl of cabbage rolls.");
// CabbageRolls.level = 0;
// CabbageRolls.ingredients = [];
// CabbageRolls.extras = [];
// CabbageRolls.locations = [];
// CabbageRolls.items = [];
// CabbageRolls.notes = "";
// cookingRecipes.push(CabbageRolls);

// var Pho = new CookingRecipe("Pho", "A bowl of pho.");
// Pho.level = 0;
// Pho.ingredients = [protein, CookedRiceNoodles, Broth];
// Pho.extras = [chiliFlakes, Basil];
// Pho.locations = [];
// Pho.items = [];
// Pho.notes = "";
// cookingRecipes.push(Pho);

// var RiceAndBeans = new CookingRecipe("Rice and Beans", "A bowl of rice and beans.");
// RiceAndBeans.level = 0;
// RiceAndBeans.ingredients = [cookedRice, Beans];
// RiceAndBeans.extras = [chiliflakes];
// RiceAndBeans.locations = [];
// RiceAndBeans.items = [];
// RiceAndBeans.notes = "";
// cookingRecipes.push(RiceAndBeans);

// var CornBread = new CookingRecipe("Corn Bread", "A bowl of corn bread.");
// CornBread.level = 0;
// CornBread.ingredients = [wheatflour, Cornmeal, EggsOrMilk];
// CornBread.extras = [cornKernels, ChiliFlakes];
// CornBread.locations = [];
// CornBread.items = [];
// CornBread.notes = "";
// cookingRecipes.push(CornBread);

// var Oatmeal = new CookingRecipe("Oatmeal", "A bowl of oatmeal.");
// Oatmeal.level = 0;
// Oatmeal.ingredients = [oats, water];
// Oatmeal.extras = [honey, Milk, Cream, sugar, Fruit, PeanutButter];
// Oatmeal.locations = [fire, Stove];
// Oatmeal.items = [pot];
// Oatmeal.notes = "";
// cookingRecipes.push(Oatmeal);

// var FruitSnack = new CookingRecipe("Fruit Snack", "A bowl of fruit snack.");
// FruitSnack.level = 0;
// FruitSnack.ingredients = [fruit];
// FruitSnack.extras = [];
// FruitSnack.locations = [];
// FruitSnack.items = [];
// FruitSnack.notes = "";
// cookingRecipes.push(FruitSnack);

// var Meatloaf = new CookingRecipe("Meatloaf", "A bowl of meatloaf.");
// Meatloaf.level = 0;
// Meatloaf.ingredients = [beef];
// Meatloaf.extras = [ketchup, Eggs];
// Meatloaf.locations = [];
// Meatloaf.items = [];
// Meatloaf.notes = "";
// cookingRecipes.push(Meatloaf);

// var FishAndFungi = new CookingRecipe("Fish 'n' Fungi", "A bowl of fish 'n' fungi.");
// FishAndFungi.level = 0;
// FishAndFungi.ingredients = [fish, Mushrooms];
// FishAndFungi.extras = [];
// FishAndFungi.locations = [];
// FishAndFungi.items = [];
// FishAndFungi.notes = "";
// cookingRecipes.push(FishAndFungi);

// var AvocadoToast = new CookingRecipe("Avocado Toast", "A bowl of avocado toast.");
// AvocadoToast.level = 0;
// AvocadoToast.ingredients = [avocados, Bread];
// AvocadoToast.extras = [sprouts, ChiliFlakes];
// AvocadoToast.locations = [];
// AvocadoToast.items = [];
// AvocadoToast.notes = "";
// cookingRecipes.push(AvocadoToast);

// var Waffles = new CookingRecipe("Waffles", "A bowl of waffles.");
// Waffles.level = 0;
// Waffles.ingredients = [wheatflour, Eggs];
// Waffles.extras = [whippedCream, Fruit, Syrup, Butter];
// Waffles.locations = [];
// Waffles.items = [];
// Waffles.notes = "";
// cookingRecipes.push(Waffles);

// var YogurtParfait = new CookingRecipe("Yogurt Parfait", "A bowl of yogurt parfait.");
// YogurtParfait.level = 0;
// YogurtParfait.ingredients = [yogurt, Berries];
// YogurtParfait.extras = [granola, Honey];
// YogurtParfait.locations = [];
// YogurtParfait.items = [];
// YogurtParfait.notes = "";
// cookingRecipes.push(YogurtParfait);

// var Pie = new CookingRecipe("Pie", "A bowl of pie.");
// Pie.level = 0;
// Pie.ingredients = [pastryDough, Filling];
// Pie.extras = [];
// Pie.locations = [oven];
// Pie.items = [pietin];
// Pie.notes = "";
// cookingRecipes.push(Pie);

// var Quesadillas = new CookingRecipe("Quesadillas", "A bowl of quesadillas.");
// Quesadillas.level = 0;
// Quesadillas.ingredients = [protein, Cheese, Veggies, Tortilla];
// Quesadillas.extras = [chiliFlakes, Chives, SourCream, Guacamole, Salsa, Beans];
// Quesadillas.locations = [];
// Quesadillas.items = [];
// Quesadillas.notes = "";
// cookingRecipes.push(Quesadillas);

// var RawMeat = new CookingRecipe("Raw Meat", "A bowl of raw meat.");
// RawMeat.level = 0;
// RawMeat.ingredients = [rawmeat];
// RawMeat.extras = [];
// RawMeat.locations = [];
// RawMeat.items = [];
// RawMeat.notes = "May cause illness (depending on species)";
// cookingRecipes.push(RawMeat);

// var GrilledProtein = new CookingRecipe("Grilled Protein", "A bowl of grilled protein.");
// GrilledProtein.level = 0;
// GrilledProtein.ingredients = [protein];
// GrilledProtein.extras = [chiliflakes];
// GrilledProtein.locations = [];
// GrilledProtein.items = [];
// GrilledProtein.notes = "";
// cookingRecipes.push(GrilledProtein);

// var FriedProtein = new CookingRecipe("Fried Protein", "A bowl of fried protein.");
// FriedProtein.level = 0;
// FriedProtein.ingredients = [protein, Batter, oil];
// FriedProtein.extras = [chiliflakes];
// FriedProtein.locations = [];
// FriedProtein.items = [];
// FriedProtein.notes = "";
// cookingRecipes.push(FriedProtein);

// var ChickenPotPie = new CookingRecipe("Chicken Pot Pie", "A bowl of chicken pot pie.");
// ChickenPotPie.level = 0;
// ChickenPotPie.ingredients = [pastryDough, Chicken, Vegetables];
// ChickenPotPie.extras = [];
// ChickenPotPie.locations = [oven];
// ChickenPotPie.items = [pietin];
// ChickenPotPie.notes = "";
// cookingRecipes.push(ChickenPotPie);

// var FriedRice = new CookingRecipe("Fried Rice", "A bowl of fried rice.");
// FriedRice.level = 0;
// FriedRice.ingredients = [cookedRice, Protein, SoySauce];
// FriedRice.extras = [chiliFlakes, Eggs];
// FriedRice.locations = [];
// FriedRice.items = [];
// FriedRice.notes = "";
// cookingRecipes.push(FriedRice);

// var Venison = new CookingRecipe("Venison", "A bowl of venison.");
// Venison.level = 0;
// Venison.ingredients = [deermeat];
// Venison.extras = [];
// Venison.locations = [fire, Stove, Oven];
// Venison.items = [];
// Venison.notes = "";
// cookingRecipes.push(Venison);

// var Caviar = new CookingRecipe("Caviar", "A bowl of caviar.");
// Caviar.level = 0;
// Caviar.ingredients = [fisheggs];
// Caviar.extras = [];
// Caviar.locations = [];
// Caviar.items = [];
// Caviar.notes = "";
// cookingRecipes.push(Caviar);

// var SteamedDumplings = new CookingRecipe("Steamed Dumplings", "A bowl of steamed dumplings.");
// SteamedDumplings.level = 0;
// SteamedDumplings.ingredients = [];
// SteamedDumplings.extras = [];
// SteamedDumplings.locations = [];
// SteamedDumplings.items = [];
// SteamedDumplings.notes = "";
// cookingRecipes.push(SteamedDumplings);

// var FriedDumplings = new CookingRecipe("Fried Dumplings", "A bowl of fried dumplings.");
// FriedDumplings.level = 0;
// FriedDumplings.ingredients = [oil];
// FriedDumplings.extras = [];
// FriedDumplings.locations = [];
// FriedDumplings.items = [];
// FriedDumplings.notes = "";
// cookingRecipes.push(FriedDumplings);

// var FunGuyFungiFeast = new CookingRecipe("Fun Guy's Fantastic Fungi Feast", "A bowl of fun guy's fantastic fungi feast.");
// FunGuyFungiFeast.level = 0;
// FunGuyFungiFeast.ingredients = [whiteMushrooms, BrownMushrooms, PurpleMushrooms, GlowingMushrooms, Morels];
// FunGuyFungiFeast.extras = [];
// FunGuyFungiFeast.locations = [];
// FunGuyFungiFeast.items = [];
// FunGuyFungiFeast.notes = "Recipe can only be learned at Fun Guy's Friendly Tavern";
// cookingRecipes.push(FunGuyFungiFeast);

// var RawInsects = new CookingRecipe("Raw Insects", "A bowl of raw insects.");
// RawInsects.level = 0;
// RawInsects.ingredients = [insects];
// RawInsects.extras = [];
// RawInsects.locations = [];
// RawInsects.items = [];
// RawInsects.notes = "";
// cookingRecipes.push(RawInsects);

// var InsectPuree = new CookingRecipe("Insect Puree", "A bowl of insect puree.");
// InsectPuree.level = 0;
// InsectPuree.ingredients = [insects];
// InsectPuree.extras = [];
// InsectPuree.locations = [];
// InsectPuree.items = [];
// InsectPuree.notes = "";
// cookingRecipes.push(InsectPuree);

// var RoastedInsects = new CookingRecipe("Roasted Insects", "A bowl of roasted insects.");
// RoastedInsects.level = 0;
// RoastedInsects.ingredients = [insects];
// RoastedInsects.extras = [];
// RoastedInsects.locations = [];
// RoastedInsects.items = [];
// RoastedInsects.notes = "";
// cookingRecipes.push(RoastedInsects);

// var SeasonedInsects = new CookingRecipe("Seasoned Insects", "A bowl of seasoned insects.");
// SeasonedInsects.level = 0;
// SeasonedInsects.ingredients = [insects, Spices];
// SeasonedInsects.extras = [];
// SeasonedInsects.locations = [];
// SeasonedInsects.items = [];
// SeasonedInsects.notes = "";
// cookingRecipes.push(SeasonedInsects);

// var BugsNSlime = new CookingRecipe("Bugs 'n' Slime", "A bowl of bugs 'n' slime.");
// BugsNSlime.level = 0;
// BugsNSlime.ingredients = [insects, Slime];
// BugsNSlime.extras = [];
// BugsNSlime.locations = [];
// BugsNSlime.items = [];
// BugsNSlime.notes = "";
// cookingRecipes.push(BugsNSlime);

// var BugsNOoze = new CookingRecipe("Bugs 'n' Ooze", "A bowl of bugs 'n' ooze.");
// BugsNOoze.level = 0;
// BugsNOoze.ingredients = [insects, Ooze];
// BugsNOoze.extras = [];
// BugsNOoze.locations = [];
// BugsNOoze.items = [];
// BugsNOoze.notes = "";
// cookingRecipes.push(BugsNOoze);

// var MossWrap = new CookingRecipe("Moss Wrap", "A bowl of moss wrap.");
// MossWrap.level = 0;
// MossWrap.ingredients = [moss, Protein];
// MossWrap.extras = [algaepaste];
// MossWrap.locations = [];
// MossWrap.items = [];
// MossWrap.notes = "";
// cookingRecipes.push(MossWrap);

// var SlimeSlurpie = new CookingRecipe("Slime Slurpie", "A bowl of slime slurpie.");
// SlimeSlurpie.level = 0;
// SlimeSlurpie.ingredients = [slime, CrushedIce];
// SlimeSlurpie.extras = [];
// SlimeSlurpie.locations = [];
// SlimeSlurpie.items = [];
// SlimeSlurpie.notes = "";
// cookingRecipes.push(SlimeSlurpie);

// var BugJuice = new CookingRecipe("Bug Juice", "A bowl of bug juice.");
// BugJuice.level = 0;
// BugJuice.ingredients = [insects, water];
// BugJuice.extras = [slime, Ooze];
// BugJuice.locations = [];
// BugJuice.items = [];
// BugJuice.notes = "";
// cookingRecipes.push(BugJuice);

// var AlgaePaste = new CookingRecipe("Algae Paste", "A bowl of algae paste.");
// AlgaePaste.level = 0;
// AlgaePaste.ingredients = [algae];
// AlgaePaste.extras = [];
// AlgaePaste.locations = [];
// AlgaePaste.items = [];
// AlgaePaste.notes = "";
// cookingRecipes.push(AlgaePaste);

// var CaveCritterFritters = new CookingRecipe("Cave Critter Fritters", "A bowl of cave critter fritters.");
// CaveCritterFritters.level = 0;
// CaveCritterFritters.ingredients = [insects, Batter, oil];
// CaveCritterFritters.extras = [];
// CaveCritterFritters.locations = [];
// CaveCritterFritters.items = [];
// CaveCritterFritters.notes = "";
// cookingRecipes.push(CaveCritterFritters);

// var MuddyMossyMoldyMess = new CookingRecipe("Muddy, Mossy, Moldy Mess", "A bowl of muddy, mossy, moldy mess.");
// MuddyMossyMoldyMess.level = 0;
// MuddyMossyMoldyMess.ingredients = [mud, Moss, Mold, Slime, Ooze];
// MuddyMossyMoldyMess.extras = [];
// MuddyMossyMoldyMess.locations = [];
// MuddyMossyMoldyMess.items = [];
// MuddyMossyMoldyMess.notes = "Delicacy of Underworld Dwellers; Served hot or cold; Consistency of a thick milkshake when prepared properly";
// cookingRecipes.push(MuddyMossyMoldyMess);

// var OoeyGooeyFreshNFruity = new CookingRecipe("Ooey Gooey Fresh 'n' Fruity", "A bowl of ooey gooey fresh 'n' fruity.");
// OoeyGooeyFreshNFruity.level = 0;
// OoeyGooeyFreshNFruity.ingredients = [ooze, Fruit];
// OoeyGooeyFreshNFruity.extras = [];
// OoeyGooeyFreshNFruity.locations = [];
// OoeyGooeyFreshNFruity.items = [];
// OoeyGooeyFreshNFruity.notes = "";
// cookingRecipes.push(OoeyGooeyFreshNFruity);

// var ScoopOGloop = new CookingRecipe("Scoop O' Gloop", "A scoop o' gloop.");
// ScoopOGloop.level = 0;
// ScoopOGloop.ingredients = [ooze, Slime];
// ScoopOGloop.extras = [];
// ScoopOGloop.locations = [];
// ScoopOGloop.items = [];
// ScoopOGloop.notes = "";
// cookingRecipes.push(ScoopOGloop);
