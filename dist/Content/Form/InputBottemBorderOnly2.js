"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBottemBorderOnly2 = exports.InputType = void 0;
const Element_1 = require("../../Element");
/**
 * InputType
 */
var InputType;
(function (InputType) {
    InputType["text"] = "text";
    InputType["number"] = "number";
    InputType["range"] = "range";
})(InputType = exports.InputType || (exports.InputType = {}));
/**
 * InputBottemBorderOnly2
 */
class InputBottemBorderOnly2 extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param id
     * @param type
     */
    constructor(element, id, type = InputType.text) {
        super();
        let aid = '';
        if (!id) {
            aid = id;
        }
        this._element = jQuery(`<input type="${type}" class="form-control form-control-border border-width-2" id="${aid}" placeholder="">`).appendTo(element);
    }
    /**
     * setValue
     * @param value
     */
    setValue(value) {
        this._element.val(value);
    }
    /**
     * getValue
     */
    getValue() {
        return this._element.val();
    }
}
exports.InputBottemBorderOnly2 = InputBottemBorderOnly2;
