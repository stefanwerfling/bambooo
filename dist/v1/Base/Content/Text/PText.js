"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PText = exports.PTextType = void 0;
const Component_js_1 = require("../../Component.js");
const Text_1 = require("./Text");
var PTextType;
(function (PTextType) {
    PTextType["success"] = "text-success";
    PTextType["info"] = "text-info";
    PTextType["primary"] = "text-primary";
    PTextType["danger"] = "text-danger";
    PTextType["warning"] = "text-warning";
    PTextType["muted"] = "text-muted";
})(PTextType || (exports.PTextType = PTextType = {}));
/**
 * PText
 */
class PText extends Component_js_1.Component {
    /**
     * constructor
     * @param {ComponentType} element
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
     * Add value
     * @param {ComponentType} value
     */
    addValue(value) {
        const telement = this._getAnyElement(value);
        this._element.append(telement);
    }
}
exports.PText = PText;
