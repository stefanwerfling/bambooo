import { Element } from '../../Element';
import { Card, CardBodyType, CardLine, CardType } from '../../Content/Card/Card';
import { ICollectionEntryWidget } from './CollectionEntryWidget';
import { CollectionWidget } from './CollectionWidget';
/**
 * Collection card widget
 */
export declare class CollectionCardWidget<T extends ICollectionEntryWidget> extends CollectionWidget<T, Card> {
    constructor(opts: {
        element: Element | any;
        editable: boolean;
        entryClass: {
            new (...args: any[]): T;
        };
        bodyType: CardBodyType;
        cardType: CardType;
        cardLine: CardLine;
    });
}
