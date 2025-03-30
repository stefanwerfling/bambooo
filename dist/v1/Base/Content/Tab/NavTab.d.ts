import { Element } from './../../Element.js';
import { LangText } from './../../../Lang/LangText.js';
import Event = JQuery.Event;
/**
 * NavTabElements
 */
export type NavTabElements = {
    id: string;
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
     * @param {any} element
     * @param {[string]} id
     */
    constructor(element: any, id?: string);
    /**
     * addTab
     * @param {string|LangText} title
     * @param {string} id
     * @return {NavTabElements}
     */
    addTab(title: string | LangText, id?: string): NavTabElements;
    /**
     * setTabSelect
     * @param {number} index
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
