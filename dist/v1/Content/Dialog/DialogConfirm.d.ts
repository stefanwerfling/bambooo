import { Element } from '../../Element';
import { ModalDialog, ModalDialogType } from '../../Modal/ModalDialog';
import { ButtonClass } from '../Button/ButtonClass';
/**
 * DialogConfirmClickFn
 */
export type DialogConfirmClickFn = (event: any, dialog: DialogConfirm) => void;
/**
 * DialogConfirm
 */
export declare class DialogConfirm extends ModalDialog {
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
    protected _okFn: DialogConfirmClickFn | null;
    /**
     * cancel click function
     * @protected
     */
    protected _cancelFn: DialogConfirmClickFn | null;
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
     * @param message
     */
    setMessage(message: any): void;
    /**
     * setClickOk
     * @param click
     */
    setClickOk(click: DialogConfirmClickFn): void;
    /**
     * setClickCancel
     * @param click
     */
    setClickCancel(click: DialogConfirmClickFn): void;
    /**
     * setButtonOkTitle
     * @param title
     */
    setButtonOkTitle(title: string): void;
    /**
     * confirm
     * @param {string} id
     * @param {ModalDialogType} modalType
     * @param {string} title
     * @param {any} message
     * @param {DialogConfirmClickFn} clickOk
     * @param {DialogConfirmClickFn} clickCancel
     * @param {string} buttonOktitle
     * @param {ButtonClass} buttonType
     */
    static confirm(id: string, modalType: ModalDialogType, title: string, message: any, clickOk: DialogConfirmClickFn, clickCancel?: DialogConfirmClickFn, buttonOktitle?: string, buttonType?: ButtonClass): void;
}
