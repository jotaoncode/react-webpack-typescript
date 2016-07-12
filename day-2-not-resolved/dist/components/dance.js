"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Dance = (function (_super) {
    __extends(Dance, _super);
    function Dance() {
        _super.apply(this, arguments);
    }
    Dance.prototype.render = function () {
        return React.createElement("h1", null, 
            "Hello from ", 
            this.props.floor, 
            "!");
    };
    return Dance;
}(React.Component));
exports.Dance = Dance;
//# sourceMappingURL=dance.js.map