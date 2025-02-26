import {LangText} from '../../Lang/LangText';
import {Button, ButtonShape, ButtonType} from '../Form/Button.js';
import {ButtonClass} from './ButtonClass';

/**
 * ButtonDefaultType
 */
export enum ButtonDefaultType {
    none = '',
    small = 'btn-sm'
}

/**
 * Button default Position
 */
export enum ButtonDefaultPosition {
    left = '',
    right = 'float-right'
}

/**
 * ButtonDefaultClickFn
 */
export type ButtonDefaultClickFn = () => void;

/**
 * ButtonDefault
 */
export class ButtonDefault extends Button {

    /**
     * class
     * @protected
     */
    protected _class = ButtonClass.default;

    /**
     * title
     * @protected
     */
    protected _title: string|LangText = '';

    /**
     * icon
     * @protected
     */
    protected _icon = '';

    /**
     * constructor
     * @param {any} element
     * @param {string|LangText} title
     * @param {string} icon
     * @param {ButtonClass} bnClass
     * @param {ButtonDefaultType|ButtonShape} bnType
     * @param {string} moreAttr
     * @param {ButtonDefaultPosition} position
     */
    public constructor(
        element: any,
        title?: string|LangText,
        icon?: string,
        bnClass: ButtonClass = ButtonClass.default,
        bnType: ButtonDefaultType|ButtonShape = ButtonDefaultType.small,
        moreAttr: string = '',
        position: ButtonDefaultPosition = ButtonDefaultPosition.left
    ) {
        super(element, ButtonType.default, bnClass, bnType, `${position}`, moreAttr);

        this._class = bnClass;
        this.setValue(title, icon);
    }

    /**
     * setValue
     * @param {string|LangText} title
     * @param {string} icon
     */
    public setValue(title?: string|LangText, icon?: string): void {
        if (title) {
            this._title = title;
        }

        if (icon) {
            this._icon = icon;
        }

        this._element.empty();

        if (this._icon !== '') {
            this._element.append(`<i class="fas ${this._icon}" />`);
        }

        if (this._title !== '') {
            if (this._icon !== '') {
                this._element.append(' ');
            }

            const tTitle = this._getAnyElement(this._title);

            this._element.append(tTitle);
        }
    }

    /**
     * setClass
     * @param bnClass
     */
    public setClass(bnClass: ButtonClass = ButtonClass.default): void {
        this._element.removeClass(this._class).addClass(bnClass);
        this._class = bnClass;
    }

}