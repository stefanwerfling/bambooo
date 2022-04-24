"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentColLg5 = void 0;
const Element_1 = require("../Element");
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
