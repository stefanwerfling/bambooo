import {Textarea} from './Textarea';

/**
 * Summernote
 */
export class Summernote extends Textarea {

    /**
     * Is Enable
     * @protected
     */
    protected _isEnable = true;

    /**
     * Constructor for Summernote element.
     * @param {Element|HTMLElement} element - A element to append the Textarea element.
     * @param {[string]} placeholder - Optional, placeholder for textarea.
     * @param {number} rows - Textarea rows.
     */
    public constructor(element: any, placeholder?: string, rows: number = 3) {
        super(element, placeholder, rows);

        this.create(false);
    }

    protected create(focus: boolean): void {
        this._element.summernote({
            focus: focus
        });
    }

    public destroy(): void {
        this._element.summernote('destroy');
    }

    /**
     * Get value
     * @returns {string}
     */
    public override getValue(): string {
        return this._element.summernote('code');
    }

    /**
     * Set value
     * @param {string} value
     */
    public override setValue(value: string): void {
        this._element.summernote('pasteHTML', value);

    }

    public focus(): void {
        this._element.summernote('focus');
    }

    public fullscreen(): void {
        return this._element.summernote('fullscreen.toggle');
    }

    public isFullscreen(): boolean {
        return this._element.summernote('fullscreen.isFullscreen');
    }

    public isEmpty(): boolean {
        return this._element.summernote('isEmpty');
    }

    public reset(): void {
        return this._element.summernote('reset');
    }

    /**
     * setEnable
     * @param {boolean} enable
     */
    public setEnable(enable: boolean): void {
        this._isEnable = enable;

        if (this._isEnable) {
            this._element.summernote('enable');
            return;
        }

        this._element.summernote('disable');
    }

    /**
     * isEnable
     */
    public isEnable(): boolean {
        return this._isEnable;
    }
}