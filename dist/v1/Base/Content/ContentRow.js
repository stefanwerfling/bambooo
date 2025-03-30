"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRow = exports.ContentRowClass = void 0;
const ContentWrapper_1 = require("../ContentWrapper");
const Element_1 = require("../Element");
const Wrapper_1 = require("../Wrapper");
/**
 * ContentRowClass
 */
var ContentRowClass;
(function (ContentRowClass) {
    ContentRowClass["none"] = "";
    ContentRowClass["mb2"] = "mb-2";
})(ContentRowClass || (exports.ContentRowClass = ContentRowClass = {}));
/**
 * ContentRow
 */
class ContentRow extends Element_1.Element {
    /**
     * constructor
     * @param content
     */
    constructor(content, rowclass) {
        super();
        let tcontent = null;
        if (content instanceof Wrapper_1.Wrapper) {
            tcontent = content.getContentWrapper().getContent();
        }
        else if (content instanceof ContentWrapper_1.ContentWrapper) {
            tcontent = content.getContent();
        }
        else {
            tcontent = content;
        }
        if (typeof tcontent.getContentFluidElement === 'function') {
            this._element = jQuery('<div class="row" />').appendTo(tcontent.getContentFluidElement());
        }
        else if (tcontent !== null) {
            this._element = jQuery('<div class="row" />').appendTo(tcontent);
        }
        if (rowclass) {
            this._element.addClass(`${rowclass}`);
        }
    }
}
exports.ContentRow = ContentRow;
