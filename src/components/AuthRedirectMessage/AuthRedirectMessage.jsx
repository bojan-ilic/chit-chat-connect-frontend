// Import Link from React Router for route-based navigation without full page reloads
import { Link } from 'react-router-dom';

/**
 * AuthRedirectMessage component displays a message with a link for navigation.
 * It renders a message block containing a title and a link to navigate users
 * between different authentication-related pages, such as login and registration.
 *
 * @param {string} message - The message displayed in the component.
 * @param {string} redirectTo - The URL link where users will be redirected upon clicking.
 * @param {string} linkText - The text displayed within the link for redirection.
 * @returns {JSX.Element} - Returns a styled div containing the provided message and a Link component for redirection.
 */

const AuthRedirectMessage = ({ message, linkText, redirectTo }) => {
    return (
        <div className="border-primary mt-[30px] flex h-[90px] flex-col items-center justify-center rounded-lg border font-bold">
            <p>{message}</p>
            <Link to={redirectTo} className="text-primary hover:text-accent">
                {linkText}
            </Link>
        </div>
    );
};
export default AuthRedirectMessage;
