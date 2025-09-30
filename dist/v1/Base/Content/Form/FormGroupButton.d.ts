import { Component, ComponentType } from '../../Component.js';
/**
 * FormGroupButtonClickFn
 */
export type FormGroupButtonClickFn = () => void;
/**
 * FormGroupButton
 */
export declare class FormGroupButton extends Component<HTMLDivElement> {
    /**
     * _subElement
     * @protected
     */
    protected _subElement: JQuery<HTMLDivElement>;
    /**
     * icon element
     * @protected
     */
    protected _iconElement: JQuery<HTMLDivElement>;
    /**
     * _click
     * @protected
     */
    protected _click?: FormGroupButtonClickFn;
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element: ComponentType);
    /**
     * getButtonElement
     * @return {JQuery}
     */
    getButtonElement(): JQuery<HTMLDivElement>;
    /**
     * getIconElement
     * @return {JQuery}
     */
    getIconElement(): JQuery<HTMLDivElement>;
    /**
     * setOnClickFn
     * @param {FormGroupButtonClickFn} onClick
     */
    setOnClickFn(onClick: FormGroupButtonClickFn): void;
}
