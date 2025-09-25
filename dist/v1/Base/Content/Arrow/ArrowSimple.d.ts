import { Component, ComponentType } from '../../Component.js';
export declare enum ArrowSimpleDirection {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}
/**
 * Arrow Simple
 */
export declare class ArrowSimple extends Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {ArrowSimpleDirection} direction
     * @param {string} color
     * @param {number} sizePx
     */
    constructor(element: ComponentType, direction: ArrowSimpleDirection, color: string, sizePx?: number);
    /**
     * Set options
     * @param {ArrowSimpleDirection} direction
     * @param {string} color
     * @param {number} sizePx
     */
    setOptions(direction: ArrowSimpleDirection, color: string, sizePx?: number): void;
}
