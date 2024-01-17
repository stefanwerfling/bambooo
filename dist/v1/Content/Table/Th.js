"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Th = void 0;
const Element_1 = require("../../Element");
/**
 * Th
 */
class Th extends Element_1.Element {
    /**
     * constructor
     * @param atr
     * @param avalue
     */
    constructor(atr, avalue, width) {
        super();
        this._element = jQuery('<th/>').appendTo(atr.getElement());
        if (width) {
            this._element.css({
                width
            });
        }
        if (avalue) {
            this.addValue(avalue);
        }
    }
    /**
     * addValue
     * @param avalue
     */
    addValue(avalue) {
        const telement = Element_1.Element.getAnyElement(avalue);
        this._element.append(telement);
    }
}
exports.Th = Th;
