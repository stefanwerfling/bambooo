import {BClass} from '../../../../Core/BTypes.js';
import {ComponentType} from '../../Component.js';
import {Card, CardBodyType, CardLine, CardType} from '../../Content/Card/Card.js';
import {ICollectionEntryWidget} from './CollectionEntryWidget.js';
import {CollectionWidget, CollectionWidgetOnUpdate} from './CollectionWidget.js';

/**
 * Collection card widget
 */
export class CollectionCardWidget<T extends ICollectionEntryWidget> extends CollectionWidget<T, Card> {

    /**
     * constructor
     * @param {object} opts
     */
    public constructor(opts: {
        element: ComponentType,
        editable: boolean,
        entryClass: BClass<T>
        bodyType: CardBodyType,
        cardType: CardType,
        cardLine: CardLine,
        onUpdate?: CollectionWidgetOnUpdate<T>
    }) {
        super({
            element: opts.element,
            editable: opts.editable,
            onContainerObject: (element: ComponentType) => {
                return new Card(element, opts.bodyType, opts.cardType, opts.cardLine)
            },
            onBindAddBtn: (element: Card) => {
                return element.getToolsElement()
            },
            entryClass: opts.entryClass,
            onUpdate: opts.onUpdate
        });
    }

}