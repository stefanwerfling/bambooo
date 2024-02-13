import {Component} from '../Component';
import {Widget, WidgetOptions} from '../Widget';
import {NavbarPosition, NavbarPositionType} from './NavbarPosition';

/**
 * Narbar options
 */
export type NavbarOptions = WidgetOptions & {
    left?: NavbarPosition;
    right?: NavbarPosition
};

/**
 * Navbar object
 */
export class Navbar extends Widget {

    /**
     * Navbar left
     * @protected
     */
    protected _left: NavbarPosition;

    /**
     * Navbar right
     * @protected
     */
    protected _right: NavbarPosition|null = null;

    /**
     * Constructor
     * @param {NavbarOptions} opt
     */
    public constructor(opt?: NavbarOptions) {
        let options:NavbarOptions = {};

        if (opt) {
            options = opt;
        }

        options.element = jQuery('<nav/>');

        if (!options.class) {
            options.class = [];
        }

        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }

        options.class = [
            'main-header',
            'navbar',
            'navbar-expand',
            'navbar-white',
            'navbar-light'
        ].concat(options.class);

        let left = options.left;

        if (!left) {
            left = new NavbarPosition({
                postionType: NavbarPositionType.left
            });
        }

        let children: Component[] = [];

        if (options.children) {
            children = options.children;
        }

        const baseChildren: Component[] = [left];

        children = baseChildren.concat(children);

        options.children = children;

        super(options);

        this._left = left;
    }

}