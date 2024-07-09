import {BClass} from '../../../Core/BTypes';
import {Element} from '../../Element';
import {Card, CardBodyType, CardLine, CardType} from '../../Content/Card/Card';
import {ICollectionEntryWidget} from './CollectionEntryWidget';
import {CollectionWidget} from './CollectionWidget';

/**
 * Collection card widget
 */
export class CollectionCardWidget<T extends ICollectionEntryWidget> extends CollectionWidget<T, Card> {

    public constructor(opts: {
        element: Element|any,
        editable: boolean,
        entryClass: BClass<T>
        bodyType: CardBodyType,
        cardType: CardType,
        cardLine: CardLine
    }) {
        super({
            element: opts.element,
            editable: opts.editable,
            onContainerObject: (element: Element) => {
                return new Card(element, opts.bodyType, opts.cardType, opts.cardLine)
            },
            onBindAddBtn: (element: Card) => {
                return element.getToolsElement()
            },
            entryClass: opts.entryClass
        });
    }

}