import { BClass } from '../../../Core/BTypes';
import { Element } from '../../Element';
import { Card, CardBodyType, CardLine, CardType } from '../../Content/Card/Card';
import { ICollectionEntryWidget } from './CollectionEntryWidget';
import { CollectionWidget, CollectionWidgetOnUpdate } from './CollectionWidget';
/**
 * Collection card widget
 */
export declare class CollectionCardWidget<T extends ICollectionEntryWidget> extends CollectionWidget<T, Card> {
    constructor(opts: {
        element: Element | any;
        editable: boolean;
        entryClass: BClass<T>;
        bodyType: CardBodyType;
        cardType: CardType;
        cardLine: CardLine;
        onUpdate?: CollectionWidgetOnUpdate<T>;
    });
}
