import { Element } from '../../Element';
/**
 * NavTabElements
 */
export type NavTabElements = {
    tab: any;
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
     * @param title
     * @param id
     */
    addTab(title: string, id: string): NavTabElements;
    /**
     * setTabSelect
     * @param index
     */
    setTabSelect(index: number): void;
}
