import { Element } from './Element';
/**
 * Content
 */
export declare class Content extends Element {
    /**
     * content fluid element
     * @private
     */
    private _contentFluidElement;
    /**
     * constructor
     * @param {any} element
     */
    constructor(element?: any);
    /**
     * getContentFluidElement
     * @return {any}
     */
    getContentFluidElement(): any;
    /**
     * empty
     */
    empty(): void;
}
