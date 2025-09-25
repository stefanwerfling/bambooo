"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summernote = void 0;
const Textarea_1 = require("./Textarea");
/**
 * Summernote
 */
class Summernote extends Textarea_1.Textarea {
    /**
     * Is Enable
     * @protected
     */
    _isEnable = true;
    /**
     * Constructor for Summernote element.
     * @param {ComponentType} element - A element to append the Textarea element.
     * @param {[string]} placeholder - Optional, placeholder for textarea.
     * @param {number} rows - Textarea rows.
     */
    constructor(element, placeholder, rows = 3) {
        super(element, placeholder, rows);
        this.create(false);
    }
    create(focus) {
        if (typeof this._element.summernote === 'function') {
            this._element.summernote({
                focus: focus
            });
        }
        else {
            console.log('Summernote: Summernote plugin not found!');
        }
    }
    destroy() {
        if (typeof this._element.summernote === 'function') {
            this._element.summernote('destroy');
        }
    }
    /**
     * Get value
     * @returns {string}
     */
    getValue() {
        if (typeof this._element.summernote === 'function') {
            return this._element.summernote('code');
        }
        else {
            console.log('Summernote: Summernote plugin not found!');
        }
        return '';
    }
    /**
     * Set value
     * @param {string} value
     */
    setValue(value) {
        if (typeof this._element.summernote === 'function') {
            this._element.summernote('pasteHTML', value);
        }
    }
    focus() {
        if (typeof this._element.summernote === 'function') {
            this._element.summernote('focus');
        }
    }
    fullscreen() {
        if (typeof this._element.summernote === 'function') {
            this._element.summernote('fullscreen.toggle');
        }
    }
    isFullscreen() {
        if (typeof this._element.summernote === 'function') {
            return this._element.summernote('fullscreen.isFullscreen');
        }
        else {
            console.log('Summernote: Summernote plugin not found!');
        }
        return false;
    }
    isEmpty() {
        if (typeof this._element.summernote === 'function') {
            return this._element.summernote('isEmpty');
        }
        else {
            console.log('Summernote: Summernote plugin not found!');
        }
        return false;
    }
    reset() {
        if (typeof this._element.summernote === 'function') {
            this._element.summernote('reset');
        }
    }
    /**
     * setEnable
     * @param {boolean} enable
     */
    setEnable(enable) {
        if (typeof this._element.summernote === 'function') {
            this._isEnable = enable;
            if (this._isEnable) {
                this._element.summernote('enable');
                return;
            }
            this._element.summernote('disable');
        }
    }
    /**
     * isEnable
     */
    isEnable() {
        return this._isEnable;
    }
}
exports.Summernote = Summernote;
