import { Widget, WidgetOptions } from '../Widget';
export declare enum NavbarPositionType {
    left = 0,
    right = 1
}
export type NavbarPositionOptions = WidgetOptions & {
    postionType?: NavbarPositionType;
};
/**
 * Navbar position
 */
export declare class NavbarPosition extends Widget {
    /**
     * Constructor
     * @param {NavbarPositionOptions} opt
     */
    constructor(opt?: NavbarPositionOptions);
}
