import { Component, ComponentType } from '../../Component.js';
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
export declare class Text extends Component<HTMLDivElement> {
    /**
     * constructor
     * @param {ComponentType} element
     * @param {TextAlignment} align
     */
    constructor(element: ComponentType, align?: TextAlignment);
}
