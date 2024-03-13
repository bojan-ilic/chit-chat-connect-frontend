// Import the site logo file
import Logo from '../../assets/ChitChatConnect-Logo.svg';

// Import Link from React Router for route-based navigation without full page reloads
import { Link } from 'react-router-dom';

/**
 * HeaderLogoBox.jsx
 *
 * This component renders the logo box in the header of the application.
 * It displays the application's logo and links back to the home page when clicked.
 *
 * @returns {JSX.Element} A Link component wrapping the logo, ensuring the user is navigated to the home page on click.
 */
const HeaderLogoBox = () => {
    return (
        // Link to the home page with the application's logo
        <Link to="/" className="text-3xl font-bold leading-none">
            <img src={Logo} alt="Logo" />
        </Link>
    );
};

// Export HeaderLogoBox component for accessibility throughout the application
export default HeaderLogoBox;
