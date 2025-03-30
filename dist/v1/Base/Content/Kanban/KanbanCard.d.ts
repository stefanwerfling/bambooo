import { LangText } from './../../../Lang/LangText.js';
import { Card, CardType } from '../Card/Card.js';
import { KanbanEntryCard } from './KanbanEntryCard.js';
/**
 * KanbanCard
 */
export declare class KanbanCard extends Card {
    /**
     * Constructor
     * @param {any} element
     * @param {CardType} cardType
     */
    constructor(element: any, cardType?: CardType);
    /**
     * Creat an entry
     * @param {string|LangText} title
     * @param {CardType} cardType
     * @return {KanbanEntryCard}
     */
    createEntry(title: string | LangText, cardType?: CardType): KanbanEntryCard;
}
