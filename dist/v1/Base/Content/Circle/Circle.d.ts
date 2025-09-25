import { Component, ComponentType } from '../../Component.js';
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
export declare class Circle extends Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {CircleColor|string} color
     */
    constructor(element: ComponentType, color: CircleColor | string);
}
