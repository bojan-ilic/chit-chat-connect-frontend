// Import LogoBox component responsible for displaying the site logo
import LogoBox from '../LogoBox/LogoBox';

// Import HeaderNavBar component responsible for rendering the navigation bar
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';

// Import HeaderAccount component responsible for managing account-related elements
import HeaderAccount from '../HeaderAccount/HeaderAccount';

const Header = () => {
    return (
        <header className="border-primary relative flex items-center justify-between border bg-white px-4 py-4">
            {/* LogoBox component renders the site's logo */}
            <LogoBox />
            <div className="mx-4 flex flex-grow items-center justify-center">
                {/* HeaderNavBar component renders the navigation bar */}
                <HeaderNavBar />
            </div>
            {/* HeaderAccount component manages account-related elements */}
            <HeaderAccount />
        </header>
    );
};

export default Header;
