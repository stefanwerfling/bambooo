"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Th = void 0;
const Element_1 = require("../../Element");
class Th extends Element_1.Element {
    constructor(atr, avalue) {
        super();
        this._element = jQuery('<th/>').appendTo(atr.getElement());
        if (avalue) {
            this.addValue(avalue);
        }
    }
    addValue(avalue) {
        this._element.append(avalue);
    }
}
exports.Th = Th;
