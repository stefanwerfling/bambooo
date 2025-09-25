"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KanbanBoard = void 0;
const Component_js_1 = require("../../Component.js");
const Card_js_1 = require("./../Card/Card.js");
const KanbanCard_js_1 = require("./KanbanCard.js");
/**
 * Kanban Board
 */
class KanbanBoard extends Component_js_1.Component {
    /**
     * Container
     * @protected
     */
    _container;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {number} heightPercent
     */
    constructor(element, heightPercent = 100) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="content-wrapper kanban">').appendTo(telement);
        this._element.css({
            height: '100%'
        });
        this._container = jQuery(`<div class="container-fluid h-${heightPercent}" />`).appendTo(this._element);
    }
    /**
     * create a Kanban Card
     * @param {string|LangText} title
     * @param {CardType} cardType
     * @return {KanbanCard}
     */
    createKanbanCard(title, cardType = Card_js_1.CardType.secondary) {
        const card = new KanbanCard_js_1.KanbanCard(this._container, cardType);
        card.setTitle(title);
        return card;
    }
}
exports.KanbanBoard = KanbanBoard;
