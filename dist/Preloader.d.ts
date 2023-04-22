/**
 * Preloader
 */
export declare class Preloader {
    /**
     * element
     * @private
     */
    private _element;
    /**
     * title
     * @private
     */
    private _title;
    /**
     * imgeurl
     * @private
     */
    private _imageUrl;
    /**
     * constructor
     * @param element
     */
    constructor(element?: any);
    /**
     * getElement
     */
    getElement(): any;
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
