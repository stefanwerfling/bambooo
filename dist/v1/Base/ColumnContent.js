"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnContent = void 0;
const Component_js_1 = require("./Component.js");
/**
 * ColumnContent
 */
class ColumnContent extends Component_js_1.Component {
    /**
     * Constructor
     * @param {[ComponentType[]]} elements
     * @param {[JQuery]} toElement
     */
    constructor(elements, toElement) {
        super();
        if (toElement) {
            this._element = toElement;
        }
        else {
            this._element = jQuery('<span />');
        }
        if (elements) {
            for (const telement of elements) {
                this.add(telement);
            }
        }
    }
    /**
     * add
     * @param {ComponentType} element
     */
    add(element) {
        if (!Component_js_1.Component.isEmpty(this._element)) {
            this._element.append('<br>');
        }
        const telement = Component_js_1.Component.getAnyElement(element);
        this._element.append(telement);
    }
}
exports.ColumnContent = ColumnContent;
