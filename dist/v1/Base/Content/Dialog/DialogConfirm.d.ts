import { ComponentType } from '../../Component.js';
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
    protected _bodyCard: JQuery;
    /**
     * button ok
     * @protected
     */
    protected _btnOk: JQuery;
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
     * Constructor
     * @param {ComponentType} elementObject
     * @param {string} idname
     * @param {ModalDialogType} modalType
     * @param {ButtonClass} buttonType
     */
    constructor(elementObject: ComponentType, idname: string, modalType: ModalDialogType, buttonType?: ButtonClass);
    /**
     * setMessage
     * @param {JQuery|string} message
     */
    setMessage(message: JQuery | string): void;
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
     * @param {JQuery|string} message
     * @param {DialogConfirmClickFn} clickOk
     * @param {DialogConfirmClickFn} clickCancel
     * @param {string} buttonOktitle
     * @param {ButtonClass} buttonType
     */
    static confirm(id: string, modalType: ModalDialogType, title: string, message: JQuery | string, clickOk: DialogConfirmClickFn, clickCancel?: DialogConfirmClickFn, buttonOktitle?: string, buttonType?: ButtonClass): void;
}
