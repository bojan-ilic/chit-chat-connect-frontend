// Import useNavigate hook from React-router-dom for navigation post-login
import { useNavigate } from 'react-router-dom';

// Import useState hook from React for managing component state
import { useState } from 'react';

// Import useDispatch hook from React Redux for dispatching actions
import { useDispatch } from 'react-redux';

// Import Formik library for building forms in React, providing utilities for form handling, validation, and submission
import { useFormik } from 'formik';

// Import loginUser action from the user slice for Redux state management
import { loginUser } from '../../store/userSlice';

// Import Yup library for schema-based form value validation
import * as Yup from 'yup';

// Import UserService for making API calls for login functionality
import UserService from '../../services/userService';

// Import toast from react-toastify for displaying notifications
import { toast } from 'react-toastify';

// Import the cover image for the login page
import LoginPageCover from '../../assets/Login-page.png';

// Import TitleHeader component for displaying the login page title
import TitleHeader from '../../components/TitleHeader/TitleHeader';

// Import AuthRedirectMessage for displaying a redirect message for authentication
import AuthRedirectMessage from '../../components/AuthRedirectMessage/AuthRedirectMessage';

// Import PageLoaderAnimation component for displaying a loading animation during form submission
import PageLoaderAnimation from '../../components/PageLoaderAnimation/PageLoaderAnimation';

// Import MdVisibilityOff and MdVisibility from react-icons/md for password visibility toggle
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';

/**
 * Login component for handling user authentication in a React application.
 * It uses Formik for form management, Yup for validation, and integrates with Redux for state management and react-router-dom for navigation.
 * It renders a form for user login, displays validation messages, and manages the login process.
 *
 * @returns {React.Component} A JSX component rendering the login form and associated UI elements.
 */
const Login = () => {
    // Access Redux's dispatch function
    const dispatch = useDispatch();
    // Navigate to different routes after actions
    const navigate = useNavigate();

    // State for managing loading indicator visibility
    const [isLoading, setIsLoading] = useState(false);
    // State for toggling password visibility
    const [passwordVisible, setPasswordVisible] = useState(true);

    // Toggle the password visibility state
    const handleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Initialize Formik for form handling
    const formik = useFormik({
        // Set initial values for form fields to empty strings
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address') // Email must be a valid email format
                .required('Email is required'), // Email is required
            password: Yup.string().required('Password is required'), // Password is required
        }),
        // Handle form submission including validation, login attempt, and post-login behavior
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await UserService.loginUser(values); // Attempt to log with provided credentials
                if (response.status === 200) {
                    setIsLoading(true); // Only show loader after confirming login success to enhance user feedback
                    toast.success('User successfully logged in'); // Display success toast message
                    localStorage.setItem('sm_token', response.data.token); // Store session token
                    dispatch(loginUser(response.data.user)); // Dispatch user data to Redux store for global state management
                    setTimeout(() => {
                        navigate('/'); // Navigate to homepage after a short delay
                        setIsLoading(false); // Hide loader after navigation to ensure it's only visible during the login process
                    }, 2000); // Redirect to home page after 2 seconds
                } else {
                    toast.warning('User not logged in'); // Show warning if login fails
                }
            } catch (error) {
                toast.error('An error occurred. Please try again.'); // Show error message on failure
            } finally {
                setSubmitting(false); // Reset form submission state to allow for new submissions
            }
        },
    });

    // Define a function to return the error message for a field if it has been touched and has errors
    const showError = (name) =>
        formik.errors[name] && formik.touched[name] && formik.errors[name];

    return (
        <>
            {/* Show loader animation when isLoading is true */}
            {isLoading && <PageLoaderAnimation />}
            <div className="mb-[23px] mt-[15px] grid grid-cols-1 lg:mt-[53px] lg:grid-cols-2 lg:gap-2">
                {/* Cover image for the login page */}
                <div className="hidden lg:block">
                    <img
                        src={LoginPageCover}
                        className="w-full object-cover"
                        alt="Login page cover"
                    />
                </div>
                <div className="lg:ml-[26px]">
                    {/* Display the page title */}
                    <TitleHeader title="Login" />
                    <div className="border-primary mt-[52px] w-full rounded-lg border-[0.5px]">
                        {/* Formik form for login */}
                        <form
                            onSubmit={formik.handleSubmit}
                            className=" mx-auto mt-[14px] flex flex-col p-[26px]"
                        >
                            {/* Email input field */}
                            <div className="mt-[10px]">
                                <label className="text-[15px] text-gray-600">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Insert email"
                                    className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                />
                                <p className="text-xs italic text-red-500">
                                    {showError('email')}
                                </p>
                            </div>

                            {/* Password input field */}
                            <div className="relative mt-[26px] ">
                                <label className="text-[15px] text-gray-600">
                                    Password:
                                </label>
                                <div className="flex w-full flex-row-reverse items-center">
                                    <input
                                        name="password"
                                        type={
                                            passwordVisible
                                                ? 'password'
                                                : 'text'
                                        }
                                        placeholder="Insert password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                    />
                                    {passwordVisible ? (
                                        <MdVisibility
                                            onClick={handleVisibility}
                                            className="absolute mr-3 cursor-pointer text-lg"
                                        />
                                    ) : (
                                        <MdVisibilityOff
                                            onClick={handleVisibility}
                                            className="absolute mr-3 cursor-pointer text-lg"
                                        />
                                    )}
                                </div>
                                <p className="text-xs italic text-red-500">
                                    {showError('password')}
                                </p>
                            </div>

                            {/* Submit button */}
                            <div className="mt-[26px]">
                                <button
                                    type="submit"
                                    className="bg-primary w-full rounded px-4 py-2 font-bold text-white hover:bg-blue-700"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Display a message for users to register if they don't have an account */}
                    <AuthRedirectMessage
                        message="Don't have an account?"
                        linkText="Click here to Register."
                        redirectTo="/register"
                    />
                </div>
            </div>
        </>
    );
};

// Export the Login component as the default export for use in other parts of the application
export default Login;
