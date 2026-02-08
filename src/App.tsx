import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import PokerAI from './pages/pokerai'
import Docs from './pages/Docs'
import WebGL from "./WebGL/App"
import Privacy from './pages/privacy'
import Terms from './pages/terms'
import Contact from './pages/contactus'
import NotFound from './pages/404'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/pokerai" element={<PokerAI />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/detris" />
        <Route path="/webgl" element={<WebGL />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App 