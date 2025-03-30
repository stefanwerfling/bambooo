import {LangText} from './../../../Lang/LangText.js';
import {Card, CardBodyType, CardLine, CardShape, CardType} from '../Card/Card.js';
import {KanbanEntryCard} from './KanbanEntryCard.js';

/**
 * KanbanCard
 */
export class KanbanCard extends Card {

    /**
     * Constructor
     * @param {any} element
     * @param {CardType} cardType
     */
    public constructor(element: any, cardType: CardType = CardType.secondary) {
        super(element, CardBodyType.none, cardType, CardLine.none, CardShape.row);
    }

    /**
     * Creat an entry
     * @param {string|LangText} title
     * @param {CardType} cardType
     * @return {KanbanEntryCard}
     */
    public createEntry(title: string|LangText, cardType: CardType = CardType.secondary): KanbanEntryCard {
        const entry = new KanbanEntryCard(this.getBodyElement(), cardType);
        entry.setTitle(title);

        return entry;
    }

}