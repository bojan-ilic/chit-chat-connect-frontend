/**
 * FooterAboutUs.jsx
 * This component is part of the footer section and provides users with information about ChitChatConnect.
 * @returns {JSX.Element} Renders the "About Us" section within the footer, offering insights into the platform's mission.
 */

// Import Link from React Router for route-based navigation without full page reloads
import { Link } from 'react-router-dom';

const FooterAboutUs = () => {
    return (
        <div>
            <h3 className="mb-2 font-bold uppercase">About Us</h3>
            <p className="leading-relaxed">
                <Link
                    to={'/'}
                    className="text-primary hover:text-accent font-bold"
                >
                    ChitChatConnect
                </Link>{' '}
                is a friendly online community where you can share your
                thoughts, like and comment on posts, and connect with others
                through private or public chats, all designed to make staying in
                touch and meeting new friends easy and enjoyable.
            </p>
        </div>
    );
};

// Export 'FooterAboutUs' component for accessibility throughout the application
export default FooterAboutUs;
