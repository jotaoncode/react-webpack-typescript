"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var learningActions_1 = require("../../actions/learningActions");
var DancingStyle = (function (_super) {
    __extends(DancingStyle, _super);
    function DancingStyle() {
        _super.apply(this, arguments);
    }
    DancingStyle.prototype.learnDancingStyle = function () {
        learningActions_1.default.learnDancingStyle(this.props);
    };
    DancingStyle.prototype.render = function () {
        return React.createElement("li", {onClick: this.learnDancingStyle.bind(this)}, this.props.song);
    };
    return DancingStyle;
}(React.Component));
exports.DancingStyle = DancingStyle;
//# sourceMappingURL=dancingStyle.js.map