// ============================================================================
// Language: TypeScript
// Path: ts\actions.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================

export class Action {
	name: string;
	description: string;
	do: Function;
	static readonly description: string = "Action";
	constructor(name: string, description: string) {
		this.name = name;
		this.description = description;
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
