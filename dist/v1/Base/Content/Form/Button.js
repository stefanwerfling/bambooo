"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonShape = exports.ButtonType = void 0;
const Component_js_1 = require("../../Component.js");
const ButtonClass_js_1 = require("../Button/ButtonClass.js");
/**
 * ButtonType
 */
var ButtonType;
(function (ButtonType) {
    ButtonType["default"] = "default";
    ButtonType["borderless"] = "borderless";
    ButtonType["cardCollapse"] = "cardCollapse";
})(ButtonType || (exports.ButtonType = ButtonType = {}));
/**
 * Button Shape
 */
var ButtonShape;
(function (ButtonShape) {
    ButtonShape["none"] = "";
    ButtonShape["lg"] = "btn-lg";
    ButtonShape["sm"] = "btn-sm";
    ButtonShape["xs"] = "btn-xs";
    ButtonShape["flat"] = "btn-flat";
})(ButtonShape || (exports.ButtonShape = ButtonShape = {}));
/**
 * Button
 */
class Button extends Component_js_1.Component {
    /**
     * click enable
     * @protected
     */
    _clickEnable = true;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {ButtonType} type
     * @param {ButtonClass} bnClass
     * @param {ButtonShape|string} shape
     * @param {string} moreClass
     * @param {string} moreAttr
     */
    constructor(element, type = ButtonType.default, bnClass = ButtonClass_js_1.ButtonClass.default, shape = ButtonShape.none, moreClass = '', moreAttr = '') {
        super();
        const telement = this._getAnyElement(element);
        switch (type) {
            case ButtonType.borderless:
                this._element = jQuery(`<a href="#" class="text-muted"/>`).appendTo(telement);
                break;
            case ButtonType.cardCollapse:
                this._element = jQuery(`<button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-plus"></i></button>`).appendTo(telement);
                break;
            default:
                this._element = jQuery(`<button type="button" class="btn ${bnClass} ${shape} ${moreClass}" ${moreAttr} />`).appendTo(telement);
        }
    }
    /**
     * setOnClickFn
     * @param {ButtonClickFn} onClick
     */
    setOnClickFn(onClick) {
        this._element.unbind().on('click', () => {
            if (this._clickEnable) {
                onClick();
            }
        });
    }
    /**
     * setClickEnable
     * @param {boolean} enable
     */
    setClickEnable(enable) {
        this._clickEnable = enable;
    }
    /**
     * setDisabled
     * @param {boolean} disable
     */
    setDisabled(disable) {
        this.setClickEnable(!disable);
        if (disable) {
            this._element.addClass('.disabled');
        }
        else {
            this._element.removeClass('.disabled');
        }
    }
}
exports.Button = Button;
