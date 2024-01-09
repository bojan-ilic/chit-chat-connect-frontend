// Import NavLink component from React Router for route-based navigation with dynamic styling for active routes and no full page reloads
import { NavLink } from 'react-router-dom';

const HeaderNavBar = () => {
    // Define navigation items array for header links
    const headerNavItems = [
        { to: '/', text: 'Home' }, // Define a navigation item for the 'Home' link with the route '/'
        { to: '/register', text: 'Register' }, // Define a navigation item for the 'Register' link with the route '/register'
        { to: '/login', text: 'Login' }, // Define a navigation item for the 'Login' link with the route '/login'
    ];

    return (
        <nav className="flex gap-3">
            {headerNavItems.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.to}
                    className="navbar_link bg-primary hidden rounded-lg px-6 px-[14px] py-2 py-[7px] text-white lg:ml-auto lg:mr-3 lg:inline-block"
                >
                    {item.text}
                </NavLink>
            ))}
        </nav>
    );
};

export default HeaderNavBar;
