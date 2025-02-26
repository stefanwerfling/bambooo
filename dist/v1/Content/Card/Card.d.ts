import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
/**
 * CardBodyType
 */
export declare enum CardBodyType {
    none = "",
    table = "table-responsive p-0",
    profile = "box-profile"
}
/**
 * CardType
 */
export declare enum CardType {
    none = "",
    primary = "card-primary",
    success = "card-success",
    warning = "card-warning",
    danger = "card-danger",
    info = "card-info",
    secondary = "card-secondary"
}
/**
 * CardLine
 */
export declare enum CardLine {
    none = "",
    outline = "card-outline"
}
/**
 * CardShape
 */
export declare enum CardShape {
    none = "",
    row = "card-row"
}
/**
 * Card
 */
export declare class Card extends Element {
    /**
     * header element
     * @private
     */
    protected _header: any;
    /**
     * title element
     * @private
     */
    protected _title: any;
    /**
     * tools element
     * @private
     */
    protected _tools: any;
    /**
     * body element
     * @private
     */
    protected _body: any;
    /**
     * footer element
     * @private
     */
    protected _footer: any | null;
    /**
     * overload element
     * @private
     */
    protected _overload: any;
    /**
     * constructor
     * @param {any} elementObject
     * @param {CardBodyType} bodyType
     * @param {CardType} cardType
     * @param {CardLine} cardLine
     * @param {CardShape} cardShape
     */
    constructor(elementObject: any, bodyType?: CardBodyType, cardType?: CardType, cardLine?: CardLine, cardShape?: CardShape);
    /**
     * getMainElement
     * @return {any}
     */
    getMainElement(): any;
    /**
     * setTitle
     * @param {string|LangText} title
     */
    setTitle(title: string | LangText): void;
    /**
     * getHeaderElement
     * @return {any}
     */
    getHeaderElement(): any;
    /**
     * getTitleElement
     * @return {any}
     */
    getTitleElement(): any;
    /**
     * getToolsElement
     * @return {any}
     */
    getToolsElement(): any;
    /**
     * getElement
     * @return {any}
     */
    getElement(): any;
    /**
     * showLoading
     */
    showLoading(): void;
    /**
     * hideLoading
     */
    hideLoading(): void;
    /**
     * hideHeader
     */
    hideHeader(): void;
    /**
     * getBodyElement
     * @return {any}
     */
    getBodyElement(): any;
    /**
     * emptyBody
     */
    emptyBody(): void;
    /**
     * Return the footer element
     * @returns {any}
     */
    getFooterElement(): any;
}
