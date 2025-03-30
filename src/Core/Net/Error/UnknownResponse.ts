/**
 * UnknownResponse
 */
export class UnknownResponse extends Error {

    /**
     * constructor
     * @param {[string]} message
     */
    public constructor(message?: any) {
        let msg = '';

        if (message) {
            msg = message;
        }

        super(msg);
    }

}