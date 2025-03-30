"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KanbanCard = void 0;
const Card_js_1 = require("../Card/Card.js");
const KanbanEntryCard_js_1 = require("./KanbanEntryCard.js");
/**
 * KanbanCard
 */
class KanbanCard extends Card_js_1.Card {
    /**
     * Constructor
     * @param {any} element
     * @param {CardType} cardType
     */
    constructor(element, cardType = Card_js_1.CardType.secondary) {
        super(element, Card_js_1.CardBodyType.none, cardType, Card_js_1.CardLine.none, Card_js_1.CardShape.row);
    }
    /**
     * Creat an entry
     * @param {string|LangText} title
     * @param {CardType} cardType
     * @return {KanbanEntryCard}
     */
    createEntry(title, cardType = Card_js_1.CardType.secondary) {
        const entry = new KanbanEntryCard_js_1.KanbanEntryCard(this.getBodyElement(), cardType);
        entry.setTitle(title);
        return entry;
    }
}
exports.KanbanCard = KanbanCard;
