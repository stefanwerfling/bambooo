define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * IconFa
     */
    var IconFa;
    (function (IconFa) {
        IconFa["edit"] = "fa fa-edit";
        IconFa["add"] = "fa fa-plus";
        IconFa["trash"] = "fa fa-trash";
        IconFa["bars"] = "fas fa-bars";
        IconFa["ban"] = "icon fas fa-ban";
        IconFa["info"] = "icon fas fa-info";
        IconFa["alert"] = "icon fas fa-exclamation-triangle";
        IconFa["success"] = "icon fas fa-check";
    })(IconFa = exports.IconFa || (exports.IconFa = {}));
    /**
     * Icon
     */
    class Icon extends Element_1.Element {
        /**
         * constructor
         * @param element
         */
        constructor(element, symbol) {
            super();
            jQuery(`<i class="fa ${symbol}"></i>`).appendTo(element);
        }
    }
    exports.Icon = Icon;
});
//# sourceMappingURL=Icon.js.map