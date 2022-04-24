"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Badge = exports.BadgeType = void 0;
const Element_1 = require("../../Element");
/**
 * BadgeType
 */
var BadgeType;
(function (BadgeType) {
    BadgeType["success"] = "badge-success";
    BadgeType["warning"] = "badge-warning";
    BadgeType["danger"] = "badge-danger";
    BadgeType["info"] = "badge-info";
})(BadgeType = exports.BadgeType || (exports.BadgeType = {}));
/**
 * Badge
 */
class Badge extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param text
     * @param type
     */
    constructor(element, text, type = BadgeType.success) {
        super();
        this._element = jQuery(`<span class="badge ${type}">${text}</span>`).appendTo(element);
    }
}
exports.Badge = Badge;
