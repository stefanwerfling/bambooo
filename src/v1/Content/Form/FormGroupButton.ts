import {Element} from '../../Element';

/**
 * FormGroupButtonClickFn
 */
export type FormGroupButtonClickFn = () => void;

/**
 * FormGroupButton
 */
export class FormGroupButton extends Element {

    /**
     * _subElement
     * @protected
     */
    protected _subElement: any;

    /**
     * icon element
     * @protected
     */
    protected _iconElement: any;

    /**
     * _click
     * @protected
     */
    protected _click?: FormGroupButtonClickFn;

    /**
     * constructor
     * @param element
     */
    public constructor(element: any) {
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
     */
    public getButtonElement(): any {
        return this._subElement;
    }

    /**
     * getIconElement
     */
    public getIconElement(): any {
        return this._iconElement;
    }

    /**
     * setOnClickFn
     * @param onClick
     */
    public setOnClickFn(onClick: FormGroupButtonClickFn): void {
        this._click = onClick;
    }
}