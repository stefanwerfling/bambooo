import { Component, ComponentType } from '../../Component.js';
import { LangText } from '../../../Lang/LangText';
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
export declare class Card extends Component {
    /**
     * header element
     * @private
     */
    protected _header: JQuery;
    /**
     * title element
     * @private
     */
    protected _title: JQuery;
    /**
     * tools element
     * @private
     */
    protected _tools: JQuery;
    /**
     * body element
     * @private
     */
    protected _body: JQuery;
    /**
     * footer element
     * @private
     */
    protected _footer: JQuery | null;
    /**
     * overload element
     * @private
     */
    protected _overload: JQuery;
    /**
     * Constructor
     * @param {ComponentType} elementObject
     * @param {CardBodyType} bodyType
     * @param {CardType} cardType
     * @param {CardLine} cardLine
     * @param {CardShape} cardShape
     */
    constructor(elementObject: ComponentType, bodyType?: CardBodyType, cardType?: CardType, cardLine?: CardLine, cardShape?: CardShape);
    /**
     * getMainElement
     * @return {JQuery}
     */
    getMainElement(): JQuery;
    /**
     * setTitle
     * @param {string|LangText} title
     */
    setTitle(title: string | LangText): void;
    /**
     * getHeaderElement
     * @return {JQuery}
     */
    getHeaderElement(): JQuery;
    /**
     * getTitleElement
     * @return {JQuery}
     */
    getTitleElement(): JQuery;
    /**
     * getToolsElement
     * @return {JQuery}
     */
    getToolsElement(): JQuery;
    /**
     * getElement
     * @return {JQuery}
     */
    getElement(): JQuery;
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
     * @returns {JQuery}
     */
    getFooterElement(): JQuery;
}
