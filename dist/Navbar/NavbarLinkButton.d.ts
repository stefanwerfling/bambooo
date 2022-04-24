import { Element } from '../Element';
export declare type NavbarLinkButtonFn = (event: any) => void;
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
