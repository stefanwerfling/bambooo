import {IPreloader} from './IPreloader';
import {Widget, WidgetOptions} from './Widget';

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
export class Preloader extends Widget implements IPreloader {

    /**
     * Preloader concstructor
     * @param {PreloaderOptions} opt
     */
    public constructor(opt?: PreloaderOptions) {
        let options:PreloaderOptions = {};

        if (opt) {
            options = opt;
        }

        options.element = jQuery('<div/>');

        if (!options.class) {
            options.class = [];
        }

        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }

        options.class = [
            'preloader',
            'flex-column',
            'justify-content-center',
            'align-items-center'
        ].concat(options.class);

        super(options);

        if (options.image) {
            this.setImage(options.image, options.imageTitle);
        }
    }

    /**
     * Set the preloader image
     * @param {string} image
     * @param {string} imageTitle
     */
    public setImage(image: string, imageTitle?: string): void {
        this.append(jQuery(`<img class="animation__shake" src="${image}" alt="${imageTitle}" height="60" width="60" />`));
    }

    /**
     * Ready load hide the preloader
     */
    public readyLoad(): void {
        this.hide();
    }

}