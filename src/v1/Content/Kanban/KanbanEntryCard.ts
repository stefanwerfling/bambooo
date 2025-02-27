import {Card, CardBodyType, CardLine, CardType} from '../Card/Card.js';

/**
 * KanbanEntryCard
 */
export class KanbanEntryCard extends Card {

    /**
     * Constructor
     * @param {any} element
     * @param {CardType} cardType
     */
    public constructor(element: any, cardType: CardType = CardType.secondary) {
        super(element, CardBodyType.none, cardType, CardLine.outline);
    }
}