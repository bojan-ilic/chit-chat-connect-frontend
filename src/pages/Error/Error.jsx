import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return (
            <main className="flex min-h-screen items-center justify-center text-center">
                <div className="border-primary rounded-lg border-[0.5px] p-[26px]">
                    <h3 className="text-primary mb-3 text-3xl uppercase">
                        Page not found
                    </h3>
                    <p className="mb-6 mt-2 font-bold">
                        Sorry! We can't find the page you're looking for.
                    </p>
                    <Link to="/" className="text-primary font-bold capitalize">
                        Back home
                    </Link>
                </div>
            </main>
        );
    } else {
        return (
            <main className="flex min-h-screen items-center justify-center text-center">
                <div className="border-primary rounded-lg border-[0.5px] p-[26px]">
                    <h3 className="text-primary mb-3 text-3xl uppercase">
                        Something went wrong
                    </h3>
                    <p className="mt-2 font-bold">
                        An error occurred. Please try again later.
                    </p>
                </div>
            </main>
        );
    }
};

export default Error;
