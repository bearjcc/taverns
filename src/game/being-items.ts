// ============================================================================
// Language: TypeScript
// Path: ts\game\being-items.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

import { Item } from "./items";
import { Being } from "./beings";

export class BeingItem extends Item {
  singular: string;
  plural: string;
  description: string;

  constructor() {
    super();
    this.singular = "";
    this.plural = "";
    this.description = "";
  }

  getName(qty: number): string {
    return qty === 1 ? this.singular : this.plural;
  }

  getDescription(): string {
    return this.description;
  }
}

export class Skeleton extends BeingItem {
  constructor(being: Being) {
    super();
    this.singular = being.getType() + " skeleton";
    this.plural = this.singular + "s";
  }
}

export class Hide extends BeingItem {
  constructor(being: Being) {
    super();
    this.singular = being.getTypes()[0] + " hide";
    this.plural = this.singular + "s";
  }
}

export class Skull extends BeingItem {
  constructor(being: Being) {
    super();
    this.singular = being.getTypes()[0] + " skull";
    this.plural = this.singular + "s";
  }
}

export class Feather extends BeingItem {
  constructor(being: Being) {
    super();
    this.singular = being.getTypes()[0] + " feather";
    this.plural = this.singular + "s";
  }
}

export class Egg extends BeingItem {
  constructor(being: Being) {
    super();
    this.singular = being.getTypes()[0] + " egg";
    this.plural = this.singular + "s";
  }
}

export class Meat extends BeingItem {
  constructor(being: Being) {
    super();
    this.singular = being.getTypes()[0] + " meat";
    this.plural = this.singular + "s";
  }
}

export class Brain extends BeingItem {
  constructor(being: Being) {
    super();
    this.singular = being.getTypes()[0] + " brain";
    this.plural = this.singular + "s";
  }
}

export class Guts extends BeingItem {
  constructor(being: Being) {
    super();
    this.singular = being.getTypes()[0] + " guts";
    this.plural = this.singular;
  }
}
