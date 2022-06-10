import {ContentWrapper} from './ContentWrapper';
import {ControlSidebar} from './ControlSidebar';
import {Footer} from './Footer';
import {MainSidebar} from './MainSidebar';
import {Navbar} from './Navbar';
import {Preloader} from './Preloader';

/**
 * Wrapper
 */
export class Wrapper {

    /**
     * element
     * @private
     */
    private readonly _element: any;

    /**
     * preloader
     * @private
     */
    private readonly _preloader: Preloader;

    /**
     * navbar
     * @private
     */
    private readonly _navbar: Navbar;

    /**
     * main sidebar
     * @private
     */
    private readonly _mainSidebar: MainSidebar;

    /**
     * content wrapper
     * @private
     */
    private readonly _contentWrapper: ContentWrapper;

    /**
     * footer
     * @private
     */
    private readonly _footer: Footer;

    /**
     * control sidebar
     * @private
     */
    private readonly _controlSidebar: ControlSidebar;

    /**
     * constructor
     * @param element
     */
    public constructor(element?: any) {
        if (element) {
            this._element = element;
        } else {
            this._element = jQuery('.wrapper');
        }

        if (this._element.length === 0) {
            throw Error('wrapper element not found!');
        }

        this._element.empty();

        const p = jQuery('<div class="preloader flex-column justify-content-center align-items-center" />').appendTo(this._element);
        this._preloader = new Preloader(p);

        const n = jQuery('<nav class="main-header navbar navbar-expand navbar-white navbar-light" />').appendTo(this._element);
        this._navbar = new Navbar(n);

        const ms = jQuery('<aside class="main-sidebar sidebar-dark-primary elevation-4" />').appendTo(this._element);
        this._mainSidebar = new MainSidebar(ms);

        const c = jQuery('<div class="content-wrapper" />').appendTo(this._element);
        this._contentWrapper = new ContentWrapper(c);

        const f = jQuery('<footer class="main-footer" />').appendTo(this._element);
        this._footer = new Footer(f);

        const cs = jQuery('<aside class="control-sidebar control-sidebar-dark" />').appendTo(this._element);
        this._controlSidebar = new ControlSidebar(cs);
    }

    /**
     * getElement
     */
    public getElement(): any {
        return this._element;
    }

    /**
     * getMainSidebar
     */
    public getMainSidebar(): MainSidebar {
        return this._mainSidebar;
    }

    /**
     * getContentWrapper
     */
    public getContentWrapper(): ContentWrapper {
        return this._contentWrapper;
    }

    /**
     * getFooter
     */
    public getFooter(): Footer {
        return this._footer;
    }

    /**
     * getCrontrolSidebar
     */
    public getCrontrolSidebar(): ControlSidebar {
        return this._controlSidebar;
    }

    /**
     * getPreloader
     */
    public getPreloader(): Preloader {
        return this._preloader;
    }

    /**
     * getNavbar
     */
    public getNavbar(): Navbar {
        return this._navbar;
    }

}