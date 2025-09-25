"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftNavbar = void 0;
const Component_js_1 = require("../Component.js");
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
     * Constructor
     * @param element
     */
    constructor(element) {
        if (element) {
            this._element = jQuery('<ul class="navbar-nav" />').appendTo(Component_js_1.Component.getAnyElement(element));
        }
        else {
            throw Error('left navbar element not found!');
        }
    }
    /**
     * Get element
     * @return {JQuery}
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
