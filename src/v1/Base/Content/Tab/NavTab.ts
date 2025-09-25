import {Component, ComponentType} from '../../Component.js';
import {LangText} from './../../../Lang/LangText.js';
import Event = JQuery.Event;

/**
 * NavTabElements
 */
export type NavTabElements = {
    id: string;
    tab: JQuery;
    title: JQuery;
    body: JQuery;
}

/**
 * NavTabOnLoad
 */
export type NavTabOnLoad = (event: Event, ui: {
    tab: JQuery;
    panel: JQuery;
}) => void;

/**
 * NavTab
 */
export class NavTab extends Component {

    /**
     * nav
     * @protected
     */
    protected _nav: JQuery;

    /**
     * body
     * @protected
     */
    protected _body: JQuery;

    /**
     * tab ids
     * @protected
     */
    protected _tabIds: string[] = [];

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {[string]} id
     */
    public constructor(element: ComponentType, id?: string) {
        super();

        let aId;

        if (id === undefined) {
            aId = this._uniqId();
        } else {
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
    public addTab(title: string|LangText, id?: string): NavTabElements {
        let activ = '';
        let show = '';

        if (this._tabIds.length === 0) {
            activ = 'active';
            show = 'show';
        }

        let aId;

        if (id === undefined) {
            aId = this._uniqId();
        } else {
            aId = id;
        }

        this._tabIds.push(aId);

        const li = jQuery('<li class="nav-item" />').appendTo(this._nav);
        const etitle = jQuery(`<a class="nav-link ${activ}" id="${aId}-tab" data-toggle="pill" href="#${aId}-content" role="tab" aria-controls="${aId}-content" aria-selected="true"></a>`).appendTo(li);

        const telement = Component.getAnyElement(title);

        etitle.append(telement);

        const body = jQuery(`<div class="tab-pane fade ${activ} ${show}" id="${aId}-content" role="tabpanel" aria-labelledby="${aId}-tab"/>`).appendTo(this._body);

        return {
            id: aId,
            tab: li,
            title: etitle,
            body
        };
    }

    /**
     * setTabSelect
     * @param {number} index
     */
    public setTabSelect(index: number): void {
        this._nav.find('a').each(( tindex: number, telement: any ) => {
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
    public setOnLoad(onload: NavTabOnLoad): void {
        this._nav.on('tabsload', (event: any, ui: any) => {
            onload(event, ui);
        });
    }

    /**
     * Hide
     */
    public override hide(): void {
        this._nav.hide();
        this._body.hide();
    }

    /**
     * Show
     */
    public override show(): void {
        this._body.show();
        this._nav.show();
    }

}