"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionListEntry = exports.DescriptionListEntryType = void 0;
const Component_js_1 = require("../../Component.js");
const LangText_js_1 = require("../../../Lang/LangText.js");
/**
 * Description list entry type
 */
var DescriptionListEntryType;
(function (DescriptionListEntryType) {
    DescriptionListEntryType[DescriptionListEntryType["none"] = 0] = "none";
    DescriptionListEntryType[DescriptionListEntryType["col_4_8"] = 1] = "col_4_8";
    DescriptionListEntryType[DescriptionListEntryType["col_3_9"] = 2] = "col_3_9";
})(DescriptionListEntryType || (exports.DescriptionListEntryType = DescriptionListEntryType = {}));
/**
 * DescriptionListEntry
 */
class DescriptionListEntry extends Component_js_1.Component {
    /**
     * Label Element
     * @protected
     */
    _label;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {DescriptionListEntryType} type
     */
    constructor(element, type = DescriptionListEntryType.none) {
        const telement = Component_js_1.Component.getAnyElement(element);
        const label = jQuery('<dt />').appendTo(telement);
        super(jQuery('<dd> /').appendTo(telement));
        this._label = label;
        switch (type) {
            case DescriptionListEntryType.col_4_8:
                this._label.addClass('col-sm-4');
                this._element.addClass('col-sm-8');
                break;
            case DescriptionListEntryType.col_3_9:
                this._label.addClass('col-sm-3');
                this._element.addClass('col-sm-9');
                break;
        }
    }
    /**
     * Return the label element
     * @return {JQuery<HTMLElement>}
     */
    getLabelElement() {
        return this._label;
    }
    /**
     * Set the label
     * @param {string|LangText} str
     */
    setLabel(str) {
        LangText_js_1.LangText.addLangText(this._label.empty(), str);
    }
}
exports.DescriptionListEntry = DescriptionListEntry;
