// Import axios for HTTP request functionality with RESTful APIs
import axios from 'axios';

/**
 * CommentService module
 *
 * This module provides static methods for comment management tasks,
 * including adding, updating, removing comments, and fetching all comments for a post.
 * It leverages axios for HTTP requests to communicate with the comment-related endpoints of the backend.
 */
class CommentService {
    /**
     * Adds a new comment to a post.
     *
     * @param {Object} body - The comment data to be sent, including postId and the comment text.
     * @returns {Promise} A promise that resolves with the response of the add comment request.
     */
    static addNewComment = (body) => axios.post('/comments', body);

    /**
     * Removes an existing comment by its ID.
     *
     * @param {string} id - The ID of the comment to be removed.
     * @returns {Promise} A promise that resolves with the response of the delete comment request.
     */
    static removeOldComment = (id) => axios.delete(`/comments/${id}`);

    /**
     * Updates an existing comment by its ID.
     *
     * @param {Object} body - The updated data for the comment.
     * @param {string} id - The ID of the comment to be updated.
     * @returns {Promise} A promise that resolves with the response of the update comment request.
     */
    static updateComment = (body, id) => axios.put(`/comments/${id}`, body);

    /**
     * Fetches all comments for a specific post by the post's ID.
     *
     * @param {string} postId - The ID of the post to retrieve comments for.
     * @returns {Promise} A promise that resolves with the response containing the comments for the specified post.
     */
    static getAllCommentsForPost = (postId) =>
        axios.get(`/comments/all/${postId}`);
}

// Export CommentService for accessibility throughout the application
export default CommentService;
