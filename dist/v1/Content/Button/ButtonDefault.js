"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonDefault = exports.ButtonClass = exports.ButtonDefaultType = void 0;
const Element_1 = require("../../Element");
/**
 * ButtonDefaultType
 */
var ButtonDefaultType;
(function (ButtonDefaultType) {
    ButtonDefaultType["none"] = "";
    ButtonDefaultType["small"] = "btn-sm";
})(ButtonDefaultType = exports.ButtonDefaultType || (exports.ButtonDefaultType = {}));
/**
 * ButtonClass
 */
var ButtonClass;
(function (ButtonClass) {
    ButtonClass["default"] = "btn-default";
    ButtonClass["info"] = "btn-info";
    ButtonClass["danger"] = "btn-danger";
    ButtonClass["warning"] = "btn-warning";
    ButtonClass["success"] = "btn-success";
    ButtonClass["primary"] = "btn-primary";
    ButtonClass["tool"] = "btn-tool";
})(ButtonClass = exports.ButtonClass || (exports.ButtonClass = {}));
/**
 * ButtonDefault
 */
class ButtonDefault extends Element_1.Element {
    /**
     * class
     * @protected
     */
    _class = ButtonClass.default;
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
     */
    constructor(element, title, icon, bnClass = ButtonClass.default, bnType = ButtonDefaultType.small, moreAttr = '') {
        super();
        const telement = this._getAnyElement(element);
        this._class = bnClass;
        this._element = jQuery(`<button type="button" class="btn ${bnClass} ${bnType}" ${moreAttr} />`).appendTo(telement);
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
    setClass(bnClass = ButtonClass.default) {
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
