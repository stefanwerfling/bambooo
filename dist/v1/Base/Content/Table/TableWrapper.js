"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWrapper = void 0;
const Component_js_1 = require("../../Component.js");
const Table_js_1 = require("./Table.js");
/**
 * Table Wrapper
 * @template T
 */
class TableWrapper extends Component_js_1.Component {
    /**
     * Wrapper
     * @protected
     */
    _wrapper;
    /**
     * Table
     * @protected
     */
    _table;
    /**
     * Sentinel
     * @protected
     */
    _sentinel;
    /**
     * Observer
     * @protected
     */
    _observer;
    /**
     * Page
     * @protected
     */
    _page = 0;
    /**
     * Loading
     * @protected
     */
    _loading = false;
    /**
     * Has more
     * @protected
     */
    _hasMore = true;
    /**
     * Loader
     * @protected
     */
    _loader;
    /**
     * Renderer
     * @protected
     */
    _renderer;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {TableOptions} options
     */
    constructor(element, options = {}) {
        super();
        const telement = this._getAnyElement(element);
        this._wrapper = jQuery('<div class="table-wrapper" />').appendTo(telement);
        this._table = new Table_js_1.Table(this._wrapper, options);
        this._sentinel = jQuery('<div class="table-sentinel" style="height:1px"></div>').appendTo(this._wrapper);
        this._initObserver();
    }
    /**
     * Init observer
     * @protected
     */
    _initObserver() {
        this._observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this._loadNext().then();
            }
        }, {
            root: this._wrapper[0],
            rootMargin: "200px"
        });
        this._observer.observe(this._sentinel[0]);
    }
    /**
     * Set data source
     * @param {TableDataLoader<T>} loader
     * @param {TableRowRenderer<T>} renderer
     */
    setDataSource(loader, renderer) {
        this._loader = loader;
        this._renderer = renderer;
        this.reset();
        this._loadNext().then();
    }
    /**
     * Reset
     */
    reset() {
        this._page = 0;
        this._hasMore = true;
        this._table.getTbody().empty();
    }
    /**
     * Load next
     * @protected
     */
    async _loadNext() {
        if (this._loading || !this._hasMore || !this._loader || !this._renderer) {
            return;
        }
        this._loading = true;
        const data = await this._loader(this._page);
        if (!data || data.length === 0) {
            this._hasMore = false;
            return;
        }
        for (const item of data) {
            this._renderer(this._table, item);
        }
        this._page++;
        this._loading = false;
    }
    /**
     * Return table
     * @return {Table}
     */
    getTable() {
        return this._table;
    }
}
exports.TableWrapper = TableWrapper;
