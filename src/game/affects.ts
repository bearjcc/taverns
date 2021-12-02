// ============================================================================
// Language: TypeScript
// Path: ts\affects.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

export class Affect {
	name: string;
	description: string;
	static readonly description: string = "Affect";
	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
	}
}

// define new Affect cold
export const cold = new Affect("Cold", "I am cold.");

// define new Affect hungry
export const hungry = new Affect("Hungry", "I am hungry.");

// define new Affect poisoned
export const poisoned = new Affect("Poisoned", "I am poisoned.");

// define new Affect blinded
export const blinded = new Affect("Blinded", "I am blinded.");

// define new Affect stunned
export const stunned = new Affect("Stunned", "I am stunned.");

// define new Affect thirsty
export const thirsty = new Affect("Thirsty", "I am thirsty.");

// define new Affect drunk
export const drunk = new Affect("Drunk", "I am drunk.");

// define new Affect confused
export const confused = new Affect("Confused", "I am confused.");

// define new Affect invisible
export const invisible = new Affect("Invisible", "I am invisible.");

// define new Affect tired
export const tired = new Affect("Tired", "I am tired.");
