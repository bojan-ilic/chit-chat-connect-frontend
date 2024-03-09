// Import 'useState' and 'useEffect' hooks from React for state management and side effects
import { useEffect, useState } from 'react';
// Import 'useSearchParams' hook from react-router-dom for managing URL search parameters
import { useSearchParams } from 'react-router-dom';
// Import 'useDispatch' and 'useSelector' hooks from react-redux for dispatching actions and selecting state
import { useDispatch, useSelector } from 'react-redux';
// Import 'PostsService' for making API calls related to posts
import PostsService from '../../services/postsService';
// Import 'storeAllPosts' action from 'postsSlice' for storing fetched posts in Redux store
import { storeAllPosts } from '../../store/postsSlice';
// Import 'PageLoaderAnimation' component to display a loading animation
import PageLoaderAnimation from '../../components/PageLoaderAnimation/PageLoaderAnimation';
// Import 'PostCard' component to display individual posts
import PostCard from '../../components/PostCard/PostCard';
// Import 'toast' from react-toastify for displaying notifications
import { toast } from 'react-toastify';
// Import 'Pagination' component for navigating through post pages
import Pagination from '../../components/Pagination/Pagination';
// Import 'PostSearch' component for searching posts
import PostSearch from '../../components/PostSearch/PostSearch';
// Import 'CreatePost' component for creating a new post
import CreatePost from '../../components/CreatePost/CreatePost';

/**
 * Posts.jsx
 *
 * Posts page component for displaying, searching, and creating posts.
 * This component fetches and displays posts, provides a search functionality, and allows for the creation of new posts.
 * It interacts with the Redux store and the backend through PostsService to manage post data.
 *
 * @returns {JSX.Element} The Posts page with a list of posts, search functionality, and a post creation form.
 */
const Posts = () => {
    // State for managing the loading state of post fetching
    const [isLoading, setIsLoading] = useState(true);

    // Hook for accessing and setting search parameters in the URL
    const [searchParams, setSearchParams] = useSearchParams();

    // Convert 'searchParams' to string for dependency tracking
    const searchParamsString = searchParams.toString();

    // State for storing the current search query
    const [searchQuery, setSearchQuery] = useState('');

    // Hook for dispatching actions to the Redux store
    const dispatch = useDispatch();

    // Access the posts state from the Redux store
    const { posts, removePost, addRemoveLike, createNewPost } = useSelector(
        (state) => state.postsStore,
    );

    // Hook for fetching posts based on search query or page changes
    useEffect(() => {
        const fetchPosts = async () => {
            // Get current page and limit from URL, with defaults
            const page = searchParams.get('page')
                ? searchParams.get('page')
                : 1;
            const limit = searchParams.get('limit')
                ? searchParams.get('limit')
                : 9;

            try {
                let res;
                // Check if there is a search query
                if (searchQuery) {
                    // Fetch posts matching search query
                    res = await PostsService.searchPosts(searchQuery);
                    // Dispatches an action to the Redux store to update the state with the search results
                    dispatch(
                        storeAllPosts({
                            posts: res.data.data, // Stores the array of posts returned from the search
                            count: res.data.data.length, // Sets the count based on the number of posts returned from the search
                        }),
                    );
                } else {
                    // Fetch all posts for the current page
                    res = await PostsService.getAllPosts(page, limit);
                    // Dispatches an action to the Redux store to update the state with the fetched posts
                    dispatch(
                        storeAllPosts({
                            posts: res.data.data.posts, // Stores the array of posts returned from the general fetch operation
                            count: res.data.data.count, // Sets the count based on the total number of posts available, as returned from the backend
                        }),
                    );
                }
                // Display success message
                toast.success('Posts fetched successfully');
            } catch (error) {
                // Handle fetch errors
                console.error('Failed to fetch posts:', error);
                toast.error('Failed to fetch posts');
            } finally {
                // Ensure loading state is false after fetch completion
                setIsLoading(false);
            }
        };

        // Invoke the 'fetchPosts' function to either fetch all posts or search for posts based on 'searchQuery'
        fetchPosts();

        // The useEffect hook's dependency array; the effect re-runs if any of these values change
    }, [
        dispatch, // Redux's dispatch function, used to send actions to the store
        removePost, // Action for removing a post, re-fetch if a post is removed
        addRemoveLike, // Action for adding/removing a like, re-fetch if likes change
        searchParamsString, // Search parameters as a string, re-fetch if search parameters change
        createNewPost, // Action for creating a new post, re-fetch if a new post is added
        searchQuery, // The current search query, re-fetch if the search query changes
    ]);

    return (
        // Main container for posts and sidebar
        <div className="mt-[30px] flex gap-5">
            {/*Container for posts, taking up 70% width*/}
            <div className="w-[70%]">
                {isLoading ? (
                    // Displays loading animation if posts are still fetching
                    <PageLoaderAnimation />
                ) : (
                    <>
                        <div className="grid grid-cols-3 gap-3">
                            {/* Maps over each post and returns a 'PostCard' component */}
                            {posts.map((post) => {
                                return <PostCard key={post._id} post={post} />;
                            })}
                        </div>
                        {/*Pagination component below the posts*/}
                        <Pagination />
                    </>
                )}
            </div>

            {/* Sidebar container, taking up 30% width */}
            <div className="w-[30%]">
                {/* Search component to filter posts */}
                <PostSearch setSearchQuery={setSearchQuery} />
                {/*Component to create a new post*/}
                <CreatePost />
            </div>
        </div>
    );
};

// Export Posts page component for accessibility throughout the application
export default Posts;
