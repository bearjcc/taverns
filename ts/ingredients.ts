// ============================================================================
// Language: TypeScript
// Path: ts\itm_consumables.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

export type Source = "Farming" | "Fishing" | "Foraging" | "Questing" | "Trading" | "Milling" | "Crafting" | "Cooking" | "Distilling" | "Brewing" | "Water" | "Potions" | "Hunting" | "Religious Ceremony";

export class Ingredient {
    name: string;
    description: string;
    sources: Array<Source>;
    membersOnly: boolean;
    cost: number;

    constructor(name: string, description: string, sources: Array<Source>, membersOnly: boolean = false, cost: number = 0) {
        this.name = name;
        this.description = description;
        this.sources = sources;
        this.membersOnly = membersOnly;
        this.cost = cost;
    }
}