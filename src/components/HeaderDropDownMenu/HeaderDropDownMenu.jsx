// Import the Link component from react-router-dom for navigation without page reload
import { Link } from 'react-router-dom';

/**
 * HeaderDropDownMenu.jsx
 *
 * This component renders a dropdown menu for the header, providing navigation links for "My Posts" and "Profile".
 * It appears upon clicking the user account icon/first letter in the header and can be hidden by a click outside or on one of its links.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.dropdown - A state indicating whether the dropdown should be shown or hidden.
 * @param {Function} props.handleDropdown - A function to toggle the visibility of the dropdown menu.
 * @returns {JSX.Element} - Returns a div containing the dropdown menu with links for user navigation.
 */

const HeaderDropDownMenu = ({ dropdown, handleDropdown }) => {
    return (
        <div>
            <div
                className={`absolute right-10 z-10 mt-[50px] w-44 rounded-lg bg-white shadow ${
                    dropdown ? '' : 'hidden'
                }`}
            >
                <ul className="divide-y divide-gray-100 text-sm text-gray-700 dark:divide-gray-600 dark:bg-gray-700 dark:text-gray-200 ">
                    {/* Link to the user's posts */}
                    <li>
                        <Link
                            to="/posts"
                            onClick={handleDropdown}
                            className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            My posts
                        </Link>
                    </li>
                    {/* Link to the user's profile */}
                    <li>
                        <Link
                            to="/profile"
                            onClick={handleDropdown}
                            className="block p-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Export HeaderDropDownMenu component for accessibility throughout the application
export default HeaderDropDownMenu;
