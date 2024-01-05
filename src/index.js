// Import the 'React' library/module
import React from 'react';

// Import 'ReactDOM' submodule from the 'react-dom' library
import ReactDOM from 'react-dom/client';

import './index.scss';

// Import the main application component
import App from './App';

// Imports necessary components from 'react-router-dom' for routing functionality
import {
    createBrowserRouter, // Function used to create a router instance
    RouterProvider, // Component that provides routing context to its descendants
} from 'react-router-dom';

// Import page components for application routes
import Home from './pages/Home/Home.jsx'; // Main landing page
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

// Define routes for the application
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Using the App component as the root element for routing
        errorElement: '<div>Error page</div>', // Specifying an error element
        children: [
            {
                path: '/',
                element: <Home />, // Render the Home component at the root URL '/'
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
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
        {/* Provide the router configuration to the RouterProvider */}
        <RouterProvider router={router} />
    </React.StrictMode>,
);
