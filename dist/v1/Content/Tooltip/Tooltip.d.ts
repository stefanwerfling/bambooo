import { Element } from '../../Element';
/**
 * Tooltip
 * read more https://getbootstrap.com/docs/4.1/components/tooltips/
 */
export declare class Tooltip extends Element {
    /**
     * constructor
     * @param element
     * @param tooltipText
     */
    constructor(element: any, tooltipText?: string);
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
