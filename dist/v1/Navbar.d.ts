import { Element } from './Element';
import { LeftNavbar } from './Navbar/LeftNavbar';
import { RightNavbar } from './Navbar/RightNavbar';
/**
 * Navbar
 */
export declare class Navbar extends Element {
    /**
     * left navbar
     * @private
     */
    private _leftNavbar;
    /**
     * right navbar
     * @private
     */
    private _rightNavbar;
    /**
     * constructor
     * @param element
     */
    constructor(element?: any);
    /**
     * getLeftNavbar
     */
    getLeftNavbar(): LeftNavbar;
    /**
     * getRightNavbar
     */
    getRightNavbar(): RightNavbar;
}
