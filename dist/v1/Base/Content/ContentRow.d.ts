import { Content } from '../Content';
import { ContentWrapper } from '../ContentWrapper';
import { Component, ComponentType } from '../Component.js';
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
export declare class ContentRow extends Component {
    /**
     * Constructor
     * @param {Content|Wrapper|ContentWrapper|ComponentType} content
     * @param {ContentRowClass} rowclass
     */
    constructor(content: Content | Wrapper | ContentWrapper | ComponentType, rowclass?: ContentRowClass);
}
