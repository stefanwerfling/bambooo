import { Component } from '../Component.js';
import { ContentRow } from './ContentRow';
/**
 * ContentColSize
 */
export declare enum ContentColSize {
    col12 = "col-12",
    colLg1 = "col-lg-1",
    colLg2 = "col-lg-2",
    colLg3 = "col-lg-3",
    colLg4 = "col-lg-4",
    colLg5 = "col-lg-5",
    colLg6 = "col-lg-6",
    colLg7 = "col-lg-7",
    colLg8 = "col-lg-8",
    colLg9 = "col-lg-9",
    colLg10 = "col-lg-10",
    colLg3Col6 = "col-lg-3 col-6",
    colMd1 = "col-md-1",
    colMd2 = "col-md-2",
    colMd3 = "col-md-3",
    colMd4 = "col-md-4",
    colMd5 = "col-md-5",
    colMd6 = "col-md-6",
    colMd7 = "col-md-7",
    colMd8 = "col-md-8",
    colMd9 = "col-md-9",
    colMd10 = "col-md-10",
    colMd11 = "col-md-11",
    colSm6 = "col-sm-6",
    colSm12 = "col-sm-12",
    col12ColSm6ColMd3 = "col-12 col-sm-6 col-md-3"
}
/**
 * ContentCol
 */
export declare class ContentCol extends Component {
    /**
     * Constructor
     * @param {ContentRow} contentRow
     * @param {ContentColSize} size
     */
    constructor(contentRow: ContentRow, size: ContentColSize);
    /**
     * empty
     */
    empty(): void;
}
