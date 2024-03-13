// Import HeaderLogoBox component responsible for displaying the site logo
import HeaderLogoBox from '../HeaderLogoBox/HeaderLogoBox';

// Import HeaderNavBar component responsible for rendering the navigation bar
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';

// Import HeaderAccount component responsible for managing account-related elements
import HeaderAccount from '../HeaderAccount/HeaderAccount';

// Import useSelector hook from Redux to access the application state
import { useSelector } from 'react-redux';

/**
 * Header.jsx
 *
 * This component renders the application's header, including the logo, navigation bar, and user account section.
 * It dynamically adjusts to display the user account section based on the login state.
 *
 * @returns {JSX.Element} A header element containing the logo, navigation links, and, if logged in, the user account section.
 */
const Header = () => {
    // Access 'user' and 'loginSuccess' state from the Redux store to determine if the user is logged in
    const { user, loginSuccess } = useSelector((state) => state.userStore);
    // Determine if the user is logged in based on 'loginSuccess' and presence of 'user' data
    const isLoggedIn = loginSuccess && Object.keys(user).length > 0;

    return (
        // Header container with conditional rendering for the account section
        <header className="border-primary relative flex items-center justify-between rounded-lg border bg-white px-4 py-4">
            {/* 'HeaderLogoBox' component renders the site's logo */}
            <HeaderLogoBox />
            {/* Render the navigation bar, passing in login state */}
            <div className="mx-4 flex flex-grow items-center justify-center">
                <HeaderNavBar isLoggedIn={isLoggedIn} />
            </div>
            {/* Conditionally render the user account section if logged in */}
            {isLoggedIn && <HeaderAccount />}
        </header>
    );
};

// Export 'Header' component for accessibility throughout the application
export default Header;
