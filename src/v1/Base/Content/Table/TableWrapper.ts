import {Component, ComponentType} from '../../Component.js';
import {Table, TableOptions} from './Table.js';

export type TableDataLoader<T> = (page: number) => Promise<T[]>;
export type TableRowRenderer<T> = (table: Table, item: T) => void;

/**
 * Table Wrapper
 * @template T
 */
export class TableWrapper<T> extends Component<HTMLDivElement> {

    /**
     * Wrapper
     * @protected
     */
    protected _wrapper: JQuery<HTMLDivElement>;

    /**
     * Table
     * @protected
     */
    protected _table: Table;

    /**
     * Sentinel
     * @protected
     */
    protected _sentinel: JQuery<HTMLDivElement>;

    /**
     * Observer
     * @protected
     */
    protected _observer?: IntersectionObserver;

    /**
     * Page
     * @protected
     */
    protected _page: number = 0;

    /**
     * Loading
     * @protected
     */
    protected _loading: boolean = false;

    /**
     * Has more
     * @protected
     */
    protected _hasMore: boolean = true;

    /**
     * Loader
     * @protected
     */
    protected _loader?: TableDataLoader<T>;

    /**
     * Renderer
     * @protected
     */
    protected _renderer?: TableRowRenderer<T>;

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {TableOptions} options
     */
    public constructor(element: ComponentType, options: TableOptions = {}) {
        super();

        const telement = this._getAnyElement(element);
        this._wrapper = jQuery<HTMLDivElement>('<div class="table-wrapper" />').appendTo(telement);
        this._table = new Table(this._wrapper, options);
        this._sentinel = jQuery<HTMLDivElement>('<div class="table-sentinel" style="height:1px"></div>').appendTo(this._wrapper);

        this._initObserver();
    }

    /**
     * Init observer
     * @protected
     */
    protected _initObserver(): void {
        this._observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                this._loadNext().then();
            }
        }, {
            root: this._wrapper[0],
            rootMargin: "400px"
        });

        this._observer.observe(this._sentinel[0]);
    }

    /**
     * Set data source
     * @param {TableDataLoader<T>} loader
     * @param {TableRowRenderer<T>} renderer
     */
    public setDataSource(
        loader: TableDataLoader<T>,
        renderer: TableRowRenderer<T>
    ): void {

        this._loader = loader;
        this._renderer = renderer;

        this.reset();
        this._loadNext().then();
    }

    /**
     * Reset
     */
    public reset(): void {
        this._page = 0;
        this._hasMore = true;
        this._table.getTbody().empty();

        this._loadNext().then(() => {
            if (this._observer) {
                this._observer.unobserve(this._sentinel[0]);
                this._observer.observe(this._sentinel[0]);
            }
        });
    }

    /**
     * Load next
     * @protected
     */
    protected async _loadNext(): Promise<void> {
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

        requestAnimationFrame(() => {
            this._observer?.unobserve(this._sentinel[0]);
            this._observer?.observe(this._sentinel[0]);
        });
    }

    /**
     * Return table
     * @return {Table}
     */
    public getTable(): Table {
        return this._table;
    }

}