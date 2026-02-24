import { IReadOnly } from '../../../../Core/Interface/IReadOnly.js';
import { ComponentType } from '../../Component.js';
import { Textarea } from './Textarea';
/**
 * Summernote
 */
export declare class Summernote extends Textarea implements IReadOnly {
    /**
     * Is Enable
     * @protected
     */
    protected _isEnable: boolean;
    /**
     * Constructor for Summernote element.
     * @param {ComponentType} element - A element to append the Textarea element.
     * @param {[string]} placeholder - Optional, placeholder for textarea.
     * @param {number} rows - Textarea rows.
     */
    constructor(element: ComponentType, placeholder?: string, rows?: number);
    /**
     * Create
     * @param {boolean} focus
     * @protected
     */
    protected create(focus: boolean): void;
    destroy(): void;
    /**
     * Get value
     * @returns {string}
     */
    getValue(): string;
    /**
     * Set value
     * @param {string} value
     */
    setValue(value: string): void;
    /**
     * Set the focus
     */
    focus(): void;
    /**
     * Open to fullscreen
     */
    fullscreen(): void;
    /**
     * Is fullscreen
     * @return {boolean}
     */
    isFullscreen(): boolean;
    /**
     * Is empty
     * @return {boolean}
     */
    isEmpty(): boolean;
    /**
     * reset
     */
    reset(): void;
    /**
     * setEnable
     * @param {boolean} enable
     */
    setEnable(enable: boolean): void;
    /**
     * isEnable
     */
    isEnable(): boolean;
    /**
     * Set read only
     * @param {boolean} readonly
     */
    setReadOnly(readonly: boolean): void;
    /**
     * Is read only
     * @return {boolean}
     */
    isReadOnly(): boolean;
}
