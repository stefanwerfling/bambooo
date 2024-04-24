/// <reference types="jquery" />
/// <reference types="jquery" />
import { Widget, WidgetOptions } from '../Widget';
export type SidebarLogoOptionTitle = {
    text: string;
    class?: string;
};
export type SidebarLogoOptionImage = {
    src: string;
    class?: string[];
    alt?: string;
    style?: JQuery.PlainObject<string | number | ((this: HTMLElement, index: number, value: string) => string | number | void | undefined)>;
};
export type SidebarLogoOptions = WidgetOptions & {
    title?: SidebarLogoOptionTitle;
    image?: SidebarLogoOptionImage;
};
export declare class SidebarLogo extends Widget {
    constructor(opt?: SidebarLogoOptions);
    protected _createChildImage(option: SidebarLogoOptionImage): JQuery;
}
