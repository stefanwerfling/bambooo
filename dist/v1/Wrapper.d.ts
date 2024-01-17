import { ContentWrapper } from './ContentWrapper';
import { ControlSidebar } from './ControlSidebar';
import { Footer } from './Footer';
import { MainSidebar } from './MainSidebar';
import { Navbar } from './Navbar';
import { Preloader } from './Preloader';
/**
 * Wrapper
 */
export declare class Wrapper {
    /**
     * element
     * @private
     */
    private readonly _element;
    /**
     * preloader
     * @private
     */
    private readonly _preloader;
    /**
     * navbar
     * @private
     */
    private readonly _navbar;
    /**
     * main sidebar
     * @private
     */
    private readonly _mainSidebar;
    /**
     * content wrapper
     * @private
     */
    private readonly _contentWrapper;
    /**
     * footer
     * @private
     */
    private readonly _footer;
    /**
     * control sidebar
     * @private
     */
    private readonly _controlSidebar;
    /**
     * constructor
     * @param element
     */
    constructor(element?: any);
    /**
     * getElement
     */
    getElement(): any;
    /**
     * getMainSidebar
     */
    getMainSidebar(): MainSidebar;
    /**
     * getContentWrapper
     */
    getContentWrapper(): ContentWrapper;
    /**
     * getFooter
     */
    getFooter(): Footer;
    /**
     * getCrontrolSidebar
     */
    getCrontrolSidebar(): ControlSidebar;
    /**
     * getPreloader
     */
    getPreloader(): Preloader;
    /**
     * getNavbar
     */
    getNavbar(): Navbar;
}
