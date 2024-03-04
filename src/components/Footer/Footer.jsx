// Import FooterNavBar component for footer links
import FooterNavBar from '../FooterNavBar/FooterNavBar';

// Import FooterContact component for contact information
import FooterContact from '../FooterContact/FooterContact';

// Import the FooterLogoBox component for displaying the footer logo with navigation functionality
import FooterLogoBox from '../FooterLogoBox/FooterLogoBox';

/**
 * Footer component
 *
 * This component serves as the global footer for the application.
 * Displays three key components:
 * - FooterNavBar for navigation links,
 * - FooterLogoBox for branding with a navigational logo,
 * - FooterContact for contact information.
 *
 * @returns {React.Component} A footer element containing navigation links, the application's logo, and contact information, structured within a responsive layout.
 * @type {React.FC}
 */
const Footer = () => {
    return (
        <footer className="border-primary mt-20 rounded-lg border bg-white p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* FooterNavBar component displays footer links */}
                    <FooterNavBar />
                    {/* FooterLogoBox component renders the logo in the footer that redirects to the homepage when clicked */}
                    <FooterLogoBox />
                    {/* FooterContact component displays contact information */}
                    <FooterContact />
                </div>
            </div>
        </footer>
    );
};

// Export Footer for accessibility throughout the application
export default Footer;
