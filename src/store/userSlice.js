// Import the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

/**
 * @module userSlice
 * @description Redux slice managing the user state in the Redux store.
 */

/**
 * @module userSlice
 * @description Redux slice managing the authenticated user's state in the application.
 * A Redux slice represents a portion of the application state with its own reducer functions.
 * The userSlice handles actions related to user authentication, including login, logout, and restoration.
 */

// Define a userSlice using createSlice
const userSlice = createSlice({
    // Slice name: 'user'
    name: 'user',
    // Initial state with an empty user object
    initialState: {
        user: {},
    },
    // Reducers functions defining how the state should change
    reducers: {
        // loginUser reducer: updates state with user data and stores it in localStorage
        loginUser: (state, action) => {
            state.user = { ...action.payload };
            localStorage.setItem('sm_user', JSON.stringify(action.payload));
        },
        // restoreUser reducer: Maintains user authentication state across page reloads
        // or return visits by updating the state with persisted user data
        restoreUser: (state, action) => {
            state.user = action.payload;
        },
        // logoutUser reducer: reset user state to an empty object and removes localStorage items
        logoutUser: (state, action) => {
            state.user = {};
            localStorage.removeItem('sm_user');
            localStorage.removeItem('sm_token');
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
