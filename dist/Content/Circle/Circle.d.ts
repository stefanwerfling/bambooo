import { Element } from '../../Element';
/**
 * CircleColor
 */
export declare enum CircleColor {
    green = "text-green",
    blue = "text-blue",
    purple = "text-purple",
    red = "text-red",
    orange = "text-orange",
    yellow = "text-yellow",
    gray = "text-gray"
}
/**
 * Circle
 */
export declare class Circle extends Element {
    /**
     * constructor
     * @param element
     * @param color
     */
    constructor(element: any, color: CircleColor | string);
}
