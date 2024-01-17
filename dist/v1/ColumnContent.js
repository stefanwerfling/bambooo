"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnContent = void 0;
const Element_1 = require("./Element");
/**
 * ColumnContent
 */
class ColumnContent extends Element_1.Element {
    /**
     * constructor
     * @param toElement
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
     * @param element
     */
    add(element) {
        if (!Element_1.Element.isEmpty(this._element)) {
            this._element.append('<br>');
        }
        const telement = Element_1.Element.getAnyElement(element);
        this._element.append(telement);
    }
}
exports.ColumnContent = ColumnContent;
