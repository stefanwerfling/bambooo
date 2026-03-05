import { Component, ComponentType } from '../../Component.js';
import { Table, TableOptions } from './Table.js';
export type TableDataLoader<T> = (page: number) => Promise<T[]>;
export type TableRowRenderer<T> = (table: Table, item: T) => void;
/**
 * Table Wrapper
 * @template T
 */
export declare class TableWrapper<T> extends Component<HTMLDivElement> {
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
    protected _page: number;
    /**
     * Loading
     * @protected
     */
    protected _loading: boolean;
    /**
     * Has more
     * @protected
     */
    protected _hasMore: boolean;
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
    constructor(element: ComponentType, options?: TableOptions);
    /**
     * Init observer
     * @protected
     */
    protected _initObserver(): void;
    /**
     * Set data source
     * @param {TableDataLoader<T>} loader
     * @param {TableRowRenderer<T>} renderer
     */
    setDataSource(loader: TableDataLoader<T>, renderer: TableRowRenderer<T>, reset?: boolean): void;
    /**
     * Reset
     */
    reset(): Promise<void>;
    /**
     * Try load
     * @protected
     */
    protected _tryLoad(): Promise<void>;
    /**
     * Load next
     * @protected
     */
    protected _loadNext(): Promise<void>;
    /**
     * Return table
     * @return {Table}
     */
    getTable(): Table;
}
