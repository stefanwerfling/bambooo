"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightNavbar = void 0;
/**
 * RightNavbar
 */
class RightNavbar {
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        if (element) {
            this._element = jQuery('<ul class="navbar-nav ml-auto" />').appendTo(element);
        }
        else {
            throw Error('right navbar element not found!');
        }
    }
    /**
     * getElement
     */
    getElement() {
        return this._element;
    }
}
exports.RightNavbar = RightNavbar;
