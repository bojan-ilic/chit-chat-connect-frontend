// Import axios for HTTP request functionality with RESTful APIs
import axios from 'axios';

/**
 * TagsService module
 *
 * This module provides static methods for tag management tasks, including fetching all tags.
 * It utilizes axios for HTTP requests to communicate with the tag-related endpoints of the backend.
 */

class TagsService {
    /**
     * Fetches all tags.
     *
     * This method retrieves a list of all tags from the backend, which can be used for categorizing posts or content.
     * @returns {Promise} A promise that resolves with the response containing all tags.
     */
    static getAllTags = () => axios.get('/tags');
}

// Export TagsService for accessibility throughout the application
export default TagsService;
