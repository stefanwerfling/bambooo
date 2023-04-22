import { Element } from '../../Element';
/**
 * RadioInput
 */
export declare class RadioInput extends Element {
    /**
     * input radio
     * @protected
     */
    protected _inputRadio: any;
    /**
     * input
     * @protected
     */
    protected _input: any;
    /**
     * constructor
     * @param element
     * @param radionName
     * @param radioValue
     * @param nameInput
     * @param nameInputValue
     * @param checked
     */
    constructor(element: any, radionName: string, radioValue: string, nameInput: string, inputValue: string, checked?: boolean);
}
