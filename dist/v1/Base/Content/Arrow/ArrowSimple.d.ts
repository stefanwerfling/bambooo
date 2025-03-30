import { Element } from '../../Element';
export declare enum ArrowSimpleDirection {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}
export declare class ArrowSimple extends Element {
    /**
     * constructor
     * @param {any|Element} element
     * @param {ArrowSimpleDirection} direction
     * @param {string} color
     * @param {number} sizePx
     */
    constructor(element: any | Element, direction: ArrowSimpleDirection, color: string, sizePx?: number);
    /**
     * Set options
     * @param {ArrowSimpleDirection} direction
     * @param {string} color
     * @param {number} sizePx
     */
    setOptions(direction: ArrowSimpleDirection, color: string, sizePx?: number): void;
}
