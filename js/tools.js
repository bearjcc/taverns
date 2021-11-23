"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tool = void 0;
// ============================================================================
// Language: TypeScript
// Path: ts\tools.ts
// Author: Joseph C. Caswell
// All rights reserved.
// Owner: Ursa Minor Inc.
// ============================================================================
var items_1 = require("./items");
var Tool = /** @class */ (function (_super) {
    __extends(Tool, _super);
    function Tool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tool;
}(items_1.Item));
exports.Tool = Tool;
