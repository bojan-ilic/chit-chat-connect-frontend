// Import the configureStore function from Redux Toolkit for setting up the Redux store
import { configureStore } from '@reduxjs/toolkit';

// Import the userSlice reducer from the userSlice file to manage user-related state and actions in the Redux store
import userSlice from './userSlice';

// Import the postsSlice reducer from the postsSlice file to manage post-related state and actions in the Redux store
import postsSlice from './postsSlice';

// Create the Redux store with userSlice and postsSlice as reducers to manage the application state
const store = configureStore({
    reducer: {
        userStore: userSlice, // userStore slice: Manages user-related state and actions using the userSlice reducer
        postsStore: postsSlice, // postsStore slice: Manages post-related state and actions using the postsSlice reducer
    },
});

/**
 * Redux Store
 *
 * Configured Redux store for managing the application state.
 * The store includes slices for user-related and post-related state management.
 * Provides a centralized data store for storing and updating the application state throughout the entire application.
 *
 * @type {Object}
 * @exports {Object} store - Configured Redux store for application-wide state management.
 */
export default store;
