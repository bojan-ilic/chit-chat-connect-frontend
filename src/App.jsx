// Import the Outlet component from 'react-router-dom' for rendering nested routes
import { Outlet } from 'react-router-dom';

// Import the Header component responsible for the site's top navigation and branding
import Header from './components/Header/Header';

// Import the Footer component responsible for the site's bottom navigation and information
import Footer from './components/Footer/Footer';

function App() {
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
