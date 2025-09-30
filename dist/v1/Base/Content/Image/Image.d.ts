import { Component, ComponentType } from '../../Component.js';
export declare enum ImageArt {
    base = "",
    profile = "profile-user-img"
}
export declare enum ImageType {
    none = "",
    fluidCircle = "img-fluid img-circle"
}
/**
 * Image
 */
export declare class Image extends Component<HTMLImageElement> {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} url
     * @param {ImageArt} art
     * @param {ImageType} type
     * @param {string} alt
     */
    constructor(element: ComponentType, url: string, art?: ImageArt, type?: ImageType, alt?: string);
}
