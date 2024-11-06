"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionBlock = exports.DescriptionBlockBorder = void 0;
const Element_1 = require("../../Element");
/**
 * DescriptionBlockBorder
 */
var DescriptionBlockBorder;
(function (DescriptionBlockBorder) {
    DescriptionBlockBorder["none"] = "";
    DescriptionBlockBorder["right"] = "border-right";
})(DescriptionBlockBorder = exports.DescriptionBlockBorder || (exports.DescriptionBlockBorder = {}));
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
     * @param str
     */
    setHeader(str) {
        this._h5.empty().append(str);
    }
    /**
     * setText
     * @param str
     */
    setText(str) {
        this._span.empty().append(str);
    }
    /**
     * getTextElement
     */
    getTextElement() {
        return this._span;
    }
}
exports.DescriptionBlock = DescriptionBlock;
