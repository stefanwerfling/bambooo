/**
 * LeftNavbar
 */
export class LeftNavbar {

    /**
     * entries
     * @private
     */
    private _entries = [
        {
            title: 'Home',
            link: '/index.html'
        }
    ];

    /**
     * element
     * @private
     */
    private _element: any;

    /**
     * constructor
     * @param element
     */
    public constructor(element?: any) {
        if (element) {
            this._element = jQuery('<ul class="navbar-nav" />').appendTo(element);
        } else {
            throw Error('left navbar element not found!');
        }
    }

    /**
     * getElement
     */
    public getElement(): any {
        return this._element;
    }

    /**
     * load
     */
    public load(): void {
        for (const entry of this._entries) {
            jQuery('#ccc_navbar').append(
                `<li class="nav-item d-none d-sm-inline-block">
                  <a href="${entry.link}" class="nav-link">${entry.title}</a>
                </li>`
            );
        }
    }

}