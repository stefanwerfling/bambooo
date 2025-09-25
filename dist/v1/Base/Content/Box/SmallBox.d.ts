import { Component } from '../../Component.js';
export declare enum SmallBoxBg {
    info = "bg-info",
    success = "bg-success",
    warrning = "bg-warning",
    danger = "bg-danger"
}
/**
 * Smallbox
 */
export declare class SmallBox extends Component {
    /**
     * Small box background
     * @protected
     */
    protected _bg: SmallBoxBg | null;
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
    constructor(elementObject: Component, bg?: SmallBoxBg);
    /**
     * Set box background
     * @param {SmallBoxBg} bg
     */
    setBoxBg(bg: SmallBoxBg): void;
    /**
     * Get box background
     * @return {SmallBoxBg}
     */
    getBoxBg(): SmallBoxBg;
    /**
     * Set H3 Text
     * @param {string} text
     */
    setH3Text(text: string): void;
    /**
     * Set H3 Sup
     * @param {string} text
     */
    setH3Sup(text: string): void;
    /**
     * Set Text
     * @param {string} text
     */
    setText(text: string): void;
    /**
     * Set foot text link
     * @param {string} text
     */
    setFootTextLink(text: string): void;
    /**
     * Set Icon
     * @param {string} iconClass
     */
    setIcon(iconClass: string): void;
}
