import {MainSidebar} from './MainSidebar';
import {Navbar} from './Navbar/Navbar';
import {Preloader} from './Preloader';
import {Widget, WidgetOptions} from './Widget';

/**
 * Wrapper options
 */
export type WrapperOptions = WidgetOptions & {
    preloader?: Preloader;
    navbar?: Navbar;
    mainsidebar?: MainSidebar;
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

        let mainsidebar = opt.mainsidebar;

        if (!mainsidebar) {
            mainsidebar = new MainSidebar();
        }

        childrens = [preloader, navbar, mainsidebar, ...childrens];

        opt.children = childrens;

        super(opt);
    }

    /**
     * Return a preloader
     * @returns {Preloader|null}
     */
    public getPreloader(): Preloader|null {
        for (const child of this._children) {
            if (child instanceof Preloader) {
                return child;
            }
        }

        return null;
    }

    /**
     * Return a navbar
     * @returns {Navbar|null}
     */
    public getNavbar(): Navbar|null {
        for (const child of this._children) {
            if (child instanceof Navbar) {
                return child;
            }
        }

        return null;
    }

    /**
     * Return the main Sidebar
     * @returns {MainSidebar|null}
     */
    public getMainSidebar(): MainSidebar|null {
        for (const child of this._children) {
            if (child instanceof MainSidebar) {
                return child;
            }
        }

        return null;
    }
}