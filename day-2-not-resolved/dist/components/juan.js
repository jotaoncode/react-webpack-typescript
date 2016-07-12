"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var dancingControls_1 = require('../stores/dancingControls');
var Juan = (function (_super) {
    __extends(Juan, _super);
    function Juan() {
        _super.call(this);
        this.state = {
            isPlaying: dancingControls_1.default.isPlaying(),
            selectedStyle: dancingControls_1.default.getSelectedStyle()
        };
    }
    Juan.prototype.componentWillMount = function () {
        dancingControls_1.default.addChangeListener(this.onChange.bind(this));
    };
    Juan.prototype.componentWillUnmount = function () {
        dancingControls_1.default.removeChangeListener(this.onChange.bind(this));
    };
    Juan.prototype.onChange = function () {
        this.setState({
            isPlaying: dancingControls_1.default.isPlaying(),
            selectedStyle: dancingControls_1.default.getSelectedStyle()
        });
    };
    Juan.prototype.render = function () {
        var classPlaying = this.state.isPlaying ? 'play' : 'stop';
        var gifRef = this.state.selectedStyle ? this.state.selectedStyle.href : null;
        return React.createElement("div", null, 
            React.createElement("iframe", {src: gifRef, className: classPlaying})
        );
    };
    return Juan;
}(React.Component));
exports.Juan = Juan;
//# sourceMappingURL=juan.js.map