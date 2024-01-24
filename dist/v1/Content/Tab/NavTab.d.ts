import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
/**
 * NavTabElements
 */
export type NavTabElements = {
    tab: any;
    title: any;
    body: any;
};
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
}
