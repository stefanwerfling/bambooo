import {Element} from './../../Element.js';
import {LangText} from './../../../Lang/LangText.js';

/**
 * Progressbar Style
 */
export enum ProgressbarStyle {
    none = '',
    sm = 'progress-sm',
    xs = 'progress-xs',
    xxs = 'progress-xxs'
}

/**
 * Progressbar Color
 */
export enum ProgressbarColor {
    green = 'bg-green',
    blue = 'bg-blue',
    red = 'bg-red',
    yellow = 'bg-yellow',
}

/**
 * Progressbar
 */
export class Progressbar extends Element {

    /**
     * Progressbar div
     * @protected
     */
    protected _progressbarDiv: any;

    /**
     * Label percent
     * @protected
     */
    protected _labelPercent: any|null = null;

    /**
     * Label
     * @protected
     */
    protected _label: any|null = null;

    /**
     * Constructor
     * @param {JQuery<HTMLElement>|any} element
     * @param {ProgressbarStyle} style
     * @param {ProgressbarColor} color
     * @param {string|null|LangText} label
     */
    public constructor(
        element: JQuery<HTMLElement>|any,
        style: ProgressbarStyle = ProgressbarStyle.sm,
        color: ProgressbarColor = ProgressbarColor.green,
        label: string|null|LangText = new LangText('Complete')
    ) {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery('<span></span>').appendTo(telement);

        const progress = jQuery(`<div class="progress ${style}" />`).appendTo(this._element);
        this._progressbarDiv = jQuery(`<div class="progress-bar ${color}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> </div>`).appendTo(progress);
        this._progressbarDiv.css({
            width: '0%'
        });

        if (label !== null) {
            this._createLabel(label);
        }
    }

    /**
     * create label
     * @param {string|LangText} label
     * @protected
     */
    protected _createLabel(label: string|LangText): void {
        this._labelPercent = jQuery('<small>').appendTo(this._element);
        this._labelPercent.append('0%');

        this._label = jQuery('<small>').appendTo(this._element);

        const tlabel = this._getAnyElement(label);
        this._label.append(tlabel);
    }

    /**
     * Set percent
     * @param {number} percent
     */
    public setPercent(percent: number): void {
        this._progressbarDiv.attr('aria-valuenow', `${percent}`);
        this._progressbarDiv.css({
            width: `${percent}%`
        });

        if (this._labelPercent !== null) {
            this._labelPercent.empty().append(`${percent}%`);
        }
    }

}