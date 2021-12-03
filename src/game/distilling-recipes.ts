// ============================================================================
// Language: TypeScript
// Path: ts\game\distilling-recipes.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { Recipe } from './recipes';
import { distillery } from './skills';

export class DistillingRecipe extends Recipe {
    static readonly distillingrecipe:null;
    notes: string = "";

    constructor(name: string, description: string) {
        super(name);
        this.skill = distillery;
    }
}

// var BalsamicVinaigrette = new CookingRecipe("Balsamic Vinaigrette", "A bowl of balsamic vinaigrette.");
// BalsamicVinaigrette.level = 0;
// BalsamicVinaigrette.ingredients = [];
// BalsamicVinaigrette.extras = [];
// BalsamicVinaigrette.locations = [Distillery];
// BalsamicVinaigrette.items = [];
// BalsamicVinaigrette.notes = "";