define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PTextType;
    (function (PTextType) {
        PTextType["success"] = "text-success";
        PTextType["info"] = "text-info";
        PTextType["primary"] = "text-primary";
        PTextType["danger"] = "text-danger";
        PTextType["warning"] = "text-warning";
        PTextType["muted"] = "text-muted";
    })(PTextType = exports.PTextType || (exports.PTextType = {}));
    /**
     * PText
     */
    class PText extends Element_1.Element {
        /**
         * constructor
         * @param element
         * @param type
         */
        constructor(element, type = PTextType.muted) {
            super();
            this._element = jQuery(`<p class="${type}" />`).appendTo(element);
        }
        /**
         * addValue
         * @param value
         */
        addValue(value) {
            this._element.append(value);
        }
    }
    exports.PText = PText;
});
//# sourceMappingURL=PText.js.map