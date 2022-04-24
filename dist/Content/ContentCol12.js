"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentCol12 = void 0;
const Element_1 = require("../Element");
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
