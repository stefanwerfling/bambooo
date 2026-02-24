import 'jquery';
import 'select2';
import { IReadOnly } from '../../../../Core/Interface/IReadOnly.js';
import { Component, ComponentType } from '../../Component.js';
/**
 * Search widget select 2 ajax params
 */
export interface SearchWidgetSelect2AjaxParams {
    data: any;
    url: string;
    method?: string;
    headers?: {
        [key: string]: string;
    };
}
/**
 * Search widget select 2 ajax transport
 */
export type SearchWidgetSelect2AjaxTransport = (params: SearchWidgetSelect2AjaxParams, success: (data: any) => void, failure: (jqXHR: JQuery.jqXHR | undefined, textStatus: string, errorThrown: string) => void) => Promise<void | JQuery.jqXHR>;
/**
 * Search widget select 2 ajax transport ext
 */
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
export declare class SearchWidget extends Component<HTMLElement> implements IReadOnly {
    /**
     * Select2 object
     * @protected
     */
    protected _select: JQuery<HTMLSelectElement>;
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
     * Set read only
     * @param {boolean} readonly
     */
    setReadOnly(readonly: boolean): void;
    /**
     * Is read only
     * @return {boolean}
     */
    isReadOnly(): boolean;
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
    /**
     * Set on unselect
     * @param {SearchWidgetOnEvent} on
     */
    setOnUnselect(on: SearchWidgetOnEvent): void;
    /**
     * Set on selecting
     * @param {SearchWidgetOnEvent} on
     */
    setOnSelecting(on: SearchWidgetOnEvent): void;
    /**
     * Add class
     * @param {string} aclass
     */
    addClass(aclass: string): void;
    /**
     * Remove class
     * @param {string} aclass
     */
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
