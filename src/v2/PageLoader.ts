import {IWrapper} from './Base/IWrapper.js';
import {Wrapper, WrapperOptions} from './Base/Wrapper.js';
import {BasePage} from './BasePage.js';
import {IBasePage} from './IBasePage.js';
import {IPageLoader} from './IPageLoader.js';
import {ILang} from './Lang/ILang.js';
import {HttpError} from './../Core/Net/Error/HttpError.js';

/**
 * Page loader on event
 */
export type PageLoaderOnEvent = (pl: IPageLoader) => void;

/**
 * Page loader options
 */
export type PageLoaderOptions = {
    title?: string;
    logo?: string;
    lang?: {
        default: string;
        list: ILang[];
    };
    user?: {
        onload: PageLoaderOnEvent;
        onclickPage: typeof BasePage;
    };
    navbar?: {
        fullsize?: boolean;
        logout?: PageLoaderOnEvent;
    };
    wrapper?: IWrapper;
};

/**
 * Page loader object
 */
export class PageLoader implements IPageLoader {

    /**
     * Instance of IPageLoader
     * @private
     */
    private static _instance: IPageLoader | null = null;

    /**
     * Return an instance from Pageloader
     * @param {PageLoaderOptions} opt
     */
    public static getInstance(opt?: PageLoaderOptions): IPageLoader {
        if (PageLoader._instance === null) {
            PageLoader._instance = new PageLoader(opt);
        }

        return PageLoader._instance;
    }

    /**
     * Options
     * @protected
     */
    protected _options: PageLoaderOptions;

    /**
     * Current loaded page object
     * @protected
     */
    protected _currentPage: IBasePage | null = null;

    /**
     * Page loader constructor
     */
    private constructor(opt?: PageLoaderOptions) {
        if (opt) {
            this._options = opt;
        } else {
            this._options = {
                wrapper: new Wrapper()
            };
        }

        if (!this._options.wrapper) {
            this._options.wrapper = new Wrapper();
        }
    }

    /**
     * Return the wrapper
     * @returns {IWrapper}
     */
    public getWrapper(): IWrapper {
        if (!this._options.wrapper) {
            this._options.wrapper = new Wrapper();
        }

        return this._options.wrapper;
    }

    protected async _loadUser(page: IBasePage): Promise<void> {

    }

    protected async _loadNavBar(page: IBasePage): Promise<void> {
        const navbar = this.getWrapper().getNavbar();

        if (navbar) {
            const rightNavbar = navbar.getRightNavbar();

            if (this._options.lang) {

            }
        }
    }

    public async load(page: IBasePage): Promise<boolean> {
        const preloader = this.getWrapper().getPreloader();

        if (preloader) {
            if (this._options.logo) {
                preloader.setImage(this._options.logo, this._options.title);
            }
        }

        const sidebar = this.getWrapper().getMainSidebar();

        if (sidebar) {
            sidebar.getLogo();
        }

        try {
            let error: Error|HttpError|null = null;

            if (this._currentPage) {
                await this._currentPage.unloadContent();
            }

            page.setPageLoader(this);
            await this._loadNavBar(page);

        } catch (e) {

        }

        return true;
    }

}