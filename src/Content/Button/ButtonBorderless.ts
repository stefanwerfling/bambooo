import {Element} from '../../Element';
import {ButtonDefaultClickFn} from './ButtonDefault';

/**
 * ButtonBorderless
 */
export class ButtonBorderless extends Element {

    /**
     * title
     * @protected
     */
    protected _title = '';

    /**
     * icon
     * @protected
     */
    protected _icon = '';

    /**
     * click enable
     * @protected
     */
    protected _clickEnable = true;

    /**
     * constructor
     * @param element
     * @param title
     * @param icon
     * @param bnClass
     * @param bnType
     */
    public constructor(
        element: any,
        title?: string,
        icon?: string
    ) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<a href="#" class="text-muted"/>`).appendTo(telement);

        this.setValue(title, icon);
    }

    /**
     * setValue
     * @param title
     * @param icon
     */
    public setValue(title?: string, icon?: string): void {
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

            this._element.append(this._title);
        }
    }

    /**
     * setOnClickFn
     * @param onClick
     */
    public setOnClickFn(onClick: ButtonDefaultClickFn): void {
        this._element.unbind().on('click', (): void => {
            if (this._clickEnable) {
                onClick();
            }
        });
    }

    /**
     * setClickEnable
     * @param enable
     */
    public setClickEnable(enable: boolean): void {
        this._clickEnable = enable;
    }
}