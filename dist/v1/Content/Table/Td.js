"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Td = void 0;
const Element_1 = require("../../Element");
/**
 * Td
 */
class Td extends Element_1.Element {
    /**
     * constructor
     * @param atr
     * @param avalue
     * @param colspan
     */
    constructor(atr, avalue, colspan) {
        super();
        let params = '';
        if (colspan) {
            params = `${params} colspan="${colspan}"`;
        }
        this._element = jQuery(`<td ${params}/>`).appendTo(atr.getElement());
        if (avalue) {
            this.addValue(avalue);
        }
    }
    /**
     * addValue
     * @param avalue
     */
    addValue(avalue) {
        const element = this._getAnyElement(avalue);
        this._element.append(element);
    }
}
exports.Td = Td;
