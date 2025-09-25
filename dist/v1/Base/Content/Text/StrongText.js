"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrongText = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * StrongText
 */
class StrongText extends Component_js_1.Component {
    /**
     * constructor
     * @param {ComponentType} element
     * @param {string|JQuery|LangText} text
     */
    constructor(element, text) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<strong/>`).appendTo(telement);
        if (text) {
            this.addText(text);
        }
    }
    /**
     * Add Text
     * @param {string|JQuery|LangText} text
     */
    addText(text) {
        const ttext = this._getAnyElement(text);
        this._element.append(ttext);
    }
}
exports.StrongText = StrongText;
