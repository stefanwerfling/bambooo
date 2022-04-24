export declare class Preloader {
    private _element;
    private _title;
    private _imageUrl;
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
