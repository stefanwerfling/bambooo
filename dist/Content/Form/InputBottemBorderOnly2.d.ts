import { Element } from '../../Element';
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
    time = "time"
}
/**
 * InputBottemBorderOnly2
 */
export declare class InputBottemBorderOnly2 extends Element {
    /**
     * type
     * @protected
     */
    protected _type: InputType;
    /**
     * input group
     * @protected
     */
    protected _inputGroup: any | null;
    /**
     * constructor
     * @param element
     * @param id
     * @param type
     */
    constructor(element: any, id?: string, type?: InputType);
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
     * setReadOnly
     * @param readonly
     */
    setReadOnly(readonly: boolean): void;
    /**
     * isReadOnly
     */
    isReadOnly(): boolean;
}
