"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonDefault = exports.ButtonDefaultPosition = exports.ButtonDefaultType = void 0;
const Element_1 = require("../../Element");
const ButtonClass_1 = require("./ButtonClass");
/**
 * ButtonDefaultType
 */
var ButtonDefaultType;
(function (ButtonDefaultType) {
    ButtonDefaultType["none"] = "";
    ButtonDefaultType["small"] = "btn-sm";
})(ButtonDefaultType = exports.ButtonDefaultType || (exports.ButtonDefaultType = {}));
/**
 * Button default Position
 */
var ButtonDefaultPosition;
(function (ButtonDefaultPosition) {
    ButtonDefaultPosition["left"] = "";
    ButtonDefaultPosition["right"] = "float-right";
})(ButtonDefaultPosition = exports.ButtonDefaultPosition || (exports.ButtonDefaultPosition = {}));
/**
 * ButtonDefault
 */
class ButtonDefault extends Element_1.Element {
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
     * click enable
     * @protected
     */
    _clickEnable = true;
    /**
     * constructor
     * @param {any} element
     * @param {string|LangText} title
     * @param {string} icon
     * @param {ButtonClass} bnClass
     * @param {ButtonDefaultType} bnType
     * @param {string} moreAttr
     * @param {ButtonDefaultPosition} position
     */
    constructor(element, title, icon, bnClass = ButtonClass_1.ButtonClass.default, bnType = ButtonDefaultType.small, moreAttr = '', position = ButtonDefaultPosition.left) {
        super();
        const telement = this._getAnyElement(element);
        this._class = bnClass;
        this._element = jQuery(`<button type="button" class="btn ${bnClass} ${bnType} ${position}" ${moreAttr} />`).appendTo(telement);
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
     * setOnClickFn
     * @param onClick
     */
    setOnClickFn(onClick) {
        this._element.unbind().on('click', () => {
            if (this._clickEnable) {
                onClick();
            }
        });
    }
    /**
     * setClass
     * @param bnClass
     */
    setClass(bnClass = ButtonClass_1.ButtonClass.default) {
        this._element.removeClass(this._class).addClass(bnClass);
        this._class = bnClass;
    }
    /**
     * setClickEnable
     * @param enable
     */
    setClickEnable(enable) {
        this._clickEnable = enable;
    }
}
exports.ButtonDefault = ButtonDefault;
