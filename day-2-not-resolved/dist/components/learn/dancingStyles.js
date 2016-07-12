"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var dancingStyle_1 = require("./dancingStyle");
var dancingStyles_1 = require('../../stores/dancingStyles');
var DancingStyles = (function (_super) {
    __extends(DancingStyles, _super);
    function DancingStyles() {
        _super.call(this);
        this.state = {
            stylesLearnt: dancingStyles_1.default.getDancingLearnt(),
            existingStyles: dancingStyles_1.default.getDancingStyles()
        };
    }
    DancingStyles.prototype.componentWillMount = function () {
        dancingStyles_1.default.addChangeListener(this.onChange.bind(this));
    };
    DancingStyles.prototype.componentWillUnmount = function () {
        dancingStyles_1.default.removeChangeListener(this.onChange.bind(this));
    };
    DancingStyles.prototype.onChange = function () {
        this.setState({
            stylesLearnt: dancingStyles_1.default.getDancingLearnt(),
            existingStyles: dancingStyles_1.default.getDancingStyles()
        });
    };
    DancingStyles.prototype.render = function () {
        var styles = this.state.existingStyles.map(function (style, index) {
            return (React.createElement(dancingStyle_1.DancingStyle, {href: style.href, song: style.song, style: style.style, key: index}));
        });
        return React.createElement("ul", null, styles);
    };
    return DancingStyles;
}(React.Component));
exports.DancingStyles = DancingStyles;
//# sourceMappingURL=dancingStyles.js.map