"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tr = void 0;
const Element_1 = require("../../Element");
/**
 * Tr
 */
class Tr extends Element_1.Element {
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<tr />').appendTo(telement);
    }
}
exports.Tr = Tr;
