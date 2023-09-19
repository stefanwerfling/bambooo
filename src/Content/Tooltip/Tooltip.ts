import {Element} from '../../Element';

/**
 * Tooltip
 * read more https://getbootstrap.com/docs/4.1/components/tooltips/
 */
export class Tooltip extends Element {

    /**
     * constructor
     * @param element
     * @param tooltipText
     */
    public constructor(element: any, tooltipText?: string) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div class="d-inline-block" tabindex="0" data-toggle="tooltip" title=""/>').appendTo(telement);

        if (tooltipText) {
            this.setTooltipText(tooltipText);
        }
    }

    /**
     * setTooltipText
     * @param tooltipText
     */
    public setTooltipText(tooltipText: string): void {
        this._element.attr('title', tooltipText);
    }

    /**
     * init
     */
    public static init(): void {
        // @ts-ignore
        jQuery('[data-toggle="tooltip"]').tooltip();
    }
}