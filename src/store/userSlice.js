// Import the createSlice function from Redux Toolkit for defining state slices with reducers
import { createSlice } from '@reduxjs/toolkit';

/**
 * @module userSlice
 * @description Redux slice managing the user state in the Redux store.
 * A Redux slice is a segment of the application state with its own reducer functions.
 * The userSlice handles actions related to user authentication, including login, logout, and restoration.
 */

// Define a userSlice using createSlice from Redux Toolkit for managing the user state in the Redux store
const userSlice = createSlice({
    // Set the name of the slice to 'user'
    name: 'user',
    // Set the initial state with an empty user object and a flag for login status
    initialState: {
        user: {}, // Empty object to store user information after login
        loginSuccess: false, // Flag to track login success
    },
    // Reducers functions defining how the state should change
    reducers: {
        // loginUser reducer: Updates state with user data and stores it in localStorage
        loginUser: (state, action) => {
            state.user = { ...action.payload };
            localStorage.setItem('sm_user', JSON.stringify(action.payload));
            state.loginSuccess = true; // Set 'loginSuccess' flag to true on login success
        },
        // restoreUser reducer: Maintains user authentication state across page reloads
        // or return visits by updating the state with persisted user data
        restoreUser: (state, action) => {
            state.user = action.payload;
        },
        // logoutUser reducer: Reset user state to an empty object and removes localStorage items, resets loginSuccess flag
        logoutUser: (state, action) => {
            state.user = {}; // Clear the user state, logging the user out
            localStorage.removeItem('sm_user'); // Remove user data from localStorage to clear session
            localStorage.removeItem('sm_token'); // Remove token from localStorage to end session
            state.loginSuccess = false; // Reset 'loginSuccess' flag on logout
        },
    },
});

/**
 * Export action creators for loginUser, restoreUser, and logoutUser.
 * @type {Object}
 */
export const { loginUser, restoreUser, logoutUser } = userSlice.actions;

// Export the userSlice reducer
export default userSlice.reducer;
