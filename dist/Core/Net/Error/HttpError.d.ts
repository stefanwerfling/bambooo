/**
 * HttpError for API Net calls
 */
export declare class HttpError extends Error {
    /**
     * Error status code
     * @protected
     */
    protected _status: number;
    /**
     * Url from HTTP error
     * @protected
     */
    protected _url: string;
    /**
     * constructor
     * @param {string} message
     * @param {number} status
     * @param {string} url
     */
    constructor(message: string, status: number, url: string);
    /**
     * Return Error status code
     * @return {number}
     */
    getStatus(): number;
    /**
     * Return Url from HTTP error
     * @return {string}
     */
    getUrl(): string;
}
