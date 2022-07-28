import {Element} from './Element';
import {LeftNavbar} from './Navbar/LeftNavbar';
import {RightNavbar} from './Navbar/RightNavbar';

/**
 * Navbar
 */
export class Navbar extends Element {

    /**
     * left navbar
     * @private
     */
    private _leftNavbar: LeftNavbar;

    /**
     * right navbar
     * @private
     */
    private _rightNavbar: RightNavbar|null = null;

    /**
     * constructor
     * @param element
     */
    public constructor(element?: any) {
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