import { ButtonDefault } from '../Content/Button/ButtonDefault.js';
import { Component, ComponentType } from '../Component.js';
import { LangText } from '../../Lang/LangText.js';
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
export declare class ModalDialog extends Component {
    /**
     * main element
     * @protected
     */
    protected _mainElement: JQuery;
    /**
     * inner element
     * @protected
     */
    protected _innerElement: JQuery;
    /**
     * modal content
     * @protected
     */
    protected _modalContent: JQuery;
    /**
     * overload
     * @protected
     */
    protected _overload: JQuery;
    /**
     * header
     * @protected
     */
    protected _header: JQuery;
    /**
     * header title
     * @protected
     */
    protected _header_title: JQuery;
    /**
     * header button
     * @protected
     */
    protected _header_button: JQuery;
    /**
     * body
     * @protected
     */
    protected _body: JQuery;
    /**
     * footer
     * @protected
     */
    protected _footer: JQuery;
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
     * on hidden event
     * @protected
     */
    protected _onHidden: ModalDialogEventFn | null;
    /**
     * Constructor
     * @param {ComponentType} elementObject
     * @param {string} idname
     * @param {ModalDialogType} modalType
     * @param {boolean} backdrop
     */
    constructor(elementObject: ComponentType, idname: string, modalType: ModalDialogType, backdrop?: boolean);
    /**
     * setTitle
     * @param {string|LangText} title
     */
    setTitle(title: string | LangText): void;
    /**
     * getBody
     * @return {any}
     */
    getBody(): any;
    /**
     * getFooter
     * @return {any}
     */
    getFooter(): any;
    /**
     * show
     */
    show(): void;
    /**
     * hide
     * @param {[ModalDialogEventFn]} onHidden
     */
    hide(onHidden?: ModalDialogEventFn): void;
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
     * @param {boolean} showLoading
     * @returns {ButtonDefault}
     */
    addButtonSave(title?: string | LangText | null, showLoading?: boolean): any;
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
    /**
     * Set on hidden
     * @param {ModalDialogEventFn|null} onHidden
     */
    setOnHidden(onHidden: ModalDialogEventFn | null): void;
    /**
     * Destroy
     */
    destroy(): void;
}
