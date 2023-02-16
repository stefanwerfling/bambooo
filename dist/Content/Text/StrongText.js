"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrongText = void 0;
const Element_1 = require("../../Element");
/**
 * StrongText
 */
class StrongText extends Element_1.Element {
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<strong/>`).appendTo(telement);
    }
}
exports.StrongText = StrongText;
