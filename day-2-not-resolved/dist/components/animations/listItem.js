"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ListItem = (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        _super.apply(this, arguments);
    }
    ListItem.prototype.render = function () {
        return React.createElement("li", {onClick: this.props.onLiClick}, this.props.liText);
    };
    return ListItem;
}(React.Component));
exports.ListItem = ListItem;
//# sourceMappingURL=listItem.js.map