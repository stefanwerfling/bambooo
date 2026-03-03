import { Component } from '../../Component.js';
/**
 * Sort order enum
 */
export declare enum SortOrder {
    NONE = "",
    ASC = "asc",
    DESC = "desc"
}
/**
 * Sorting colum
 */
export declare class SortingColumn {
    static CLASSES: string;
    /**
     * change Sorting event click, return new sort key
     * @param {Component<any>} element
     * @param {SortOrder|string} currentOrder
     * @return {SortOrder|string}
     */
    static changeSort(element: Component<any>, currentOrder: SortOrder | string): SortOrder | string;
    /**
     * init Sorting
     * @param {Component<any>} element
     * @param {SortOrder|string} initOrder
     * @return {SortOrder|string}
     */
    static initSort(element: Component<any>, initOrder?: SortOrder | string): SortOrder | string;
}
