"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var dancingControls_1 = require('../stores/dancingControls');
var Animation = (function (_super) {
    __extends(Animation, _super);
    function Animation() {
        _super.call(this);
        this.state = dancingControls_1.default.getControlState();
    }
    Animation.prototype.componentWillMount = function () {
        dancingControls_1.default.addChangeListener(this.onChange.bind(this));
    };
    Animation.prototype.componentWillUnmount = function () {
        dancingControls_1.default.removeChangeListener(this.onChange);
    };
    Animation.prototype.onChange = function () {
        this.setState(dancingControls_1.default.getControlState());
    };
    Animation.prototype.render = function () {
        var classPlaying = this.state.isPlaying ? 'play' : 'stop';
        var gifRef = this.state.selectedStyle ? this.state.selectedStyle.href : null;
        return React.createElement("div", null, 
            React.createElement("iframe", {src: gifRef, className: classPlaying})
        );
    };
    return Animation;
}(React.Component));
exports.Animation = Animation;
//# sourceMappingURL=animation.js.map