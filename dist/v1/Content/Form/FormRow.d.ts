import { Element } from '../../Element';
export declare enum FormRowColType {
    none = 0,
    sm = 1
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
     * createCol
     * @param {number} size
     * @param {[string]} addClass
     */
    createCol(size: number, colType?: FormRowColType, addClass?: string): any;
}
