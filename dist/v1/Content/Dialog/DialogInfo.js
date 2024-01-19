"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogInfo = void 0;
const ModalDialog_1 = require("../../Modal/ModalDialog");
const ButtonDefault_1 = require("../Button/ButtonDefault");
/**
 * DialogInfo
 */
class DialogInfo extends ModalDialog_1.ModalDialog {
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
     * constructor
     * @param elementObject
     * @param idname
     * @param modalType
     * @param buttonType
     */
    constructor(elementObject, idname, modalType, buttonType = ButtonDefault_1.ButtonClass.primary) {
        super(elementObject, idname, modalType);
        this._bodyCard = jQuery('<div class="card-body"/>').appendTo(this._body);
        this._btnOk = jQuery(`<button type="button" class="btn ${buttonType}">Ok</button>`).appendTo(this._footer);
        this._btnOk.on('click', (event) => {
            if (this._okFn) {
                this._okFn(event, this);
            }
        });
    }
    /**
     * setMessage
     * @param {any} message
     */
    setMessage(message) {
        this._bodyCard.empty();
        this._bodyCard.append(message);
    }
    /**
     * Return the body card element
     * @returns {any}
     */
    getBodyCardElement() {
        return this._bodyCard;
    }
    /**
     * setClickOk
     * @param click
     */
    setClickOk(click) {
        this._okFn = click;
    }
    /**
     * setButtonOkTitle
     * @param title
     */
    setButtonOkTitle(title) {
        this._btnOk.empty().append(title);
    }
    /**
     * info
     * @param {string} id
     * @param {ModalDialogType} modalType
     * @param {any|DialogInfoOnContent} content (Message/Elements)
     * @param {DialogInfoClickFn} clickOk
     * @param buttonOktitle
     * @param buttonType
     */
    static info(id, modalType, title, content, clickOk, buttonOktitle, buttonType = ButtonDefault_1.ButtonClass.primary) {
        const modal = new DialogInfo(jQuery('body'), id, modalType, buttonType);
        modal.setTitle(title);
        if (typeof content === 'function') {
            content(modal);
        }
        else {
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
exports.DialogInfo = DialogInfo;
