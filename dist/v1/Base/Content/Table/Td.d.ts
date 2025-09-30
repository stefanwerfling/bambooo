import { Component, ComponentType } from '../../Component.js';
import { Tr } from './Tr';
/**
 * Td
 */
export declare class Td extends Component<HTMLTableCellElement> {
    /**
     * Constructor
     * @param {Tr} atr
     * @param {ComponentType} avalue
     * @param {number} colspan
     */
    constructor(atr: Tr, avalue?: ComponentType, colspan?: number);
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
