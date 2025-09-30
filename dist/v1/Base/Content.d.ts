import { Component } from './Component.js';
/**
 * Content
 */
export declare class Content extends Component<HTMLElement> {
    /**
     * content fluid element
     * @private
     */
    protected _contentFluidElement: JQuery<HTMLDivElement>;
    /**
     * Constructor
     * @param {JQuery} element
     */
    constructor(element?: JQuery);
    /**
     * getContentFluidElement
     * @return {JQuery}
     */
    getContentFluidElement(): JQuery<HTMLDivElement>;
    /**
     * empty
     */
    empty(): void;
}
