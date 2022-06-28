define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * InfoBox
     */
    class InfoBox extends Element_1.Element {
        /**
         * constructor
         * @param element
         */
        constructor(element) {
            super();
            const telement = this._getAnyElement(element);
            this._element = jQuery('<div class="info-box bg-light" />').appendTo(telement);
        }
    }
    exports.InfoBox = InfoBox;
});
//# sourceMappingURL=InfoBox.js.map