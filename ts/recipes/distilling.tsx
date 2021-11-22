// ============================================================================
// Language: TypeScript Extended
// Path: ts\recipes\distilling.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

export class DistillingRecipe extends Recipe {
    constructor(name: string, description: string, level: number = 0, membersOnly: boolean = false) {
        super(name, description, [], distillery, level, membersOnly);
    }
    ingredients: Array<Ingredient>;
    extras: Array<Ingredient>;
    locations: Array<Interactable>;
    items: Array<Item>;
    notes: string;
}

var BalsamicVinaigrette = new CookingRecipe("Balsamic Vinaigrette", "A bowl of balsamic vinaigrette.");
BalsamicVinaigrette.level = 0;
BalsamicVinaigrette.ingredients = [];
BalsamicVinaigrette.extras = [];
BalsamicVinaigrette.locations = [Distillery];
BalsamicVinaigrette.items = [];
BalsamicVinaigrette.notes = "";