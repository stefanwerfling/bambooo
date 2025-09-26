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
     * Add a value
     * @param {ComponentType|string} avalue
     */
    addValue(avalue) {
        if (typeof avalue === 'string') {
            this.addText(avalue);
        }
        else {
            this.addComponent(avalue);
        }
    }
    /**
     * Add a text
     * @param {string} text
     */
    addText(text) {
        this._element.append(text);
    }
    /**
     * Add component
     * @param {ComponentType} component
     */
    addComponent(component) {
        this._element.append(this._getAnyElement(component));
    }
}
exports.Td = Td;
