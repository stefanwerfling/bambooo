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
     * addValue
     * @param {ComponentType} avalue
     */
    addValue(avalue: ComponentType): void;
}
