import { ComponentType } from '../../Component.js';
import { Textarea } from './Textarea';
/**
 * Summernote
 */
export declare class Summernote extends Textarea {
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
    focus(): void;
    fullscreen(): void;
    isFullscreen(): boolean;
    isEmpty(): boolean;
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
}
