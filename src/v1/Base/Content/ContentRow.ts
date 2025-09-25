import {Content} from '../Content';
import {ContentWrapper} from '../ContentWrapper';
import {Component} from '../Component.js';
import {Wrapper} from '../Wrapper';

/**
 * ContentRowClass
 */
export enum ContentRowClass {
    none = '',
    mb2 = 'mb-2'
}

/**
 * ContentRow
 */
export class ContentRow extends Component {

    /**
     * Constructor
     * @param {Content|Wrapper|ContentWrapper} content
     * @param {ContentRowClass} rowclass
     */
    public constructor(content: Content|Wrapper|ContentWrapper, rowclass?: ContentRowClass) {
        super();

        let tcontent: Content|null;

        if (content instanceof Wrapper) {
            tcontent = content.getContentWrapper().getContent();
        } else if (content instanceof ContentWrapper) {
            tcontent = content.getContent();
        } else {
            tcontent = content;
        }

        if (typeof tcontent.getContentFluidElement === 'function') {
            this._element = jQuery('<div class="row" />').appendTo(tcontent.getContentFluidElement());
        } else {
            this._element = jQuery('<div class="row" />').appendTo(tcontent as any);
        }

        if (rowclass) {
            this._element.addClass(`${rowclass}`);
        }
    }

}