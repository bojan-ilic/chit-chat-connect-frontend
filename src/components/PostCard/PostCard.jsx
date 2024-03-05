// Import moment for date formatting
import moment from 'moment';
// Import icon for like action
import { AiFillLike } from 'react-icons/ai';
// Import icon for delete action
import { ImBin } from 'react-icons/im';
// Import the service for posts actions (like, delete)
import PostsService from '../../services/postsService';
// Import toast for displaying notifications
import { toast } from 'react-toastify';
// Import useDispatch to use Redux actions
import { useDispatch } from 'react-redux';
// Import specific actions from the posts slice
import { addRemoveLikeToggle, removeSinglePost } from '../../store/postsSlice';
// Import the visibility icon for detail view action
import { MdVisibility } from 'react-icons/md';
// Import Link from React Router for route-based navigation without full page reloads
import { Link } from 'react-router-dom';

/**
 * Card component for displaying individual posts.
 *
 * Renders a post's image, author, creation date, tags, title, body snippet,
 * and actions for liking or deleting the post. Utilizes async functions for
 * interaction with the posts service and dispatches redux actions based on outcomes.
 *
 * @returns {React.Component} A styled card component containing the post's details and interactive elements.
 * @type {React.FC}
 */

// The Card component definition
const PostCard = ({ post }) => {
    // Retrieve user data from local storage
    const user = JSON.parse(localStorage.getItem('sm_user'));
    // Initialize useDispatch hook for action dispatching
    const dispatch = useDispatch();

    // Async function to handle like action
    const handleAddLike = async () => {
        try {
            await PostsService.addLike(post._id); // Call the service to like a post
            dispatch(addRemoveLikeToggle()); // Dispatch a Redux action to toggle the like status
            toast.success('Post has been liked successfully.'); // Shows a success message
        } catch (err) {
            console.error(err); // Log any error to the console
            toast.error('Failed to like the post. Please try again later.'); // Shows an error message
        }
    };

    // Async function to handle post deletion
    const handleRemovePost = async () => {
        try {
            await PostsService.removePost(post._id); // Call the service to delete a post
            toast.success('Post deleted successfully'); // Show a success message
            dispatch(removeSinglePost()); // Dispatch a Redux action to remove the post from the state
        } catch (err) {
            console.error(err); // Log any error to the console
            toast.error('Failed to delete the post. Please try again later.'); // Show an error message
        }
    };

    return (
        <div className="border-primary flex flex-col overflow-hidden rounded-lg border">
            {/* Post image section */}
            <div className="relative">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-20 transition-all hover:opacity-0"></div>
                <img
                    src={post.image}
                    alt="card-img"
                    className="h-[150px] w-full object-cover"
                />
                <h3 className="absolute left-[10px] top-[5px] text-white">
                    {post.user.firstName} {post.user.lastName}
                </h3>
                <p className="absolute left-[10px] top-[22px] text-white">
                    {moment(post.createdAt).format('dddd, Ah')}
                </p>
                <Link to={`/detailPost/${post._id}`}>
                    <MdVisibility className="absolute right-[5px] top-[5px] cursor-pointer text-2xl text-white" />
                </Link>
            </div>

            {/* Content section */}
            <div className="flex grow flex-col justify-between p-[7px]">
                {/* Post tags */}
                <ul className="flex gap-1">
                    {post.tags.map((tag, i) => (
                        <li key={i} className="text-gray-600">
                            #{tag.name}
                        </li>
                    ))}
                </ul>
                {/* Post title */}
                <h4 className="font-bold">{post.title}</h4>
                {/* Displays a snippet of the post body, limiting it to 50 characters for a brief preview */}
                <p>{post.body.substring(0, 50)}...</p>

                {/* Action buttons for liking and deleting the post */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-[2px]">
                        <AiFillLike
                            className="text-primary cursor-pointer text-[20px]"
                            onClick={handleAddLike}
                        />
                        <span
                            className={
                                // 'usersId': An array of user IDs who have liked the post, used to check if the current user has liked the post
                                // 'likeInfo': Like details including user IDs and names, for like counts and status
                                // 'user': Represents the currently logged-in user, used to check if this user has liked the post
                                post.likeInfo?.usersId.includes(user._id)
                                    ? 'text-[17px] text-red-400'
                                    : 'text-primary text-[17px]'
                            }
                        >
                            {/* 'users': Represents the total count of users who have liked the post */}
                            {post.likeInfo?.users.length}
                        </span>
                    </div>

                    {/* 'user': Represents the currently logged-in user, used to check if this user has liked the post */}
                    {/* Check if the post was created by the currently logged-in user to display the delete option */}
                    {post.user._id === user._id && (
                        <div className="flex items-center gap-[2px]">
                            <ImBin
                                className="cursor-pointer text-red-700"
                                onClick={handleRemovePost}
                            />
                            <span className="text-red-700">Remove</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Export PostCard component for accessibility throughout the application
export default PostCard;
