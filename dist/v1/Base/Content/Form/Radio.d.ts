import { Component, ComponentType } from '../../Component.js';
import { LangText } from './../../../Lang/LangText.js';
/**
 * Radio
 */
export declare class Radio extends Component {
    /**
     * input radio
     * @protected
     */
    protected _inputRadio: JQuery;
    /**
     * label
     * @protected
     */
    protected _label: JQuery | null;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} radionName
     * @param {string} radioValue
     * @param {string|LangText|JQuery|null} label
     * @param {boolean} checked
     */
    constructor(element: ComponentType, radionName: string, radioValue: string, label?: string | LangText | JQuery | null, checked?: boolean);
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
     * is box checked
     * @returns {boolean}
     */
    isChecked(): boolean;
    /**
     * Set the box checked or remove checked
     * @param {boolean} checked
     */
    setChecked(checked: boolean): void;
}
