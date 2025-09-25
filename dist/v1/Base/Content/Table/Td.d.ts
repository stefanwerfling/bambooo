import { Component, ComponentType } from '../../Component.js';
import { Tr } from './Tr';
/**
 * Td
 */
export declare class Td extends Component {
    /**
     * Constructor
     * @param {Tr} atr
     * @param {ComponentType} avalue
     * @param {number} colspan
     */
    constructor(atr: Tr, avalue?: ComponentType, colspan?: number);
    /**
     * addValue
     * @param {ComponentType} avalue
     */
    addValue(avalue: ComponentType): void;
}
