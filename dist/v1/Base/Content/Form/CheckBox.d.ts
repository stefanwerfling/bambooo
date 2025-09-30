import { Component, ComponentType } from '../../Component.js';
import { LangText } from '../../../Lang/LangText.js';
/**
 * CheckBoxClickFn
 */
export type CheckBoxClickFn = () => void;
/**
 * Check Box
 */
export declare class CheckBox extends Component<HTMLDivElement> {
    /**
     * input
     * @protected
     */
    protected _input: JQuery;
    /**
     * label
     * @protected
     */
    protected _label: JQuery;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string|JQuery|LangText} label
     */
    constructor(element: ComponentType, label?: string | JQuery | LangText);
    /**
     * setLabel
     * @param {string|JQuery|LangText} label
     */
    setLabel(label: string | JQuery | LangText): void;
    /**
     * setReadOnly
     * @param {boolean} readonly
     */
    setReadOnly(readonly: boolean): void;
    /**
     * isReadOnly
     * @return {boolean}
     */
    isReadOnly(): boolean;
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
    /**
     * Set the onclick function for checkbox
     * @param {CheckBoxClickFn} fn
     */
    setOnClickFn(fn: CheckBoxClickFn): void;
}
