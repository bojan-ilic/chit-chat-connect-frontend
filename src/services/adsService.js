// Import axios for HTTP request functionality with RESTful APIs
import axios from 'axios';

/**
 * AdsService module
 *
 * This module provides static methods for advertisement management tasks,
 * including fetching all advertisements, adding new advertisements, initializing payment for advertisements,
 * and deleting advertisements. It leverages axios for HTTP requests to communicate with the advertisement endpoints of the backend.
 */
class AdsService {
    /**
     * Fetches all advertisements.
     *
     * This method retrieves a list of all advertisements from the backend,
     * which can be displayed to the users.
     * @returns {Promise} A promise that resolves with the response containing all advertisements.
     */
    static getAllAds = () => axios.get('/ads');

    /**
     * Adds a new advertisement.
     *
     * @param {Object} body - The advertisement data to be sent for creation.
     * @returns {Promise} A promise that resolves with the response of the add advertisement request.
     */
    static addAd = (body) => axios.post('/ads', body);

    /**
     * Initializes payment for an advertisement.
     *
     * @param {Object} body - The payment initialization data for the advertisement.
     * @returns {Promise} A promise that resolves with the response of the payment initialization request.
     */
    static paymentInit = (body) => axios.post('/ads/paymentInit', body);

    /**
     * Deletes an advertisement by its ID.
     *
     * @param {string} id - The ID of the advertisement to be deleted.
     * @returns {Promise} A promise that resolves with the response of the delete advertisement request.
     */
    static deleteAd = (id) => axios.delete(`/ads/${id}`);
}

// Export AdsService for accessibility throughout the application
export default AdsService;
