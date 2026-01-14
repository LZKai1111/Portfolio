import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects'
import About from './pages/About.jsx'


function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
