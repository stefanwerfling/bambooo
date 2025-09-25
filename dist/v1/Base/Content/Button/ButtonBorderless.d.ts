import { Component, ComponentType } from '../../Component.js';
import { ButtonDefaultClickFn } from './ButtonDefault';
/**
 * ButtonBorderless
 */
export declare class ButtonBorderless extends Component {
    /**
     * title
     * @protected
     */
    protected _title: string;
    /**
     * icon
     * @protected
     */
    protected _icon: string;
    /**
     * click enable
     * @protected
     */
    protected _clickEnable: boolean;
    /**
     * constructor
     * @param {ComponentType} element
     * @param {string} title
     * @param {icon} icon
     */
    constructor(element: ComponentType, title?: string, icon?: string);
    /**
     * Set value
     * @param {string} title
     * @param {string} icon
     */
    setValue(title?: string, icon?: string): void;
    /**
     * setOnClickFn
     * @param {ButtonDefaultClickFn} onClick
     */
    setOnClickFn(onClick: ButtonDefaultClickFn): void;
    /**
     * setClickEnable
     * @param {boolean} enable
     */
    setClickEnable(enable: boolean): void;
}
