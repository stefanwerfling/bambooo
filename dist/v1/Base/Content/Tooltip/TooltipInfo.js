"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipInfo = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * TooltipInfo
 */
class TooltipInfo extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} tooltipText
     */
    constructor(element, tooltipText) {
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
    setTooltipText(tooltipText) {
        this._element.attr('data-original-title', tooltipText);
    }
}
exports.TooltipInfo = TooltipInfo;
