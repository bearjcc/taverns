// ============================================================================
// Language: TypeScript
// Path: ts\game\ore-deposits.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Interactable } from "./interactables";
import { OreItem } from "./ore-items";
import * as OreItems from "./ore-items";
import { Gem } from "./gems";
import * as Gems from "./gems";

export class OreDeposit extends Interactable {
	static singular: string = "ore deposit";
	static plural: string = "ore deposits";
	static description: string = "A large deposit of ore.";

	quantity: number;
	quality: number;
	constructor(quantity: number, quality: number) {
		super();
		this.quantity = quantity;
		this.quality = quality;
	}

	prospect() {
		console.log(
			"You prospect the ore deposit and find " +
				this.quantity +
				" " +
				this.getName(this.quantity) +
				"."
		);
	}

	mine(skillLevel: number): OreItem | Gem {
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
			} else if (rdm < 20) {
				return new Gems.Sapphire(weight * 0.75, quality);
			} else if (rdm < 30) {
				return new Gems.Emerald(weight * 0.75, quality);
			} else if (rdm < 40) {
				return new Gems.Topaz(weight * 0.75, quality);
			} else if (rdm < 50) {
				return new Gems.Diamond(weight * 0.75, quality);
			} else if (rdm < 60) {
				return new Gems.Amethyst(weight * 0.75, quality);
			} else if (rdm < 70) {
				return new Gems.Opal(weight * 0.75, quality);
			} else if (rdm < 80) {
				return new Gems.Garnet(weight * 0.75, quality);
			} else if (rdm < 90) {
				return new Gems.Onyx(weight * 0.75, quality);
			} else if (rdm < 100) {
				return new Gems.Quartz(weight * 0.75, quality);
			} else if (rdm < 110) {
				return new Gems.Agate(weight * 0.75, quality);
			} else if (rdm < 120) {
				return new Gems.Jade(weight * 0.75, quality);
			} else if (rdm < 130) {
				return new Gems.Lapis(weight * 0.75, quality);
			} else {
				return new OreItems.Geode(weight, quality);
			}
		}

		return this.getOre(weight, quality);
	}

	getOre(weight: number, quality: number): OreItem {
		//define this on sub classes
		return new OreItems.Geode(weight, quality);
	}
}

export var oreDeposits: OreDeposit[] = [];

//clay
export class ClayDeposit extends OreDeposit {
	static singular = "Clay";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.Clay(weight, quality);
	}
}
export var clayDeposit_prototype: ClayDeposit = new ClayDeposit(1, 100);
oreDeposits.push(clayDeposit_prototype);

//geodes
export class GeodeDeposit extends OreDeposit {
	static singular = "Geode";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.Geode(weight, quality);
	}
}
export var geodeDeposit_prototype: GeodeDeposit = new GeodeDeposit(1, 100);
oreDeposits.push(geodeDeposit_prototype);

//copper ore
export class CopperOreDeposit extends OreDeposit {
	static singular = "Copper Ore";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.CopperOre(weight, quality);
	}
}
export var copperOreDeposit_prototype: CopperOreDeposit = new CopperOreDeposit(
	1,
	100
);
oreDeposits.push(copperOreDeposit_prototype);

//tin ore
export class TinOreDeposit extends OreDeposit {
	static singular = "Tin Ore";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.TinOre(weight, quality);
	}
}
export var tinOreDeposit_prototype: TinOreDeposit = new TinOreDeposit(1, 100);
oreDeposits.push(tinOreDeposit_prototype);

//iron ore
export class IronOreDeposit extends OreDeposit {
	static singular = "Iron Ore";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.IronOre(weight, quality);
	}
}
export var ironOreDeposit_prototype: IronOreDeposit = new IronOreDeposit(
	1,
	100
);
oreDeposits.push(ironOreDeposit_prototype);

//coal
export class CoalDeposit extends OreDeposit {
	static singular = "Coal";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.Coal(weight, quality);
	}
}
export var coalDeposit_prototype: CoalDeposit = new CoalDeposit(1, 100);
oreDeposits.push(coalDeposit_prototype);

//silver ore
export class SilverOreDeposit extends OreDeposit {
	static singular = "Silver Ore";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.SilverOre(weight, quality);
	}
}
export var silverOreDeposit_prototype: SilverOreDeposit = new SilverOreDeposit(
	1,
	100
);
oreDeposits.push(silverOreDeposit_prototype);

//gold ore
export class GoldOreDeposit extends OreDeposit {
	static singular = "Gold Ore";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.GoldOre(weight, quality);
	}
}
export var goldOreDeposit_prototype: GoldOreDeposit = new GoldOreDeposit(
	1,
	100
);
oreDeposits.push(goldOreDeposit_prototype);

//limestone
export class LimestoneDeposit extends OreDeposit {
	static singular = "Limestone";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.Limestone(weight, quality);
	}
}
export var limestoneDeposit_prototype: LimestoneDeposit = new LimestoneDeposit(
	1,
	100
);
oreDeposits.push(limestoneDeposit_prototype);

//platinum ore
export class PlatinumOreDeposit extends OreDeposit {
	static singular = "Platinum Ore";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.PlatinumOre(weight, quality);
	}
}
export var platinumOreDeposit_prototype: PlatinumOreDeposit =
	new PlatinumOreDeposit(1, 100);
oreDeposits.push(platinumOreDeposit_prototype);

//mithril ore
export class MithrilOreDeposit extends OreDeposit {
	static singular = "Mithril Ore";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.MithrilOre(weight, quality);
	}
}
export var mithrilOreDeposit_prototype: MithrilOreDeposit =
	new MithrilOreDeposit(1, 100);
oreDeposits.push(mithrilOreDeposit_prototype);

//adamantite ore
export class AdamantiteOreDeposit extends OreDeposit {
	static singular = "Adamantite Ore";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.AdamantiteOre(weight, quality);
	}
}
export var adamantiteOreDeposit_prototype: AdamantiteOreDeposit =
	new AdamantiteOreDeposit(1, 100);
oreDeposits.push(adamantiteOreDeposit_prototype);

//runite ore
export class RuniteOreDeposit extends OreDeposit {
	static singular = "Runite Ore";

	getOre(weight: number, quality: number): OreItem {
		return new OreItems.RuniteOre(weight, quality);
	}
}
export var runiteOreDeposit_prototype: RuniteOreDeposit = new RuniteOreDeposit(
	1,
	100
);
oreDeposits.push(runiteOreDeposit_prototype);
