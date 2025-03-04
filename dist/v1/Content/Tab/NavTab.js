"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavTab = void 0;
const Element_1 = require("../../Element");
/**
 * NavTab
 */
class NavTab extends Element_1.Element {
    /**
     * nav
     * @protected
     */
    _nav;
    /**
     * body
     * @protected
     */
    _body;
    /**
     * tab ids
     * @protected
     */
    _tabIds = [];
    /**
     * constructor
     * @param element
     * @param id
     */
    constructor(element, id) {
        super();
        const aelement = this._getAnyElement(element);
        this._nav = jQuery(`<ul class="nav nav-tabs" id="${id}" role="tablist" />`).appendTo(aelement);
        this._body = jQuery(`<div class="tab-content" id="${id}-tabContent" />`).appendTo(aelement);
    }
    /**
     * addTab
     * @param {string|LangText} title
     * @param {string} id
     */
    addTab(title, id) {
        let activ = '';
        let show = '';
        if (this._tabIds.length === 0) {
            activ = 'active';
            show = 'show';
        }
        this._tabIds.push(id);
        const li = jQuery('<li class="nav-item" />').appendTo(this._nav);
        const etitle = jQuery(`<a class="nav-link ${activ}" id="${id}-tab" data-toggle="pill" href="#${id}-content" role="tab" aria-controls="${id}-content" aria-selected="true"></a>`).appendTo(li);
        const telement = Element_1.Element.getAnyElement(title);
        etitle.append(telement);
        const body = jQuery(`<div class="tab-pane fade ${activ} ${show}" id="${id}-content" role="tabpanel" aria-labelledby="${id}-tab"/>`).appendTo(this._body);
        return {
            tab: li,
            title: etitle,
            body
        };
    }
    /**
     * setTabSelect
     * @param index
     */
    setTabSelect(index) {
        this._nav.find('a').each((tindex, telement) => {
            if (index === tindex) {
                // @ts-ignore
                jQuery(telement).tab('show');
            }
        });
    }
    /**
     * Set on load
     * @param {NavTabOnLoad} onload
     */
    setOnLoad(onload) {
        this._nav.on('tabsload', (event, ui) => {
            onload(event, ui);
        });
    }
    /**
     * Hide
     */
    hide() {
        this._nav.hide();
        this._body.hide();
    }
    /**
     * Show
     */
    show() {
        this._body.show();
        this._nav.show();
    }
}
exports.NavTab = NavTab;
