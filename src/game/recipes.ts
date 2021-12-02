// ============================================================================
// Language: TypeScript Extended
// Path: tsx\ingredients\ingredients.tsx
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Item, ItemType} from "./items"
import {Skill} from "./skills"
import { InteractableType } from './interactables';


export class Recipe {
    name: string;
    description: string = "";
    ingredients: ItemType[][] = []; //required ingredients
        //only one of each item is required from the array stored at ingredients[i]
        //for example
        //Meats = [Beef, Pork, Chicken]
        //ingredients[0] = meats
        //Pick either Beef, Pork, or Chicken
    extras: ItemType[][] = []; //optional ingredients
    items: ItemType[] = []; //items needed to craft the recipe but not consumed
        //for example
        //a cake tin for a cake recipe
    locations: InteractableType[] = []; //what locations can this recipe be made at?
        //for example
        //a stove, spinning wheel, etc.
    skill: Skill; //which skill is used for this recipe?
    level: number = 0; //what is the minimum skill level required to make this recipe?
    membersOnly: boolean = false; //true only members can make this recipe
    
    constructor(name: string) {
        this.name = name;
    }

    created : ItemType = null; //the item created by this recipe

    create() : Item {
        // TODO: implement quality and weight
        return new this.created();
    }
}