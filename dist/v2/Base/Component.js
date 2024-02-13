"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
/**
 * Component object
 */
class Component {
    /**
     * @member {JQuery<HTMLElement>}
     * @protected
     */
    _element;
    /**
     * Component constructor
     * @param {ComponentOptions} opt
     */
    constructor(opt) {
        if (opt?.element) {
            this._element = opt?.element;
        }
        else {
            this._element = jQuery('body');
        }
        if (opt?.emptyElement) {
            this.empty();
        }
        if (opt?.children) {
            for (const child of opt.children) {
                this.append(child);
            }
        }
    }
    /**
     * Return the element from the component
     * @returns {JQuery<HTMLElement>}
     */
    getElement() {
        return this._element;
    }
    /**
     * appendTo
     * @param {Component|string} telement
     */
    appendTo(telement) {
        if (telement instanceof Component) {
            this._element.appendTo(telement.getElement());
        }
        else {
            this._element.appendTo(telement);
        }
    }
    /**
     * append
     * @param {Component|string} telement
     */
    append(telement) {
        if (telement instanceof Component) {
            this._element.append(telement.getElement());
        }
        else {
            this._element.append(telement);
        }
    }
    /**
     * addClass
     * @param {string} aclass
     */
    addClass(aclass) {
        this._element.addClass(aclass);
    }
    /**
     * Remove all elements from element
     */
    empty() {
        this._element.empty();
    }
    /**
     * Is an element empty?
     * @param {JQuery<HTMLElement>} element
     * @returns {boolean}
     */
    static isEmpty(element) {
        let tElement = element;
        if (tElement instanceof Component) {
            tElement = tElement.getElement();
        }
        if (tElement.has('*').length > 0) {
            return false;
        }
        const tmp = tElement.html();
        return tmp.length === 0;
    }
}
exports.Component = Component;
