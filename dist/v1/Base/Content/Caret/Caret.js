"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caret = exports.CaretType = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * CaretType
 */
var CaretType;
(function (CaretType) {
    CaretType["up"] = "fa-caret-up";
    CaretType["left"] = "fa-caret-left";
    CaretType["down"] = "fa-caret-down";
})(CaretType || (exports.CaretType = CaretType = {}));
/**
 * Caret
 */
class Caret extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {CaretType} type
     */
    constructor(element, type = CaretType.up) {
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
        super(jQuery(`<span class="description-percentage ${dp}"><i class="fas ${type}"></i> </span>`).appendTo(Component_js_1.Component.getAnyElement(element)));
    }
    /**
     * addValue
     * @param {JQuery|string} value
     */
    addValue(value) {
        this._element.append(value);
    }
}
exports.Caret = Caret;
