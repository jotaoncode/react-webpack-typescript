"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var events = require('events');
var appDispatcher_1 = require('../dispatcher/appDispatcher');
var dancingStyles = {
    existingStyles: [{
            "style": "metal",
            "song": "motorhead",
            "href": "//giphy.com/embed/Lsqqem0OD4xCU"
        }, {
            "style": "rock",
            "song": "RockSchool",
            "href": "//giphy.com/embed/b09xElu8in7Lq"
        }, {
            "style": "salsa",
            "song": "dogSalsa",
            "href": "//giphy.com/embed/qYBwkyptCLXaw"
        }],
    stylesLearnt: []
};
var selectedStyle;
var CHANGE_EVENT = 'change';
var DancingStylesStore = (function (_super) {
    __extends(DancingStylesStore, _super);
    function DancingStylesStore() {
        _super.apply(this, arguments);
    }
    DancingStylesStore.prototype.addChangeListener = function (cb) {
        this.on(CHANGE_EVENT, cb);
    };
    DancingStylesStore.prototype.removeChangeListener = function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    };
    DancingStylesStore.prototype.forgetDancingStyle = function (dancingStyle) {
        var newStylesLearnt = dancingStyles.stylesLearnt.filter(function (styleLearnt) { return styleLearnt.style !== dancingStyle.style; });
        var newExistingStyles = dancingStyles.existingStyles.concat(dancingStyle);
        dancingStyles = {
            stylesLearnt: newStylesLearnt,
            existingStyles: newExistingStyles
        };
    };
    DancingStylesStore.prototype.learnDancingStyle = function (dancingStyle) {
        var newExistingStyles = dancingStyles.existingStyles.filter(function (existingStyle) { return existingStyle.style !== dancingStyle.style; });
        var newStylesLearnt = dancingStyles.stylesLearnt.concat(dancingStyle);
        dancingStyles = {
            stylesLearnt: newStylesLearnt,
            existingStyles: newExistingStyles
        };
    };
    DancingStylesStore.prototype.emitChange = function () {
        this.emit(CHANGE_EVENT);
    };
    DancingStylesStore.prototype.getDancingStyles = function () {
        return dancingStyles.existingStyles;
    };
    DancingStylesStore.prototype.getDancingLearnt = function () {
        return dancingStyles.stylesLearnt;
    };
    DancingStylesStore.prototype.getExistingStyles = function () {
        return {
            stylesLearnt: this.getDancingLearnt(),
            existingStyles: this.getDancingStyles()
        };
    };
    return DancingStylesStore;
}(events.EventEmitter));
var dancingStylesStore = new DancingStylesStore();
appDispatcher_1.default.register(function (action) {
    switch (action.type) {
        case "learnDancingStyle":
            dancingStylesStore.learnDancingStyle(action.msg);
            break;
        case "forgetDancingStyle":
            dancingStylesStore.forgetDancingStyle(action.msg);
            break;
        default:
    }
    dancingStylesStore.emitChange();
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dancingStylesStore;
//# sourceMappingURL=dancingStyles.js.map