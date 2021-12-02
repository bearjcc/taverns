// ============================================================================
// Language: TypeScript
// Path: ts\game\achievements.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

export class Achievment {
	name: string;
	description: string;

	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}

// Best Friends Forever! // -equip and name your first pet
export const BestFriends = new Achievment(
	"Best Friends Forever!",
	"Equip and name your first pet"
);

// Friendship is Magic // -Tame at least 6 unicorns, and have a baby dragon as a pet
export const FriendshipIsMagic = new Achievment(
	"Friendship is Magic",
	"Tame at least 6 unicorns, and have a baby dragon as a pet"
);

// Vera Nice // -craft medicine in Alochester
export const VeraNice = new Achievment("Vera Nice", "Craft medicine in Alochester");

// Bear Snack // -Be attacked by a bear
export const BearSnack = new Achievment("Bear Snack", "Be attacked by a bear");

// Vroom Vroom in Varrum // -use a mechanized mount in the City of Varrum
export const VroomVroom = new Achievment(
	"Vroom Vroom in Varrum",
	"Use a mechanized mount in the City of Varrum"
);

// Marge, I'm going to have to call you back // -visit the city of Atlantis
export const Marge = new Achievment(
	"Marge, I'm going to have to call you back",
	"Visit the city of Atlantis"
);

// The Dying Ways // -make a living sacrifice at Bonewater
export const DyingWays = new Achievment(
	"The Dying Ways",
	"Make a living sacrifice at Bonewater"
);

// Purrrreeee // -distill anything with Purified Water in the Town of Purewater
export const Pure = new Achievment(
	"Purrrreeee",
	"Distill anything with Purified Water in the Town of Purewater"
);

// Everyone's Just So Polite, Eh? // -buy or sell syrup in Maple Run
export const EveryonesPolite = new Achievment(
	"Everyone's Just So Polite, Eh?",
	"Buy or sell syrup in Maple Run"
);

// What doesn't kill you makes you stronger. Except Bears. Bears Kill you. // -die from a bear attack in Beargulch
export const DoesntKillYou = new Achievment(
	"What doesn't kill you makes you stronger. Except Bears. Bears Kill you.",
	"Dies from a bear attack in Beargulch"
);

// Mossmade // -Be from Mossy Stone, and cook with moss in Mossy Glade
export const Mossmade = new Achievment(
	"Mossmade",
	"Be from Mossy Stone and cook with moss in Mossy Glade"
);

// SMRT // -'accidentally' eat your own poisoned food
export const SMRT = new Achievment("SMRT", "'Accidentally' eat your own poisoned food");

// The best thing to do is always to follow your greatest desire // -meet the Devil
export const TheBestThingToDo = new Achievment(
	"The best thing to do is always to follow your greatest desire",
	"Meet the Devil"
);

// It's a one-way trip // -be on a boat in the River Styx
export const ItsAOneWayTrip = new Achievment(
	"It's a one-way trip",
	"Be on a boat in the River Styx"
);

// He's such a Fungi // -learn Fun Guy's Fantastic Fungi Feast at Fun Guy's Friendly Tavern
export const HeSuchAFungi = new Achievment(
	"He's such a Fungi",
	"Learn Fun Guy's Fantastic Fungi Feast at Fun Guy's Friendly Tavern"
);

// From Fungi to Familiar // -Use Animation spell on a mushroom, then use Animal Handling to capture as a pet
export const FromFungiToFamiliar = new Achievment(
	"From Fungi to Familiar",
	"Use Animation spell on a mushroom, then use Animal Handling to capture as a pet"
);

// See the colors of the wind. // -Eat a Rainbow Trout
export const SeeTheColorsOfTheWind = new Achievment(
	"See the colors of the wind.",
	"Eat a Rainbow Trout"
);

// No Eyes? No problem! // -Explore the Void
export const NoEyesNoProblem = new Achievment(
	"No Eyes? No problem!",
	"Explore the Void"
);

// Glow, Baby, Glow! // -Collect 50 glowing flora and fauna
export const GlowBabyGlow = new Achievment(
	"Glow, Baby, Glow!",
	"Collect 50 glowing flora and fauna"
);

// Who wants to go on a trip? // -Eat a Red Mushroom
export const WhoWantsToGoOnATrip = new Achievment(
	"Who wants to go on a trip?",
	"Eat a Red Mushroom"
);

// You're such a sucker! // -Capture a live octopus.
export const YoureSuchASucker = new Achievment(
	"You're such a sucker!",
	"Capture a live octopus."
);

// Well, what do we do now? // -Beat the game
export const WellWhatDoWeDoNow = new Achievment(
	"Well, what do we do now?",
	"Beat the game"
);

// Became a Zookeeper // -Have 25 exotic animals in your possession
export const BecameAZookeeper = new Achievment(
	"Became a Zookeeper",
	"Have 25 exotic animals in your possession"
);

// Master Gifter // -Bestow 25 favorite gifts to NPC characters
export const MasterGifter = new Achievment(
	"Master Gifter",
	"Bestow 25 favorite gifts to NPC characters"
);

// Encyclopedia of Recipes // -learn every recipe
export const EncyclopediaOfRecipes = new Achievment(
	"Encyclopedia of Recipes",
	"learn every recipe"
);

// Adventurous eater // -Try 10 different species' specialty dishes
export const AdventurousEater = new Achievment(
	"Adventurous eater",
	"Try 10 different species' specialty dishes"
);

// Hook, Line, and Sinker // -Catch every type of fish
export const HookLineSinker = new Achievment(
	"Hook, Line, and Sinker",
	"Catch every type of fish"
);

// Just don't look at it... // -Eat every type of insect
export const JustDontLookAtIt = new Achievment(
	"Just don't look at it...",
	"Eat every type of insect"
);

// Hell froze over... // -Leave the Underworld via the River Styx
export const HellFrozeOver = new Achievment(
	"Hell froze over...",
	"Leave the Underworld via the River Styx"
);

// The gift that keeps on giving... // -Survive a curse or being poisoned for a fortnight.
export const TheGiftThatKeepsOnGiving = new Achievment(
	"The gift that keeps on giving...",
	"Survive a curse or being poisoned for a fortnight."
);

// Overachiever // -Completed all quests
export const Overachiever = new Achievment("Overachiever", "Completed all quests");

// So Fierce! // -Destroy a training dummy
export const SoFierce = new Achievment("So Fierce!", "Destroy a training dummy");

// Axellent // -Make and sharpen any axe from scratch
export const Axellent = new Achievment(
	"Axellent",
	"Make and sharpen any axe from scratch"
);

// BEEPBEEPBEEP SMOKEY TOAST! // -Burn a loaf of bread.
export const BeepBeepBeep = new Achievment(
	"BEEPBEEPBEEP SMOKEY TOAST!",
	"Burn a loaf of bread."
);
