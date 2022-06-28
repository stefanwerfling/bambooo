define(["require", "exports", "../../Modal/ModalDialog", "../Button/ButtonDefault"], function (require, exports, ModalDialog_1, ButtonDefault_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * DialogConfirm
     */
    class DialogConfirm extends ModalDialog_1.ModalDialog {
        /**
         * constructor
         * @param elementObject
         * @param idname
         * @param modalType
         * @param buttonType
         */
        constructor(elementObject, idname, modalType, buttonType = ButtonDefault_1.ButtonClass.primary) {
            super(elementObject, idname, modalType);
            /**
             * ok click function
             * @protected
             */
            this._okFn = null;
            /**
             * cancel click function
             * @protected
             */
            this._cancelFn = null;
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
         * @param id
         * @param modalType
         * @param message
         * @param clickOk
         * @param clickCancel
         * @param buttonOktitle
         * @param buttonType
         */
        static confirm(id, modalType, title, message, clickOk, clickCancel, buttonOktitle, buttonType = ButtonDefault_1.ButtonClass.primary) {
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
});
//# sourceMappingURL=DialogConfirm.js.map