import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// to enable the dropdown in navbar
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Service from './pages/Service/Service'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* defines the path and the component that will be rendered when that path is declared */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        {/* redirects the user to the homepage if an invalid path is hit */}
        {/* <useNavigate to="/" /> */}
      </Routes>
    </>
  )
}

export default App
