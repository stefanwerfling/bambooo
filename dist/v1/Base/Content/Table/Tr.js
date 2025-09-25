"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tr = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Tr
 */
class Tr extends Component_js_1.Component {
    /**
     * Constructor
     * @param {Table} element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<tr />').appendTo(telement);
    }
}
exports.Tr = Tr;
