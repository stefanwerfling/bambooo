"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarLinkLanguage = void 0;
const Component_js_1 = require("../Component.js");
/**
 * NavbarLinkLanguage
 */
class NavbarLinkLanguage extends Component_js_1.Component {
    /**
     * link
     * @protected
     */
    _a;
    /**
     * lang menu
     * @protected
     */
    _menu;
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<li class="nav-item" />').appendTo(telement);
        this._a = jQuery('<a class="nav-link" data-toggle="dropdown" href="#" />').appendTo(this._element);
        this._menu = jQuery('<div class="dropdown-menu dropdown-menu-right p-0" />').appendTo(this._element);
    }
    /**
     * addLang
     * @param {LangDefine} lang
     * @param {ChangeLangClickFn} click
     */
    addLang(lang, click) {
        const entry = jQuery(`<a href="#" class="dropdown-item" id="lang-${lang.getCountryCode()}"/>`).appendTo(this._menu);
        jQuery(`<i class="flag-icon flag-icon-${lang.getCountryCode()} mr-2" />`).appendTo(entry);
        entry.append(` ${lang.getLangTitle()}`);
        entry.off('click').on('click', () => {
            this.setActiv(lang.getCountryCode(), false);
            click(lang);
        });
    }
    /**
     * setActiv
     * @param {string} countryCode
     * @param {boolean} triggerClick
     */
    setActiv(countryCode, triggerClick) {
        this._a.empty();
        this._menu.find('active').each((_index, element) => {
            jQuery(element).removeClass('active');
        });
        this._menu.find(`#${countryCode}`).each((_index, element) => {
            jQuery(element).addClass('active');
        });
        jQuery(`<i class="flag-icon flag-icon-${countryCode} mr-2"></i>`).appendTo(this._a);
        if (triggerClick) {
            this._menu.find(`#lang-${countryCode}`).each((_index, element) => {
                jQuery(element).trigger('click');
            });
        }
    }
}
exports.NavbarLinkLanguage = NavbarLinkLanguage;
