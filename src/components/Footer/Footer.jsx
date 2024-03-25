// Import the 'FooterBrandStores' component to display brand-related links in the footer
import FooterBrandStores from '../FooterBrandStores/FooterBrandStores';

// Import the 'FooterAboutUs' component to provide information about the platform in the footer
import FooterAboutUs from '../FooterAboutUs/FooterAboutUs';

// Imports the 'FooterNavBar' component to display navigational links in the footer
import FooterNavBar from '../FooterNavBar/FooterNavBar';

// Imports the 'FooterContact' component to display contact information in the footer
import FooterContact from '../FooterContact/FooterContact';

/**
 * Footer component
 *
 * This component serves as the global footer for the application.
 * Displays four key components:
 * - 'FooterBrandStores' for brand store links,
 * - 'FooterAboutUs' for about us information
 * - 'FooterLogoBox' for branding with a navigational logo,
 * - 'FooterContact' for contact information.
 *
 * @returns {React.Component} A footer element containing navigation links, the application's logo, and contact information, structured within a responsive layout.
 * @type {React.FC}
 */
const Footer = () => {
    return (
        <footer className="border-primary mt-20 rounded-lg border p-5">
            <div className="container mx-auto">
                <div className="flex flex-col flex-wrap items-center justify-between gap-12 lg:flex-row lg:items-start lg:gap-4">
                    <div className="flex-1">
                        {/* 'FooterBrandStores' component displays brand store links */}
                        <FooterBrandStores />
                    </div>

                    <div className="max-w-xs flex-1 text-center lg:max-w-none">
                        {/* 'FooterAboutUs' component provides about us information to help users understand the platform's mission */}
                        <FooterAboutUs />
                    </div>

                    <div className="flex-1 text-center">
                        {/* 'FooterNavBar' component displays footer links */}
                        <FooterNavBar />
                    </div>

                    <div className="mb-3.5 flex-1 text-center lg:mb-0">
                        {/* 'FooterContact' component displays contact information */}
                        <FooterContact />
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Export Footer for accessibility throughout the application
export default Footer;
