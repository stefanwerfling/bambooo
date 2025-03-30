"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
const SchemaError_js_1 = require("./Error/SchemaError.js");
/**
 * Response
 */
class Response {
    static isSchemaValidate(schema, data) {
        const errors = [];
        if (!schema.validate(data, errors)) {
            throw new SchemaError_js_1.SchemaError(errors);
        }
        return true;
    }
    static isResponse(schema, data, validator) {
        if (Response.isSchemaValidate(schema, data)) {
            return validator.isValidate(data);
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
exports.Response = Response;
