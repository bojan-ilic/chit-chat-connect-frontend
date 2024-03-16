// Import the Outlet component from 'react-router-dom' for rendering nested routes
import { Outlet } from 'react-router-dom';

// Import the Header component responsible for the site's top navigation and branding
import Header from './components/Header/Header';

// Import the Footer component responsible for the site's bottom navigation and information
import Footer from './components/Footer/Footer';

// Import useEffect hook from React for managing side effects in functional components
import { useEffect } from 'react';

// Import useDispatch hook from react-redux for dispatching actions to the store
import { useDispatch } from 'react-redux';

// Import restoreUser action from userSlice to reload user state from storage on app load
import { restoreUser } from './store/userSlice';

// Import the ToastContainer component from 'react-toastify' to enable toast notifications in the application
import { ToastContainer } from 'react-toastify';

// Import the CSS for react-toastify to ensure toast notifications are styled correctly
import 'react-toastify/dist/ReactToastify.css';

// Import axios for HTTP request functionality with RESTful APIs
import axios from 'axios';

// Set the API base URL based on the environment
axios.defaults.baseURL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000/api'
        : 'https://backend.chit-chat-connect.bojanilic.net/api';

// Use an interceptor to attach the token to every request if available
axios.interceptors.request.use((config) => {
    if (localStorage.hasOwnProperty('sm_token')) {
        config.headers.authorization = localStorage.getItem('sm_token');
    }
    return config;
});

const App = () => {
    useEffect(() => {
        // Log the current environment and Axios base URL for debugging
        console.log('Current Environment:', process.env.NODE_ENV);
        console.log('Axios Base URL:', axios.defaults.baseURL);
    }, []);

    // Initialize useDispatch hook to enable dispatching actions to the Redux store
    const dispatch = useDispatch();

    // Use useEffect to dispatch restoreUser on component mount with user data from localStorage
    useEffect(() => {
        dispatch(restoreUser(JSON.parse(localStorage.getItem('sm_user'))));
        // The empty dependency array ensures this effect runs only once on mount
    }, []);

    return (
        <div className="container mx-auto mb-[2rem] mt-[20px] px-4">
            {/* Header component renders top navigation and branding */}
            <Header />
            {/* Outlet component renders the content of children elements specified in the router configuration in index.js file */}
            <Outlet />
            {/* Include the ToastContainer component in the JSX to provide a container for displaying toast notifications */}
            <ToastContainer />
            {/* Footer component renders bottom navigation and information */}
            <Footer />
        </div>
    );
};

export default App;
