import {Component, ComponentType} from '../../Component.js';

export enum ImageArt {
    base = '',
    profile = 'profile-user-img',
}

export enum ImageType {
    none = '',
    fluidCircle = 'img-fluid img-circle'
}

/**
 * Image
 */
export class Image extends Component {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} url
     * @param {ImageArt} art
     * @param {ImageType} type
     * @param {string} alt
     */
    public constructor(element: ComponentType, url: string, art: ImageArt = ImageArt.base, type: ImageType = ImageType.none,  alt?: string) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<img />').appendTo(telement);
        this._element.attr('src', url);

        if (alt) {
            this._element.attr('alt', alt);
        }

        this._element.addClass(`${art}`);
        this._element.addClass(`${type}`);
    }
}