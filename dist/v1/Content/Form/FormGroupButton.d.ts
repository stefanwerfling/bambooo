import { Element } from '../../Element';
/**
 * FormGroupButtonClickFn
 */
export type FormGroupButtonClickFn = () => void;
/**
 * FormGroupButton
 */
export declare class FormGroupButton extends Element {
    /**
     * _subElement
     * @protected
     */
    protected _subElement: any;
    /**
     * icon element
     * @protected
     */
    protected _iconElement: any;
    /**
     * _click
     * @protected
     */
    protected _click?: FormGroupButtonClickFn;
    /**
     * constructor
     * @param element
     */
    constructor(element: any);
    /**
     * getButtonElement
     */
    getButtonElement(): any;
    /**
     * getIconElement
     */
    getIconElement(): any;
    /**
     * setOnClickFn
     * @param onClick
     */
    setOnClickFn(onClick: FormGroupButtonClickFn): void;
}
