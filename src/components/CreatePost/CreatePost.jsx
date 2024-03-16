// Import 'useState' and 'useEffect' hooks from React for state management and side effects
import { useEffect, useState } from 'react';
// Import useDispatch hook for dispatching actions to the Redux store
import { useDispatch } from 'react-redux';
// Import TagsService to fetch available tags from the backend
import TagsService from '../../services/tagsService';
// Import 'toast' from react-toastify for displaying notifications
import { toast } from 'react-toastify';
// Import 'useFormik' hook for form management and validation
import { useFormik } from 'formik';
// Import 'Yup' for building the object schema for validation
import * as Yup from 'yup';
// Import 'FileParser' utility to parse the selected image file
import { FileParser } from '../../utils/FileParser';
// Import 'PostsService' for making API requests related to posts
import PostsService from '../../services/postsService';
// Import 'createPost' action to update the store after creating a post
import { createPost } from '../../store/postsSlice';

/**
 * CreatePost.jsx
 *
 * The CreatePost component allows users to create new posts with a title, body, tags, and an image.
 * It leverages useFormik for form management and validation, communicates with backend services for data submission,
 * and uses toast notifications for feedback.
 *
 * @returns {JSX.Element} A form for creating a new post.
 */
const CreatePost = () => {
    // State to store the list of all tags fetched from the backend
    const [allTags, setAllTags] = useState([]);

    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Retrieve the current user from local storage
    let user = JSON.parse(localStorage.getItem('sm_user'));

    // Define valid image types for the image upload
    const VALID_TYPE = ['image/jpeg', 'image/png', 'image/jpg'];
    // Define size constants for image validation
    let KB = 1024;
    let MB = KB * KB;

    // useEffect hook to fetch tags from the backend on component mount
    useEffect(() => {
        const fetchTags = async () => {
            try {
                // Await the fetching of tags and update state
                const res = await TagsService.getAllTags();
                setAllTags(res.data.data);
            } catch (err) {
                // Log error and display error message if fetching fails
                console.error('Failed to fetch tags:', err);
                toast.error('Failed to fetch tags');
            }
        };

        // Invoke the fetchTags function
        fetchTags();
    }, []); // Empty dependency array means this effect runs once on mount

    // Initialize 'formik' for form management with initial values and validation schema
    const formik = useFormik({
        // Define the initial values for the form fields, setting up a structure for the post creation form
        initialValues: {
            title: '',
            body: '',
            tags: [],
            image: '',
        },
        // Define the validation schema using Yup
        validationSchema: Yup.object({
            title: Yup.string().required('Please enter the title of your post'),
            body: Yup.string().required(
                'Please provide some details for your post',
            ),
            tags: Yup.array()
                .min(1, 'At least one tag is required to categorize your post')
                .required('Please select at least one tag'),
            image: Yup.mixed()
                .required('An image is necessary for creating a post')
                .test(
                    'fileSize',
                    'The image exceeds the 2MB size limit',
                    (value) => value.size < MB * 2,
                )
                .test(
                    'fileType',
                    'Please use either JPEG, PNG, or JPG formats',
                    (value) => VALID_TYPE.includes(value.type),
                ),
        }),
        // Async function to handle form submission
        onSubmit: async (values) => {
            try {
                // Convert each tag to an object with a name property
                const formattedTags = values.tags.map((tag) => ({ name: tag }));

                // Convert the image file into a format suitable for upload
                const parsedImage = await FileParser(values.image);

                // Create the new post with the parsed image and formatted tags
                await PostsService.createNewPost({
                    ...values, // Copy all input fields from the form into the new post data
                    tags: formattedTags, // Add a list of tags chosen for the post
                    image: parsedImage, // Attach the image file converted to a suitable format
                    userId: user._id, // Link the post to the user who created it
                });

                // Dispatch action to update Redux store and show success message
                dispatch(createPost());
                toast.success('Post created successfully');
            } catch (error) {
                // Log error and show error message if submission fails
                console.error('Error:', error);
                toast.error('Failed to create post');
            }

            // Reset form fields after submission
            formik.resetForm();
        },
    });

    // Helper function to display form field errors
    const showError = (name) =>
        formik.errors[name] && formik.touched[name] && formik.errors[name];

    // Render the form for creating a new post
    return (
        // Main container for the create post form
        <div className="border-primary mt-[20px] rounded-lg border px-2.5 py-5">
            {/* Title for the create post form */}
            <h2 className="mb-[10px] text-center font-bold text-gray-600 ">
                Create A Memory
            </h2>

            <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-3"
            >
                {/* Container for the 'title' input */}
                <div className="flex flex-col">
                    <label className="text-[14px] text-gray-600 ">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        placeholder="Insert Title"
                        className="rounded-md border px-[14px] py-[8px] placeholder:text-[14px]"
                    />
                    {/* Display validation error for the 'title' field */}
                    {showError('title') && (
                        <p className="text-xs italic text-red-500">
                            {showError('title')}
                        </p>
                    )}
                </div>

                {/* Container for the 'body' textarea */}
                <div className="flex flex-col">
                    <label className="text-[14px] text-gray-600">Body:</label>
                    <textarea
                        name="body"
                        value={formik.values.body}
                        onChange={formik.handleChange}
                        placeholder="Insert Message"
                        className="rounded-md border px-[14px] py-[8px] placeholder:text-[14px]"
                    />
                    {/* Display validation error for the 'body' field */}
                    {showError('body') && (
                        <p className="text-xs italic text-red-500">
                            {showError('body')}
                        </p>
                    )}
                </div>

                {/* Container for the 'tags' selection */}
                <div className="flex flex-col">
                    <label className="text-[14px] text-gray-600">Tags:</label>
                    <div className="mb-[10px] grid grid-cols-3 gap-2">
                        {/* Map over 'allTags' and create a checkbox for each */}
                        {allTags.map((tag, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex items-center gap-1 rounded-md bg-gray-300 p-[5px]"
                                >
                                    <input
                                        type="checkbox"
                                        name="tags"
                                        value={tag.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    <p>#{tag.name}</p>
                                </div>
                            );
                        })}
                    </div>
                    {/* Display validation error for the 'tags' field */}
                    {showError('tags') && (
                        <p className="text-xs italic text-red-500">
                            {showError('tags')}
                        </p>
                    )}
                </div>

                {/* Container for the 'image' upload input */}
                <div className="flex flex-col">
                    <label className="text-[14px] text-gray-600">Image:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={(e) =>
                            formik.setFieldValue(
                                e.target.name,
                                e.target.files[0],
                            )
                        }
                    />
                    {/* Display validation error for the 'image' field */}
                    {showError('image') && (
                        <p className="text-xs italic text-red-500">
                            {showError('image')}
                        </p>
                    )}
                </div>

                {/* Button to 'submit' the form */}
                <button className="bg-primary rounded-lg p-[10px] text-white">
                    Create Post
                </button>

                {/* Button to 'clear' the form */}
                <button className="bg-warning rounded-lg p-[10px] text-white">
                    Clear
                </button>
            </form>
        </div>
    );
};

// Export CreatePost component for accessibility throughout the application
export default CreatePost;
