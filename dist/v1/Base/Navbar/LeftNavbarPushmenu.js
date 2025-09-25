"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftNavbarPushmenu = void 0;
/**
 * Left navbar pushmenu
 */
class LeftNavbarPushmenu {
    /**
     * Li
     * @protected
     */
    _li;
    /**
     * Constructor
     * @param {LeftNavbar} leftNavbar
     */
    constructor(leftNavbar) {
        this._li = jQuery('<li class="nav-item" />').appendTo(leftNavbar.getElement());
        jQuery('<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>').appendTo(this._li);
    }
    /**
     * Get Li element
     * @return {JQuery}
     */
    getLiElement() {
        return this._li;
    }
}
exports.LeftNavbarPushmenu = LeftNavbarPushmenu;
