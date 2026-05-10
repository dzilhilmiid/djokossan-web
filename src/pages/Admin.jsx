import "../styles/admin.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Admin() {

    const [book, setbook] = useState([])

    const navigate = useNavigate()

    const getbook = async () => {

        try {

            const response = await fetch("http://localhost:5000/book")

            const data = await response.json()

            setbook(data)

        } catch (err) {
            console.log(err)
        }

    }

    const deletebook = async (id) => {

        try {

            await fetch(`http://localhost:5000/book/${id}`, {
                method: "DELETE"
            })

            getbook()

        } catch (err) {
            console.log(err)
        }

    }

    const updateStatus = async (id, status) => {

        try {

            await fetch(`http://localhost:5000/book/${id}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    book_status: status
                })

            })

            await getbook()

        } catch (err) {
            console.log(err)
        }

    }

    const logout = () => {

        localStorage.removeItem("isLogin")

        navigate("/login")

    }

    useEffect(() => {

        const isLogin = localStorage.getItem("isLogin")

        if (!isLogin) {

            navigate("/login")

        }

        getbook()

    }, [])

    return (

        <div className="admin">

            <div className="admin-header">

                <h1>Admin Book</h1>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

            <table className="admin-table">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Room</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {book.map((book) => (

                        <tr key={book.id}>

                            <td>{book.id}</td>

                            <td>{book.fullname}</td>

                            <td>{book.room_type}</td>

                            <td>Rp {book.total}</td>

                            <td
                                className={
                                    book.book_status === "approved"
                                        ? "status-approved"
                                        : book.book_status === "rejected"
                                        ? "status-rejected"
                                        : "status-pending"
                                }
                            >
                                {book.book_status}
                            </td>

                            <td className="admin-action">

                                <button
                                    className="approve-btn"
                                    onClick={() =>
                                        updateStatus(book.id, "approved")
                                    }
                                >
                                    Approve
                                </button>

                                <button
                                    className="reject-btn"
                                    onClick={() =>
                                        updateStatus(book.id, "rejected")
                                    }
                                >
                                    Reject
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        deletebook(book.id)
                                    }
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )
}

export default Admin