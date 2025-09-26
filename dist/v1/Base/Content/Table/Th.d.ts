import { Component, ComponentType } from '../../Component.js';
import { Tr } from './Tr';
/**
 * Th
 */
export declare class Th extends Component {
    /**
     * constructor
     * @param {Tr} atr
     * @param {ComponentType} avalue
     * @param {width} width
     */
    constructor(atr: Tr, avalue?: ComponentType, width?: string);
    /**
     * Add a value
     * @param {ComponentType|string} avalue
     */
    addValue(avalue: ComponentType | string): void;
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
