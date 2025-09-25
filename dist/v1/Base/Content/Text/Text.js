"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.TextAlignment = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * TextAlignment
 */
var TextAlignment;
(function (TextAlignment) {
    TextAlignment["none"] = "";
    TextAlignment["center"] = "text-center";
})(TextAlignment || (exports.TextAlignment = TextAlignment = {}));
/**
 * Text
 */
class Text extends Component_js_1.Component {
    /**
     * constructor
     * @param {ComponentType} element
     * @param {TextAlignment} align
     */
    constructor(element, align = TextAlignment.none) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div />').appendTo(telement);
        this._element.addClass(`${align}`);
    }
}
exports.Text = Text;
