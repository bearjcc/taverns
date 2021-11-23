// ============================================================================
// Language: TypeScript
// Path: ts\trees.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import {Interactable} from "./interactables"
import {Axe} from "./items"

export class Tree extends Interactable {
    levelRequired: number;
    axeRequired: Axe;

    constructor(name: string, description: string, levelRequired: number, axeRequired: Axe) {
        super(name, description);
        this.levelRequired = levelRequired;
        this.axeRequired = axeRequired;
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
}
export var apple_prototype = new Apple();
trees.push(apple_prototype);

export class Cherry extends Tree {
    constructor() {
        super("Cherry", "A cherry tree.", 50, "Mithril");
    }
}
export var cherry_prototype = new Cherry();
trees.push(cherry_prototype);

export class Eldertree extends Tree {
    constructor() {
        super("Eldertree", "An eldertree tree.", 55, "Mithril");
    }
}
export var eldertree_prototype = new Eldertree();
trees.push(eldertree_prototype);

export class Willow extends Tree {
    constructor() {
        super("Willow", "A willow tree.", 60, "Mithril");
    }
}
export var willow_prototype = new Willow();
trees.push(willow_prototype);

export class MapleTree extends Tree {
    constructor() {
        super("MapleTree", "A maple tree.", 65, "Mithril");
    }
}
export var mapleTree_prototype = new MapleTree();
trees.push(mapleTree_prototype);

export class Pear extends Tree {
    constructor() {
        super("Pear", "A pear tree.", 70, "Adamantite");
    }
}
export var pear_prototype = new Pear();
trees.push(pear_prototype);

export class Magic extends Tree {
    constructor() {
        super("Magic", "A magic tree.", 75, "Adamantite");
    }
}
export var magic_prototype = new Magic();
trees.push(magic_prototype);

export class SapientPear extends Tree {
    constructor() {
        super("Sapient Pear", "A sapient pear tree.", 90, "Mystic");
    }
}
export var sapientPear_prototype = new SapientPear();
trees.push(sapientPear_prototype);