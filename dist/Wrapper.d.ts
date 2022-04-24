import { ContentWrapper } from './ContentWrapper';
import { ControlSidebar } from './ControlSidebar';
import { Footer } from './Footer';
import { MainSidebar } from './MainSidebar';
import { Navbar } from './Navbar';
import { Preloader } from './Preloader';
export declare class Wrapper {
    private readonly _element;
    private readonly _preloader;
    private readonly _navbar;
    private readonly _mainSidebar;
    private readonly _contentWrapper;
    private readonly _footer;
    private readonly _controlSidebar;
    constructor(element?: any);
    getElement(): any;
    getMainSidebar(): MainSidebar;
    getContentWrapper(): ContentWrapper;
    getFooter(): Footer;
    getCrontrolSidebar(): ControlSidebar;
    getPreloader(): Preloader;
    getNavbar(): Navbar;
}
