import {Component, ComponentType} from '../../Component.js';
import {LangText} from './../../../Lang/LangText.js';

/**
 * StrongText
 */
export class StrongText extends Component {

    /**
     * constructor
     * @param {ComponentType} element
     * @param {string|JQuery|LangText} text
     */
    public constructor(element: ComponentType, text?: string|JQuery|LangText) {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery(`<strong/>`).appendTo(telement);

        if (text) {
            this.addText(text);
        }
    }

    /**
     * Add Text
     * @param {string|JQuery|LangText} text
     */
    public addText(text: string|JQuery|LangText): void {
        const ttext = this._getAnyElement(text);
        this._element.append(ttext);
    }

}