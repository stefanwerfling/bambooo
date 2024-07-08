"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionCardWidget = void 0;
const Card_1 = require("../../Content/Card/Card");
const CollectionWidget_1 = require("./CollectionWidget");
/**
 * Collection card widget
 */
class CollectionCardWidget extends CollectionWidget_1.CollectionWidget {
    constructor(opts) {
        super({
            element: opts.element,
            editable: opts.editable,
            onContainerObject: (element) => {
                return new Card_1.Card(element, opts.bodyType, opts.cardType, opts.cardLine);
            },
            onBindAddBtn: (element) => {
                return element.getToolsElement();
            },
            entryClass: opts.entryClass
        });
    }
}
exports.CollectionCardWidget = CollectionCardWidget;
