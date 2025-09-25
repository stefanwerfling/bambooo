import {ComponentType} from '../../Component.js';
import {Card, CardBodyType, CardLine, CardType} from '../Card/Card.js';

/**
 * KanbanEntryCard
 */
export class KanbanEntryCard extends Card {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {CardType} cardType
     */
    public constructor(element: ComponentType, cardType: CardType = CardType.secondary) {
        super(element, CardBodyType.none, cardType, CardLine.outline);
    }
}