import { Component, ComponentType } from '../../Component.js';
import { LangText } from './../../../Lang/LangText.js';
/**
 * Progressbar Style
 */
export declare enum ProgressbarStyle {
    none = "",
    sm = "progress-sm",
    xs = "progress-xs",
    xxs = "progress-xxs"
}
/**
 * Progressbar Color
 */
export declare enum ProgressbarColor {
    green = "bg-green",
    blue = "bg-blue",
    red = "bg-red",
    yellow = "bg-yellow"
}
/**
 * Progressbar
 */
export declare class Progressbar extends Component {
    /**
     * Progressbar div
     * @protected
     */
    protected _progressbarDiv: JQuery;
    /**
     * Label percent
     * @protected
     */
    protected _labelPercent: JQuery | null;
    /**
     * Label
     * @protected
     */
    protected _label: JQuery | null;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {ProgressbarStyle} style
     * @param {ProgressbarColor} color
     * @param {string|null|LangText} label
     */
    constructor(element: ComponentType, style?: ProgressbarStyle, color?: ProgressbarColor, label?: string | null | LangText);
    /**
     * create label
     * @param {string|LangText} label
     * @protected
     */
    protected _createLabel(label: string | LangText): void;
    /**
     * Set percent
     * @param {number} percent
     */
    setPercent(percent: number): void;
}
