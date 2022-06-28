define(["require", "exports", "../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ContentColLg5
     */
    class ContentColLg5 extends Element_1.Element {
        constructor(contentRow) {
            super();
            this._element = jQuery('<div class="col-lg-5" />').appendTo(contentRow.getElement());
        }
    }
    exports.ContentColLg5 = ContentColLg5;
});
//# sourceMappingURL=ContentColLg5.js.map