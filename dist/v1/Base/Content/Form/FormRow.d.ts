import { Component, ComponentType } from '../../Component.js';
export declare enum FormRowColType {
    none = 0,
    sm = 1,
    lg = 2,
    auto = 3
}
/**
 * FormRow
 */
export declare class FormRow extends Component<HTMLDivElement> {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} style
     */
    constructor(element: ComponentType, style?: string);
    /**
     * create a col element
     * @param {number} size
     * @param {FormRowColType} colType
     * @param {[string]} addClass
     * @returns {JQuery<HTMLDivElement>}
     */
    createCol(size: number, colType?: FormRowColType, addClass?: string): JQuery<HTMLDivElement>;
    /**
     * Create auto col element
     * @param {string} addClass
     * @returns {JQuery<HTMLDivElement>}
     */
    createAutoCol(addClass?: string): JQuery<HTMLDivElement>;
}
