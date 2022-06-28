define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        constructor(element, text, type = BadgeType.success) {
            super();
            let strType = '';
            let isColor = true;
            if (type.indexOf('#') === -1) {
                strType = type;
                isColor = false;
            }
            this._element = jQuery(`<span class="badge ${strType}">${text}</span>`).appendTo(element);
            if (isColor) {
                this._element.css({
                    background: type
                });
            }
        }
    }
    exports.Badge = Badge;
});
//# sourceMappingURL=Badge.js.map