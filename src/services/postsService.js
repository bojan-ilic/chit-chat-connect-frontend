// Import axios for HTTP request functionality with RESTful APIs
import axios from 'axios';

/**
 * PostsService module
 *
 * This module provides static methods for post management tasks,
 * including fetching posts, adding likes, removing posts, creating new posts,
 * and fetching a single post. It leverages axios for HTTP
 * requests to communicate with the post-related endpoints of the backend.
 */
class PostsService {
    /**
     * Fetches all posts with pagination and an optional filter for public posts.
     * This method performs a GET request to the `/posts/all` endpoint, including pagination parameters and an optional filter for public posts.
     * It is used to retrieve a paginated list of posts, with the ability to filter by public visibility.
     *
     * @param {number} page - The current page number for pagination.
     * @param {number} limit - The number of posts per page.
     * @returns {Promise} A promise that resolves with the response containing the paginated list of posts.
     */
    static getAllPosts = (page, limit) =>
        axios.get(`/posts/all?page=${page}&limit=${limit}&public=1`);

    /**
     * Searches for posts based on a search query.
     * This method performs a GET request to the `/posts/search` endpoint, including the search query in the URL.
     * It is used to dynamically search for posts that match the given query in their titles or bodies.
     *
     * @param {string} searchQuery - The query string to search for in post titles and bodies.
     * @returns {Promise} A promise that resolves with the response containing the matching posts.
     */
    static searchPosts = (searchQuery) =>
        axios.get(`/posts/search?searchQuery=${searchQuery}&public=1`);

    /**
     * Adds or removes a like for a post by its ID.
     * This method performs a POST request to the `/likes/addRemove/${id}` endpoint, where the ID is the identifier of the post.
     * It is used to toggle a like for a specific post, adding or removing the user's like based on its current state.
     *
     * @param {string} id - The ID of the post to toggle a like.
     * @returns {Promise} A promise that resolves with the response of the like operation.
     */
    static addLike = (id) => axios.post(`/likes/addRemove/${id}`);

    /**
     * Removes a post by its ID.
     * This method performs a DELETE request to the `/posts/${id}` endpoint, where the ID is the identifier of the post to be removed.
     * It is used to delete a specific post from the database.
     *
     * @param {string} id - The ID of the post to be removed.
     * @returns {Promise} A promise that resolves with the response of the delete operation.
     */
    static removePost = (id) => axios.delete(`/posts/${id}`);

    /**
     * Creates a new post with the provided data.
     * This method performs a POST request to the `/posts/add` endpoint, including the data for the new post in the request body.
     * It is used to create a new post in the database with the given title, body, and other relevant data.
     *
     * @param {Object} body - The data for the new post, including title, body, etc.
     * @returns {Promise} A promise that resolves with the response of the create operation.
     */
    static createNewPost = (body) => axios.post('/posts/add', body);

    /**
     * Fetches a single post identified by its ID.
     * This method performs a GET request to the `/posts/${id}` endpoint, where the ID is the identifier of the desired post.
     * It is used to retrieve detailed information about a specific post, including its title, body, likes, and comments.
     *
     * @param {string} id - The ID of the post to fetch.
     * @returns {Promise} A promise that resolves with the response containing the detailed information of the post.
     */
    static getSinglePost = (id) => axios.get(`/posts/${id}`);
}

// Export PostsService for accessibility throughout the application
export default PostsService;
