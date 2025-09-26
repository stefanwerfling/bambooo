"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Th = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Th
 */
class Th extends Component_js_1.Component {
    /**
     * constructor
     * @param {Tr} atr
     * @param {ComponentType} avalue
     * @param {width} width
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
exports.Th = Th;
