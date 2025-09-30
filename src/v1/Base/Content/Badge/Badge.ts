import {Component, ComponentType} from '../../Component.js';

/**
 * BadgeType
 */
export enum BadgeType {
    success = 'badge-success',
    warning = 'badge-warning',
    danger = 'badge-danger',
    info = 'badge-info',
    primary = 'badge-primary',
    secondary = 'badge-secondary',
    light = 'badge-light',
    dark = 'badge-dark',
    purple = 'bg-purple',
    color_cream_red = '#DE3163',
    color_cream_rorange = '#FF7F50',
    color_cream_orange = '#FFBF00',
    color_cream_yellow = '#DFFF00',
    color_cream_green = '#9FE2BF',
    color_cream_bgreen = '#40E0D0',
    color_cream_blue = '#6495ED',
    color_cream_purpel = '#CCCCFF'
}

/**
 * Badge
 */
export class Badge extends Component<HTMLSpanElement> {

    /**
     * constructor
     * @param {ComponentType} element
     * @param {string} text
     * @param {BadgeType} type
     * @param {string|undefined} aColor
     */
    public constructor(element: ComponentType, text: string, type: BadgeType = BadgeType.success, aColor?: string) {
        super();

        let strType = '';
        let isColor = true;

        if (type.indexOf('#') === -1 ) {
            strType = type;
            isColor = false;
        }

        if (aColor !== undefined) {
            strType = '';
        }

        const telement = this._getAnyElement(element);
        this._element = jQuery<HTMLSpanElement>(`<span class="badge ${strType}">${text}</span>`).appendTo(telement);

        if (aColor !== undefined) {
            this._element.css({
                background: aColor
            });
        } else if (isColor) {
            this._element.css({
                background: type
            });
        }
    }

}
