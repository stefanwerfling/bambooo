"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarMenuItem = void 0;
const LangText_js_1 = require("../../Lang/LangText.js");
/**
 * SidebarMenuItem
 */
class SidebarMenuItem {
    /**
     * le element
     * @private
     */
    _liElement;
    /**
     * a element
     * @private
     */
    _aElement;
    /**
     * i element
     * @private
     */
    _iElement;
    /**
     * p element
     * @private
     */
    _pElement;
    /**
     * Name
     * @private
     */
    _name = 'unknow';
    /**
     * Icon class
     * @private
     */
    _iconClass = 'fa-circle';
    /**
     * constructor
     * @param {SidebarMenu|SidebarMenuTree} sidebar
     * @param {boolean} isSubItem
     */
    constructor(sidebar, isSubItem = false) {
        this._liElement = jQuery('<li class="nav-item" />').appendTo(sidebar.getUlElement());
        this._aElement = jQuery('<a href="#" class="nav-link" />').appendTo(this._liElement);
        this._iElement = jQuery('<i />').appendTo(this._aElement);
        this._iElement.addClass(`nav-icon fas ${this._iconClass}`);
        this._pElement = jQuery('<p />').appendTo(this._aElement);
        if (isSubItem) {
            this._aElement.css({
                'padding-left': '2em'
            });
        }
        sidebar.addMenuItem(this);
    }
    /**
     * setSymbolColor
     * @param {string} acolor
     */
    setSymbolColor(acolor) {
        this._iElement.css({
            color: acolor
        });
    }
    /**
     * setActiv
     * @param {boolean} activ
     */
    setActiv(activ) {
        this._aElement.removeClass().addClass('nav-link');
        if (activ) {
            this._aElement.addClass('active');
        }
    }
    /**
     * setIconClass
     * @param {string} iconClass
     */
    setIconClass(iconClass) {
        this._iconClass = iconClass;
        this._iElement.removeClass().addClass(`nav-icon fas ${this._iconClass}`);
    }
    /**
     * setTitle
     * @param {string|LangText} title
     */
    setTitle(title) {
        LangText_js_1.LangText.addLangText(this._pElement, title);
    }
    /**
     * setClick
     * @param {SidebarMenuItemClickFn} onClickFn
     */
    setClick(onClickFn) {
        this._aElement.unbind().on('click', onClickFn);
    }
    /**
     * getLiElement
     * @return {any}
     */
    getLiElement() {
        return this._liElement;
    }
    /**
     * getPElement
     * @return {any}
     */
    getPElement() {
        return this._pElement;
    }
    /**
     * setName
     * @param {string} name
     */
    setName(name) {
        this._name = name;
    }
    /**
     * getName
     * @return {string}
     */
    getName() {
        return this._name;
    }
}
exports.SidebarMenuItem = SidebarMenuItem;
