"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Td = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Td
 */
class Td extends Component_js_1.Component {
    /**
     * Constructor
     * @param {Tr} atr
     * @param {ComponentType} avalue
     * @param {number} colspan
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
     * @param {ComponentType} avalue
     */
    addValue(avalue) {
        const element = this._getAnyElement(avalue);
        this._element.append(element);
    }
}
exports.Td = Td;
