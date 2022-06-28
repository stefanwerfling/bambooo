define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Table extends Element_1.Element {
        constructor(element) {
            super();
            this._tfoot = null;
            this._element = jQuery('<table class="table table-hover text-nowrap"/>').appendTo(element);
            this._thead = jQuery('<thead />').appendTo(this._element);
            this._tbody = jQuery('<tbody />').appendTo(this._element);
        }
        getThead() {
            return this._thead;
        }
        getTbody() {
            return this._tbody;
        }
        getFoot() {
            if (this._tfoot === null) {
                this._tfoot = jQuery('<tfoot />').appendTo(this._element);
            }
            return this._tfoot;
        }
    }
    exports.Table = Table;
});
//# sourceMappingURL=Table.js.map