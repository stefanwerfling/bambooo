"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentColLg7 = void 0;
const Element_1 = require("../Element");
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
