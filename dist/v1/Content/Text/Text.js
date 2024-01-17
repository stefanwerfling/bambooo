"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.TextAlignment = void 0;
const Element_1 = require("../../Element");
/**
 * TextAlignment
 */
var TextAlignment;
(function (TextAlignment) {
    TextAlignment["none"] = "";
    TextAlignment["center"] = "text-center";
})(TextAlignment = exports.TextAlignment || (exports.TextAlignment = {}));
/**
 * Text
 */
class Text extends Element_1.Element {
    /**
     * constructor
     * @param element
     */
    constructor(element, align = TextAlignment.none) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div />').appendTo(telement);
        this._element.addClass(`${align}`);
    }
}
exports.Text = Text;
