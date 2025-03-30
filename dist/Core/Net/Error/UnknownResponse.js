"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownResponse = void 0;
/**
 * UnknownResponse
 */
class UnknownResponse extends Error {
    /**
     * constructor
     * @param {[string]} message
     */
    constructor(message) {
        let msg = '';
        if (message) {
            msg = message;
        }
        super(msg);
    }
}
exports.UnknownResponse = UnknownResponse;
