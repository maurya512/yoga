import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Service from './pages/Service/Service'

const App = () => {
  return (
    // ! Switch is replaced by Routes that lets the browser detect the correct url
    <Routes>
      {/* defines the path and the component that will be rendered when that path is declared */}
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/service" element={<Service />} />
    </Routes>
  )
}

export default App
