// ============================================================================
// Language: TypeScript Extended
// Path: tsx\ingredients\ingredients.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

export class Recipe {
    name: string;
    description: string;
    ingredients: Ingredient[];
    skill: Skill;
    level: number;
    membersOnly: boolean;
    
    constructor(name: string, description: string, ingredients: Ingredient[], skill: Skill, level: number, membersOnly: boolean) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.skill = skill;
        this.level = level;
        this.membersOnly = membersOnly;
    }
}