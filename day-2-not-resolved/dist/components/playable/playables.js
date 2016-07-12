"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var playable_1 = require('./playable');
var dancingStyles_1 = require('../../stores/dancingStyles');
var ListToPlay = (function (_super) {
    __extends(ListToPlay, _super);
    function ListToPlay() {
        _super.call(this);
        this.state = dancingStyles_1.default.getExistingStyles();
    }
    ListToPlay.prototype.componentWillMount = function () {
        dancingStyles_1.default.addChangeListener(this.onChange.bind(this));
    };
    ListToPlay.prototype.componentWillUnmount = function () {
        dancingStyles_1.default.removeChangeListener(this.onChange);
    };
    ListToPlay.prototype.onChange = function () {
        this.setState(dancingStyles_1.default.getExistingStyles());
    };
    ListToPlay.prototype.render = function () {
        var styles = this.state.stylesLearnt.map(function (style, index) {
            return (React.createElement(playable_1.Playable, {href: style.href, song: style.song, style: style.style, key: index}));
        });
        return React.createElement("ul", null, styles);
    };
    return ListToPlay;
}(React.Component));
exports.ListToPlay = ListToPlay;
//# sourceMappingURL=playables.js.map