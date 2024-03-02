// FooterNavBar component for footer links
import FooterNavBar from '../FooterNavBar/FooterNavBar';

// FooterContact component for contact information
import FooterContact from '../FooterContact/FooterContact';

const Footer = () => {
    return (
        <footer className="border-primary mt-20 rounded-lg border bg-white p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* FooterNavBar component displays footer links */}
                    <FooterNavBar />
                    {/* FooterContact component displays contact information */}
                    <FooterContact />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
