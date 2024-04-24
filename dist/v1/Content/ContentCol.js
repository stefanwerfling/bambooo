"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentCol = exports.ContentColSize = void 0;
const Element_1 = require("../Element");
/**
 * ContentColSize
 */
var ContentColSize;
(function (ContentColSize) {
    ContentColSize["col12"] = "col-12";
    ContentColSize["colLg1"] = "col-lg-1";
    ContentColSize["colLg2"] = "col-lg-2";
    ContentColSize["colLg3"] = "col-lg-3";
    ContentColSize["colLg4"] = "col-lg-4";
    ContentColSize["colLg5"] = "col-lg-5";
    ContentColSize["colLg6"] = "col-lg-6";
    ContentColSize["colLg7"] = "col-lg-7";
    ContentColSize["colLg8"] = "col-lg-8";
    ContentColSize["colLg9"] = "col-lg-9";
    ContentColSize["colLg10"] = "col-lg-10";
    ContentColSize["colLg3Col6"] = "col-lg-3 col-6";
    ContentColSize["colMd1"] = "col-md-1";
    ContentColSize["colMd2"] = "col-md-2";
    ContentColSize["colMd3"] = "col-md-3";
    ContentColSize["colMd4"] = "col-md-4";
    ContentColSize["colMd5"] = "col-md-5";
    ContentColSize["colMd6"] = "col-md-6";
    ContentColSize["colMd7"] = "col-md-7";
    ContentColSize["colMd8"] = "col-md-8";
    ContentColSize["colMd9"] = "col-md-9";
    ContentColSize["colMd10"] = "col-md-10";
    ContentColSize["colMd11"] = "col-md-11";
    ContentColSize["colSm6"] = "col-sm-6";
    ContentColSize["colSm12"] = "col-sm-12";
    ContentColSize["col12ColSm6ColMd3"] = "col-12 col-sm-6 col-md-3";
})(ContentColSize = exports.ContentColSize || (exports.ContentColSize = {}));
/**
 * ContentCol
 */
class ContentCol extends Element_1.Element {
    /**
     * constructor
     * @param contentRow
     * @param size
     */
    constructor(contentRow, size) {
        super();
        this._element = jQuery('<div />').appendTo(contentRow.getElement());
        this._element.addClass(`${size}`);
    }
    /**
     * empty
     */
    empty() {
        this._element.empty();
    }
}
exports.ContentCol = ContentCol;
