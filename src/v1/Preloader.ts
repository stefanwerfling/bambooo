/**
 * Preloader
 */
export class Preloader {

    /**
     * element
     * @private
     */
    private _element: any;

    /**
     * title
     * @private
     */
    private _title: string = '';

    /**
     * imgeurl
     * @private
     */
    private _imageUrl: string = '';

    /**
     * constructor
     * @param element
     */
    public constructor(element?: any) {
        if (element) {
            this._element = element;
        } else {
            this._element = jQuery('.preloader');
        }
    }

    /**
     * getElement
     */
    public getElement(): any {
        return this._element;
    }

    /**
     * setImage
     * @param url
     */
    public setImage(url: string): void {
        this._imageUrl = url;
        this._element.empty().append(jQuery(
            `<img class="animation__shake" src="${this._imageUrl}" alt="${this._title}" height="60" width="60" />`
        ));
    }

    /**
     * setTitle
     * @param title
     */
    public setTitle(title: string): void {
        this._title = title;
    }

    /**
     * readyLoad
     */
    public readyLoad(): void {
        this._element.css({
            display: 'none'
        });
    }

}