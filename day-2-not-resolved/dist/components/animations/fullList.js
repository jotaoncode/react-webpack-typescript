"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var listItem_1 = require("./listItem");
var learningActions_1 = require("../../actions/learningActions");
var dancingStyles_1 = require('../../stores/dancingStyles');
var FullList = (function (_super) {
    __extends(FullList, _super);
    function FullList() {
        _super.call(this);
        this.state = dancingStyles_1.default.getExistingStyles();
    }
    FullList.prototype.componentWillMount = function () {
        dancingStyles_1.default.addChangeListener(this.onChange.bind(this));
    };
    FullList.prototype.componentWillUnmount = function () {
        dancingStyles_1.default.removeChangeListener(this.onChange);
    };
    FullList.prototype.onChange = function () {
        this.setState(dancingStyles_1.default.getExistingStyles());
    };
    FullList.prototype.learnDancingStyle = function (style) {
        return function () {
            learningActions_1.default.learnDancingStyle(style);
        };
    };
    FullList.prototype.render = function () {
        var _this = this;
        var styles = this.state.existingStyles.map(function (style, index) {
            return (React.createElement(listItem_1.ListItem, {liText: style.song, onLiClick: _this.learnDancingStyle(style), key: index}));
        });
        return React.createElement("ul", null, styles);
    };
    return FullList;
}(React.Component));
exports.FullList = FullList;
//# sourceMappingURL=fullList.js.map