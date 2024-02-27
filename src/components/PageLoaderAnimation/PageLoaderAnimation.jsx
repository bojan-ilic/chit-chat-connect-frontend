// Import ClipLoader component from react-spinners library for displaying loading animation
import { ClipLoader } from 'react-spinners';

/**
 * PageLoaderAnimation component
 *
 * This component renders a full-screen page loader animation using ClipLoader from react-spinners.
 * It utilizes the primary color defined in the Tailwind CSS configuration.
 */
const PageLoaderAnimation = () => {
    // Define primary color from Tailwind CSS configuration
    const primaryColor = '#51cf66';

    return (
        // Render a fixed-positioned flex container covering the entire viewport with a semi-transparent black background
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]">
            {/* Render ClipLoader with primary color and responsive sizes */}
            <ClipLoader color={primaryColor} size="10vw" />
        </div>
    );
};

// Export the PageLoaderAnimation component as the default export for use in other parts of the application
export default PageLoaderAnimation;
