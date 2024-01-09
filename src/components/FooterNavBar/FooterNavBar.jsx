// Import NavLink component from React Router for route-based navigation with dynamic styling for active routes and no full page reloads
import { NavLink } from 'react-router-dom';

/**
 * FooterNavBar component generates a list of navigation links for the footer.
 * Uses React Router's NavLink for route-based navigation with dynamic styling.
 * @returns {JSX.Element} Rendered FooterNavBar component
 */

const FooterNavBar = () => {
    // Define navigation items for footer links
    const footerNavItems = [
        { to: '/privacy', text: 'Privacy' }, // Define a navigation item for 'Privacy' with the route '/privacy'
        { to: '/terms', text: 'Terms' }, // Define a navigation item for 'Terms' with the route '/terms'
        { to: '/careers', text: 'Careers' }, // Define a navigation item for 'Careers' with the route '/careers'
        { to: '/help', text: 'Help' }, // Define a navigation item for 'Help' with the route '/help'
    ];

    return (
        <nav className="flex flex-col">
            {footerNavItems.map((item, index) => (
                <NavLink key={index} to={item.to}>
                    {item.text}
                </NavLink>
            ))}
        </nav>
    );
};

export default FooterNavBar;
