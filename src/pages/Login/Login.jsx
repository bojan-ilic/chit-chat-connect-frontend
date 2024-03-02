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

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(true);

    const handleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const response = await UserService.loginUser(values);
                if (response.status === 200) {
                    toast.success('User successfully logged in');
                    localStorage.setItem('sm_token', response.data.token);
                    dispatch(loginUser(response.data.user));
                    setTimeout(() => navigate('/'), 2000);
                } else {
                    toast.warning('User not logged in');
                }
            } catch (error) {
                toast.error('An error occurred. Please try again.');
            } finally {
                setSubmitting(false);
            }
        },
    });

    // Define a function to return the error message for a field if it has been touched and has errors
    const showError = (name) =>
        formik.errors[name] && formik.touched[name] && formik.errors[name];

    return (
        <>
            {isLoading && <PageLoaderAnimation />}
            <div className="mb-[23px] mt-[15px] grid grid-cols-1 lg:mt-[53px] lg:grid-cols-2 lg:gap-2">
                <div>
                    <img
                        src={LoginPageCover}
                        className="object-cover"
                        alt="Login page cover"
                    />
                </div>
                <div className="lg:ml-[26px]">
                    <TitleHeader title="Login" />
                    <div className="border-primary mt-[23px] mt-[52px] w-full rounded-lg border-[0.5px]">
                        <form
                            onSubmit={formik.handleSubmit}
                            className=" mx-auto mt-[14px] flex flex-col p-[26px]"
                        >
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

export default Login;
