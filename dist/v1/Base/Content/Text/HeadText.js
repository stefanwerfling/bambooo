"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadText = void 0;
const Element_js_1 = require("./../../Element.js");
/**
 * H Head element
 */
class HeadText extends Element_js_1.Element {
    /**
     * constructor
     * @param {any|Element} element
     * @param {number} hnum
     * @param {string|LangText} title
     */
    constructor(element, hnum, title = '') {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<h${hnum}/>`).appendTo(telement);
        this.setTitle(title);
    }
    /**
     * Set title
     * @param {string|JQuery<HTMLElement>|LangText} title
     */
    setTitle(title) {
        const ttitle = this._getAnyElement(title);
        this._element.empty().append(ttitle);
    }
}
exports.HeadText = HeadText;
