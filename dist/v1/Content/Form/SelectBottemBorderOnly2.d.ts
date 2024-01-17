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
     * @param element
     */
    constructor(element: any);
    /**
     * setValues
     * @param options
     */
    setValues(options: SelectOption[]): void;
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
     * setChangeFn
     * @param onChangeFn
     */
    setChangeFn(onChangeFn: SelectChangeFn): void;
    /**
     * setSelectedValue
     * @param value
     */
    setSelectedValue(value: string): void;
    /**
     * getSelectedValue
     */
    getSelectedValue(): string;
}
