"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events = require('events');
var appDispatcher_1 = require('../dispatcher/appDispatcher');
var isPlaying = false;
var CHANGE_EVENT = 'change';
var actualStyle;
var PlayingActions = (function (_super) {
    __extends(PlayingActions, _super);
    function PlayingActions() {
        _super.apply(this, arguments);
    }
    PlayingActions.prototype.addChangeListener = function (cb) {
        this.on(CHANGE_EVENT, cb);
    };
    PlayingActions.prototype.removeChangeListener = function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    };
    PlayingActions.prototype.isPlaying = function () {
        return isPlaying;
    };
    PlayingActions.prototype.toggleAnimation = function (dancingStyle) {
        isPlaying = !isPlaying;
        if (isPlaying) {
            actualStyle = dancingStyle;
        }
    };
    PlayingActions.prototype.getSelectedStyle = function () {
        return actualStyle;
    };
    PlayingActions.prototype.getControlState = function () {
        return {
            selectedStyle: this.getSelectedStyle(),
            isPlaying: this.isPlaying()
        };
    };
    PlayingActions.prototype.emitChange = function () {
        this.emit(CHANGE_EVENT);
    };
    return PlayingActions;
}(events.EventEmitter));
var playingStore = new PlayingActions();
appDispatcher_1.default.register(function (action) {
    switch (action.type) {
        case "toggleDancing":
            playingStore.toggleAnimation(action.data);
            break;
        default:
    }
    playingStore.emitChange();
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = playingStore;
//# sourceMappingURL=dancingControls.js.map