"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBorderless = void 0;
const Element_1 = require("../../Element");
/**
 * ButtonBorderless
 */
class ButtonBorderless extends Element_1.Element {
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
     * @param element
     * @param title
     * @param icon
     * @param bnClass
     * @param bnType
     */
    constructor(element, title, icon) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<a href="#" class="text-muted"/>`).appendTo(telement);
        this.setValue(title, icon);
    }
    /**
     * setValue
     * @param title
     * @param icon
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
            this._element.append(this._title);
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
     * setClickEnable
     * @param enable
     */
    setClickEnable(enable) {
        this._clickEnable = enable;
    }
}
exports.ButtonBorderless = ButtonBorderless;
