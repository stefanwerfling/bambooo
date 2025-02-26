"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonMenu = exports.ButtonMenuPosition = void 0;
const LangText_1 = require("../../Lang/LangText");
const ButtonClass_js_1 = require("../Button/ButtonClass.js");
const Icon_1 = require("../Icon/Icon");
const Button_1 = require("./Button");
/**
 * ButtonMenuPosition
 */
var ButtonMenuPosition;
(function (ButtonMenuPosition) {
    ButtonMenuPosition["none"] = "unset";
    ButtonMenuPosition["relative"] = "relative";
})(ButtonMenuPosition || (exports.ButtonMenuPosition = ButtonMenuPosition = {}));
/**
 * ButtonMenu
 */
class ButtonMenu extends Button_1.Button {
    /**
     * div group
     * @protected
     */
    _divGrp;
    /**
     * div drop down menu
     * @protected
     */
    _divDropDownMenu;
    /**
     * constructor
     * @param {any} element
     * @param {IconFa|string|null} icon
     * @param {boolean} positonRight
     * @param {ButtonType} type
     * @param {ButtonMenuPosition} position
     * @param {ButtonClass} bnClass
     * @param {ButtonShape|string} shape
     */
    constructor(element, icon = null, positonRight = false, type = Button_1.ButtonType.default, position = ButtonMenuPosition.relative, bnClass = ButtonClass_js_1.ButtonClass.default, shape = Button_1.ButtonShape.none) {
        const divGrp = jQuery('<div class="btn-group"/>');
        divGrp.css('position', `${position}`);
        super(divGrp, type, bnClass, shape);
        const telement = this._getAnyElement(element);
        divGrp.appendTo(telement);
        if (icon !== null) {
            new Icon_1.Icon(this._element, icon);
        }
        this._element.addClass('dropdown-toggle');
        this._element.attr('data-toggle', 'dropdown');
        this._element.attr('aria-expanded', 'false');
        this._divGrp = divGrp;
        this._divDropDownMenu = jQuery('<div class="dropdown-menu"/>').appendTo(this._divGrp);
        if (positonRight) {
            this._divDropDownMenu.addClass('dropdown-menu-right');
        }
    }
    /**
     * addMenuItem
     * @param {any|LangText} title
     * @param {ButtonClickFn} clickFn
     * @param {IconFa|string|null} icon
     */
    addMenuItem(title, clickFn, icon = null) {
        const item = jQuery('<a class="dropdown-item" href="#"/>');
        item.appendTo(this._divDropDownMenu);
        if (icon !== null) {
            new Icon_1.Icon(item, icon);
            item.append('&nbsp;&nbsp;');
        }
        const textSpan = jQuery('<span></span>').appendTo(item);
        LangText_1.LangText.addLangText(textSpan, title);
        item.on('click', (event) => {
            clickFn();
            //event.stopPropagation();
            event.preventDefault();
        });
    }
    /**
     * addDivider
     */
    addDivider() {
        jQuery('<div class="dropdown-divider"/>').appendTo(this._divDropDownMenu);
    }
}
exports.ButtonMenu = ButtonMenu;
