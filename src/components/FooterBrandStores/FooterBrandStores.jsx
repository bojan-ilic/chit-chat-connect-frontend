/**
 * FooterBrandStores.jsx
 *
 * This file defines the `FooterBrandStores` component, which is responsible for displaying
 * the brand's logo and download links for the application within the footer of the website.
 *
 * Displays two key components:
 * - 'FooterLogoBox' for branding with a navigational logo, linking back to the homepage.
 * - 'FooterDownloadLinks' for offering direct download links to the application.
 *
 * @returns {JSX.Element} A section within the footer dedicated to brand representation and app downloads.
 */

// Import the FooterLogoBox component for displaying the footer logo with navigation functionality
import FooterLogoBox from '../FooterLogoBox/FooterLogoBox';

// Import 'FooterDownloadLinks' component to display links for downloading the app
import FooterDownloadLinks from '../FooterDownloadLinks/FooterDownloadLinks';

const FooterBrandStores = () => {
    return (
        <div className="flex flex-col space-y-7">
            {/* 'FooterLogoBox' component renders the logo in the footer that redirects to the homepage when clicked */}
            <FooterLogoBox />

            {/* Render the 'FooterDownloadLinks' component, providing users with download options for the app */}
            <FooterDownloadLinks />
        </div>
    );
};

// Export 'FooterBrandStores' component for accessibility throughout the application
export default FooterBrandStores;
