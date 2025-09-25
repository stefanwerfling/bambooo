import {Component, ComponentType} from '../../Component.js';
import {LangText} from '../../../Lang/LangText';

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
export class Card extends Component {

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
    protected _footer: JQuery|null = null;

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
    public constructor(
        elementObject: ComponentType,
        bodyType: CardBodyType = CardBodyType.table,
        cardType: CardType = CardType.none,
        cardLine: CardLine = CardLine.none,
        cardShape: CardShape = CardShape.none
    ) {
        super(jQuery(`<div class="card ${cardShape} ${cardType} ${cardLine}" />`).appendTo(Component.getAnyElement(elementObject)));

        this._header = jQuery('<div class="card-header"/>').appendTo(this._element);
        this._title = jQuery('<h3 class="card-title"/>').appendTo(this._header);
        this._tools = jQuery('<div class="card-tools"/>').appendTo(this._header);
        this._body = jQuery(`<div class="card-body ${bodyType}" />`).appendTo(this._element);
        this._overload = jQuery('<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>').appendTo(this._element);

        this.hideLoading();
    }

    /**
     * getMainElement
     * @return {JQuery}
     */
    public getMainElement(): JQuery {
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
     * @return {JQuery}
     */
    public getHeaderElement(): JQuery {
        return this._header;
    }

    /**
     * getTitleElement
     * @return {JQuery}
     */
    public getTitleElement(): JQuery {
        return this._title;
    }

    /**
     * getToolsElement
     * @return {JQuery}
     */
    public getToolsElement(): JQuery {
        return this._tools;
    }

    /**
     * getElement
     * @return {JQuery}
     */
    public getElement(): JQuery {
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
     * @returns {JQuery}
     */
    public getFooterElement(): JQuery {
        if (this._footer === null) {
            this._footer = jQuery('<div class="card-footer"></div>').appendTo(this._element);
        }

        return this._footer;
    }

}