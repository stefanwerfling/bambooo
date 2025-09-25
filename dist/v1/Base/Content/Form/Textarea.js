"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Textarea form element.
 */
class Textarea extends Component_js_1.Component {
    /**
     * Constructor for Textarea element.
     * @param {ComponentType} element - A element to append the Textarea element.
     * @param {[string]} placeholder - Optional, placeholder for textarea.
     * @param {number} rows - Textarea rows.
     */
    constructor(element, placeholder, rows = 3) {
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
    setPlaceholder(placeholder) {
        this._element.attr('placeholder', placeholder);
    }
    /**
     * Set the value to Textarea.
     * @param {string} value
     */
    setValue(value) {
        this._element.val(value);
    }
    /**
     * Return the value from Textarea.
     * @returns {string}
     */
    getValue() {
        return this._element.val();
    }
}
exports.Textarea = Textarea;
