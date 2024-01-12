// Import the 'React' library/module
import React from 'react';

// Import 'ReactDOM' submodule from the 'react-dom' library
import ReactDOM from 'react-dom/client';

// Import global styles
import './index.scss';

// Import the main application component
import App from './App';

// Imports necessary components from 'react-router-dom' for routing functionality
import {
    createBrowserRouter, // Function used to create a router instance
    RouterProvider, // Component that provides routing context to its descendants
} from 'react-router-dom';

// Imports the 'Provider' component from 'react-redux' to globally provide access to the Redux store for all components
import { Provider } from 'react-redux';

// Import the Redux store configuration
import store from './store/store';

// Import page components for application routes
import Home from './pages/Home/Home.jsx'; // Main landing page
import Register from './pages/Register/Register'; // Import Register page component
import Login from './pages/Login/Login'; // Import Login page component
import Error from './pages/Error/Error'; // Import Error page component

/**
 * @file Entry point for the Chit-Chat-Connect React application.
 *
 * This file coordinates the rendering of the application, handles routing, and manages the global state with Redux.
 * It imports necessary libraries, components, and configurations, including React, ReactDOM, React Router, and Redux.
 * The application routes are defined, and the Redux store is connected globally using the 'Provider' component.
 * Renders the main application within a 'RouterProvider' for efficient route handling.
 */

// Define routes for the application
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Using the App component as the root element for routing
        errorElement: <Error />, // Render the Error component for any encountered errors
        children: [
            {
                path: '/',
                element: <Home />, // Render the Home component at the root URL '/'
            },
            {
                path: '/register',
                element: <Register />, // Render the Register component at '/register'
            },
            {
                path: '/login',
                element: <Login />, // Render the Login component at '/login'
            },
        ],
    },
]);

// Create a root for rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application inside RouterProvider for route handling
root.render(
    // Wrapping with StrictMode for additional development checks
    <React.StrictMode>
        {/* Wrap the entire app with Redux Provider, granting global access to the application state for all components. */}
        <Provider store={store}>
            {/* Provide the router configuration to the RouterProvider */}
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
