// Import the Outlet component from 'react-router-dom' for rendering nested routes
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="container mx-auto mt-[20px] px-4">
            <h1>APP</h1>
            {/* Outlet component renders the content of children elements specified in the router configuration in index.js file */}
            <Outlet />
        </div>
    );
}

export default App;
