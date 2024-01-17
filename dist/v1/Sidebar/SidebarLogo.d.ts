/**
 * SidebarLogo
 */
export declare class SidebarLogo {
    /**
     * element
     * @private
     */
    private _element;
    /**
     * image url
     * @private
     */
    private _image;
    /**
     * title
     * @private
     */
    private _title;
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
     * render
     */
    render(): void;
}
