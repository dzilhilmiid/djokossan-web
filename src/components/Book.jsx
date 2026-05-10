import { useState } from "react"
function Book() {

    const [price, setPrice] = useState(0)
    const [duration, setDuration] = useState(1)

    const total = price * duration

    const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        address: e.target.address.value,
        status: e.target.status.value,
        room_type: e.target.room_type.value,
        duration: duration,
        total: total,
        payment_method: e.target.payment_method.value
    }

    try {

        const response = await fetch("http://localhost:5000/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        const data = await response.json()

        console.log(data)

        alert("Booking berhasil disubmit!")

        e.target.reset()
        setPrice(0)
        setDuration(1)

    } catch (err) {
        console.log(err)
    }
}

    return(
            <section className="book" id="book">
        <div className="book-header">
            <h3>Get in touch and book your room now</h3>
        </div>
        <div className="book-container">
            <div className="book-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input id="fullname" type="text" name="fullname" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input id="address" type="text" name="address" placeholder="Address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select id="status" name="status">
                            <option value="">-- Select Status --</option>
                            <option value="student">Student</option>
                            <option value="worker">Worker</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="room_type">Select a Room</label>
                        <select id="room_type" name="room_type" onChange={(e) => setPrice(Number(e.target.value))}>
                            <option value="">-- Select a Room --</option>
                            <option value="350000">Standard Room - Rp 350.000</option>
                            <option value="500000">Premium Room - Rp 500.000</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duration (Month)</label>
                        <input id="duration" type="number" name="duration" min="1" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="total">Total Payment</label>
                        <input type="text" name="total" id="total" value={`Rp ${total.toLocaleString("id-ID")}`} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="payment_method">Payment Methods</label>
                        <select id="payment_method" name="payment_method">
                            <option value="">-- Select Payment Methods --</option>
                            <option>Cash</option>
                            <option>Transfer</option>
                            <option>QRIS</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bukti_pembayaran">Upload Proof of Payment</label>
                        <input id="bukti_pembayaran" type="file" name="bukti_pembayaran" accept="image/*,application/pdf" />
                    </div>
                    <button type="submit" onClick={() => console.log("Submit Sukses")}>
                        Send & Book
                    </button>
                </form>
                <p>
                    Once you submit the form, we will verify the payment and contact you via WhatsApp to confirm the order.                
                </p>
            </div>
        </div>
    </section>
    )
}

export default Book