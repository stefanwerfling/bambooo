import { ComponentType } from '../Component.js';
/**
 * SidebarLogo
 */
export declare class SidebarLogo {
    /**
     * element
     * @private
     */
    protected _element: JQuery;
    /**
     * image url
     * @private
     */
    protected _image: string;
    /**
     * title
     * @private
     */
    protected _title: string;
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element?: ComponentType);
    /**
     * getElement
     * @return {JQuery}
     */
    getElement(): JQuery;
    /**
     * setImage
     * @param {string} url
     */
    setImage(url: string): void;
    /**
     * setTitle
     * @param {string} title
     */
    setTitle(title: string): void;
    /**
     * render
     */
    render(): void;
}
