import {Component, ComponentType} from '../../Component.js';

/**
 * CaretType
 */
export enum CaretType {
    up = 'fa-caret-up',
    left = 'fa-caret-left',
    down = 'fa-caret-down'
}

/**
 * Caret
 */
export class Caret extends Component<HTMLSpanElement> {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {CaretType} type
     */
    public constructor(element: ComponentType, type: CaretType = CaretType.up) {
        let dp = '';

        switch (type) {
            case CaretType.down:
                dp = 'text-danger';
                break;

            case CaretType.left:
                dp = 'text-warning';
                break;

            case CaretType.up:
                dp = 'text-success';
                break;
        }

        super(jQuery<HTMLSpanElement>(`<span class="description-percentage ${dp}"><i class="fas ${type}"></i> </span>`).appendTo(
            Component.getAnyElement(element)
        ));
    }

    /**
     * addValue
     * @param {JQuery|string} value
     */
    public addValue(value: JQuery|string): void {
        this._element.append(value);
    }

}