"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogConfirm = void 0;
const ModalDialog_1 = require("../../Modal/ModalDialog");
const ButtonClass_1 = require("../Button/ButtonClass");
/**
 * DialogConfirm
 */
class DialogConfirm extends ModalDialog_1.ModalDialog {
    /**
     * body card
     * @protected
     */
    _bodyCard;
    /**
     * button ok
     * @protected
     */
    _btnOk;
    /**
     * ok click function
     * @protected
     */
    _okFn = null;
    /**
     * cancel click function
     * @protected
     */
    _cancelFn = null;
    /**
     * constructor
     * @param elementObject
     * @param idname
     * @param modalType
     * @param buttonType
     */
    constructor(elementObject, idname, modalType, buttonType = ButtonClass_1.ButtonClass.primary) {
        super(elementObject, idname, modalType);
        this._bodyCard = jQuery('<div class="card-body"/>').appendTo(this._body);
        const btnCancel = jQuery('<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>').appendTo(this._footer);
        this._btnOk = jQuery(`<button type="button" class="btn ${buttonType}">Ok</button>`).appendTo(this._footer);
        btnCancel.on('click', (event) => {
            if (this._cancelFn) {
                this._cancelFn(event, this);
            }
        });
        this._btnOk.on('click', (event) => {
            if (this._okFn) {
                this._okFn(event, this);
            }
        });
    }
    /**
     * setMessage
     * @param message
     */
    setMessage(message) {
        this._bodyCard.empty();
        this._bodyCard.append(message);
    }
    /**
     * setClickOk
     * @param click
     */
    setClickOk(click) {
        this._okFn = click;
    }
    /**
     * setClickCancel
     * @param click
     */
    setClickCancel(click) {
        this._cancelFn = click;
    }
    /**
     * setButtonOkTitle
     * @param title
     */
    setButtonOkTitle(title) {
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
    static confirm(id, modalType, title, message, clickOk, clickCancel, buttonOktitle, buttonType = ButtonClass_1.ButtonClass.primary) {
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
exports.DialogConfirm = DialogConfirm;
