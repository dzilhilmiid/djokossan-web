import "../styles/login.css"
import { useState } from "react"

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e) => {

    e.preventDefault()

    try {

        const response = await fetch("http://localhost:5000/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                password
            })

        })

        const data = await response.json()

        console.log(data)

        if(data.success) {

            localStorage.setItem("isLogin", "true")
            window.location.href = "/admin"

        } else { 

            alert(data.message)

        }

    } catch (err) {

        console.log(err)

    }

}

    return (

        <div className="login">

            <form onSubmit={handleLogin} className="login-form">

                <h1>Admin Kos</h1>
                <p>Login as administrator</p>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    )
}

export default Login