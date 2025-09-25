import { Component, ComponentType } from '../../Component.js';
/**
 * CaretType
 */
export declare enum CaretType {
    up = "fa-caret-up",
    left = "fa-caret-left",
    down = "fa-caret-down"
}
/**
 * Caret
 */
export declare class Caret extends Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {CaretType} type
     */
    constructor(element: ComponentType, type?: CaretType);
    /**
     * addValue
     * @param {JQuery|string} value
     */
    addValue(value: JQuery | string): void;
}
