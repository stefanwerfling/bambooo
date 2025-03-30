import {Schema, SchemaErrors} from 'vts';
import {SchemaError} from './Error/SchemaError.js';
import {ResponseValidate} from './ResponseValidate.js';

/**
 * Response
 */
export class Response {

    public static isSchemaValidate<T>(
        schema: Schema<T>,
        data: unknown
    ): data is T {
        const errors: SchemaErrors = [];

        if (!schema.validate(data, errors)) {
            throw new SchemaError(errors);
        }

        return true;
    }

    public static isResponse<T>(
        schema: Schema<T>,
        data: unknown,
        validator: ResponseValidate
    ): data is T {
        if (Response.isSchemaValidate(schema, data)) {
            return validator.isValidate<T>(data);

            /**switch (data.statusCode) {
                case StatusCodes.OK:
                    return true;

                case StatusCodes.UNAUTHORIZED:
                    throw new UnauthorizedError();

                case StatusCodes.INTERNAL_ERROR:
                    if (Vts.isUndefined(data.msg)) {
                        throw new InternalError('');
                    }

                    throw new InternalError(data.msg);
            }

            throw new UnknownResponse();**/
        }

        return true;
    }
}