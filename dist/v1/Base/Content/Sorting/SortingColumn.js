"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingColumn = exports.SortOrder = void 0;
/**
 * Sort order enum
 */
var SortOrder;
(function (SortOrder) {
    SortOrder["NONE"] = "";
    SortOrder["ASC"] = "asc";
    SortOrder["DESC"] = "desc";
})(SortOrder || (exports.SortOrder = SortOrder = {}));
/**
 * Sorting colum
 */
class SortingColumn {
    static CLASSES = 'bambooo_sorting bambooo_sorting_desc bambooo_sorting_asc';
    /**
     * change Sorting event click, return new sort key
     * @param {Component<any>} element
     * @param {SortOrder|string} currentOrder
     * @return {SortOrder|string}
     */
    static changeSort(element, currentOrder) {
        switch (currentOrder) {
            case SortOrder.ASC:
                element.setClass('bambooo_sorting bambooo_sorting_desc', SortingColumn.CLASSES);
                return SortOrder.DESC;
            case SortOrder.DESC:
                element.setClass('bambooo_sorting', SortingColumn.CLASSES);
                return SortOrder.NONE;
            default:
                element.setClass('bambooo_sorting bambooo_sorting_asc', SortingColumn.CLASSES);
                return SortOrder.ASC;
        }
    }
    /**
     * init Sorting
     * @param {Component<any>} element
     * @param {SortOrder|string} initOrder
     * @return {SortOrder|string}
     */
    static initSort(element, initOrder = SortOrder.NONE) {
        switch (initOrder) {
            case SortOrder.ASC:
                element.setClass('bambooo_sorting bambooo_sorting_asc', SortingColumn.CLASSES);
                return SortOrder.ASC;
            case SortOrder.DESC:
                element.setClass('bambooo_sorting bambooo_sorting_desc', SortingColumn.CLASSES);
                return SortOrder.DESC;
            default:
                element.setClass('bambooo_sorting', SortingColumn.CLASSES);
                return SortOrder.NONE;
        }
    }
}
exports.SortingColumn = SortingColumn;
