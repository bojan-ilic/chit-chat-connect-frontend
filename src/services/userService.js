// Import axios for HTTP request functionality with RESTful APIs
import axios from 'axios';

/**
 * UserService module
 *
 * This module provides static methods for user authentication tasks,
 * including user registration and login. It leverages axios for HTTP
 * requests to communicate with the authentication endpoints of the backend.
 */
class UserService {
    /**
     * Registers a new user
     *
     * @param {Object} body - The user data to be sent for registration.
     * @returns {Promise} A promise that resolves with the response of the registration request.
     */
    static registerUser = (body) => axios.post('/auth/register', body);

    /**
     * Logs in a user
     *
     * @param {Object} body - The credentials of the user attempting to log in.
     * @returns {Promise} A promise that resolves with the response of the login request.
     */
    static loginUser = (body) => axios.post('/auth/login', body);
}

// Export UserService for accessibility throughout the application
export default UserService;
