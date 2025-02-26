import {Element} from '../../Element';
import {LangText} from '../../Lang/LangText';

/**
 * CardBodyType
 */
export enum CardBodyType {
    none = '',
    table = 'table-responsive p-0',
    profile = 'box-profile'
}

/**
 * CardType
 */
export enum CardType {
    none = '',
    primary = 'card-primary',
    success = 'card-success',
    warning = 'card-warning',
    danger = 'card-danger',
    info = 'card-info',
    secondary = 'card-secondary'
}

/**
 * CardLine
 */
export enum CardLine {
    none = '',
    outline = 'card-outline',
}

/**
 * CardShape
 */
export enum CardShape {
    none = '',
    row = 'card-row'
}

/**
 * Card
 */
export class Card extends Element {

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
    protected _footer: any|null = null;

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
    public constructor(
        elementObject: any,
        bodyType: CardBodyType = CardBodyType.table,
        cardType: CardType = CardType.none,
        cardLine: CardLine = CardLine.none,
        cardShape: CardShape = CardShape.none
    ) {
        super();

        const telement = this._getAnyElement(elementObject);

        this._element = jQuery(`<div class="card ${cardShape} ${cardType} ${cardLine}" />`).appendTo(telement);
        this._header = jQuery('<div class="card-header"/>').appendTo(this._element);
        this._title = jQuery('<h3 class="card-title"/>').appendTo(this._header);
        this._tools = jQuery('<div class="card-tools"/>').appendTo(this._header);
        this._body = jQuery(`<div class="card-body ${bodyType}" />`).appendTo(this._element);
        this._overload = jQuery('<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>').appendTo(this._element);
        this.hideLoading();
    }

    /**
     * getMainElement
     * @return {any}
     */
    public getMainElement(): any {
        return this._element;
    }

    /**
     * setTitle
     * @param {string|LangText} title
     */
    public setTitle(title: string|LangText): void {
        LangText.addLangText(this._title, title);
    }

    /**
     * getHeaderElement
     * @return {any}
     */
    public getHeaderElement(): any {
        return this._header;
    }

    /**
     * getTitleElement
     * @return {any}
     */
    public getTitleElement(): any {
        return this._title;
    }

    /**
     * getToolsElement
     * @return {any}
     */
    public getToolsElement(): any {
        return this._tools;
    }

    /**
     * getElement
     * @return {any}
     */
    public getElement(): any {
        return this._body;
    }

    /**
     * showLoading
     */
    public showLoading(): void {
        this._overload.show();
    }

    /**
     * hideLoading
     */
    public hideLoading(): void {
        this._overload.hide();
    }

    /**
     * hideHeader
     */
    public hideHeader(): void {
        this._header.hide();
    }

    /**
     * getBodyElement
     * @return {any}
     */
    public getBodyElement(): any {
        return this._body;
    }

    /**
     * emptyBody
     */
    public emptyBody(): void {
        this._body.empty();
    }

    /**
     * Return the footer element
     * @returns {any}
     */
    public getFooterElement(): any {
        if (this._footer === null) {
            this._footer = jQuery('<div class="card-footer"></div>').appendTo(this._element);
        }

        return this._footer;
    }

}