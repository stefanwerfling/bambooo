import { Widget, WidgetOptions } from '../Widget';
import { NavbarPosition } from './NavbarPosition';
/**
 * Narbar options
 */
export type NavbarOptions = WidgetOptions & {
    left?: NavbarPosition;
    right?: NavbarPosition;
};
/**
 * Navbar object
 */
export declare class Navbar extends Widget {
    /**
     * Navbar left
     * @protected
     */
    protected _left: NavbarPosition;
    /**
     * Navbar right
     * @protected
     */
    protected _right: NavbarPosition | null;
    /**
     * Constructor
     * @param {NavbarOptions} opt
     */
    constructor(opt?: NavbarOptions);
}
