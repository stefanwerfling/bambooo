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
     * @param element
     * @param type
     */
    constructor(element: any, type?: PTextType, align?: TextAlignment);
    /**
     * addValue
     * @param value
     */
    addValue(value: any): void;
}
