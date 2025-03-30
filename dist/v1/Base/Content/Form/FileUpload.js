"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUpload = void 0;
const Card_1 = require("../Card/Card");
const FormRow_1 = require("./FormRow");
class FileUpload extends Card_1.Card {
    constructor(elementObject, bodyType = Card_1.CardBodyType.table, cardType = Card_1.CardType.none, cardLine = Card_1.CardLine.none) {
        super(elementObject, bodyType, cardType, cardLine);
        const rowAction = new FormRow_1.FormRow(this.getBodyElement());
        const colBtn = rowAction.createCol(6, FormRow_1.FormRowColType.lg);
    }
}
exports.FileUpload = FileUpload;
