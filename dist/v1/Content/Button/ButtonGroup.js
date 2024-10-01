"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
const Element_1 = require("../../Element");
/**
 * ButtonGroup
 */
class ButtonGroup extends Element_1.Element {
    /**
     * constructor
     * @param {any|Element} element
     * @param {string} addClass
     */
    constructor(element, addClass) {
        super();
        let tclass = '';
        if (addClass) {
            tclass = `${tclass} ${addClass}`;
        }
        this._element = jQuery(`<div class="btn-group ${tclass}" />`).appendTo(this._getAnyElement(element));
    }
}
exports.ButtonGroup = ButtonGroup;
