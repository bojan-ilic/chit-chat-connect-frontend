import LoginPageCover from '../../assets/Login-page.png';
import TitleHeader from '../../components/TitleHeader/TitleHeader';
import AuthRedirectMessage from '../../components/AuthRedirectMessage/AuthRedirectMessage';

const Login = () => {
    return (
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
                    <form className=" mx-auto mt-[14px] flex flex-col p-[26px]">
                        <div className="mt-[10px]">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                            />
                            <p className="text-xs italic text-red-500"> </p>
                        </div>
                        <div className="relative mt-[26px] ">
                            <input
                                name="password"
                                placeholder="Password"
                                className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                            />
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
    );
};

export default Login;
