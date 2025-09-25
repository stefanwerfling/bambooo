import { Component } from './Component.js';
/**
 * Content
 */
export declare class Content extends Component {
    /**
     * content fluid element
     * @private
     */
    protected _contentFluidElement: JQuery;
    /**
     * Constructor
     * @param {JQuery} element
     */
    constructor(element?: JQuery);
    /**
     * getContentFluidElement
     * @return {JQuery}
     */
    getContentFluidElement(): JQuery;
    /**
     * empty
     */
    empty(): void;
}
