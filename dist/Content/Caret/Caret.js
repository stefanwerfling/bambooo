"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caret = exports.CaretType = void 0;
const Element_1 = require("../../Element");
/**
 * CaretType
 */
var CaretType;
(function (CaretType) {
    CaretType["up"] = "fa-caret-up";
    CaretType["left"] = "fa-caret-left";
    CaretType["down"] = "fa-caret-down";
})(CaretType = exports.CaretType || (exports.CaretType = {}));
/**
 * Caret
 */
class Caret extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param type
     */
    constructor(element, type = CaretType.up) {
        super();
        let dp = '';
        switch (type) {
            case CaretType.down:
                dp = 'text-danger';
                break;
            case CaretType.left:
                dp = 'text-warning';
                break;
            case CaretType.up:
                dp = 'text-success';
                break;
        }
        this._element = jQuery(`<span class="description-percentage ${dp}"><i class="fas ${type}"></i> </span>`).appendTo(element);
    }
    /**
     * addValue
     * @param value
     */
    addValue(value) {
        this._element.append(value);
    }
}
exports.Caret = Caret;
