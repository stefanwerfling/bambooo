import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
import Event = JQuery.Event;
/**
 * NavTabElements
 */
export type NavTabElements = {
    tab: any;
    title: any;
    body: any;
};
/**
 * NavTabOnLoad
 */
export type NavTabOnLoad = (event: Event, ui: {
    tab: any;
    panel: any;
}) => void;
/**
 * NavTab
 */
export declare class NavTab extends Element {
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
    protected _tabIds: string[];
    /**
     * constructor
     * @param element
     * @param id
     */
    constructor(element: any, id: string);
    /**
     * addTab
     * @param {string|LangText} title
     * @param {string} id
     */
    addTab(title: string | LangText, id: string): NavTabElements;
    /**
     * setTabSelect
     * @param index
     */
    setTabSelect(index: number): void;
    /**
     * Set on load
     * @param {NavTabOnLoad} onload
     */
    setOnLoad(onload: NavTabOnLoad): void;
    /**
     * Hide
     */
    hide(): void;
    /**
     * Show
     */
    show(): void;
}
