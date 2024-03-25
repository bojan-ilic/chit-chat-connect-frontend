/**
 * FooterDownloadLinks.jsx
 * Displays clickable logos for the App Store and Google Play, allowing users to directly download the ChitChatConnect app.
 * @returns {JSX.Element} A section within the footer with links to download the app from the App Store and Google Play.
 */

// Import the logo image for the App Store to be used in the download link
import AppStoreLogo from '../../assets/ChitChatConnect-Footer-App-Store-Logo.png';

// Import the logo image for Google Play to be used in the download link
import GooglePlayLogo from '../../assets/ChitChatConnect-Footer-Play-Store-Logo.png';

// Import Link from React Router for route-based navigation without full page reloads
import { Link } from 'react-router-dom';

const FooterDownloadLinks = () => {
    return (
        <div className="flex flex-col space-y-3">
            {/* Link to the App Store */}
            <Link
                to="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={AppStoreLogo}
                    alt="Download on the App Store"
                    className="h-12"
                />
            </Link>

            {/* Link to Google Play */}
            <Link
                to="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={GooglePlayLogo}
                    alt="Download on the Google Play"
                    className="h-12"
                />
            </Link>
        </div>
    );
};

// Export 'FooterDownloadLinks' component for accessibility throughout the application
export default FooterDownloadLinks;
