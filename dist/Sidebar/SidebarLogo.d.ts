export declare class SidebarLogo {
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
    constructor(element?: any);
    getElement(): any;
    setImage(url: string): void;
    setTitle(title: string): void;
    render(): void;
}
