import {Component, ComponentType} from '../../Component.js';
import {LangText} from './../../../Lang/LangText.js';
import Event = JQuery.Event;

/**
 * NavTabElements
 */
export type NavTabElements = {
    id: string;
    tab: JQuery<HTMLLIElement>;
    title: JQuery<HTMLAnchorElement>;
    body: JQuery<HTMLDivElement>;
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
export class NavTab extends Component<HTMLElement> {

    /**
     * nav
     * @protected
     */
    protected _nav: JQuery<HTMLUListElement>;

    /**
     * body
     * @protected
     */
    protected _body: JQuery<HTMLDivElement>;

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

        this._nav = jQuery<HTMLUListElement>(`<ul class="nav nav-tabs" id="${aId}" role="tablist" />`).appendTo(aelement);
        this._body = jQuery<HTMLDivElement>(`<div class="tab-content" id="${aId}-tabContent" />`).appendTo(aelement);
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

        const li = jQuery<HTMLLIElement>('<li class="nav-item" />').appendTo(this._nav);
        const etitle = jQuery<HTMLAnchorElement>(`<a class="nav-link ${activ}" id="${aId}-tab" data-toggle="pill" href="#${aId}-content" role="tab" aria-controls="${aId}-content" aria-selected="true"></a>`).appendTo(li);

        const telement = Component.getAnyElement(title);

        etitle.append(telement);

        const body = jQuery<HTMLDivElement>(`<div class="tab-pane fade ${activ} ${show}" id="${aId}-content" role="tabpanel" aria-labelledby="${aId}-tab"/>`).appendTo(this._body);

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
    public setTabSelect(index: number): void {
        this._nav.find('a').each(( tindex: number, telement: HTMLAnchorElement): void => {
            if (index === tindex) {
                const tabElement = jQuery<HTMLElement>(telement) as any;

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
    public setOnLoad(onload: NavTabOnLoad): void {
        this._nav.on('tabsload', (event: Event, ui: unknown) => {
            onload(event, ui as any);
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