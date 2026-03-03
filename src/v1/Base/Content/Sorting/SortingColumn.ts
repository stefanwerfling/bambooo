import {Component} from '../../Component.js';

/**
 * Sort order enum
 */
export enum SortOrder {
    NONE = '',
    ASC = 'asc',
    DESC = 'desc'
}

/**
 * Sorting colum
 */
export class SortingColumn {

    public static CLASSES = 'bambooo_sorting bambooo_sorting_desc bambooo_sorting_asc';

    /**
     * change Sorting event click, return new sort key
     * @param {Component<any>} element
     * @param {SortOrder|string} currentOrder
     * @return {SortOrder|string}
     */
    public static changeSort(element: Component<any>, currentOrder: SortOrder|string): SortOrder|string {
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
    public static initSort(element: Component<any>, initOrder: SortOrder|string = SortOrder.NONE): SortOrder|string {
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