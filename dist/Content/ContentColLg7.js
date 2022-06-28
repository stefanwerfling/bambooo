define(["require", "exports", "../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ContentColLg7
     */
    class ContentColLg7 extends Element_1.Element {
        constructor(contentRow) {
            super();
            this._element = jQuery('<div class="col-lg-7" />').appendTo(contentRow.getElement());
        }
    }
    exports.ContentColLg7 = ContentColLg7;
});
//# sourceMappingURL=ContentColLg7.js.map