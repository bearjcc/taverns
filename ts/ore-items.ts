// ============================================================================
// Language: TypeScript
// Path: ts\ore-items.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Item } from "./items";
import { Gem } from "./gems";
import * as Gems from "./gems";

class OreItem extends Item {
    constructor(weight: number, quality: number) {
        super();
        this.categories.push("Ore");
        this.weight = weight;
        this.quality = quality; //in this case quality means how much of that element you can get from it
    }
}

export var ores: OreItem[] = [];

//clay
export class Clay extends OreItem {}
export var clay_prototype: Clay = new Clay(1, 100);
ores.push(clay_prototype);

//geodes
export class Geode extends OreItem {
    constructor(weight: number, quality: number) {
        super(weight, quality);
        this.categories.push("Geode");
    }

    break(skillLevel: number): Gem {
        console.log("You break open the geode in an attempt to find a gem inside...")
        
        // chance that you smash the geode
        var rdm = Math.ceil(Math.random() * 100);
        if (rdm > skillLevel) {
            console.log("You smash the geode into pieces.");
            return null;
        }
        
        rdm = Math.ceil(Math.random() * 100);
        // chance that there is no gem
        if (rdm > this.quality) {
            console.log("There was no gem inside.")
            return null;
        }
        
        //randomly generated quality
        //geometric avarage of geode quality and skill level
        var quality = Math.pow(Math.random() * skillLevel, .5);
        
        //chance of getting a gem of a certain type
        rdm = Math.ceil(Math.random() * 150);
        if(rdm < 10) {
            return new Gems.Ruby(this.weight * .75, quality);
        } else if(rdm < 20) { 
            return new Gems.Sapphire(this.weight * .75, quality);
        } else if(rdm < 30) {
            return new Gems.Emerald(this.weight * .75, quality);
        } else if(rdm < 40) {
            return new Gems.Topaz(this.weight * .75, quality);
        } else if(rdm < 50) {
            return new Gems.Diamond(this.weight * .75, quality);
        } else if(rdm < 60) {
            return new Gems.Amethyst(this.weight * .75, quality);
        } else if(rdm < 70) {
            return new Gems.Opal(this.weight * .75, quality);
        } else if(rdm < 80) {
            return new Gems.Garnet(this.weight * .75, quality);
        } else if(rdm < 90) {
            return new Gems.Pearl(this.weight * .75, quality);
        } else if(rdm < 100) {
            return new Gems.Onyx(this.weight * .75, quality);
        } else if(rdm < 110) {
            return new Gems.Quartz(this.weight * .75, quality);
        } else if(rdm < 120) {
            return new Gems.Agate(this.weight * .75, quality);
        } else if(rdm < 130) {
            return new Gems.Jade(this.weight * .75, quality);
        } else if(rdm < 140) {
            return new Gems.Lapis(this.weight * .75, quality);
        } else {
            return new Gems.Rock(this.weight * .75, quality);
        }        
    }
}
export var geode_prototype: Geode = new Geode(1, 100);
ores.push(geode_prototype);

//copper ore
export class CopperOre extends OreItem {}
export var copper_ore_prototype: CopperOre = new CopperOre(1, 100);
ores.push(copper_ore_prototype);

//tin ore
export class TinOre extends OreItem {}
export var tin_ore_prototype: TinOre = new TinOre(1, 100);
ores.push(tin_ore_prototype);

//iron ore
export class IronOre extends OreItem {}
export var iron_ore_prototype: IronOre = new IronOre(1, 100);
ores.push(iron_ore_prototype);

//coal
export class Coal extends OreItem {}
export var coal_prototype: Coal = new Coal(1, 100);
ores.push(coal_prototype);

//silver ore
export class SilverOre extends OreItem {}
export var silver_ore_prototype: SilverOre = new SilverOre(1, 100);
ores.push(silver_ore_prototype);

//gold ore
export class GoldOre extends OreItem {}
export var gold_ore_prototype: GoldOre = new GoldOre(1, 100);
ores.push(gold_ore_prototype);

//limestone
export class Limestone extends OreItem {}
export var limestone_prototype: Limestone = new Limestone(1, 100);
ores.push(limestone_prototype);

//platinum ore
export class PlatinumOre extends OreItem {}
export var platinum_ore_prototype: PlatinumOre = new PlatinumOre(1, 100);
ores.push(platinum_ore_prototype);

//mithril ore
export class MithrilOre extends OreItem {}
export var mithril_ore_prototype: MithrilOre = new MithrilOre(1, 100);
ores.push(mithril_ore_prototype);

//adamantite ore
export class AdamantiteOre extends OreItem {}
export var adamantite_ore_prototype: AdamantiteOre = new AdamantiteOre(1, 100);
ores.push(adamantite_ore_prototype);

//runite ore
export class RuniteOre extends OreItem {}
export var runite_ore_prototype: RuniteOre = new RuniteOre(1, 100);
ores.push(runite_ore_prototype);