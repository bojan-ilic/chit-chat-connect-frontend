// Import the site logo file
import Logo from '../../assets/ChitChatConnect-Logo-Footer.svg';
import { Link } from 'react-router-dom';
const FooterLogoBox = () => {
    return (
        <div>
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>
        </div>
    );
};

export default FooterLogoBox;
