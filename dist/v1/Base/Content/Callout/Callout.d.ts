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
export declare class Callout extends Component<HTMLElement> {
    /**
     * Main Element
     * @protected
     */
    protected _mainElement: JQuery<HTMLDivElement>;
    /**
     * Title
     * @protected
     */
    protected _title: JQuery<HTMLHeadingElement>;
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
     * @returns {JQuery<HTMLDivElement>}
     */
    getMainElement(): JQuery<HTMLDivElement>;
}
