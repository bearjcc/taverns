"use strict";
// ============================================================================
// Language: TypeScript
// Path: ts\affects.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
exports.__esModule = true;
exports.Affect = void 0;
var Affect = /** @class */ (function () {
    function Affect(name, description) {
        this.name = name;
        this.description = description;
    }
    Affect.description = "Affect";
    return Affect;
}());
exports.Affect = Affect;
// define new Affect cold
var cold = new Affect("Cold", "I am cold.");
// define new Affect hungry
var hungry = new Affect("Hungry", "I am hungry.");
// define new Affect poisoned
var poisoned = new Affect("Poisoned", "I am poisoned.");
// define new Affect blinded
var blinded = new Affect("Blinded", "I am blinded.");
// define new Affect stunned
var stunned = new Affect("Stunned", "I am stunned.");
// define new Affect thirsty
var thirsty = new Affect("Thirsty", "I am thirsty.");
// define new Affect drunk
var drunk = new Affect("Drunk", "I am drunk.");
// define new Affect confused
var confused = new Affect("Confused", "I am confused.");
// define new Affect invisible
var invisible = new Affect("Invisible", "I am invisible.");
// define new Affect tired
var tired = new Affect("Tired", "I am tired.");
