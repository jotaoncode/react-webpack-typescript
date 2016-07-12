"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var animation_1 = require('./animation');
var playables_1 = require('./playable/playables');
var fullList_1 = require('./animations/fullList');
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        _super.apply(this, arguments);
    }
    Application.prototype.render = function () {
        return React.createElement("div", null, 
            React.createElement("section", {className: "list-to-play"}, 
                React.createElement("h1", null, "Playable List"), 
                React.createElement(playables_1.ListToPlay, null)), 
            React.createElement("section", {className: "animation"}, 
                React.createElement("h1", null, "Animation"), 
                React.createElement(animation_1.Animation, null)), 
            React.createElement("section", {className: "full-list"}, 
                React.createElement("h1", null, "Choosing List"), 
                React.createElement(fullList_1.FullList, null)));
    };
    return Application;
}(React.Component));
exports.Application = Application;
//# sourceMappingURL=application.js.map