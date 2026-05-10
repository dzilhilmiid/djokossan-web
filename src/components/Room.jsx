function Room() {
    return(
        <section className="room" id="room">
        <div className="room-header">
            <h1>Our Rooms</h1>
            <h3>Comfortable and affordable rooms designed for your needs</h3>
            <p>
                We offer a variety of clean, secure, and well-maintained rooms 
                to ensure a pleasant living experience. Choose the room that suits you best.
            </p>
        </div>
        <div className="room-list">
            <div className="room-card">
                <div className="card-photo">
                    <img src="./img/standard-room.jfif" alt="Standard Room" />
                </div>
                <div className="card-caption">
                    <h4>Standard Room</h4>
                    <p className="room-desc">
                        Perfect for students with essential facilities and a comfortable environment.
                    </p>
                    <div className="room-facility">
                        <span><i className="fa-solid fa-bed"></i> Bed</span>
                        <span><i className="fa-solid fa-fan"></i> Fan</span>
                        <span><i className="fa-solid fa-door-closed"></i> Cupboard</span>
                        <span><i className="fa-solid fa-bath"></i> Shared Bathroom</span>
                    </div>
                    <h3>Rp 350.000 <span>/ month</span></h3>
                    <div className="room-action">
                        <a href="#book">Book Now</a>
                    </div>
                </div>
            </div>
            <div className="room-card">
                <div className="card-photo">
                    <img src="./img/premium-room.jfif" alt="Premium Room" />
                </div>
                <div className="card-caption">
                    <h4>Premium Room</h4>
                    <p>
                        Enjoy more comfort with air conditioning and private bathroom facilities.
                    </p>
                    <div className="room-facility">
                        <span><i className="fa-solid fa-bed"></i> Bed</span>
                        <span><i className="fa-solid fa-fan"></i> Fan</span>
                        <span><i className="fa-solid fa-door-closed"></i> Cupboard</span>
                        <span><i className="fa-solid fa-bath"></i> Private Bathroom</span>
                    </div>
                    <h3>Rp 500.000<span>/ month</span></h3>
                    <div className="room-action">
                        <a href="#book">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Room