import {Content} from '../Content';
import {ContentWrapper} from '../ContentWrapper';
import {Element} from '../Element';
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
export class ContentRow extends Element {

    /**
     * constructor
     * @param content
     */
    public constructor(content: Content|Wrapper|ContentWrapper, rowclass?: ContentRowClass) {
        super();

        let tcontent = null;

        if (content instanceof Wrapper) {
            tcontent = content.getContentWrapper().getContent();
        } else if (content instanceof ContentWrapper) {
            tcontent = content.getContent();
        } else {
            tcontent = content;
        }

        this._element = jQuery('<div class="row" />').appendTo(tcontent.getContentFluidElement());

        if (rowclass) {
            this._element.addClass(`${rowclass}`);
        }
    }

}