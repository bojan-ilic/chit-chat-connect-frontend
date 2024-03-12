// Import 'Navigate' component to redirect users
import {Navigate} from "react-router-dom";

/**
 * AuthGuardian.js
 *
 * This utility component is responsible for protecting routes that require user authentication.
 * It checks if a user is logged in by verifying the presence of 'sm_user' in localStorage.
 * If the user is authenticated, it renders the child components; otherwise, it redirects to the login page.
 *
 * @param {Object} props Contains children components that are protected by the guard.
 * @returns {JSX.Element} Rendered children components or redirection to the login page.
 */
const AuthGuardian = ({children}) => {
	// Function to check if user data is present in localStorage
	function isLoggedUser() {
		if (localStorage.hasOwnProperty('sm_user')) {
			return localStorage.getItem('sm_user')
		}
	}

	// Conditional rendering based on user authentication
	return isLoggedUser() ? children : <Navigate to={'/login'} />
};

// Export AuthGuardian utility for route protection and conditional navigation
export default AuthGuardian;