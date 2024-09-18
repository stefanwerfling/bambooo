import {ModalDialogType} from '../../Modal/ModalDialog';
import {ButtonClass} from '../Button/ButtonDefault';
import {ButtonShowMore} from '../Button/ButtonShowMore';
import {DialogInfo} from './DialogInfo';

export type DialogErrorCallFunc<T> = () => Promise<T>;

export type DialogErrorParsed = {
    msg: string;
    details: string;
    internFunc: (() => void)|null;
};

export type DialogErrorParseException = (error: Error|unknown) => Promise<DialogErrorParsed>;

/**
 * Error Dialog catch errors to a dialog
 */
export class DialogError {

    /**
     * Call code and catch exception and create a Dialog for the user
     * @param {DialogErrorCallFunc} fun
     * @param {DialogErrorParseException} parseError
     */
    public static async callTry<T>(fun: DialogErrorCallFunc<T>, parseError: DialogErrorParseException): Promise<T | null> {
        try {
            return await fun();
        } catch (e) {
            const parsend = await parseError(e);

            DialogInfo.info(
                'errorDialog',
                ModalDialogType.large,
                'Error',
                (modal: DialogInfo) => {
                    const bcard = modal.getBodyCardElement();
                    bcard.empty();

                    bcard.append(`<h3><i class="fas fa-exclamation-triangle text-danger"></i> ${parsend.msg}</h3>`);

                    if (parsend.details !== '') {
                        const p = jQuery('<p></p>').appendTo(bcard);
                        const btnMore = new ButtonShowMore(
                            p,
                            'Show more details',
                            `<pre>${parsend.details}</pre>`
                        );

                        btnMore.show();
                    }
                },
                (
                    _,
                    modal: DialogInfo
                ) => {
                    if (parsend.internFunc !== null) {
                        parsend.internFunc();
                    }

                    modal.hide();
                },
                'Ok',
                ButtonClass.danger
            );

            console.error(parsend.msg, e, parsend.details);
        }

        return null;
    }

}