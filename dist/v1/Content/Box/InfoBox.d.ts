import { Element } from '../../Element';
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
export declare class InfoBox extends Element {
    /**
     * infobox content element
     * @protected
     */
    protected _contentElement: any | null;
    /**
     * infobox text element
     * @protected
     */
    protected _textElement: any | null;
    /**
     * infobox number element
     * @protected
     */
    protected _numberElement: any | null;
    /**
     * constructor
     * @param {Element|any} element
     * @param {InfoBoxBg} bg
     * @param {InfoBoxMb} mb
     */
    constructor(element: Element | any, bg?: InfoBoxBg, mb?: InfoBoxMb);
    /**
     * setIcon
     * @param symbole
     * @param bg
     */
    setIcon(symbole: IconFa, bg: InfoBoxBg): void;
    /**
     * getContentElement
     */
    getContentElement(): any;
    /**
     * getTextElement
     */
    getTextElement(): any;
    /**
     * getNumberElement
     */
    getNumberElement(): any;
}
