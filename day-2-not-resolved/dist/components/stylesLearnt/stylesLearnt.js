"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var styleLearnt_1 = require('./styleLearnt');
var dancingStyles_1 = require('../../stores/dancingStyles');
var StylesLearnt = (function (_super) {
    __extends(StylesLearnt, _super);
    function StylesLearnt() {
        _super.call(this);
        this.state = {
            stylesLearnt: dancingStyles_1.default.getDancingLearnt(),
            existingStyles: dancingStyles_1.default.getDancingStyles()
        };
    }
    StylesLearnt.prototype.componentWillMount = function () {
        dancingStyles_1.default.addChangeListener(this.onChange.bind(this));
    };
    StylesLearnt.prototype.componentWillUnmount = function () {
        dancingStyles_1.default.removeChangeListener(this.onChange.bind(this));
    };
    StylesLearnt.prototype.onChange = function () {
        this.setState({
            stylesLearnt: dancingStyles_1.default.getDancingLearnt(),
            existingStyles: dancingStyles_1.default.getDancingStyles()
        });
    };
    StylesLearnt.prototype.render = function () {
        var styles = this.state.stylesLearnt.map(function (style, index) {
            return (React.createElement(styleLearnt_1.StyleLearnt, {href: style.href, song: style.song, style: style.style, key: index}));
        });
        return React.createElement("ul", null, styles);
    };
    return StylesLearnt;
}(React.Component));
exports.StylesLearnt = StylesLearnt;
//# sourceMappingURL=stylesLearnt.js.map