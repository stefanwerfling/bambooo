define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * NavTab
     */
    class NavTab extends Element_1.Element {
        /**
         * constructor
         * @param element
         * @param id
         */
        constructor(element, id) {
            super();
            /**
             * tab ids
             * @protected
             */
            this._tabIds = [];
            const aelement = this._getAnyElement(element);
            this._nav = jQuery(`<ul class="nav nav-tabs" id="${id}" role="tablist" />`).appendTo(aelement);
            this._body = jQuery('<div class="tab-content" id="${id}-tabContent" />').appendTo(aelement);
        }
        /**
         * addTab
         * @param title
         * @param id
         */
        addTab(title, id) {
            let activ = '';
            let show = '';
            if (this._tabIds.length == 0) {
                activ = 'active';
                show = 'show';
            }
            this._tabIds.push(id);
            const li = jQuery('<li class="nav-item" />').appendTo(this._nav);
            li.append(`<a class="nav-link ${activ}" id="${id}-tab" data-toggle="pill" href="#${id}-content" role="tab" aria-controls="${id}-content" aria-selected="true">${title}</a>`);
            const body = jQuery(`<div class="tab-pane fade ${activ} ${show}" id="${id}-content" role="tabpanel" aria-labelledby="${id}-tab"/>`).appendTo(this._body);
            return {
                tab: li,
                body
            };
        }
        /**
         * setTabSelect
         * @param index
         */
        setTabSelect(index) {
            this._nav.find('a').each((tindex, telement) => {
                if (index === tindex) {
                    // @ts-ignore
                    jQuery(telement).tab('show');
                }
            });
        }
    }
    exports.NavTab = NavTab;
});
//# sourceMappingURL=NavTab.js.map