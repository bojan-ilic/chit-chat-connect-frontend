import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FileParser } from '../../utils/FileParser';
import UserService from '../../services/userService';
import { toast } from 'react-toastify';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import AuthRedirectMessage from '../../components/AuthRedirectMessage/AuthRedirectMessage';
import RegisterPageCover from '../../assets/Register-page.png';
import PageLoaderAnimation from '../../components/PageLoaderAnimation/PageLoaderAnimation';

const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false); // State to manage loading state

    const VALID_TYPE = ['image/jpeg', 'image/png', 'image/jpg'];
    let KB = 1024;
    let MB = KB * 1024;

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            image: '',
            birthDate: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Field is required'),
            lastName: Yup.string().required('Field is required'),
            email: Yup.string().required('Field is required'),
            password: Yup.string().required('Field is required'),
            gender: Yup.string().required('Field is required'),
            birthDate: Yup.string().required('Field is required'),
            image: Yup.mixed()
                .required('Field is required')
                .test(
                    'fileSize',
                    'Wrong file size',
                    (value) => value.size < MB * 2,
                )
                .test('fileType', 'Wrong file type', (value) =>
                    VALID_TYPE.includes(value.type),
                ),
        }),
        onSubmit: async (values) => {
            setIsLoading(true); // Set loading state to true
            try {
                const res = await FileParser(values.image);
                const data = await UserService.registerUser({
                    ...values,
                    image: res,
                });
                if (data.status === 200) {
                    toast.success('User registration successful');
                    setTimeout(() => navigate('/login'), 3000);
                } else {
                    toast.warning('User already registered');
                }
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);

            formik.resetForm();
            // console.log(values);
        },
    });

    const showError = (name) =>
        formik.errors[name] && formik.touched[name] && formik.errors[name];

    return (
        <>
            {/* Conditionally render PageLoaderAnimation when loading state is true */}
            {isLoading && <PageLoaderAnimation />}
            <div className="mb-[23px] mt-[53px] grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div className="hidden lg:block">
                    <img
                        src={RegisterPageCover}
                        className="w-full object-cover"
                        alt="reg-image"
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
                                        Firstname:{' '}
                                        <span className="text-[14px] text-red-600">
                                            {showError('firstName')}
                                        </span>
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
                                        {' '}
                                        {showError('firstName')}
                                    </p>
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Lastname:{' '}
                                        <span className="text-[14px] text-red-600">
                                            {showError('lastName')}
                                        </span>
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
                                        {' '}
                                        {showError('lastName')}
                                    </p>
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Email:{' '}
                                        <span className="text-[14px] text-red-600">
                                            {showError('email')}
                                        </span>
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
                                        {' '}
                                        {showError('email')}
                                    </p>
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Password:{' '}
                                        <span className="text-[14px] text-red-600">
                                            {showError('password')}
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Insert password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                    />
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Gender:{' '}
                                        <span className="text-[14px] text-red-600">
                                            {showError('gender')}
                                        </span>
                                    </label>
                                    <select
                                        name="gender"
                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                        className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                    >
                                        <option value="" defaultChecked>
                                            Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Image:{' '}
                                        <span className="text-[14px] text-red-600">
                                            {showError('image')}
                                        </span>
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
                                        {' '}
                                        {showError('image')}
                                    </p>
                                </div>
                                <div className="mt-[8px]">
                                    <label className="text-[15px] text-gray-600">
                                        Brithdate:{' '}
                                        <span className="text-[14px] text-red-600">
                                            {showError('birthDate')}
                                        </span>
                                    </label>
                                    <input
                                        type="date"
                                        name="birthDate"
                                        value={formik.values.birthDate}
                                        onChange={formik.handleChange}
                                        className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                                    />
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

export default Register;
