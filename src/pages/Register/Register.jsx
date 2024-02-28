// Import React-router-dom's useNavigate hook for redirecting the user after successful registration
import { useNavigate } from 'react-router-dom';

// Import React's useState hook for managing the loading state (e.g., during form submission)
import { useState } from 'react';

// Import Formik library for building forms in React, providing utilities for form handling, validation, and submission
import { useFormik } from 'formik';

// Import Yup library for schema-based form value validation
import * as Yup from 'yup';

// Import Utility function for parsing files, used here for image uploads
import { FileParser } from '../../utils/FileParser';

// Import UserService for making API calls related to user actions like registration
import UserService from '../../services/userService';

// Import react-toastify for displaying toast notifications to the user
import { toast } from 'react-toastify';

// Import TitleHeader component, a reusable UI component for displaying the page title
import TitleHeader from '../../components/TitleHeader/TitleHeader';

// Import AuthRedirectMessage component, a reusable UI component for displaying a message with a link to redirect users (e.g., to the login page)
import AuthRedirectMessage from '../../components/AuthRedirectMessage/AuthRedirectMessage';

// Import static asset for the registration page cover image
import RegisterPageCover from '../../assets/Register-page.png';

// Import PageLoaderAnimation component for displaying a loading animation during form submission
import PageLoaderAnimation from '../../components/PageLoaderAnimation/PageLoaderAnimation';

/**
 *  Register.jsx
 *
 * Defines the Register component for user registration with form validation and submission.
 * Utilizes Formik for form handling, Yup for validation, integrates file parsing and API requests for user registration.
 *
 * @returns {React.Component} Renders the registration form with user details and image upload functionality.
 */

const Register = () => {
    // Initialize the 'navigate' function from useNavigate hook to enable navigation to different routes
    const navigate = useNavigate();

    // Define a state variable 'isLoading' to manage the display of loading indicators, initially set to false (not loading)
    const [isLoading, setIsLoading] = useState(false);

    // Constants for validating the file type and size
    const VALID_TYPE = ['image/jpeg', 'image/png', 'image/jpg'];
    let KB = 1024;
    let MB = KB * KB;

    // Initialize useFormik for form handling, including setting initial values, defining a validation schema using Yup, and handling form submission
    const formik = useFormik({
        // Set initial values for form fields to empty strings
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            image: '',
            birthDate: '',
        },
        // Define the form's validation schema using Yup to ensure all fields meet specified validation rules
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'), // First name must be a string and is required
            lastName: Yup.string().required('Last name is required'), // Last name must be a string and is required
            email: Yup.string()
                .email('Invalid email address') // Email must be a valid email format
                .required('Email is required'), // Email is required
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters') // Password must have at least 8 characters
                .required('Password is required'), // Password is required
            gender: Yup.string().required('Gender is required'), // Gender must be a string and is required
            birthDate: Yup.date()
                .max(new Date(), 'Birthdate cannot be in the future') // Birthdate cannot be in the future
                .required('Birth date is required'), // Birthdate is required
            image: Yup.mixed()
                .required('Image is required') // Image is required and must meet the following conditions
                .test(
                    'fileSize',
                    'The file is too large',
                    (value) => value.size < MB * 2, // File size must be less than 2MB
                )
                .test(
                    'fileType',
                    'Unsupported File Format',
                    (value) => VALID_TYPE.includes(value.type), // File must be of a valid type (jpg, jpeg, png)
                ),
        }),
        // Handle form submission asynchronously
        onSubmit: async (values) => {
            setIsLoading(true); // Set loading state to true to indicate processing
            try {
                const res = await FileParser(values.image); // Attempts to parse the image file
                const data = await UserService.registerUser({
                    // Call the UserService to register a new user with the form values, spreading them into the service's expected parameters
                    ...values,
                    image: res, // Include the parsed image data in the registration request
                });
                // Check if the user registration was successful based on the HTTP status code 200
                if (data.status === 200) {
                    toast.success('User registration successful'); // Display a success message to the user upon successful registration
                    setTimeout(() => navigate('/login'), 3000); // Redirect the user to the login page after a 3-second delay
                } else {
                    toast.warning('User already registered'); // Warn the user if the email is already registered
                }
                // Catch block to handle and display errors during the registration process
            } catch (error) {
                // Display an error message to the user in case of a failure
                toast.error('An error occurred. Please try again.');
            }
            setIsLoading(false); // Reset the loading state to false, indicating that the submission process is complete
            formik.resetForm(); // Reset the form after submission
        },
    });

    // Define a function to return the error message for a field if it has been touched and has errors
    const showError = (name) =>
        formik.errors[name] && formik.touched[name] && formik.errors[name];

    return (
        <>
            {/* Show loader animation when isLoading is true */}
            {isLoading && <PageLoaderAnimation />}
            <div className="mb-[23px] mt-[53px] grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div className="hidden lg:block">
                    <img
                        src={RegisterPageCover}
                        className="w-full object-cover"
                        alt="Register page cover"
                    />
                </div>
                <div className="lg:ml-[26px]">
                    <TitleHeader title="Register" />
                    <div>
                        <div className="border-primary mt-[52px] rounded-lg border-[0.5px]">
                            <form
                                onSubmit={formik.handleSubmit}
                                className="mb-4 rounded px-[26px]"
                            >
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Firstname:
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Insert firstname"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                    />
                                    <p className="text-xs italic text-red-500">
                                        {showError('firstName')}
                                    </p>
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Lastname:
                                    </label>

                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Insert lastname"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                    />
                                    <p className="text-xs italic text-red-500">
                                        {showError('lastName')}
                                    </p>
                                </div>
                                <div className="mt-[8px]">
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
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Password:
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Insert password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                    />
                                    <p className="text-xs italic text-red-500">
                                        {showError('password')}
                                    </p>
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Gender:
                                    </label>
                                    <select
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                        className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                    >
                                        <option value="" disabled>
                                            Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <p className="text-xs italic text-red-500">
                                        {showError('gender')}
                                    </p>
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Image:{' '}
                                    </label>
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
                                    <p className="text-xs italic text-red-500">
                                        {showError('image')}
                                    </p>
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Birthdate:
                                    </label>
                                    <input
                                        type="date"
                                        name="birthDate"
                                        value={formik.values.birthDate}
                                        onChange={formik.handleChange}
                                        className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                    />
                                    <p className="text-xs italic text-red-500">
                                        {showError('birthDate')}
                                    </p>
                                </div>
                                <div className="mt-[26px]">
                                    <button
                                        type="submit"
                                        className="bg-primary w-full rounded px-4 py-2 font-bold text-white hover:bg-blue-700"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <AuthRedirectMessage
                        message="Already have an account?"
                        linkText="Click here to Sign in."
                        redirectTo="/login"
                    />
                </div>
            </div>
        </>
    );
};

// Export the Register component as the default export for use in other parts of the application
export default Register;
