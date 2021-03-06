import {Element} from '../../Element';

/**
 * InputType
 */
export enum InputType {
    text = 'text',
    number = 'number',
    range = 'range',
    password = 'password'
}

/**
 * InputBottemBorderOnly2
 */
export class InputBottemBorderOnly2 extends Element {

    /**
     * constructor
     * @param element
     * @param id
     * @param type
     */
    public constructor(element: any, id?: string, type: InputType = InputType.text) {
        super();

        const telement = this._getAnyElement(element);

        let aid: string = '';

        if (!id) {
            aid = id!;
        }

        this._element = jQuery(`<input type="${type}" class="form-control form-control-border border-width-2" id="${aid}" placeholder="">`).appendTo(telement);
    }

    /**
     * setPlaceholder
     * @param placeholder
     */
    public setPlaceholder(placeholder: string): void {
        this._element.attr("placeholder", placeholder);
    }

    /**
     * setValue
     * @param value
     */
    public setValue(value: string): void {
        this._element.val(value);
    }

    /**
     * getValue
     */
    public getValue(): string {
        return this._element.val();
    }

    /**
     * setReadOnly
     * @param readonly
     */
    public setReadOnly(readonly: boolean): void {
        if (readonly) {
            this._element.attr('disabled', 'disabled');
        } else {
            this._element.removeAttr('disabled');
        }
    }

}