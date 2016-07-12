"use strict";
var appDispatcher_1 = require('../dispatcher/appDispatcher');
var PlayAction_1 = require('../actions/PlayAction');
var PlayActions = (function () {
    function PlayActions() {
    }
    PlayActions.prototype.toggleAnimation = function (dancingStyle) {
        appDispatcher_1.default.dispatch(new PlayAction_1.default("toggleDancing", dancingStyle));
    };
    return PlayActions;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new PlayActions();
//# sourceMappingURL=playActions.js.map