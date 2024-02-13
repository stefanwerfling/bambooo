import {Navbar} from './Navbar/Navbar';
import {Preloader} from './Preloader';
import {Widget, WidgetOptions} from './Widget';

/**
 * Wrapper options
 */
export type WrapperOptions = WidgetOptions & {
    preloader?: Preloader;
    navbar?: Navbar;
};

/**
 * Wrapper object for AdminLTE
 */
export class Wrapper extends Widget {

    /**
     * Constructor
     * @param {WrapperOptions} opt
     */
    public constructor(opt: WrapperOptions) {
        if (!opt.element) {
            opt.element = jQuery('.wrapper');
        }

        if (opt.element.length === 0) {
            throw Error('Wrapper element not found!');
        }

        opt.emptyElement = true;

        let childrens = opt.children;

        if (!childrens) {
            childrens = [];
        }

        let preloader = opt.preloader;

        if (!preloader) {
            preloader = new Preloader();
        }

        let navbar = opt.navbar;

        if (!navbar) {
            navbar = new Navbar();
        }

        childrens = [preloader, navbar, ...childrens];

        opt.children = childrens;

        super(opt);
    }

}