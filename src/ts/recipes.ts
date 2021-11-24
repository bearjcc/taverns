// ============================================================================
// Language: TypeScript Extended
// Path: tsx\ingredients\ingredients.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Item} from "./items"
import {Skill} from "./skills"


export class Recipe {
    name: string;
    description: string;
    ingredients: Item[];
    skill: Skill;
    level: number;
    membersOnly: boolean;
    
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.ingredients = [];
        this.skill = null;
        this.level = 0;
        this.membersOnly = false;
    }
}