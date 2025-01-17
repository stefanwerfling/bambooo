import { Element } from '../../Element';
import { SelectOption } from './SelectBottemBorderOnly2';
/**
 * Multiple
 */
export declare class Multiple extends Element {
    /**
     * Limit
     * @protected
     */
    protected _limit: number;
    /**
     * constructor
     * @param element
     * @param id
     */
    constructor(element: any, id?: string);
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
     * @param {any[]} values
     */
    setValue(values: any[]): void;
    /**
     * getValue
     */
    getValue(): any[];
}
