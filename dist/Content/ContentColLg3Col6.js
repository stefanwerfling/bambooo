define(["require", "exports", "../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ContentColLg3Col6 extends Element_1.Element {
        constructor(contentRow) {
            super();
            this._element = jQuery('<div class="col-lg-3 col-6" />').appendTo(contentRow.getElement());
        }
    }
    exports.ContentColLg3Col6 = ContentColLg3Col6;
});
//# sourceMappingURL=ContentColLg3Col6.js.map