import { Element } from '../Element';
export declare enum ModalDialogType {
    small = "modal-sm",
    large = "modal-lg",
    xlarge = "modal-xl"
}
/**
 * ModalDialog
 */
export declare class ModalDialog extends Element {
    protected _mainElement: any;
    protected _innerElement: any;
    protected _modalContent: any;
    protected _header: any;
    protected _header_title: any;
    protected _header_button: any;
    protected _body: any;
    protected _footer: any;
    /**
     * constructor
     * @param elementObject
     * @param idname
     * @param modalType
     */
    constructor(elementObject: Element, idname: string, modalType: ModalDialogType);
    /**
     * setTitle
     * @param title
     */
    setTitle(title: string): void;
    /**
     * getBody
     */
    getBody(): any;
    /**
     * getFooter
     */
    getFooter(): any;
    /**
     * show
     */
    show(): void;
    /**
     * hide
     */
    hide(): void;
}
