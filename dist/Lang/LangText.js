"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangText = void 0;
const Element_1 = require("../Element");
/**
 * LangText
 */
class LangText extends Element_1.Element {
    /**
     * constructor
     * @param text
     */
    constructor(text) {
        super();
        this._element = jQuery('<span />');
        this._element.attr('lang', '1');
        this._element.attr('lang-value', text);
        this._element.append(text);
    }
    /**
     * addLangText
     * @param element
     * @param atext
     */
    static addLangText(element, atext) {
        const telement = Element_1.Element.getAnyElement(element);
        if (atext instanceof LangText) {
            telement.empty().append(atext.getElement());
        }
        else {
            telement.empty().append(atext);
        }
    }
}
exports.LangText = LangText;
