import {SchemaErrors} from 'vts';

/**
 * SchemaError
 */
export class SchemaError extends Error {

    /**
     * Schema errors from validate
     */
    protected _schemaErrors: SchemaErrors;

    /**
     * constructor
     * @param {SchemaErrors} errors
     */
    public constructor(errors: SchemaErrors) {
        super('Schema invalid from server response!');
        this._schemaErrors = errors;
    }

    /**
     * Return all errors to a JSON string
     * @returns {string}
     */
    public errorsToStr(): string {
        return JSON.stringify(this._schemaErrors, null, 2);
    }

}