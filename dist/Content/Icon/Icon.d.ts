import { Element } from '../../Element';
/**
 * IconFa
 */
export declare enum IconFa {
    edit = "fa fa-edit",
    add = "fa fa-plus",
    trash = "fa fa-trash",
    copy = "fa fa-copy",
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
    external_link = "fa fa-external-link-alt",
    redo = "fa fa-redo-alt"
}
/**
 * Icon
 */
export declare class Icon extends Element {
    /**
     * constructor
     * @param element
     */
    constructor(element: any, symbol: IconFa);
}
