import {Component} from '../../Component.js';
import {Icon, IconFa} from '../Icon/Icon';

/**
 * InfoBoxBg
 */
export enum InfoBoxBg {
    none = '',
    light = 'bg-light',
    success = 'bg-success',
    warning = 'bg-warning',
    info = 'bg-info'
}

/**
 * InfoBoxMb
 */
export enum InfoBoxMb {
    none = '',
    mb3 = 'mb-3'
}

/**
 * InfoBox
 */
export class InfoBox extends Component {

    /**
     * infobox content element
     * @protected
     */
    protected _contentElement: JQuery|null = null;

    /**
     * infobox text element
     * @protected
     */
    protected _textElement: JQuery|null = null;

    /**
     * infobox number element
     * @protected
     */
    protected _numberElement: JQuery|null = null;

    /**
     * constructor
     * @param {Component|any} element
     * @param {InfoBoxBg} bg
     * @param {InfoBoxMb} mb
     */
    public constructor(element: Component|any, bg: InfoBoxBg = InfoBoxBg.light, mb: InfoBoxMb = InfoBoxMb.none) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<div class="info-box ${bg} ${mb}"></div>`).appendTo(telement);
    }

    /**
     * setIcon
     * @param symbole
     * @param bg
     */
    public setIcon(symbole: IconFa, bg: InfoBoxBg) {
        const iconBox = jQuery(`<span class="info-box-icon ${bg} elevation-1"></span>`).appendTo(this._element);
        new Icon(iconBox, symbole);
    }

    /**
     * Return the content element
     * @return {JQuery}
     */
    public getContentElement(): JQuery {
        if (this._contentElement === null) {
            this._contentElement = jQuery('<div class="info-box-content"></div>').appendTo(this._element);
        }

        return this._contentElement;
    }

    /**
     * Return the text element
     * @return {JQuery}
     */
    public getTextElement(): JQuery {
        if (this._textElement === null) {
            this._textElement = jQuery('<span class="info-box-text"></span>').appendTo(this.getContentElement());
        }

        return this._textElement;
    }

    /**
     * Get number element
     * @return {JQuery}
     */
    public getNumberElement(): JQuery {
        if (this._numberElement === null) {
            this._numberElement = jQuery('<span class="info-box-number"></span>').appendTo(this.getContentElement());
        }

        return this._numberElement;
    }
}