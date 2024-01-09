const FooterContact = () => {
    return (
        <div className="footer-contact">
            <p>
                Address:
                <a
                    href="https://www.google.com/maps?q=Knez+Mihaila+20,+Belgrade,+Serbia"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    123 Street, City, Country
                </a>
            </p>
            <p>
                Email: <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p>
                Phone: <a href="tel:+1234567890">+1234567890</a>
            </p>
        </div>
    );
};

export default FooterContact;
