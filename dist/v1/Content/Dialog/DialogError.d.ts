export type DialogErrorCallFunc<T> = () => Promise<T>;
export type DialogErrorParsed = {
    msg: string;
    details: string;
    internFunc: (() => void) | null;
};
export type DialogErrorParseException = (error: Error | unknown) => Promise<DialogErrorParsed>;
/**
 * Error Dialog catch errors to a dialog
 */
export declare class DialogError {
    /**
     * Call code and catch exception and create a Dialog for the user
     * @param {DialogErrorCallFunc} fun
     * @param {DialogErrorParseException} parseError
     */
    static callTry<T>(fun: DialogErrorCallFunc<T>, parseError: DialogErrorParseException): Promise<T | null>;
}
