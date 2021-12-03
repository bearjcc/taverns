// ============================================================================
// Language: TypeScript
// Path: ts\game\actions.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
import { GameMechanic } from './types';

export class Action extends GameMechanic {
	static readonly action:null;
	name: string;
	description: string;
	static readonly description: string = "Action";
	constructor(name: string, description: string) {
		super();
		this.name = name;
		this.description = description;
	}

	do(): void {
		console.log(`${this.name}!`);
	}
}

// Action: Light Fire
var lightFire = new Action("Light Fire", "I attempt to light a fire");
lightFire.do = function () {
	console.log("Lighting a fire");
};

// Action: Explore Area
var exploreArea = new Action("Explore Area", "I explore the area");
exploreArea.do = function () {
	console.log("Exploring the area");
};
