import { Component, ComponentType } from '../../Component.js';
import { LangText } from './../../../Lang/LangText.js';
import Event = JQuery.Event;
/**
 * NavTabElements
 */
export type NavTabElements = {
    id: string;
    tab: JQuery<HTMLLIElement>;
    title: JQuery<HTMLAnchorElement>;
    body: JQuery<HTMLDivElement>;
};
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
export declare class NavTab extends Component<HTMLElement> {
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
    protected _tabIds: string[];
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {[string]} id
     */
    constructor(element: ComponentType, id?: string);
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
