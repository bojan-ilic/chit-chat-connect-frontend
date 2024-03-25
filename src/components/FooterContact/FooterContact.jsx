import { FaInstagram } from 'react-icons/fa';
import { SlSocialFacebook } from 'react-icons/sl';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FooterContact = () => {
    return (
        <div className="footer-contact">
            <h3 className="mb-2.5 font-bold uppercase">Connect with us</h3>
            <div className="flex flex-row justify-center gap-2">
                <Link
                    to="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent"
                >
                    <FaInstagram size={32} />
                </Link>
                <Link
                    to="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent"
                >
                    <SlSocialFacebook size={32} />
                </Link>
                <Link
                    to="https://www.google.com/maps?q=Knez+Mihaila+20,+Belgrade,+Serbia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent"
                >
                    <GrLocation size={32} />
                </Link>
                <Link
                    to="mailto:info@example.com"
                    className="text-primary hover:text-accent"
                >
                    <MdOutlineEmail size={32} />
                </Link>
                <Link
                    to="tel:+1234567890"
                    className="text-primary hover:text-accent"
                >
                    <BsTelephone size={32} />
                </Link>
            </div>
        </div>
    );
};

export default FooterContact;
