import {Card, CardBodyType, CardLine, CardShape, CardType} from '../Card/Card.js';

/**
 * KanbanCard
 */
export class KanbanCard extends Card {

    public constructor(element: any, cardType: CardType = CardType.secondary) {
        super(element, CardBodyType.none, cardType, CardLine.none, CardShape.row);
    }

}