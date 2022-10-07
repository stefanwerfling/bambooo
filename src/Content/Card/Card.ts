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
 * Card
 */
export class Card extends Element {

    /**
     * header element
     * @private
     */
    private _header: any;

    /**
     * title element
     * @private
     */
    private _title: any;

    /**
     * tools element
     * @private
     */
    private _tools: any;

    /**
     * body element
     * @private
     */
    private _body: any;

    /**
     * overload element
     * @private
     */
    private _overload: any;

    /**
     * constructor
     * @param elementObject
     * @param bodyType
     * @param cardType
     */
    public constructor(
        elementObject: Element,
        bodyType: CardBodyType = CardBodyType.table,
        cardType: CardType = CardType.none,
        cardLine: CardLine = CardLine.none
    ) {
        super();

        const telement = this._getAnyElement(elementObject);

        this._element = jQuery(`<div class="card ${cardType} ${cardLine}" />`).appendTo(telement);
        this._header = jQuery('<div class="card-header"/>').appendTo(this._element);
        this._title = jQuery('<h3 class="card-title"/>').appendTo(this._header);
        this._tools = jQuery('<div class="card-tools"/>').appendTo(this._header);
        this._body = jQuery(`<div class="card-body ${bodyType}" />`).appendTo(this._element);
        this._overload = jQuery('<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>').appendTo(this._element);
        this.hideLoading();
    }

    /**
     * getMainElement
     */
    public getMainElement(): any {
        return this._element;
    }

    /**
     * setTitle
     * @param title
     */
    public setTitle(title: string|LangText): void {
        LangText.addLangText(this._title, title);
    }

    /**
     * getTitleElement
     */
    public getTitleElement(): any {
        return this._title;
    }

    /**
     * getToolsElement
     */
    public getToolsElement(): any {
        return this._tools;
    }

    /**
     * getElement
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
     * emptyBody
     */
    public emptyBody(): void {
        this._body.empty();
    }
}