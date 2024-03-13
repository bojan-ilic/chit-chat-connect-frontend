// Import the site logo file
import Logo from '../../assets/ChitChatConnect-Logo.svg';

// Import Link from React Router for route-based navigation without full page reloads
import { Link } from 'react-router-dom';

const LogoBox = () => {
    return (
        <Link to="/" className="text-3xl font-bold leading-none">
            <img src={Logo} alt="Logo" />
        </Link>
    );
};

export default LogoBox;
