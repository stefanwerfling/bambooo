import { Content } from '../Content';
import { ContentWrapper } from '../ContentWrapper';
import { Element } from '../Element';
import { Wrapper } from '../Wrapper';
/**
 * ContentRowClass
 */
export declare enum ContentRowClass {
    none = "",
    mb2 = "mb-2"
}
/**
 * ContentRow
 */
export declare class ContentRow extends Element {
    /**
     * constructor
     * @param content
     */
    constructor(content: Content | Wrapper | ContentWrapper, rowclass?: ContentRowClass);
}
