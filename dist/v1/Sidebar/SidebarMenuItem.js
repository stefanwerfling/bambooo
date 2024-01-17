"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarMenuItem = void 0;
const LangText_1 = require("../Lang/LangText");
/**
 * SidebarMenuItem
 */
class SidebarMenuItem {
    _liElement;
    _aElement;
    _iElement;
    _pElement;
    _name = 'unknow';
    _iconClass = 'fa-circle';
    /**
     * constructor
     * @param sidebar
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
     * @param acolor
     */
    setSymbolColor(acolor) {
        this._iElement.css({
            color: acolor
        });
    }
    /**
     * setActiv
     * @param activ
     */
    setActiv(activ) {
        this._aElement.removeClass().addClass('nav-link');
        if (activ) {
            this._aElement.addClass('active');
        }
    }
    /**
     * setIconClass
     * @param iconClass
     */
    setIconClass(iconClass) {
        this._iconClass = iconClass;
        this._iElement.removeClass().addClass(`nav-icon fas ${this._iconClass}`);
    }
    /**
     * setTitle
     * @param title
     */
    setTitle(title) {
        LangText_1.LangText.addLangText(this._pElement, title);
    }
    /**
     * setClick
     * @param onClickFn
     */
    setClick(onClickFn) {
        this._aElement.unbind().on('click', onClickFn);
    }
    /**
     * getLiElement
     */
    getLiElement() {
        return this._liElement;
    }
    /**
     * getPElement
     */
    getPElement() {
        return this._pElement;
    }
    /**
     * setName
     * @param name
     */
    setName(name) {
        this._name = name;
    }
    /**
     * getName
     */
    getName() {
        return this._name;
    }
}
exports.SidebarMenuItem = SidebarMenuItem;
