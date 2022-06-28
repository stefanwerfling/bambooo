define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CalloutType;
    (function (CalloutType) {
        CalloutType["warning"] = "callout-warning";
        CalloutType["danger"] = "callout-danger";
        CalloutType["info"] = "callout-info";
        CalloutType["success"] = "callout-success";
        CalloutType["default"] = "";
    })(CalloutType = exports.CalloutType || (exports.CalloutType = {}));
    /**
     * Callout
     */
    class Callout extends Element_1.Element {
        /**
         * constructor
         * @param element
         * @param type
         */
        constructor(element, type = CalloutType.info) {
            super();
            this._mainElement = jQuery(`<div class="callout ${type}" />`).appendTo(element);
            this._title = jQuery('<h5/>').appendTo(this._mainElement);
            this._element = jQuery('<p/>').appendTo(this._mainElement);
        }
        /**
         * setTitle
         * @param title
         */
        setTitle(title) {
            this._title.empty().append(title);
        }
        /**
         * getMainElement
         */
        getMainElement() {
            return this._mainElement;
        }
    }
    exports.Callout = Callout;
});
//# sourceMappingURL=Callout.js.map