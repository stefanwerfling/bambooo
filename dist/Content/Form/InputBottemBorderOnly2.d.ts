import { Element } from '../../Element';
/**
 * InputType
 */
export declare enum InputType {
    text = "text",
    number = "number",
    range = "range"
}
/**
 * InputBottemBorderOnly2
 */
export declare class InputBottemBorderOnly2 extends Element {
    /**
     * constructor
     * @param element
     * @param id
     * @param type
     */
    constructor(element: any, id?: string, type?: InputType);
    /**
     * setValue
     * @param value
     */
    setValue(value: string): void;
    /**
     * getValue
     */
    getValue(): string;
}
