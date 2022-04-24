import { LeftNavbar } from './LeftNavbar';
/**
 * Link Function call
 */
export declare type LeftNavbarLinkFn = (event: any) => void;
/**
 * LeftNavbarLink
 */
export declare class LeftNavbarLink {
    /**
     * list element
     * @private
     */
    private _liElement;
    /**
     * link element
     * @private
     */
    private _aElement;
    /**
     * constructor
     * @param leftNavbar
     * @param title
     * @param onClickFn
     * @param linkClass
     */
    constructor(leftNavbar: LeftNavbar, title: string, onClickFn?: LeftNavbarLinkFn | null, linkClass?: string);
    /**
     * getLiElement
     */
    getLiElement(): any;
    /**
     * getAElement
     */
    getAElement(): any;
}
