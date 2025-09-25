import {Component, ComponentType} from '../../Component.js';
import {ModalDialog, ModalDialogType} from '../../Modal/ModalDialog';
import {ButtonClass} from '../Button/ButtonClass';

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
export class DialogInfo extends ModalDialog {

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
    protected _okFn: DialogInfoClickFn|null = null;

    /**
     * Constructor
     * @param {ComponentType} elementObject
     * @param {string} idname
     * @param {ModalDialogType} modalType
     * @param {ButtonClass} buttonType
     */
    public constructor(elementObject: ComponentType, idname: string, modalType: ModalDialogType, buttonType: ButtonClass = ButtonClass.primary) {
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
     * @param {JQuery|string} message
     */
    public setMessage(message: JQuery|string): void {
        this._bodyCard.empty();
        this._bodyCard.append(message);
    }

    /**
     * Return the body card element
     * @returns {any}
     */
    public getBodyCardElement(): any {
        return this._bodyCard;
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
     * @param {string} id
     * @param {ModalDialogType} modalType
     * @param {string} title
     * @param {JQuery|string|DialogInfoOnContent} content (Message/Elements)
     * @param {DialogInfoClickFn} clickOk
     * @param buttonOktitle
     * @param buttonType
     */
    public static info(
        id: string,
        modalType: ModalDialogType,
        title: string,
        content: JQuery|string|DialogInfoOnContent,
        clickOk?: DialogInfoClickFn,
        buttonOktitle?: string,
        buttonType: ButtonClass = ButtonClass.primary
    ): void {
        const modal = new DialogInfo(jQuery('body'), id, modalType, buttonType);

        modal.setTitle(title);

        if (typeof content === 'function') {
            content(modal).then();
        } else {
            modal.setMessage(content);
        }

        if (clickOk) {
            modal.setClickOk(clickOk);
        }

        if (buttonOktitle) {
            modal.setButtonOkTitle(buttonOktitle);
        }

        modal.show();
    }
}