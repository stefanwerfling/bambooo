"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionListEntry = exports.DescriptionListEntryType = void 0;
const Element_js_1 = require("../../Element.js");
const LangText_js_1 = require("../../Lang/LangText.js");
var DescriptionListEntryType;
(function (DescriptionListEntryType) {
    DescriptionListEntryType[DescriptionListEntryType["none"] = 0] = "none";
    DescriptionListEntryType[DescriptionListEntryType["col_4_8"] = 1] = "col_4_8";
    DescriptionListEntryType[DescriptionListEntryType["col_3_9"] = 2] = "col_3_9";
})(DescriptionListEntryType || (exports.DescriptionListEntryType = DescriptionListEntryType = {}));
/**
 * DescriptionListEntry
 */
class DescriptionListEntry extends Element_js_1.Element {
    /**
     * Label Element
     * @protected
     */
    _label;
    constructor(element, type = DescriptionListEntryType.none) {
        super();
        const telement = this._getAnyElement(element);
        this._label = jQuery('<dt />').appendTo(telement);
        this._element = jQuery('<dd> /').appendTo(telement);
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
     * @return {any}
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
