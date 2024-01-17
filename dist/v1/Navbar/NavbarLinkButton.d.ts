import { Element } from '../Element';
/**
 * NavbarLinkButtonFn
 */
export type NavbarLinkButtonFn = (event: any) => void;
/**
 * NavbarLinkButton
 */
export declare class NavbarLinkButton extends Element {
    /**
     * constructor
     * @param element
     */
    constructor(element: any, icon: string, click: NavbarLinkButtonFn);
}
