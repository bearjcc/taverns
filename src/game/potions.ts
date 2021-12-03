// ============================================================================
// Language: TypeScript
// Path: ts\itm_consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Consumable } from "./consumables";

export class Potion extends Consumable {
	hunger: number = 0; // positive number makes eater more full, less hungry
	thirst: number = 0; // positive number makes eater less thirsty
}

export var potions: Potion[] = [];

export class MilkOfThePoppy extends Potion {
	constructor() {
		super();
		this.categories.push("Spice", "Milk of the Poppy");
		this.singular = "Milk of the Poppy";
		this.plural = "Milk of the Poppy";
		this.description = "Milk of the Poppy";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Foraging"];
	}
}
export const milkOfThePoppy_prototype: MilkOfThePoppy = new MilkOfThePoppy();
potions.push(milkOfThePoppy_prototype);

export class HealthPotion extends Potion {
	constructor() {
		super();
		this.categories.push("Health");
		this.singular = "health potion";
		this.plural = "health potions";
		this.description = "health potion";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 50;
		this.mass = 1;
		this.sources = ["Alchemy"];
	}
}
export const healthPotion_prototype: HealthPotion = new HealthPotion();
potions.push(healthPotion_prototype);

export class ManaPotion extends Potion {
	constructor() {
		super();
		this.categories.push("Mana");
		this.singular = "mana potion";
		this.plural = "mana potions";
		this.description = "mana potion";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Alchemy"];
	}
}
export const manaPotion_prototype: ManaPotion = new ManaPotion();
potions.push(manaPotion_prototype);

export class StaminaPotion extends Potion {
	constructor() {
		super();
		this.categories.push("Stamina");
		this.singular = "stamina potion";
		this.plural = "stamina potions";
		this.description = "stamina potion";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Alchemy"];
	}
}
export const staminaPotion_prototype: StaminaPotion = new StaminaPotion();
potions.push(staminaPotion_prototype);

export class SleepingDraught extends Potion {
	constructor() {
		super();
		this.categories.push("Sleeping");
		this.singular = "sleeping draught";
		this.plural = "sleeping draughts";
		this.description = "sleeping potion";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Alchemy"];
	}
}
export const sleepingPotion_prototype: SleepingDraught = new SleepingDraught();
potions.push(sleepingPotion_prototype);

export class StrengthPotion extends Potion {
	constructor() {
		super();
		this.categories.push("Strength");
		this.singular = "strength potion";
		this.plural = "strength potions";
		this.description = "strength potion";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Alchemy"];
	}
}
export const strengthPotion_prototype: StrengthPotion = new StrengthPotion();
potions.push(strengthPotion_prototype);

export class Cloud9 extends Potion {
	constructor() {
		super();
		this.categories.push("Cloud9");
		this.singular = "Cloud9";
		this.plural = "Cloud9";
		this.description = "Creates a sense of euphoria.";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Alchemy"];
	}
}
export const cloud9_prototype: Cloud9 = new Cloud9();
potions.push(cloud9_prototype);

export class AquaFortis extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Fortis");
		this.singular = "Aqua Fortis";
		this.plural = "Aqua Fortis";
		this.description = "Aqua Fortis";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Alchemy"];
	}
}
export const aquaFortis_prototype: AquaFortis = new AquaFortis();
potions.push(aquaFortis_prototype);

export class Turpentine extends Potion {
	constructor() {
		super();
		this.categories.push("Turpentine");
		this.singular = "Turpentine";
		this.plural = "Turpentine";
		this.description = "Turpentine";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const turpentine_prototype: Turpentine = new Turpentine();
potions.push(turpentine_prototype);

export class AquaRegia extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Regia");
		this.singular = "Aqua Regia";
		this.plural = "Aqua Regia";
		this.description = "Aqua Regia";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaRegia_prototype: AquaRegia = new AquaRegia();
potions.push(aquaRegia_prototype);

export class AquaMentalis extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Mentalis");
		this.singular = "Aqua Mentalis";
		this.plural = "Aqua Mentalis";
		this.description = "Aqua Mentalis";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaMentalis_prototype: AquaMentalis = new AquaMentalis();
potions.push(aquaMentalis_prototype);

export class AquaTerra extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Terra");
		this.singular = "Aqua Terra";
		this.plural = "Aqua Terra";
		this.description = "Aqua Terra";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaTerra_prototype: AquaTerra = new AquaTerra();
potions.push(aquaTerra_prototype);

export class AquaVitae extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Vitae");
		this.singular = "Aqua Vitae";
		this.plural = "Aqua Vitae";
		this.description = "Aqua Vitae";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaVitae_prototype: AquaVitae = new AquaVitae();
potions.push(aquaVitae_prototype);

export class AquaExorta extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Exorta");
		this.singular = "Aqua Exorta";
		this.plural = "Aqua Exorta";
		this.description = "Aqua Exorta";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaExorta_prototype: AquaExorta = new AquaExorta();
potions.push(aquaExorta_prototype);

export class AquaExana extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Exana");
		this.singular = "Aqua Exana";
		this.plural = "Aqua Exana";
		this.description = "Aqua Exana";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaExana_prototype: AquaExana = new AquaExana();
potions.push(aquaExana_prototype);

export class AquaExevo extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Exevo");
		this.singular = "Aqua Exevo";
		this.plural = "Aqua Exevo";
		this.description = "Aqua Exevo";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaExevo_prototype: AquaExevo = new AquaExevo();
potions.push(aquaExevo_prototype);

export class AquaExevoPotentia extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Exevo Potentia");
		this.singular = "Aqua Exevo Potentia";
		this.plural = "Aqua Exevo Potentia";
		this.description = "Aqua Exevo Potentia";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaExevoPotentia_prototype: AquaExevoPotentia =
	new AquaExevoPotentia();
potions.push(aquaExevoPotentia_prototype);

export class AquaExevoSanctus extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Exevo Sanctus");
		this.singular = "Aqua Exevo Sanctus";
		this.plural = "Aqua Exevo Sanctus";
		this.description = "Aqua Exevo Sanctus";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaExevoSanctus_prototype: AquaExevoSanctus =
	new AquaExevoSanctus();
potions.push(aquaExevoSanctus_prototype);

export class AquaExevoTenebrae extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Exevo Tenebrae");
		this.singular = "Aqua Exevo Tenebrae";
		this.plural = "Aqua Exevo Tenebrae";
		this.description = "Aqua Exevo Tenebrae";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaExevoTenebrae_prototype: AquaExevoTenebrae =
	new AquaExevoTenebrae();
potions.push(aquaExevoTenebrae_prototype);

export class AquaExevoVitae extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Exevo Vitae");
		this.singular = "Aqua Exevo Vitae";
		this.plural = "Aqua Exevo Vitae";
		this.description = "Aqua Exevo Vitae";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaExevoVitae_prototype: AquaExevoVitae = new AquaExevoVitae();
potions.push(aquaExevoVitae_prototype);

export class AquaExevoTerra extends Potion {
	constructor() {
		super();
		this.categories.push("Aqua Exevo Terra");
		this.singular = "Aqua Exevo Terra";
		this.plural = "Aqua Exevo Terra";
		this.description = "Aqua Exevo Terra";
		this.hunger = 0;
		this.thirst = 0;
		this.hp = 0;
		this.mass = 1;
		this.sources = ["Distilling"];
	}
}
export const aquaExevoTerra_prototype: AquaExevoTerra = new AquaExevoTerra();
potions.push(aquaExevoTerra_prototype);
