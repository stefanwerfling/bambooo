import {Sidebar} from './Sidebar';
import {SidebarMenuItem} from './SidebarMenuItem';

export class SidebarMenu {

    /**
     * Nav element
     * @protected
     */
    protected _navElement: JQuery;

    /**
     * ul element
     * @protected
     */
    protected _ulElement: JQuery;

    /**
     * Items
     * @protected
     */
    protected _items: SidebarMenuItem[] = [];

    /**
     * Constructor
     * @param {Sidebar} sidebar
     */
    public constructor(sidebar: Sidebar) {
        this._navElement = jQuery('<nav class="mt-2" />').appendTo(sidebar.getElement());
        this._ulElement = jQuery('<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" />').appendTo(this._navElement);
    }

    /**
     * Get nav element
     * @return {JQuery}
     */
    public getNavElement(): JQuery {
        return this._navElement;
    }

    /**
     * Get ul element
     * @return {JQuery}
     */
    public getUlElement(): JQuery {
        return this._ulElement;
    }

    /**
     * Add menu item
     * @param {SidebarMenuItem} menuItem
     */
    public addMenuItem(menuItem: SidebarMenuItem): void {
        this._items.push(menuItem);
    }

    /**
     * Get menu item by name
     * @param {string} name
     * @return {SidebarMenuItem|null}
     */
    public getMenuItem(name: string): SidebarMenuItem|null {
        for (const item of this._items) {
            if (item.getName() === name) {
                return item;
            }
        }

        return null;
    }

    /**
     * initTreeview
     */
    public initTreeview(): void {
        const oscontent = this._navElement.parent().find('.os-content');

        if (oscontent.length > 0) {
            this._navElement.detach().appendTo(oscontent);
        }

        if (typeof (this._ulElement as any).Treeview === 'function') {
            (this._ulElement as any).Treeview();
        }
    }
}