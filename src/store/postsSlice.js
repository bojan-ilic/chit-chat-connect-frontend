// Import the createSlice function from Redux Toolkit for defining state slices with reducers
import { createSlice } from '@reduxjs/toolkit';

/**
 * @module postsSlice
 * @description Redux slice managing the posts state in the Redux store.
 * A Redux slice is a segment of the application state with its own reducer functions.
 * The postsSlice handles actions related to posts, including storing all posts, removing a single post,
 * toggling likes, and creating new posts.
 */

// Define a postsSlice using createSlice from Redux Toolkit for managing the posts state in the Redux store
const postsSlice = createSlice({
    // Set the name of the slice to 'posts'
    name: 'posts',
    // Set the initial state with count, posts array, and flags for various post-related actions
    initialState: {
        count: null, // The count of total posts
        posts: [], // Array to store post data

        removePost: false, // Flag indicating whether a post removal action is triggered
        addRemoveLike: false, // Flag indicating whether a like toggle action is triggered
        createPostNew: false, // Flag indicating whether a new post creation action is triggered
    },
    // Reducers functions defining how the state should change
    reducers: {
        // storeAllPosts reducer: Updates state with all posts' count and array
        storeAllPosts: (state, action) => {
            state.count = action.payload.count;
            state.posts = action.payload.posts;
        },
        // removeSinglePost reducer: Toggles the removePost flag
        removeSinglePost: (state, action) => {
            state.removePost = !state.removePost;
        },
        // addRemoveLikeToggle reducer: Toggles the addRemoveLike flag
        addRemoveLikeToggle: (state, action) => {
            state.addRemoveLike = !state.addRemoveLike;
        },
        // createPost reducer: Toggles the createPostNew flag
        createPost: (state, action) => {
            state.createPostNew = !state.createPostNew;
        },
    },
});

/**
 * Export action creators for storeAllPosts, removeSinglePost, addRemoveLikeToggle, and createPost.
 * @type {Object}
 */
export const {
    storeAllPosts,
    removeSinglePost,
    addRemoveLikeToggle,
    createPost,
} = postsSlice.actions;

// Export the postsSlice reducer
export default postsSlice.reducer;
