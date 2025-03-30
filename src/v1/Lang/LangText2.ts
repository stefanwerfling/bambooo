import {LangText} from './LangText.js';

/**
 * LangText2 with params
 */
export class LangText2 extends LangText {

    /**
     *
     * @param {string} text
     * @param {...} params
     */
    public constructor(text: string, ...params: (string|number)[]) {
        super(text);

        this._element.data('lang_params', params);
    }
}