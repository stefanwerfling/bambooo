"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonType = void 0;
const Element_1 = require("../../Element");
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
 * Button
 */
class Button extends Element_1.Element {
    /**
     * click enable
     * @protected
     */
    _clickEnable = true;
    /**
     * constructor
     * @param {any} element
     * @param {ButtonType} type
     * @param {ButtonClass} bnClass
     * @param {string} moreClass
     * @param {string} moreAttr
     */
    constructor(element, type = ButtonType.default, bnClass = ButtonClass_js_1.ButtonClass.default, moreClass = '', moreAttr = '') {
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
                this._element = jQuery(`<button type="button" class="btn ${bnClass} ${moreClass}" ${moreAttr} />`).appendTo(telement);
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
}
exports.Button = Button;
