import {Widget, WidgetOptions} from '../Widget';

export type SidebarLogoOptionTitle = {
    text: string;
    class?: string;
};

export type SidebarLogoOptionImage = {
    src: string;
    class?: string[];
    alt?: string;
    style?: JQuery.PlainObject<string | number | ((this: HTMLElement, index: number, value: string) => string | number | void | undefined)>;
};

export type SidebarLogoOptions = WidgetOptions & {
    title?: SidebarLogoOptionTitle;
    image?: SidebarLogoOptionImage;
}

export class SidebarLogo extends Widget {

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
    }

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
}