"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchWidget = void 0;
require("jquery");
const Element_js_1 = require("../../Element.js");
/**
 * Search widget
 */
class SearchWidget extends Element_js_1.Element {
    /**
     * Select2 object
     * @protected
     */
    _select;
    /**
     * Select options
     * @protected
     */
    _selectOptions = {
        theme: 'bootstrap4',
        placeholder: '',
        data: null,
        ajax: null,
        allowClear: false,
        maximumSelectionLength: 1,
        templateResult: (entryData) => {
            return entryData.text;
        },
        templateSelection: (entryData) => {
            return entryData.text;
        }
    };
    /**
     * Contructor
     * @param {Element|any} element
     */
    constructor(element) {
        super(element);
        this._select = jQuery('<select class="select2bs4" multiple="multiple" style="width: 100%;">').appendTo(this._element);
        this._updateSelect();
    }
    /**
     * Update the select
     * @protected
     */
    _updateSelect() {
        this._select.select2(this._selectOptions);
    }
    /**
     * setPlaceholder
     * @param {string} placeholder
     */
    setPlaceholder(placeholder) {
        this._selectOptions.placeholder = placeholder;
        this._updateSelect();
    }
    /**
     * Set data list for select
     * @param {SearchWidgetData[]} data
     */
    setData(data) {
        this._selectOptions.data = data;
        this._selectOptions.ajax = null;
        this._updateSelect();
    }
    /**
     * Set the request url
     * @param {string} url
     */
    setRequestUrl(url) {
        this._selectOptions.ajax = {
            url: url,
            dataType: 'json'
        };
        this._selectOptions.data = null;
        this._updateSelect();
    }
    /**
     * Set request transport
     * @param {SearchWidgetSelect2AjaxTransport} cTransport
     */
    setRequestTransport(cTransport) {
        this._selectOptions.ajax = {
            transport: cTransport
        };
        this._selectOptions.data = null;
        this._updateSelect();
    }
    /**
     * Set allow to clear
     * @param {boolean} allow
     */
    setAllowClear(allow) {
        this._selectOptions.allowClear = allow;
        this._updateSelect();
    }
    /**
     * Set the maximum selection length
     * @param {number} len
     */
    setMaximumSelectionLength(len) {
        this._selectOptions.maximumSelectionLength = len;
        this._updateSelect();
    }
    /**
     * Set the on template result
     * @param {SearchWidgetOnTemplateResult|null} on
     */
    setOnTemplateResult(on) {
        if (on === null) {
            this._selectOptions.templateResult = (entryData) => {
                return entryData.text;
            };
        }
        else {
            this._selectOptions.templateResult = on;
        }
        this._updateSelect();
    }
    /**
     * Set the on template selection
     * @param {SearchWidgetOnTemplateSelection|null} on
     */
    setOnTemplateSelection(on) {
        if (on === null) {
            this._selectOptions.templateSelection = (entryData) => {
                return entryData.text;
            };
        }
        else {
            this._selectOptions.templateSelection = on;
        }
        this._updateSelect();
    }
    /**
     * setOnSelect
     * @param {SearchWidgetOnEvent} on
     */
    setOnSelect(on) {
        this._select.unbind('select2:select').on('select2:select', on);
    }
    setOnUnselect(on) {
        this._select.unbind('select2:unselect').on('select2:unselect', on);
    }
    setOnSelecting(on) {
        this._select.unbind('select2:selecting').on('select2:selecting', on);
    }
    addClass(aclass) {
        jQuery(this._select.data('select2').$container).addClass(aclass);
    }
    removeClass(aclass) {
        jQuery(this._select.data('select2').$container).removeClass(aclass);
    }
    /**
     * Return the value from selection
     * @returns {SearchWidgetData|null}
     */
    getValue() {
        const data = this._select.select2('data');
        if (Array.isArray(data) && data.length > 0) {
            const value = data[0];
            return value;
        }
        return null;
    }
    /**
     * Return multiple values from selection
     * @returns {SearchWidgetData[]}
     */
    getValues() {
        const data = this._select.select2('data');
        if (Array.isArray(data) && data.length > 0) {
            return data;
        }
        return [];
    }
    /**
     * Set the value
     * @param {SearchWidgetData|null} value
     */
    setValue(value) {
        if (value === null) {
            this.setValues(null);
        }
        else {
            this.setValues([value]);
        }
    }
    /**
     * Set values
     * @param {SearchWidgetData[]|null} values
     */
    setValues(values) {
        if (values === null) {
            this.clear();
        }
        else {
            for (const value of values) {
                const option = new Option(value?.text, value?.id, true, true);
                this._select.append(option).trigger('change');
            }
            this._select.trigger({
                type: 'select2:select',
                params: {
                    data: values
                }
            });
        }
    }
    /**
     * Clear selects
     */
    clear() {
        this._select.val(null).trigger('change');
    }
}
exports.SearchWidget = SearchWidget;
