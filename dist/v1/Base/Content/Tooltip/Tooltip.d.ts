import { Component, ComponentType } from '../../Component.js';
/**
 * Tooltip
 * read more https://getbootstrap.com/docs/4.1/components/tooltips/
 */
export declare class Tooltip extends Component<HTMLDivElement> {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} tooltipText
     */
    constructor(element: ComponentType, tooltipText?: string);
    /**
     * setTooltipText
     * @param tooltipText
     */
    setTooltipText(tooltipText: string): void;
    /**
     * init
     */
    static init(): void;
}
