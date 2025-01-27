import { Widget, WidgetOptions } from '../Widget';
/**
 * Type sidebare logo option title
 */
export type SidebarLogoOptionTitle = {
    text: string;
    class?: string;
};
/**
 * Type sidebare logo option image
 */
export type SidebarLogoOptionImage = {
    src: string;
    class?: string[];
    alt?: string;
    style?: JQuery.PlainObject<string | number | ((this: HTMLElement, index: number, value: string) => string | number | void | undefined)>;
};
/**
 * Type Sidebar logo options
 */
export type SidebarLogoOptions = WidgetOptions & {
    title?: SidebarLogoOptionTitle;
    image?: SidebarLogoOptionImage;
};
/**
 * Sidebar logo
 */
export declare class SidebarLogo extends Widget {
    /**
     * Constructor
     * @param {SidebarLogoOptions} opt
     */
    constructor(opt?: SidebarLogoOptions);
    /**
     * create a child image object
     * @param {SidebarLogoOptionImage} option
     * @protected
     */
    protected _createChildImage(option: SidebarLogoOptionImage): JQuery;
    /**
     * create the child title object
     * @param {SidebarLogoOptionTitle} option
     * @returns {JQuery}
     * @protected
     */
    protected _createChildTitle(option: SidebarLogoOptionTitle): JQuery;
}
