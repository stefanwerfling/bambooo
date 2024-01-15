/**
 * LangDefine
 */
export interface LangDefine {

    /**
     * getClassName
     */
    getClassName: () => string;

    /**
     * getLangCode
     */
    getLangCode: () => string;

    /**
     * getLangTitle
     */
    getLangTitle: () => string;

    /**
     * getCountryCode
     */
    getCountryCode: () => string;

    /**
     * l
     * @param content
     */
    l: (content: string) => string | null;
}