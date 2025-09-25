import { ComponentType } from '../Component.js';
/**
 * LeftNavbar
 */
export declare class LeftNavbar {
    /**
     * entries
     * @private
     */
    private _entries;
    /**
     * element
     * @private
     */
    protected _element: JQuery;
    /**
     * Constructor
     * @param element
     */
    constructor(element?: ComponentType);
    /**
     * Get element
     * @return {JQuery}
     */
    getElement(): JQuery;
    /**
     * load
     */
    load(): void;
}
