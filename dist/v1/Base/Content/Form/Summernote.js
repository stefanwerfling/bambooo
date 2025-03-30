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
     * @param {Element|HTMLElement} element - A element to append the Textarea element.
     * @param {[string]} placeholder - Optional, placeholder for textarea.
     * @param {number} rows - Textarea rows.
     */
    constructor(element, placeholder, rows = 3) {
        super(element, placeholder, rows);
        this.create(false);
    }
    create(focus) {
        this._element.summernote({
            focus: focus
        });
    }
    destroy() {
        this._element.summernote('destroy');
    }
    /**
     * Get value
     * @returns {string}
     */
    getValue() {
        return this._element.summernote('code');
    }
    /**
     * Set value
     * @param {string} value
     */
    setValue(value) {
        this._element.summernote('pasteHTML', value);
    }
    focus() {
        this._element.summernote('focus');
    }
    fullscreen() {
        return this._element.summernote('fullscreen.toggle');
    }
    isFullscreen() {
        return this._element.summernote('fullscreen.isFullscreen');
    }
    isEmpty() {
        return this._element.summernote('isEmpty');
    }
    reset() {
        return this._element.summernote('reset');
    }
    /**
     * setEnable
     * @param {boolean} enable
     */
    setEnable(enable) {
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
    isEnable() {
        return this._isEnable;
    }
}
exports.Summernote = Summernote;
