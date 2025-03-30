"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiple = void 0;
const Element_1 = require("../../Element");
/**
 * Multiple
 */
class Multiple extends Element_1.Element {
    /**
     * Limit
     * @protected
     */
    _limit = 0;
    /**
     * constructor
     * @param element
     * @param id
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
        this._element.select2({
            theme: 'bootstrap4',
            maximumSelectionLength: this._limit
        });
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
     * @param {any[]} values
     */
    setValue(values) {
        this._element.val(values);
        this._element.trigger('change');
    }
    /**
     * getValue
     */
    getValue() {
        return this._element.val();
    }
}
exports.Multiple = Multiple;
