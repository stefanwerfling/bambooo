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
export declare class Card extends Component<HTMLDivElement> {
    /**
     * header element
     * @private
     */
    protected _header: JQuery<HTMLDivElement>;
    /**
     * title element
     * @private
     */
    protected _title: JQuery<HTMLHeadingElement>;
    /**
     * tools element
     * @private
     */
    protected _tools: JQuery<HTMLDivElement>;
    /**
     * body element
     * @private
     */
    protected _body: JQuery<HTMLDivElement>;
    /**
     * footer element
     * @private
     */
    protected _footer: JQuery<HTMLDivElement> | null;
    /**
     * overload element
     * @private
     */
    protected _overload: JQuery<HTMLDivElement>;
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
     * @return {JQuery<HTMLDivElement>}
     */
    getMainElement(): JQuery<HTMLDivElement>;
    /**
     * setTitle
     * @param {string|LangText} title
     */
    setTitle(title: string | LangText): void;
    /**
     * getHeaderElement
     * @return {JQuery<HTMLDivElement>}
     */
    getHeaderElement(): JQuery<HTMLDivElement>;
    /**
     * getTitleElement
     * @return {JQuery<HTMLHeadingElement>}
     */
    getTitleElement(): JQuery<HTMLHeadingElement>;
    /**
     * getToolsElement
     * @return {JQuery<HTMLDivElement>}
     */
    getToolsElement(): JQuery<HTMLDivElement>;
    /**
     * getElement
     * @return {JQuery<HTMLDivElement>}
     */
    getElement(): JQuery<HTMLDivElement>;
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
     * @return {JQuery<HTMLDivElement>}
     */
    getBodyElement(): JQuery<HTMLDivElement>;
    /**
     * emptyBody
     */
    emptyBody(): void;
    /**
     * Return the footer element
     * @returns {JQuery<HTMLDivElement>}
     */
    getFooterElement(): JQuery<HTMLDivElement>;
}
