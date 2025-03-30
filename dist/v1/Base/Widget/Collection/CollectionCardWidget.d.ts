import { BClass } from '../../../../Core/BTypes.js';
import { Element } from '../../Element.js';
import { Card, CardBodyType, CardLine, CardType } from '../../Content/Card/Card.js';
import { ICollectionEntryWidget } from './CollectionEntryWidget.js';
import { CollectionWidget, CollectionWidgetOnUpdate } from './CollectionWidget.js';
/**
 * Collection card widget
 */
export declare class CollectionCardWidget<T extends ICollectionEntryWidget> extends CollectionWidget<T, Card> {
    /**
     * constructor
     * @param {object} opts
     */
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
