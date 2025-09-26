import {Component, ComponentType} from '../../Component.js';
import {LangText} from './../../../Lang/LangText.js';

/**
 * FormGroup
 */
export class FormGroup extends Component {

    /**
     * label
     * @protected
     */
    protected _label: JQuery|null = null;

    /**
     * constructor
     * @param {ComponentType} element
     * @param {string|JQuery|LangText} label
     */
    public constructor(element: ComponentType, label?: string|JQuery|LangText) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div class="form-group" />').appendTo(telement);

        if (label) {
            this.setLabel(label);
        }
    }

    /**
     * Create the label object element
     * @protected
     * @return {JQuery}
     */
    protected _getLabel(): JQuery {
        if (this._label === null) {
            this._label = jQuery('<label/>').appendTo(this._element);
        }

        return this._label;
    }

    /**
     * setLabel
     * @param {string|JQuery|LangText} label
     */
    public setLabel(label: string|JQuery|LangText): void {
        const l = this._getLabel().empty();

        if (typeof label === 'string') {
            l.append(label);
        } else {
            l.append(this._getAnyElement(label));
        }
    }

    /**
     * getLabelElement
     * @returns {JQuery}
     */
    public getLabelElement(): JQuery {
        return this._getLabel();
    }

    /**
     * Clear the elements from the group
     */
    public clear(): void {
        if (this._label !== null) {
            this._label.detach();
        }

        this._element.empty();

        if (this._label !== null) {
            this._label.appendTo(this._element);
        }
    }

}