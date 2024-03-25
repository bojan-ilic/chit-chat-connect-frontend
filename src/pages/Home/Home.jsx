// Import the 'useSelector' hook from Redux to enable component access to the Redux store state
import { useSelector } from 'react-redux';

// Import the HomePage image asset
import HomePage from '../../assets/Home-page.png';

// Import Link from React Router for route-based navigation without full page reloads
import { Link } from 'react-router-dom';

/**
 * Home.jsx
 *
 * This file defines the Home page component of the application.
 * It showcases different views for users based on their authentication status.
 * - For logged-in users, it presents a welcoming message along with links to explore latest posts and view their profile.
 * - For guests, it encourages registration or login with links to both actions.
 *
 * @returns {JSX.Element} A div containing either a personalized welcome back message and links for logged-in users,
 * or an invitation to join the community with registration and login links for guests.
 */

const Home = () => {
    // Check if the user is logged in by accessing the 'loginSuccess' state from the Redux store
    const isLoggedIn = useSelector((state) => state.userStore.loginSuccess);

    // Return statement defines the JSX layout for the Home page
    return (
        // Main div wrapper for the 'Home' page content
        <div>
            {/* Grid layout for responsive design, dividing the page into an image and content section */}
            <div className="mb-[23px] mt-[15px] grid grid-cols-1 lg:mt-[53px] lg:grid-cols-2 lg:gap-2">
                {/* Container for the home page image */}
                <div>
                    <img
                        src={HomePage}
                        alt="A welcoming community"
                        className="h-auto w-full object-cover"
                    />
                </div>
                {/* Container for the textual content next to the image */}
                <div className="mt-5 lg:ml-[26px] lg:mt-0">
                    {/* Conditional rendering based on whether the user is logged in or not */}
                    {isLoggedIn ? (
                        // Content displayed to logged-in users
                        <>
                            {/* Welcome message for returning users */}
                            <div className="border-primary flex h-[90px] items-center justify-center rounded-lg border ">
                                <h2 className="text-primary p-2.5 text-[24px] font-bold uppercase">
                                    Welcome back!
                                </h2>
                            </div>
                            {/* Section encouraging users to explore new posts and view their profile */}
                            <div className="border-primary mt-10 flex flex-col items-center justify-center rounded-lg border p-3 text-[16px] font-bold ">
                                <p>Explore what's new today</p>
                                <ul className="mt-3 flex flex-col items-center">
                                    {/* Link to the latest posts */}
                                    <li className="text-primary mb-2">
                                        <Link
                                            to="/posts"
                                            className="hover:text-accent"
                                        >
                                            Dive into Latest Posts
                                        </Link>
                                    </li>
                                    {/* Link to the user's profile page */}
                                    <li className="text-primary">
                                        <Link
                                            to="/profile"
                                            className="hover:text-accent"
                                        >
                                            View Your Profile & Contributions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        // Content displayed to guests
                        <>
                            {/* A message inviting visitors to join the community */}
                            <div className="border-primary flex h-[90px] items-center justify-center rounded-lg border ">
                                <h2 className="text-primary p-2.5 text-[24px] font-bold uppercase">
                                    Join Our Community!
                                </h2>
                            </div>
                            {/*Section encouraging visitors to sign up or log in */}
                            <div className="border-primary mt-10 flex flex-col items-center justify-center rounded-lg border p-3 text-[16px] font-bold ">
                                <p>
                                    Sign up today and start sharing your stories
                                </p>
                                <ul className="mt-3 flex flex-col items-center">
                                    {/* Link to the registration page */}
                                    <li className="text-primary mb-2">
                                        <Link to="/register">
                                            Click here to Register
                                        </Link>
                                    </li>
                                    {/* Link to the login page */}
                                    <li className="text-primary">
                                        <Link to="/login">
                                            Click here to Login
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// Export 'Home' page component for accessibility throughout the application
export default Home;
