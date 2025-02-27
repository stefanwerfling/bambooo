import {Element} from '../../Element.js';
import {LangText} from '../../Lang/LangText.js';
import {CardType} from '../Card/Card.js';
import {KanbanCard} from './KanbanCard.js';

/**
 * Kanban Board
 */
export class KanbanBoard extends Element {

    protected _container: any;

    /**
     * Constructor
     * @param {any} element
     * @param {number} heightPercent
     */
    public constructor(element: any, heightPercent: number = 100) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div class="container-wrapper kanban">').appendTo(telement);
        this._container = jQuery(`<div class="container-fluid h-${heightPercent}" />`).appendTo(this._element);
    }

    /**
     * create a Kanban Card
     * @param {string|LangText} title
     * @param {CardType} cardType
     */
    public createKanbanCard(title: string|LangText, cardType: CardType = CardType.secondary): KanbanCard {
        const card = new KanbanCard(this._container, cardType);
        card.setTitle(title);

        return card;
    }

}