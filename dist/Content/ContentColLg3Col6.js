"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentColLg3Col6 = void 0;
const Element_1 = require("../Element");
class ContentColLg3Col6 extends Element_1.Element {
    constructor(contentRow) {
        super();
        this._element = jQuery('<div class="col-lg-3 col-6" />').appendTo(contentRow.getElement());
    }
}
exports.ContentColLg3Col6 = ContentColLg3Col6;
