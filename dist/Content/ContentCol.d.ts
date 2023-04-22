import { Element } from '../Element';
import { ContentRow } from './ContentRow';
/**
 * ContentColSize
 */
export declare enum ContentColSize {
    col12 = "col-12",
    colLg5 = "col-lg-5",
    colLg7 = "col-lg-7",
    colLg3Col6 = "col-lg-3 col-6",
    colMd3 = "col-md-3",
    colMd4 = "col-md-4",
    colMd8 = "col-md-8",
    colMd9 = "col-md-9",
    colSm6 = "col-sm-6",
    colSm12 = "col-sm-12",
    col12ColSm6ColMd3 = "col-12 col-sm-6 col-md-3"
}
/**
 * ContentCol
 */
export declare class ContentCol extends Element {
    /**
     * constructor
     * @param contentRow
     * @param size
     */
    constructor(contentRow: ContentRow, size: ContentColSize);
    /**
     * empty
     */
    empty(): void;
}
