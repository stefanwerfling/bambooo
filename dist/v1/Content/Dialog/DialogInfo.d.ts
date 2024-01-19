import { Element } from '../../Element';
import { ModalDialog, ModalDialogType } from '../../Modal/ModalDialog';
import { ButtonClass } from '../Button/ButtonDefault';
/**
 * DialogConfirmClickFn
 */
export type DialogInfoClickFn = (event: any, dialog: DialogInfo) => void;
/**
 * Function type on content
 */
export type DialogInfoOnContent = (dialog: DialogInfo) => Promise<void>;
/**
 * DialogInfo
 */
export declare class DialogInfo extends ModalDialog {
    /**
     * body card
     * @protected
     */
    protected _bodyCard: any;
    /**
     * button ok
     * @protected
     */
    protected _btnOk: any;
    /**
     * ok click function
     * @protected
     */
    protected _okFn: DialogInfoClickFn | null;
    /**
     * constructor
     * @param elementObject
     * @param idname
     * @param modalType
     * @param buttonType
     */
    constructor(elementObject: Element | any, idname: string, modalType: ModalDialogType, buttonType?: ButtonClass);
    /**
     * setMessage
     * @param {any} message
     */
    setMessage(message: any): void;
    /**
     * Return the body card element
     * @returns {any}
     */
    getBodyCardElement(): any;
    /**
     * setClickOk
     * @param click
     */
    setClickOk(click: DialogInfoClickFn): void;
    /**
     * setButtonOkTitle
     * @param title
     */
    setButtonOkTitle(title: string): void;
    /**
     * info
     * @param {string} id
     * @param {ModalDialogType} modalType
     * @param {any|DialogInfoOnContent} content (Message/Elements)
     * @param {DialogInfoClickFn} clickOk
     * @param buttonOktitle
     * @param buttonType
     */
    static info(id: string, modalType: ModalDialogType, title: string, content: any | DialogInfoOnContent, clickOk?: DialogInfoClickFn, buttonOktitle?: string, buttonType?: ButtonClass): void;
}
