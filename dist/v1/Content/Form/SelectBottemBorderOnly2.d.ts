import { Element } from '../../Element';
/**
 * SelectOption
 */
export type SelectOption = {
    key: string;
    value: string;
    style?: string;
};
/**
 * SelectChangeFn
 */
export type SelectChangeFn = (value: any) => void;
/**
 * SelectBottemBorderOnly2
 */
export declare class SelectBottemBorderOnly2 extends Element {
    /**
     * selected value
     * @protected
     */
    protected _selectedValue: string;
    /**
     * constructor
     * @param {any} element
     */
    constructor(element: any);
    /**
     * setValues
     * @param {SelectOption[]} options
     */
    setValues(options: SelectOption[]): void;
    /**
     * addValue
     * @param {SelectOption} option
     */
    addValue(option: SelectOption): void;
    /**
     * Return true when an option has the key
     * @param {string} key
     * @returns {boolean}
     */
    hasValue(key: string): boolean;
    /**
     * clearValues
     */
    clearValues(): void;
    /**
     * setChangeFn
     * @param {SelectChangeFn} onChangeFn
     */
    setChangeFn(onChangeFn: SelectChangeFn): void;
    /**
     * setSelectedValue
     * @param {string} value
     */
    setSelectedValue(value: string): void;
    /**
     * getSelectedValue
     * @returns {string}
     */
    getSelectedValue(): string;
}
