"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonDefault = exports.ButtonDefaultPosition = exports.ButtonDefaultType = void 0;
const Button_js_1 = require("../Form/Button.js");
const ButtonClass_1 = require("./ButtonClass");
/**
 * ButtonDefaultType
 */
var ButtonDefaultType;
(function (ButtonDefaultType) {
    ButtonDefaultType["none"] = "";
    ButtonDefaultType["small"] = "btn-sm";
})(ButtonDefaultType || (exports.ButtonDefaultType = ButtonDefaultType = {}));
/**
 * Button default Position
 */
var ButtonDefaultPosition;
(function (ButtonDefaultPosition) {
    ButtonDefaultPosition["left"] = "";
    ButtonDefaultPosition["right"] = "float-right";
})(ButtonDefaultPosition || (exports.ButtonDefaultPosition = ButtonDefaultPosition = {}));
/**
 * ButtonDefault
 */
class ButtonDefault extends Button_js_1.Button {
    /**
     * class
     * @protected
     */
    _class = ButtonClass_1.ButtonClass.default;
    /**
     * title
     * @protected
     */
    _title = '';
    /**
     * icon
     * @protected
     */
    _icon = '';
    /**
     * constructor
     * @param {any} element
     * @param {string|LangText} title
     * @param {string} icon
     * @param {ButtonClass} bnClass
     * @param {ButtonDefaultType|ButtonShape} bnType
     * @param {string} moreAttr
     * @param {ButtonDefaultPosition} position
     */
    constructor(element, title, icon, bnClass = ButtonClass_1.ButtonClass.default, bnType = ButtonDefaultType.small, moreAttr = '', position = ButtonDefaultPosition.left) {
        super(element, Button_js_1.ButtonType.default, bnClass, bnType, `${position}`, moreAttr);
        this._class = bnClass;
        this.setValue(title, icon);
    }
    /**
     * setValue
     * @param {string|LangText} title
     * @param {string} icon
     */
    setValue(title, icon) {
        if (title) {
            this._title = title;
        }
        if (icon) {
            this._icon = icon;
        }
        this._element.empty();
        if (this._icon !== '') {
            this._element.append(`<i class="fas ${this._icon}" />`);
        }
        if (this._title !== '') {
            if (this._icon !== '') {
                this._element.append(' ');
            }
            const tTitle = this._getAnyElement(this._title);
            this._element.append(tTitle);
        }
    }
    /**
     * setClass
     * @param bnClass
     */
    setClass(bnClass = ButtonClass_1.ButtonClass.default) {
        this._element.removeClass(this._class).addClass(bnClass);
        this._class = bnClass;
    }
}
exports.ButtonDefault = ButtonDefault;
