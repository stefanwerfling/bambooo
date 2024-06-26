import { Element } from '../../Element';
/**
 * IconFa
 */
export declare enum IconFa {
    edit = "fa fa-edit",
    add = "fa fa-plus",
    trash = "fa fa-trash",
    copy = "fa fa-copy",
    sync = "fa fa-sync",
    bars = "fas fa-bars",
    ban = "icon fas fa-ban",
    info = "icon fas fa-info",
    alert = "icon fas fa-exclamation-triangle",
    success = "icon fas fa-check",
    hockeypuck = "fa fa-hockey-puck",
    ethernet = "fa fa-ethernet",
    certificate = "fa-file-certificate",
    share = "fa fa-share",
    lock = "fa fa-lock",
    calendar = "fa fa-calendar",
    clock = "far fa-clock",
    external_link = "fa fa-external-link-alt",
    book = "fa fa-book",
    redo = "fa fa-redo-alt",
    paperclip = "fas fa-paperclip",
    camera = "fas fa-camera"
}
/**
 * Icon
 */
export declare class Icon extends Element {
    /**
     * constructor
     * @param element
     * @param symbol
     */
    constructor(element: any, symbol: IconFa | string);
}
