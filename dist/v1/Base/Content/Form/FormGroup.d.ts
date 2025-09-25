import { Component, ComponentType } from '../../Component.js';
import { LangText } from './../../../Lang/LangText.js';
/**
 * FormGroup
 */
export declare class FormGroup extends Component {
    /**
     * label
     * @protected
     */
    protected _label: JQuery | null;
    /**
     * constructor
     * @param {ComponentType} element
     * @param {string|JQuery|LangText} label
     */
    constructor(element: ComponentType, label?: string | JQuery | LangText);
    /**
     * Create the label object element
     * @protected
     * @return {JQuery}
     */
    protected _getLabel(): JQuery;
    /**
     * setLabel
     * @param {string|JQuery|LangText} label
     */
    setLabel(label: string | JQuery | LangText): void;
    /**
     * getLabelElement
     * @returns {JQuery}
     */
    getLabelElement(): JQuery;
    /**
     * Clear the elements from the group
     */
    clear(): void;
}
