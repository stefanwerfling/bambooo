import { LeftNavbar } from './Navbar/LeftNavbar';
import { RightNavbar } from './Navbar/RightNavbar';
/**
 * Navbar
 */
export declare class Navbar {
    private _element;
    private _leftNavbar;
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
