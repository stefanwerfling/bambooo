import { Element } from '../../Element';
/**
 * TextAlignment
 */
export declare enum TextAlignment {
    none = "",
    center = "text-center"
}
/**
 * Text
 */
export declare class Text extends Element {
    /**
     * constructor
     * @param {any|Element} element
     * @param {TextAlignment} align
     */
    constructor(element: any | Element, align?: TextAlignment);
}
