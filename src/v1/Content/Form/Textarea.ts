import {Element} from '../../Element';

/**
 * Textarea form element.
 */
export class Textarea extends Element {

    /**
     * Constructor for Textarea element.
     * @param {Element|HTMLElement} element - A element to append the Textarea element.
     * @param {[string]} placeholder - Optional, placeholder for textarea.
     * @param {number} rows - Textarea rows.
     */
    public constructor(element: any, placeholder?: string, rows: number = 3) {
        super();

        let tplaceholder = '';
        const telement = this._getAnyElement(element);

        if (placeholder) {
            tplaceholder = `placeholder="${placeholder}"`;
        }

        this._element = jQuery(`<textarea class="form-control" rows="${rows}" ${tplaceholder}>`);
        this._element.appendTo(telement);
    }

    /**
     * Set the placeholder.
     * @param {string} placeholder
     */
    public setPlaceholder(placeholder: string): void {
        this._element.attr('placeholder', placeholder);
    }

    /**
     * Set the value to Textarea.
     * @param {string} value
     */
    public setValue(value: string): void {
        this._element.val(value);
    }

    /**
     * Return the value from Textarea.
     * @returns {string}
     */
    public getValue(): string {
        return this._element.val();
    }

}