import TitleHeader from '../../components/TitleHeader/TitleHeader';
import AuthRedirectMessage from '../../components/AuthRedirectMessage/AuthRedirectMessage';

const Register = () => {
    return (
        <div className="lg:ml-[26px]">
            <TitleHeader title="Register" />
            <div>
                <div className="border-primary mt-[52px] rounded-lg border-[0.5px]">
                    <form className="border-primary mx-auto mt-[30px] flex w-[70%] flex-col border p-[10px]">
                        <label className="text-[15px] text-gray-600">
                            Firstname:
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Insert firstname"
                            className="border p-[7px]"
                        />

                        <label className="text-[15px] text-gray-600">
                            Lastname:
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Insert lastname"
                            className="border p-[7px]"
                        />

                        <label className="text-[15px] text-gray-600">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Insert email"
                            className="border p-[7px]"
                        />

                        <label className="text-[15px] text-gray-600">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Insert password"
                            className="border p-[7px]"
                        />

                        <label className="text-[15px] text-gray-600">
                            Gender:
                        </label>
                        <select name="gender" className="border p-[7px]">
                            <option value="" defaultChecked>
                                Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <label className="text-[15px] text-gray-600">
                            Image:
                        </label>
                        <input type="file" name="image" />

                        <label className="text-[15px] text-gray-600">
                            Birthdate:
                        </label>
                        <input
                            type="date"
                            name="birthDate"
                            className="border p-[7px]"
                        />

                        <button
                            type="submit"
                            className="bg-primary mt-[20px] rounded-lg p-[5px] text-white"
                        >
                            Register
                        </button>
                    </form>
                </div>
                <AuthRedirectMessage
                    message="Already have an account?"
                    linkText="Click here to Sign in."
                    redirectTo="/login"
                />
            </div>
        </div>
    );
};

export default Register;
