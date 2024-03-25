/**
 * FooterContact.jsx
 *
 * This component displays various methods for users to connect with the platform,
 * including social media links and traditional contact options, enhanced with icons for visual appeal.
 *
 * @returns {JSX.Element} The rendered FooterContact component with social media and contact links.
 */

// Import icons for social media and contact methods
import { FaInstagram } from 'react-icons/fa'; // Instagram icon
import { SlSocialFacebook } from 'react-icons/sl'; // Facebook icon
import { GrLocation } from 'react-icons/gr'; // Location icon
import { MdOutlineEmail } from 'react-icons/md'; // Email icon
import { BsTelephone } from 'react-icons/bs'; // Telephone icon

// Import Link from React Router for route-based navigation without full page reloads
import { Link } from 'react-router-dom';

const FooterContact = () => {
    return (
        <div className="footer-contact">
            {/* Heading for the contact section */}
            <h3 className="mb-2.5 font-bold uppercase">Connect with us</h3>
            <div className="flex flex-row justify-center gap-2">
                {/* Link to the Instagram profile with icon */}
                <Link
                    to="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent"
                >
                    <FaInstagram size={32} />
                </Link>
                {/* Link to the Facebook page with icon */}
                <Link
                    to="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent"
                >
                    <SlSocialFacebook size={32} />
                </Link>
                {/* Link to Google Maps location with icon */}
                <Link
                    to="https://www.google.com/maps?q=Knez+Mihaila+20,+Belgrade,+Serbia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent"
                >
                    <GrLocation size={32} />
                </Link>
                {/* Mailto link for email communication with icon */}
                <Link
                    to="mailto:info@example.com"
                    className="text-primary hover:text-accent"
                >
                    <MdOutlineEmail size={32} />
                </Link>
                {/* Tel link for telephone communication with icon */}
                <Link
                    to="tel:+1234567890"
                    className="text-primary hover:text-accent"
                >
                    <BsTelephone size={32} />
                </Link>
            </div>
        </div>
    );
};

// Export 'FooterContact' component for accessibility throughout the application
export default FooterContact;
