import {Element} from '../../Element';

/**
 * NavTabElements
 */
export type NavTabElements = {
    tab: any;
    body: any;
}

/**
 * NavTab
 */
export class NavTab extends Element {

    /**
     * nav
     * @protected
     */
    protected _nav: any;

    /**
     * body
     * @protected
     */
    protected _body: any;

    /**
     * tab ids
     * @protected
     */
    protected _tabIds: string[] = [];

    /**
     * constructor
     * @param element
     * @param id
     */
    public constructor(element: any, id: string) {
        super();

        const aelement = this._getAnyElement(element);

        this._nav = jQuery(`<ul class="nav nav-tabs" id="${id}" role="tablist" />`).appendTo(aelement);
        this._body = jQuery('<div class="tab-content" id="${id}-tabContent" />').appendTo(aelement);
    }

    /**
     * addTab
     * @param title
     * @param id
     */
    public addTab(title: string, id: string): NavTabElements {
        let activ = '';
        let show = '';

        if (this._tabIds.length == 0) {
            activ = 'active';
            show = 'show';
        }

        this._tabIds.push(id);

        const li = jQuery('<li class="nav-item" />').appendTo(this._nav);
        li.append(`<a class="nav-link ${activ}" id="${id}-tab" data-toggle="pill" href="#${id}-content" role="tab" aria-controls="${id}-content" aria-selected="true">${title}</a>`);

        const body = jQuery(`<div class="tab-pane fade ${activ} ${show}" id="${id}-content" role="tabpanel" aria-labelledby="${id}-tab"/>`).appendTo(this._body);

        return {
            tab: li,
            body
        };
    }

    /**
     * setTabSelect
     * @param index
     */
    public setTabSelect(index: number): void {
        this._nav.find('a').each(( tindex: number, telement: any ) => {
            if (index === tindex) {
                // @ts-ignore
                jQuery(telement).tab('show');
            }
        });
    }
}