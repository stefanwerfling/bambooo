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
     * overload
     * @protected
     */
    protected _overload: any;

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
     * @param {Element|any} elementObject
     * @param {string} idname
     * @param {ModalDialogType} modalType
     * @param {boolean} backdrop
     */
    public constructor(elementObject: Element|any, idname: string, modalType: ModalDialogType, backdrop: boolean = true) {
        super();

        const aElement = this._getAnyElement(elementObject);

        this._mainElement = jQuery(`<div class="modal fade" id="${idname}" />`).appendTo(aElement);
        this._innerElement = jQuery(`<div class="modal-dialog ${modalType}" />`).appendTo(this._mainElement);
        this._modalContent = jQuery('<div class="modal-content">').appendTo(this._innerElement);
        this._overload = jQuery('<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>').appendTo(this._modalContent);
        this._overload.hide();

        this._header = jQuery('<div class="modal-header"/>').appendTo(this._modalContent);
        this._header_title = jQuery('<h4 class="modal-title" />').appendTo(this._header);
        this._header_button = jQuery(
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
            '</button>'
        ).appendTo(this._header);

        this._header_button.on('click', () => {
            this.hide();
        });

        this._body = jQuery('<div class="modal-body" />').appendTo(this._modalContent);
        this._footer = jQuery('<div class="modal-footer justify-content-between">').appendTo(this._modalContent);

        if (backdrop) {
            this.setBackdrop(backdrop);
        }
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
     * Set the dialog static
     * @param {boolean} set
     */
    public setBackdrop(set: boolean): void {
        this._mainElement.modal({
            backdrop: set
        });
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

    /**
     * addButtonClose
     */
    public addButtonClose(): any {
        const close = jQuery('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>').appendTo(this._footer);

        close.on('click', () => {
            this.hide();
        });

        return close;
    }

    /**
     * addButtonSave
     */
    public addButtonSave(): any {
        return jQuery('<button type="button" class="btn btn-primary">Save</button>').appendTo(this._footer);
    }

    /**
     * showLoading
     */
    public showLoading(): void {
        this._overload.show();
    }

    /**
     * hideLoading
     */
    public hideLoading(): void {
        this._overload.hide();
    }
}