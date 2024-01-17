import { Element } from '../../Element';
/**
 * Textarea form element.
 */
export declare class Textarea extends Element {
    /**
     * Constructor for Textarea element.
     * @param {Element|HTMLElement} element - A element to append the Textarea element.
     * @param {[string]} placeholder - Optional, placeholder for textarea.
     * @param {number} rows - Textarea rows.
     */
    constructor(element: any, placeholder?: string, rows?: number);
    /**
     * Set the placeholder.
     * @param {string} placeholder
     */
    setPlaceholder(placeholder: string): void;
    /**
     * Set the value to Textarea.
     * @param {string} value
     */
    setValue(value: string): void;
    /**
     * Return the value from Textarea.
     * @returns {string}
     */
    getValue(): string;
}
