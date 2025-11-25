import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import PokerAI from './pages/pokerai'
import Docs from './pages/Docs'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App 