import { Component, ComponentType } from '../../Component.js';
/**
 * Callout type
 */
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
export declare class Callout extends Component {
    /**
     * Main Element
     * @protected
     */
    protected _mainElement: JQuery;
    /**
     * Title
     * @protected
     */
    protected _title: JQuery;
    /**
     * constructor
     * @param {ComponentType} element
     * @param {CalloutType} type
     */
    constructor(element: ComponentType, type?: CalloutType);
    /**
     * Set Title
     * @param {string} title
     */
    setTitle(title: string): void;
    /**
     * Return the main Element
     * @returns {JQuery}
     */
    getMainElement(): JQuery;
}
