"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiple = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Multiple
 */
class Multiple extends Component_js_1.Component {
    /**
     * Limit
     * @protected
     */
    _limit = 0;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} id
     */
    constructor(element, id) {
        super();
        const telement = this._getAnyElement(element);
        let aid = '';
        if (id) {
            aid = id;
        }
        this._element = jQuery(`<select class="select2bs4" id="${aid}" multiple="multiple" data-placeholder="Select a State" style="width: 100%;" />`).appendTo(telement);
    }
    /**
     * _reload
     * @protected
     */
    _reload() {
        if (typeof this._element.select2 === 'function') {
            this._element.select2({
                theme: 'bootstrap4',
                maximumSelectionLength: this._limit
            });
        }
        else {
            console.log('Multiple: Select2 plugin not found!');
        }
    }
    /**
     * Set limit
     * @param {number} limit
     */
    setLimit(limit) {
        this._limit = limit;
        this._reload();
    }
    /**
     * Add value
     * @param {SelectOption} option
     */
    addValue(option) {
        jQuery(`<option value="${option.key}">${option.value}</option>`).appendTo(this._element);
        this._reload();
    }
    /**
     * clearValues
     */
    clearValues() {
        this._element.empty();
        this._reload();
    }
    /**
     * setValue
     * @param {string[]} values
     */
    setValue(values) {
        this._element.val(values);
        this._element.trigger('change');
    }
    /**
     * getValue
     * @return {string[]}
     */
    getValue() {
        const val = this._element.val();
        if (Array.isArray(val)) {
            return val;
        }
        if (val == null) {
            return [];
        }
        return [String(val)];
    }
}
exports.Multiple = Multiple;
