define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ButtonGroup
     */
    class ButtonGroup extends Element_1.Element {
        /**
         * constructor
         * @param element
         */
        constructor(element) {
            super();
            this._element = jQuery('<div class="btn-group" />').appendTo(element);
        }
    }
    exports.ButtonGroup = ButtonGroup;
});
//# sourceMappingURL=ButtonGroup.js.map