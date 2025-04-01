import 'jquery';
import {Element} from '../../Element.js';

export interface SearchWidgetSelect2AjaxParams {
    data: any;
    url: string;
    method?: string;
    headers?: {[key: string]: string;};
}

export type SearchWidgetSelect2AjaxTransport = (
    params: SearchWidgetSelect2AjaxParams,
    success: (data: any) => void,
    failure: (jqXHR: JQuery.jqXHR|undefined, textStatus: string, errorThrown: string) => void
) => Promise<void | JQuery.jqXHR>;

export type SearchWidgetSelect2AjaxTransportExt<T> = (
    params: SearchWidgetSelect2AjaxParams,
    success: (data: any) => void,
    failure: (jqXHR: JQuery.jqXHR|undefined, textStatus: string, errorThrown: string) => void,
    options?: T
) => Promise<void | JQuery.jqXHR>;

/**
 * Search widget data
 */
export type SearchWidgetData = {
    id: string;
    text: string;
};

/**
 * Transform data for selection list, return a jquery object
 */
export type SearchWidgetOnTemplateResult = (entryData: SearchWidgetData) => any|null;

/**
 * Transform data for selection
 */
export type SearchWidgetOnTemplateSelection = (entryData: SearchWidgetData) => any;

/**
 * On event
 */
export type SearchWidgetOnEvent = (event: {params: any;} & JQuery.Event) => void;

/**
 * Search widget select options
 */
type SearchWidgetSelectOptions = {
    theme: string;
    placeholder: string;
    data: null|SearchWidgetData[];
    ajax: null|{
        url: string;
        dataType: string;
    }|{
        transport: SearchWidgetSelect2AjaxTransport;
    };
    allowClear: boolean;
    maximumSelectionLength: number;
    templateResult: SearchWidgetOnTemplateResult;
    templateSelection: SearchWidgetOnTemplateSelection;
};

/**
 * Search widget
 */
export class SearchWidget extends Element {

    /**
     * Select2 object
     * @protected
     */
    protected _select: any;

    /**
     * Select options
     * @protected
     */
    protected _selectOptions: SearchWidgetSelectOptions = {
        theme: 'bootstrap4',
        placeholder: '',
        data: null,
        ajax: null,
        allowClear: false,
        maximumSelectionLength: 1,
        templateResult: (entryData): string => {
            return entryData.text;
        },
        templateSelection: (entryData): string => {
            return entryData.text;
        }
    };

    /**
     * Contructor
     * @param {Element|any} element
     */
    public constructor(element: Element | any) {
        super(element);

        this._select = jQuery('<select class="select2bs4" multiple="multiple" style="width: 100%;">').appendTo(this._element);
        this._updateSelect();
    }

    /**
     * Update the select
     * @protected
     */
    protected _updateSelect(): void {
        this._select.select2(this._selectOptions);
    }

    /**
     * setPlaceholder
     * @param {string} placeholder
     */
    public setPlaceholder(placeholder: string): void {
        this._selectOptions.placeholder = placeholder;
        this._updateSelect();
    }

    /**
     * Set data list for select
     * @param {SearchWidgetData[]} data
     */
    public setData(data: SearchWidgetData[]): void {
        this._selectOptions.data = data;
        this._selectOptions.ajax = null;
        this._updateSelect();
    }

    /**
     * Set the request url
     * @param {string} url
     */
    public setRequestUrl(url: string): void {
        this._selectOptions.ajax = {
            url: url,
            dataType: 'json'
        };
        this._selectOptions.data = null;
        this._updateSelect();
    }

    /**
     * Set request transport
     * @param {SearchWidgetSelect2AjaxTransportExt} cTransport
     * @param {[T]} options
     */
    public setRequestTransport<T>(cTransport: SearchWidgetSelect2AjaxTransportExt<T>, options?: T): void {
        this._selectOptions.ajax = {
            transport: (params, success, failure) => {
                return cTransport(params, success, failure, options);
            }
        };
        this._selectOptions.data = null;
        this._updateSelect();
    }

    /**
     * Set allow to clear
     * @param {boolean} allow
     */
    public setAllowClear(allow: boolean): void {
        this._selectOptions.allowClear = allow;
        this._updateSelect();
    }

    /**
     * Set the maximum selection length
     * @param {number} len
     */
    public setMaximumSelectionLength(len: number): void {
        this._selectOptions.maximumSelectionLength = len;
        this._updateSelect();
    }

    /**
     * Set the on template result
     * @param {SearchWidgetOnTemplateResult|null} on
     */
    public setOnTemplateResult(on: SearchWidgetOnTemplateResult | null): void {
        if (on === null) {
            this._selectOptions.templateResult = (entryData): string => {
                return entryData.text;
            };
        } else {
            this._selectOptions.templateResult = on;
        }

        this._updateSelect();
    }

    /**
     * Set the on template selection
     * @param {SearchWidgetOnTemplateSelection|null} on
     */
    public setOnTemplateSelection(on: SearchWidgetOnTemplateSelection | null): void {
        if (on === null) {
            this._selectOptions.templateSelection = (entryData): string => {
                return entryData.text;
            };
        } else {
            this._selectOptions.templateSelection = on;
        }

        this._updateSelect();
    }

    /**
     * setOnSelect
     * @param {SearchWidgetOnEvent} on
     */
    public setOnSelect(on: SearchWidgetOnEvent): void {
        this._select.unbind('select2:select').on('select2:select', on);
    }

    public setOnUnselect(on: SearchWidgetOnEvent): void {
        this._select.unbind('select2:unselect').on('select2:unselect', on);
    }

    public setOnSelecting(on: SearchWidgetOnEvent): void {
        this._select.unbind('select2:selecting').on('select2:selecting', on);
    }

    public override addClass(aclass: string): void {
        jQuery(this._select.data('select2').$container).addClass(aclass);
    }

    public removeClass(aclass: string): void {
        jQuery(this._select.data('select2').$container).removeClass(aclass);
    }

    /**
     * Return the value from selection
     * @returns {SearchWidgetData|null}
     */
    public getValue(): SearchWidgetData | null {
        const data = this._select.select2('data');

        if (Array.isArray(data) && data.length > 0) {
            const value = data[0];

            return value as SearchWidgetData;
        }

        return null;
    }

    /**
     * Return multiple values from selection
     * @returns {SearchWidgetData[]}
     */
    public getValues(): SearchWidgetData[] {
        const data = this._select.select2('data');

        if (Array.isArray(data) && data.length > 0) {
            return data as SearchWidgetData[];
        }

        return [];
    }

    /**
     * Set the value
     * @param {SearchWidgetData|null} value
     */
    public setValue(value: SearchWidgetData | null): void {
        if (value === null) {
            this.setValues(null);
        } else {
            this.setValues([value]);
        }
    }

    /**
     * Set values
     * @param {SearchWidgetData[]|null} values
     */
    public setValues(values: SearchWidgetData[] | null): void {
        if (values === null) {
            this.clear();
        } else {
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
    public clear(): void {
        this._select.val(null).trigger('change');
    }

}