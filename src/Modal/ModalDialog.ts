import {Element} from '../Element';
import {LangText} from '../Lang/LangText';

/**
 * ModalDialogType
 */
export enum ModalDialogType {
    small = 'modal-sm',
    large = 'modal-lg',
    xlarge = 'modal-xl'
}

/**
 * ModalDialog
 */
export class ModalDialog extends Element {

    /**
     * main element
     * @protected
     */
    protected _mainElement: any;

    /**
     * inner element
     * @protected
     */
    protected _innerElement: any;

    /**
     * modal content
     * @protected
     */
    protected _modalContent: any;

    /**
     * header
     * @protected
     */
    protected _header: any;

    /**
     * header title
     * @protected
     */
    protected _header_title: any;

    /**
     * header button
     * @protected
     */
    protected _header_button: any;

    /**
     * body
     * @protected
     */
    protected _body: any;

    /**
     * footer
     * @protected
     */
    protected _footer: any;

    /**
     * constructor
     * @param elementObject
     * @param idname
     * @param modalType
     */
    public constructor(elementObject: Element|any, idname: string, modalType: ModalDialogType) {
        super();

        const aElement = this._getAnyElement(elementObject);

        this._mainElement = jQuery(`<div class="modal fade" id="${idname}" />`).appendTo(aElement);
        this._innerElement = jQuery(`<div class="modal-dialog ${modalType}" />`).appendTo(this._mainElement);
        this._modalContent = jQuery('<div class="modal-content">').appendTo(this._innerElement);

        this._header = jQuery('<div class="modal-header"/>').appendTo(this._modalContent);
        this._header_title = jQuery('<h4 class="modal-title" />').appendTo(this._header);
        this._header_button = jQuery(
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
            '</button>'
        ).appendTo(this._header);

        this._body = jQuery('<div class="modal-body" />').appendTo(this._modalContent);

        this._footer = jQuery('<div class="modal-footer justify-content-between">').appendTo(this._modalContent);
    }

    /**
     * setTitle
     * @param title
     */
    public setTitle(title: string|LangText): void {
        LangText.addLangText(this._header_title, title);
    }

    /**
     * getBody
     */
    public getBody(): any {
        return this._body;
    }

    /**
     * getFooter
     */
    public getFooter(): any {
        return this._footer;
    }

    /**
     * show
     */
    public show(): void {
        this._mainElement.modal('show');
    }

    /**
     * hide
     */
    public hide(): void {
        this._mainElement.modal('hide');
    }

    /**
     * resetValues
     * ovverride for use
     */
    public resetValues(): void {}
}