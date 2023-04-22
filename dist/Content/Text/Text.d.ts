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
     * @param element
     */
    constructor(element: any, align?: TextAlignment);
}
