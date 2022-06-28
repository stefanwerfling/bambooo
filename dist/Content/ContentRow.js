define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ContentRow {
        constructor(content) {
            this._element = jQuery('<div class="row" />').appendTo(content.getContentFluidElement());
        }
        getElement() {
            return this._element;
        }
    }
    exports.ContentRow = ContentRow;
});
//# sourceMappingURL=ContentRow.js.map