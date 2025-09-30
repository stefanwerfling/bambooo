import { Component, ComponentType } from '../../Component.js';
/**
 * InputType
 */
export declare enum InputType {
    text = "text",
    number = "number",
    range = "range",
    password = "password",
    colorpicker = "colorpicker",
    date = "date",
    datetime = "datetime",
    time = "time",
    daterange = "daterange"
}
/**
 * Input date ranges interface
 */
export interface InputDateRanges {
    [key: string]: string | any;
}
/**
 * Input type options
 */
export type InputTypeOptions = {
    ranges?: InputDateRanges;
    date_format?: string;
    time_format?: string;
    lang?: string;
};
/**
 * InputBottemBorderOnly2
 */
export declare class InputBottemBorderOnly2 extends Component<HTMLInputElement> {
    /**
     * type
     * @protected
     */
    protected _type: InputType;
    /**
     * Options
     * @protected
     */
    protected _options: InputTypeOptions;
    /**
     * input group
     * @protected
     */
    protected _inputGroup: JQuery<HTMLDivElement> | null;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} id
     * @param {InputType} type
     * @param {InputTypeOptions} options
     */
    constructor(element: ComponentType, id?: string, type?: InputType, options?: InputTypeOptions);
    /**
     * setPlaceholder
     * @param placeholder
     */
    setPlaceholder(placeholder: string): void;
    /**
     * setValue
     * @param value
     */
    setValue(value: string): void;
    /**
     * getValue
     */
    getValue(): string;
    /**
     * Set the value as number, use it by InputType.number
     * @param {number} num
     */
    setValueNum(num: number): void;
    /**
     * Return the value as number, use it by InputType.number
     * @returns {number}
     */
    getValueNum(): number;
    /**
     * setReadOnly
     * @param readonly
     */
    setReadOnly(readonly: boolean): void;
    /**
     * isReadOnly
     */
    isReadOnly(): boolean;
}
