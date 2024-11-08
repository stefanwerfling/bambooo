import { Element } from '../../Element';
import { TextAlignment } from './Text';
export declare enum PTextType {
    success = "text-success",
    info = "text-info",
    primary = "text-primary",
    danger = "text-danger",
    warning = "text-warning",
    muted = "text-muted"
}
/**
 * PText
 */
export declare class PText extends Element {
    /**
     * constructor
     * @param {any|Element} element
     * @param {PTextType} type
     * @param {TextAlignment} align
     */
    constructor(element: any | Element, type?: PTextType, align?: TextAlignment);
    /**
     * addValue
     * @param value
     */
    addValue(value: any): void;
}
