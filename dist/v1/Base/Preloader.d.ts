/**
 * Preloader
 */
export declare class Preloader {
    /**
     * element
     * @private
     */
    protected _element: JQuery;
    /**
     * title
     * @private
     */
    protected _title: string;
    /**
     * imgeurl
     * @private
     */
    protected _imageUrl: string;
    /**
     * Constructor
     * @param {JQuery} element
     */
    constructor(element?: JQuery);
    /**
     * getElement
     * @return {JQuery}
     */
    getElement(): JQuery;
    /**
     * setImage
     * @param url
     */
    setImage(url: string): void;
    /**
     * setTitle
     * @param title
     */
    setTitle(title: string): void;
    /**
     * readyLoad
     */
    readyLoad(): void;
}
