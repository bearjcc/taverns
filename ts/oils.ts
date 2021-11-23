// ============================================================================
// Language: TypeScript
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Consumable} from "./consumables"



export class Oil extends Consumable {
    type: "vegetable"| "grapeseed"| "olive"| "avocado"| "peanut"| "sticky"| "dragonessence";
    constructor(type: "vegetable"| "grapeseed"| "olive"| "avocado"| "peanut"| "sticky"| "dragonessence") {
        super();
        this.hasType = true;
        this.type = type;
        this.categories.push("Oil");
        this.singular = this.type + " oil";
        this.plural = this.singular;
        if(type === "dragonessence") {
            this.singular = "Dragonessence";
            this.plural = "Dragonessence";
        }
        this.description = "oil";
        this.hp = 0;
        this.weight = 1;
        this.sources = ["Distilling"];
    }
}
export const vegetableOil_prototype: Oil = new Oil("vegetable");
export const grapeseedOil_prototype: Oil = new Oil("grapeseed");
export const oliveOil_prototype: Oil = new Oil("olive");
export const avocadoOil_prototype: Oil = new Oil("avocado");
export const peanutOil_prototype: Oil = new Oil("peanut");
export const stickyOil_prototype: Oil = new Oil("sticky");
export const dragonessence_prototype: Oil = new Oil("dragonessence");