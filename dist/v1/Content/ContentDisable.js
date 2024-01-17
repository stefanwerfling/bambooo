"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentDisable = void 0;
const Element_1 = require("../Element");
/**
 * ContentDisable
 */
class ContentDisable extends Element_1.Element {
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="overlay dark"></div>').appendTo(telement);
    }
}
exports.ContentDisable = ContentDisable;
