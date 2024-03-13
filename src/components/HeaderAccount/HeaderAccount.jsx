// Import useState hook for component state management
import { useState } from 'react';
// Import 'useDispatch' for dispatching actions to Redux store, 'useSelector' for accessing Redux state
import { useDispatch, useSelector } from 'react-redux';
// Import 'useNavigate' to redirect the user to specific routes, like the login page after logging out
import { useNavigate } from 'react-router-dom';
// Import 'logoutUser' action from user slice for logging out functionality
import { logoutUser } from '../../store/userSlice';
// Import 'HeaderDropDownMenu' component for displaying the dropdown menu
import HeaderDropDownMenu from '../HeaderDropDownMenu/HeaderDropDownMenu';

/**
 * HeaderAccount.jsx
 *
 * This component renders the user's account section in the header, including their profile image or initial,
 * a logout button, and a dropdown menu for additional navigation options like viewing their posts or profile settings.
 *
 * @returns {JSX.Element} - Returns a div containing the user's profile image or initial, and a logout button,
 * along with the HeaderDropDownMenu for additional navigation.
 */
const HeaderAccount = () => {
    // Retrieve functions for dispatching actions to the Redux store and navigating routes
    const dispatch = useDispatch();
    // Initialize 'navigate' to use for redirecting the user after actions, e.g., to the login page post-logout
    const navigate = useNavigate();
    // Access the current user state from the Redux store
    const { user } = useSelector((state) => state.userStore);
    // State to toggle dropdown visibility
    const [dropdown, setDropdown] = useState(false);

    // Function to toggle the visibility of the dropdown menu
    const toggleDropdown = () => setDropdown(!dropdown);

    // Function to handle logout action, dispatches 'logoutUser', navigates to login page, and hides dropdown
    const handleLoggOut = () => {
        dispatch(logoutUser()); // Dispatch the logout action to update the Redux state, effectively logging the user out
        navigate('/login'); // Navigate the user to the login page after logout
        setDropdown(false); // Close the dropdown when logging out
    };

    return (
        <div className="relative flex gap-3">
            <div onClick={toggleDropdown} className="flex cursor-pointer">
                {user && user.image ? (
                    // If user has a profile image, display it
                    <img
                        src={user.image}
                        alt="Profile"
                        className="mr-3 h-[40px] w-[40px] cursor-pointer rounded-full object-cover"
                    />
                ) : (
                    // If no profile image, display a div with the user's first initial
                    <div className="bg-primary mr-3 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full text-white">
                        {user.firstName?.charAt(0)}
                    </div>
                )}
                {/* Include the dropdown menu, passing the current state and the toggle function */}
                <HeaderDropDownMenu
                    dropdown={dropdown}
                    handleDropdown={toggleDropdown}
                />
                {/* Logout button, triggers the logout function */}
                <button onClick={handleLoggOut}>Logout</button>
            </div>
        </div>
    );
};

// Export 'HeaderAccount' component for accessibility throughout the application
export default HeaderAccount;
