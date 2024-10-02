"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalDialog = exports.ModalDialogType = void 0;
const ButtonDefault_1 = require("../Content/Button/ButtonDefault");
const Element_1 = require("../Element");
const LangText_1 = require("../Lang/LangText");
/**
 * ModalDialogType
 */
var ModalDialogType;
(function (ModalDialogType) {
    ModalDialogType["small"] = "modal-sm";
    ModalDialogType["large"] = "modal-lg";
    ModalDialogType["xlarge"] = "modal-xl";
})(ModalDialogType = exports.ModalDialogType || (exports.ModalDialogType = {}));
/**
 * ModalDialog
 */
class ModalDialog extends Element_1.Element {
    /**
     * main element
     * @protected
     */
    _mainElement;
    /**
     * inner element
     * @protected
     */
    _innerElement;
    /**
     * modal content
     * @protected
     */
    _modalContent;
    /**
     * overload
     * @protected
     */
    _overload;
    /**
     * header
     * @protected
     */
    _header;
    /**
     * header title
     * @protected
     */
    _header_title;
    /**
     * header button
     * @protected
     */
    _header_button;
    /**
     * body
     * @protected
     */
    _body;
    /**
     * footer
     * @protected
     */
    _footer;
    /**
     * on close event
     * @protected
     */
    _onClose = null;
    /**
     * on save event
     * @protected
     */
    _onSave = null;
    /**
     * constructor
     * @param {Element|any} elementObject
     * @param {string} idname
     * @param {ModalDialogType} modalType
     * @param {boolean} backdrop
     */
    constructor(elementObject, idname, modalType, backdrop = true) {
        super();
        const aElement = this._getAnyElement(elementObject);
        let modalBackdrop = '';
        if (backdrop) {
            modalBackdrop = 'data-backdrop="static"';
        }
        this._mainElement = jQuery(`<div class="modal fade" id="${idname}" ${modalBackdrop}/>`).appendTo(aElement);
        this._innerElement = jQuery(`<div class="modal-dialog ${modalType}" />`).appendTo(this._mainElement);
        this._modalContent = jQuery('<div class="modal-content">').appendTo(this._innerElement);
        this._overload = jQuery('<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>').appendTo(this._modalContent);
        this._overload.hide();
        this._header = jQuery('<div class="modal-header"/>').appendTo(this._modalContent);
        this._header_title = jQuery('<h4 class="modal-title" />').appendTo(this._header);
        this._header_button = jQuery('<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
            '</button>').appendTo(this._header);
        this._header_button.on('click', async () => {
            this.hide();
            if (this._onClose !== null) {
                await this._onClose(this);
            }
        });
        this._body = jQuery('<div class="modal-body" />').appendTo(this._modalContent);
        this._footer = jQuery('<div class="modal-footer justify-content-between">').appendTo(this._modalContent);
    }
    /**
     * setTitle
     * @param title
     */
    setTitle(title) {
        LangText_1.LangText.addLangText(this._header_title, title);
    }
    /**
     * getBody
     */
    getBody() {
        return this._body;
    }
    /**
     * getFooter
     */
    getFooter() {
        return this._footer;
    }
    /**
     * show
     */
    show() {
        this._mainElement.modal('show');
    }
    /**
     * hide
     */
    hide() {
        this._mainElement.modal('hide');
    }
    /**
     * resetValues
     * ovverride for use
     */
    resetValues() { }
    /**
     * add a close button on footer
     * @param {string|LangText|null} title
     * @returns {ButtonDefault}
     */
    addButtonClose(title = null) {
        if (title === null) {
            title = new LangText_1.LangText('Close');
        }
        const closeBtn = new ButtonDefault_1.ButtonDefault(this._footer, title, undefined, ButtonDefault_1.ButtonClass.default, ButtonDefault_1.ButtonDefaultType.none, 'data-dismiss="modal"');
        closeBtn.setOnClickFn(async () => {
            this.hide();
            if (this._onClose !== null) {
                await this._onClose(this);
            }
        });
        return closeBtn;
    }
    /**
     * add a save button on footer
     * @param {string|LangText|null} title
     * @param {boolean} showLoading
     * @returns {ButtonDefault}
     */
    addButtonSave(title = null, showLoading = false) {
        if (title === null) {
            title = new LangText_1.LangText('Save');
        }
        const saveBtn = new ButtonDefault_1.ButtonDefault(this._footer, title, undefined, ButtonDefault_1.ButtonClass.primary, ButtonDefault_1.ButtonDefaultType.none);
        saveBtn.setOnClickFn(async () => {
            if (this._onSave !== null) {
                if (showLoading) {
                    this.showLoading();
                }
                try {
                    await this._onSave(this);
                }
                catch (e) {
                    console.error(e);
                }
                if (showLoading) {
                    this.hideLoading();
                }
            }
        });
        return saveBtn;
    }
    /**
     * showLoading
     */
    showLoading() {
        this._overload.show();
    }
    /**
     * hideLoading
     */
    hideLoading() {
        this._overload.hide();
    }
    /**
     * Set on close event
     * @param {ModalDialogEventFn|null} onClose
     */
    setOnClose(onClose) {
        this._onClose = onClose;
    }
    /**
     * Set on save event
     * @param {ModalDialogEventFn|null} onSave
     */
    setOnSave(onSave) {
        this._onSave = onSave;
    }
    destroy() {
        this.resetValues();
        this._mainElement.remove();
    }
}
exports.ModalDialog = ModalDialog;
