import { Element } from '../../Element';
/**
 * SelectOption
 */
export declare type SelectOption = {
    key: string;
    value: string;
};
/**
 * SelectChangeFn
 */
export declare type SelectChangeFn = (value: any) => void;
/**
 * SelectBottemBorderOnly2
 */
export declare class SelectBottemBorderOnly2 extends Element {
    protected _selectedValue: string;
    constructor(element: any);
    setValues(options: SelectOption[]): void;
    addValue(option: SelectOption): void;
    setChangeFn(onChangeFn: SelectChangeFn): void;
    setSelectedValue(value: string): void;
    getSelectedValue(): string;
}
