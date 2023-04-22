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
 * Card
 */
export declare class Card extends Element {
    /**
     * header element
     * @private
     */
    private _header;
    /**
     * title element
     * @private
     */
    private _title;
    /**
     * tools element
     * @private
     */
    private _tools;
    /**
     * body element
     * @private
     */
    private _body;
    /**
     * overload element
     * @private
     */
    private _overload;
    /**
     * constructor
     * @param elementObject
     * @param bodyType
     * @param cardType
     */
    constructor(elementObject: any, bodyType?: CardBodyType, cardType?: CardType, cardLine?: CardLine);
    /**
     * getMainElement
     */
    getMainElement(): any;
    /**
     * setTitle
     * @param title
     */
    setTitle(title: string | LangText): void;
    /**
     * getTitleElement
     */
    getTitleElement(): any;
    /**
     * getToolsElement
     */
    getToolsElement(): any;
    /**
     * getElement
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
     * emptyBody
     */
    emptyBody(): void;
}
