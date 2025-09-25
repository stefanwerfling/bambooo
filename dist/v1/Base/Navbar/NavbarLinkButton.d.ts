import { Component, ComponentType } from '../Component.js';
/**
 * NavbarLinkButtonFn
 */
export type NavbarLinkButtonFn = (event: any) => void;
/**
 * NavbarLinkButton
 */
export declare class NavbarLinkButton extends Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} icon
     * @param {NavbarLinkButtonFn} click
     */
    constructor(element: ComponentType, icon: string, click: NavbarLinkButtonFn);
}
