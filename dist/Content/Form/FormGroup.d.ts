import { Element } from '../../Element';
/**
 * FormGroup
 */
export declare class FormGroup extends Element {
    /**
     * label
     * @protected
     */
    protected _label: any;
    /**
     * constructor
     * @param element
     * @param label
     */
    constructor(element: any, label?: any);
    /**
     * setLabel
     * @param label
     */
    setLabel(label: any): void;
    /**
     * getLabelElement
     */
    getLabelElement(): any;
}
