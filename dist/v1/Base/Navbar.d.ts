import { Component, ComponentType } from './Component.js';
import { LeftNavbar } from './Navbar/LeftNavbar';
import { RightNavbar } from './Navbar/RightNavbar';
/**
 * Navbar
 */
export declare class Navbar extends Component {
    /**
     * left navbar
     * @private
     */
    protected _leftNavbar: LeftNavbar;
    /**
     * right navbar
     * @private
     */
    protected _rightNavbar: RightNavbar | null;
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element?: ComponentType);
    /**
     * getLeftNavbar
     */
    getLeftNavbar(): LeftNavbar;
    /**
     * getRightNavbar
     */
    getRightNavbar(): RightNavbar;
}
