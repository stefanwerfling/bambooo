define(["require", "exports", "../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ContentCol12
     */
    class ContentCol12 extends Element_1.Element {
        constructor(contentRow) {
            super();
            this._element = jQuery('<div class="col-12" />').appendTo(contentRow.getElement());
        }
    }
    exports.ContentCol12 = ContentCol12;
});
//# sourceMappingURL=ContentCol12.js.map