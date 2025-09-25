import {Component, ComponentType} from '../../Component.js';

/**
 * TooltipInfo
 */
export class TooltipInfo extends Component {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} tooltipText
     */
    public constructor(element: ComponentType, tooltipText?: string) {
        super();

        const telement = this._getAnyElement(element);
        telement.append('&nbsp;');

        this._element = jQuery('<i class="fa fa-info-circle text-blue" data-toggle="tooltip" data-html="true"></i>').appendTo(telement);

        if (tooltipText) {
            this.setTooltipText(tooltipText);
        }
    }

    /**
     * setTooltipText
     * @param {string} tooltipText
     */
    public setTooltipText(tooltipText: string): void {
        this._element.attr('data-original-title', tooltipText);
    }

}