import { IWrapper } from './IWrapper';
import { MainSidebar } from './MainSidebar';
import { Navbar } from './Navbar/Navbar';
import { Preloader } from './Preloader';
import { Widget, WidgetOptions } from './Widget';
/**
 * Wrapper options
 */
export type WrapperOptions = WidgetOptions & {
    preloader?: Preloader;
    navbar?: Navbar;
    mainsidebar?: MainSidebar;
};
/**
 * Wrapper object for AdminLTE
 */
export declare class Wrapper extends Widget implements IWrapper {
    /**
     * Constructor
     * @param {WrapperOptions} opt
     */
    constructor(opt?: WrapperOptions);
    /**
     * Return a preloader
     * @returns {Preloader|null}
     */
    getPreloader(): Preloader | null;
    /**
     * Return a navbar
     * @returns {Navbar|null}
     */
    getNavbar(): Navbar | null;
    /**
     * Return the main Sidebar
     * @returns {MainSidebar|null}
     */
    getMainSidebar(): MainSidebar | null;
}
