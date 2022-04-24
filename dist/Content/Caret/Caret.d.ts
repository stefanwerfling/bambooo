import { Element } from '../../Element';
/**
 * CaretType
 */
export declare enum CaretType {
    up = "fa-caret-up",
    left = "fa-caret-left",
    down = "fa-caret-down"
}
/**
 * Caret
 */
export declare class Caret extends Element {
    /**
     * constructor
     * @param element
     * @param type
     */
    constructor(element: any, type?: CaretType);
    /**
     * addValue
     * @param value
     */
    addValue(value: any): void;
}
