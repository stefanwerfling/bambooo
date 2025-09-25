import { Sidebar } from './Sidebar';
/**
 * SidebarUserPanelClickFn
 */
export type SidebarUserPanelClickFn = () => void;
/**
 * SidebarUserPanel
 */
export declare class SidebarUserPanel {
    /**
     * div element
     * @private
     */
    private _divElement;
    /**
     * image
     * @private
     */
    private _image;
    /**
     * username
     * @private
     */
    private _username;
    /**
     * Constructor
     * @param {Sidebar} sidebar
     */
    constructor(sidebar: Sidebar);
    /**
     * setImage
     * @param {string} url
     */
    setImage(url: string): void;
    /**
     * setUsername
     * @param {string} username
     */
    setUsername(username: string): void;
    /**
     * render
     */
    render(): void;
    /**
     * setOnClickFn
     * @param onClick
     */
    setOnClickFn(onClick: SidebarUserPanelClickFn): void;
}
