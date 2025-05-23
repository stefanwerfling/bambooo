import {Element} from '../../Element';
import {ModalDialog, ModalDialogType} from '../../Modal/ModalDialog';
import {ButtonClass} from '../Button/ButtonClass';

/**
 * DialogConfirmClickFn
 */
export type DialogConfirmClickFn = (event: any, dialog: DialogConfirm) => void;

/**
 * DialogConfirm
 */
export class DialogConfirm extends ModalDialog {

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
    protected _okFn: DialogConfirmClickFn|null = null;

    /**
     * cancel click function
     * @protected
     */
    protected _cancelFn: DialogConfirmClickFn|null = null;

    /**
     * constructor
     * @param elementObject
     * @param idname
     * @param modalType
     * @param buttonType
     */
    public constructor(elementObject: Element|any, idname: string, modalType: ModalDialogType, buttonType: ButtonClass = ButtonClass.primary) {
        super(elementObject, idname, modalType);

        this._bodyCard = jQuery('<div class="card-body"/>').appendTo(this._body);

        const btnCancel = jQuery('<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>').appendTo(this._footer);
        this._btnOk = jQuery(`<button type="button" class="btn ${buttonType}">Ok</button>`).appendTo(this._footer);

        btnCancel.on('click', (event: any): void => {
            if (this._cancelFn) {
                this._cancelFn(event, this);
            }
        });

        this._btnOk.on('click', (event: any): void => {
            if (this._okFn) {
                this._okFn(event, this);
            }
        });
    }

    /**
     * setMessage
     * @param message
     */
    public setMessage(message: any): void {
        this._bodyCard.empty();
        this._bodyCard.append(message);
    }

    /**
     * setClickOk
     * @param click
     */
    public setClickOk(click: DialogConfirmClickFn): void {
        this._okFn = click;
    }

    /**
     * setClickCancel
     * @param click
     */
    public setClickCancel(click: DialogConfirmClickFn): void {
        this._cancelFn = click;
    }

    /**
     * setButtonOkTitle
     * @param title
     */
    public setButtonOkTitle(title: string): void {
        this._btnOk.empty().append(title);
    }

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
    public static confirm(
        id: string,
        modalType: ModalDialogType,
        title: string,
        message: any,
        clickOk: DialogConfirmClickFn,
        clickCancel?: DialogConfirmClickFn,
        buttonOktitle?: string,
        buttonType: ButtonClass = ButtonClass.primary
    ): void {
        const modal = new DialogConfirm(jQuery('body'), id, modalType, buttonType);

        modal.setTitle(title);
        modal.setMessage(message);
        modal.setClickOk(clickOk);

        if (clickCancel) {
            modal.setClickCancel(clickCancel);
        }

        if (buttonOktitle) {
            modal.setButtonOkTitle(buttonOktitle);
        }

        modal.show();
    }
}