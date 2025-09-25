import { ComponentType } from '../../Component.js';
import { ModalDialog, ModalDialogType } from '../../Modal/ModalDialog';
import { ButtonClass } from '../Button/ButtonClass';
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
    protected _okFn: DialogInfoClickFn | null;
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
     * @param {string} title
     * @param {JQuery|string|DialogInfoOnContent} content (Message/Elements)
     * @param {DialogInfoClickFn} clickOk
     * @param buttonOktitle
     * @param buttonType
     */
    static info(id: string, modalType: ModalDialogType, title: string, content: JQuery | string | DialogInfoOnContent, clickOk?: DialogInfoClickFn, buttonOktitle?: string, buttonType?: ButtonClass): void;
}
