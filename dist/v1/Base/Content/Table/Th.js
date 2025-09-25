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
     * addValue
     * @param {ComponentType} avalue
     */
    addValue(avalue) {
        const telement = Component_js_1.Component.getAnyElement(avalue);
        this._element.append(telement);
    }
}
exports.Th = Th;
