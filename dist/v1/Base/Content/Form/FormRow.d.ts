import { Element } from '../../Element';
export declare enum FormRowColType {
    none = 0,
    sm = 1,
    lg = 2,
    auto = 3
}
/**
 * FormRow
 */
export declare class FormRow extends Element {
    /**
     * constructor
     * @param {any} element
     * @param {string} style
     */
    constructor(element: any, style?: string);
    /**
     * create a col element
     * @param {number} size
     * @param {FormRowColType} colType
     * @param {[string]} addClass
     * @returns {any}
     */
    createCol(size: number, colType?: FormRowColType, addClass?: string): any;
    /**
     * Create auto col element
     * @param {string} addClass
     * @returns {any}
     */
    createAutoCol(addClass?: string): any;
}
