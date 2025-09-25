"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftNavbarLink = void 0;
const Icon_js_1 = require("../Content/Icon/Icon.js");
const LangText_js_1 = require("../../Lang/LangText.js");
/**
 * LeftNavbarLink
 */
class LeftNavbarLink {
    /**
     * list element
     * @private
     */
    _liElement;
    /**
     * link element
     * @private
     */
    _aElement;
    /**
     * constructor
     * @param {LeftNavbar} leftNavbar
     * @param {string|LangText} title
     * @param {LeftNavbarLinkFn|null} onClickFn
     * @param {string} linkClass
     * @param {IconFa|string|null} icon
     */
    constructor(leftNavbar, title, onClickFn, linkClass = '', icon = null) {
        this._liElement = jQuery('<li class="nav-item d-none d-sm-inline-block" />').appendTo(leftNavbar.getElement());
        this._aElement = jQuery(`<a href="#" class="nav-link ${linkClass}"></a>`).appendTo(this._liElement);
        if (icon !== null) {
            new Icon_js_1.Icon(this._aElement, icon);
            this._aElement.append('&nbsp;');
        }
        const textDiv = jQuery('<span></span>').appendTo(this._aElement);
        LangText_js_1.LangText.addLangText(textDiv, title);
        if (onClickFn) {
            this._aElement.on('click', onClickFn);
        }
        else if (onClickFn !== null) {
            this._aElement.on('click', () => {
                return false;
            });
        }
    }
    /**
     * getLiElement
     * @return {JQuery}
     */
    getLiElement() {
        return this._liElement;
    }
    /**
     * getAElement
     * @return {JQuery}
     */
    getAElement() {
        return this._aElement;
    }
}
exports.LeftNavbarLink = LeftNavbarLink;
