// Import the footer logo image from the assets folder
import Logo from '../../assets/ChitChatConnect-Logo-Footer.svg';

// Import Link from React Router for route-based navigation without full page reloads
import { Link } from 'react-router-dom';

/**
 * FooterLogoBox component
 *
 * This component is responsible for displaying the logo within the footer of the application.
 * When clicked, navigates the user back to the homepage.
 *
 * @returns {React.Component} A div containing the logo image wrapped in a `Link` component, which redirects to the homepage upon click.
 * @type {React.FC}
 */
const FooterLogoBox = () => {
    return (
        <div>
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>
        </div>
    );
};

// Export FooterLogoBox for accessibility throughout the application
export default FooterLogoBox;
