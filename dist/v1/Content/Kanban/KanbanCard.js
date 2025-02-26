"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KanbanCard = void 0;
const Card_js_1 = require("../Card/Card.js");
/**
 * KanbanCard
 */
class KanbanCard extends Card_js_1.Card {
    constructor(element, cardType = Card_js_1.CardType.secondary) {
        super(element, Card_js_1.CardBodyType.none, cardType, Card_js_1.CardLine.none, Card_js_1.CardShape.row);
    }
}
exports.KanbanCard = KanbanCard;
