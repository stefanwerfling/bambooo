import {Element} from '../../Element';
import {ModalDialog, ModalDialogType} from '../../Modal/ModalDialog';
import {ButtonClass} from '../Button/ButtonDefault';

/**
 * DialogConfirmClickFn
 */
export type DialogInfoClickFn = (event: any, dialog: DialogInfo) => void;

/**
 * DialogInfo
 */
export class DialogInfo extends ModalDialog {

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
    protected _okFn: DialogInfoClickFn|null = null;

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
        this._btnOk = jQuery(`<button type="button" class="btn ${buttonType}">Ok</button>`).appendTo(this._footer);

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
    public setClickOk(click: DialogInfoClickFn): void {
        this._okFn = click;
    }

    /**
     * setButtonOkTitle
     * @param title
     */
    public setButtonOkTitle(title: string): void {
        this._btnOk.empty().append(title);
    }

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
    public static info(
        id: string,
        modalType: ModalDialogType,
        title: string,
        message: any,
        clickOk: DialogInfoClickFn,
        buttonOktitle?: string,
        buttonType: ButtonClass = ButtonClass.primary
    ): void {
        const modal = new DialogInfo(jQuery('body'), id, modalType, buttonType);

        modal.setTitle(title);
        modal.setMessage(message);
        modal.setClickOk(clickOk);

        if (buttonOktitle) {
            modal.setButtonOkTitle(buttonOktitle);
        }

        modal.show();
    }
}