import { Element } from '../../Element';
import { ModalDialog, ModalDialogType } from '../../Modal/ModalDialog';
import { ButtonClass } from '../Button/ButtonDefault';
/**
 * DialogConfirmClickFn
 */
export type DialogInfoClickFn = (event: any, dialog: DialogInfo) => void;
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
     * @param message
     */
    setMessage(message: any): void;
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
     * @param id
     * @param modalType
     * @param message
     * @param clickOk
     * @param clickCancel
     * @param buttonOktitle
     * @param buttonType
     */
    static info(id: string, modalType: ModalDialogType, title: string, message: any, clickOk: DialogInfoClickFn, buttonOktitle?: string, buttonType?: ButtonClass): void;
}
