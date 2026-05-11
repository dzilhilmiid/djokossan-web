import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Room from "./components/Room"
import Book from "./components/Book"
import Footer from "./components/Footer"

import Admin from "./pages/Admin"
import Login from "./pages/Login"

function App() {

  return (

    <BrowserRouter basename="/djokossan-web">

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Room />
              <Book />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App