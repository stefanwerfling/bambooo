"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LangText = void 0;
const Component_js_1 = require("../Base/Component.js");
const Lang_js_1 = require("./Lang.js");
/**
 * LangText
 */
class LangText extends Component_js_1.Component {
    /**
     * class
     * @protected
     */
    _class = '';
    /**
     * constructor
     * @param {string} text
     * @param {[string]} cssClass
     * @param {[LangTextDefaultClickFn]} onClick
     */
    constructor(text, cssClass, onClick) {
        super();
        this._element = jQuery('<span />');
        this._element.attr('lang', '1');
        this._element.attr('lang-value', text);
        this._element.append(text);
        if (cssClass) {
            this.setClass(cssClass);
        }
        if (onClick) {
            this.setOnClickFn(onClick);
        }
    }
    /**
     * addLangText
     * @param {any} element
     * @param {LangText|string} atext
     */
    static addLangText(element, atext) {
        const telement = Component_js_1.Component.getAnyElement(element);
        if (atext instanceof LangText) {
            telement.empty().append(atext.getElement());
        }
        else {
            telement.empty().append(atext);
        }
    }
    /**
     * setOnClickFn
     * @param {LangTextDefaultClickFn} onClick
     */
    setOnClickFn(onClick) {
        this._element.unbind().on('click', () => {
            onClick(this);
        });
    }
    /**
     * setClass
     * @param {string} cssClass
     */
    setClass(cssClass) {
        this._element.removeClass(this._class).addClass(cssClass);
        this._class = cssClass;
    }
    /**
     * Return the text but translated
     * @return {string}
     */
    getTranslatedText() {
        const text = this._element.attr('lang-value');
        if (text) {
            return Lang_js_1.Lang.i().l(text);
        }
        return '';
    }
    /**
     * Return the orginal text
     * @return {string}
     */
    getOrginalText() {
        const text = this._element.attr('lang-value');
        if (text) {
            return text;
        }
        return '';
    }
}
exports.LangText = LangText;
