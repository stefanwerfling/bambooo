import {Element} from '../../Element';

/**
 * IconFa
 */
export enum IconFa {
    edit = 'fa fa-edit',
    add = 'fa fa-plus',
    trash = 'fa fa-trash',

    bars = 'fas fa-bars',
    
    ban = 'icon fas fa-ban',
    info = 'icon fas fa-info',
    alert = 'icon fas fa-exclamation-triangle',
    success = 'icon fas fa-check',

    hockeypuck = 'fa fa-hockey-puck',
    ethernet = 'fa fa-ethernet'
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

        const telement = this._getAnyElement(element);

        jQuery(`<i class="fa ${symbol}"></i>`).appendTo(telement);
    }
}