import { Component, ComponentType } from '../../Component.js';
import { LangText } from './../../../Lang/LangText.js';
/**
 * H Head element
 */
export declare class HeadText extends Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {number} hnum
     * @param {string|LangText} title
     */
    constructor(element: ComponentType, hnum: number, title?: string | LangText);
    /**
     * Set title
     * @param {string|JQuery|LangText} title
     */
    setTitle(title: string | JQuery | LangText): void;
}
