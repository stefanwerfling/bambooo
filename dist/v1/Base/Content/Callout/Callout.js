"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callout = exports.CalloutType = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Callout type
 */
var CalloutType;
(function (CalloutType) {
    CalloutType["warning"] = "callout-warning";
    CalloutType["danger"] = "callout-danger";
    CalloutType["info"] = "callout-info";
    CalloutType["success"] = "callout-success";
    CalloutType["default"] = "";
})(CalloutType || (exports.CalloutType = CalloutType = {}));
/**
 * Callout
 */
class Callout extends Component_js_1.Component {
    /**
     * Main Element
     * @protected
     */
    _mainElement;
    /**
     * Title
     * @protected
     */
    _title;
    /**
     * constructor
     * @param {ComponentType} element
     * @param {CalloutType} type
     */
    constructor(element, type = CalloutType.info) {
        const mainElement = jQuery(`<div class="callout ${type}" />`).appendTo(Component_js_1.Component.getAnyElement(element));
        const title = jQuery('<h5/>').appendTo(mainElement);
        super(jQuery('<p/>').appendTo(mainElement));
        this._mainElement = mainElement;
        this._title = title;
    }
    /**
     * Set Title
     * @param {string} title
     */
    setTitle(title) {
        this._title.empty().append(title);
    }
    /**
     * Return the main Element
     * @returns {JQuery<HTMLDivElement>}
     */
    getMainElement() {
        return this._mainElement;
    }
}
exports.Callout = Callout;
