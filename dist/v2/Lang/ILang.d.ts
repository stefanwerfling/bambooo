/**
 * Interface of a Language object
 */
export interface ILang {
    /**
     * Return the class name of language
     * @returns {string}
     */
    getClassName: () => string;
    /**
     * Return the language code
     * @returns {string}
     */
    getLangCode: () => string;
    /**
     * Return language name
     * @returns {string}
     */
    getLangTitle: () => string;
    /**
     * Return the country code
     * @returns {string}
     */
    getCountryCode: () => string;
    /**
     * translate strin to another language string
     * @param content
     */
    l: (content: string) => string | null;
}
