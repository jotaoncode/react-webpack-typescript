"use strict";
var appDispatcher_1 = require('../dispatcher/appDispatcher');
var CommonAction_1 = require('../actions/CommonAction');
var LearningActions = (function () {
    function LearningActions() {
    }
    LearningActions.prototype.forgetDancingStyle = function (dancingStyle) {
        appDispatcher_1.default.dispatch(new CommonAction_1.default("forgetDancingStyle", dancingStyle));
    };
    LearningActions.prototype.learnDancingStyle = function (dancingStyle) {
        appDispatcher_1.default.dispatch(new CommonAction_1.default("learnDancingStyle", dancingStyle));
    };
    LearningActions.prototype.setPlayingStyle = function (dancingStyle) {
        appDispatcher_1.default.dispatch(new CommonAction_1.default("setPlayingStyle", dancingStyle));
    };
    return LearningActions;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new LearningActions();
//# sourceMappingURL=learningActions.js.map