import { IconFa } from '../Content/Icon/Icon';
import { LangText } from '../Lang/LangText';
import { LeftNavbar } from './LeftNavbar';
/**
 * Link Function call
 */
export type LeftNavbarLinkFn = (event: any) => void;
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
     * @param {LeftNavbar} leftNavbar
     * @param {string|LangText} title
     * @param {LeftNavbarLinkFn|null} onClickFn
     * @param {string} linkClass
     * @param {IconFa|string|null} icon
     */
    constructor(leftNavbar: LeftNavbar, title: string | LangText, onClickFn?: LeftNavbarLinkFn | null, linkClass?: string, icon?: IconFa | string | null);
    /**
     * getLiElement
     */
    getLiElement(): any;
    /**
     * getAElement
     */
    getAElement(): any;
}
