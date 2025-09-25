import 'jquery';
import { Component, ComponentType } from '../../Component.js';
export interface SearchWidgetSelect2AjaxParams {
    data: any;
    url: string;
    method?: string;
    headers?: {
        [key: string]: string;
    };
}
export type SearchWidgetSelect2AjaxTransport = (params: SearchWidgetSelect2AjaxParams, success: (data: any) => void, failure: (jqXHR: JQuery.jqXHR | undefined, textStatus: string, errorThrown: string) => void) => Promise<void | JQuery.jqXHR>;
export type SearchWidgetSelect2AjaxTransportExt<T> = (params: SearchWidgetSelect2AjaxParams, success: (data: any) => void, failure: (jqXHR: JQuery.jqXHR | undefined, textStatus: string, errorThrown: string) => void, options?: T) => Promise<void | JQuery.jqXHR>;
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
export type SearchWidgetOnTemplateResult = (entryData: SearchWidgetData) => string | JQuery | null;
/**
 * Transform data for selection
 */
export type SearchWidgetOnTemplateSelection = (entryData: SearchWidgetData) => string | JQuery;
/**
 * On event
 */
export type SearchWidgetOnEvent = (event: {
    params: any;
} & JQuery.Event) => void;
/**
 * Search widget select options
 */
type SearchWidgetSelectOptions = {
    theme: string;
    placeholder: string;
    data: null | SearchWidgetData[];
    ajax: null | {
        url: string;
        dataType: string;
    } | {
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
export declare class SearchWidget extends Component {
    /**
     * Select2 object
     * @protected
     */
    protected _select: any;
    /**
     * Select options
     * @protected
     */
    protected _selectOptions: SearchWidgetSelectOptions;
    /**
     * Contructor
     * @param {ComponentType} element
     */
    constructor(element: ComponentType);
    /**
     * Update the select
     * @protected
     */
    protected _updateSelect(): void;
    /**
     * setPlaceholder
     * @param {string} placeholder
     */
    setPlaceholder(placeholder: string): void;
    /**
     * Set data list for select
     * @param {SearchWidgetData[]} data
     */
    setData(data: SearchWidgetData[]): void;
    /**
     * Set the request url
     * @param {string} url
     */
    setRequestUrl(url: string): void;
    /**
     * Set request transport
     * @param {SearchWidgetSelect2AjaxTransportExt} cTransport
     * @param {[T]} options
     * @template T
     */
    setRequestTransport<T>(cTransport: SearchWidgetSelect2AjaxTransportExt<T>, options?: T): void;
    /**
     * Set allow to clear
     * @param {boolean} allow
     */
    setAllowClear(allow: boolean): void;
    /**
     * Set the maximum selection length
     * @param {number} len
     */
    setMaximumSelectionLength(len: number): void;
    /**
     * Set the on template result
     * @param {SearchWidgetOnTemplateResult|null} on
     */
    setOnTemplateResult(on: SearchWidgetOnTemplateResult | null): void;
    /**
     * Set the on template selection
     * @param {SearchWidgetOnTemplateSelection|null} on
     */
    setOnTemplateSelection(on: SearchWidgetOnTemplateSelection | null): void;
    /**
     * setOnSelect
     * @param {SearchWidgetOnEvent} on
     */
    setOnSelect(on: SearchWidgetOnEvent): void;
    setOnUnselect(on: SearchWidgetOnEvent): void;
    setOnSelecting(on: SearchWidgetOnEvent): void;
    addClass(aclass: string): void;
    removeClass(aclass: string): void;
    /**
     * Return the value from selection
     * @returns {SearchWidgetData|null}
     */
    getValue(): SearchWidgetData | null;
    /**
     * Return multiple values from selection
     * @returns {SearchWidgetData[]}
     */
    getValues(): SearchWidgetData[];
    /**
     * Set the value
     * @param {SearchWidgetData|null} value
     */
    setValue(value: SearchWidgetData | null): void;
    /**
     * Set values
     * @param {SearchWidgetData[]|null} values
     */
    setValues(values: SearchWidgetData[] | null): void;
    /**
     * Clear selects
     */
    clear(): void;
}
export {};
