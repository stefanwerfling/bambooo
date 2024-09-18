"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogError = void 0;
const ModalDialog_1 = require("../../Modal/ModalDialog");
const ButtonDefault_1 = require("../Button/ButtonDefault");
const ButtonShowMore_1 = require("../Button/ButtonShowMore");
const DialogInfo_1 = require("./DialogInfo");
/**
 * Error Dialog catch errors to a dialog
 */
class DialogError {
    /**
     * Call code and catch exception and create a Dialog for the user
     * @param {DialogErrorCallFunc} fun
     * @param {DialogErrorParseException} parseError
     */
    static async callTry(fun, parseError) {
        try {
            return await fun();
        }
        catch (e) {
            const parsend = await parseError(e);
            DialogInfo_1.DialogInfo.info('errorDialog', ModalDialog_1.ModalDialogType.large, 'Error', (modal) => {
                const bcard = modal.getBodyCardElement();
                bcard.empty();
                bcard.append(`<h3><i class="fas fa-exclamation-triangle text-danger"></i> ${parsend.msg}</h3>`);
                if (parsend.details !== '') {
                    const p = jQuery('<p></p>').appendTo(bcard);
                    const btnMore = new ButtonShowMore_1.ButtonShowMore(p, 'Show more details', `<pre>${parsend.details}</pre>`);
                    btnMore.show();
                }
            }, (_, modal) => {
                if (parsend.internFunc !== null) {
                    parsend.internFunc();
                }
                modal.hide();
            }, 'Ok', ButtonDefault_1.ButtonClass.danger);
            console.error(parsend.msg, e, parsend.details);
        }
        return null;
    }
}
exports.DialogError = DialogError;
