// ============================================================================
// Language: TypeScript Extended
// Path: tsx\ingredients\ingredients.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

enum Source {
    Farming = "Farming",
    Fishing = "Fishing",
    Foraging = "Foraging",
    Questing = "Questing",
    Trading = "Trading",
    Milling = "Milling",
    Crafting = "Crafting",
    Cooking = "Cooking",
    Distilling = "Distilling",
    Brewing = "Brewing",
    Water = "Water",
    Potions = "Potions",
    Hunting = "Hunting",
    ReligiousCeremony = "Religious Ceremony",
}


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