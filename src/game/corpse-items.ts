import {Item} from './items';
import {Being} from './beings';

export class Skeleton extends Item {
    constructor(being : Being) {
        super();
        this.singular = being.getTypes()[0] + ' skeleton';
    }
}

export class Hide extends Item {
    constructor(being : Being) {
        super();
        this.singular = being.getTypes()[0] + ' hide';
    }
}

export class Skull extends Item {
    constructor(being : Being) {
        super();
        this.singular = being.getTypes()[0] + ' skull';
    }
}

export class Feather extends Item {
    constructor(being : Being) {
        super();
        this.singular = being.getTypes()[0] + ' feather';
    }
}

export class Meat extends Item {
    constructor(being : Being) {
        super();
        this.singular = being.getTypes()[0] + ' meat';
    }
}

export class Brain extends Item {
    constructor(being : Being) {
        super();
        this.singular = being.getTypes()[0] + ' brain';
    }
}

export class Guts extends Item {
    constructor(being : Being) {
        super();
        this.singular = being.getTypes()[0] + ' guts';
    }
}

