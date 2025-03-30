"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionCardWidget = void 0;
const Card_js_1 = require("../../Content/Card/Card.js");
const CollectionWidget_js_1 = require("./CollectionWidget.js");
/**
 * Collection card widget
 */
class CollectionCardWidget extends CollectionWidget_js_1.CollectionWidget {
    /**
     * constructor
     * @param {object} opts
     */
    constructor(opts) {
        super({
            element: opts.element,
            editable: opts.editable,
            onContainerObject: (element) => {
                return new Card_js_1.Card(element, opts.bodyType, opts.cardType, opts.cardLine);
            },
            onBindAddBtn: (element) => {
                return element.getToolsElement();
            },
            entryClass: opts.entryClass,
            onUpdate: opts.onUpdate
        });
    }
}
exports.CollectionCardWidget = CollectionCardWidget;
