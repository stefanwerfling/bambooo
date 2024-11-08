"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PText = exports.PTextType = void 0;
const Element_1 = require("../../Element");
const Text_1 = require("./Text");
var PTextType;
(function (PTextType) {
    PTextType["success"] = "text-success";
    PTextType["info"] = "text-info";
    PTextType["primary"] = "text-primary";
    PTextType["danger"] = "text-danger";
    PTextType["warning"] = "text-warning";
    PTextType["muted"] = "text-muted";
})(PTextType = exports.PTextType || (exports.PTextType = {}));
/**
 * PText
 */
class PText extends Element_1.Element {
    /**
     * constructor
     * @param {any|Element} element
     * @param {PTextType} type
     * @param {TextAlignment} align
     */
    constructor(element, type = PTextType.muted, align = Text_1.TextAlignment.none) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<p class="${type}" />`).appendTo(telement);
        this._element.addClass(`${align}`);
    }
    /**
     * addValue
     * @param value
     */
    addValue(value) {
        this._element.append(value);
    }
}
exports.PText = PText;
