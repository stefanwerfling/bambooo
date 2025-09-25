import { Component, ComponentType } from '../../Component.js';
/**
 * Table Options
 */
export type TableOptions = {
    striped?: boolean;
    hover?: boolean;
    nowrap?: boolean;
};
/**
 * Table
 */
export declare class Table extends Component {
    /**
     * _thead
     * @private
     */
    protected _thead: JQuery;
    /**
     * _tbody
     * @private
     */
    protected _tbody: JQuery;
    /**
     * _tfoot
     * @private
     */
    protected _tfoot: JQuery | null;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {TableOptions} options
     */
    constructor(element: ComponentType, options?: TableOptions);
    /**
     * Set table style striped
     * @param {boolean} striped
     */
    setStyleStriped(striped: boolean): void;
    /**
     * Set table style hover
     * @param {boolean} hover
     */
    setStyleHover(hover: boolean): void;
    /**
     * Set table style Text-No-Wrap
     * @param {boolean} noWrap
     */
    setStyleTextNoWrap(noWrap: boolean): void;
    /**
     * getThead
     * @return {JQuery}
     */
    getThead(): JQuery;
    /**
     * getTbody
     * @return {JQuery}
     */
    getTbody(): JQuery;
    /**
     * getFoot
     * @return {JQuery}
     */
    getFoot(): JQuery;
}
