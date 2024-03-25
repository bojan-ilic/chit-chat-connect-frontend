// Import NavLink component from React Router for route-based navigation with dynamic styling for active routes and no full page reloads
import { NavLink } from 'react-router-dom';

/**
 * HeaderNavBar.jsx
 *
 * This component renders the navigation bar for the header, providing links based on the user's login status.
 * It dynamically adjusts to display relevant navigation options, enhancing the user experience based on authentication state.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.isLoggedIn - Indicates if the user is logged in or not.
 * @returns {JSX.Element} - Returns a navigation bar with links for Home, Posts, Ads (if logged in), or Register and Login (if not logged in).
 */

const HeaderNavBar = ({ isLoggedIn }) => {
    return (
        // Navigation container
        <nav className="flex gap-3">
            <NavLink
                to="/"
                className="navbar_link bg-primary hover:bg-accent hidden rounded-lg px-[14px] py-[7px] text-white lg:ml-auto lg:mr-3 lg:inline-block"
            >
                Home
            </NavLink>
            {/* Conditional rendering based on login status */}
            {isLoggedIn ? (
                // If the user is logged in, show links to 'Posts' and 'Ads'
                <>
                    <NavLink
                        to="/posts"
                        className="navbar_link bg-primary hover:bg-accent hidden rounded-lg px-[14px] py-[7px] text-white lg:ml-auto lg:mr-3 lg:inline-block"
                    >
                        Posts
                    </NavLink>
                    <NavLink
                        to="/ads"
                        className="navbar_link bg-primary hover:bg-accent hidden rounded-lg px-[14px] py-[7px] text-white lg:ml-auto lg:mr-3 lg:inline-block"
                    >
                        Ads
                    </NavLink>
                </>
            ) : (
                // If the user is not logged in, show 'Register' and 'Login' links
                <>
                    <NavLink
                        to="/register"
                        className="navbar_link bg-primary hover:bg-accent hidden rounded-lg px-[14px] py-[7px] text-white lg:ml-auto lg:mr-3 lg:inline-block"
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="navbar_link bg-primary hover:bg-accent hidden rounded-lg px-[14px] py-[7px] text-white lg:ml-auto lg:mr-3 lg:inline-block"
                    >
                        Login
                    </NavLink>
                </>
            )}
        </nav>
    );
};

// Export 'HeaderNavBar' component for accessibility throughout the application
export default HeaderNavBar;
