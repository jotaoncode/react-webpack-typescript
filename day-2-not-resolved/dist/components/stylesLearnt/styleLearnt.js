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
var StyleLearnt = (function (_super) {
    __extends(StyleLearnt, _super);
    function StyleLearnt() {
        _super.apply(this, arguments);
    }
    StyleLearnt.prototype.forgetDancingStyle = function () {
        learningActions_1.default.forgetDancingStyle(this.props);
    };
    StyleLearnt.prototype.togglePlay = function () {
        playActions_1.default.toggleAnimation(this.props);
    };
    StyleLearnt.prototype.render = function () {
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
    return StyleLearnt;
}(React.Component));
exports.StyleLearnt = StyleLearnt;
//# sourceMappingURL=styleLearnt.js.map