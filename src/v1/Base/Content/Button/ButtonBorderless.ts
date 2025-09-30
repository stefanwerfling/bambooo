import {Component, ComponentType} from '../../Component.js';
import {ButtonDefaultClickFn} from './ButtonDefault';

/**
 * ButtonBorderless
 */
export class ButtonBorderless extends Component<HTMLAnchorElement> {

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
     * @param {ComponentType} element
     * @param {string} title
     * @param {icon} icon
     */
    public constructor(
        element: ComponentType,
        title?: string,
        icon?: string
    ) {
        const telement = Component.getAnyElement(element);

        super(jQuery<HTMLAnchorElement>(`<a href="#" class="text-muted"/>`).appendTo(telement));

        this.setValue(title, icon);
    }

    /**
     * Set value
     * @param {string} title
     * @param {string} icon
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
     * @param {ButtonDefaultClickFn} onClick
     */
    public setOnClickFn(onClick: ButtonDefaultClickFn): void {
        this._element.off('click').on('click', (): void => {
            if (this._clickEnable) {
                onClick();
            }
        });
    }

    /**
     * setClickEnable
     * @param {boolean} enable
     */
    public setClickEnable(enable: boolean): void {
        this._clickEnable = enable;
    }
}