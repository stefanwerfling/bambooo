"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Form
 */
class Form extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super(jQuery('<form></form>').appendTo(Component_js_1.Component.getAnyElement(element)));
    }
}
exports.Form = Form;
