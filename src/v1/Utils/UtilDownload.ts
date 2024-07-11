/**
 * UtilDownload
 */
export class UtilDownload {

    /**
     * Create an action to download a file
     * @param {string} url
     * @param {string} filename
     */
    public static download(url: string, filename: string): void {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
    }
}