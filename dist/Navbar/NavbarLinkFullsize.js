"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarLinkFullsize = void 0;
const Element_1 = require("../Element");
/**
 * NavbarLinkFullsize
 */
class NavbarLinkFullsize extends Element_1.Element {
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        this._element = jQuery('<li class="nav-item" />').appendTo(element);
        const a = jQuery('<a class="nav-link" data-widget="fullscreen" href="#" role="button" />').appendTo(this._element);
        jQuery('<i class="fas fa-expand-arrows-alt" />').appendTo(a);
    }
}
exports.NavbarLinkFullsize = NavbarLinkFullsize;
