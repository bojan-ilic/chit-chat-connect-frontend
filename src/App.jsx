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

function App() {
    // Initialize useDispatch hook to enable dispatching actions to the Redux store
    const dispatch = useDispatch();

    // Use useEffect to dispatch restoreUser on component mount with user data from localStorage
    useEffect(() => {
        dispatch(restoreUser(JSON.parse(localStorage.getItem('sm_user'))));
        // The empty dependency array ensures this effect runs only once on mount
    }, []);

    return (
        <div className="container mx-auto mt-[20px] px-4">
            {/* Header component renders top navigation and branding */}
            <Header />
            {/* Outlet component renders the content of children elements specified in the router configuration in index.js file */}
            <Outlet />
            {/* Footer component renders bottom navigation and information */}
            <Footer />
        </div>
    );
}

export default App;
