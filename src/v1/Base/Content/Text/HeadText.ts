import {Component, ComponentType} from '../../Component.js';
import {LangText} from './../../../Lang/LangText.js';

/**
 * H Head element
 */
export class HeadText extends Component {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {number} hnum
     * @param {string|LangText} title
     */
    public constructor(element: ComponentType, hnum: number, title: string|LangText = '') {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<h${hnum}/>`).appendTo(telement);

        this.setTitle(title);
    }

    /**
     * Set title
     * @param {string|JQuery|LangText} title
     */
    public setTitle(title: string|JQuery|LangText): void {
        const ttitle = this._getAnyElement(title);

        this._element.empty().append(ttitle);
    }
}