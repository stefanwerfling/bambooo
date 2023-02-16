import { Element } from '../../Element';
import { SelectOption } from './SelectBottemBorderOnly2';
/**
 * Multiple
 */
export declare class Multiple extends Element {
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
     * addValue
     * @param option
     */
    addValue(option: SelectOption): void;
    /**
     * clearValues
     */
    clearValues(): void;
    /**
     * setValue
     * @param values
     */
    setValue(values: any[]): void;
    /**
     * getValue
     */
    getValue(): any[];
}
