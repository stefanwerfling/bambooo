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
     * @param element
     * @param type
     */
    constructor(element: any, type?: CalloutType);
    /**
     * setTitle
     * @param title
     */
    setTitle(title: string): void;
    /**
     * getMainElement
     */
    getMainElement(): any;
}
