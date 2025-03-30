/**
 * InternalError
 */
export class InternalError extends Error {

    /**
     * constructor
     * @param {string} message
     */
    public constructor(message: string) {
        super(message);
    }

}