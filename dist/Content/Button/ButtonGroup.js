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
     * @param element
     */
    constructor(element) {
        super();
        this._element = jQuery('<div class="btn-group" />').appendTo(element);
    }
}
exports.ButtonGroup = ButtonGroup;
