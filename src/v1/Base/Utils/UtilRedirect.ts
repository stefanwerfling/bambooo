/**
 * UtilRedirect
 */
export class UtilRedirect {

    /**
     * Redirect to an url
     * @param {string} url
     */
    public static redirect(url: string): void {
        window.location.replace(url);
    }

    /**
     * Redirect to a default login page
     * @param {string} loginUrl - Default '/login.html'
     */
    public static toLogin(loginUrl: string = '/login.html'): void {
        UtilRedirect.redirect(loginUrl);
    }
}