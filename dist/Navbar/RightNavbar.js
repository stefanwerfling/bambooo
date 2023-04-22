"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightNavbar = void 0;
const Element_1 = require("../Element");
/**
 * RightNavbar
 */
class RightNavbar extends Element_1.Element {
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        if (telement) {
            this._element = jQuery('<ul class="navbar-nav ml-auto" />').appendTo(telement);
        }
        else {
            throw Error('right navbar element not found!');
        }
    }
}
exports.RightNavbar = RightNavbar;
