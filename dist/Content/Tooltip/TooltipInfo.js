"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipInfo = void 0;
const Element_1 = require("../../Element");
/**
 * TooltipInfo
 */
class TooltipInfo extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param tooltipText
     */
    constructor(element, tooltipText) {
        super();
        const telement = this._getAnyElement(element);
        telement.append('&nbsp;');
        this._element = jQuery(`<i class="fa fa-info-circle text-blue" data-toggle="tooltip" data-html="true"></i>`).appendTo(telement);
        if (tooltipText) {
            this.setTooltipText(tooltipText);
        }
    }
    /**
     * setTooltipText
     * @param tooltipText
     */
    setTooltipText(tooltipText) {
        this._element.attr('title', tooltipText);
    }
}
exports.TooltipInfo = TooltipInfo;
