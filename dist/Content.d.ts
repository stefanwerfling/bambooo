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
     * @param element
     */
    constructor(element?: any);
    /**
     * getContentFluidElement
     */
    getContentFluidElement(): any;
    /**
     * empty
     */
    empty(): void;
}
