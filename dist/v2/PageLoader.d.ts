import { IWrapper } from './Base/IWrapper.js';
import { BasePage } from './BasePage.js';
import { IBasePage } from './IBasePage.js';
import { IPageLoader } from './IPageLoader.js';
import { ILang } from './Lang/ILang.js';
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
export declare class PageLoader implements IPageLoader {
    /**
     * Instance of IPageLoader
     * @private
     */
    private static _instance;
    /**
     * Return an instance from Pageloader
     * @param {PageLoaderOptions} opt
     */
    static getInstance(opt?: PageLoaderOptions): IPageLoader;
    /**
     * Options
     * @protected
     */
    protected _options: PageLoaderOptions;
    /**
     * Current loaded page object
     * @protected
     */
    protected _currentPage: IBasePage | null;
    /**
     * Page loader constructor
     */
    private constructor();
    /**
     * Return the wrapper
     * @returns {IWrapper}
     */
    getWrapper(): IWrapper;
    protected _loadUser(page: IBasePage): Promise<void>;
    protected _loadNavBar(page: IBasePage): Promise<void>;
    load(page: IBasePage): Promise<boolean>;
}
