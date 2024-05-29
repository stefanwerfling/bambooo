import {Widget, WidgetOptions} from '../Widget';

/**
 * Type sidebare logo option title
 */
export type SidebarLogoOptionTitle = {
    text: string;
    class?: string;
};

/**
 * Type sidebare logo option image
 */
export type SidebarLogoOptionImage = {
    src: string;
    class?: string[];
    alt?: string;
    style?: JQuery.PlainObject<string | number | ((this: HTMLElement, index: number, value: string) => string | number | void | undefined)>;
};

/**
 * Type Sidebar logo options
 */
export type SidebarLogoOptions = WidgetOptions & {
    title?: SidebarLogoOptionTitle;
    image?: SidebarLogoOptionImage;
}

/**
 * Sidebar logo
 */
export class SidebarLogo extends Widget {

    /**
     * Constructor
     * @param {SidebarLogoOptions} opt
     */
    public constructor(opt?: SidebarLogoOptions) {
        let options: SidebarLogoOptions = {};

        if (opt) {
            options = opt;
        }

        options.element = jQuery('<a href="#"/>');

        if (!options.class) {
            options.class = [];
        }

        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }

        options.class = [
            'brand-link'
        ].concat(options.class);

        super(options);

        if (options.image) {
            this._element.append(this._createChildImage(options.image));
        }

        if (options.title) {
            this._element.append(this._createChildTitle(options.title));
        }
    }

    /**
     * create a child image object
     * @param {SidebarLogoOptionImage} option
     * @protected
     */
    protected _createChildImage(option: SidebarLogoOptionImage): JQuery {
        const img = jQuery('<img>');

        img.attr('src', option.src);

        if (option.alt) {
            img.attr('alt', option.alt);
        }

        img.addClass('brand-image img-circle elevation-3');

        if (option.class) {
            for (const aClass of option.class) {
                img.addClass(aClass);
            }
        }

        if (option.style) {
            img.css(option.style);
        } else {
            img.css({
                'opacity': '.8'
            });
        }

        return img;
    }

    /**
     * create the child title object
     * @param {SidebarLogoOptionTitle} option
     * @returns {JQuery}
     * @protected
     */
    protected _createChildTitle(option: SidebarLogoOptionTitle): JQuery {
        const span = jQuery('<span class="brand-text font-weight-light" />');

        span.append(`${option.text}`);

        if (option.class) {
            for (const aClass of option.class) {
                span.addClass(aClass);
            }
        }

        return span;
    }

}