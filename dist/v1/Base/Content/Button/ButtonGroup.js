"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonGroup = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * ButtonGroup
 */
class ButtonGroup extends Component_js_1.Component {
    /**
     * constructor
     * @param {ComponentType} element
     * @param {string} addClass
     */
    constructor(element, addClass) {
        let tclass = '';
        if (addClass) {
            tclass = `${tclass} ${addClass}`;
        }
        super(jQuery(`<div class="btn-group ${tclass}" />`).appendTo(Component_js_1.Component.getAnyElement(element)));
    }
}
exports.ButtonGroup = ButtonGroup;
