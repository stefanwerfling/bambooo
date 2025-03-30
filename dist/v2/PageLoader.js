"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLoader = void 0;
const Wrapper_js_1 = require("./Base/Wrapper.js");
/**
 * Page loader object
 */
class PageLoader {
    /**
     * Instance of IPageLoader
     * @private
     */
    static _instance = null;
    /**
     * Return an instance from Pageloader
     * @param {PageLoaderOptions} opt
     */
    static getInstance(opt) {
        if (PageLoader._instance === null) {
            PageLoader._instance = new PageLoader(opt);
        }
        return PageLoader._instance;
    }
    /**
     * Options
     * @protected
     */
    _options;
    /**
     * Current loaded page object
     * @protected
     */
    _currentPage = null;
    /**
     * Page loader constructor
     */
    constructor(opt) {
        if (opt) {
            this._options = opt;
        }
        else {
            this._options = {
                wrapper: new Wrapper_js_1.Wrapper()
            };
        }
        if (!this._options.wrapper) {
            this._options.wrapper = new Wrapper_js_1.Wrapper();
        }
    }
    /**
     * Return the wrapper
     * @returns {IWrapper}
     */
    getWrapper() {
        if (!this._options.wrapper) {
            this._options.wrapper = new Wrapper_js_1.Wrapper();
        }
        return this._options.wrapper;
    }
    async _loadUser(page) {
    }
    async _loadNavBar(page) {
        const navbar = this.getWrapper().getNavbar();
        if (navbar) {
            const rightNavbar = navbar.getRightNavbar();
            if (this._options.lang) {
            }
        }
    }
    async load(page) {
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
            let error = null;
            if (this._currentPage) {
                await this._currentPage.unloadContent();
            }
            page.setPageLoader(this);
            await this._loadNavBar(page);
        }
        catch (e) {
        }
        return true;
    }
}
exports.PageLoader = PageLoader;
