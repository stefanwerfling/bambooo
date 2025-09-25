import { Component, ComponentType } from '../../Component.js';
import { SelectOption } from './SelectBottemBorderOnly2';
/**
 * Multiple
 */
export declare class Multiple extends Component {
    /**
     * Limit
     * @protected
     */
    protected _limit: number;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} id
     */
    constructor(element: ComponentType, id?: string);
    /**
     * _reload
     * @protected
     */
    protected _reload(): void;
    /**
     * Set limit
     * @param {number} limit
     */
    setLimit(limit: number): void;
    /**
     * Add value
     * @param {SelectOption} option
     */
    addValue(option: SelectOption): void;
    /**
     * clearValues
     */
    clearValues(): void;
    /**
     * setValue
     * @param {string[]} values
     */
    setValue(values: string[]): void;
    /**
     * getValue
     * @return {string[]}
     */
    getValue(): string[];
}
