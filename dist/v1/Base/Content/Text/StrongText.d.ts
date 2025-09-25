import { Component, ComponentType } from '../../Component.js';
import { LangText } from './../../../Lang/LangText.js';
/**
 * StrongText
 */
export declare class StrongText extends Component {
    /**
     * constructor
     * @param {ComponentType} element
     * @param {string|JQuery|LangText} text
     */
    constructor(element: ComponentType, text?: string | JQuery | LangText);
    /**
     * Add Text
     * @param {string|JQuery|LangText} text
     */
    addText(text: string | JQuery | LangText): void;
}
