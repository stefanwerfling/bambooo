import { Component, ComponentType } from '../../Component.js';
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
export declare class PText extends Component<HTMLElement> {
    /**
     * constructor
     * @param {ComponentType} element
     * @param {PTextType} type
     * @param {TextAlignment} align
     */
    constructor(element: ComponentType, type?: PTextType, align?: TextAlignment);
    /**
     * Add value
     * @param {ComponentType|string} value
     */
    addValue(value: ComponentType | string): void;
    /**
     * Add a text
     * @param {string} text
     */
    addText(text: string): void;
    /**
     * Add component
     * @param {ComponentType} component
     */
    addComponent(component: ComponentType): void;
}
