/**
 * HttpError for API Net calls
 */
export class HttpError extends Error {

    /**
     * Error status code
     * @protected
     */
    protected _status: number = 0;

    /**
     * Url from HTTP error
     * @protected
     */
    protected _url: string = '';

    /**
     * constructor
     * @param {string} message
     * @param {number} status
     * @param {string} url
     */
    public constructor(message: string, status: number, url: string) {
        super(message);
        this._status = status;
        this._url = url;
    }

    /**
     * Return Error status code
     * @return {number}
     */
    public getStatus(): number {
        return this._status;
    }

    /**
     * Return Url from HTTP error
     * @return {string}
     */
    public getUrl(): string {
        return this._url;
    }

}