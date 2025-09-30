import {Component, ComponentType} from './Component.js';
import {LeftNavbar} from './Navbar/LeftNavbar';
import {RightNavbar} from './Navbar/RightNavbar';

/**
 * Navbar
 */
export class Navbar extends Component<HTMLElement> {

    /**
     * left navbar
     * @private
     */
    protected _leftNavbar: LeftNavbar;

    /**
     * right navbar
     * @private
     */
    protected _rightNavbar: RightNavbar|null = null;

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element?: ComponentType) {
        super();

        const telement = this._getAnyElement(element);

        if (telement) {
            this._element = telement;
        } else {
            throw Error('navbar element not found!');
        }

        this._leftNavbar = new LeftNavbar(this._element);
    }

    /**
     * getLeftNavbar
     */
    public getLeftNavbar(): LeftNavbar {
        return this._leftNavbar;
    }

    /**
     * getRightNavbar
     */
    public getRightNavbar(): RightNavbar {
        if (this._rightNavbar === null) {
            this._rightNavbar = new RightNavbar(this._element);
        }

        return this._rightNavbar;
    }

}