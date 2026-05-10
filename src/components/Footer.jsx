function Footer() {
    return(
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-brand">
                <h2>DjoKossan</h2>
                <p>
                    Comfortable, secure, and affordable boarding rooms 
                    designed to give you the best living experience.
                </p>
            </div>
            <div className="footer-links">
                <h3>Navigation</h3>
                <a href="#home">Home</a>
                <a href="#room">Rooms</a>
                <a href="#book">Booking</a>
            </div>
            <div className="footer-contact">
                <h3>Contact</h3>
                <p><i className="fa-solid fa-location-dot"></i> Jember, Indonesia</p>
                <p><i className="fa-solid fa-phone"></i> +62 812 3456 7890</p>
                <p><i className="fa-solid fa-envelope"></i> djokossan@gmail.com</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2026 DjoKossan. All Rights Reserved.</p>
        </div>
    </footer>
    )
}

export default Footer