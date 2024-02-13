import {Widget, WidgetOptions} from '../Widget';

export enum NavbarPositionType {
    left,
    right
};

export type NavbarPositionOptions = WidgetOptions & {
    postionType?: NavbarPositionType;
};

/**
 * Navbar position
 */
export class NavbarPosition extends Widget {

    /**
     * Constructor
     * @param {NavbarPositionOptions} opt
     */
    public constructor(opt?: NavbarPositionOptions) {
        let options: NavbarPositionOptions = {};

        if (opt) {
            options = opt;
        }

        options.element = jQuery('<ul/>');

        if (!options.class) {
            options.class = [];
        }

        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }

        options.class = [
            'navbar-nav'
        ].concat(options.class);

        if (opt?.postionType && opt.postionType === NavbarPositionType.right) {
            options.class = [
                'ml-auto'
            ].concat(options.class);
        }

        super(options);
    }
}