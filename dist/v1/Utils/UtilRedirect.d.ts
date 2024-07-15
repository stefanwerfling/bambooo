/**
 * UtilRedirect
 */
export declare class UtilRedirect {
    /**
     * Redirect to an url
     * @param {string} url
     */
    static redirect(url: string): void;
    /**
     * Redirect to a default login page
     * @param {string} loginUrl - Default '/login.html'
     */
    static toLogin(loginUrl?: string): void;
}
