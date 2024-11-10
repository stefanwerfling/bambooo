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
     * @param {any|Element} element
     * @param {string|JQuery<HTMLElement>|LangText} text
     */
    constructor(element, text) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<strong/>`).appendTo(telement);
        if (text) {
            this.addText(text);
        }
    }
    /**
     * Add Text
     * @param {string|JQuery<HTMLElement>|LangText} text
     */
    addText(text) {
        const ttext = this._getAnyElement(text);
        this._element.addText(text);
    }
}
exports.StrongText = StrongText;
