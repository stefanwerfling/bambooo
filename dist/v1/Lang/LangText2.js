"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangText2 = void 0;
const LangText_js_1 = require("./LangText.js");
/**
 * LangText2 with params
 */
class LangText2 extends LangText_js_1.LangText {
    /**
     *
     * @param {string} text
     * @param {...} params
     */
    constructor(text, ...params) {
        super(text);
        this._element.data('lang_params', params);
    }
}
exports.LangText2 = LangText2;
