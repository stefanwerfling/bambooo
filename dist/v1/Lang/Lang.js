"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lang = void 0;
const sprintf_js_1 = require("sprintf-js");
/**
 * Language translation
 */
class Lang {
    /**
     * Store
     * @private
     */
    static _store = {};
    /**
     * Lang instance
     * @private
     */
    static _instance = null;
    /**
     * the default lang
     * @private
     */
    _defaultLang;
    /**
     * current lang
     * @private
     */
    _lang;
    /**
     * init
     * @param {LangDefine[]} langs
     */
    static init(langs) {
        for (const lang of langs) {
            Lang.addStore(lang);
        }
    }
    /**
     * Set the current selected lang
     * @param {string} lang
     */
    static setStoreLangSelect(lang) {
        localStorage.setItem('k_lang', lang);
    }
    /**
     * Return the current selected lang
     * @return {string|null}
     */
    static getStoreLangSelect() {
        return localStorage.getItem('k_lang');
    }
    /**
     * Add a LangeDefine
     * @param {LangDefine} alang
     */
    static addStore(alang) {
        Lang._store[alang.getClassName()] = alang;
    }
    /**
     * Return the Lange object instance
     * @param {string|null} langPack
     * @return {Lang}
     */
    static i(langPack = null) {
        if (Lang._instance) {
            return Lang._instance;
        }
        let lp = langPack;
        if (!lp) {
            lp = 'Lang_EN';
        }
        Lang._instance = new Lang(lp);
        return Lang._instance;
    }
    /**
     * constructor
     * @param {string} langPack
     * @param {defaultLangPack} defaultLangPack
     */
    constructor(langPack, defaultLangPack = 'Lang_EN') {
        this._defaultLang = Lang._store[defaultLangPack];
        this._lang = Lang._store[langPack];
    }
    /**
     * Set the current language
     * @param {LangDefine} alang
     */
    setCurrentLang(alang) {
        this._lang = alang;
    }
    /**
     * Translate a string
     * @param {string} content
     * @return {string}
     */
    l(content) {
        let rcontent = null;
        if (this._lang) {
            rcontent = this._lang.l(content);
        }
        if (!rcontent) {
            rcontent = this._defaultLang.l(content);
        }
        if (rcontent) {
            return rcontent;
        }
        return content;
    }
    /**
     * lAll - Translate all elements to the current selected lang
     * @param {[any]} aElement - Start by Element or body element
     */
    lAll(aElement) {
        let eElement;
        if (aElement === undefined) {
            eElement = jQuery('body');
        }
        else {
            eElement = jQuery(aElement);
        }
        eElement.find('[lang="1"]').each((_index, element) => {
            const attrLangValue = jQuery(element).attr('lang-value');
            if (attrLangValue) {
                // check is simple text or multi text ------------------------------------------------------------------
                let newText = '';
                if (attrLangValue.indexOf('$')) {
                    newText = attrLangValue;
                    const matches = [...attrLangValue.matchAll(/\$(.*?)\$/g)];
                    const results = matches.map(m => m[1]);
                    for (const part of results) {
                        const newTextPart = this.l(part);
                        newText = newText.replaceAll(`$${part}$`, newTextPart);
                    }
                }
                else {
                    newText = this.l(attrLangValue);
                }
                // replace params --------------------------------------------------------------------------------------
                const data = jQuery(element).data('lang_params');
                if (data) {
                    newText = (0, sprintf_js_1.sprintf)(newText, ...data);
                }
                jQuery(element).empty().append(newText);
            }
        });
    }
}
exports.Lang = Lang;
