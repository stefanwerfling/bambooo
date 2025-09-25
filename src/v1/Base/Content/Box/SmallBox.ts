import {Component} from '../../Component.js';

export enum SmallBoxBg {
    info = 'bg-info',
    success = 'bg-success',
    warrning = 'bg-warning',
    danger = 'bg-danger'
}

/**
 * Smallbox
 */
export class SmallBox extends Component {

    /**
     * Small box background
     * @protected
     */
    protected _bg: SmallBoxBg | null = null;

    /**
     * Inner element
     * @protected
     */
    protected _innerElement: JQuery;

    /**
     * Icon element
     * @protected
     */
    protected _iconElement: JQuery;

    /**
     * Footer element
     * @protected
     */
    protected _footerElement: JQuery;

    /**
     * h3 Element
     * @protected
     */
    protected _h3Element: JQuery;

    /**
     * p Element
     * @protected
     */
    protected _pElement: JQuery;

    public constructor(elementObject: Component, bg?: SmallBoxBg) {
        super(jQuery('<div class="small-box" />').appendTo(elementObject.getElement()));

        if (bg) {
            this.setBoxBg(bg);
        } else {
            this.setBoxBg(SmallBoxBg.info);
        }

        this._innerElement = jQuery('<div class="inner" />').appendTo(this._element);
        this._h3Element = jQuery('<h3 />').appendTo(this._innerElement);
        this._pElement = jQuery('<p />').appendTo(this._innerElement);
        this._iconElement = jQuery('<div class="icon" />').appendTo(this._element);
        this._footerElement = jQuery('<a href="#" class="small-box-footer"/>').appendTo(this._element);
    }

    /**
     * Set box background
     * @param {SmallBoxBg} bg
     */
    public setBoxBg(bg: SmallBoxBg): void {
        this._bg = bg;
        this._element.removeClass().addClass(`small-box ${bg}`);
    }

    /**
     * Get box background
     * @return {SmallBoxBg}
     */
    public getBoxBg(): SmallBoxBg {
        return this._bg!;
    }

    /**
     * Set H3 Text
     * @param {string} text
     */
    public setH3Text(text: string): void {
        this._h3Element.empty().append(text);
    }

    /**
     * Set H3 Sup
     * @param {string} text
     */
    public setH3Sup(text: string): void {
        jQuery(`<sup style="font-size: 20px">${text}</sup>`).appendTo(this._h3Element);
    }

    /**
     * Set Text
     * @param {string} text
     */
    public setText(text: string): void {
        this._pElement.empty().append(text);
    }

    /**
     * Set foot text link
     * @param {string} text
     */
    public setFootTextLink(text: string): void {
        this._footerElement.empty().append(`${text} <i class="fas fa-arrow-circle-right"></i>`);
    }

    /**
     * Set Icon
     * @param {string} iconClass
     */
    public setIcon(iconClass: string): void {
        this._iconElement.empty().append(jQuery(`<i class="ion ${iconClass}" />`));
    }

}