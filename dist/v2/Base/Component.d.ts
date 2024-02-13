/// <reference types="jquery" />
/// <reference types="jquery" />
/**
 * Component options
 */
export type ComponentOptions = {
    element?: JQuery;
    emptyElement?: boolean;
    children?: Component[];
};
/**
 * Component object
 */
export declare class Component {
    /**
     * @member {JQuery<HTMLElement>}
     * @protected
     */
    protected _element: JQuery;
    /**
     * Component constructor
     * @param {ComponentOptions} opt
     */
    constructor(opt?: ComponentOptions);
    /**
     * Return the element from the component
     * @returns {JQuery<HTMLElement>}
     */
    getElement(): JQuery;
    /**
     * appendTo
     * @param {Component|string} telement
     */
    appendTo(telement: Component | JQuery | string): void;
    /**
     * append
     * @param {Component|string} telement
     */
    append(telement: Component | JQuery | string): void;
    /**
     * addClass
     * @param {string} aclass
     */
    addClass(aclass: string): void;
    /**
     * Remove all elements from element
     */
    empty(): void;
    /**
     * Is an element empty?
     * @param {JQuery<HTMLElement>} element
     * @returns {boolean}
     */
    static isEmpty(element: JQuery | Component): boolean;
}
