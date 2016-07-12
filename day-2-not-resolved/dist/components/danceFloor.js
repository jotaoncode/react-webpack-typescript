"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var animation_1 = require('./animation');
var stylesLearnt_1 = require('./stylesLearnt/stylesLearnt');
var dancingStyles_1 = require('./learn/dancingStyles');
var Application = (function (_super) {
    __extends(Application, _super);
    function Application() {
        _super.apply(this, arguments);
    }
    Application.prototype.render = function () {
        return React.createElement("div", null, 
            React.createElement("section", null, 
                React.createElement(stylesLearnt_1.StylesLearnt, null)
            ), 
            React.createElement("section", null, 
                React.createElement(animation_1.Animation, null)
            ), 
            React.createElement("section", null, 
                React.createElement(dancingStyles_1.DancingStyles, null)
            ));
    };
    return Application;
}(React.Component));
exports.Application = Application;
//# sourceMappingURL=danceFloor.js.map