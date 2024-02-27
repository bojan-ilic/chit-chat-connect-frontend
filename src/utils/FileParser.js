/**
 * Utility function to parse a given file into a Data URL format.
 * This function is designed to facilitate the processing of files (e.g., images) by converting them into a format
 * that can be easily used within web applications, particularly for uploading and displaying file content.
 * It returns a promise that resolves with the content of the file as a Data URL, making it asynchronous in nature.
 *
 * @param {File} file - The file to be parsed. This should be a File object, typically obtained from an input element of type 'file'.
 * @return {Promise<string>} A promise that resolves with the content of the file as a Data URL, suitable for embedding within web pages.
 */

// Define and export a function that takes a file object and returns a promise resolving to a Data URL
export const FileParser = (file) => {
    // Return a new Promise object, managing the asynchronous operation of reading the file's content
    return new Promise((resolve, reject) => {
        // Instantiate a new FileReader
        const fileReader = new FileReader();

        // Determine file type and choose the appropriate method to read
        if (file.type.startsWith('image/')) {
            // For image files, read as data URL to easily display images
            fileReader.readAsDataURL(file);
        } else if (file.type.startsWith('text/')) {
            // For text files, read as text
            fileReader.readAsText(file);
        } else {
            // Reject unsupported file types
            reject(new Error('Unsupported file type'));
            return;
        }

        // Resolve the promise with the file's content upon successful reading
        fileReader.onload = () => resolve(fileReader.result);

        // Reject the promise on error
        fileReader.onerror = (error) => reject(error);
    });
};
