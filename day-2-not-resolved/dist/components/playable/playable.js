"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var learningActions_1 = require("../../actions/learningActions");
var dancingControls_1 = require('../../stores/dancingControls');
var playActions_1 = require("../../actions/playActions");
var Playable = (function (_super) {
    __extends(Playable, _super);
    function Playable() {
        _super.apply(this, arguments);
    }
    Playable.prototype.forgetDancingStyle = function () {
        learningActions_1.default.forgetDancingStyle(this.props);
    };
    Playable.prototype.togglePlay = function () {
        playActions_1.default.toggleAnimation(this.props);
    };
    Playable.prototype.render = function () {
        var isPlayingNow = dancingControls_1.default.isPlaying() && dancingControls_1.default.getSelectedStyle().style === this.props.style;
        var textButton = "Play!";
        if (isPlayingNow) {
            textButton = "Stop!";
        }
        return React.createElement("li", null, 
            this.props.song, 
            React.createElement("button", {onClick: this.togglePlay.bind(this)}, textButton), 
            React.createElement("button", {onClick: this.forgetDancingStyle.bind(this)}, "Remove"));
    };
    return Playable;
}(React.Component));
exports.Playable = Playable;
//# sourceMappingURL=playable.js.map