import {LangDefine} from './LangDefine.js';
import {sprintf} from 'sprintf-js';

/**
 * Language translation
 */
export class Lang {

    /**
     * Store
     * @private
     */
    private static _store: {[index: string]: LangDefine;} = {};

    /**
     * Lang instance
     * @private
     */
    private static _instance: Lang|null = null;

    /**
     * the default lang
     * @private
     */
    private _defaultLang: LangDefine;

    /**
     * current lang
     * @private
     */
    private _lang: LangDefine;


    /**
     * init
     * @param {LangDefine[]} langs
     */
    public static init(langs: LangDefine[]): void {
        for (const lang of langs) {
            Lang.addStore(lang);
        }
    }

    /**
     * Set the current selected lang
     * @param {string} lang
     */
    public static setStoreLangSelect(lang: string): void {
        localStorage.setItem('k_lang', lang);
    }

    /**
     * Return the current selected lang
     * @return {string|null}
     */
    public static getStoreLangSelect(): string|null {
        return localStorage.getItem('k_lang');
    }

    /**
     * Add a LangeDefine
     * @param {LangDefine} alang
     */
    public static addStore(alang: LangDefine): void {
        Lang._store[alang.getClassName()] = alang;
    }

    /**
     * Return the Lange object instance
     * @param {string|null} langPack
     * @return {Lang}
     */
    public static i(langPack: string | null = null): Lang {
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
    public constructor(langPack: string, defaultLangPack: string = 'Lang_EN') {
        this._defaultLang = Lang._store[defaultLangPack];
        this._lang = Lang._store[langPack];
    }

    /**
     * Set the current language
     * @param {LangDefine} alang
     */
    public setCurrentLang(alang: LangDefine): void {
        this._lang = alang;
    }

    /**
     * Translate a string
     * @param {string} content
     * @return {string}
     */
    public l(content: string): string {
        let rcontent: string | null = null;

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
    public lAll(aElement?: any): void {
        let eElement: any| undefined;

        if (aElement === undefined) {
            eElement = jQuery('body');
        } else {
            eElement = jQuery(aElement);
        }

        eElement.find('[lang="1"]').each((_index: any, element: any) => {
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
                } else {
                    newText = this.l(attrLangValue);
                }

                // replace params --------------------------------------------------------------------------------------

                const data = jQuery(element).data('lang_params') as (string|number)[];

                if (data) {
                    newText = sprintf(newText, ...data);
                }

                jQuery(element).empty().append(newText);
            }
        });
    }
}