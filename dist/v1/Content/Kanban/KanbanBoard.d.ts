import { Element } from '../../Element.js';
import { LangText } from '../../Lang/LangText.js';
import { CardType } from '../Card/Card.js';
import { KanbanCard } from './KanbanCard.js';
/**
 * Kanban Board
 */
export declare class KanbanBoard extends Element {
    /**
     * Constructor
     * @param {any} element
     * @param {number} heightPercent
     */
    constructor(element: any, heightPercent?: number);
    /**
     * create a Kanban Card
     * @param {string|LangText} title
     * @param {CardType} cardType
     */
    createKanbanCard(title: string | LangText, cardType?: CardType): KanbanCard;
}
