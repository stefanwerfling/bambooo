import { Element } from '../../Element';
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
     * @param element
     */
    constructor(element: any);
    /**
     * getThead
     */
    getThead(): any;
    /**
     * getTbody
     */
    getTbody(): any;
    /**
     * getFoot
     */
    getFoot(): any;
}
