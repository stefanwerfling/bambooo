import {Element} from '../../Element';

/**
 * TooltipInfo
 */
export class TooltipInfo extends Element {

    /**
     * constructor
     * @param element
     * @param tooltipText
     */
    public constructor(element: any, tooltipText?: string) {
        super();

        const telement = this._getAnyElement(element);
        telement.append('&nbsp;');

        this._element = jQuery(`<i class="fa fa-info-circle text-blue" data-toggle="tooltip" data-html="true"></i>`).appendTo(telement);

        if (tooltipText) {
            this.setTooltipText(tooltipText)
        }
    }

    /**
     * setTooltipText
     * @param tooltipText
     */
    public setTooltipText(tooltipText: string): void {
        this._element.attr('title', tooltipText);
    }
}