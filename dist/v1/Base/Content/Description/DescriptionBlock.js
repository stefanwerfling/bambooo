"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionBlock = exports.DescriptionBlockBorder = void 0;
const Element_1 = require("../../Element");
const LangText_js_1 = require("../../../Lang/LangText.js");
/**
 * DescriptionBlockBorder
 */
var DescriptionBlockBorder;
(function (DescriptionBlockBorder) {
    DescriptionBlockBorder["none"] = "";
    DescriptionBlockBorder["right"] = "border-right";
})(DescriptionBlockBorder || (exports.DescriptionBlockBorder = DescriptionBlockBorder = {}));
/**
 * DescriptionBlock
 */
class DescriptionBlock extends Element_1.Element {
    /**
     * h5
     * @protected
     */
    _h5;
    /**
     * span
     * @protected
     */
    _span;
    /**
     * constructor
     * @param element
     * @param border
     */
    constructor(element, border = DescriptionBlockBorder.right) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<div class="description-block ${border}" />`).appendTo(telement);
        this._h5 = jQuery('<h5 class="description-header" />').appendTo(this._element);
        this._span = jQuery('<span class="description-text" />').appendTo(this._element);
    }
    /**
     * setHeader
     * @param {string|LangText} str
     */
    setHeader(str) {
        LangText_js_1.LangText.addLangText(this._h5.empty(), str);
    }
    /**
     * setText
     * @param {string|LangText} str
     */
    setText(str) {
        LangText_js_1.LangText.addLangText(this._span.empty(), str);
    }
    /**
     * getTextElement
     */
    getTextElement() {
        return this._span;
    }
}
exports.DescriptionBlock = DescriptionBlock;
