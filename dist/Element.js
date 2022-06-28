define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Element
     */
    class Element {
        /**
         * constructor
         * @param aelement
         */
        constructor(aelement) {
            if (aelement) {
                this._element = this._getAnyElement(aelement);
            }
        }
        /**
         * getElement
         * return the main enclosed element
         */
        getElement() {
            return this._element;
        }
        /**
         * _getAnyElement
         * helper for giving a element as any (by jquery)
         * @param aelement
         * @protected
         */
        _getAnyElement(aelement) {
            if (aelement instanceof Element) {
                return aelement.getElement();
            }
            return aelement;
        }
    }
    exports.Element = Element;
});
//# sourceMappingURL=Element.js.map