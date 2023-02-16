import { Element } from '../../Element';
import { ModalDialog, ModalDialogType } from '../../Modal/ModalDialog';
import { ButtonClass } from '../Button/ButtonDefault';
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
     * @param id
     * @param modalType
     * @param message
     * @param clickOk
     * @param clickCancel
     * @param buttonOktitle
     * @param buttonType
     */
    static confirm(id: string, modalType: ModalDialogType, title: string, message: any, clickOk: DialogConfirmClickFn, clickCancel?: DialogConfirmClickFn, buttonOktitle?: string, buttonType?: ButtonClass): void;
}
