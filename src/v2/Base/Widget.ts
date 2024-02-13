import {Component, ComponentOptions} from './Component';

/**
 * Widget options
 */
export type WidgetOptions = ComponentOptions & {
    useUnid?: {
        asId?: boolean;
        asName?: boolean;
    };
    class?: string|string[];
    id?: string;
    name?: string;
    visible?: boolean;
};

/**
 * Widget object
 */
export class Widget extends Component {

    /**
     * Widget constructor
     * @param {WidgetOptions} opt
     */
    public constructor(opt?: WidgetOptions) {
        super(opt);

        if (opt) {
            if (opt.useUnid) {
                if (opt.useUnid.asId) {
                    opt.id = this._uniqId();
                }

                if (opt.useUnid.asName) {
                    opt.name = this._uniqId();
                }
            }

            if (opt.name) {
                this.setName(opt.name);
            }

            if (opt.id) {
                this.setId(opt.id);
            }

            if (opt.class) {
                this.setClass(opt.class);
            }
        }
    }

    /**
     * _uniqId
     * @protected
     * @returns {string}
     */
    protected _uniqId(): string {
        const id = Math.round(new Date().getTime() + (Math.random() * 100));
        return `${id}`;
    }

    /**
     * hide
     */
    public hide(): void {
        this._element.hide();
    }

    /**
     * show
     */
    public show(): void {
        this._element.show();
    }

    /**
     * Set the name to the element
     * @param {string} name
     */
    public setName(name: string): void {
        this._element.attr('name', name);
    }

    /**
     * Return the name from the element
     * @returns {string|undefined}
     */
    public getName(): string|undefined {
        return this._element.attr('name');
    }

    /**
     * Set the id to the element
     * @param id
     */
    public setId(id: string): void {
        this._element.attr('id', id);
    }

    /**
     * Return the id from the element
     * @returns {string|undefined}
     */
    public getId(): string|undefined {
        return this._element.attr('id');
    }

    /**
     * setClass
     * @param {string|string[]} classes
     */
    public setClass(classes: string|string[]): void {
        if (Array.isArray(classes)) {
            this._element.addClass(classes.join(' '));
        } else {
            this._element.addClass(classes);
        }
    }
}