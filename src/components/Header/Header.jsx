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
            <div className="ml-4 flex flex w-full justify-between">
                {/* HeaderNavBar component renders the navigation bar */}
                <HeaderNavBar />
                {/* HeaderAccount component manages account-related elements */}
                <HeaderAccount />
            </div>
        </header>
    );
};

export default Header;
