import { Content } from './Content';
import { ContentHeader } from './ContentHeader';
/**
 * ContentWrapper
 */
export declare class ContentWrapper {
    private _element;
    private _contentHeader;
    private _content;
    constructor(element?: any);
    getElement(): any;
    getContentHeader(): ContentHeader;
    getContent(): Content;
}
