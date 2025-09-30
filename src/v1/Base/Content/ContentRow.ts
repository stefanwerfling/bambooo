import {Content} from '../Content';
import {ContentWrapper} from '../ContentWrapper';
import {Component, ComponentType} from '../Component.js';
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
export class ContentRow extends Component<HTMLElement|HTMLDivElement> {

    /**
     * Constructor
     * @param {Content|Wrapper|ContentWrapper|ComponentType} content
     * @param {ContentRowClass} rowclass
     */
    public constructor(content: Content|Wrapper|ContentWrapper|ComponentType, rowclass?: ContentRowClass) {
        super();

        let tcontent: Content|ComponentType|null;

        if (content instanceof Wrapper) {
            tcontent = content.getContentWrapper().getContent();
        } else if (content instanceof ContentWrapper) {
            tcontent = content.getContent();
        } else {
            tcontent = content;
        }

        if (typeof (this._element as any).getContentFluidElement === 'function') {
            this._element = jQuery<HTMLDivElement>('<div class="row" />').appendTo((tcontent as Content).getContentFluidElement());
        } else {
            this._element = jQuery<HTMLDivElement>('<div class="row" />').appendTo(Component.getAnyElement(tcontent));
        }

        if (rowclass) {
            this._element.addClass(`${rowclass}`);
        }
    }

}