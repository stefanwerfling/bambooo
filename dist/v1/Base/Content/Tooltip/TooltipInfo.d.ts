import { Component, ComponentType } from '../../Component.js';
/**
 * TooltipInfo
 */
export declare class TooltipInfo extends Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} tooltipText
     */
    constructor(element: ComponentType, tooltipText?: string);
    /**
     * setTooltipText
     * @param {string} tooltipText
     */
    setTooltipText(tooltipText: string): void;
}
