import { ButtonDefault } from '../Content/Button/ButtonDefault';
import { Element } from '../Element';
import { LangText } from '../Lang/LangText';
/**
 * ModalDialogType
 */
export declare enum ModalDialogType {
    small = "modal-sm",
    large = "modal-lg",
    xlarge = "modal-xl"
}
/**
 * Modal dialog event
 */
export type ModalDialogEventFn = (dialog: ModalDialog) => Promise<void>;
/**
 * ModalDialog
 */
export declare class ModalDialog extends Element {
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
     * on close event
     * @protected
     */
    protected _onClose: ModalDialogEventFn | null;
    /**
     * on save event
     * @protected
     */
    protected _onSave: ModalDialogEventFn | null;
    /**
     * constructor
     * @param {Element|any} elementObject
     * @param {string} idname
     * @param {ModalDialogType} modalType
     * @param {boolean} backdrop
     */
    constructor(elementObject: Element | any, idname: string, modalType: ModalDialogType, backdrop?: boolean);
    /**
     * setTitle
     * @param title
     */
    setTitle(title: string | LangText): void;
    /**
     * getBody
     */
    getBody(): any;
    /**
     * getFooter
     */
    getFooter(): any;
    /**
     * show
     */
    show(): void;
    /**
     * hide
     */
    hide(): void;
    /**
     * resetValues
     * ovverride for use
     */
    resetValues(): void;
    /**
     * add a close button on footer
     * @param {string|LangText|null} title
     * @returns {ButtonDefault}
     */
    addButtonClose(title?: string | LangText | null): ButtonDefault;
    /**
     * add a save button on footer
     * @param {string|LangText|null} title
     * @returns {ButtonDefault}
     */
    addButtonSave(title?: string | LangText | null): any;
    /**
     * showLoading
     */
    showLoading(): void;
    /**
     * hideLoading
     */
    hideLoading(): void;
    /**
     * Set on close event
     * @param {ModalDialogEventFn|null} onClose
     */
    setOnClose(onClose: ModalDialogEventFn | null): void;
    /**
     * Set on save event
     * @param {ModalDialogEventFn|null} onSave
     */
    setOnSave(onSave: ModalDialogEventFn | null): void;
}
