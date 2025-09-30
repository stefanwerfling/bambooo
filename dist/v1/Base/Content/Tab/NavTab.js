"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavTab = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * NavTab
 */
class NavTab extends Component_js_1.Component {
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
     * Constructor
     * @param {ComponentType} element
     * @param {[string]} id
     */
    constructor(element, id) {
        super();
        let aId;
        if (id === undefined) {
            aId = this._uniqId();
        }
        else {
            aId = id;
        }
        const aelement = this._getAnyElement(element);
        this._nav = jQuery(`<ul class="nav nav-tabs" id="${aId}" role="tablist" />`).appendTo(aelement);
        this._body = jQuery(`<div class="tab-content" id="${aId}-tabContent" />`).appendTo(aelement);
    }
    /**
     * addTab
     * @param {string|LangText} title
     * @param {string} id
     * @return {NavTabElements}
     */
    addTab(title, id) {
        let activ = '';
        let show = '';
        if (this._tabIds.length === 0) {
            activ = 'active';
            show = 'show';
        }
        let aId;
        if (id === undefined) {
            aId = this._uniqId();
        }
        else {
            aId = id;
        }
        this._tabIds.push(aId);
        const li = jQuery('<li class="nav-item" />').appendTo(this._nav);
        const etitle = jQuery(`<a class="nav-link ${activ}" id="${aId}-tab" data-toggle="pill" href="#${aId}-content" role="tab" aria-controls="${aId}-content" aria-selected="true"></a>`).appendTo(li);
        const telement = Component_js_1.Component.getAnyElement(title);
        etitle.append(telement);
        const body = jQuery(`<div class="tab-pane fade ${activ} ${show}" id="${aId}-content" role="tabpanel" aria-labelledby="${aId}-tab"/>`).appendTo(this._body);
        return {
            id: aId,
            tab: li,
            title: etitle,
            body: body
        };
    }
    /**
     * setTabSelect
     * @param {number} index
     */
    setTabSelect(index) {
        this._nav.find('a').each((tindex, telement) => {
            if (index === tindex) {
                const tabElement = jQuery(telement);
                if (typeof tabElement.tab === 'function') {
                    tabElement.tab('show');
                }
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
