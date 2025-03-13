import { Element } from '../../Element';
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
export declare class Table extends Element {
    /**
     * _thead
     * @private
     */
    private _thead;
    /**
     * _tbody
     * @private
     */
    private _tbody;
    /**
     * _tfoot
     * @private
     */
    private _tfoot;
    /**
     * constructor
     * @param {any} element
     * @param {TableOptions} options
     */
    constructor(element: any, options?: TableOptions);
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
     * @return {any}
     */
    getThead(): any;
    /**
     * getTbody
     * @return {any}
     */
    getTbody(): any;
    /**
     * getFoot
     * @return {any}
     */
    getFoot(): any;
}
