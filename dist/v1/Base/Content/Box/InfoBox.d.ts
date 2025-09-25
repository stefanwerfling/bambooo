import { Component } from '../../Component.js';
import { IconFa } from '../Icon/Icon';
/**
 * InfoBoxBg
 */
export declare enum InfoBoxBg {
    none = "",
    light = "bg-light",
    success = "bg-success",
    warning = "bg-warning",
    info = "bg-info"
}
/**
 * InfoBoxMb
 */
export declare enum InfoBoxMb {
    none = "",
    mb3 = "mb-3"
}
/**
 * InfoBox
 */
export declare class InfoBox extends Component {
    /**
     * infobox content element
     * @protected
     */
    protected _contentElement: JQuery | null;
    /**
     * infobox text element
     * @protected
     */
    protected _textElement: JQuery | null;
    /**
     * infobox number element
     * @protected
     */
    protected _numberElement: JQuery | null;
    /**
     * constructor
     * @param {Component|any} element
     * @param {InfoBoxBg} bg
     * @param {InfoBoxMb} mb
     */
    constructor(element: Component | any, bg?: InfoBoxBg, mb?: InfoBoxMb);
    /**
     * setIcon
     * @param symbole
     * @param bg
     */
    setIcon(symbole: IconFa, bg: InfoBoxBg): void;
    /**
     * Return the content element
     * @return {JQuery}
     */
    getContentElement(): JQuery;
    /**
     * Return the text element
     * @return {JQuery}
     */
    getTextElement(): JQuery;
    /**
     * Get number element
     * @return {JQuery}
     */
    getNumberElement(): JQuery;
}
