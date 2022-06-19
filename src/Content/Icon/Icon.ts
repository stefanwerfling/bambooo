import {Element} from '../../Element';

/**
 * IconFa
 */
export enum IconFa {
    edit = 'fa fa-edit',
    add = 'fa fa-plus',
    trash = 'fa fa-trash',

    ban = 'icon fas fa-ban',
    info = 'icon fas fa-info',
    alert = 'icon fas fa-exclamation-triangle',
    success = 'icon fas fa-check'
}

/**
 * Icon
 */
export class Icon extends Element {

    /**
     * constructor
     * @param element
     */
    public constructor(element: any, symbol: IconFa) {
        super();

        jQuery(`<i class="fa ${symbol}"></i>`).appendTo(element);
    }
}