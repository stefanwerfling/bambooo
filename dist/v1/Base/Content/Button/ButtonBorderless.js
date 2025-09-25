"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBorderless = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * ButtonBorderless
 */
class ButtonBorderless extends Component_js_1.Component {
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
     * @param {ComponentType} element
     * @param {string} title
     * @param {icon} icon
     */
    constructor(element, title, icon) {
        const telement = Component_js_1.Component.getAnyElement(element);
        super(jQuery(`<a href="#" class="text-muted"/>`).appendTo(telement));
        this.setValue(title, icon);
    }
    /**
     * Set value
     * @param {string} title
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
            this._element.append(this._title);
        }
    }
    /**
     * setOnClickFn
     * @param {ButtonDefaultClickFn} onClick
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
exports.ButtonBorderless = ButtonBorderless;
