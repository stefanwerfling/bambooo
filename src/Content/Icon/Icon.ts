import {Element} from '../../Element';

/**
 * IconFa
 */
export enum IconFa {
    edit= 'fa-edit'
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