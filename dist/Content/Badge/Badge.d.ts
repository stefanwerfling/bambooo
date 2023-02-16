import { Element } from '../../Element';
/**
 * BadgeType
 */
export declare enum BadgeType {
    success = "badge-success",
    warning = "badge-warning",
    danger = "badge-danger",
    info = "badge-info",
    primary = "badge-primary",
    secondary = "badge-secondary",
    light = "badge-light",
    dark = "badge-dark",
    color_cream_red = "#DE3163",
    color_cream_rorange = "#FF7F50",
    color_cream_orange = "#FFBF00",
    color_cream_yellow = "#DFFF00",
    color_cream_green = "#9FE2BF",
    color_cream_bgreen = "#40E0D0",
    color_cream_blue = "#6495ED",
    color_cream_purpel = "#CCCCFF"
}
/**
 * Badge
 */
export declare class Badge extends Element {
    /**
     * constructor
     * @param element
     * @param text
     * @param type
     */
    constructor(element: any, text: string, type?: BadgeType, aColor?: string);
}
