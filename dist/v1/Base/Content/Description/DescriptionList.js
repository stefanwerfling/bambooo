"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescriptionList = exports.DescriptionListType = void 0;
const Component_js_1 = require("../../Component.js");
const DescriptionListEntry_js_1 = require("./DescriptionListEntry.js");
var DescriptionListType;
(function (DescriptionListType) {
    DescriptionListType[DescriptionListType["none"] = 0] = "none";
    DescriptionListType[DescriptionListType["horizontal"] = 1] = "horizontal";
})(DescriptionListType || (exports.DescriptionListType = DescriptionListType = {}));
/**
 * Description List
 */
class DescriptionList extends Component_js_1.Component {
    /**
     * Type
     * @protected
     */
    _type;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {DescriptionListType} type
     */
    constructor(element, type = DescriptionListType.none) {
        super(jQuery('<dl />').appendTo(Component_js_1.Component.getAnyElement(element)));
        this._type = type;
        switch (this._type) {
            case DescriptionListType.horizontal:
                this._element.addClass('row');
                break;
        }
    }
    /**
     * Create an Entry
     * @param {DescriptionListEntryType} type
     * @return {DescriptionListEntry}
     */
    createEntry(type = DescriptionListEntry_js_1.DescriptionListEntryType.none) {
        let aType = DescriptionListEntry_js_1.DescriptionListEntryType.none;
        switch (this._type) {
            case DescriptionListType.horizontal:
                aType = type;
                break;
        }
        return new DescriptionListEntry_js_1.DescriptionListEntry(this, aType);
    }
}
exports.DescriptionList = DescriptionList;
