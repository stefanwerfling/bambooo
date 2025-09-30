import { Component, ComponentType } from '../../Component.js';
import { LangText } from './../../../Lang/LangText.js';
/**
 * FormGroup
 */
export declare class FormGroup extends Component<HTMLDivElement> {
    /**
     * label
     * @protected
     */
    protected _label: JQuery<HTMLLabelElement> | null;
    /**
     * constructor
     * @param {ComponentType} element
     * @param {string|JQuery|LangText} label
     */
    constructor(element: ComponentType, label?: string | JQuery | LangText);
    /**
     * Create the label object element
     * @protected
     * @return {JQuery<HTMLLabelElement>}
     */
    protected _getLabel(): JQuery<HTMLLabelElement>;
    /**
     * setLabel
     * @param {string|JQuery|LangText} label
     */
    setLabel(label: string | JQuery | LangText): void;
    /**
     * getLabelElement
     * @returns {JQuery<HTMLLabelElement>}
     */
    getLabelElement(): JQuery<HTMLLabelElement>;
    /**
     * Clear the elements from the group
     */
    clear(): void;
}
