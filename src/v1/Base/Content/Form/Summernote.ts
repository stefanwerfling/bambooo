import {IReadOnly} from '../../../../Core/Interface/IReadOnly.js';
import {ComponentType} from '../../Component.js';
import {Textarea} from './Textarea';

/**
 * Summernote
 */
export class Summernote extends Textarea implements IReadOnly {

    /**
     * Is Enable
     * @protected
     */
    protected _isEnable = true;

    /**
     * Constructor for Summernote element.
     * @param {ComponentType} element - A element to append the Textarea element.
     * @param {[string]} placeholder - Optional, placeholder for textarea.
     * @param {number} rows - Textarea rows.
     */
    public constructor(element: ComponentType, placeholder?: string, rows: number = 3) {
        super(element, placeholder, rows);

        this.create(false);
    }

    /**
     * Create
     * @param {boolean} focus
     * @protected
     */
    protected create(focus: boolean): void {
        if (typeof (this._element as any).summernote === 'function') {
            (this._element as any).summernote({
                focus: focus
            });
        } else {
            console.log('Summernote: Summernote plugin not found!');
        }
    }

    public destroy(): void {
        if (typeof (this._element as any).summernote === 'function') {
            (this._element as any).summernote('destroy');
        }
    }

    /**
     * Get value
     * @returns {string}
     */
    public override getValue(): string {
        if (typeof (this._element as any).summernote === 'function') {
            return (this._element as any).summernote('code');
        } else {
            console.log('Summernote: Summernote plugin not found!');
        }

        return '';
    }

    /**
     * Set value
     * @param {string} value
     */
    public override setValue(value: string): void {
        if (typeof (this._element as any).summernote === 'function') {
            (this._element as any).summernote('pasteHTML', value);
        }
    }

    /**
     * Set the focus
     */
    public focus(): void {
        if (typeof (this._element as any).summernote === 'function') {
            (this._element as any).summernote('focus');
        }
    }

    /**
     * Open to fullscreen
     */
    public fullscreen(): void {
        if (typeof (this._element as any).summernote === 'function') {
            (this._element as any).summernote('fullscreen.toggle');
        }
    }

    /**
     * Is fullscreen
     * @return {boolean}
     */
    public isFullscreen(): boolean {
        if (typeof (this._element as any).summernote === 'function') {
            return (this._element as any).summernote('fullscreen.isFullscreen');
        } else {
            console.log('Summernote: Summernote plugin not found!');
        }

        return false;
    }

    /**
     * Is empty
     * @return {boolean}
     */
    public isEmpty(): boolean {
        if (typeof (this._element as any).summernote === 'function') {
            return (this._element as any).summernote('isEmpty');
        } else {
            console.log('Summernote: Summernote plugin not found!');
        }

        return false;
    }

    /**
     * reset
     */
    public reset(): void {
        if (typeof (this._element as any).summernote === 'function') {
            (this._element as any).summernote('reset');
        }
    }

    /**
     * setEnable
     * @param {boolean} enable
     */
    public setEnable(enable: boolean): void {
        if (typeof (this._element as any).summernote === 'function') {
            this._isEnable = enable;

            if (this._isEnable) {
                (this._element as any).summernote('enable');
                return;
            }

            (this._element as any).summernote('disable');
        }
    }

    /**
     * isEnable
     */
    public isEnable(): boolean {
        return this._isEnable;
    }

    /**
     * Set read only
     * @param {boolean} readonly
     */
    public setReadOnly(readonly: boolean) {
        this.setEnable(!readonly);
    }

    /**
     * Is read only
     * @return {boolean}
     */
    public isReadOnly(): boolean {
        return !this.isEnable();
    }
}