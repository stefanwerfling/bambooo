import { Element } from '../../Element';
export declare enum CalloutType {
    warning = "callout-warning",
    danger = "callout-danger",
    info = "callout-info",
    success = "callout-success",
    default = ""
}
/**
 * Callout
 */
export declare class Callout extends Element {
    protected _mainElement: any;
    protected _title: any;
    /**
     * constructor
     * @param {any|Element} element
     * @param {CalloutType} type
     */
    constructor(element: any | Element, type?: CalloutType);
    /**
     * Set Title
     * @param {string} title
     */
    setTitle(title: string): void;
    /**
     * Return the main Element
     * @returns {any}
     */
    getMainElement(): any;
}
