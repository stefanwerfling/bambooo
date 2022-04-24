import { Element } from '../../Element';
/**
 * BadgeType
 */
export declare enum BadgeType {
    success = "badge-success",
    warning = "badge-warning",
    danger = "badge-danger",
    info = "badge-info"
}
/**
 * Badge
 */
export declare class Badge extends Element {
    /**
     * constructor
     * @param element
     * @param text
     * @param type
     */
    constructor(element: any, text: string, type?: BadgeType);
}
