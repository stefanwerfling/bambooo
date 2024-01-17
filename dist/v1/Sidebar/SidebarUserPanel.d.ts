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
     * constructor
     * @param sidebar
     */
    constructor(sidebar: Sidebar);
    /**
     * setImage
     * @param url
     */
    setImage(url: string): void;
    /**
     * setUsername
     * @param username
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
