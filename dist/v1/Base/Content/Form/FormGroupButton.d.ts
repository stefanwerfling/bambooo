import { Component, ComponentType } from '../../Component.js';
/**
 * FormGroupButtonClickFn
 */
export type FormGroupButtonClickFn = () => void;
/**
 * FormGroupButton
 */
export declare class FormGroupButton extends Component {
    /**
     * _subElement
     * @protected
     */
    protected _subElement: JQuery;
    /**
     * icon element
     * @protected
     */
    protected _iconElement: JQuery;
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
    getButtonElement(): JQuery;
    /**
     * getIconElement
     * @return {JQuery}
     */
    getIconElement(): JQuery;
    /**
     * setOnClickFn
     * @param {FormGroupButtonClickFn} onClick
     */
    setOnClickFn(onClick: FormGroupButtonClickFn): void;
}
