import {ComponentType} from '../../Component.js';
import {Card, CardBodyType, CardLine, CardType} from '../Card/Card';
import {FormRow, FormRowColType} from './FormRow';

export class FileUpload extends Card {

    public constructor(
        elementObject: ComponentType,
        bodyType: CardBodyType = CardBodyType.table,
        cardType: CardType = CardType.none,
        cardLine: CardLine = CardLine.none
    ) {
        super(elementObject, bodyType, cardType, cardLine);

        const rowAction = new FormRow(this.getBodyElement());
        const colBtn = rowAction.createCol(6, FormRowColType.lg);

    }
}