import { IPreloader } from './IPreloader';
import { Widget, WidgetOptions } from './Widget';
/**
 * Preloader options
 */
export type PreloaderOptions = WidgetOptions & {
    image?: string;
    imageTitle?: string;
};
/**
 * Preloader object
 */
export declare class Preloader extends Widget implements IPreloader {
    /**
     * Preloader concstructor
     * @param {PreloaderOptions} opt
     */
    constructor(opt?: PreloaderOptions);
    /**
     * Set the preloader image
     * @param {string} image
     * @param {string} imageTitle
     */
    setImage(image: string, imageTitle?: string): void;
    /**
     * Ready load hide the preloader
     */
    readyLoad(): void;
}
