import { Sidebar } from './Sidebar';
export declare class SidebarUserPanel {
    private _divElement;
    private _image;
    private _username;
    constructor(sidebar: Sidebar);
    setImage(url: string): void;
    setUsername(username: string): void;
    render(): void;
}
