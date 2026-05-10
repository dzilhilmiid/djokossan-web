import express from "express"
import cors from "cors"
import pool from "./db.js"

const app = express()

app.use(cors())
app.use(express.json())

app.post("/book", async (req, res) => {
    try {

        const {
            fullname,
            email,
            address,
            status,
            room_type,
            duration,
            total,
            payment_method
        } = req.body

        const result = await pool.query(
            `INSERT INTO book 
            (fullname, email, address, status, room_type, duration, total, payment_method)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
            RETURNING *`,
            [
                fullname,
                email,
                address,
                status,
                room_type,
                duration,
                total,
                payment_method
            ]
        )

        res.json(result.rows[0])

    } catch (err) {
        console.log(err.message)
    }
})

app.get("/book", async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM book ORDER BY id DESC"
        )

        res.json(result.rows)

    } catch (err) {
        console.log(err.message)
    }

})

app.delete("/book/:id", async (req, res) => {

    try {

        const { id } = req.params

        await pool.query(
            "DELETE FROM book WHERE id = $1",
            [id]
        )

        res.json("book deleted")

    } catch (err) {
        console.log(err.message)
    }

})

app.put("/book/:id", async (req, res) => {

    try {

        console.log("PUT jalan")

        const { id } = req.params

        const { book_status } = req.body

        console.log(id)
        console.log(book_status)

        const result = await pool.query(
            "UPDATE book SET book_status = $1 WHERE id = $2 RETURNING *",
            [book_status, id]
        )

        res.json(result.rows[0])

    } catch (err) {
        console.log(err.message)
    }

})

app.post("/login", async (req, res) => {

    try {

        const { username, password } = req.body

        const result = await pool.query(
            "SELECT * FROM admin WHERE username = $1 AND password = $2",
            [username, password]
        )

        if(result.rows.length > 0) {

            res.json({
                success: true,
                message: "Login berhasil"
            })

        } else {

            res.json({
                success: false,
                message: "Username atau password salah"
            })

        }

    } catch (err) {
        console.log(err.message)
    }

})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})