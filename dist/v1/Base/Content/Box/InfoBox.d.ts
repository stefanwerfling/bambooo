import { Component, ComponentType } from '../../Component.js';
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
export declare class InfoBox extends Component<HTMLDivElement> {
    /**
     * infobox content element
     * @protected
     */
    protected _contentElement: JQuery<HTMLDivElement> | null;
    /**
     * infobox text element
     * @protected
     */
    protected _textElement: JQuery<HTMLSpanElement> | null;
    /**
     * infobox number element
     * @protected
     */
    protected _numberElement: JQuery<HTMLSpanElement> | null;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {InfoBoxBg} bg
     * @param {InfoBoxMb} mb
     */
    constructor(element: ComponentType, bg?: InfoBoxBg, mb?: InfoBoxMb);
    /**
     * setIcon
     * @param symbole
     * @param bg
     */
    setIcon(symbole: IconFa, bg: InfoBoxBg): void;
    /**
     * Return the content element
     * @return {JQuery<HTMLDivElement>}
     */
    getContentElement(): JQuery<HTMLDivElement>;
    /**
     * Return the text element
     * @return {JQuery<HTMLSpanElement>}
     */
    getTextElement(): JQuery<HTMLSpanElement>;
    /**
     * Get number element
     * @return {JQuery<HTMLSpanElement>}
     */
    getNumberElement(): JQuery<HTMLSpanElement>;
}
