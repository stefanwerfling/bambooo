"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftNavbar = void 0;
/**
 * LeftNavbar
 */
class LeftNavbar {
    /**
     * entries
     * @private
     */
    _entries = [
        {
            title: 'Home',
            link: '/index.html'
        }
    ];
    /**
     * element
     * @private
     */
    _element;
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        if (element) {
            this._element = jQuery('<ul class="navbar-nav" />').appendTo(element);
        }
        else {
            throw Error('left navbar element not found!');
        }
    }
    /**
     * getElement
     */
    getElement() {
        return this._element;
    }
    /**
     * load
     */
    load() {
        for (const entry of this._entries) {
            jQuery('#ccc_navbar').append(`<li class="nav-item d-none d-sm-inline-block">
                  <a href="${entry.link}" class="nav-link">${entry.title}</a>
                </li>`);
        }
    }
}
exports.LeftNavbar = LeftNavbar;
