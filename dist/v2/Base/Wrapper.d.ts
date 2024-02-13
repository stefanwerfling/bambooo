import { Navbar } from './Navbar/Navbar';
import { Preloader } from './Preloader';
import { Widget, WidgetOptions } from './Widget';
/**
 * Wrapper options
 */
export type WrapperOptions = WidgetOptions & {
    preloader?: Preloader;
    navbar?: Navbar;
};
/**
 * Wrapper object for AdminLTE
 */
export declare class Wrapper extends Widget {
    /**
     * Constructor
     * @param {WrapperOptions} opt
     */
    constructor(opt: WrapperOptions);
}
