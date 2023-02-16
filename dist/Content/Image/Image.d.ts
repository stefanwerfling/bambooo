import { Element } from '../../Element';
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
export declare class Image extends Element {
    /**
     * constructor
     * @param element
     * @param url
     * @param art
     * @param type
     * @param alt
     */
    constructor(element: any, url: string, art?: ImageArt, type?: ImageType, alt?: string);
}
