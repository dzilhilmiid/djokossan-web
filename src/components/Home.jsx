function Home() {
    return (
        <section className="home" id="home">
        <div className="home-above">
            <div className="home-left">
                <h1>DjoKossan</h1>
                <h3>
                    Looking for a comfortable place to stay?<span>Choose DjoKossan</span>
                </h3>
                <p>
                    A cozy, safe, peaceful, and strategically located boarding house at an affordable price.
                </p>
                <div className="action">
                    <a href="#room">View Place</a>
                    <a href="#book">Book Now</a>
                </div>
            </div>
            <div className="home-right">
                <img src="./img/logo.png" alt="Boarding House Image" />
            </div>
        </div>
        <div className="home-below">
            <div className="home-facility">
                <h3>Facilities</h3>
                <div className="home-facility-card">
                    <i className="fas fa-store"></i>
                    <p>Nearby Store</p>
                </div>
                <div className="home-facility-card">
                    <i className="fas fa-parking"></i>
                    <p>Parking Area</p>
                </div>
                <div className="home-facility-card">
                    <i className="fas fa-wifi"></i>
                    <p>Free WiFi</p>
                </div>
                <div className="home-facility-card">
                    <i className="fas fa-video"></i>
                    <p>CCTV</p>
                </div>
                <div className="home-facility-card">
                    <i className="fas fa-bolt"></i>
                    <p>Free Electricity</p>
                </div>
                <div className="home-facility-card">
                    <i className="fas fa-shirt"></i>
                    <p>Laundry Area</p>
                </div>
            </div>
            <div className="home-testimony">
                <h3>Testimonies</h3>
                <div className="home-testimony-card">
                    <img src="https://i.pravatar.cc/40" alt="foto" />
                    <p>⭐⭐⭐⭐⭐</p>   
                    <p>"The place is clean and comfortable. Perfect for students!"</p>
                    <h4>- Someone, Student</h4>
                </div>
                <div className="home-testimony-card">
                    <img src="https://i.pravatar.cc/41" alt="foto" />
                    <p>⭐⭐⭐⭐⭐</p>   
                    <p>"Great location and affordable price. Highly recommended."</p>
                    <h4>- Someone, Employee</h4>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home