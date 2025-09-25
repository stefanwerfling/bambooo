import {Component, ComponentType} from '../../Component.js';

/**
 * FormGroupButtonClickFn
 */
export type FormGroupButtonClickFn = () => void;

/**
 * FormGroupButton
 */
export class FormGroupButton extends Component {

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
    public constructor(element: ComponentType) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div class="input-group"></div>').appendTo(telement);
        this._subElement = jQuery('<div class="input-group-append"></div>').appendTo(this._element);
        this._subElement.css({
            'cursor': 'pointer'
        });

        this._subElement.on('click', () => {
            if (this._click) {
                this._click();
            }
        });

        this._iconElement = jQuery('<div class="input-group-text"></div>').appendTo(this._subElement);
    }

    /**
     * getButtonElement
     * @return {JQuery}
     */
    public getButtonElement(): JQuery {
        return this._subElement;
    }

    /**
     * getIconElement
     * @return {JQuery}
     */
    public getIconElement(): JQuery {
        return this._iconElement;
    }

    /**
     * setOnClickFn
     * @param {FormGroupButtonClickFn} onClick
     */
    public setOnClickFn(onClick: FormGroupButtonClickFn): void {
        this._click = onClick;
    }
}