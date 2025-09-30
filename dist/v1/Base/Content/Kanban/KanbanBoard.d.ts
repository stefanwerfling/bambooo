import { Component, ComponentType } from '../../Component.js';
import { LangText } from './../../../Lang/LangText.js';
import { CardType } from './../Card/Card.js';
import { KanbanCard } from './KanbanCard.js';
/**
 * Kanban Board
 */
export declare class KanbanBoard extends Component<HTMLDivElement> {
    /**
     * Container
     * @protected
     */
    protected _container: JQuery<HTMLDivElement>;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {number} heightPercent
     */
    constructor(element: ComponentType, heightPercent?: number);
    /**
     * create a Kanban Card
     * @param {string|LangText} title
     * @param {CardType} cardType
     * @return {KanbanCard}
     */
    createKanbanCard(title: string | LangText, cardType?: CardType): KanbanCard;
}
