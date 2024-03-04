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
     * Fetches all posts with optional pagination and public filter.
     *
     * @param {number} page - The current page of posts to fetch.
     * @param {number} limit - The number of posts to fetch per page.
     * @returns {Promise} A promise that resolves with the response containing the posts.
     */
    static getAllPosts = (page, limit) =>
        axios.get(`/posts/all?page=${page}&limit=${limit}&public=0`);

    /**
     * Adds or removes a like for a post identified by its ID.
     *
     * @param {string} id - The ID of the post to add/remove a like.
     * @returns {Promise} A promise that resolves with the response of the like operation.
     */
    static addLike = (id) => axios.post(`/likes/addRemove/${id}`);

    /**
     * Removes a post identified by its ID.
     *
     * @param {string} id - The ID of the post to be removed.
     * @returns {Promise} A promise that resolves with the response of the delete operation.
     */
    static removePost = (id) => axios.delete(`/posts/${id}`);

    /**
     * Creates a new post with the provided data.
     *
     * @param {Object} body - The data for the new post.
     * @returns {Promise} A promise that resolves with the response of the create operation.
     */
    static createNewPost = (body) => axios.post('/posts/add', body);

    /**
     * Fetches a single post identified by its ID.
     *
     * @param {string} id - The ID of the post to fetch.
     * @returns {Promise} A promise that resolves with the response containing the post.
     */
    static getSinglePost = (id) => axios.get(`/posts/${id}`);
}

// Export PostsService for accessibility throughout the application
export default PostsService;
