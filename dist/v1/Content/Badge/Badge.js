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
    BadgeType["primary"] = "badge-primary";
    BadgeType["secondary"] = "badge-secondary";
    BadgeType["light"] = "badge-light";
    BadgeType["dark"] = "badge-dark";
    BadgeType["purple"] = "bg-purple";
    BadgeType["color_cream_red"] = "#DE3163";
    BadgeType["color_cream_rorange"] = "#FF7F50";
    BadgeType["color_cream_orange"] = "#FFBF00";
    BadgeType["color_cream_yellow"] = "#DFFF00";
    BadgeType["color_cream_green"] = "#9FE2BF";
    BadgeType["color_cream_bgreen"] = "#40E0D0";
    BadgeType["color_cream_blue"] = "#6495ED";
    BadgeType["color_cream_purpel"] = "#CCCCFF";
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
    constructor(element, text, type = BadgeType.success, aColor) {
        super();
        let strType = '';
        let isColor = true;
        if (type.indexOf('#') === -1) {
            strType = type;
            isColor = false;
        }
        if (aColor !== undefined) {
            strType = '';
        }
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<span class="badge ${strType}">${text}</span>`).appendTo(telement);
        if (aColor !== undefined) {
            this._element.css({
                background: aColor
            });
        }
        else if (isColor) {
            this._element.css({
                background: type
            });
        }
    }
}
exports.Badge = Badge;
