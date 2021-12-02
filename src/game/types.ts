export type Class = { new(...args: any[]): any; };

export type Gender = "Male" | "Female" | "None" | "Other";
export type Rarity = "Common" | "Uncommon" | "Rare" | "Exotic";
export type CombatType = "Melee" | "Ranged" | "Magic"
export type DamageType = "Slashing" | "Crushing" | "Blunt" | "Piercing" | "Fire" | "Cold" | "Lightning" | "Poison" | "Holy" | "Unholy" | "Arcane";