"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Tooltip
 * read more https://getbootstrap.com/docs/4.1/components/tooltips/
 */
class Tooltip extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} tooltipText
     */
    constructor(element, tooltipText) {
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
    setTooltipText(tooltipText) {
        this._element.attr('title', tooltipText);
    }
    /**
     * init
     */
    static init() {
        // @ts-ignore
        jQuery('[data-toggle="tooltip"]').tooltip();
    }
}
exports.Tooltip = Tooltip;
