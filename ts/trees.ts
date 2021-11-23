// ============================================================================
// Language: TypeScript
// Path: ts\trees.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {
    Banana as BananaFruit,
    Food,
    Citrus as CitrusFruit,
    Apple as AppleFruit,
    Cherry as CherryFruit,
    Pear as PearFruit,
    SapientPear as SapientPearFruit
} from "./food"
import {Interactable} from "./interactables"
import {AxeType, Item} from "./items"

type TreeType = "Pine" | "Deadwood" | "Birch" | "Cinnamon" | "Banana" | "Palm" | "Maple" | "Citrus" | "Oak" | "Apple" | "Cherry" | "Elder" | "Willow" | "Pear" | "Peach" | "Mystic" | "Sapient Pear";

export class Tree extends Interactable {
    levelRequired: number;
    axeRequired: AxeType;
    name: TreeType;

    constructor(name: TreeType, description: string, levelRequired: number, axeRequired: AxeType) {
        super(name, description);
        this.levelRequired = levelRequired;
        this.axeRequired = axeRequired;
    }

    chop(axe: AxeType, lvl: number): boolean {
        if (axe === this.axeRequired && lvl >= this.levelRequired) {
            console.log(`You chop the ${this.name} down.`);
            return true;
        } else {
            console.log(`You can't chop the ${this.name} down with that.`);
            return false;
        }
    }

    getFruit(): Food {
        console.log("This tree bears no fruit")
        return null;
    }

    getLeaf(): Leaf {
        return new Leaf(this.name);
    }

    getTwig(): Twig {
        return new Twig(this.name);
    }

    getBranch(): Branch {
        return new Branch(this.name);
    }

    getRoot(): Root {
        return new Root(this.name);
    }

    getBark(): Bark {
        return new Bark(this.name);
    }
    
    getLog(): Log {
        return new Log(this.name);
    }

    getStump(): TreeStump {
        return new TreeStump(this.name);
    }


}

export class Leaf extends Item {
    //leaves require no tools
    constructor(treeType: TreeType) {
        super();
        this.singular = treeType + " leaf";
        this.plural = treeType + " leaves";
    }
}

export class Twig extends Item {
    //twigs require no tools
    constructor(treeType: TreeType) {
        super();
        this.singular = treeType + " twig";
        this.plural = treeType + " twigs";
    }
}
0

export class Branch extends Item {
    // Branches require Axe or Knife
    constructor(treeType: TreeType) {
        super();
        this.singular = treeType + " branch";
        this.plural = treeType + " branches";
    }
}

export class Root extends Item {
    // Roots require Knife
    constructor(treeType: TreeType) {
        super();
        this.singular = treeType + " root";
        this.plural = treeType + " roots";
    }
}

export class Bark extends Item {
    // Bark requires Knife
    constructor(treeType: TreeType) {
        super();
        this.singular = treeType + " bark";
        this.plural = treeType + " bark";
    }
}

export class Log extends Item {
    // Logs require Saw or Axe
    constructor(treeType: TreeType) {
        super();
        this.singular = treeType + " log";
        this.plural = treeType + " logs";
    }
}

export class TreeStump extends Item {
    // Stunps require Pack Animal and Rope
    constructor(treeType: TreeType) {
        super();
        this.singular = treeType + " tree stump";
        this.plural = treeType + " tree stumps";
    }
}

export var trees: Tree[] = [];

export class Pine extends Tree {
    constructor() {
        super("Pine", "A pine tree.", 0, "Bronze");
    }
}
export var pine_prototype = new Pine();
trees.push(pine_prototype);

export class Deadwood extends Tree {
    constructor() {
        super("Deadwood", "A deadwood tree.", 5, "Bronze");
    }

    getLeaf(): Leaf {
        console.log("This tree has no leaves");
        return null;
    }
}
export var deadwood_prototype = new Deadwood();
trees.push(deadwood_prototype);

export class Birch extends Tree {
    constructor() {
        super("Birch", "A birch tree.", 10, "Bronze");
    }
}
export var birch_prototype = new Birch();
trees.push(birch_prototype);

export class Cinnamon extends Tree {
    constructor() {
        super("Cinnamon", "A cinnamon tree.", 15, "Iron");
    }
}
export var cinnamon_prototype = new Cinnamon();
trees.push(cinnamon_prototype);

export class Banana extends Tree {
    constructor() {
        super("Banana", "A banana tree.", 20, "Iron");
    }

    getFruit(): Food {
        return new BananaFruit();
    }
}
export var banana_prototype = new Banana();
trees.push(banana_prototype);

export class Palm extends Tree {
    constructor() {
        super("Palm", "A palm tree.", 25, "Iron");
    }
}
export var palm_prototype = new Palm();
trees.push(palm_prototype);

export class Maple extends Tree {
    constructor() {
        super("Maple", "A maple tree.", 30, "Iron");
    }
}
export var maple_prototype = new Maple();
trees.push(maple_prototype);

export class Citrus extends Tree {
    constructor() {
        super("Citrus", "A citrus tree.", 35, "Steel");
    }

    getFruit(): Food {
        return new CitrusFruit("orange");
    }
}
export var citrus_prototype = new Citrus();
trees.push(citrus_prototype);

export class Oak extends Tree {
    constructor() {
        super("Oak", "An oak tree.", 40, "Steel");
    }
}
export var oak_prototype = new Oak();
trees.push(oak_prototype);

export class Apple extends Tree {
    constructor() {
        super("Apple", "An apple tree.", 45, "Steel");
    }

    getFruit(): Food {
        return new AppleFruit("red");
    }
}
export var apple_prototype = new Apple();
trees.push(apple_prototype);

export class Cherry extends Tree {
    constructor() {
        super("Cherry", "A cherry tree.", 50, "Mithril");
    }

    getFruit(): Food {
        return new CherryFruit();
    }
}
export var cherry_prototype = new Cherry();
trees.push(cherry_prototype);

export class Elder extends Tree {
    constructor() {
        super("Elder", "An eldertree tree.", 55, "Mithril");
    }
}
export var eldertree_prototype = new Elder();
trees.push(eldertree_prototype);

export class Willow extends Tree {
    constructor() {
        super("Willow", "A willow tree.", 60, "Mithril");
    }
}
export var willow_prototype = new Willow();
trees.push(willow_prototype);

export class Pear extends Tree {
    constructor() {
        super("Pear", "A pear tree.", 70, "Adamantite");
    }

    getFruit(): Food {
        return new PearFruit();
    }
}
export var pear_prototype = new Pear();
trees.push(pear_prototype);

export class Mystic extends Tree {
    constructor() {
        super("Mystic", "A magic tree.", 75, "Adamantite");
    }
}
export var magic_prototype = new Mystic();
trees.push(magic_prototype);

export class SapientPear extends Tree {
    constructor() {
        super("Sapient Pear", "A sapient pear tree.", 90, "Mystic");
    }

    getFruit(): Food {
        return new SapientPearFruit();
    }
}
export var sapientPear_prototype = new SapientPear();
trees.push(sapientPear_prototype);