import {Element} from '../Element';
import {ContentRow} from './ContentRow';

/**
 * ContentColSize
 */
export enum ContentColSize {
    col12 = 'col-12',

    colLg5 = 'col-lg-5',
    colLg7 = 'col-lg-7',

    colLg3Col6 = 'col-lg-3 col-6',

    colMd3 = 'col-md-3',
    colMd9 = 'col-md-9',

    colSm6 = 'col-sm-6',
    colSm12 = 'col-sm-12',

    col12ColSm6ColMd3 = 'col-12 col-sm-6 col-md-3',
}

/**
 * ContentCol
 */
export class ContentCol extends Element {

    /**
     * constructor
     * @param contentRow
     */
    public constructor(contentRow: ContentRow, size: ContentColSize) {
        super();

        this._element = jQuery('<div />').appendTo(contentRow.getElement());
        this._element.addClass(`${size}`);
    }

    /**
     * empty
     */
    public empty(): void {
        this._element.empty();
    }
}