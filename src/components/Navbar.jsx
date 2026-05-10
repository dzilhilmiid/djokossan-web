function Navbar () {
    return (
        <header>
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="logo">DjoKossan</h1>

                <ul className="nav-links active">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#room">Rooms</a></li>
                    <li><a href="#book">Book</a></li>
                    <li><a href="/login" className="admin-link">Admin</a></li>
                </ul> 
                <button className="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    </header>
    )
}

export default Navbar