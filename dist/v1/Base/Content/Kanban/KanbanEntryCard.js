"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KanbanEntryCard = void 0;
const Card_js_1 = require("../Card/Card.js");
/**
 * KanbanEntryCard
 */
class KanbanEntryCard extends Card_js_1.Card {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {CardType} cardType
     */
    constructor(element, cardType = Card_js_1.CardType.secondary) {
        super(element, Card_js_1.CardBodyType.none, cardType, Card_js_1.CardLine.outline);
    }
}
exports.KanbanEntryCard = KanbanEntryCard;
