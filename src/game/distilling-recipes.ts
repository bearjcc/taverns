// ============================================================================
// Language: TypeScript
// Path: ts\rcp_distilling.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Item } from './items';
import { Recipe } from './recipes';

export class DistillingRecipe extends Recipe {
    constructor(name: string, description: string, level: number = 0, membersOnly: boolean = false) {
        super(name, description);
    }
    ingredients: Item[] = [];
    extras: Item[] = [];
    locations: Item[] = [];
    items: Item[] = [];
    notes: string = "";
}

// var BalsamicVinaigrette = new CookingRecipe("Balsamic Vinaigrette", "A bowl of balsamic vinaigrette.");
// BalsamicVinaigrette.level = 0;
// BalsamicVinaigrette.ingredients = [];
// BalsamicVinaigrette.extras = [];
// BalsamicVinaigrette.locations = [Distillery];
// BalsamicVinaigrette.items = [];
// BalsamicVinaigrette.notes = "";